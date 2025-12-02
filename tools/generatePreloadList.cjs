// tools/generatePreloadList.cjs

const fs = require("fs");
const path = require("path");

// 要掃描的資料夾：public/images
const imagesDir = path.join(process.cwd(), "public", "images");

// 要接受的圖片副檔名
const exts = [".png", ".jpg", ".jpeg", ".webp", ".gif"];

// 這裡會存放所有的圖片路徑（例如："/images/index/xxx.png"）
let results = [];

// 遞迴掃描資料夾
function scanFolder(folder, basePath) {
  const files = fs.readdirSync(folder);

  files.forEach((file) => {
    const fullPath = path.join(folder, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // 如果是資料夾，繼續往下掃描
      scanFolder(fullPath, path.posix.join(basePath, file));
    } else {
      const ext = path.extname(file).toLowerCase();
      if (exts.includes(ext)) {
        // 這裡組出瀏覽器可用的路徑：例如 "/images/index/banner.webp"
        const publicPath = path.posix.join(basePath, file);
        results.push(publicPath);
      }
    }
  });
}

// 從 /public/images 開始掃描
scanFolder(imagesDir, "/images");

// 把結果寫成 src/preloadImages.js
const outputFile = path.join(process.cwd(), "src", "preloadImages.js");

const fileContent =
  `// 🚧 此檔案為自動產生，請勿手動修改\n` +
  `export const preloadImages = ${JSON.stringify(results, null, 2)};\n`;

fs.writeFileSync(outputFile, fileContent, "utf8");

console.log("✅ 已產生 src/preloadImages.js，共", results.length, "張圖片");
