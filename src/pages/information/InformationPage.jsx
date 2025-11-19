


import LeftSide from '../../components/common/leftSide/LeftSide';
import './_InformationPage.scss';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';


function InformationPage (){

    const inforPaginationRef = useRef(null);

    const swiperData = [
        {
            id:1,
            imgSm:`${import.meta.env.BASE_URL}images/information/nte250616_01.png`,
        },
        {
            id:2,
            imgSm:`${import.meta.env.BASE_URL}images/information/nte250616_02.jpeg`,
        },
        {
            id:3,
            imgSm:`${import.meta.env.BASE_URL}images/information/nte250616_03.png`,
        },
    ];
    
    const [tabActiveData,setTabActiveData] = useState("news");
    useEffect(()=>{},[tabActiveData]);

    const tabLinkData = [
        {
            class:"news",
        },
        {
            class:"gamenews",
        },
        {
            class:"activity",
        },
        {
            class:"system",
        },
    ]

    const articleData = [
        {
            class:"system",
            content:"「收容測試」測試說明與常見問題解答",
            time:"2025-06-10",
        },
        {
            class:"system",
            content:"「收容測試」正式揭密",
            time:"2025-06-10",
        },
        {
            class:"activity",
            content:"《異環》二創徵集活動開跑！",
            time:"2025-05-28",
        },
        {
            class:"activity",
            content:"《異環》創作者招募計畫啟動！",
            time:"2025-05-19",
        },
        {
            class:"gamenews",
            content:"《異環》宣布將於2024東京電玩展首次參展 TGS玩家特派員招募開跑！",
            time:"2024-09-05",
        },
    ]

    return(
        <>
            {/* 元件最外圍 */}
            <section className='informationPage'>
                <LeftSide />
                <div className='mainBox'>
                    
                    <div className='leftBox'>
                        <div className='swiperBox'>
                            <div className='swiperViewBox'>
                                <div className='viewBox'>
                                    
                                    {/* 縮圖輪播 */}
                                    <Swiper
                                        className="informationSwiper"
                                        modules={[Pagination,EffectFade,Autoplay]}
                                        spaceBetween={16}                 
                                        loop={true}      
                                        effect="fade"                                   //啟用淡入淡出
                                        fadeEffect={{ crossFade: true }}                // 可選：交錯漸變更順
                                        speed={600}                                     // 可選：動畫時間(毫秒)  
                                        autoplay={{
                                            delay: 3000,    // 每 3 秒切換
                                            disableOnInteraction: false,// 使用者操作後是否繼續播放
                                            pauseOnMouseEnter: true,//滑鼠移進暫停、移出繼續播放
                                        }}               
                                        slidesPerView={1}
                                        centeredSlides
                                        pagination={{
                                            //讓頁碼按鈕可以被點擊
                                            clickable: true,
                                            //頁碼按鈕
                                            el: inforPaginationRef.current,
                                        }}
                                        onSwiper={(swiper) => {
                                            //初始化後重新指定 el
                                            swiper.params.pagination.el = inforPaginationRef.current;

                                            //重新初始化 pagination
                                            swiper.pagination.init();
                                            swiper.pagination.render();
                                            swiper.pagination.update();
                                        }}
                                    >
                                        {swiperData.map((item, index) => (
                                            <SwiperSlide    className='swiperSlide'
                                                            key={item.id}
                                            >
                                                {/* bg-primary */}
                                                <img className='slide-item' src={item.imgSm} alt="" />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                    {/* 縮圖輪播 */}

                                </div>
                            </div>
                            {/* 頁碼按鈕 */}
                            {/* 空的為正常 */}
                            {/* 套件會自動填充 */}
                            <div ref={inforPaginationRef} className="inforPaginationSet"></div>
                            {/* 頁碼按鈕 */}
                            
                        </div>
                        
                    </div>
                            
                    <div className="rightBox">
                        <div className='newsBox'>
                            <div className='newsTitleBox'>
                                <img className='newsTitleImgSet' src={`${import.meta.env.BASE_URL}images/information/newsHead.png`} alt="" />
                                <div className='newsTitleItemBox'>
                                    {
                                        tabLinkData?.map((item,index)=>{
                                            return(
                                                <button key={index} 
                                                        className={`itemBoxSet ${tabActiveData === item.class?("active"):("")}`} 
                                                        onClick={()=>{setTabActiveData(item.class)}}
                                                >
                                                    <div className={`itemSet ${item.class} `}></div>
                                                </button>
                                            )
                                        })
                                    }
                                    <button className='newsMore'>
                                        <a className='itemSet' href=""></a>
                                    </button>
                                </div>
                            </div>
                            <div className='newsItemsBox'>
                                {
                                    articleData?.map((item,index)=>{
                                        if(tabActiveData === "news" || tabActiveData === item.class){
                                            return(
                                                <Link key={index} className='newsItem' href="">
                                                    <div className={`class ${item.class}`}>
                                                        {
                                                            item.class === "system"? "系統"
                                                            : item.class === "activity"? "活動"
                                                            : item.class === "gamenews"? "新聞"
                                                            : ""
                                                        }
                                                    </div>
                                                    <div className='content'>{item.content}</div>
                                                    <div className='time'>{item.time}</div>
                                                </Link>
                                            )
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </div>
                        
                </div>
            </section>
            {/* 元件最外圍 */}
        </>
    )
}
export default InformationPage;