import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './_ReserveModal.scss';
import { useState } from "react";
import { Dropdown } from "react-bootstrap";

//setHandleLoginPageModal,loginModalShow,setLoginModalShow 都移除

function ReserveModal ({onClose, onSwitch}){

    //#region
    //#endregion

    //#region 跳轉網址前置宣告
        const navigate = useNavigate();
    //#endregion

    //#region 讀取中央函式前置宣告
        const dispatch = useDispatch();
    //#endregion
    

    //#region 點背景遮罩時Modal關閉,點內容不關
        const handleBackdropClick = (e) => {
            if (e.target === e.currentTarget) onClose?.();
        };
    //#endregion


    const [reserveData, setReserveData] = useState({
        area:"",
        phone:"",
        sign:false,
        host:null,
    });

    const phoneRegexMap = {
        "台灣+886": /^09\d{8}$/,      // 09 開頭 + 8 位數
        "香港+852": /^\d{8}$/,         // 8 位數
        "澳門+853": /^\d{8}$/,         // 8 位數
        "其他": /.*/,                  // 不驗證，或你想設成 false 都可
    };

    const handleReserveData = (field, value) => {
        setReserveData(prev => {
            const updated = { ...prev, [field]: value };

            if (field === "area" && value === "區域") {
                updated.area = "其他";
            }

            if (field === "phone") {
                // 目前選到的國家
                const currentArea = prev.area; 
                //確認驗證規則
                const regex = phoneRegexMap[currentArea];
                
                //如果規則存在則執行驗證
                if (regex) {
                    updated.phoneError = !regex.test(value);
                }
            }

            return updated;
        });
    };

    const handleOutPutReserveData = ()=>{
        if( 
            reserveData.area === "" || 
            reserveData.phone === "" ||
            reserveData.sign === false ||
            reserveData.host === null
        ){
            alert("需確實填寫資料");
        }else if(reserveData.area === "區域"){
            console.log("登記完成");
        }else{
            console.log("登記完成");
        }
    }

    // 控制電話input群組下拉元件
    const [openPhone, setOpenPhone] = useState(false);

    const [phoneInputLabelData, setPhoneInputLabelData] = useState("區域");

    const [placeholderData, setPlaceholderData] = useState("請輸入手機號碼");

    const [isChecked, setIsChecked] = useState(true);

    //電話input群組元件展開內容
    const phoneData = [
        {
        label: "區域",
        placeholder:"請輸入手機號碼",
        },
        {
        label: "台灣+886",
        placeholder:"格式0912345678",
        },
        {
        label: "香港+852",
        placeholder:"格式91234567",
        },
        {
        label: "澳門+853",
        placeholder:"格式61234567",
        },
    ];
    //元件展開內容

    

    const imgBox = [
        { type: "ios" },
        { type: "android" },
        { type: "pc" },
        { type: "ps" },
    ]

    const [imgBoxData, setImgBoxData] = useState(null);
    
    return(
        <>
            {/* 遮罩 */}
            <div
                className="ReserveModal Reserve show" 
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
                                <div className="LoginModalBodySet w-100 h-100">
                                    {/* 關閉按鈕 */}
                                    <button className="cloneBtn" onClick={()=>{onClose?.();}}></button>
                                    {/* 關閉按鈕 */}

                                    {/* 內容區塊 */}
                                    <div className="contentBox">

                                        {/* 內容群組01 */}
                                        <div className="topBox">

                                            {/* 標題外圍 */}
                                            <div className="titleImgBox">
                                                {/* 標題圖片 */}
                                                <img className="imgSet" src="/images/modal/手機板/pop_yy_form_tt.png" alt="" />
                                                {/* 標題圖片 */}
                                            </div>
                                            {/* 標題外圍 */}
                                            
                                            {/* 電話input群組 */}
                                            <div className="inputGroup phone">

                                                {/* 元件最外層 */}
                                                <Dropdown   className='CustomDropdown' 
                                                            show={openPhone} onToggle={(isOpen) => setOpenPhone(isOpen)}
                                                >
                                                    {/* 元件標頭 */}
                                                    <Dropdown.Toggle className='DropdownHeader' as="div" onClick={() => {setOpenPhone(!openPhone);}}> 
                                                        {/* 群組標題 */}
                                                        <label  htmlFor="" 
                                                                className="label"
                                                        >
                                                            {phoneInputLabelData}
                                                        </label>
                                                        {/* 群組標題 */}
                                                    </Dropdown.Toggle>
                                                    {/* 元件標頭 */}

                                                    {/* 元件本體 */}
                                                    <Dropdown.Menu  className="dropdownMenuSet">
                                                    {
                                                        phoneData.map((main, index) => (
                                                        /* 內部第一層選項設定 */
                                                        <button key={index} 
                                                                className='menuItemSet' 
                                                                onClick={() => {
                                                                    setPhoneInputLabelData(main.label);
                                                                    setPlaceholderData(main.placeholder);
                                                                    handleReserveData("area",main.label);
                                                                    setOpenPhone(!openPhone);
                                                                    
                                                                }}
                                                        >
                                                            {main.label}
                                                        </button>
                                                        /* 內部第一層選項設定 */
                                                        ))
                                                    }
                                                    </Dropdown.Menu>
                                                    {/* 元件本體 */}
                                                </Dropdown>
                                                {/* 元件最外層 */}

                                                {/* input本體 */}
                                                <input
                                                    type="text"
                                                    className="input"
                                                    placeholder={placeholderData}
                                                    onChange={(event)=>{handleReserveData("phone",event.target.value);}}
                                                />
                                                {/* input本體 */}
                                            </div>
                                            {/* 電話input群組 */}

                                            {/* 合約確認input群組 */}
                                            <div className="inputGroup checkBox">
                                                {/* check本體 */}
                                                <input
                                                    type="checkbox"
                                                    id="checkBox"
                                                    className="input"
                                                    checked={isChecked}
                                                    onChange={(event) => {
                                                        setIsChecked(event.target.checked);
                                                        handleReserveData("sign",event.target.checked);
                                                    }}
                                                />
                                                {/* check本體 */}
                                                
                                                {/* 標題 */}
                                                <label  htmlFor="checkBox" 
                                                        className="label"
                                                        onClick={()=>{onSwitch?.();}}>
                                                    同意艾玩天地依照個人資料處理辦法蒐集、處理及利用您的個人資料
                                                </label>
                                                {/* 標題 */}
                                            </div>
                                            {/* 合約確認input群組 */}
                                        </div>
                                        {/* 內容群組01 */}
                                        
                                        {/* 內容群組02 */}
                                        <div className="bottomBox">

                                            {/* 文字設定 */}
                                            <p className="textSet">* 請選擇預約平台（單選</p>
                                            {/* 文字設定 */}

                                            {/* 圖片群組 */}
                                            <div className="imgBox">
                                                {
                                                    imgBox?.map((data,index)=>{
                                                        return(
                                                            <button key={index}
                                                                    type="button" 
                                                                    className={`imgSet ${data.type} ${imgBoxData === data.type ? ("active"):("")}`} 
                                                                    alt=""
                                                                    onClick={()=>{
                                                                        setImgBoxData(data.type);
                                                                        handleReserveData("host",data.type);
                                                                    }}
                                                            />
                                                        )
                                                    })
                                                }
                                            </div>
                                            {/* 圖片群組 */}

                                            {/* 文字設定 */}
                                            <p className="textSet">選擇您的設備，點擊「預約」代表您同意我們向您的手機號發送短信通知或以手機號參與活動</p>
                                            {/* 文字設定 */}

                                            {/* 送出按鈕設定 */}
                                            <button type="button" 
                                                    className="btnSet"
                                                    onClick={()=>{handleOutPutReserveData();}}
                                            >
                                            </button>
                                            {/* 送出按鈕設定 */}

                                        </div>
                                        {/* 內容群組02 */}
                                        
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
export default ReserveModal