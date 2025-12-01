



import { AnimatePresence,motion } from 'framer-motion';
import { MODALS, open } from '../../slice/modalSlice';
import './_reservePage.scss';
import { useDispatch } from 'react-redux';
import { useContext, useEffect, useState } from 'react';
import { SwiperContext } from '../../context/SwiperContext';

function ReservePage ({ onOpen, handleClose}){

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

    //#region 從Context取得手機版layout資料
        const { mbSwiperLayout } = useContext(SwiperContext);
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
            <AnimatePresence>
                {
                    onOpen && (
                        <>
                            {/* 元件最外圍 */}
                            <motion.div className="reservePage"
                                        drag={isDesktop ? "x" : false} //允許直向拖曳
                                        dragDirectionLock //使用者一開始「直向滑動」後（x 軸），就會「鎖定直向拖曳」避免出現滑一滑跑成 y 軸
                                        dragConstraints={{ left: 0, right: 0 }}//Framer Motion 需要一個 dragConstraints 屬性存在才能啟用拖曳不限制移動距離，純粹是解鎖拖曳功能
                                        onDragEnd={(event, info) => { //拖曳結束後觸發（根據滑動距離決定關閉）
                                            if (!isDesktop) {
                                                return;
                                            }
                                            //info.offset.x 從拖曳開始到結束的 位移量（px）。負值 = 往左拉，正值 = 往右拉。
                                            //info.velocity.x：放手當下的 速度（px/s）
                                            if (info.offset.x > 150) { 
                                                // 左滑 info.offset.x < -150
                                                // 右滑 info.offset.x > 150
                                                handleClose();
                                            }
                                        }}
                                        initial={{ x: '100%' }} 
                                        // 進場動畫的起點 一開始的位置：在螢幕外左側（-100%）
                                        // 在螢幕外下側（100%）
                                        animate={{ x:  0 }} // 進場後的最終狀態 當顯示時位置為 0（正常展開）
                                        exit={{ x: '100%' }}
                                        // 離場動畫的終點 螢幕外下側（-100%）
                                        // 在螢幕外下側（100%）
                                        transition={{ type: 'tween', duration: 0.3 }}//控制動畫速度與手感
                                        onWheel={() => { isDesktop ? handleClose() : null }}
                            >
                                {/* 背景 */}
                                <img className='reservePageBg' src="/images/reserve/bg.jpg" alt="" />
                                {/* 背景 */}

                                {/* 混合版內容 */}
                                <div className='mainBox'>
                                    {/* 內容區塊 */}
                                    <div className='contentBox'>
                                        <div className='contentInBox'>
                                            <button className='reserveBtnSet'
                                                    type='button'
                                                    onClick={()=>{dispatch(open(MODALS.ReserveModal));}}
                                            ></button>
                                            <div className='iconBox'>
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
                                            </div>
                                            <div className='reserveTitleImgSet'>
                                                <button type='button'
                                                        className='reserveBottomBtn'
                                                        onClick={()=>{mbSwiperLayout.slideNext()}}
                                                >        
                                                </button>
                                            </div>
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
export default ReservePage;