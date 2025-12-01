
import './_footer.scss';

function Footer(){

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