

import LeftSide from '../../components/common/leftSide/LeftSide';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import './_CityPage.scss';
import { useEffect, useState } from 'react';


function CityPage (){

    const [mainSwiper, setMainSwiper] = useState(null);
    // useEffect(()=>{},[mainSwiper])
    const [numData, setNumData] = useState(null);
    useEffect(()=>{},[numData])

    //#region 
    const numToIndex = {
        0: "first",
        1: "second",
        2: "third",
        3: "fourth",
        4: "fifth",
        5: "sixth",
    };
    //#endregion

    //#region 導覽列資料更新設定
    useEffect(() => {
        setNumData(numToIndex[mainSwiper?.realIndex]);
        
    }, [mainSwiper]);
    //#endregion

    const swiperData = [
        {
            id:1,
            imgData:`${import.meta.env.BASE_URL}images/city/slide1 (1).jpg`
        },
        {
            id:2,
            imgData:`${import.meta.env.BASE_URL}images/city/slide2 (1).jpg`
        },
        {
            id:3,
            imgData:`${import.meta.env.BASE_URL}images/city/slide3 (1).jpg`
        },
        {
            id:4,
            imgData:`${import.meta.env.BASE_URL}images/city/slide4 (1).jpg`
        },
        {
            id:5,
            imgData:`${import.meta.env.BASE_URL}images/city/slide5 (1).jpg`
        },
        {
            id:6,
            imgData:`${import.meta.env.BASE_URL}images/city/slide6 (1).jpg`
        },
    ]

    return(
        <>
            <div className='cityPage'>
                <LeftSide />
                <div className='mainBox'>
                    <div className='basicBox'>
                        <div className='viewBox'>
                            {/* swiper元件最外圍 */}
                            <Swiper
                                className='swiper'
                                modules={[Navigation, Pagination]}//需要用到的模組
                                onSwiper={(swiper) => setMainSwiper({ ...swiper })}
                                onSlideChange={(swiper) => setMainSwiper({ ...swiper })}
                                slidesPerView={1}//顯示的輪播片數量
                                centeredSlides={true}//輪播片置中
                                loop={true}//開啟輪播片循環
                                spaceBetween={8}//輪播片間隔距離(單位:px)
                                pagination={{
                                    //讓頁碼按鈕可以被點擊
                                    clickable: true,
                                    //頁碼按鈕
                                    el: '.paginationBox',
                                }}
                                navigation={{
                                    //右頁按鈕
                                    nextEl: '.nextBtn',
                                    //左頁按鈕
                                    prevEl: '.prevBtn',
                                }}
                            >
                            {swiperData?.map((item,num) => (
                                // 輪播片本體
                                <SwiperSlide key={item.id} className='swiperSlide'>
                                    {/* 輪播片內容 */}
                                    <img className='slide-item' src={item.imgData} alt="" />
                                    {/* 輪播片內容 */}
                                </SwiperSlide>
                                // 輪播片本體
                            ))}
                            </Swiper>
                            {/* swiper元件最外圍 */}
                            <button className='prevBtn'></button>
                            <button className='nextBtn'></button>
                            <div className='textImgBasicBox'>
                                <div className={`textImgBox ${numData}`}></div>
                                
                                <div className='paginationBox'></div>
                            </div> 
                            
                            <div className={`numBox ${numData}`}></div>
                        </div>
                        <div className='viewBoxBgImg01'></div>
                        <div className='viewBoxBgImg02'></div>
                        <div className={`backBox ${mainSwiper?.realIndex > 2?("first"):("second")}`}></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CityPage;