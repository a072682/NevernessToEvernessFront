

import LeftSide from '../../components/common/leftSide/LeftSide';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import './_CityPage.scss';
import { useContext, useEffect, useRef, useState } from 'react';
import { SwiperContext } from '../../context/SwiperContext';


function CityPage (){

    //#region SEO流程宣告
    useEffect(() => {
        //標題
        document.title = "遊戲亮點介紹頁 | 自我練習的還原自製遊戲網站";

        //簡介
        let metaTag = document.querySelector("meta[name='description']");
        if (!metaTag) {
            metaTag = document.createElement("meta");
            metaTag.setAttribute("name", "description");
            document.head.appendChild(metaTag);
        }
        metaTag.setAttribute(
            "content",
            "走進異環的特色世界，體驗在超自然都市中探索高空地標、參與多樣任務與事件。六大特色玩法揭開異環世界的真實面貌。",
        );
    }, []);
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

    //#region 從Context取得手機版layout資料
        const { mbSwiperLayout,mbSwiperLayoutData } = useContext(SwiperContext);
    //#endregion    

    //#region swiper相關
        //#region swiper綁定宣告
        const [mainSwiper, setMainSwiper] = useState(null);
        useEffect(()=>{},[mainSwiper])
        //#endregion

        //#region 取得swiper資料
        const [mainSwiperData, setMainSwiperData] = useState(null);
        useEffect(()=>{},[mainSwiperData])
        //#endregion

        //#region swiper控制元件綁定宣告
        const paginationRef = useRef(null);
        const prevRef = useRef(null);
        const nextRef = useRef(null);
        //#endregion

        //#region swiper初始化綁定
        useEffect(() => {
            if (!mainSwiperData) {
                return;
            }
            if(isDesktop){
                return;
            }
            if (mainSwiperData && !isDesktop) {

                //將swiper資料指定給swiper
                const swiper = mainSwiperData;

                // 重新綁定 navigation
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;

                // 重新綁定 pagination
                swiper.params.pagination.el = paginationRef.current;
                swiper.params.pagination.clickable = true;
                
                // 重新初始化 navigation（重要）
                swiper.navigation.init();
                swiper.navigation.update();
                // 重新初始化 pagination（重要）
                swiper.pagination.init();
                swiper.pagination.render();
                swiper.pagination.update();
            }
        }, [mainSwiperData]);
        //#endregion
    
        //#region 數字資料宣告
        const [numData, setNumData] = useState(null);
        useEffect(()=>{},[numData])
        //#endregion

        //#region 數字樣式列表
        const numToIndex = {
            0: "first",
            1: "second",
            2: "third",
            3: "fourth",
            4: "fifth",
            5: "sixth",
        };
        //#endregion

        //#region 導覽列資料更新設定
        useEffect(() => {
            setNumData(numToIndex[mainSwiper?.realIndex]);
        }, [mainSwiper]);
        //#endregion

        //#region swiper顯示資料
        const swiperData = [
            {
                id:1,
                imgData:`/images/city/slide1 (1).jpg`,
                imgSmData:"/images/city/手機板/slide1.jpg",
                numImgData:"/images/city/手機板/citySlideNum1.png", 
            },
            {
                id:2,
                imgData:`/images/city/slide2 (1).jpg`,
                imgSmData:"/images/city/手機板/slide2.jpg",
                numImgData:"/images/city/手機板/citySlideNum2.png", 
            },
            {
                id:3,
                imgData:`/images/city/slide3 (1).jpg`,
                imgSmData:"/images/city/手機板/slide3.jpg",
                numImgData:"/images/city/手機板/citySlideNum3.png", 
            },
            {
                id:4,
                imgData:`/images/city/slide4 (1).jpg`,
                imgSmData:"/images/city/手機板/slide4.jpg",
                numImgData:"/images/city/手機板/citySlideNum4.png", 
            },
            {
                id:5,
                imgData:`/images/city/slide5 (1).jpg`,
                imgSmData:"/images/city/手機板/slide5.jpg",
                numImgData:"/images/city/手機板/citySlideNum5.png", 
            },
            {
                id:6,
                imgData:`/images/city/slide6 (1).jpg`,
                imgSmData:"/images/city/手機板/slide6.jpg",
                numImgData:"/images/city/手機板/citySlideNum6.png", 
            },
        ]
        //#endregion
    //#endregion

    return(
        <>
            <div className='cityPage'>
                <h1 className="visually-hidden">城市介紹｜《異環》Neverness to Everness</h1>
                {/* PC版內容 */}
                {isDesktop && (
                    <div className='cityPagePC'>
                        <img className='cityPageBg' src="/images/city/bg.jpg" alt="" />
                        <LeftSide />
                        <div className='mainBox'>
                            <div className='basicBox'>
                                <div className='viewBox'>
                                    {/* swiper元件最外圍 */}
                                    <Swiper
                                        className='swiper'
                                        modules={[Navigation, Pagination]}//需要用到的模組
                                        onSwiper={(swiper) => setMainSwiper({ ...swiper })}
                                        onSlideChange={(swiper) => setMainSwiper({ ...swiper })}
                                        slidesPerView={1}//顯示的輪播片數量
                                        centeredSlides={true}//輪播片置中
                                        loop={true}//開啟輪播片循環
                                        spaceBetween={8}//輪播片間隔距離(單位:px)
                                        pagination={{
                                            //讓頁碼按鈕可以被點擊
                                            clickable: true,
                                            //頁碼按鈕
                                            el: '.paginationBox',
                                        }}
                                        navigation={{
                                            //右頁按鈕
                                            nextEl: '.nextBtn',
                                            //左頁按鈕
                                            prevEl: '.prevBtn',
                                        }}
                                    >
                                    {swiperData?.map((item,num) => (
                                        // 輪播片本體
                                        <SwiperSlide key={item.id} className='swiperSlide'>
                                            {/* 輪播片內容 */}
                                            <img className='slide-item' src={item.imgData} alt="" />
                                            {/* 輪播片內容 */}
                                        </SwiperSlide>
                                        // 輪播片本體
                                    ))}
                                    </Swiper>
                                    {/* swiper元件最外圍 */}
                                    <button className='prevBtn'></button>
                                    <button className='nextBtn'></button>
                                    <div className='textImgBasicBox'>
                                        <div className={`textImgBox ${numData}`}></div>
                                        
                                        <div className='paginationBox'></div>
                                    </div> 
                                    
                                    <div className={`numBox ${numData}`}></div>
                                </div>
                                <div className='viewBoxBgImg01'></div>
                                <div className='viewBoxBgImg02'></div>
                                <div className={`backBox ${mainSwiper?.realIndex > 2?("first"):("second")}`}></div>
                            </div>
                        </div>
                    </div>
                )}
                {/* PC版內容 */}

                {/* MB 版內容 */}
                {!isDesktop && mbSwiperLayoutData?.realIndex === 4 && (
                    /* 手機板 */
                    <div className='cityPageMB'>
                        <img className='cityPageBg' src="/images/city/bg.jpg" alt="" />
                        <div className='mainBox'>
                            <div className='proportionBox'>
                                <div className='limitBox'>
                                    <div className='titleBox'>
                                        <img className='titleImgSet' src="/images/city/手機板/pageCityTit.png" alt="" />
                                    </div>
                                    <div className='basicBox'>
                                        <div className='viewBox'>
                                            <div className='swiperBox'>
                                                {/* 元件最外圍 */}
                                                <Swiper
                                                    className='swiper'
                                                    modules={[Navigation, Pagination]}//需要用到的模組
                                                    onSwiper={(swiper) => {
                                                        setMainSwiper({ ...swiper });
                                                        setMainSwiperData(swiper);
                                                    }}
                                                    onSlideChange={(swiper) => setMainSwiper({ ...swiper })}
                                                    slidesPerView={1}//顯示的輪播片數量
                                                    centeredSlides={false}//輪播片置中
                                                    loop={true}//開啟輪播片循環 
                                                    spaceBetween={0}//輪播片間隔距離(單位:px)
                                                >
                                                {swiperData?.map((item,num) => (
                                                    // 輪播片本體
                                                    <SwiperSlide key={num} className='swiperSlide'>
                                                        {/* 輪播片內容 */}
                                                        <img className='imgSet' src={item.imgSmData} alt="" />
                                                        {/* 輪播片內容 */}
                                                    </SwiperSlide>
                                                    // 輪播片本體
                                                ))}
                                                </Swiper>
                                                {/* 元件最外圍 */}
                                            </div>
                                        </div>
                                        <button ref={prevRef}
                                                className='prevBtnSet'
                                        >
                                            <img className='btnImgSet' src="/images/city/手機板/citySlidePrev.png" alt="" />
                                        </button>
                                        <button ref={nextRef}
                                                className='nextBtnSet'
                                        >
                                            <img className='btnImgSet' src="/images/city/手機板/citySlideNext.png" alt="" />
                                        </button>
                                        {
                                            swiperData?.map((item,index)=>{
                                                return(
                                                    mainSwiper?.realIndex === index && (
                                                        <img key={index} className='bgNumImg' src={item.numImgData} alt="" />
                                                    )
                                                )
                                            })
                                        }
                                        <img className='bgImg01' src="/images/city/手機板/spray1 (1).png" alt="" />
                                        <img className='bgImg02' src="/images/city/手機板/spray2 (1).png" alt="" />
                                    </div>
                                    <div className={`backViewBox ${mainSwiper?.realIndex >= 3?("second"):("first")}`}></div>
                                    <button className='iconBox'
                                            type='button'
                                            onClick={()=>{mbSwiperLayout.slideNext()}}>
                                        <img className='IconSet' src="/images/character/手機板/pageArrow.png" alt="" />
                                    </button>
                                    <div    ref={paginationRef}
                                            className='paginationBox'
                                    >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    /* 手機板 */
                )}
                {/* MB 版內容 */}
            </div>

            {/* 提示畫面 */}
            <div className="landscapeBlocker">請將手機旋轉至直向模式</div>
            {/* 提示畫面 */}
        </>
    )
}
export default CityPage;