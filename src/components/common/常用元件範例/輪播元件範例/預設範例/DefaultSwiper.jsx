import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import './_DefaultSwiper.scss'; // 引入強化樣式
import { useState } from 'react';


export default function DefaultSwiper() {

    const [mainSwiper, setMainSwiper] = useState(null);
    useEffect(()=>{console.log("更新",mainSwiper)},[mainSwiper])

    const paginationRef = useRef(null);


    return (
        <>
            {/* 元件最外圍 */}
            <Swiper
                className='swiper'
                modules={[Navigation, Pagination, Autoplay]}//需要用到的模組
                onSwiper={(swiper) => {
                    // 更新 state
                    setMainSwiper({ ...swiper });

                    // 重新綁定 pagination 的 DOM
                    swiper.params.pagination.el = paginationRef.current;

                    // 重新初始化 pagination（重要）
                    swiper.pagination.init();
                    swiper.pagination.render();
                    swiper.pagination.update();
                }}
                onSlideChange={(swiper) => setMainSwiper({ ...swiper })}
                slidesPerView={1}//顯示的輪播片數量
                centeredSlides={true}//輪播片置中
                loop={true}//開啟輪播片循環
                spaceBetween={8}//輪播片間隔距離(單位:px)
                autoplay={{
                    delay: 3000,    // 每 3 秒切換
                    disableOnInteraction: false,// 使用者操作後是否繼續播放
                    pauseOnMouseEnter: true,//滑鼠移進暫停、移出繼續播放
                }}
                //如果要暫時關閉則autoplay={false}
                pagination={{
                    //讓頁碼按鈕可以被點擊
                    clickable: true,
                    //頁碼按鈕
                    el: paginationRef.current,
                }}
                navigation={{
                    //右頁按鈕
                    nextEl: '.swiper-button-next',
                    //左頁按鈕
                    prevEl: '.swiper-button-prev',
                }}
                breakpoints={{
                    //斷點
                    992: {
                    spaceBetween: 40,
                    slidesPerView: 1,
                    }
                }}
            >
            {[1,2,3,4,5].map((item,num) => (
                // 輪播片本體
                <SwiperSlide key={num} className='swiperSlide'>
                    {/* 輪播片內容 */}
                    <div className='slide-item'>
                        內容:{item}
                    </div>
                    {/* 輪播片內容 */}
                </SwiperSlide>
                // 輪播片本體
            ))}
                {/* 頁碼按鈕 */}
                {/* 空的為正常 */}
                {/* 套件會自動填充 */}
                <div ref={paginationRef} className="swiper-pagination"></div>
                {/* 頁碼按鈕 */}

                {/* 左右頁按鈕 */}
                <button className="swiper-button-prev d-none border-0 p-0 d-lg-flex justify-content-center align-items-center">
                    <span className="material-symbols-outlined">
                        arrow_back
                    </span>
                </button>
                <button className="swiper-button-next d-none border-0 p-0 d-lg-flex justify-content-center align-items-center">
                    <span className="material-symbols-outlined">
                        arrow_forward
                    </span>
                </button >
                {/* 左右頁按鈕 */}
            </Swiper>
            {/* 元件最外圍 */}
            <div>目前顯示第幾張輪播片 {mainSwiper?.realIndex + 1}</div>
            <div>總輪播數{mainSwiper?.slides.length}</div>
        </>
    );
}
