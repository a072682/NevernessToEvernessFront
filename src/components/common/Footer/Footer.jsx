
import './_footer.scss';

function Footer(){
    return(
        <>
            {/* 元件最外圍 */}
            <footer className="footer">
                {/* 桌面板背景 */}
                <img className='footerBgImgSet d-none d-lg-block' src="/images/footer/indexFoot.png" alt="" />
                {/* 桌面板背景 */}

                {/* 主內容區塊 */}
                <div className='footerContentBox'>
                    {/* logo圖片外圍 */}
                    <div className='logoBox d-none d-lg-block'>
                        {/* logo圖片 */}
                        <img className='logoImgSet' src="/images/footer/indexFootNte.png" alt="" />
                        {/* logo圖片 */}
                    </div>
                    {/* logo圖片外圍 */}
                    {/* icon區塊 */}
                    <div className='iconBox'>
                        {/* icon設定 */}
                        <a className='iconSet faceBook' href=""></a>
                        <a className='iconSet youtube' href=""></a>
                        <a className='iconSet discord' href=""></a>
                        <a className='iconSet instagram' href=""></a>
                        <a className='iconSet X' href=""></a>
                        <a className='iconSet playStation' href=""></a>
                        {/* icon設定 */}
                    </div>
                    {/* icon區塊 */}

                    {/* 子標題外圍 */}
                    <div className='subTitleBox d-none d-lg-block'>
                        {/* 子標題圖片設定 */}
                        <img className='subTitleImgSet' src="/images/footer/indexFootWelcome.png" alt="" />
                        {/* 子標題圖片設定 */}
                    </div>
                    {/* 子標題外圍 */}
                </div>
                {/* 主內容區塊 */}
            </footer>
            {/* 元件最外圍 */}
        </>
    )
}
export default Footer;