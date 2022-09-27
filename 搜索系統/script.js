const searchData = {
    "媽祖":[
        {
            title: '台灣媽祖信仰- 维基百科，自由的百科全书',
            link: 'https://zh.wikipedia.org/zh-tw/台灣媽祖信仰',
            text: '媽祖信仰是臺灣普遍民間信仰。早期移民多自華南渡海，心驚膽顫，且台灣四面環海，海上活動頻繁，海神媽祖婆成臺灣人重要精神託付。臺灣有媽祖廟510座以上，有 ...',
        },
        {
            title: '媽祖的介紹',
            link: 'www.ntcu.edu.tw/edison/otm/__1.html',
            text: '媽祖就是「天上聖母」，我們一般通稱「媽祖」或「媽祖婆」。 媽祖是古時候的宋朝人，她的本名叫「林默娘」，從小就相當相當聰明，讀經書過目不忘。 媽祖十三歲的時後 ...',
        }
    ],
    "地震":[
        {
            title: '地震 - 中央氣象局',
            link: 'https://www.cwb.gov.tw/V7/earthquake/',
            text: '資料來源：美國地質調查所主動發布之全球地震自動定位資訊，透過EMAIL方式通報.本網頁僅展示地震規模大於6之全球地震初步訊息，欲查詢詳細地震資訊請 ...',
        }
    ],
    "館長":[
        {
            title: '館長成吉思汗- YouTube',
            link: 'https://www.youtube.com/channel/UCnnp2fWa77PP2h08T7WAzzw',
            text: '健身格鬥者的天堂成吉思汗健身俱樂部進化綜合格鬥中心https://www.facebook.com/mmagym.tw?ref=bookmarks 惡名昭彰全新 ',
        },
        {
            title: '陳之漢- 维基百科，自由的百科全书',
            link: 'https://zh.wikipedia.org/zh-tw/陳之漢',
            text: '陳之漢（1979年3月12日－），原名陳思翰，臺灣知名部落客、直播主、網路名人、企業家、運動員、健身教練、散打武術家，曾任志願役軍人，後為連鎖健身房創辦人兼執行長、「中華民國健力協會」顧問、服飾品牌創辦人。生於臺北蘆洲（今新北市蘆洲區），籍貫宜蘭，人稱「館長」。',
        }
    ],
    "線上課程":[
        {
            title: '現代 JavaScript 職人之路｜入門篇',
            link: 'https://hiskio.com/courses/244',
            text: '現代 JavaScript 職人之路學程，明確的學程定位帶您往前端工程師的技術門檻前進！深厚的 JavaScript 觀念 + 大量的實戰講義 + 情境實作範例，唯一目標就是帶您取得前端工程師的入門券！',
        },
        {
            title: '現代 JavaScript 職人之路｜中階實戰篇',
            link: 'https://hiskio.com/courses/245',
            text: '您需要一位在業界打滾多年、在教學界經驗豐富又懂得如何帶您成長的導師，帶您從基礎起飛，成為進擊的前端工程師。',
        },
        {
            title: '職人必修的 RWD 網頁入門班',
            link: 'https://hahow.in/cr/responsive-design',
            text: '從零開始打好基礎建立觀念，帶入實作，用業界常常遇到的問題當舉例，教你如何解決很多因為行動裝置而產生破版，還有如何利用百分比的切版技巧來減少修改的時間',
        }
    ]
}

window.onload = function() {

    const inputArea = document.querySelector('.search');
    const tags = document.querySelectorAll('.tag');
    const searchList = document.querySelector('.search_list');
    let html = '';
    let newArr = [];

    //render fn
    let render = (tag) => {
        html = '';
        newArr = searchData[tag];
        if (newArr === undefined) {newArr = []};
        newArr.forEach((data) => {
            html += `
            <div class="item">
                <a href="javascript:;" target="_blank" class="title">${data.title}</a>
                <a href="javascript:;" target="_blank" class="link">${data.link}</a>
                <p>${data.text}</p>
            </div>`
        })
        searchList.innerHTML = html;
    }

    // initialization
    render('線上課程');

    //add Click Event
    tags.forEach((tag) => {
        tag.addEventListener('click', (e) => {
            tagName = e.target.innerText;
            inputArea.value = tagName;
            render(tagName);
        })
    })

    //add keyup Event
    inputArea.addEventListener('keyup', (e) =>{
        let inputVal = e.target.value;
        render(inputVal);
    })




}