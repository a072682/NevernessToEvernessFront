

import { useDispatch } from 'react-redux';
import { MODALS, open } from "../../../slice/modalSlice";
import './_leftSide.scss';

function LeftSide (){

    //#region 讀取中央函式前置宣告
        //讀取中央函式前置宣告
        const dispatch = useDispatch();
    //#endregion

    return(
        <>
            {/* 展示區塊 */}
            <div className='showBox d-none d-lg-flex'>
                {/* 檢測寬度 */}
                {/* <div className='widthBox'> */}
                    {/* 檢測高度 */}
                    <div className='heightBox'>
                        {/* 元件本體 */}
                        <div className='leftSide'>
                            {/* 元件按鈕 */}
                            <button className='leftSideBtn'
                                    onClick={()=>{dispatch(open(MODALS.ReserveModal));}}>
                            </button>
                            {/* 元件按鈕 */}
                        </div>
                        {/* 元件本體 */}
                    </div>
                    {/* 檢測高度 */}
                {/* </div> */}
                {/* 檢測寬度 */}
            </div>
            {/* 展示區塊 */}
        </>
        
        
    )
}
export default LeftSide;