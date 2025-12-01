import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

//#region
//#endregion

export const newsSlice = createSlice({
    name: "news",
    initialState: {
        news:[
            {
                id:1,
                title:"「收容測試」測試說明與常見問題解答",
                time:"2025-06-10",
                imgData:"/images/news/nte250616_01.png",
                class:"system",
                content: [
                    {
                        type: "section",
                        title: "活動說明：",
                        contents: [
                            {
                                type: "paragraph",
                                lines: [
                                    "異環「收容測試」將於7月3日正式開始！我們整理了測試相關詳細的說明與常見問題解答，請鑒定師們查閱。"
                                ]
                            }
                        ]
                    },
                    {
                        type: "section",
                        title: "測試資訊",
                        contents: [
                            {
                                type: "list",
                                items: [
                                    "測試類型：限量不計費刪檔測試",
                                    "測試平台：PC (Windows)",
                                    "遊戲語言：英文、日文、簡體中文、繁體中文",
                                    "配音語言：英文、日文、中文"
                                ]
                            }
                        ]
                    },
                    {
                        type: "section",
                        title: "招募時間",
                        contents: [
                            {
                                type: "paragraph",
                                lines: [
                                    "招募開啟時間：2025年5月15日10:00（UTC+8）",
                                    "測試招募結束時間將在後續另行通知，請想參與測試的鑒定師及時前往官網預約並填寫招募問卷，並持續關注官方社群發佈的相關資訊。"
                                ]
                            }
                        ]
                    },
                    {
                        type: "section",
                        title: "測試時間",
                        contents: [
                            {
                                type: "list",
                                items: [
                                    "測試開啟時間：2025年7月3日09:00（UTC+8）",
                                    "測試結束時間：2025年7月16日23:59（UTC+8）",
                                    "預下載開放時間：2025年7月2日10:00（UTC+8）",
                                    "*測試資格通知及具體預下載方式請見後續官方社群發佈的通知。"
                                ]
                            }
                        ]
                    },
                    {
                    type: "section",
                    title: "設備要求",
                    contents: [
                        {
                            type: "list",
                            items: [
                                "◆系統◆",
                                "Windows 10 64位及以上",
                                "◆CPU◆",
                                "推薦>> 12th Gen Intel®Core™ i7-12700及以上",
                                "低>> 10th Gen Intel®Core™i7-10700",
                                "◆顯示卡◆",
                                "推薦>> NVIDIA GeForce RTX 3060同等級及以上",
                                "最低>> NVIDIA GeForce GTX 1660或同等級",
                                "◆記憶體◆",
                                "推薦>> 32GB及以上",
                                "最低>> 16GB",
                                "◆儲存空間◆",
                                "預留 60GB 及以上可用空間，推薦安裝至固態硬碟(SSD)"
                            ]
                        }
                    ]
                    },
                    {
                    type: "section",
                    title: "測試相關問題",
                    contents: [
                        {
                            type: "qa",
                            items: [
                                {
                                    "q": "我該如何獲取測試資格？",
                                    "a": "前往《異環》官網完成預約並填寫問卷後提交，即為測試報名成功，將有機會獲得測試資格。"
                                },
                                {
                                    "q": "本次測試的開啟和結束時間是？",
                                    "a": "異環「收容測試」將於2025年7月3日09:00（UTC+8）開啟，7月16日23:59（UTC+8）結束。"
                                },
                                {
                                    "q": "未成年人可以參與本次測試嗎？",
                                    "a": "本次測試僅限成年人參與。如您未達成年年齡，將無法獲得資格。"
                                },
                                {
                                    "q": "這次測試支持手把體驗遊戲嗎？",
                                    "a": "本次測試將支援 PS5™（DualSense）、PS4™（DualShock 4）、Xbox 系列手把。"
                                },
                                {
                                    "q": "這次測試我可以在哪些平台遊玩？",
                                    "a": "本次測試支援 PC (Windows)。未來將支援 iOS、macOS、Android 等平台。"
                                },
                                {
                                    "q": "遇到問題如何解決？",
                                    "a": "可聯繫官方客服：https://www.iwplay.com.tw/contact.html"
                                },
                                {
                                    "q": "我可以直播或分享遊戲內容嗎？",
                                    "a": "本次測試允許玩家分享遊戲內容，但禁止解包、盜用等侵權行為。"
                                }
                            ]
                        }
                    ]
                    },
                    {
                        type: "section",
                        title: "預約相關問題",
                        contents: [
                            {
                                type: "qa",
                                items: [
                                    {
                                        "q": "我該如何預約異環？",
                                        "a": "前往官網點擊【立即預約】，填寫手機號碼並提交即可完成預約。"
                                    },
                                    {
                                        "q": "預約是否等於參與測試招募？",
                                        "a": "不是。預約後仍需填寫問卷才算成功報名測試。"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        type: "section",
                        title: "※注意事項",
                        contents: [
                            {
                                type: "list",
                                items: [
                                    "遊戲仍處於研發階段，測試版本不代表最終品質。",
                                    "招募結束後將以簡訊及信箱通知測試資格。",
                                    "本次測試資格僅限當期使用，無法繼承至下次測試。",
                                    "禁止任何形式的測試帳號出售或轉讓，違者將取消測試資格。"
                                ]
                            }
                        ]
                    }
                ]
            },
        ]
    },
    reducers: {
        
    },
});

export const { } = newsSlice.actions;

export default newsSlice.reducer;