

import { useEffect, useRef, useState } from 'react';
import './_NewsPage.scss';
import LeftSide from '../../components/common/leftSide/LeftSide';
import Copyright from '../../components/common/版權區塊/Copyright';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';



function NewsPage (){

    //#region 
    //#endregion

    

    //#region 讀取網址中的 id
        const { id } = useParams();
        //console.log("取得的id",id);
    //#endregion

    //#region 移動頁面前置宣告
        const navigate = useNavigate();
    //#endregion

    const[newsData,setNewsData]=useState(null);
    useEffect(()=>{
        //console.log("得到的新聞資料",newsData);
    },[newsData]);

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

    const handleNewsData = (inputData) =>{
        const result = inputData.find((item) => {
            return(item.id === Number(id));
        });
        return result;
    }

    //#region 讀取中央新聞資料
        const news = useSelector((state)=>{
            return(
                state.news.news
            )
        })

        useEffect(()=>{
            //console.log("news資訊:",news);
            setNewsData(handleNewsData(news));
        },[news])
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

    const textData = [
        {
            title:"活動說明：",
            content:[
                "異環「收容測試」將於7月3日正式開始！我們整理了測試相關詳細的說明與常見問題解答，請鑒定師們查閱。",
            ]
        },
        {
            title:"測試資訊",
            content:[
                "測試類型：限量不計費刪檔測試",
                "測試平台：PC (Windows)",
                "遊戲語言：英文、日文、簡體中文、繁體中文",
                "配音語言：英文、日文、中文",
            ]
        },
        {
            title:"招募時間",
            content:[
                "招募開啟時間：2025年5月15日10:00（UTC+8）",
                "測試招募結束時間將在後續另行通知，請想參與測試的鑒定師及時前往官網預約並填寫招募問卷，並持續關注官方社群發佈的相關資訊。",
            ]
        },
        {
            title:"測試時間",
            content:[
                "測試開啟時間：2025年7月3日09:00（UTC+8）",
                "測試結束時間：2025年7月16日23:59（UTC+8）",
                "預下載開放時間：2025年7月2日10:00（UTC+8）",
                "*測試資格通知及具體預下載方式請見後續官方社群發佈的通知。",
            ]
        },
        {
            title:"設備要求",
            content:[
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
                "預留 60GB 及以上可用空間，推薦安裝至固態硬碟(SSD)",
            ]
        },
        {
            title:"設備要求",
            content:[
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
                "預留 60GB 及以上可用空間，推薦安裝至固態硬碟(SSD)",
            ]
        },
        {
            title:"測試相關問題",
            content:[
                "Q：我該如何獲取測試資格？",
                "A：前往《異環》官網完成預約並填寫問卷後提交，即為測試報名成功，將有機會獲得測試資格。",
                "Q：本次測試的開啟和結束時間是？",
                "A：異環「收容測試」將於2025年7月3日09:00（UTC+8）開啟，7月16日23:59（UTC+8）結束。",
                "Q：未成年人可以參與本次測試嗎？",
                "A：本次測試僅限成年人參與。如果您未達到所在國家或地區的成年年齡，將無法獲得測試資格、參與測試。請務必如實填寫問卷資訊，如填寫情況與實際不一致，將導致無法參與測試或取消測試資格。",
                "Q：這次測試支持手把體驗遊戲嗎？",
                "A：本次測試將支援以下手把：PS5™（DualSense™ 無線控制器）、PS4™（DUALSHOCK®4無線控制器）、Xbox（Xbox 無線控制器、Xbox Elite 無線控制器）",
                "Q：這次測試我都可以在哪些平台上體驗異環遊戲？",
                "A：本次測試將支援PC (Windows)平台遊玩。海外多語言移動設備測試版本正在緊密開發中，將在未來的測試節點中與大家見面！",
                "同時，iOS及macOS系統正在積極研發中，將支援硬體加速光線追蹤技術，配合穩定的幀數運行效果，致力於為大家在iOS與Mac設備上帶來更加流暢及精細的遊玩感受。",
                "未來各位鑒定師們將能夠在iPhone、iPad、Mac、Android與主機等平台上體驗《異環》遊戲！請鑒定師持續關注官方社群發佈的相關資訊。感謝各位鑒定師們的期待與支持！",
                "Q：招募與測試期間如果我遇到其他問題，我該如何解決？",
                "A：如您遇到任何問題，都可以聯繫異環官方客服進行解決。",
                "官方客服：https://www.iwplay.com.tw/contact.html",
                "Q：我可以在Youtube、Twitch等直播平台直播遊玩異環，或在社交平台中分享異環相關的遊戲截圖、影片等內容嗎？",
                "A：本次測試將不限制玩家合理的遊戲內容分享、討論等傳播行為，請鑒定師們注意遵守相關法律法規及平台規則等要求。對於解包、盜用、刻意抹黑、不當使用等一系列侵權行為，我們將保留採取訴訟等方式追究法律責任的權利。",
            ]
        },
        {
            title:"預約相關問題",
            content:[
                "Q：我該如何預約異環？",
                "A：前往異環官網點擊【立即預約】按鈕，在彈窗內填寫手機號碼、確認法律相關條款並提交，即為預約成功。",
                "Q：我已經預約過異環遊戲了，是不是算參與測試招募了？",
            ]
        },
        {
            title:"※注意事項",
            content:[
                "1.遊戲仍處於研發階段，測試版本不代表最終遊戲品質，感謝各位鑒定師的理解與支持。",
                "2.【收容測試】招募結束後，我們將通過問卷中填寫的簡訊和信箱，通知已獲得測試資格的鑒定師。請您務必確認問卷中填寫手機號碼及信箱地址的正確性，並留意後續相關通知。",
                "3.本次測試資格僅對當期測試有效，無法繼承至下次測試中。",
                "4.請注意，本次測試嚴禁任何形式的測試用戶端或測試帳號的出售、轉讓行為，一經發現將取消該帳號的測試資格。",
            ]
        },
    ]

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
                                    <time className='textSet'>{newsData?.time}</time>
                                </div>
                                {/* 顯示時間 */}
                            </div>
                            {/* 標題區塊 */}

                            {/* 圖片區塊 */}
                            {
                                newsData?.imgData && (
                                    <div className='imgBox'>
                                        {/* 圖片本體 */}
                                        <img className='imgSet' src={newsData?.imgData} alt="" />
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
                            <div className='textBox'>
                                {
                                    newsData?.content?.map((text,index)=>{

                                        if(text.type === "title"){
                                            return(
                                                /* 文字群組 */
                                                <div key={index} className='textGroup'>
                                                    {/* 標題 */}
                                                    <h2 className='title'>
                                                        {text.title}
                                                        {
                                                           text.link && (<a href={text.link}>{text.link}</a>)
                                                        }
                                                    </h2>
                                                    {/* 標題 */}
                                                </div>
                                                /* 文字群組 */
                                            )
                                        }

                                        if(text.type === "section"){
                                            return(
                                                text.type === "section" && (
                                                    /* 文字群組 */
                                                    <div key={index} className='textGroup'>
                                                        {/* 標題 */}
                                                        <h2 className='title'>{text.title}</h2>
                                                        {/* 標題 */}
                                                        {
                                                            text.contents?.map((content01,index01)=>{
                                                                // 內容分類
                                                                if (content01.type === "paragraph") {
                                                                    return (
                                                                        content01.lines.map((content02,index02)=>{
                                                                            return(
                                                                                <p key={index02} className='content'>
                                                                                    {content02}
                                                                                </p>
                                                                            )
                                                                        })
                                                                    );
                                                                }

                                                                if (content01.type === "list") {
                                                                    return (
                                                                        content01.items.map((content02,index02)=>{
                                                                            return(
                                                                                <p key={index02} className='content'>
                                                                                    {content02}
                                                                                </p>
                                                                            )
                                                                        })
                                                                    )
                                                                }

                                                                if (content01.type === "qa") {
                                                                    return (
                                                                        content01.items.map((content02,index02)=>{
                                                                            return(
                                                                                <div key={index02} className="qaGroup">
                                                                                    
                                                                                    <p className='content'>
                                                                                        Q: {content02.q}
                                                                                    </p>
                                                                                    <p className='content'>
                                                                                        A: {content02.a}
                                                                                        {content02.link && (
                                                                                            <a  className='linkSet' 
                                                                                                href={content02.link}
                                                                                                target="_blank"
                                                                                                rel="noopener noreferrer"
                                                                                            >
                                                                                                {content02.link}
                                                                                            </a>
                                                                                        )}
                                                                                    </p>
                                                                                </div>
                                                                            )
                                                                        })
                                                                    )
                                                                }
                                                                // 內容分類

                                                            })
                                                        }
                                                    </div>
                                                    /* 文字群組 */
                                                )     
                                            )
                                        }

                                        if(text.type === "gamenewsTitle"){
                                            return(  
                                                /* 文字群組 */
                                                <div key={index} className='textGroup'>
                                                    {/* 標題 */}
                                                    <h2 className='title gamenews'>{text.title}</h2>
                                                    {/* 標題 */}
                                                </div>
                                                /* 文字群組 */  
                                            )
                                        }

                                        if(text.type === "gamenewsParagraph"){
                                            return(
                                                /* 文字群組 */
                                                <div key={index} className='textGroup'>
                                                    <p className='content gamenews'>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;{text.content}
                                                    </p>
                                                </div>
                                                /* 文字群組 */
                                            )
                                        }

                                        if(text.type === "gamenewsImgData"){
                                            return(
                                                /* 圖片群組 */
                                                <div key={index} className='imgGroup'>
                                                    <img className='imgSet' src={text.imgData} alt="" />
                                                </div>
                                                /* 圖片群組 */
                                            )
                                        }

                                        

                                        

                                        
                                        
                                    })
                                }
                            </div>
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

            