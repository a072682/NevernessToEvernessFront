import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//#region
//#endregion

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
//console.log("基本網址",BASE_URL);

export const newsSlice = createSlice({
    name: "news",
    initialState: {
        news:[
            {
                id:1,
                title:"「收容測試」測試說明與常見問題解答",
                time:"2025-06-10",
                imgData:"/images/news/nte250616_01.png",
                class:"system",
                content: [
                    {
                        type: "section",
                        title: "活動說明：",
                        contents: [
                            {
                                type: "paragraph",
                                lines: [
                                    "異環「收容測試」將於7月3日正式開始！我們整理了測試相關詳細的說明與常見問題解答，請鑒定師們查閱。"
                                ]
                            }
                        ]
                    },
                    {
                        type: "section",
                        title: "測試資訊",
                        contents: [
                            {
                                type: "list",
                                items: [
                                    "測試類型：限量不計費刪檔測試",
                                    "測試平台：PC (Windows)",
                                    "遊戲語言：英文、日文、簡體中文、繁體中文",
                                    "配音語言：英文、日文、中文"
                                ]
                            }
                        ]
                    },
                    {
                        type: "section",
                        title: "招募時間",
                        contents: [
                            {
                                type: "paragraph",
                                lines: [
                                    "招募開啟時間：2025年5月15日10:00（UTC+8）",
                                    "測試招募結束時間將在後續另行通知，請想參與測試的鑒定師及時前往官網預約並填寫招募問卷，並持續關注官方社群發佈的相關資訊。"
                                ]
                            }
                        ]
                    },
                    {
                        type: "section",
                        title: "測試時間",
                        contents: [
                            {
                                type: "list",
                                items: [
                                    "測試開啟時間：2025年7月3日09:00（UTC+8）",
                                    "測試結束時間：2025年7月16日23:59（UTC+8）",
                                    "預下載開放時間：2025年7月2日10:00（UTC+8）",
                                    "*測試資格通知及具體預下載方式請見後續官方社群發佈的通知。"
                                ]
                            }
                        ]
                    },
                    {
                    type: "section",
                    title: "設備要求",
                    contents: [
                        {
                            type: "list",
                            items: [
                                "◆系統◆",
                                "Windows 10 64位及以上",
                                "◆CPU◆",
                                "推薦>> 12th Gen Intel®Core™ i7-12700及以上",
                                "低>> 10th Gen Intel®Core™i7-10700",
                                "◆顯示卡◆",
                                "推薦>> NVIDIA GeForce RTX 3060同等級及以上",
                                "最低>> NVIDIA GeForce GTX 1660或同等級",
                                "◆記憶體◆",
                                "推薦>> 32GB及以上",
                                "最低>> 16GB",
                                "◆儲存空間◆",
                                "預留 60GB 及以上可用空間，推薦安裝至固態硬碟(SSD)"
                            ]
                        }
                    ]
                    },
                    {
                    type: "section",
                    title: "測試相關問題",
                    contents: [
                        {
                            type: "qa",
                            items: [
                                {
                                    q: "我該如何獲取測試資格？",
                                    a: "前往《異環》官網完成預約並填寫問卷後提交，即為測試報名成功，將有機會獲得測試資格。"
                                },
                                {
                                    q: "本次測試的開啟和結束時間是？",
                                    a: "異環「收容測試」將於2025年7月3日09:00（UTC+8）開啟，7月16日23:59（UTC+8）結束。"
                                },
                                {
                                    q: "未成年人可以參與本次測試嗎？",
                                    a: "本次測試僅限成年人參與。如您未達成年年齡，將無法獲得資格。"
                                },
                                {
                                    q: "這次測試支持手把體驗遊戲嗎？",
                                    a: "本次測試將支援 PS5™（DualSense）、PS4™（DualShock 4）、Xbox 系列手把。"
                                },
                                {
                                    q: "這次測試我可以在哪些平台遊玩？",
                                    a: "本次測試支援 PC (Windows)。未來將支援 iOS、macOS、Android 等平台。"
                                },
                                {
                                    q: "遇到問題如何解決？",
                                    a: "可聯繫官方客服：",
                                    link:"https://www.iwplay.com.tw/contact.html",
                                },
                                {
                                    q: "我可以直播或分享遊戲內容嗎？",
                                    a: "本次測試允許玩家分享遊戲內容，但禁止解包、盜用等侵權行為。"
                                }
                            ]
                        }
                    ]
                    },
                    {
                        type: "section",
                        title: "預約相關問題",
                        contents: [
                            {
                                type: "qa",
                                items: [
                                    {
                                        q: "我該如何預約異環？",
                                        a: "前往官網點擊【立即預約】，填寫手機號碼並提交即可完成預約。"
                                    },
                                    {
                                        q: "預約是否等於參與測試招募？",
                                        a: "不是。預約後仍需填寫問卷才算成功報名測試。"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        type: "section",
                        title: "※注意事項",
                        contents: [
                            {
                                type: "list",
                                items: [
                                    "遊戲仍處於研發階段，測試版本不代表最終品質。",
                                    "招募結束後將以簡訊及信箱通知測試資格。",
                                    "本次測試資格僅限當期使用，無法繼承至下次測試。",
                                    "禁止任何形式的測試帳號出售或轉讓，違者將取消測試資格。"
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id:2,
                title:"「收容測試」正式揭密",
                time:"2025-06-10",
                imgData:"/images/news/nte250616_02.jpeg",
                class:"system",
                content: [
                    {
                        type: "title",
                        title: "異環「收容測試」將於7月3日正式開啟！體驗充滿異常的日常，海特洛的冒險即將啟程！",
                    },
                    {
                        type: "title",
                        title: "活動說明：",
                        link:"https://nte.iwplay.com.tw/",
                    },
                    {
                        type: "section",
                        title: ">>測試說明<<",
                        contents: [
                            {
                                type: "list",
                                items: [
                                    " ▶測試開啟時間：2025年7月3日09:00（UTC+8）",
                                    " ▶測試結束時間：2025年7月16日23:59（UTC+8）",
                                    " ▶測試類型：限量不計費刪檔測試",
                                    " ▶測試平台：PC (Windows)",
                                    " ▶遊戲語言：英文、日文、簡體中文、繁體中文",
                                    " ▶配音語言：英文、日文、中文",
                                ]
                            }
                        ]
                    },
                ]
            },
            {
                id:3,
                title:"《異環》二創徵集活動開跑！",
                time:"2025-05-28",
                imgData:"/images/news/nte250616_03.png",
                class:"activity",
                content: [
                    {
                        type: "title",
                        title: "成為異象獵人！參與創作投稿，就有機會抱回 Nintendo Switch、Logitech 遊戲鍵盤等超值好禮！",
                    },
                    {
                        type: "title",
                        title: "🖌️前往投稿：",
                        link:"https://nte.iwplay.com.tw/event/fanart.html",
                    },
                    {
                        type: "section",
                        title: "✦ 活動時間",
                        contents: [
                            {
                                type: "list",
                                items: [
                                    "第一階段｜二創投稿期間",
                                    "2025/5/28（三）- 7/16（三）23:59 (UTC+8)",
                                    "第二階段｜鑒定師投票期間",
                                    "2025/6/6（五）- 7/16（三）23:59 (UTC+8)",
                                    "第三階段｜得獎名單公布",
                                    "2025/7/23（二）",
                                ]
                            }
                        ]
                    },
                    {
                        type: "section",
                        title: "✦ 投稿獎勵",
                        contents: [
                            {
                                type: "list",
                                items: [
                                    "優等獎-官方評選(繪圖組與影片組各取前3)",
                                    "【Top 1】Nintendo Switch（OLED款式）*1",
                                    "【Top 2】Logitech無線機械式遊戲鍵盤 G Pro X TKL LIGHTSPEED *1",
                                    "【Top 3】Razer 滑鼠(Basilisk V3 Pro - 黑色)*1",
                                ]
                            }
                        ]
                    },
                    {
                        type: "section",
                        title: "人氣獎-鑒定師投票(繪圖組與影片組各取前3)",
                        contents: [
                            {
                                type: "paragraph",
                                lines: [
                                    "【Top 1~3】《異環》官方周邊-立牌套組*1"
                                ]
                            }
                        ]
                    },
                    {
                        type: "section",
                        title: "幸運獎-投稿成功皆有機會獲得(繪圖組與影片組各取8名)",
                        contents: [
                            {
                                type: "paragraph",
                                lines: [
                                    "《異環》官方周邊-徽章套組*5",
                                    "《異環》官方周邊-鐳射卡套組*3",
                                ]
                            }
                        ]
                    },
                    {
                        type: "section",
                        title: "✦ 報名方式",
                        contents: [
                            {
                                type: "list",
                                items: [
                                    "1.在指定活動平台公開上傳自己的作品，並 #異環 #NTE #NevernesstoEverness #成為異象獵人。",
                                    "2.在二創徵集活動網頁上傳自己的作品。",
                                    "※注意：以上步驟皆需完成才算投稿成功。",
                                ]
                            }
                        ]
                    },
                    {
                        type: "section",
                        title: "✦ 投稿內容",
                        contents: [
                            {
                                type: "paragraph",
                                lines: [
                                    "投稿《異環》IP相關的原創同人美術作品可參與活動，非本IP相關作品將不列入活動評選。",
                                    "※可參考創作素材：請參考《異環》官網與社群平台公開的圖素、角色設定與影片資訊發揮創意進行創作。",
                                ]
                            }
                        ]
                    },
                    {
                        type: "section",
                        title: "✦ 投稿數量",
                        contents: [
                            {
                                type: "paragraph",
                                lines: [
                                    "每位鑒定師在各組別最多可投稿3次，亦即可於繪圖組與影片組各自投稿最多3則作品。",
                                ]
                            }
                        ]
                    },
                    {
                        type: "section",
                        title: "✦ 投稿審查",
                        contents: [
                            {
                                type: "list",
                                items: [
                                    "1.投稿成功後不可進行修改與刪除，若有重複上傳投稿內容將以最新投稿內容為主。",
                                    "2.由官方進行人工審查，於48小時內審查完畢與對外，為避免審查時程影響投票結果，請鑒定師及早投稿；審查不通過之投稿作品將不另行通知，敬請諒解。",
                                ]
                            }
                        ]
                    },
                    {
                        type: "section",
                        title: "※注意事項",
                        contents: [
                            {
                                type: "list",
                                items: [
                                    "1.請於指定投稿期間內，依據投稿規則完成投稿。活動期間所投稿之作品須為原創作品，嚴禁抄襲、盜用、二次修改他人作品或侵害他人著作權。一經查實，該作品將取消參賽及得獎資格。",
                                    "2.活動僅接受活動啟動後創作並公開之完成稿，且不得重複投稿相同作品。",
                                    "3.禁止投稿任何違反法律法規、《異環》服務條款，或包含誹謗、惡意誇張、抹黑與醜化遊戲內容之作品，一經發現，將取消參賽資格，且作品不予展示。",
                                    "4.禁止含有色情、宗教或政治宣傳內容之投稿，官方有權移除相關內容，並不列入活動參賽作品。",
                                    "5.嚴禁使用 AI 進行繪圖或影片創作，一經查證，將取消參賽資格，且該作品不予展示。",
                                    "6.請確實依照活動規範參與，若投稿格式不符，將可能喪失得獎資格。",
                                    "7.活動期間，每位鑒定師可對喜愛之作品投票，每人不限投票次數，但每件作品僅可投一次。",
                                    "8.參與本次二創徵集活動，即視為授權《異環》官方可於所有平台使用投稿作品進行線上宣傳（包含但不限於《異環》官網、X、Facebook、Instagram、YouTube、Discord 等），並將標註創作者名稱。",
                                    "9.若有任何疑問，請洽《異環》官方粉絲團。",
                                    "10.本活動僅限台灣、香港及澳門地區玩家參加，造成不便敬請見諒。",
                                    "11.如遇不可抗力因素，艾玩天地保留隨時修改活動辦法、獎項內容，或終止活動之權利。",
                                ]
                            }
                        ]
                    },
                ]
            },
            {
                id:4,
                title:"《異環》創作者招募計畫啟動！",
                time:"2025-05-19",
                imgData:"/images/news/2025051618444747129861.webp",
                class:"activity",
                content: [
                    {
                        type: "title",
                        title: "親愛的鑒定師，感謝您對《異環》的支持。",
                    },
                    {
                        type: "title",
                        title: "若您熱愛創作並願意與官方一同推廣正面遊戲文化，歡迎加入我們的創作者計畫！",
                    },
                    {
                        type: "title",
                        title: "請在填寫報名表單前，務必詳閱以下資訊：",
                    },
                    {
                        type: "section",
                        title: "✦ 報名時間",
                        contents: [
                            {
                                type: "paragraph",
                                lines: [
                                    "即日起~「收容測試」招募關閉"
                                ]
                            }
                        ]
                    },
                    {
                        type: "section",
                        title: "✦ 獲選者福利",
                        contents: [
                            {
                                type: "paragraph",
                                lines: [
                                    "「收容測試」遊戲測試資格（可搶先體驗最新版本）"
                                ]
                            }
                        ]
                    },
                    {
                        type: "section",
                        title: "✦ 招募對象",
                        contents: [
                            {
                                type: "list",
                                items: [
                                    "我們尋找具備以下特質的創作者：",
                                    "1.積極創作、熱情投入",
                                    "2.誠信經營頻道與社群",
                                    "3.維護正面風氣、遵守規範",
                                    "4.願與品牌長期合作，共同成長",
                                ]
                            }
                        ]
                    },
                    {
                        type: "section",
                        title: "✦ 基本資格（報名問卷將自動篩選）",
                        contents: [
                            {
                                type: "paragraph",
                                lines: [
                                    "社群平台擁有 500 位以上訂閱者或追隨者",
                                    "近六個月內有穩定更新影片或直播",
                                    "※加分條件：曾發表與《異環》相關的內容",
                                ]
                            }
                        ]
                    },
                    {
                        type: "title",
                        title: "📎前往報名📎點擊問卷連結",
                        link:"https://forms.gle/mjZs5ERAVq1xVRpo6",
                    },
                    {
                        type: "section",
                        title: "✦ 重要說明",
                        contents: [
                            {
                                type: "list",
                                items: [
                                    "1.問卷填寫資料僅供本次測試審核使用，手機與電子信箱將作為測試資格發送憑證，送出後不可更改。",
                                    "2.本活動所蒐集個資將依據《服務條款》與《隱私權政策》處理，並嚴格保密。",
                                    "3.若您尚未成年，請務必在監護人同意下參與本次活動。",
                                    "4.「收容測試」資格僅供本人使用，嚴禁轉讓、販售或分享，違規者將取消資格並保留法律追訴權。",
                                    "5.表單送出後，官方將審核頻道內容，通過者將以 Email 通知。未獲選者不另行通知，敬請理解。",
                                ]
                            }
                        ]
                    },
                    {
                        type: "title",
                        title: "若有任何疑問，請聯繫《異環》官方粉絲團。",
                    },
                ]
            },
            {
                id:5,
                title:"《異環》宣布將於2024東京電玩展首次參展 TGS玩家特派員招募開跑！",
                time:"2024-09-05",
                imgData:"/images/news/06.webp",
                class:"gamenews",
                content: [
                    {
                        type: "gamenewsParagraph",
                        content: "由Hotta Studio研發的超自然都市開放世界遊戲《異環》，今日（9月5日）宣佈正式參展2024東京電玩展（TGS），首度在線下展覽與玩家們見面。營運團隊也特別舉辦“TGS玩家特派員”招募活動，將提供來回機票及住宿，邀請玩家一同前往2024東京電玩展，感受遊戲展區獨特氛圍。",
                    },
                    {
                        type: "gamenewsImgData",
                        imgData: "/images/news/06.webp",
                    },
                    {
                        type: "gamenewsTitle",
                        title: "邀你探索海特洛市，感受《異環》的獨特氛圍",
                    },
                    {
                        type: "gamenewsParagraph",
                        content: "本次展場將以遊戲中的大都市-海特洛為設計主題，參展玩家能夠親身體驗超自然都市的獨特氛圍，同時還有機會獲得營運團隊在現場為玩家準備的《異環》精緻遊戲周邊。",
                    },
                    {
                        type: "gamenewsParagraph",
                        content: "活動地點：幕張國際展覽中心第 08-C02 號展廳（第 8 展廳）",
                    },
                    {
                        type: "gamenewsParagraph",
                        content: "活動時間：2024年9月26日（四）至9月29日（日）",
                    },
                    {
                        type: "gamenewsImgData",
                        imgData: "/images/news/07.webp",
                    },
                    {
                        type: "gamenewsTitle",
                        title: "TGS玩家特派員招募活動開啟，體驗遊戲展區及獲得東京來回機票住宿",
                    },
                    {
                        type: "gamenewsParagraph",
                        content: "為歡慶《異環》首次於線下活動與玩家們見面，營運團隊也特別舉辦東京TGS玩家特派員招募活動，邀請鑑定師一同前往東京，探索TGS《異環》展區！最終脫穎而出的玩家將獲得由《異環》營運團隊送出的三天兩夜東京機票住宿及東京TGS門票。玩家趕緊前往《異環》官方粉絲團，了解更多招募活動詳情參加活動吧！",
                    },
                    {
                        type: "gamenewsImgData",
                        imgData: "/images/news/08.webp",
                    },
                ]
            },
            {
                id:6,
                title:"超自然開放世界RPG《異環》全球首度公開",
                time:"2024-07-16",
                imgData:"/images/news/03.webp",
                class:"gamenews",
                content: [
                    {
                        type: "gamenewsParagraph",
                        content: "《異環》的故事將從海特洛市開始，玩家作為首位“無證工作”的“異象獵人”，將成為經營不善靠著接取民間異象委託維持周轉的古董店“伊波恩”的一員。玩家將與個性迥異、能力非凡的夥伴們共同探索各城市的所有謎團，經歷有笑有淚的各式奇遇，演繹一段又一段有趣的都市探索故事。 ",
                    },
                    {
                        type: "gamenewsTitle",
                        title: "UE5引擎加持，打造超自然都市",
                    },
                    {
                        type: "gamenewsParagraph",
                        content: "歡迎來到鑒定師生涯的第一站-生機勃勃、自由開放的海特洛市！“異象管理局”大廳排隊申請居民許可證的“歧骸”們面露憧憬，電車站台前一個彈指便清潔好自己通勤套裝的“異能者”上班族行色匆匆……放眼望去，皆是“異常”有趣的畫面！",
                    },
                    {
                        type: "gamenewsParagraph",
                        content: "《異環》在Unreal Engine 5引擎的加持下，都市裡古董店及便利商店內的裝潢和家具蘊含許多細節，為場景增添生活氣息。為了讓都市場景看起來更加真實，《異環》透過UE5引擎打造整體都市框架，且加入Nanite多邊形虛擬化技術，大幅提升場景擬真度。",
                    },
                    {
                        type: "gamenewsImgData",
                        imgData: "/images/news/02.webp",
                    },
                    {
                        type: "gamenewsParagraph",
                        content: "將鏡頭拉遠後，高樓大廈組成了鋼鐵叢林，大廈之間點綴的詭譎光線，為海特洛市蒙上一層異樣氛圍，開發團隊運用了實時光追技術，讓都市的廣度與深度都得到了很好的呈現方式。",
                    },
                    {
                        type: "gamenewsImgData",
                        imgData: "/images/news/03.webp",
                    },
                    {
                        type: "gamenewsTitle",
                        title: "擬真都市生態，告別平庸街區",
                    },
                    {
                        type: "gamenewsParagraph",
                        content: "城市是一個經典的遊戲舞台，在《異環》的實機演示中，能看到NPC許多真實舉動，譬如當他遵守交通規則走在街邊時，玩家對其做出不同舉動，NPC們將會有著截然不同的反應。",
                    },
                    {
                        type: "gamenewsParagraph",
                        content: " 此外，通過不同區域間人流、車輛與店鋪規模的差異，能看出《異環》在整個城市的構建所下的心思，玩家也會潛移默化受到這套城市構建系統影響，感受到更擬真的遊戲體驗。",
                    },
                    {
                        type: "gamenewsImgData",
                        imgData: "/images/news/04.webp",
                    },
                    {
                        type: "gamenewsTitle",
                        title: "既能擺平異象，也能買車買房",
                    },
                    {
                        type: "gamenewsParagraph",
                        content: "在本日釋出的實機演示中，《異環》集中展示了兩種核心玩法，期待能為當下的玩家們帶來更多差異化的遊戲體驗。",
                    },
                    {
                        type: "gamenewsParagraph",
                        content: " 現今的開放世界遊戲，在探索上往往會帶給玩家挑戰型的難題，而《異環》則希望讓玩家的都市冒險之旅更加爽快。玩家可使用“異能”，輕鬆跨越每一處障礙，自由的在海特洛城市中穿梭，甚至能無視重力法則，在垂直的墻面上如履平地，解鎖全新視角！",
                    },
                    {
                        type: "gamenewsImgData",
                        imgData: "/images/news/05.webp",
                    },
                    {
                        type: "gamenewsParagraph",
                        content: "此外，都市中還有更多玩法等待玩家前來解鎖。玩家可購買車子，對其進行自由改裝，在街道上盡情飆速享受速度刺激快感；同時也能購置專屬於自己的溫馨小窩，隨心更換喜歡的裝修風格。未來，《異環》也將加入更多都市經營玩法，讓玩家能在此創造屬於自已的故事篇章，時刻發掘更多樂趣。",
                    },
                ]
            }, 
        ]
    },
    reducers: {
        
    },
});

export const { } = newsSlice.actions;

//#region 取得全部文章資料 
export const getAllArticlesData = createAsyncThunk(
    "articles/getAllArticlesData",
    async (_,{ dispatch, rejectWithValue }) => {
        try {
            const getAllArticlesDataRef = await axios.get(`${BASE_URL}/articles/getAllArticles`);
            //console.log("取得全部文章資料成功",getAllArticlesDataRef);
            return getAllArticlesDataRef.data.articles;
        } catch (error) {
            //console.log("取得全部文章資料失敗",error.response.data);
            return rejectWithValue(error.response.data);
        }
    }
);
//#endregion

//#region 取得單一文章資料 
export const getSingleArticlesData = createAsyncThunk(
    "articles/getSingleArticlesData",
    async (id,{ dispatch, rejectWithValue }) => {
        try {
            const getSingleArticlesDataRef = await axios.get(`${BASE_URL}/articles/getSingleArticle/${id}`);
            //console.log("取得單一文章資料成功",getSingleArticlesDataRef.data);
            return getSingleArticlesDataRef.data.article;
        } catch (error) {
            //console.log("取得單一文章資料失敗",error.response.data);
            return rejectWithValue(error.response.data);
        }
    }
);
//#endregion

export default newsSlice.reducer;