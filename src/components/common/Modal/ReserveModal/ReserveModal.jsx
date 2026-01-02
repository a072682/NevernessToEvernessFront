import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './_ReserveModal.scss';
import { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { reservationDataUpLoad } from "../../../../slice/reservationSlice";

//setHandleLoginPageModal,loginModalShow,setLoginModalShow 都移除

function ReserveModal ({ setModalMsg, onClose, onSwitch, onSwitchCheckModal }){

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

    //#region 預設預約資料
    const [reserveData, setReserveData] = useState({
        region_code:"其他",//國碼
        phone_number:"",//手機號碼
        platforms:[],//登陸平台
        agree_terms:true,//是否同意合約
    });
    useEffect(()=>{
        //console.log("預約資料:",reserveData);
    },[reserveData]);
    //#endregion

    //#region 驗證規則列表
    const phoneRegexMap = {
        "台灣+886": /^09\d{8}$/,      // 09 開頭 + 8 位數
        "香港+852": /^\d{8}$/,         // 8 位數
        "澳門+853": /^\d{8}$/,         // 8 位數
        "其他": /.*/,                  // 不驗證，或你想設成 false 都可
    };
    //#endregion

    //#region 寫入預約資料
    const handleReserveData = (field, value) => {

        setReserveData(prev => {

            const updated = { ...prev, [field]: value };

            if (field === "region_code" && value === "區域") {
                updated.region_code = "其他";
            }

            if (field === "phone_number") {
                // 目前選到的國家
                const currentArea = prev.region_code; 
                //確認驗證規則
                const regex = phoneRegexMap[currentArea];
                
                //如果規則存在則執行驗證
                //.test是固定寫法意思是檢查一段文字，是否符合這個規則並回傳 true / false
                if (regex) {
                    updated.phoneError = !regex.test(value);
                }
            }

            return updated;
        });
    };
    //#endregion

    //#region 送出預約資料
    const handleOutPutReserveData = ()=>{
        if( 
            reserveData.region_code === "" || 
            reserveData.phone_number === "" ||
            reserveData.platforms.length === 0 ||
            reserveData.agree_terms === false
        ){
            setModalMsg("需確實填寫資料");
            onSwitchCheckModal?.();
        }else if(reserveData.phoneError){
            setModalMsg("請確認電話格式");
            onSwitchCheckModal?.();
        }else if(reserveData.region_code === "區域"){
            setModalMsg("登記完成");
            dispatch(reservationDataUpLoad(reserveData));
            onSwitchCheckModal?.();
        }else{
            setModalMsg("登記完成");
            dispatch(reservationDataUpLoad(reserveData));
            onSwitchCheckModal?.();
        }
    }
    //#endregion

    // 控制電話input群組下拉元件

    //#region 控制國碼下拉選項是否展開
    const [openPhone, setOpenPhone] = useState(false);
    //#endregion

    //#region 國碼顯示內容狀態宣告
    const [phoneInputLabelData, setPhoneInputLabelData] = useState("區域");
    //#endregion

    //#region 手機號碼資料狀態宣告
    const [placeholderData, setPlaceholderData] = useState("請輸入手機號碼");
    //#endregion

    //#region 合約是否同意狀態宣告
    const [isChecked, setIsChecked] = useState(true);
    //#endregion

    //#region 電話input群組元件展開內容
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
    //#endregion

    //#region 主機圖片列表
    const imgBox = [
        { type: "ios" },
        { type: "android" },
        { type: "pc" },
        { type: "ps" },
    ]
    //#endregion

    //#region 主機資料狀態宣告
    const [imgBoxData, setImgBoxData] = useState([]);
    //#endregion

    //#region 主機資料寫入陣列
    const handleImgBoxData = (data) => {
        setImgBoxData((item) => {
            //將存在的數值移除
            //item本身代表的是陣列本身
            //範例:["ios", "pc"].includes("ios"); true
            if (item.includes(data)) {
                //回傳["pc"]
                return item.filter((itemIn) => {return(itemIn !== data)});
            }
            //資料寫入陣列
            return [...item, data];
        });
    }
    //#endregion

    //#region 寫入陣列時觸發
    useEffect(() => {
        handleReserveData("platforms", imgBoxData);
    }, [imgBoxData]);
    //#endregion
    
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
                                                                    handleReserveData("region_code",main.label);
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
                                                    onChange={(event)=>{handleReserveData("phone_number",event.target.value);}}
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
                                                        handleReserveData("agree_terms",event.target.checked);
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
                                                                    className={`imgSet ${data.type} ${imgBoxData.includes(data.type) ? ("active"):("")}`} 
                                                                    alt=""
                                                                    onClick={()=>{handleImgBoxData(data.type);}}
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