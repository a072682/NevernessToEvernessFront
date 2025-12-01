import './_FrontLayout.scss';
import { matchPath, Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../components/common/Header/Header";
import { useEffect, useRef, useState } from "react";

// Modal元件宣告
import ModalRoot from "../components/common/ModalRoot/ModalRoot";
// Modal元件宣告

// swiper相關宣告
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, } from 'swiper/modules';
// swiper相關宣告

// context元件宣告
import { SwiperContext } from '../context/SwiperContext';
// context元件宣告

//各大分頁
import IndexPage from "../pages/index/IndexPage";
import CharacterPage from "../pages/character/CharacterPage";
import InformationPage from "../pages/information/InformationPage";
import WorldPage from '../pages/world/WorldPage';
import CityPage from '../pages/city/CityPage';
import ReservePage from '../pages/reserve/reservePage';
//各大分頁



function FrontLayout(){

    //#region
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

    //#region 取得網址
    const location = useLocation();
    //#endregion

    //#region 移動頁面前置宣告
    const navigate = useNavigate();
    //#endregion
    
    //#region 綁定手機板swiper
    const [mbSwiperLayout,setMbSwiperLayout] = useState(null);
    useEffect(()=>{},[mbSwiperLayout]);
    //#endregion

    //#region 取得手機板swiper資料
    const [mbSwiperLayoutData,setMbSwiperLayoutData] = useState(null);
    //#endregion

    //#region 讓手機板swiper頁面資料對準網址
    useEffect(() => {
        // 如果手機板swiepr不存在
        if (!mbSwiperLayout){
            //console.log("目前沒抓到swiper");
            return;
        } 
        // 如果手機板swiepr不存在

        //將網址指定給path
        const path = location.pathname;

        // 如果手機板swiepr存在則頁面轉向網址指定頁面
        if(mbSwiperLayout){
            //console.log("有抓到swiper",mbSwiperLayout);
            let index = 0;
            if (path === "/") index = 0;
            if (path === "/character") index = 1;
            if (path === "/information") index = 2;
            if (path === "/world") index = 3;
            if (path === "/city") index = 4;

            mbSwiperLayout?.slideToLoop(index);
        }
        // 如果手機板swiepr存在

    }, [mbSwiperLayout]);
    //#endregion

    //#region 手機板swiper變換頁面時也讓網址同步更新
    useEffect(() => {
        if (!isDesktop && mbSwiperLayoutData) {

            const index = mbSwiperLayoutData.realIndex;

            if (index === 0) navigate("/");
            if (index === 1) navigate("/character");
            if (index === 2) navigate("/information");
            if (index === 3) navigate("/world");
            if (index === 4) navigate("/city");
            if (index === 5) navigate("/");
        }
    }, [mbSwiperLayoutData]);
    //#endregion

    //#region 處理頁碼函式
    const goToPage = (index) => {
        if (mbSwiperLayout) {
            mbSwiperLayout?.slideToLoop(index);
        }
    };
    //#endregion

    //#region 判斷手機板以及桌面板函式
    useEffect(()=>{
        if(isDesktop){
            //console.log("桌面板");
            setMbSwiperLayout(null);
            return;
        }else if(!isDesktop){
            //console.log("手機板");
            return;
        }
    },[isDesktop]);
    //#endregion

    //#region 側邊狀態
        
        //側邊狀態
        const [onOpen, setOnOpen] = useState(false);
        useEffect(()=>{},[onOpen]);

        const handleOpen = () => setOnOpen(true);
        const handleClose = () => setOnOpen(false);
        //側邊狀態
        useEffect(()=>{
            if(isDesktop){
                setOnOpen(false);
            }else if(!isDesktop){
                setOnOpen(true);
            }
        },[isDesktop])
    //#endregion

    const pageData = [
        {
            key:"Index",
            pageData:<IndexPage />,
        },
        {
            key:"Character",
            pageData:<CharacterPage />,
        },
        {
            key:"Information",
            pageData:<InformationPage />,
        },
        {
            key:"World",
            pageData:<WorldPage />,
        },
        {
            key:"City",
            pageData:<CityPage />,
        },
        {
            key:"Reserve",
            pageData:<ReservePage onOpen={onOpen} handleClose={handleClose}/>,
        },
    ]

    return(
        <>  
            {/* value為Provider專用傳遞字眼不可更改 */}
            {/* value只能傳遞一筆資料不能傳遞複數資料因此要把複數資料都打包進物件內放入所以需要內層{} */}
            <SwiperContext.Provider value={{ goToPage,
                                            mbSwiperLayoutData,
                                            mbSwiperLayout,
                                            onOpen,
                                            setOnOpen, 
            }}>
                {/* 整體layout */}
                <Header />
                {/* 桌面板 */}
                {
                    isDesktop && (
                        <>
                            <Outlet />
                            <ReservePage onOpen={onOpen} handleClose={handleClose}/>
                        </>
                        
                    )
                }
                {/* 桌面板 */}

                {/* 手機板 */}
                {!isDesktop && (
                    <>
                        <Swiper
                            className='MbSwiperLayout'
                            onSwiper={(swiper) => {
                                setMbSwiperLayout(swiper);
                            }}
                            onSlideChange={(swiper) => {
                                setMbSwiperLayoutData({...swiper});
                            }}
                            direction="vertical"
                            modules={[EffectFade]}  //需要用到的模組
                            slidesPerView={1}//顯示的輪播片數量
                            centeredSlides={false}//輪播片置中
                            effect="fade"
                            fadeEffect={{ crossFade: true }}                // 可選：交錯漸變更順
                            speed={600}                                     // 可選：動畫時間(毫秒)
                            loop={true}//開啟輪播片循環
                            spaceBetween={0}//輪播片間隔距離(單位:px)
                        >
                        {pageData?.map((item,index) => (
                            // 輪播片本體
                            <SwiperSlide key={index} className='MbSwiperSlide'>
                                {item.pageData}
                            </SwiperSlide>
                            // 輪播片本體
                        ))}
                        </Swiper>
                        
                        {matchPath("/information/NewListPage/*", location?.pathname) && <Outlet />}
                        
                    </>
                )}
                {/* 手機板 */}

                <ModalRoot />
                {/* 整體layout */}
            </SwiperContext.Provider>
        </>
    )
}
export default FrontLayout;