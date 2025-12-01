import { Link, NavLink, useLocation } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import OffcanvasPage from "./OffcanvasPage/OffcanvasPage";
import './_Header.scss';
import { useDispatch } from "react-redux";
import { MODALS, open } from "../../../slice/modalSlice";
import { SwiperContext } from "../../../context/SwiperContext";




function Header(){

    //#region
    //#endregion

    //#region 讀取中央函式前置宣告
        //讀取中央函式前置宣告
        const dispatch = useDispatch();
    //#endregion

    //#region 宣告等待狀態
    const [isLoading, setIsLoading] = useState(true);
    //#endregion

    //宣告動畫群組方便控制
    const groupRef = useRef(null);
    const group2Ref = useRef(null);
    const [activeIndex, setActiveIndex] = useState(1);

    useEffect(() => {
        if (!groupRef.current || !group2Ref.current) return;

        // 1. 移除 play
        groupRef.current.classList.remove("play");
        group2Ref.current.classList.remove("play");

        // 2. 強制瀏覽器重新渲染（reflow）
        void groupRef.current.offsetWidth;
        void group2Ref.current.offsetWidth;

        // 3. 再加回 play 讓動畫重播
        groupRef.current.classList.add("play");
        group2Ref.current.classList.add("play");
    }, [activeIndex]);
    //宣告動畫群組方便控制

    //#region 抓取網址
    const location = useLocation();
    //#endregion

    //#region 導覽列資料設定
    const routeToIndex = {
        "/": 1,
        "/character": 2,
        "/information": 3,
        "/world": 4,
        "/city": 5,
    };
    //#endregion

    //#region 導覽列資料更新設定
    useEffect(() => {
        const currentIndex = routeToIndex[location.pathname] || 1;
        setActiveIndex(currentIndex);
    }, [location.pathname]);
    //#endregion
    
    //#region 側邊狀態
        //側邊狀態
            const [onOpen, setOnOpen] = useState(false); // 控制 offcanvas 開關
            useEffect(()=>{},[onOpen]);

            const handleOpen = () => setOnOpen(true);
            const handleClose = () => setOnOpen(false);
        //側邊狀態
    //#endregion

    //#region 音樂相關
        //#region 綁定音樂檔
        const audioRef = useRef(null);
        //#endregion 

        //#region 判定是否播放
        const [isPlaying, setIsPlaying] = useState(false);
        useEffect(()=>{},[isPlaying]);
        //#endregion 

        //#region 處理音樂播放函式
        const handleMusicPlay = () => {
            const audio = audioRef.current;

            if (!audio) return;

            if (isPlaying) {
                audio.pause();
                audio.currentTime = 0;
                setIsPlaying(false);
            } else {
                audio.currentTime = 0;
                audio.play();
                setIsPlaying(true);
            }
        };
        //#endregion 
    //#endregion 

    //#region 連結設定
    const linkData = [
        {
            goto:"/",
            classData:"indexPage",
            ActiveIndex:1,
        },
        {
            goto:"/character",
            classData:"character",
            ActiveIndex:2,
        },
        {
            goto:"/information",
            classData:"information",
            ActiveIndex:3,
        },
        {
            goto:"/world",
            classData:"world",
            ActiveIndex:4,
        },
        {
            goto:"/city",
            classData:"city",
            ActiveIndex:5,
        },
    ]
    //#endregion

    //#region 從Context取得goToPage函式
        const { goToPage } = useContext(SwiperContext);
    //#endregion

    const [expanded, setExpanded] = useState(false);
    
    return(
        <>
            {/* 元件最外圍 */}
            <Navbar expand="lg" className="navBg-set" expanded={expanded} id="siteHeader">
                <div className="navBgImgSet d-none d-lg-block">
                    <img className="navBgImg" src="/images/header/header.png" alt="" />
                </div>
                {/* /*內容本體區塊*/}
                <div className='navbar-box'>
                    {/* 左上角 Logo */}
                    <Link   to="/" 
                            className='navbarLogo-box' 
                            onClick={()=>{
                                goToPage(0);
                                handleClose();
                            }}>
                        <div className="navbarLogoImgBox">
                            <div className="widthBox">
                                <div className="heightBox">
                                    <img className="navbarLogoImg-set" src="/images/header/NTE_logo.png" alt="home-section2-1" />
                                </div>
                            </div>
                        </div>
                    </Link>
                    {/* 左上角 Logo */}

                    
                    {/* lg 以上選項區塊 */}
                    <div className="navbarItem-box d-none d-lg-flex">
                        {/* 遮罩 */}
                        <div className="navbarItemMask"></div>
                        {/* 遮罩 */}
                        {/* link選項 */}
                        {
                            linkData?.map((data,index)=>{
                                return(
                                    <div key={index} className="navbarItemBoxSet">
                                        <Nav.Link as={NavLink} to={data.goto} className={`navbarItem-set ${data.classData}`} onClick={() => setActiveIndex(data.ActiveIndex)}></Nav.Link>
                                    </div>
                                )
                            })
                        }
                        {/* link選項 */}
                        {/* 動畫群組01 */}
                        <div className={`animationGroup 
                                        ${activeIndex !== null ? "play" : ""} 
                                        shiftRight0${activeIndex}`} 
                            ref={groupRef}>
                            {/* 動畫細項 */}
                            <img className='animationItem01' src="/images/header/動畫群組01/city_shadow1.png" alt="" />
                            <img className='animationItem02' src="/images/header/動畫群組01/city_shadow2.png" alt="" />
                            <img className='animationItem03' src="/images/header/動畫群組01/city_shadow3.png" alt="" />
                            <img className='animationItem04' src="/images/header/動畫群組01/city_shadow4.png" alt="" />
                            {/* 動畫細項 */}
                        </div>
                        {/* 動畫群組01 */}

                        {/* 動畫群組02 */}
                        <div className={`animationGroup2
                                        ${activeIndex !== null ? "play" : ""} 
                                        shiftRight0${activeIndex}`}
                            ref={group2Ref}>
                            {/* 動畫細項 */}
                            <img className='animationItem05' src="/images/header/動畫群組02/shadow1.png" alt="" />
                            <img className='animationItem06' src="/images/header/動畫群組02/shadow2.png" alt="" />
                            <img className='animationItem07' src="/images/header/動畫群組02/shadow3.png" alt="" />
                            <img className='animationItem08' src="/images/header/動畫群組02/shadow4.png" alt="" />
                            {/* 動畫細項 */}
                        </div>
                        {/* 動畫群組02 */}
                    </div>
                    {/* lg 以上選項區塊 */}

                    {/* lg 以上icon */}
                    <div className="navbarRightBox d-none d-lg-flex">
                        <button className="loginBox" onClick={()=>{dispatch(open(MODALS.ReserveModal));}}></button>
                        <button className={`musicBox ${isPlaying?("active"):("")}`} onClick={()=>{handleMusicPlay()}}></button>
                    </div>
                    
                    {/* lg 以下選項區塊 */}
                    <div className="navbarMbBox d-flex d-lg-none">
                        {/* lg 以下按鈕區塊 */}
                            
                            <div className="loginShowBox">
                                <div className="widthBox">
                                    <div className="heightBox">
                                        <button className="loginBox" onClick={()=>{dispatch(open(MODALS.ReserveModal));}}></button>
                                    </div>
                                </div>
                            </div>

                            <div className="musicShowBox">
                                <div className="widthBox">
                                    <div className="heightBox">
                                        <button className={`musicBox ${isPlaying?("active"):("")}`} onClick={()=>{handleMusicPlay()}}></button>
                                    </div>
                                </div>
                            </div>

                            <div className="MenuIconBtnShowBox">
                                <div className="widthBox">
                                    <div className="heightBox">
                                        <button className={`MenuIconBtn-set ${onOpen?("active"):("")}`} onClick={()=>{setOnOpen(!onOpen)}}></button>
                                    </div>
                                </div>
                            </div>
                        {/* lg 以下按鈕區塊 */}
                    </div>
                    
                    {/* lg 以下選項區塊 */}
                    
                </div>
                {/* /*內容本體區塊*/}
            </Navbar>
            {/* 元件最外圍 */}
            <OffcanvasPage onOpen={onOpen} handleClose={handleClose}/>
            
            {/* 音樂本體 */}
            <audio ref={audioRef} src="/images/index/nte_gw_bgm_20250514.mp3" preload="auto" />
            {/* 音樂本體 */}
        </>
    )
}

export default Header;
