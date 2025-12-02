


import LeftSide from '../../components/common/leftSide/LeftSide';
import './_InformationPage.scss';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';
import { useContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SwiperContext } from '../../context/SwiperContext';
import { useSelector } from 'react-redux';


function InformationPage (){

    //#region 
    //#endregion

    //#region 移動頁面前置宣告
    const navigate = useNavigate();
    //#endregion

    //#region 讀取中央登入資料
        const newsData = useSelector((state)=>{
            return(
                state.news.news
            )
        })

        useEffect(()=>{
            console.log("news資訊:",newsData);
        },[newsData])
    //#endregion

    //#region tab按鈕設定
    const btnSet = [
        {
            title:"最新",
            key:"最新",
        },
        {
            title:"新聞",
            key:"gamenews",
        },
        {
            title:"活動",
            key:"activity",
        },
        {
            title:"系統",
            key:"system",
        },
    ]
    //#endregion

    //#region tab按鈕控制
    const [tabBtn,setTabBtn]= useState(
        {
            title:"最新",
            key:"最新",
        },
    );
    //#endregion

    //#region 新聞過濾相關
        //#region 新聞過濾函式
        const handlePageData = (input) => {
            if (!input) {
                return [];
            }

            if (tabBtn.key === "最新") {
                return input;
            }

            const pageData = input.filter((key)=>{
                if (key.class === tabBtn.key) {
                    return true;
                } else {
                    return false;
                }
            })
            return pageData;
        }
        //#endregion

        //#region 紀錄過濾後頁面資訊
        const[pageData,setPageData] = useState(null);
        useEffect(()=>{
            //console.log("新頁面資料",pageData)
        },[pageData])
        //#endregion

        //#region 標籤變化時進行更新
        useEffect(()=>{
            setPageData(handlePageData(newsData));
        },[tabBtn])
        //#endregion
    //#endregion

    //#region 解析度判定
        const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);
        useEffect(()=>{
            if (!isDesktop) {
                setSwiperPC(null);
            }else if(isDesktop){
                setSwiperMB(null);
            }
        },[isDesktop]);

        useEffect(() => {
            const resizeHandler = () => {
                setIsDesktop(window.innerWidth >= 992);
                //console.log("寬度", window.innerWidth);
            };

            window.addEventListener("resize", resizeHandler);
            return () => window.removeEventListener("resize", resizeHandler);
        }, []);
    //#endregion

    //#region 從Context取得手機版layout資料
        const { mbSwiperLayout,mbSwiperLayoutData } = useContext(SwiperContext);
    //#endregion
 
    //#region 輪播片相關
        //#region  桌面輪播綁定
        const [swiperPC,setSwiperPC] = useState(null);
        useEffect(()=>{
            if(!swiperPC){
                //console.log("桌面消失");
            }else if(swiperPC){
                //console.log("桌面出現");
            }
        },[swiperPC]);
        //#endregion

        //#region  手機輪播綁定
        const [swiperMB,setSwiperMB] = useState(null);
        useEffect(()=>{
            if(!swiperMB){
                //console.log("手機板消失");
            }else if(swiperMB){
                //console.log("手機板出現");
            }
        },[swiperMB]);
        //#endregion

        //#region 桌面Pagination綁定
        const inforPaginationPcRef = useRef(null);
        //#endregion

        //#region 手機Pagination綁定
        const inforPaginationMbRef = useRef(null);
        //#endregion

        //#region 輪播和Pagination初始化綁定
        // 初始化 PC Swiper pagination
        useEffect(() => {
            if (swiperPC && inforPaginationPcRef.current) {
                const swiper = swiperPC;

                swiper.params.pagination.el = inforPaginationPcRef.current;
                swiper.params.pagination.clickable = true;

                swiper.pagination.init();
                swiper.pagination.render();
                swiper.pagination.update();
            }
        }, [swiperPC]);

        // 初始化 MB Swiper pagination
        useEffect(() => {
            if (swiperMB && inforPaginationMbRef.current) {
                const swiper = swiperMB;

                swiper.params.pagination.el = inforPaginationMbRef.current;
                swiper.params.pagination.clickable = true;

                swiper.pagination.init();
                swiper.pagination.render();
                swiper.pagination.update();
            }
        }, [swiperMB]);
        //#endregion

        //#region 輪播片顯示資料
        const swiperData = [
            {
                id:1,
                imgSm:`/images/information/nte250616_01.png`,
            },
            {
                id:2,
                imgSm:`/images/information/nte250616_02.jpeg`,
            },
            {
                id:3,
                imgSm:`/images/information/nte250616_03.png`,
            },
        ];
        //#endregion

    //#endregion

    //#region 處理頁面移動函式
    const handleGoToNews = (id) => {
        navigate(`/information/NewListPage/${id}`);
    };
    //#endregion

    //#region 處理頁面移動函式
    const handleGoToNewsList = () => {
        navigate(`/information/NewListPage`);
    };
    //#endregion

    return(
        <>
            {/* 元件最外圍 */}
            <section className='informationPage'>
                {/* PC版內容 */}
                {isDesktop && (
                    <div className='informationPagePC'>
                        {/* 背景 */}
                        <img className='informationPageBg' src="/images/information/bg.jpg" alt="" />
                        {/* 背景 */}
                        {/* 側版內容 */}
                        <LeftSide />
                        {/* 側版內容 */}
                        {/* 主內容區塊 */}
                        <div className='mainBox'>

                            {/* 左邊區塊 */}
                            <div className='leftBox'>
                                <div className="widthBox">
                                    <div className='heightBox'>
                                        {/* 左邊內容區塊 */}
                                        <div className='leftContentBox'>
                                            {/* 輪播片區塊 */}
                                            <div className='swiperBox'>
                                                {/* 輪播片顯示區塊 */}
                                                <div className='swiperViewBox'>
                                                    {/* 輪播片背景圖案 */}
                                                    <img className='swiperViewBoxBg' src="/images/information/newsSwiper.png" alt="" />
                                                    {/* 輪播片背景圖案 */}

                                                    {/* 顯示區塊 */}
                                                    <div className='viewBox'>
                                                        {/* 縮圖輪播  */}
                                                        <Swiper
                                                            className="informationSwiper"
                                                            modules={[Pagination,EffectFade,Autoplay]}
                                                            onSwiper={(swiper) => {
                                                                setSwiperPC(swiper);
                                                            }}
                                                            spaceBetween={16}                 
                                                            loop={true}      
                                                            effect="fade"                                   //啟用淡入淡出
                                                            fadeEffect={{ crossFade: true }}                // 可選：交錯漸變更順
                                                            speed={600}                                     // 可選：動畫時間(毫秒)  
                                                            autoplay={{
                                                                delay: 3000,    // 每 3 秒切換
                                                                disableOnInteraction: false,// 使用者操作後是否繼續播放
                                                                pauseOnMouseEnter: true,//滑鼠移進暫停、移出繼續播放
                                                            }}               
                                                            slidesPerView={1}
                                                            centeredSlides
                                                        >
                                                            {pageData?.map((item, index) => (
                                                                <SwiperSlide    className='swiperSlide'
                                                                                key={index}
                                                                >
                                                                    <button className='slide-item'
                                                                            type='button'
                                                                            onClick={()=>{handleGoToNews(item.id)}}>
                                                                        <img className='imgSet' src={item.imgData} alt="" />
                                                                    </button>
                                                                    
                                                                </SwiperSlide>
                                                            ))}
                                                        </Swiper>
                                                        {/* 縮圖輪播 */}
                                                    </div>
                                                    {/* 顯示區塊 */}
                                                </div>
                                                {/* 頁碼按鈕 */}
                                                <div ref={inforPaginationPcRef} className="inforPaginationSet"></div>
                                                {/* 頁碼按鈕 */}
                                            </div>
                                            {/* 輪播片區塊 */}
                                        </div>
                                        {/* 左邊內容區塊 */}
                                    </div>
                                </div>
                                
                            </div>
                            {/* 左邊區塊 */}
                            
                            {/* 右邊區塊 */}
                            <div className='rightBox'>
                                <div className="widthBox">
                                    <div className='heightBox'>
                                        {/* 右邊內容區塊 */}
                                        <div className="rightContentBox">
                                            {/* 新聞消息顯示區塊 */}
                                            <div className='newsShowBox'>
                                                {/* 新聞消息標題顯示區塊 */}
                                                <div className='newsTitleBox'>
                                                    <img className='newsTitleImgSet' src="/images/information/newsHead.png" alt="" />
                                                    <div className='newsTitleItemBox'>
                                                        {
                                                            btnSet?.map((item,index)=>{
                                                                return(
                                                                    <button key={index} 
                                                                            className={`itemBoxSet ${tabBtn.key === item.key?("active"):("")}`} 
                                                                            onClick={()=>{setTabBtn(item)}}
                                                                    >
                                                                        <div className={`itemSet ${item.key}`}></div>
                                                                    </button>
                                                                )
                                                            })
                                                        }
                                                        <button className='newsMore' 
                                                                onClick={()=>{handleGoToNewsList()}}>
                                                            <div className='itemSet' href=""></div>
                                                        </button>
                                                    </div>
                                                </div>
                                                {/* 新聞消息標題顯示區塊 */}

                                                {/* 新聞消息顯示區塊 */}
                                                <div className='newsItemsBox'>
                                                    {
                                                        pageData?.map((item,index)=>{
                                                            return(
                                                                <button key={index} 
                                                                        type='button'
                                                                        className='newsItem' 
                                                                        onClick={()=>{handleGoToNews(item.id)}}
                                                                >
                                                                    <div className={`class ${item.class}`}>
                                                                        {
                                                                            item.class === "system"? "系統"
                                                                            : item.class === "activity"? "活動"
                                                                            : item.class === "gamenews"? "新聞"
                                                                            : ""
                                                                        }
                                                                    </div>
                                                                    <div className='content'>{item.title}</div>
                                                                    <div className='time'>{item.time}</div>
                                                                </button>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                {/* 新聞消息顯示區塊 */}
                                            </div>
                                            {/* 新聞消息顯示區塊 */}
                                        </div> 
                                        {/* 右邊內容區塊 */}  
                                    </div>
                                </div>
                                
                            </div>
                            {/* 右邊區塊 */}
                             
                        </div>
                        {/* 主內容區塊 */}
                    </div>
                )}
                {/* PC版內容 */}

                {/* MB 版內容 */}
                {!isDesktop && mbSwiperLayoutData?.realIndex === 2 && (
                    /* 手機板 */
                    <div className='informationPageMB'>
                        <img className='informationPageBg' src="/images/information/bg.jpg" alt="" />
                        <div className='mainBox'>
                            <div className='leftBox'>
                                <div className='swiperOutBox'>
                                    <div className='swiperBox'>
                                        <div className='swiperViewBox'>
                                            <img className='swiperViewBoxBg' src="/images/information/手機板/newsSwiper.png" alt="" />
                                            <div className='viewBox'>
                                            
                                                {/* 縮圖輪播 */}
                                                <Swiper
                                                    className="informationSwiper"
                                                    modules={[Pagination,EffectFade,Autoplay]}
                                                    onSwiper={(swiper) => {
                                                        setSwiperMB(swiper);
                                                    }}
                                                    spaceBetween={16}                 
                                                    loop={true}      
                                                    effect="fade"                                   //啟用淡入淡出
                                                    fadeEffect={{ crossFade: true }}                // 可選：交錯漸變更順
                                                    speed={600}                                     // 可選：動畫時間(毫秒)  
                                                    autoplay={{
                                                        delay: 3000,    // 每 3 秒切換
                                                        disableOnInteraction: false,// 使用者操作後是否繼續播放
                                                        pauseOnMouseEnter: true,//滑鼠移進暫停、移出繼續播放
                                                    }}               
                                                    slidesPerView={1}
                                                    centeredSlides
                                                >
                                                    {
                                                        pageData?.map((item, index) => (
                                                            <SwiperSlide    className='swiperSlide'
                                                                            key={item.id}
                                                            >
                                                                <button className='slide-item'
                                                                        type='button'
                                                                        onClick={()=>{handleGoToNews(item.id)}}>
                                                                    <img className='imgSet' src={item.imgData} alt="" />
                                                                </button>
                                                                
                                                            </SwiperSlide>
                                                        ))
                                                    }
                                                </Swiper>
                                                {/* 縮圖輪播 */}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* 頁碼按鈕 */}
                                    <div ref={inforPaginationMbRef} className="inforPaginationSet"></div>
                                    {/* 頁碼按鈕 */}
                                    
                                </div>
                            </div>
                                    
                            <div className="rightBox">
                                <div className='newsBox'>
                                    <div className='newsTitleBox'>
                                        <img className='newsTitleImgSet' src="/images/information/手機板/newsHead.png" alt="" />
                                        <div className='newsTitleItemBox'>
                                            {
                                                btnSet?.map((item,index)=>{
                                                    return(
                                                        <button key={index} 
                                                                className={`itemBoxSet ${tabBtn.key === item.key?("active"):("")}`} 
                                                                onClick={()=>{setTabBtn(item)}}
                                                        >
                                                            <div className={`itemSet ${item.key}`}></div>
                                                        </button>
                                                    )
                                                })
                                            }
                                            <button className='newsMore'>
                                                <a className='itemSet' href=""></a>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='newsItemsBox'>
                                        {
                                            pageData?.slice(0,5).map((item,index)=>{
                                                return(
                                                    <button key={index}
                                                            type='button'
                                                            className='newsItem'
                                                            onClick={()=>{handleGoToNews(item.id)}}
                                                    >
                                                        <div className={`class ${item.class}`}>
                                                            {
                                                                item.class === "system"? "系統"
                                                                : item.class === "activity"? "活動"
                                                                : item.class === "gamenews"? "新聞"
                                                                : ""
                                                            }
                                                        </div>
                                                        <div className='content'>{item.title}</div>
                                                        <div className='time'>{item.time}</div>
                                                    </button>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className='newsBtnBox'>
                                        <button className='newBtnSet'
                                                type='button'
                                                onClick={()=>{handleGoToNewsList()}}>
                                                    全部新聞
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            {/* 底部按鈕區塊 */}
                            <div className='bottomBox'>
                                {/* 底部按鈕設定 */}
                                <button type="button" 
                                        className='bottomBtn'
                                        onClick={()=>{mbSwiperLayout.slideNext()}}>        
                                </button>
                                {/* 底部按鈕設定 */}
                            </div>
                            {/* 底部按鈕區塊 */}
                        </div>
                    </div>
                    /* 手機板 */
                )}
                {/* MB 版內容 */}
            </section>
            {/* 元件最外圍 */}

            {/* 提示畫面 */}
            <div className="landscapeBlocker">請將手機旋轉至直向模式</div>
            {/* 提示畫面 */}
        </>
    )
}
export default InformationPage;