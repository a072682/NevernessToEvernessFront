




import './_reservePage.scss';

function ReservePage (){

    return(
        <>
            {/* 元件最外圍 */}
            <section className='reservePage'>
                {/* 混合版內容 */}
                <img className='reservePageBg' src="/images/reserve/bg.jpg" alt="" />
                <div className='mainBox'>
                    <div className='contentBox'>
                        <div className='iconBox'>
                            <a className='iconSet faceBook' href=""></a>
                            <a className='iconSet youtube' href=""></a>
                            <a className='iconSet discord' href=""></a>
                            <a className='iconSet instagram' href=""></a>
                            <a className='iconSet X' href=""></a>
                            <a className='iconSet playStation' href=""></a>
                            <button className='reserveBtnSet'></button>
                            <div className='reserveTitleImgSet'></div>
                        </div>
                        <div className='maskBox'></div>
                    </div>
                    <div className='cordonImgSet'></div>
                    {/* 角色貼圖區塊 */}
                    <div className='characterImgSet'>
                        {/* 偵測寬度 */}
                        <div className='widthBox'>
                            {/* 偵測寬度 */}
                            <div className='heightBox'>
                                {/* 圖片本體 */}
                                <div className='imgBox'></div>
                                {/* 圖片本體 */}
                            </div>
                            {/* 偵測寬度 */}
                        </div>
                        {/* 偵測寬度 */}
                    </div>
                    {/* 角色貼圖區塊 */}
                    <div className='MarqueeSet'>
                        <div className="track">
                            <div className='contentBox'></div>
                            <div className='contentBox'></div>
                        </div>
                    </div>
                </div>
                {/* 混合版內容 */}
            </section>
            {/* 元件最外圍 */}
        </>
    )
}
export default ReservePage;