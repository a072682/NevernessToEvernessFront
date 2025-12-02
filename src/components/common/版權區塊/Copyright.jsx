

import { useEffect, useState } from 'react';
import './_Copyright.scss';
import { motion,AnimatePresence } from 'framer-motion';

function Copyright ({copyright}){

    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const resizeHandler = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        window.addEventListener("resize", resizeHandler);
        return () => window.removeEventListener("resize", resizeHandler);
    }, []);

    useEffect(()=>{},[copyright]);

    return(
        <>
            <AnimatePresence>
                {
                    copyright && (
                        <motion.div className="copyrightPage"
                                    initial={{ height: 0 }} 
                                    animate={{ height: 'auto' }} // 進場後的最終狀態 當顯示時位置為 0（正常展開）
                                    exit={{ height: 0 }}
                                    transition={{ type: 'tween', duration: 0.3 }}//控制動畫速度與手感
                        >
                            {/* 元件最外圍 */}
                            <section className="copyrightShowBox">
                                <div className='companyLinkBox'>
                                    <a  className='linkItem01' 
                                        href="https://www.iwplay.com.tw/"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                    </a>
                                    <a  className='linkItem02' 
                                        href="https://www.iwplay.com.tw/"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                    </a>
                                </div>
                                <div className='serviceMessageBox'>
                                    <p className='textSet'>服務條款｜隱私權政策</p>
                                    <p className='textSet'>© Hotta Studio, a Perfect World company.<wbr/> All rights reserved.<wbr/> Distributed by Iwplay.</p>
                                </div>
                                <div className='warningMessageBox'>
                                    <div className='imgBox'>
                                        <img className='imgSet' src="/images/newsList/版權區塊/12.png" alt="" />
                                    </div>
                                    <div className='textBox'>
                                        <p className='textSet01'>本遊戲情節涉及性與暴力.</p>
                                        <p className='textSet'>遊戲情節純屬虛構，注意使用時間，切勿沉迷或不當模仿.</p>
                                        <p className='textSet'>部分內容需另支付費用，勿用他人代儲以免觸法.</p>
                                    </div>
                                </div>
                            </section>
                            {/* 元件最外圍 */}
                        </motion.div>
                    )
                }
            </AnimatePresence>
            
        </>
    )
}
export default Copyright;

{/* <div className="widthBox">
    <div className='heightBox'>

    </div>
</div> */}
            