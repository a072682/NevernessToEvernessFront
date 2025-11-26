

import './_CharacterPage.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,EffectFade } from 'swiper/modules';
import { useEffect, useRef, useState } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import LeftSide from '../../components/common/leftSide/LeftSide';


function CharacterPage (){

    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);

    useEffect(() => {
        const resizeHandler = () => {
            setIsDesktop(window.innerWidth >= 992);
        };

        window.addEventListener("resize", resizeHandler);
        return () => window.removeEventListener("resize", resizeHandler);
    }, []);

    // 縮圖輪播顯示資料
    const ThumbSwiperData01 = [
        {
            id:"1-1",
            imgSm:`/images/character/factions1_nav1.jpg`,
            role:`/images/character/factions1_role1_des.png`,
            profile:[
                "古董店「伊波恩」的一號台柱，橋間地最有名望的家族老大，海特洛市前途無量的異能者之星！",
                "穩重威嚴，慷慨仁慈，睿智冷靜。",
                "曾參與「團三郎的復仇」「棉絨絨魔王對決」「V級暴怒GR雲危機」等多起大型異象收容、泯除行動，以一招「柯林斯終極幽魂暗影裂空霆焰魔拳」掃蕩四方，從無敗績！",
            ],
            video:`/images/character/nte_pbgv_nanali_20250513_opt.webm`,
        },
        {
            id:"1-2",
            imgSm:`/images/character/factions1_nav2.jpg`,
            role:`/images/character/factions1_role2_des.png`,
            profile:[
                "「第一，不準給鬼郎丸亂餵東西！",
                "第二，不準低頭看人！",
                "第三，不準打開冰箱冷藏室第三格！」",
                "早霧，古董店「伊波恩」冰箱便利貼規則制定者——",
                "雖然到現在，真正遵循的人……咳，屈指可數。",
                "要是惹惱了早霧，記得提防她那把名叫「鬼郎丸」的異象巨錘，別靠得太近……",
                "「什麼東西被吞了，又或是被咬了屁股，伊波恩古董店概不負責。」",
            ],
            video:`/images/character/nte_pbgv_zaowu_20250513_opt.webm`,
        },
        {
            id:"1-3",
            imgSm:`/images/character/factions1_nav3.jpg`,
            role:`/images/character/factions1_role3_des.png`,
            profile:[
                "對各類異象的「奇點」有著敏銳的洞察力，由空白與謎團中現身的異能者。",
                "接受了管理局的安排，作為新進的「鑒定師」，加入到了（經營狀況不容樂觀的）古董店兼異象獵人團體「伊波恩」。",
                "似乎還未取得異象獵人資格證……在這種情況下展開工作真的沒問題嗎？",
                "「哎呀，要說完全合規的東西，恐怕我們店里根本數不上幾件，不也照樣還能開業嗎？像招財寶這樣有潛力的店員呀，稍稍有那麽一點點不合規，不會有問題的！」",
                "……既然店長潯都這麽說了，就安心地放眼接下來繽紛多彩的都市生活吧！",
            ],
            video:`/images/character/nte_pbgv_nanzhu_20250621_opt.webm`,
        },
        {
            id:"1-4",
            imgSm:`/images/character/factions1_nav4.jpg`,
            role:`/images/character/factions1_role3_des.png`,
            profile:[
                "對各類異象的「奇點」有著敏銳的洞察力，由空白與謎團中現身的異能者。",
                "接受了管理局的安排，作為新進的「鑒定師」，加入到了（經營狀況不容樂觀的）古董店兼異象獵人團體「伊波恩」。",
                "似乎還未取得異象獵人資格證……在這種情況下展開工作真的沒問題嗎？",
                "「哎呀，要說完全合規的東西，恐怕我們店里根本數不上幾件，不也照樣還能開業嗎？像招財寶這樣有潛力的店員呀，稍稍有那麽一點點不合規，不會有問題的！」",
                "……既然店長潯都這麽說了，就安心地放眼接下來繽紛多彩的都市生活吧！",
            ],
            video:`/images/character/nte_pbgv_nvzhu_20250621_opt.webm`,
        },
    ];

    const w_ThumbSwiperData01 = [...ThumbSwiperData01,...ThumbSwiperData01];

    const ThumbSwiperData02 = [
        {
            id:"2-1",
            imgSm:`/images/character/factions2_nav1.jpg`,
            role:`/images/character/factions2_role1_des.png`,
            profile:[
                "異象管理局收容二組預備幹部，同事街坊人名辭典，海特洛市平價美食活地圖。",
                "從總務處不苟言笑的財務姐姐到員工食堂的手抖大叔，從卜多力小屋的寡言大將到DSD潮玩店的熱情店員，都能上前大聊特聊……當然，是工作外的時間！",
                "什麼都可以漫天發散，沒有他接不住的話題……大概。",
                "異象管理局每次收容安全考試的成績除外。",
            ],
            video:`/images/character/nte_pbgv_bohe_20250513_opt.webm`,
        },
        {
            id:"2-2",
            imgSm:`/images/character/factions2_nav2.jpg`,
            role:`/images/character/factions2_role2_des.png`,
            profile:[
                "「親眼所見！那小姑娘把販賣機橫著一抬，隨手晃了晃，就把裡面的番茄醬通通搖了出來。」",
                "「噢？不會用自動販賣機？真是缺乏生活常識的孩子呢，你怎麼不去幫幫人家？」",
                "「那……我可不敢！要是沒認錯的話，她是E.T.D的那幫人！怪人！怪力！怪癖！總感覺隨便上去搭話，我的下場會和滿地的番茄醬一樣……」",
                "空空的「番茄百分百」自動販賣機前，抱著滿懷番茄醬的安魂曲打了個噴嚏。",
            ],
            video:`/images/character/nte_pbgv_anhunqu_20250513_opt.webm`,
        },
        {
            id:"2-3",
            imgSm:`/images/character/factions2_nav3.jpg`,
            role:`/images/character/factions2_role3_des.png`,
            profile:[
                "即使是在「異類眾多」的E.T.D，那位為所欲為的法莉婭小姐，也是異象管理局多數同僚難以招架的存在。",
                "「——那次協助E.T.D四隊的收容行動中，我小聲提醒她『指令上要求不造成任何傷亡損失』，她對我笑得那麼好看，還悄悄讓我閉上眼睛……」",
                "「我其實、其實也沒有在期待什麼……然後嘴巴就被封住了！」",
                "「——嗚嗚嗚嗚嗚嗚……那可是我的初吻啊，怎麼就獻給了一隻剛鑽了下水道的歧骸啊！！！……」",
                "若是平時，這位肆無忌憚的當事人或許還有心情再去逗弄那些亂了陣腳的可憐蟲，但當一個更能讓她血脈噴張目眩神迷的獵物閃現在她的獵場時——",
                "「啊啊~你又能讓我享用到怎樣的痛楚呢？真是令人，無比期待啊！」",
            ],
            video:`/images/character/nte_pbgv_fadiya_20250513_opt.webm`,
        },
        {
            id:"2-4",
            imgSm:`/images/character/factions2_nav4.jpg`,
            role:`/images/character/factions2_role4_des.png`,
            profile:[
                "異象管理局E.T.D四隊隊長，白藏——隨性散漫，出言無狀，工作摸魚大師，麻煩制造機。",
                "在管理局內部的神秘唄果社群中，大家正討論「誰是E.T.D中最不像隊長的隊長」。",
                "「有沒有人覺得四隊的白藏隊長很惡趣味？？」",
                "「把『覺得』去掉。每次我都是臨睡前突然發現今天又被他捉弄了，氣死我了啊啊啊啊！」",
                "……",
                "一刻也沒有為自己的行為而感到抱歉，即刻趕來的是白藏一氣呵成的按讚與收藏。",
            ],
            video:`/images/character/nte_pbgv_baizang_20250621_opt.webm`,
        },
    ];

    const w_ThumbSwiperData02 = [...ThumbSwiperData02,...ThumbSwiperData02];
    // 縮圖輪播顯示資料

    //tab控制
    const [activeTab, setActiveTab] = useState('01');
    //tab控制

    const tabData = [
        {
            key:"01",
            class:"tabBtn01",
            swiperData:w_ThumbSwiperData01,
        },
        {
            key:"02",
            class:"tabBtn02",
            swiperData:w_ThumbSwiperData02,
        },
    ]

    const videoSwipers = useRef([]);  // 大圖輪播的 Swiper instances
    const mainSwipers = useRef([]);   // 縮圖輪播的 Swiper instances

    
    const NextBtn = useRef([]);
    const PrevBtn = useRef([]);

    const [cooldown, setCooldown] = useState(false);

    const handlePrevClick = (index) => {
        if (cooldown) {return;}           // 正在冷卻
        setCooldown(true);              // 進入冷卻
        videoSwipers.current[index]?.slidePrev();

        // 冷卻結束（例如 300ms）
        setTimeout(() => setCooldown(false), 500);
    };

    const handleNextClick = (index) => {
        if (cooldown) {return;}           // 正在冷卻
        setCooldown(true);              // 進入冷卻
        videoSwipers.current[index]?.slideNext();

        // 冷卻結束（例如 300ms）
        setTimeout(() => setCooldown(false), 500);
    };

    // 縮圖輪播顯示資料
    const ThumbSwiperMbData01 = [
        {
            id:"1-1",
            imgSm:`/images/character/factions1_nav1.jpg`,
            bgimg:`/images/character/手機板/nte_mpic_nanali_20250514.jpg`,
            role:`/images/character/手機板/factions1_role1_des.png`,
        },
        {
            id:"1-2",
            imgSm:`/images/character/factions1_nav2.jpg`,
            bgimg:`/images/character/手機板/nte_mpic_zaowu_20250514.jpg`,
            role:`/images/character/手機板/factions1_role2_des.png`,
        },
        {
            id:"1-3",
            imgSm:`/images/character/factions1_nav3.jpg`,
            bgimg:`/images/character/手機板/factions1_m_poster3.jpg`,
            role:`/images/character/手機板/factions1_role3_des.png`,
        },
        {
            id:"1-4",
            imgSm:`/images/character/factions1_nav4.jpg`,
            bgimg:`/images/character/手機板/factions1_m_poster4.jpg`,
            role:`/images/character/手機板/factions1_role3_des.png`,
        },
    ];

    const w_ThumbSwiperMbData01 = [...ThumbSwiperMbData01,...ThumbSwiperMbData01];

    const ThumbSwiperMbData02 = [
        {
            id:"2-1",
            imgSm:`/images/character/factions2_nav1.jpg`,
            bgimg:`/images/character/手機板/nte_mpic_bohe_20250514.jpg`,
            role:`/images/character/手機板/factions2_role1_des.png`,
        },
        {
            id:"2-2",
            imgSm:`/images/character/factions2_nav2.jpg`,
            bgimg:`/images/character/手機板/nte_mpic_anhunqu_20250514.jpg`,
            role:`/images/character/手機板/factions2_role2_des.png`,
        },
        {
            id:"2-3",
            imgSm:`/images/character/factions2_nav3.jpg`,
            bgimg:`/images/character/手機板/nte_mpic_fadiya_20250514.jpg`,
            role:`/images/character/手機板/factions2_role3_des.png`,
        },
        {
            id:"2-4",
            imgSm:`/images/character/factions2_nav4.jpg`,
            bgimg:`/images/character/手機板/factions2_m_poster4.jpg`,
            role:`/images/character/手機板/factions2_role4_des.png`,
        },
    ];

    const w_ThumbSwiperMbData02 = [...ThumbSwiperMbData02,...ThumbSwiperMbData02];
    // 縮圖輪播顯示資料

    const tabDataMB = [
        {
            key:"01",
            class:"tabBtn01",
            swiperData:w_ThumbSwiperMbData01,
        },
        {
            key:"02",
            class:"tabBtn02",
            swiperData:w_ThumbSwiperMbData02,
        },
    ]

    const mainMbSwipers = useRef([]);  // 大圖輪播的 Swiper instances
    const thumbMbSwipers = useRef([]);   // 縮圖輪播的 Swiper instances

    
    const NextMbBtn = useRef([]);
    const PrevMbBtn = useRef([]);

    const [coolMbdown, setCoolMbdown] = useState(false);

    const handleMbPrevClick = (index) => {
        if (coolMbdown) {return;}           // 正在冷卻
        setCoolMbdown(true);              // 進入冷卻
        mainMbSwipers.current[index]?.slidePrev();
        // thumbMbSwipers.current[index]?.slidePrev();

        // 冷卻結束（例如 300ms）
        setTimeout(() => setCoolMbdown(false), 500);
    };

    const handleMbNextClick = (index) => {
        if (coolMbdown) {return;}           // 正在冷卻
        setCoolMbdown(true);              // 進入冷卻
        mainMbSwipers.current[index]?.slideNext();
        // thumbMbSwipers.current[index]?.slideNext();

        // 冷卻結束（例如 300ms）
        setTimeout(() => setCoolMbdown(false), 500);
    };


    return(
        <>
            {/* 元件最外圍 */}
            <section className="characterPage">
                {/* PC 版內容 */}
                {isDesktop && (
                    /* 桌面板 */
                    <div className='characterPagePC'>
                        <img className='characterPageBg' src="/images/character/bg.jpg" alt="" />
                        {/* 控制層 顯示元素不存在 */}
                        <Tab.Container activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
                            {/* 側邊面板 */}
                            <LeftSide />
                            {/* 側邊面板 */}

                            {/* 側邊tab選項 */}
                            <div className='tabCircleImgShowBox'>
                                <div className='widthBox'>
                                    <div className='heightBox'>
                                        <div className='tabCircleImg'>
                                            {/* Tab 選單區 */}
                                            <Nav className='tab-box'>
                                            
                                                {/* 選項按鈕外層 */}
                                                <Nav.Item className='tab-item'>
                                                    {
                                                        tabData?.map((item)=>{
                                                            return(
                                                                //{/* 選項按鈕本體 */}
                                                                <Nav.Link   key={item.key}
                                                                            className={`tab-link ${item.class}`}
                                                                            aria-disabled="true"
                                                                            eventKey={item.key}>
                                                                </Nav.Link>
                                                                //{/* 選項按鈕本體 */}
                                                            )
                                                        }) 
                                                    }
                                                </Nav.Item>
                                                {/* 選項按鈕外層 */}
                                            </Nav>
                                            {/* Tab 選單區 */}
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            {/* 側邊tab選項 */}

                            {/* Tab 內容區 */}
                            <Tab.Content className='tabContent w-100 h-100'>
                                {
                                    tabData?.map((item,index)=>{
                                        return(
                                            //{/* 內容外層
                                            <Tab.Pane key={item.key} eventKey={item.key} className='w-100 h-100'>
                                                {
                                                    activeTab === item.key && (
                                                        // {/* 角色顯示區塊最外圍 */}
                                                        <div className='characterContentBox'>
                                                            {/* 大輪播圖外圍 */}
                                                            <div className='characterSwiperBox'>
                                                                {/* 大圖輪播 */}
                                                                <Swiper
                                                                    className="bgSwiper"
                                                                    modules={[EffectFade]}
                                                                    onSwiper={(swiper) => {
                                                                        videoSwipers.current[index] = swiper;
                                                                    }}
                                                                    loop={true} 
                                                                    slidesPerView={1}
                                                                    effect="fade"                                   //啟用淡入淡出
                                                                    fadeEffect={{ crossFade: true }}                // 可選：交錯漸變更順
                                                                    speed={600}                                     // 可選：動畫時間(毫秒)
                                                                    spaceBetween={10}
                                                                    centeredSlides
                                                                    onSlideChange={(swiper) => {
                                                                        mainSwipers.current[index]?.slideToLoop(swiper.realIndex);
                                                                    }}
                                                                >
                                                                    {
                                                                        item.swiperData?.map((itemIn, i) => {
                                                                            return(
                                                                                <SwiperSlide key={i} className='swiperSlide'>

                                                                                    {/* 背景輪播 */}
                                                                                    <div className="videoSet">
                                                                                        <video
                                                                                            className="bgVideo"
                                                                                            autoPlay //載入後自動播放（行動裝置要搭配 muted 才會生效）
                                                                                            muted //把影片靜音（多數瀏覽器要求靜音才允許自動播放）
                                                                                            loop //播完自動重頭再播
                                                                                            playsInline //在手機上「行內播放」，不會跳全螢幕
                                                                                            preload="auto" //盡量預先載入影片（加快開始播放的速度）
                                                                                            poster="" //影片尚未播放或載入時顯示的封面圖
                                                                                        >
                                                                                            <source src={itemIn.video} type="video/webm" />
                                                                                            您的瀏覽器不支援影片
                                                                                        </video>
                                                                                    </div>
                                                                                    {/* 背景輪播 */}

                                                                                    {/* 角色說明最外圍 */}
                                                                                    {/* 背景 */}
                                                                                    <div className='profileBox'>
                                                                                        <div className='profileContentShowBox'>
                                                                                            <div className='widthBox'>
                                                                                                <div className='heightBox'>
                                                                                                    <div className='profileContentBox'>
                                                                                                        <div className='profileImgBox'>
                                                                                                            <img className='imgSet' src={itemIn.role} alt="" />
                                                                                                        </div>
                                                                                                        <div className='textBox'>
                                                                                                            {
                                                                                                                itemIn?.profile.map((text,index)=>{
                                                                                                                    return(
                                                                                                                        <p key={index} className='textSet'> 
                                                                                                                            {text}
                                                                                                                        </p>
                                                                                                                    )
                                                                                                                })
                                                                                                            }
                                                                                                            
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>    
                                                                                    </div>
                                                                                    {/* 背景 */}
                                                                                    {/* 角色說明最外圍 */}
                                                                                
                                                                                </SwiperSlide>
                                                                            )
                                                                        })
                                                                    }
                                                                </Swiper>
                                                                {/* 大圖輪播 */}

                                                                {/* 控制欄位 */}
                                                                <div className='characterBox'>
                                                                    <div className='maskBox'>
                                                                        <div className='mask01Box'></div>
                                                                        <div className='mask02Box'></div>
                                                                        <div className='characterThumbSwiper'>
                                                                            <button disabled={cooldown}
                                                                                className='ThumbPrevBtn'
                                                                                ref={(prevBtn) => (PrevBtn.current[index] = prevBtn)} 
                                                                                onClick={() => handlePrevClick(index)}>
                                                                            </button>
                                                                            <Swiper
                                                                                className="thumbsSwiper"
                                                                                modules={[Navigation]}
                                                                                onSwiper={(swiper) => {
                                                                                    // 寫入swiper
                                                                                    mainSwipers.current[index] = swiper;

                                                                                    // 綁定 navigation
                                                                                    swiper.params.navigation.prevEl = PrevBtn.current[index];
                                                                                    swiper.params.navigation.nextEl = NextBtn.current[index];

                                                                                    // 重新初始化 navigation（重要）
                                                                                    swiper.navigation.init();
                                                                                    swiper.navigation.update();
                                                                                }}
                                                                                spaceBetween={8}                 
                                                                                loop={true}                       
                                                                                slidesPerView={3}
                                                                                centeredSlides
                                                                            >
                                                                                {item.swiperData.map((src, i) => (
                                                                                    <SwiperSlide    className='swiperSlide'
                                                                                                    key={i}
                                                                                                    onClick={() => {
                                                                                                        mainSwipers.current[index]?.slideToLoop(i);
                                                                                                        videoSwipers.current[index]?.slideToLoop(i);}}
                                                                                                    //onClick={() => {mainSwiper?.slideTo(i);videoSwiper?.slideTo(i);}}
                                                                                    >
                                                                                        <button     type="button" className='imgBox'
                                                                                                    style={{ backgroundImage: `url(${src.imgSm})` }}
                                                                                        />
                                                                                    </SwiperSlide>
                                                                                ))}
                                                                            </Swiper>
                                                                            <button disabled={cooldown}
                                                                                className='ThumbNextBtn' 
                                                                                ref={(nextBtn) => (NextBtn.current[index] = nextBtn)}
                                                                                onClick={() => handleNextClick(index)}>
                                                                            </button>
                                                                        </div> 
                                                                    </div>  
                                                                </div>
                                                                {/* 控制欄位 */}
                                                            </div>
                                                            {/* 大輪播圖外圍 */}
                                                        </div>
                                                        // {/* 角色顯示區塊最外圍 */}
                                                    )
                                                }
                                            </Tab.Pane>
                                            //{/* 內容外層 */}
                                        )
                                    })
                                }           
                            </Tab.Content>
                            {/* Tab 內容區 */}
                            
                        </Tab.Container>
                        {/* 控制層 顯示元素不存在 */}
                    </div>
                    /* 桌面板 */
                )}
                {/* PC 版內容 */}

                {/* MB 版內容 */}
                {!isDesktop && (
                    /* 手機板 */
                    <div className='characterPageMB'>
                        <img className='characterPageMbBg' src="/images/character/bg.jpg" alt="" />
                        {/* 控制層 顯示元素不存在 */}
                        <Tab.Container activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
                        
                        {/* 控制欄位 */}
                        <div className='characterMbBox'>
                            <div className='characterViewBox'>
                                {/* Tab 內容區 */}
                                <Tab.Content className='tabContent w-100 h-100'>
                                    {
                                        tabDataMB?.map((item,index)=>{
                                            return(
                                                //{/* 內容外層
                                                <Tab.Pane key={item.key} eventKey={item.key} className='w-100 h-100'>
                                                    {/* 左右按鈕設定 */}
                                                    <button disabled={cooldown}
                                                        className={`ThumbMbPrevBtn ${item.key === activeTab?("active"):("")}`}
                                                        ref={(prevBtn) => (PrevMbBtn.current[index] = prevBtn)}
                                                        onClick={() => handleMbPrevClick(index)}
                                                        >
                                                    </button>
                                                    <button disabled={cooldown}
                                                        className={`ThumbMbNextBtn ${item.key === activeTab?("active"):("")}`}
                                                        ref={(nextBtn) => (NextMbBtn.current[index] = nextBtn)}
                                                        onClick={() => handleMbNextClick(index)}
                                                        >
                                                    </button>
                                                    {/* 左右按鈕設定 */}
                                                    {
                                                        activeTab === item.key && (
                                                            /* 縮圖輪播片 */
                                                            <Swiper
                                                                className="thumbsMbSwiper"
                                                                modules={[Navigation]}
                                                                onSwiper={(swiper) => {
                                                                    // 寫入swiper
                                                                    thumbMbSwipers.current[index] = swiper;

                                                                    // 綁定 navigation
                                                                    swiper.params.navigation.prevEl = PrevMbBtn.current[index];
                                                                    swiper.params.navigation.nextEl = NextMbBtn.current[index];

                                                                    // 重新初始化 navigation（重要）
                                                                    swiper.navigation.init();
                                                                    swiper.navigation.update();
                                                                }}
                                                                spaceBetween={8}                 
                                                                loop={true}                       
                                                                slidesPerView={3}
                                                                centeredSlides
                                                            >
                                                                {item.swiperData.map((src, i) => (
                                                                    <SwiperSlide    className='swiperSlide'
                                                                                    key={i}
                                                                                    onClick={() => {
                                                                                        mainMbSwipers.current[index]?.slideToLoop(i);
                                                                                        thumbMbSwipers.current[index]?.slideToLoop(i);}}
                                                                                    //onClick={() => {mainSwiper?.slideTo(i);videoSwiper?.slideTo(i);}}
                                                                    >
                                                                        <button     type="button" className='imgBox'
                                                                                    style={{ backgroundImage: `url(${src.imgSm})` }}
                                                                        />
                                                                    </SwiperSlide>
                                                                ))}
                                                            </Swiper>
                                                            /* 縮圖輪播片 */
                                                        )
                                                    }
                                                    
                                                </Tab.Pane>
                                                //{/* 內容外層 */}
                                            )
                                        })
                                    }           
                                </Tab.Content>
                                {/* Tab 內容區 */}
                                
                            </div> 
                        </div>
                        {/* 控制欄位 */}

                        {/* 底部tab選項 */}
                        <div className='bottomBox'>
                            <img className='bottomBoxBg' src="/images/character/bg.jpg" alt="" />
                            <Nav className='tab-box'>
                                <Nav.Item className='tab-item btnBox'>
                                    {
                                        tabDataMB?.map((item)=>{
                                            return(
                                                
                                                <Nav.Link   key={item.key}
                                                            className={`tab-link ${item.class}`}
                                                            aria-disabled="true"
                                                            eventKey={item.key}>
                                                </Nav.Link>
                                                
                                            )
                                        }) 
                                    }
                                </Nav.Item>                       
                                <button className='iconBox'>
                                    <img className='characterPageIconSet' src="/images/character/手機板/pageArrow.png" alt="" />
                                </button>
                            </Nav>
                        </div>
                        {/* 底部tab選項 */}
                                    
                        {/* 大圖顯示區塊             */}
                        <div className='characterPageMbViewBox'>
                            {/* Tab 內容區 */}
                            <Tab.Content className='tabContent w-100 h-100'>
                                {
                                    tabDataMB?.map((item,index)=>{
                                        return(
                                            //{/* 內容外層
                                            <Tab.Pane key={item.key} eventKey={item.key} className='w-100 h-100'>
                                                {
                                                    activeTab === item.key && (
                                            
                                                        /* 大輪播圖外圍 */
                                                        <div className='characterSwiperMbBox'>
                                                            {/* 大圖輪播 */}
                                                            <Swiper
                                                                className="bgSwiper"
                                                                modules={[EffectFade]}
                                                                onSwiper={(swiper) => {
                                                                    mainMbSwipers.current[index] = swiper;
                                                                }}
                                                                loop={true} 
                                                                slidesPerView={1}
                                                                effect="fade"                                   //啟用淡入淡出
                                                                fadeEffect={{ crossFade: true }}                // 可選：交錯漸變更順
                                                                speed={600}                                     // 可選：動畫時間(毫秒)
                                                                spaceBetween={10}
                                                                centeredSlides
                                                                onSlideChange={(swiper) => {
                                                                    thumbMbSwipers.current[index]?.slideToLoop(swiper.realIndex);
                                                                }}
                                                            >
                                                                {
                                                                    item.swiperData?.map((itemIn, i) => {
                                                                        return(
                                                                            <SwiperSlide key={i} className='swiperSlide'>

                                                                                {/* 背景輪播 */}
                                                                                <div className="imgBox">
                                                                                    <img className='imgSet' src={itemIn.bgimg} alt="" />
                                                                                </div>
                                                                                {/* 背景輪播 */}

                                                                                {/* 角色說明 */}
                                                                                <div className='profileMbBox'>
                                                                                    <img className='profileMbImgSet' src={itemIn.role} alt="" />
                                                                                </div>
                                                                                {/* 角色說明 */}
                                                                            
                                                                            </SwiperSlide>
                                                                        )
                                                                    })
                                                                }
                                                            </Swiper>
                                                            {/* 大圖輪播 */}
                                                        </div>
                                                        /* 大輪播圖外圍 */
                                                    )
                                                }
                                            </Tab.Pane>
                                            //{/* 內容外層 */}
                                        )
                                    })
                                }           
                            </Tab.Content>
                            {/* Tab 內容區 */}
                        </div>
                        </Tab.Container>
                        {/* 控制層 顯示元素不存在 */}
                    </div>
                    /* 手機板 */
                )}
                {/* MB 版內容 */}
            </section>
            {/* 元件最外圍 */}
        </>
    )
}
export default CharacterPage;

