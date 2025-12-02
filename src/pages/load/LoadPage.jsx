



import { AnimatePresence,motion } from 'framer-motion';
import './_LoadPage.scss';
import { useDispatch } from 'react-redux';
import { useContext, useEffect, useState } from 'react';

function LoadPage ({isLoading}){

    //#region 讀取中央函式前置宣告
        //讀取中央函式前置宣告
        const dispatch = useDispatch();
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

    return(
        <>
            <AnimatePresence mode="wait">
                {
                    isLoading && (
                        <>
                            {/* 元件最外圍 */}
                            <motion.div className="loadPage"
                                        initial={{ opacity: 1 }} 
                                        // 進場動畫的起點 一開始的位置：在螢幕外左側（-100%）
                                        // 在螢幕外下側（100%）
                                        animate={{ opacity: 1 }} // 進場後的最終狀態 當顯示時位置為 0（正常展開）
                                        exit={{ opacity: 0 }}
                                        // 離場動畫的終點 螢幕外下側（-100%）
                                        // 在螢幕外下側（100%）
                                        transition={{ type: 'tween', duration: 0.3 }}//控制動畫速度與手感
                            >
                                {/* 背景 */}
                                <img className='loadPageBg' src="/images/load/bg.jpg" alt="" />
                                {/* 背景 */}

                                {/* 混合版內容 */}
                                <div className='mainBox'>
                                    {/* 內容區塊 */}
                                    <div className='contentBox'>
                                        <div className='contentInBox'>
                                            <p className='textSet'>載入中...</p>
                                        </div>
                                    </div>
                                    {/* 內容區塊 */}

                                    {/* 空間佔位 */}
                                    <div className='maskBox'></div>
                                    {/* 空間佔位 */}

                                    {/* 警戒線貼圖 */}
                                    <div className='cordonImgSet'></div>
                                    {/* 警戒線貼圖 */}

                                    {/* 角色貼圖區塊 */}
                                    <div className='characterImgSet'>
                                        {/* 偵測寬度 */}
                                        <div className='widthBox'>
                                            {/* 偵測寬度 */}
                                            <div className='heightBox'>
                                                {/* 圖片本體 */}
                                                <div className='imgBox'></div>
                                                {/* 圖片本體 */}
                                            </div>
                                            {/* 偵測寬度 */}
                                        </div>
                                        {/* 偵測寬度 */}
                                    </div>
                                    {/* 角色貼圖區塊 */}

                                    {/* 跑馬燈區塊 */}
                                    <div className='MarqueeSet'>
                                        <div className="track">
                                            <div className='contentBox'></div>
                                            <div className='contentBox'></div>
                                        </div>
                                    </div>
                                    {/* 跑馬燈區塊 */}
                                </div>
                                {/* 混合版內容 */}
                            </motion.div>
                            {/* 元件最外圍 */}
                        </>
                    )
                }
            </AnimatePresence>
            {/* 提示畫面 */}
            <div className="landscapeBlocker">請將手機旋轉至直向模式</div>
            {/* 提示畫面 */}
        </>
    )
}
export default LoadPage;