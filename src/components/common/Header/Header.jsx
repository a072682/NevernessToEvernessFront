import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";

import './_Header.scss';



function Header(){

    //#region
    //#endregion
    
    //#region 側邊狀態
        //側邊狀態
            // const [onOpen, setOnOpen] = useState(false); // 控制 offcanvas 開關
            // useEffect(()=>{},[onOpen]);

            // const handleOpen = () => setOnOpen(true);
            // const handleClose = () => setOnOpen(false);
        //側邊狀態
    //#endregion

    

    const [expanded, setExpanded] = useState(false);
    
    return(
        <>
            {/* 元件最外圍 */}
            <Navbar expand="lg" className="navBg-set" expanded={expanded} id="siteHeader">
                {/* /*內容本體區塊*/}
                <div className='navbar-box'>
                    {/* 左上角 Logo */}
                    <Link to="/" className='navbarLogo-box'>
                        <img className="navbarLogoImg-set" src={`${import.meta.env.BASE_URL}assets/images/Header/logo.png`} alt="home-section2-1" />
                    </Link>
                    {/* 左上角 Logo */}

                    
                    {/* lg 以上選項區塊 */}
                    <div className="navbarItem-box d-none d-lg-flex">
                        {/* link選項 */}
                        <Nav.Link as={NavLink} to="/Page0" className="navbarItem-set">Page0</Nav.Link>
                        <Nav.Link as={NavLink} to="/Page1" className="navbarItem-set">Page1</Nav.Link>
                        {/* link選項 */}
                    </div>
                    {/* lg 以上選項區塊 */}

                    {/* lg 以上會員頭像 */}
                    <button className="userImg-box d-none d-lg-flex">
                        <img className="userImg-set" src={`${import.meta.env.BASE_URL}assets/images/Header/log01.png`} alt="log01" />
                    </button>
                     
                    {/* lg 以下的右上角：漢堡選單按鈕 */}
                    <div className="navbarMenuIcon-box d-flex d-lg-none">
                        <button className="MenuIconBtn-set">
                            <img className="MenuIconImg-set" src={`${import.meta.env.BASE_URL}assets/images/Header/齒輪.png`} alt="齒輪" />
                        </button>
                    </div>
                    {/* lg 以下的右上角：漢堡選單按鈕 */}
                </div>
                {/* /*內容本體區塊*/}
            </Navbar>
            {/* 元件最外圍 */}
            {/* <OffcanvasPage onOpen={onOpen} handleClose={handleClose} loginState={loginState}/> */}
        </>
    )
}

export default Header;
