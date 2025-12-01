
import { useDispatch } from 'react-redux';
import Footer from '../../components/common/Footer/Footer';
import './_index.scss';
import { MODALS, open } from '../../slice/modalSlice';
import { useContext, useEffect, useState } from 'react';
import { SwiperContext } from '../../context/SwiperContext';


function IndexPage (){

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
    const { mbSwiperLayout,onOpen,setOnOpen } = useContext(SwiperContext);
    //#endregion

    //#region 判定滑鼠滾輪
    const handleWheel = (event) => {
        if(isDesktop){
            if (event.deltaY > 0) {
                setOnOpen(!onOpen);
            }
        }
        //deltaY等於滾動量 + 滾動方向
        //deltaY > 0  => 往下滾
        //deltaY < 0  => 往上滾
        if(!isDesktop){
            return;
        }
    };
    //#endregion

    return(
        <>
            {/* 元件最外圍 */}
            <section className="index"
                    onWheel={handleWheel}>
                {/* 混合版內容 */}
                <div className='indexPage'>
                    {/* lg以上背景影片 */}
                    <video
                        className="bgVideo d-none d-lg-block"
                        autoPlay //載入後自動播放（行動裝置要搭配 muted 才會生效）
                        muted //把影片靜音（多數瀏覽器要求靜音才允許自動播放）
                        loop //播完自動重頭再播
                        playsInline //在手機上「行內播放」，不會跳全螢幕
                        preload="auto" //盡量預先載入影片（加快開始播放的速度）
                        poster="" //影片尚未播放或載入時顯示的封面圖
                    >
                        <source src="/images/index/nte_pmain_20250514_opt.webm" type="video/webm" />
                        您的瀏覽器不支援影片
                    </video>
                    {/* lg以上背景影片 */}

                    {/* lg以下背景圖片 */}
                    <img className='BgImg d-block d-lg-none' src="/images/index/indexVideoPoster.jpg" alt="" />
                    {/* lg以下背景圖片 */}

                    {/* 右下角PS按鈕 */}
                    <a  className='playStationBtnSet'
                        href="https://nte.pse.is/828787"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img className='playStationImgSet' src="/images/index/go_ps_btn.png" alt="" />
                    </a>
                    {/* 右下角PS按鈕 */}

                    {/* 中央按鈕 */}
                    <div className='contentBox'>
                        {/* 中央按鈕01 */}
                        <a  className='indexBtn01' 
                            href="https://youtu.be/j757prmbLi0?si=-VgM-ppcbYO67yMA"
                            target="_blank"
                            rel="noopener noreferrer">
                        </a>
                        {/* 中央按鈕01 */}

                        {/* 中央按鈕02 */}
                        <button className='indexBtn02'
                                type='button'
                                onClick={()=>{dispatch(open(MODALS.ReserveModal));}}
                        >
                        </button>
                        {/* 中央按鈕02 */}
                    </div>
                    {/* 中央按鈕 */}

                    {/* 底部按鈕區塊 */}
                    <div className='bottomBtnBox d-flex d-lg-none'>
                        {/* 底部按鈕設定 */}
                        <button type="button" 
                                className='bottomBtn'
                                onClick={()=>{mbSwiperLayout.slideNext()}}
                        >
                        </button>
                        {/* 底部按鈕設定 */}
                    </div>
                    {/* 底部按鈕區塊 */}

                    {/* footr內容 */}
                    <Footer />
                    {/* footr內容 */}
                </div>
                {/* 混合版內容 */}
            </section>
            {/* 元件最外圍 */}
            {/* 提示畫面 */}
            <div className="landscapeBlocker">請將手機旋轉至直向模式</div>
            {/* 提示畫面 */}
        </>
    )
}
export default IndexPage;