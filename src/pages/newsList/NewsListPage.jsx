

import { useEffect, useState } from 'react';
import './_newsListPage.scss';
import LeftSide from '../../components/common/leftSide/LeftSide';
import ReactPagination from '../../components/common/頁碼元件/ReactPagination';
import Copyright from '../../components/common/版權區塊/Copyright';
import { useNavigate } from 'react-router-dom';


function NewListPage (){

    //#region 移動頁面前置宣告
        const navigate = useNavigate();
    //#endregion

    //#region 頁碼元件控制用
      //#region 模擬來源資料
      const inputData = [
        "item01","item02","item03","item04","item05","item06","item07","item08","item09","item010","item011","item012",
      ]
      //#endregion

      //#region 當前頁面，初始為第 1 頁
      const [currentPage, setCurrentPage] = useState(1);
      //#endregion

      //#region 一頁中顯示項目上限
      const itemsPerPage = 4;
      //#endregion

      //#region 總頁數設定
      const totalPages = Math.ceil(inputData.length / itemsPerPage);
      //#endregion

      //#region 計算當前要顯示的項目
        //startIndex代表當前顯示的那一頁開始的資料編號
        //endIndex代表當前顯示的那一頁結束的資料編號
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        //currentItems 為最終內容顯示陣列
        const currentItems = inputData.slice(startIndex, endIndex);
      //#endregion
    //#endregion
      
    //#region 版權區塊控制
      const[copyright,setCopyright]=useState(false);
    //#endregion

    //#region 處理頁面移動函式
    const handleGoToIndex = () => {
        navigate(`/`);
    };
    //#endregion

    return(
        <>
            {/* 元件最外圍 */}
            <section className='newsListPage'>
                {/* 側邊面板 */}
                <LeftSide />
                {/* 側邊面板 */}
                {/* 混合版內容 */}
                <div className='newsListShowPage'>
                    {/* 背景 */}
                    <img className='newListPageBg' src="/images/newsList/bg.jpg" alt="" />
                    {/* 背景 */}

                    
                    {/* 主內容區塊 */}
                    <div className='mainBox'>
                        {/* 標題外圍 */}
                        <div className='titleImgBox'>
                            
                            <picture>
                                <source
                                    media="(max-width: 991.98px)"
                                    srcSet="/images/newsList/手機板/intelTit_m.png"
                                />
                                {/* 標題 */}
                                <img
                                    className="titleImgSet"
                                    src="/images/newsList/intelTit.png"
                                    alt="Intel Title"
                                />
                                {/* 標題 */}
                            </picture>
                                
                            {/* 手機版上一頁按鈕外圍 */}
                            <div className='backMbBtnBox d-flex d-lg-none'>
                                <div className="widthBox">
                                    <div className='heightBox'>
                                        {/* 手機版上一頁按鈕 */}
                                        <button className='backBtnSet'
                                                onClick={()=>{handleGoToIndex()}}></button>
                                        {/* 手機版上一頁按鈕 */}
                                    </div>
                                </div>
                            </div>
                            {/* 手機版上一頁按鈕外圍 */}
                        </div>
                        {/* 標題外圍 */}

                        {/* 項目選項外圍 */}
                        <div className='titleItemShowBox mt-12'>
                            {/* 項目選項 */}
                            <div className='titleItemBox'>
                                {/* 項目設定 */}
                                <button className='titleItemSet active'>
                                    <p className='textSet'>最新</p>
                                </button>
                                {/* 項目設定 */}
                                {/* 項目設定 */}
                                <button className='titleItemSet'>
                                    <p className='textSet'>新聞</p>
                                </button>
                                {/* 項目設定 */}
                                {/* 項目設定 */}
                                <button className='titleItemSet'>
                                    <p className='textSet'>活動</p>
                                </button>
                                {/* 項目設定 */}
                                {/* 項目設定 */}
                                <button className='titleItemSet'>
                                    <p className='textSet'>系統</p>
                                </button>
                                {/* 項目設定 */}
                            </div>
                            {/* 項目選項 */}

                            {/* 上一頁按鈕外圍 */}
                            <div className='backBtnBox d-none d-lg-flex'>
                                {/* 上一頁按鈕 */}
                                <button className='backBtnSet'
                                        onClick={()=>{handleGoToIndex()}}>        
                                </button>
                                {/* 上一頁按鈕 */}
                            </div>
                            {/* 上一頁按鈕外圍 */}
                        </div>
                        {/* 項目選項外圍 */}

                        {/* 新聞項目列表外圍 */}
                        <div className='newsListBox'>
                            {
                                currentItems?.map((item,index)=>{
                                    return(
                                        /* 新聞消息項目設定 */
                                        <div key={index} className='newsItemSet'>
                                            {/* 內容設定 */}
                                            <div className='contentBox'>
                                                {/* 上半部區塊 */}
                                                <div className='topBox'>
                                                    <h2 className='title'>「收容測試」測試說明與常見問題解答</h2>
                                                    <div className='time'>2025-06-10</div>
                                                </div>
                                                {/* 上半部區塊 */}

                                                {/* 下半部區塊 */}
                                                <div className='bottomBox'>
                                                    <div className='profile'>異環「收容測試」將於7月3日正式開始！我們整理了測試相關詳細的說明與常見問題解答，請鑒定師們查閱。</div>
                                                    <div className='class system'>系統</div>
                                                </div>
                                                {/* 下半部區塊 */}
                                            </div>
                                            {/* 內容設定 */}
                                        </div>
                                        /* 新聞消息項目設定 */
                                    )
                                })
                            }
                        </div>
                        {/* 新聞項目列表外圍 */}
                        
                        {/* 頁碼區塊 */}
                        <div className='paginationBox'>
                            <ReactPagination 
                                currentPage={currentPage}//當前頁碼
                                totalPages={totalPages}//總頁碼
                                onPageChange={setCurrentPage}//判斷是否更新當前頁碼
                            />
                        </div>
                        {/* 頁碼區塊 */}

                        {/* 版權按鈕 */}
                        <button className={`copyrightBtnSet ${copyright?("active"):("")}`} onClick={()=>{setCopyright(!copyright)}}> 
                            <span className='textSet'>版權訊息</span>
                            <img className='btnIconSet' src="/images/newsList/copyRightArrow.png" alt="" />
                        </button>
                        {/* 版權按鈕 */} 
                    </div>
                    {/* 主內容區塊 */}

                    {/* 版權區塊 */}
                    <div className='copyright'> 
                        <Copyright copyright={copyright}/>
                    </div>
                    {/* 版權區塊 */}
                    
                </div>
                {/* 混合內容 */}
                
            </section>
            {/* 元件最外圍 */}
            {/* 提示畫面 */}
            <div className="landscapeBlocker">請將手機旋轉至直向模式</div>
            {/* 提示畫面 */}
        </>
    )
}
export default NewListPage;

{/* <div className="widthBox">
    <div className='heightBox'>

    </div>
</div> */}
            