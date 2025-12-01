


import { Nav, Tab } from 'react-bootstrap';
import LeftSide from '../../components/common/leftSide/LeftSide';
import './_WorldPage.scss';
import { Fragment, useContext, useEffect, useRef, useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { SwiperContext } from '../../context/SwiperContext';


function WorldPage (){

    //#region
    //#endregion
    

    //#region 從Context取得手機版layout資料
    const { mbSwiperLayoutData,mbSwiperLayout } = useContext(SwiperContext);
    //#endregion

    //#region 解析度判定
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);

    useEffect(() => {
        const resizeHandler = () => {
            setIsDesktop(window.innerWidth >= 992);
        };

        window.addEventListener("resize", resizeHandler);
        return () => window.removeEventListener("resize", resizeHandler);
    }, []);
    //#endregion

    //#region 桌面板TAB相關
        //#region 桌面板tab控制
        const [activeTab, setActiveTab] = useState('fitst');
        //#endregion

        //#region 桌面板tab顯示內容資料
        const tabData = [
            {
                key:"fitst",
                textContent:"遠離塵囂的「未聞浦」是本地人的度假勝地。恢弘的「理想館」坐落其中，時常舉辦當紅明星演唱會。其自然風光更吸引著遊客前來尋覓野趣：或山間露營，或乘海上列車，在汽笛與鷗聲中，飽覽獨一無二的蔚藍風情。",
                disabled: true,
                swiperImgData:[
                    {
                        id:1-1,
                        imgData:`/images/world/brand1-1.jpg`
                    },
                    {
                        id:1-2,
                        imgData:`/images/world/brand1-2.jpg`
                    },
                ]
            },
            {
                key:"second",
                textContent:"歷史悠久的老城區，因兩座跨海大橋在此交匯，得名「橋間地」。低廉的物價和閒適的生活節奏讓此地躋身海特洛市宜居榜首位，也讓一些風格獨特卻難以盈利的古怪小店得以存續，從而成為老城區偏僻街巷中的獨家風景。",
                disabled: true,
                swiperImgData:[
                    {
                        id:2-1,
                        imgData:`/images/world/brand2-1.jpg`
                    },
                    {
                        id:2-2,
                        imgData:`/images/world/brand2-2.jpg`
                    },
                ]
            },
            {
                key:"third",
                textContent:"作為海特洛市的旅遊天堂，「米格爾區」坐擁全市面積最大的自然風光帶與最高的地標建築，是市民週末休閒的首選之地：漫步上晴塔下，泛舟水菱湖中，抑或一頭紮進諾提克橋商圈，用一次痛快的購物換取一週的好心情。",
                disabled: true,
                swiperImgData:[
                    {
                        id:3-1,
                        imgData:`/images/world/brand3-1.jpg`
                    },
                    {
                        id:3-2,
                        imgData:`/images/world/brand3-2.jpg`
                    },
                ]
            },
            {
                key:"fourth",
                textContent:"大廈林立的新城區，眾多知名企業的總部匯聚於此，形成了海特洛市最為顯赫的財富中心。「新赫蘭德區」雲集各界精英與富豪，不僅是市內最大的富人社區，更孕育出了收益最豐厚、競爭最激烈的異象獵人市場。",
                disabled: true,
                swiperImgData:[
                    {
                        id:4-1,
                        imgData:`/images/world/brand4-1.jpg`
                    },
                    {
                        id:4-2,
                        imgData:`/images/world/brand4-2.jpg`
                    },
                ]
            },
        ]
        //#endregion
    //#endregion

    //#region 桌面板swiper相關
        //#region 桌面板swiper綁定
            const [mainSwiper, setMainSwiper] = useState(null);
            useEffect(()=>{},[mainSwiper])
        //#endregion

        //#region 桌面板swiper控制組件綁定
            const prevRefs = useRef([]);
            const paginationRefs = useRef([]);
            const nextRefs = useRef([]);
        //#endregion

        //dom掛載完成後由useEffect重新綁定宣告
            useEffect(() => {
                if (!mainSwiper) {
                    return;
                }
                if(!isDesktop){
                    return;
                }
                if (mainSwiper && isDesktop) {

                    // 取得index數字
                    const index = tabData.findIndex(tab => tab.key === activeTab);

                    //將swiper資料指定給swiper
                    const swiper = mainSwiper;

                    // 重新綁定 navigation
                    swiper.params.navigation.prevEl = prevRefs.current[index];
                    swiper.params.navigation.nextEl = nextRefs.current[index];

                    // 重新綁定 pagination
                    swiper.params.pagination.el = paginationRefs.current[index];
                    swiper.params.pagination.clickable = true;
                    
                    // 重新初始化 navigation（重要）
                    swiper.navigation.init();
                    swiper.navigation.update();
                    // 重新初始化 pagination（重要）
                    swiper.pagination.init();
                    swiper.pagination.render();
                    swiper.pagination.update();
                }
            }, [mainSwiper]);
        //dom掛載完成後由useEffect重新綁定宣告
    //#endregion

    //#region 手機板swiper相關
        //#region 手機板縮圖swiper綁定
        const [nameMbSwiper, setNameMbSwiper] = useState(null);
        useEffect(()=>{},[nameMbSwiper])
        //#endregion

        //#region 手機板縮圖swiper資料取得
        const [nameMbSwiperData, setNameMbSwiperData] = useState(null);
        useEffect(()=>{},[nameMbSwiperData])
        //#endregion

        //#region 手機板縮圖swiper控制組件綁定
        const namePrevRefs = useRef(null);
        const nameNextRefs = useRef(null);
        //#endregion

        //#region 縮圖swiper初始化綁定宣告
        useEffect(() => {
            if (!nameMbSwiper) {
                return;
            }
            if(isDesktop){
                return;
            }
            if (nameMbSwiper && !isDesktop) {

                //將swiper資料指定給swiper
                const swiper = nameMbSwiper;

                // 重新綁定 navigation
                swiper.params.navigation.prevEl = namePrevRefs.current;
                swiper.params.navigation.nextEl = nameNextRefs.current;
                
                // 重新初始化 navigation（重要）
                swiper.navigation.init();
                swiper.navigation.update();
            }
        }, [nameMbSwiper]);
        //#endregion
        
        //#region 手機板大圖swiper綁定
        const [viewMbSwiper, setViewMbSwiper] = useState(null);
        useEffect(()=>{},[viewMbSwiper])
        //#endregion

        //#region 手機板大圖swiper內部swiper綁定
        const [wordMbSwiper, setWordMbSwiper] = useState(null);
        useEffect(()=>{},[wordMbSwiper])
        //#endregion

        //#region 手機板大圖swiper內部swiper控制組件綁定
        const wordPaginationRef = useRef(null);
        //#endregion

        //#region 大圖swiper初始化綁定宣告
        useEffect(() => {
            if (!viewMbSwiper) {
                return;
            }
            if(isDesktop){
                return;
            }
            if (viewMbSwiper && !isDesktop) {

                //將swiper資料指定給swiper

                const swiper = viewMbSwiper;

                // 重新綁定 navigation
                swiper.params.navigation.prevEl = namePrevRefs?.current;
                swiper.params.navigation.nextEl = nameNextRefs?.current;
                
                // 重新初始化 navigation（重要）
                swiper.navigation.init();
                swiper.navigation.update();
            }
        }, [viewMbSwiper]);
        //#endregion

        //#region 手機板大圖swiper內部swiper初始化綁定宣告
        useEffect(() => {
            if (!wordMbSwiper) {
                return;
            }
            if(isDesktop){
                return;
            }
            if (wordMbSwiper && wordPaginationRef.current && !isDesktop) {

                //將swiper資料指定給swiper
                const swiper = wordMbSwiper;

                // 重新綁定 pagination
                swiper.params.pagination.el = wordPaginationRef?.current;
                swiper.params.pagination.clickable = true;

                // 重新初始化 pagination（重要）
                swiper.pagination.init();
                swiper.pagination.render();
                swiper.pagination.update();
            }
        }, [wordMbSwiper]);
        //#endregion
    //#endregion

    //#region swiper顯示資料
    const nameSwiperData = [
        {
            imgData:"/images/world/手機板/plateTit1 (1).png",
            wordSwiperData:[
                {
                    imgData:"/images/world/手機板/brand1-1 (1).jpg"
                },
                {
                    imgData:"/images/world/手機板/brand1-2 (1).jpg"
                },
            ]
        },
        {
            imgData:"/images/world/手機板/plateTit2 (1).png",
            wordSwiperData:[
                {
                    imgData:"/images/world/手機板/brand2-1 (1).jpg"
                },
                {
                    imgData:"/images/world/手機板/brand2-2 (1).jpg"
                },
            ]
        },
        {
            imgData:"/images/world/手機板/plateTit3 (1).png",
            wordSwiperData:[
                {
                    imgData:"/images/world/手機板/brand3-1 (1).jpg"
                },
                {
                    imgData:"/images/world/手機板/brand3-2 (1).jpg"
                },
            ]
        },
        {
            imgData:"/images/world/手機板/plateTit4 (1).png",
            wordSwiperData:[
                {
                    imgData:"/images/world/手機板/brand4-1 (1).jpg"
                },
                {
                    imgData:"/images/world/手機板/brand4-2 (1).jpg"
                },
            ]
        },
    ]
    //#endregion

    return(
        <>
            {/* 元件最外圍 */}
            <section className="WorldPage">
                {/* PC版內容 */}
                {isDesktop && (
                    <div className={`WorldPagePC ${isDesktop?(""):("d-none")}`}>
                        {/* 桌面板背景 */}
                        <img className='WorldPageBg' src="/images/world/bg.jpg" alt="" />
                        {/* 桌面板背景 */}

                        {/* 側版內容 */}
                        <LeftSide />
                        {/* 側版內容 */}

                        {/* 控制層 顯示元素不存在 */}
                        <Tab.Container activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
                            {/* 主內容區塊 */}
                            <div className='mainBox'>
                                {/* 左邊區塊 */}
                                <div className='lefBox'>
                                    {/* 標題區塊 */}
                                    <div className="titleBox">
                                        {/* 標題設定 */}
                                        <div className={`titleImgSet ${activeTab}`}></div>
                                        {/* 標題設定 */}
                                    </div>
                                    {/* 標題區塊 */}

                                    {/* 文字區塊 */}
                                    <div className='textBox'>
                                        {/* 文字設定 */}
                                        <p className='textSet'>
                                            {
                                                tabData.map((item)=>{
                                                    if(item.key === activeTab){
                                                        return(item.textContent);
                                                    }
                                                })
                                            }
                                        </p>
                                        {/* 文字設定 */}
                                    </div>
                                    {/* 文字區塊 */}
                                    
                                    {/* tab選項區塊設定 */}
                                    <div className='tabImgBox'>
                                        {/* tab選項背景圖片區塊 */}
                                        <div className='tabImgSet'>
                                            {/* tab選項背景圖片 */}
                                            <div className={`numImgSet ${activeTab}`}></div>
                                            {/* tab選項背景圖片 */}
                                        </div>
                                        {/* tab選項背景圖片區塊 */}

                                        {/* Tab 選單區 */}
                                        <Nav className='tab-box'>
                            
                                            {/* 選項按鈕外層 */}
                                            <Nav.Item className='tab-item'>
                                                {
                                                    tabData?.map((item)=>{
                                                        return(
                                                            <Fragment key={item.key}>
                                                                {/* 選項按鈕本體 */}
                                                                <Nav.Link className={`tabLink ${item.key}`} 
                                                                            eventKey={item.key}>
                                                                    <div className='arrowImgSet'></div>
                                                                </Nav.Link>
                                                                {/* 選項按鈕本體 */}
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </Nav.Item>
                                            {/* 選項按鈕外層 */}
                                                        
                                        </Nav>
                                        {/* Tab 選單區 */}
                                    </div>
                                    {/* tab選項區塊設定 */}

                                    {/* <img className='tabImgBox02' src="/images/world/guidepost2.png" alt="" /> */}
                                </div>
                                {/* 左邊區塊 */}

                                {/* 右邊區塊 */}
                                <div className='rightBox'>
                                    <div className='tabViewBox'>
                                        <img className='tabViewBoxBg' src='/images/world/brand02.png' alt="" />
                                        <div className='tabViewImgSet'>
                                            {/* Tab 內容區 */}
                                            <Tab.Content className='h-100'>
                                                {
                                                    tabData?.map((item, index)=>{
                                                        return(
                                                            <Fragment key={item.key}>
                                                                {/* 內容外層 */}
                                                                <Tab.Pane eventKey={item.key}>

                                                                    {/* 元件最外圍 */}
                                                                    <Swiper
                                                                        className='swiper'
                                                                        modules={[Navigation, Pagination]}//需要用到的模組
                                                                        onSwiper={(swiper) => {
                                                                            // 更新 state
                                                                            setMainSwiper(swiper);
                                                                        }}
                                                                        onSlideChange={(swiper) => setMainSwiper({ ...swiper })}
                                                                        slidesPerView={1}//顯示的輪播片數量
                                                                        centeredSlides={true}//輪播片置中
                                                                        loop={true}//開啟輪播片循環
                                                                        spaceBetween={8}//輪播片間隔距離(單位:px)
                                                                    >
                                                                    {item?.swiperImgData.map((imgData,index) => (
                                                                        // 輪播片本體
                                                                        <SwiperSlide key={imgData.id} className='swiperSlide'>
                                                                            {/* 輪播片內容 */}
                                                                            <img className='slide-item' src={imgData.imgData} alt="" />
                                                                            {/* 輪播片內容 */}
                                                                        </SwiperSlide>
                                                                        // 輪播片本體
                                                                    ))}

                                                                    </Swiper>
                                                                    {/* 元件最外圍 */}

                                                                </Tab.Pane>
                                                                {/* 內容外層 */}
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </Tab.Content>
                                            {/* Tab 內容區 */} 
                                        </div>
                                        {
                                            tabData.map((item,index)=>{
                                                return(
                                                    <Fragment key={index}>
                                                        <div    className={`prevBtn ${item.key === activeTab ?("active"):("")}`} 
                                                                ref={(prevBtn) => (prevRefs.current[index] = prevBtn)}>    
                                                        </div>
                                                        <div    className={`worldPaginationBox ${item.key === activeTab ?("active"):("")}`} 
                                                                ref={(pagination) => (paginationRefs.current[index] = pagination)}>        
                                                        </div>
                                                        <div    className={`nextBtn ${item.key === activeTab ?("active"):("")}`} 
                                                                ref={(extBtn) => (nextRefs.current[index] = extBtn)}>
                                                        </div>
                                                    </Fragment>
                                                )
                                            })
                                        }

                                        <div className='utilityPoleBox'>
                                            <div className='stopLightImgSet'>
                                                <div className='LightImgSet'></div>
                                            </div>
                                        </div>
                                        <img className='utilityPoleBox02' src="/images/world/trafficSign2.png" alt="" />
                                    </div>

                                    <img className='tabViewBox02' src="/images/world/brand2.png" alt="" />

                                    
                                    
                                </div>
                                {/* 右邊區塊 */}
                            </div>
                            {/* 主內容區塊 */}
                        </Tab.Container>
                    </div>
                )}
                {/* PC版內容 */}
                
                {/* MB 版內容 */}
                {!isDesktop && mbSwiperLayoutData?.realIndex === 3 && (
                    /* 手機板 */
                    <div className={`WorldPageMB ${isDesktop?("d-none"):("")}`}>
                        {/* 背景 */}
                        <img className='WorldPageBg' src="/images/world/bg.jpg" alt="" />
                        {/* 背景 */}

                        {/* 主內容區塊 */}
                        <div className='mainBox'>
                            
                            {/* 內容顯示區塊 */}
                            <div className='containerBox'>
                                {/* 標題區塊 */}
                                <div className='titleBox'>
                                    <img className='titleImgSet' src="/images/world/手機板/pageViewTit.png" alt="" />
                                </div>
                                {/* 標題區塊 */}

                                {/* 顯示區塊 */}
                                <div className='mainViewBox'>
                                    {/* 偵測寬度 */}
                                    <div className='widthBox'>
                                        {/* 偵測高度 */}
                                        <div className='heightBox'>
                                            {/* 內容顯示區 */}
                                            <div className='contentBox'>
                                                {/* 背景圖片01 */}
                                                <img className='viweImgSet' src="/images/world/手機板/brand02.png" alt="" />
                                                {/* 背景圖片01 */}

                                                {/* 背景圖片02 */}
                                                <img className='viweImgSet02' src="/images/world/手機板/brand03.png" alt="" />
                                                {/* 背景圖片02 */}

                                                {/* swiper顯示區 */}
                                                <div className='swiperBox'>
                                                    {/* 元件最外圍 */}
                                                    <Swiper
                                                        className='viewSwiper'
                                                        modules={[Navigation, Pagination]}//需要用到的模組
                                                        onSwiper={(swiper) => {
                                                            setViewMbSwiper(swiper);
                                                        }}
                                                        slidesPerView={1}//顯示的輪播片數量
                                                        centeredSlides={true}//輪播片置中
                                                        loop={true}//開啟輪播片循環 
                                                        spaceBetween={0}//輪播片間隔距離(單位:px)
                                                        speed={0}
                                                        allowTouchMove={false}
                                                    >
                                                    {
                                                        nameSwiperData?.map((item,num) => (
                                                            // 輪播片本體
                                                            <SwiperSlide key={num} className='swiperSlide'>
                                                                
                                                                <div className='slideItem'>
                                                                    {
                                                                        nameMbSwiperData?.realIndex === num && (
                                                                            <Swiper
                                                                                className='wordSwiper'
                                                                                modules={[Pagination]}
                                                                                onSwiper={(swiper) => {
                                                                                    setWordMbSwiper(swiper);
                                                                                }}
                                                                                slidesPerView={1}
                                                                                loop={true}
                                                                                spaceBetween={0}
                                                                            >
                                                                                {item.wordSwiperData?.map((itemIn,index) => (
                                                                                    <SwiperSlide key={index}                className='wordSwiperSlide'>
                                                                                        <div className='wordSlideItem'>
                                                                                            <img className='imgSet' src={itemIn.imgData} alt="" />
                                                                                        </div>
                                                                                    </SwiperSlide>
                                                                                ))}
                                                                            </Swiper>
                                                                        )
                                                                    }
                                                                </div>
                                                                
                                                            </SwiperSlide>
                                                            // 輪播片本體
                                                        ))
                                                    }
                                                    </Swiper>
                                                    {/* 元件最外圍 */}
                                                </div>
                                                {/* swiper顯示區 */}
                                                
                                                {/* Pagination顯示區塊 */}
                                                <div className='wordPaginationBox'>
                                                    <div    ref={wordPaginationRef} 
                                                            className='wordPagination'></div>
                                                </div>
                                                {/* Pagination顯示區塊 */}

                                                {/* 路燈顯示區塊 */}
                                                <div className='utilityPoleBox'>
                                                    {/* 路燈背景圖片01 */}
                                                    <img className='utilityPoleImgSet' src="/images/world/手機板/trafficSign.png" alt="" />
                                                    {/* 路燈背景圖片01 */}

                                                    {/* 路燈背景圖片02 */}
                                                    <img className='utilityPoleImgSet02' src="/images/world/手機板/brand04.png" alt="" />
                                                    {/* 路燈背景圖片02 */}
                                                    
                                                    {/* 動圖區塊 */}
                                                    <div className='stopLightImgSet'>
                                                        <div className='LightImgSet'></div>
                                                    </div>
                                                    {/* 動圖區塊 */}
                                                </div>
                                                {/* 路燈顯示區塊 */}
                                            </div> 
                                        </div>
                                    </div>         
                                </div>
                                {/* 顯示區塊 */}   
                            </div>
                            {/* 內容顯示區塊 */}
                            
                            {/* 底部控制區塊 */}
                            <div className='controlBox'>
                                <img className='controlBoxImg' src="/images/world/手機板/guidepost.png" alt="" />
                                <button ref={nameNextRefs}
                                        type='button' 
                                        className='nextBtnBox'>
                                    <img className='nextBtnImgSet' src="/images/world/手機板/plateRight.png" alt="" />
                                </button>
                                <div className='nameSwiperViewBox'>
                                    {/* 元件最外圍 */}
                                    <Swiper
                                        className='nameSwiper'
                                        modules={[Navigation]}//需要用到的模組
                                        onSwiper={(swiper) => {
                                            setNameMbSwiper(swiper);
                                            setNameMbSwiperData({...swiper});
                                        }}
                                        onSlideChange={(swiper) => {
                                            setNameMbSwiperData({...swiper});
                                        }}
                                        slidesPerView={1}//顯示的輪播片數量
                                        loop={false}//關閉loop
                                        rewind={true}//開啟循環
                                        speed={0}//動畫時間為0確保瞬間切換
                                        spaceBetween={0}//輪播片間隔距離(單位:px)
                                    >
                                    {nameSwiperData?.map((item,num) => (
                                        // 輪播片本體
                                        <SwiperSlide key={num} className='swiperSlide'>
                                            {/* 輪播片內容 */}
                                            <div className='slide-item imgBox'>
                                                <img className='imgSet' src={item.imgData} alt="" />
                                            </div>
                                            {/* 輪播片內容 */}
                                        </SwiperSlide>
                                        // 輪播片本體
                                    ))}
                                    </Swiper>
                                    {/* 元件最外圍 */}
                                </div>
                                <button ref={namePrevRefs}
                                        type='button' 
                                        className='prevBtnBox'>
                                    <img className='prevBtnImgSet' src="/images/world/手機板/plateLeft.png" alt="" />
                                </button>
                            </div>
                            {/* 底部控制區塊 */}
                            
                            {/* 底部按鈕區塊 */}
                            <div className='bottomBox'>
                                <img className='bottomBoxImg' src="/images/world/bg.jpg" alt="" />
                                {/* 底部按鈕設定 */}
                                <button type="button" 
                                        className='bottomBtn'
                                        onClick={()=>{mbSwiperLayout.slideNext()}}>
                                </button>
                                {/* 底部按鈕設定 */}
                            </div>
                            {/* 底部按鈕區塊 */}
                        </div>
                        {/* 主內容區塊 */}
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
export default WorldPage;