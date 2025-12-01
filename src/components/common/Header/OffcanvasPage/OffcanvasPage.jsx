import { NavLink, useNavigate } from 'react-router-dom';
import './_OffcanvasPage.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { useContext, useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { MODALS, open } from '../../../../slice/modalSlice';
import { SwiperContext } from '../../../../context/SwiperContext';



function OffcanvasPage({ onOpen, handleClose}) {

    const navigate = useNavigate();//頁面跳轉宣告

    //#region 讀取中央函式前置宣告
        //讀取中央函式前置宣告
        const dispatch = useDispatch();
    //#endregion

    
    //控制上一頁問題
        useEffect(() => {
            if (onOpen) {
                document.body.style.overflow = "hidden"; // 🔒 禁止滾動
                // console.log("滾動鎖住");
            }else{
                document.body.style.overflow = "auto"; // ✅ 恢復滾動
                // console.log("滾動解除");
            }
            return () => {
                // console.log("組件解散");
            };
        }, [onOpen]);
    //控制上一頁問題

    //#region 從Context取得goToPage函式
    const { goToPage } = useContext(SwiperContext);
    //#endregion

    //#region 連結設定
    const linkData = [
        {
            goto:"/",
            classData:"indexPage",
        },
        {
            goto:"/character",
            classData:"character",
        },
        {
            goto:"/information",
            classData:"information",
        },
        {
            goto:"/world",
            classData:"world",
        },
        {
            goto:"/city",
            classData:"city",
        },
    ]
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

        

  return (
    <AnimatePresence>
        {   
            onOpen && 
            (
                <>
                    {/* 遮罩區（點擊後關閉） */}
                    <div className="offcanvas-backdropSet" onClick={()=>{handleClose()}}></div>

                    {/* 左側滑出面板本體 */}
                    <motion.div     className="offcanvasPanel"
                                    drag="y" //允許直向拖曳
                                    dragDirectionLock //使用者一開始「直向滑動」後（x 軸），就會「鎖定直向拖曳」避免出現滑一滑跑成 y 軸
                                    dragConstraints={{ top: 0, bottom: 0 }}//Framer Motion 需要一個 dragConstraints 屬性存在才能啟用拖曳不限制移動距離，純粹是解鎖拖曳功能
                                    onDragEnd={(event, info) => { //拖曳結束後觸發（根據滑動距離決定關閉）
                                        //info.offset.x 從拖曳開始到結束的 位移量（px）。負值 = 往左拉，正值 = 往右拉。
                                        //info.velocity.x：放手當下的 速度（px/s）
                                        if (info.offset.y > 150) { 
                                            // 左滑 info.offset.x < -150
                                            // 右滑 info.offset.x > 150
                                            handleClose();
                                        }
                                    }}
                                    initial={{ y: '100%' }} 
                                    // 進場動畫的起點 一開始的位置：在螢幕外左側（-100%）
                                    // 在螢幕外下側（100%）
                                    animate={{ y:  0 }} // 進場後的最終狀態 當顯示時位置為 0（正常展開）
                                    exit={{ y: '100%' }}
                                    // 離場動畫的終點 螢幕外下側（-100%）
                                    // 在螢幕外下側（100%）
                                    transition={{ type: 'tween', duration: 0.3 }}//控制動畫速度與手感
                    >
                        {/* 下方貼圖設定 */}
                        <div className='offcanvasBgImgSet'></div>
                        {/* 下方貼圖設定 */}
                        
                        {/* 本體內容設定 */}
                        <div className="offcanvasBox">
                            {/* 連結選項區塊 */}
                            <div className="offcanvasBodySet">
                                {
                                    linkData?.map((data,index)=>{
                                        return(
                                            // 連結選項設定
                                            <Nav.Link   key={index}
                                                        as={NavLink} 
                                                        to={data.goto} 
                                                        className="offcanvasItemSet"
                                                        onClick={() => {
                                                            goToPage(index);
                                                            handleClose();
                                                        }}>        
                                            
                                                <div className="imgBox">
                                                    <div className='widthBox'>
                                                        <div className='heightBox'>
                                                            <div className={`imgSet ${data.classData}`}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Nav.Link>
                                            // 連結選項設定
                                        )
                                    }) 
                                }
                            </div>
                            {/* 連結選項區塊 */}

                            {/* icon區塊 */}
                            <div className='offcanvasIconBox'>
                                {
                                    iconSet?.map((item,index)=>{
                                        return(
                                            //icon設定
                                            <a  key={index}
                                                className={`offcanvasIconSet ${item.name}`}
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer">    
                                            </a>
                                            //icon設定
                                        )
                                    })
                                }
                            </div>
                        </div>
                        {/* 本體內容設定 */}
                    </motion.div>
                    {/* 左側滑出面板本體 */}
                </>
            )
        }
    </AnimatePresence>
  );
}

export default OffcanvasPage;
