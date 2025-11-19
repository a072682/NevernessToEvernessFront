


import { Nav, Tab } from 'react-bootstrap';
import LeftSide from '../../components/common/leftSide/LeftSide';
import './_WorldPage.scss';
import { Fragment, useEffect, useRef, useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';


function WorldPage (){

    const [activeTab, setActiveTab] = useState('fitst');//tab控制
    
    const tabData = [
        {
            key:"fitst",
            textContent:"遠離塵囂的「未聞浦」是本地人的度假勝地。恢弘的「理想館」坐落其中，時常舉辦當紅明星演唱會。其自然風光更吸引著遊客前來尋覓野趣：或山間露營，或乘海上列車，在汽笛與鷗聲中，飽覽獨一無二的蔚藍風情。",
            disabled: true,
            swiperImgData:[
                {
                    id:1-1,
                    imgData:`${import.meta.env.BASE_URL}images/world/brand1-1.jpg`
                },
                {
                    id:1-2,
                    imgData:`${import.meta.env.BASE_URL}images/world/brand1-2.jpg`
                },
            ]
        },
        {
            key:"second",
            textContent:"歷史悠久的老城區，因兩座跨海大橋在此交匯，得名「橋間地」。低廉的物價和閒適的生活節奏讓此地躋身海特洛市宜居榜首位，也讓一些風格獨特卻難以盈利的古怪小店得以存續，從而成為老城區偏僻街巷中的獨家風景。",
            disabled: true,
            swiperImgData:[
                {
                    id:2-1,
                    imgData:`${import.meta.env.BASE_URL}images/world/brand2-1.jpg`
                },
                {
                    id:2-2,
                    imgData:`${import.meta.env.BASE_URL}images/world/brand2-2.jpg`
                },
            ]
        },
        {
            key:"third",
            textContent:"作為海特洛市的旅遊天堂，「米格爾區」坐擁全市面積最大的自然風光帶與最高的地標建築，是市民週末休閒的首選之地：漫步上晴塔下，泛舟水菱湖中，抑或一頭紮進諾提克橋商圈，用一次痛快的購物換取一週的好心情。",
            disabled: true,
            swiperImgData:[
                {
                    id:3-1,
                    imgData:`${import.meta.env.BASE_URL}images/world/brand3-1.jpg`
                },
                {
                    id:3-2,
                    imgData:`${import.meta.env.BASE_URL}images/world/brand3-2.jpg`
                },
            ]
        },
        {
            key:"fourth",
            textContent:"大廈林立的新城區，眾多知名企業的總部匯聚於此，形成了海特洛市最為顯赫的財富中心。「新赫蘭德區」雲集各界精英與富豪，不僅是市內最大的富人社區，更孕育出了收益最豐厚、競爭最激烈的異象獵人市場。",
            disabled: true,
            swiperImgData:[
                {
                    id:4-1,
                    imgData:`${import.meta.env.BASE_URL}images/world/brand4-1.jpg`
                },
                {
                    id:4-2,
                    imgData:`${import.meta.env.BASE_URL}images/world/brand4-2.jpg`
                },
            ]
        },
    ]

    const [mainSwiper, setMainSwiper] = useState(null);
    useEffect(()=>{},[mainSwiper])

    const prevRefs = useRef([]);
    const paginationRefs = useRef([]);
    const nextRefs = useRef([]);

    return(
        <>
            {/* 元件最外圍 */}
            <section className='WorldPage'>
                <LeftSide />
                 {/* 控制層 顯示元素不存在 */}
                <Tab.Container activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
                    <div className='mainBox'>
                        <div className='lefBox'>
                            <div className="titleBox">
                                <div className={`titleImgSet ${activeTab}`}></div>
                            </div>
                            <div className='textBox'>
                                <p className='textSet'>
                                    {
                                        tabData.map((item)=>{
                                            if(item.key === activeTab){
                                                return(item.textContent);
                                            }
                                        })
                                    }
                                </p>
                            </div>
                            <div className='tabImgBox'>
                                <div className='tabImgSet'>
                                    <div className={`numImgSet ${activeTab}`}></div>
                                </div>
                                {/* Tab 選單區 */}
                                <Nav className='tab-box'>
                    
                                    {/* 選項按鈕外層 */}
                                    <Nav.Item className='tab-item'>
                                        {
                                            tabData?.map((item)=>{
                                                return(
                                                    <Fragment key={item.key}>
                                                        {/* 選項按鈕本體 */}
                                                        <Nav.Link className={`tabLink ${item.key}`} 
                                                                    eventKey={item.key}>
                                                            <div className='arrowImgSet'></div>
                                                        </Nav.Link>
                                                        {/* 選項按鈕本體 */}
                                                    </Fragment>
                                                )
                                            })
                                        }
                                    </Nav.Item>
                                    {/* 選項按鈕外層 */}
                                                
                                </Nav>
                                {/* Tab 選單區 */}
                            </div>
                            <div className='tabImgBox02'></div>
                        </div>
                        <div className='rightBox'>
                            <div className='tabViewBox'>
                                <div className='tabViewImgSet'>
                                    {/* Tab 內容區 */}
                                    <Tab.Content className='h-100'>
                                        {
                                            tabData?.map((item, index)=>{
                                                return(
                                                    <Fragment key={item.key}>
                                                        {/* 內容外層 */}
                                                        <Tab.Pane eventKey={item.key}>

                                                            {/* 元件最外圍 */}
                                                            <Swiper
                                                                className='swiper'
                                                                modules={[Navigation, Pagination]}//需要用到的模組
                                                                onSwiper={(swiper) => {
                                                                    // 更新 state
                                                                    setMainSwiper({ ...swiper });

                                                                    // 綁定 navigation
                                                                    swiper.params.navigation.prevEl = prevRefs.current[index];
                                                                    swiper.params.navigation.nextEl = nextRefs.current[index];

                                                                    // 綁定 pagination
                                                                    swiper.params.pagination.el = paginationRefs.current[index];
                                                                    swiper.params.pagination.clickable = true;
                                                                    
                                                                    // 重新初始化 navigation（重要）
                                                                    swiper.navigation.init();
                                                                    swiper.navigation.update();
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
                                                            >
                                                            {item?.swiperImgData.map((imgData,index) => (
                                                                // 輪播片本體
                                                                <SwiperSlide key={imgData.id} className='swiperSlide'>
                                                                    {/* 輪播片內容 */}
                                                                    <img className='slide-item' src={imgData.imgData} alt="" />
                                                                    {/* 輪播片內容 */}
                                                                </SwiperSlide>
                                                                // 輪播片本體
                                                            ))}

                                                            </Swiper>
                                                            {/* 元件最外圍 */}

                                                        </Tab.Pane>
                                                        {/* 內容外層 */}
                                                    </Fragment>
                                                )
                                            })
                                        }
                                    </Tab.Content>
                                    {/* Tab 內容區 */} 
                                </div>
                                {
                                    tabData.map((item,index)=>{
                                        return(
                                            <Fragment key={index}>
                                                <div    className={`prevBtn ${item.key === activeTab ?("active"):("")}`} 
                                                        ref={(prevBtn) => (prevRefs.current[index] = prevBtn)}>    
                                                </div>
                                                <div    className={`worldPaginationBox ${item.key === activeTab ?("active"):("")}`} 
                                                        ref={(pagination) => (paginationRefs.current[index] = pagination)}>        
                                                </div>
                                                <div    className={`nextBtn ${item.key === activeTab ?("active"):("")}`} 
                                                        ref={(extBtn) => (nextRefs.current[index] = extBtn)}>
                                                </div>
                                            </Fragment>
                                        )
                                    })
                                }
                            </div>
                            <div className='tabViewBox02'></div>
                            <div className='utilityPoleBox'>
                                <div className='stopLightImgSet'>
                                    <div className='LightImgSet'></div>
                                </div>
                            </div>
                            <div className='utilityPoleBox02'></div>
                        </div>
                    </div>
                </Tab.Container>
            </section>
            {/* 元件最外圍 */}
        </>
    )
}
export default WorldPage;