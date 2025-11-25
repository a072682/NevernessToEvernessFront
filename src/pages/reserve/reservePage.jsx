



import './_reservePage.scss';

function reservePage (){

    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);
    
    useEffect(() => {
        const resizeHandler = () => {
            setIsDesktop(window.innerWidth >= 992);
        };

        window.addEventListener("resize", resizeHandler);
        return () => window.removeEventListener("resize", resizeHandler);
    }, []);

    return(
        <>
            {/* 元件最外圍 */}
            <section className='reservePage'>
                {/* PC版內容 */}
                {isDesktop && (
                    <div className='reservePagePC'>
                        <img className='reservePageBg' src="/images/reserve/bg.jpg" alt="" />
                        <div className='mainBox'>
                        </div>
                    </div>
                )}
                {/* PC版內容 */}

                {/* MB 版內容 */}
                {!isDesktop && (
                    /* 手機板 */
                    <div className='reservePageMB'>
                        <img className='reservePageBg' src="/images/reserve/bg.jpg" alt="" />
                        <div className='mainBox'>      
                        </div>
                    </div>
                    /* 手機板 */
                )}
                {/* MB 版內容 */}
            </section>
            {/* 元件最外圍 */}
        </>
    )
}
export default reservePage;