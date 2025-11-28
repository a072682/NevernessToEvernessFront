


import LeftSide from '../../components/common/leftSide/LeftSide';
import './_InformationPage.scss';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';


function InformationPage (){

    //#region 
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
 
    //#region 輪播片相關
        //#region  桌面輪播綁定
        const [swiperPC,setSwiperPC] = useState(null);
        useEffect(()=>{
            if(!swiperPC){
                console.log("桌面消失");
            }else if(swiperPC){
                console.log("桌面出現");
            }
        },[swiperPC]);
        //#endregion

        //#region  手機輪播綁定
        const [swiperMB,setSwiperMB] = useState(null);
        useEffect(()=>{
            if(!swiperMB){
                console.log("手機板消失");
            }else if(swiperMB){
                console.log("手機板出現");
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
    
    //#region tab相關

        //#region tab控制
        const [tabActiveData,setTabActiveData] = useState("news");
        useEffect(()=>{},[tabActiveData]);
        //#endregion

        //#region tab顯示資料
        const tabLinkData = [
            {
                class:"news",
            },
            {
                class:"gamenews",
            },
            {
                class:"activity",
            },
            {
                class:"system",
            },
        ]
        //#endregion

    //#endregion

    //#region 新聞顯示資料
    const articleData = [
        {
            class:"system",
            content:"「收容測試」測試說明與常見問題解答",
            time:"2025-06-10",
        },
        {
            class:"system",
            content:"「收容測試」正式揭密",
            time:"2025-06-10",
        },
        {
            class:"activity",
            content:"《異環》二創徵集活動開跑！",
            time:"2025-05-28",
        },
        {
            class:"activity",
            content:"《異環》創作者招募計畫啟動！",
            time:"2025-05-19",
        },
        {
            class:"gamenews",
            content:"《異環》宣布將於2024東京電玩展首次參展 TGS玩家特派員招募開跑！",
            time:"2024-09-05",
        },
        {
            class:"system",
            content:"「收容測試」測試說明與常見問題解答",
            time:"2025-06-10",
        },
        {
            class:"system",
            content:"「收容測試」正式揭密",
            time:"2025-06-10",
        },
        {
            class:"activity",
            content:"《異環》二創徵集活動開跑！",
            time:"2025-05-28",
        },
        {
            class:"activity",
            content:"《異環》創作者招募計畫啟動！",
            time:"2025-05-19",
        },
        {
            class:"gamenews",
            content:"《異環》宣布將於2024東京電玩展首次參展 TGS玩家特派員招募開跑！",
            time:"2024-09-05",
        },
    ]
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
                                                            {swiperData.map((item, index) => (
                                                                <SwiperSlide    className='swiperSlide'
                                                                                key={item.id}
                                                                >
                                                                    {/* bg-primary */}
                                                                    <img className='slide-item' src={item.imgSm} alt="" />
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
                                                            tabLinkData?.map((item,index)=>{
                                                                return(
                                                                    <button key={index} 
                                                                            className={`itemBoxSet ${tabActiveData === item.class?("active"):("")}`} 
                                                                            onClick={()=>{setTabActiveData(item.class)}}
                                                                    >
                                                                        <div className={`itemSet ${item.class} `}></div>
                                                                    </button>
                                                                )
                                                            })
                                                        }
                                                        <button className='newsMore'>
                                                            <a className='itemSet' href=""></a>
                                                        </button>
                                                    </div>
                                                </div>
                                                {/* 新聞消息標題顯示區塊 */}

                                                {/* 新聞消息顯示區塊 */}
                                                <div className='newsItemsBox'>
                                                    {
                                                        articleData?.map((item,index)=>{
                                                            if(tabActiveData === "news" || tabActiveData === item.class){
                                                                return(
                                                                    <Link key={index} className='newsItem' href="">
                                                                        <div className={`class ${item.class}`}>
                                                                            {
                                                                                item.class === "system"? "系統"
                                                                                : item.class === "activity"? "活動"
                                                                                : item.class === "gamenews"? "新聞"
                                                                                : ""
                                                                            }
                                                                        </div>
                                                                        <div className='content'>{item.content}</div>
                                                                        <div className='time'>{item.time}</div>
                                                                    </Link>
                                                                )
                                                            }
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
                {!isDesktop && (
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
                                                    {swiperData.map((item, index) => (
                                                        <SwiperSlide    className='swiperSlide'
                                                                        key={item.id}
                                                        >
                                                            <img className='slide-item' src={item.imgSm} alt="" />
                                                        </SwiperSlide>
                                                    ))}
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
                                                tabLinkData?.map((item,index)=>{
                                                    return(
                                                        <button key={index} 
                                                                className={`itemBoxSet ${tabActiveData === item.class?("active"):("")}`} 
                                                                onClick={()=>{setTabActiveData(item.class)}}
                                                        >
                                                            <div className={`itemSet ${item.class} `}></div>
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
                                            articleData?.map((item,index)=>{
                                                if(tabActiveData === "news" || tabActiveData === item.class){
                                                    return(
                                                        <Link key={index} className='newsItem' href="">
                                                            <div className={`class ${item.class}`}>
                                                                {
                                                                    item.class === "system"? "系統"
                                                                    : item.class === "activity"? "活動"
                                                                    : item.class === "gamenews"? "新聞"
                                                                    : ""
                                                                }
                                                            </div>
                                                            <div className='content'>{item.content}</div>
                                                            <div className='time'>{item.time}</div>
                                                        </Link>
                                                    )
                                                }
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                                
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