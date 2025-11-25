
import { useDispatch } from 'react-redux';
import Footer from '../../components/common/Footer/Footer';
import './_index.scss';
import { MODALS, open } from '../../slice/modalSlice';


function IndexPage (){

    //#region 讀取中央函式前置宣告
        //讀取中央函式前置宣告
        const dispatch = useDispatch();
    //#endregion

    return(
        <>
            <section className="index">
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
                    <button className='playStationBtnSet'>
                        <img className='playStationImgSet' src="/images/index/go_ps_btn.png" alt="" />
                    </button>
                    {/* 右下角PS按鈕 */}

                    {/* 中央按鈕 */}
                    <div className='contentBox'>
                        <button className='indexBtn01'></button>
                        <button className='indexBtn02'
                                type='button'
                                onClick={()=>{dispatch(open(MODALS.ReserveModal));}}
                        >

                        </button>
                    </div>
                    {/* 中央按鈕 */}
                    <Footer />
                </div>
            </section>
            
        </>
    )
}
export default IndexPage;