

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './_CheckModal.scss';
import { useEffect } from "react";


function CheckModal ({ modalMsg, setModalMsg, onClose, onSwitch}){

    //#region
    //#endregion

    //#region 跳轉網址前置宣告
        const navigate = useNavigate();
    //#endregion

    //#region 讀取中央函式前置宣告
        const dispatch = useDispatch();
    //#endregion

    //#region 讀取中央登入資料
        //讀取中央資料
        const message = useSelector((state)=>{
            return(
                state.reservation.reservationMessage
            )
        })
        useEffect(()=>{
            //console.log("message:",message);
        },[message])
    //#endregion
    

    //#region 點背景遮罩時Modal關閉,點內容不關
        const handleBackdropClick = (e) => {
            if (e.target === e.currentTarget) onClose?.();
        };
    //#endregion

    return(
        <>
            {/* 遮罩 */}
            <div
                className="CheckModal Contract show" 
                role="dialog"
                onClick={handleBackdropClick}
                aria-modal="true"
                tabIndex={-1}
            >

                {/* 定位至置中效果 */}
                <div className="modalDialog w-100 h-100" onClick={handleBackdropClick}>
                    {/* 偵測寬度 */}
                    <div className="widthBox">
                        {/* 偵測高度 */}
                        <div className="heightBox">
                            {/* model整體元件 */}
                            <div className="modalContent">

                                {/* model本體背景 */}
                                <div className="LoginModalBodySet">
                                    {/* 關閉按鈕 */}
                                    <button className="cloneBtn" onClick={()=>{onClose?.();}}></button>
                                    {/* 關閉按鈕 */}

                                    {/* 內容區塊 */}
                                    <div className="contentBox">

                                        {/* 文字區塊 */}
                                        <div className="textBox">
                                            <div className="textSet">
                                            {
                                                modalMsg !== "登記完成"?(modalMsg):(message)
                                            }
                                            </div>
                                        </div>
                                        {/* 文字區塊 */}

                                        {/* 按鈕區塊 */}
                                        <div className="btnBox">
                                            <button type="button" 
                                                    className="btnSet"
                                                    onClick={()=>{ 
                                                        message?
                                                        ( message === "登記完成" ? (onClose?.()):(onSwitch?.()) )
                                                        :
                                                        ( modalMsg === "登記完成" ?(onClose?.()):(onSwitch?.()) )
                                                    }}>
                                                返回
                                            </button>
                                        </div>
                                        {/* 按鈕區塊 */}
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 偵測高度 */}
                    </div>
                    {/* 偵測寬度 */}
                    
                    
                </div>
            </div>
        </>
    )
}
export default CheckModal