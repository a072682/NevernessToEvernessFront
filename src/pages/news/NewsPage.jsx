

import { useEffect, useRef, useState } from 'react';
import './_NewsPage.scss';
import LeftSide from '../../components/common/leftSide/LeftSide';
import Copyright from '../../components/common/版權區塊/Copyright';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleArticlesData } from '../../slice/newsSlice';



function NewsPage (){

    //#region 
    //#endregion

    //#region 讀取網址中的 id
        const { id } = useParams();
        console.log("取得的id",id);
    //#endregion

    //#region 移動頁面前置宣告
        const navigate = useNavigate();
    //#endregion

    //#region 讀取中央函式前置宣告
        const dispatch = useDispatch();
    //#endregion

    //#region 單一文章狀態宣告
    const[newsData,setNewsData]=useState(null);
    useEffect(()=>{
        console.log("得到的新聞資料",newsData);
    },[newsData]);
    //#endregion

    //#region 取文章第一張圖片
    function getFirstImage(html) {
        const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
        //console.log("內容:",match[1]);
        return match ? match[1] : null;
    }
    //#endregion

    //#region 移除文章中的第一張圖片
    function removeFirstImage(html) {
        if (!html || typeof html !== "string") {
            return html;
        }
        return html.replace(/<img[^>]*>/i, "");
    }

    //#region 從 newsData 轉成純文字（前 100 字）
    function extractNewsText(newsContentArray) {
        if (!Array.isArray(newsContentArray)){
            return "";
        } 
        let result = "";

        newsContentArray.forEach((block) => {
            // type: paragraph
            if (block.type === "section") {
                block.contents.forEach(item => {
                    if (item.type === "paragraph") {
                        result += item.lines.join(" ");
                    }
                    if (item.type === "list") {
                        result += item.items.join(" ");
                    }
                    if (item.type === "qa") {
                        item.items.forEach(qa => {
                            result += qa.q + " " + qa.a + " ";
                        });
                    }
                });
            }

            // type: title
            if (block.type === "title") {
            result += block.title + " ";
            }

            // type: gamenewsParagraph
            if (block.type === "gamenewsParagraph") {
            result += block.content + " ";
            }
        });

        return result;
    }
    //#endregion

    //#region 新聞簡介編寫函式
    //只取新聞的前100個文字
    function extractMetaDescription(text, maxLength = 100) {
        if (!text) return "";

        const clean = text.replace(/<[^>]+>/g, "").trim();

        return clean.length > maxLength
            ? clean.slice(0, maxLength) + "..."
            : clean;
    }
    //#endregion

    //#region SEO流程宣告
    //獨立新聞要將內容寫進前方
    useEffect(() => {
        //標題
        document.title = `${newsData?.title} | 自我練習的還原自製遊戲網站`;

        //簡介
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            const fullText = extractNewsText(newsData?.content);
            const shortDesc = extractMetaDescription(fullText, 120);

            metaDesc.setAttribute("content", shortDesc);
        }
    }, [newsData]);
    //#endregion

    //#region 取得單一文章資料函式
    const handleGetSingleArticlesData = async (id) => {
        try {
            const originData = await dispatch(getSingleArticlesData(id)).unwrap();
            //console.log("確認資料",originData);
            const result = {
                ...originData,
                class:originData.category,
                firstImage: getFirstImage(originData.content),
            };
            setNewsData(result);
            //console.log("確認資料02",result);
        } catch (error) {
            console.log("取得單一文章失敗",error);
        }
    }
    useEffect(()=>{
        handleGetSingleArticlesData(id);
    },[])
    //#endregion

    //#region 判斷解析度
        const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
        
        useEffect(()=>{
            if(!isDesktop){
                setCopyright(true);
            }else if(isDesktop){
                setCopyright(false);
            }
        },[isDesktop]);
        

        useEffect(() => {
            const resizeHandler = () => {
                setIsDesktop(window.innerWidth >= 768);
            };

            window.addEventListener("resize", resizeHandler);
            return () => window.removeEventListener("resize", resizeHandler);
        }, []);
    //#endregion

    //#region 版權區塊控制
      const[copyright,setCopyright]=useState(false);
      useEffect(()=>{},[copyright]);
    //#endregion

    //#region 處理頁面移動函式
    const handleGoToNewsList = () => {
        navigate(`/information/NewListPage`);
    };
    //#endregion

    //#region 處理頁面移動函式(移動到首頁)
    const handleGoToIndex = () => {
        navigate(`/`);
    };
    //#endregion

    //#region 宣告控制mainBox
    const mainBoxRef = useRef(null);
    //#endregion

    //#region 回到頁面最上方
        const goPageTop = () => {
            mainBoxRef.current.scrollTo(0, 0);
        }
    //#endregion

    //#region icon設定
    const iconSet = [
        {
            name:"faceBook",
            link:"https://www.facebook.com/325581947301814",
        },
        {
            name:"youtube",
            link:"https://www.youtube.com/channel/UCP363wgDiNGwXynMKNWAF8Q?sub_confirmation=1",
        },
        {
            name:"discord",
            link:"https://discord.gg/pAWyEmpd8X",
        },
        {
            name:"instagram",
            link:"https://www.instagram.com/iwntezh/",
        },
        {
            name:"X",
            link:"https://x.com/NTE_ZH",
        },
        {
            name:"playStation",
            link:"https://nte.pse.is/828787",
        },
    ]
    //#endregion


    return(
        <>
            {/* 元件最外圍 */}
            <section className='newsPage'>
                <h1 className="visually-hidden">{newsData?.title}｜《異環》Neverness to Everness</h1>
                {/* 側邊面板 */}
                <LeftSide />
                {/* 側邊面板 */}
                {/* 混合版內容 */}
                <div className='newsShowPage'>
                    {/* 背景 */}
                    <img className='newsPageBg' src="/images/news/articlePage.jpg" alt="" />
                    {/* 背景 */}
                    {/* 主內容區塊 */}
                    <div className='mainBox' ref={mainBoxRef}>
                        {/* 中央區塊 */}
                        <div className='contentBox'>
                            {/* 標題區塊 */}
                            <div className='titleBox'>
                                {/* 標題背景圖 */}
                                <picture>
                                    <source 
                                        media="(max-width: 768px)" 
                                        srcSet="/images/news/手機板/articleHead_m.png" 
                                    />
                                    <img className='titleImgSet' src="/images/news/articleHead.png" alt="" />
                                </picture>
                                {/* 標題背景圖 */}
                                {/* 主要標題 */}
                                <h1 className='titleSet'>{newsData?.title}</h1>
                                {/* 主要標題 */}
                                {/* 來源連結 */}
                                <div className='Breadcrumb'>
                                    <button className='linkBtnSet'
                                            type='button'
                                            onClick={()=>{handleGoToIndex()}}>
                                        <p className='textSet'>
                                            異環 &gt; 
                                        </p>
                                    </button>
                                    <button className='linkBtnSet'
                                            type='button'
                                            onClick={()=>{handleGoToNewsList()}}>
                                        <p className='textSet'>
                                            情報速遞 &gt;
                                        </p>
                                    </button>
                                    <p className='textSet'>
                                        {
                                            newsData?.class === "system"? "系統"
                                            : newsData?.class === "activity"? "活動"
                                            : newsData?.class === "gamenews"? "新聞"
                                            : ""
                                        }
                                    </p>
                                </div>
                                {/* 來源連結 */}
                                {/* 顯示時間 */}
                                <div className='timeSet'>
                                    <time className='textSet'>{newsData?.created_at.split("T")[0]}</time>
                                </div>
                                {/* 顯示時間 */}
                            </div>
                            {/* 標題區塊 */}

                            {/* 圖片區塊 */}
                            {
                                newsData?.firstImage && (
                                    <div className='imgBox'>
                                        {/* 圖片本體 */}
                                        <img className='imgSet' src={newsData?.firstImage} alt="" />
                                        {/* 圖片本體 */}

                                        {/* 左側圖片區塊 */}
                                        <div className='leftImgBox'>
                                            <img className="imgSet" src="/images/news/articleAside.png" alt="" />
                                        </div>
                                        {/* 左側圖片區塊 */}
                                    </div>
                                )
                            }
                            {/* 圖片區塊 */}

                            {/* 文字區塊 */}
                            {newsData?.content && (
                                <div className='textBox'
                                    dangerouslySetInnerHTML={{ __html: removeFirstImage(newsData?.content) }}
                                />
                            )}
                            {/* 文字區塊 */}

                            {/* 結尾區塊 */}
                            <div className='footerBox'>
                                {/* 文字條列 */}
                                <div className='itemSet'>
                                    <span className='textSet'>【異環】官方粉絲團</span>
                                    <a  className='linkSet' 
                                        href="https://www.facebook.com/@nte.iwplay"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        &raquo; 點擊前往 &laquo;
                                    </a>
                                </div>
                                <div className='itemSet'>
                                    <span>【異環】官方YouTube頻道：</span>
                                    <a  className='linkSet'
                                        href="https://www.youtube.com/channel/UCP363wgDiNGwXynMKNWAF8Q"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        &raquo; 點擊前往 &laquo;
                                    </a>
                                </div>
                                <div className='itemSet'>
                                    <span>&nbsp;</span>
                                </div>
                                <div className='itemSet'>
                                   <p className='textSet end'>《異環》營運團隊敬上</p>
                                </div>
                                {/* 文字條列 */}
                                
                                {/* 圖片區塊 */}
                                <div className='footerImgBox'>
                                    <picture>
                                        <source 
                                            media="(max-width: 768px)" 
                                            srcSet="/images/news/手機板/articleBottom_m.png" 
                                        />
                                        <img className='footerImgSet' src="/images/news/articleBottom.png" alt="" />
                                    </picture>
                                    
                                    <div className='textBox'>
                                        <p className='textSet'>
                                            《異環》是Hotta Studio自主研發的超自然都市開放世界RPG。故事將從海特洛市啟篇，作為首位「無證工作」的「異象獵人」，你將成為接取民間異象委託維持周轉的古董店「伊波恩」的一員，與個性迥異、能力非凡的夥伴們一起探索各城市的大小謎團，歷經有笑有淚的各式奇遇，演繹獨屬於你們的都市物語。
                                        </p>
                                    </div>
                                    <div className='iconBox'>
                                        {/* icon設定 */}
                                        {
                                            iconSet?.map((item,index)=>{
                                                return(
                                                    <a  key={index}
                                                        className={`iconSet ${item.name}`}
                                                        href={item.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer">    
                                                    </a>
                                                )
                                            })
                                        }
                                        {/* icon設定 */}
                                    </div>
                                </div>
                                {/* 圖片區塊 */}
                            </div>
                            {/* 結尾區塊 */}

                            {/* 版權按鈕 */}
                            <button className={`copyrightBtnSet ${copyright?("active"):("")}`} 
                                    onClick={()=>{setCopyright(!copyright)}}> 
                                <span className='textSet'>版權訊息</span>
                                <img className='btnIconSet' src="/images/news/copyRightArrow.png" alt="" />
                            </button>
                            {/* 版權按鈕 */}

                            {/* 回最上按鈕 */}
                            <button className='topBtnbox'
                                    onClick={()=>{goPageTop()}}>
                                <img className='topBtnSet' src="/images/news/articleTop.png" alt="" />
                            </button>
                            {/* 回最上按鈕 */}

                        </div>
                        {/* 中央區塊 */}

                        {/* 版權區塊 */}
                        <div className='copyright'> 
                            <Copyright copyright={copyright}/>
                        </div>
                        {/* 版權區塊 */}

                        {/* 上一頁按鈕 */}
                        <button className='backBtnSet' 
                                onClick={()=>{handleGoToNewsList()}}
                        >
                        </button>
                        {/* 上一頁按鈕 */}

                    </div>
                    {/* 主內容區塊 */}
                </div>
                {/* 混合內容 */}
            </section>
            {/* 元件最外圍 */}
            {/* 提示畫面 */}
            <div className="landscapeBlocker">請將手機旋轉至直向模式</div>
            {/* 提示畫面 */}
        </>
    )
}
export default NewsPage;

            