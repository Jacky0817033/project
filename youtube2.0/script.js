// call component
const comment = [
    {
        img: `./img/comment1.jpg`,
        userName: `Maxi Cardozo`,
        comment: `This man could've composed for a thousand years and I would still listen.`
    },
    {
        img: `./img/comment2.jpg`,
        userName: `Daquiri Soft`,
        comment: `God, this type of clarity and conciseness is so rare. Excellent explainer.`
    },
    {
        img: `./img/comment3.jpg`,
        userName: `Wian Lloyd`,
        comment: `I've been using a form of this in Angular this whole time and didn't even know you could do this in vanilla js. Thanks for the run-through!`
    },
];
const sideVideo = [
    {
        link:`https://www.youtube.com/embed/7voSN82FGF0`,
        title:`高のスタジオジブリサウンドトラック || 最高のスタジオジブリリラックス`,
        ytr:`Sleep Music`,
        view:`14萬次`,
    },
    {
        link:`https://www.youtube.com/embed/4q4vpQCIZ6w`,
        title:`Spirited Away Full SoundTrack - Songs Of Ghibli Collection`,
        ytr:`Sleep Music`,
        view:`20萬次`,
    },
    {
        link:`https://www.youtube.com/embed/mIYzp5rcTvU`,
        title:`Spirited Away Piano for STUDYING`,
        ytr:`PassIELTS`,
        view:`39萬次`,
    },
    {
        link:`https://www.youtube.com/embed/7voSN82FGF0`,
        title:`高のスタジオジブリサウンドトラック || 最高のスタジオジブリリラックス`,
        ytr:`Sleep Music`,
        view:`14萬次`,
    },
    {
        link:`https://www.youtube.com/embed/4q4vpQCIZ6w`,
        title:`Spirited Away Full SoundTrack - Songs Of Ghibli Collection`,
        ytr:`Sleep Music`,
        view:`20萬次`,
    },
    {
        link:`https://www.youtube.com/embed/mIYzp5rcTvU`,
        title:`Spirited Away Piano for STUDYING`,
        ytr:`PassIELTS`,
        view:`39萬次`,
    },
    {
        link:`https://www.youtube.com/embed/7voSN82FGF0`,
        title:`高のスタジオジブリサウンドトラック || 最高のスタジオジブリリラックス`,
        ytr:`Sleep Music`,
        view:`14萬次`,
    },
    {
        link:`https://www.youtube.com/embed/4q4vpQCIZ6w`,
        title:`Spirited Away Full SoundTrack - Songs Of Ghibli Collection`,
        ytr:`Sleep Music`,
        view:`20萬次`,
    },
    {
        link:`https://www.youtube.com/embed/mIYzp5rcTvU`,
        title:`Spirited Away Piano for STUDYING`,
        ytr:`PassIELTS`,
        view:`39萬次`,
    },
];

//call component
let nav = document.getElementById('callNav');
let asideNav = document.getElementById('callAsideNav');
axios.get('./component/nav.html')
    .then(res => nav.innerHTML = res.data);
axios.get('./component/asideNav.html')
    .then(res => asideNav.innerHTML = res.data);

//main function
window.onload = function () {

    //control side nav
    let asideOpen = document.getElementById('callAsideNav');
    let toggleList = [...document.getElementsByClassName('toggleList')];
    toggleList.forEach(obj => {
        obj.addEventListener('click', () => {
            asideOpen.classList.toggle('offOpen');
        })
    })

    //subscribe btn
    let subscribeBtn = document.getElementById('subscribeBtn');
    let subBell = document.getElementById('subBell')
    subscribeBtn.addEventListener('click', () => {
        subscribeBtn.classList.toggle('active');
        if(subscribeBtn.classList.contains('active')){
            subBell.style.display = 'block';
            subscribeBtn.style.fontSize = '14px'
            subscribeBtn.innerText = '已訂閱';
        }else{
            subBell.style.display = 'none';
            subscribeBtn.innerText = '訂閱'
            subscribeBtn.style.fontSize = '16px'
        }
    })

    //top selector
    let listBtn = [...document.getElementsByClassName('listBtn')];
    let reset = () =>{
        listBtn.forEach(el => el.classList.remove('isOpen'));
    }
    listBtn.forEach(btn => {
        btn.addEventListener('click', (e) =>{
            reset();
            e.target.classList.add('isOpen');
        })
    })


        //render comment
        let commentHtml = '';
        const reviewCard = document.getElementsByClassName('reviewRender')[0];

        comment.forEach(obj => {
            commentHtml += `
            <div class='reviwer-card mb-4 d-flex'>
                <div class="reviewer">
                    <img src="${obj.img}" alt="">
                </div>
                <div class="review-content ms-3">
                    <p>${obj.userName}</p>
                    <p class="">${obj.comment}</p>
                    <ul class="d-flex">
                        <li><i class="fa-solid fa-thumbs-up me-2"></i></li>
                        <li><i class="fa-solid fa-thumbs-down me-2"></i></li>
                        <li>回覆</li>
                    </ul>
                </div>
            </div>
            `
        })

        reviewCard.innerHTML = commentHtml;

        //render side video
        let sideVideoHtml = '';
        const sideVideoInfo = document.getElementsByClassName('side-video')[0];

        sideVideo.forEach(obj => {
            sideVideoHtml += `
            <div class="side-video">
                <div class="video-card row d-flex">
                    <div class="small-video col-lg-6 col-md-6 ">
                        <iframe width="200" height="115" src="${obj.link}?autoplay=0&mute=1" >
                        </iframe>
                    </div>
                    <div class="small-description col-lg-6 col-md-6">
                        <a href='
                        ${obj.link}'><p>${obj.title}<br>
                        <span class="mt-2">${obj.link}</span>
                        <span>觀看次數：${obj.view}</span>
                        </p></a>
                    </div>
                </div>
            </div>
            `
        })

        sideVideoInfo.innerHTML = sideVideoHtml;
}

