window.onload = function(){


    let nav = document.getElementById("nav");
    let footer = document.getElementById('footer');

    axios.get('./components/nav.html').then(res => {
        nav.innerHTML = res.data;
    });
    axios.get('./components/footer.html').then(res => {
        footer.innerHTML = res.data;
    });

    let contentPhone = document.getElementById('contentPhone');
    let time = null;
    let idx = 0;
    let photoUrl = [
        './img/big/a1.jpg',
        './img/big/a2.jpg',
        './img/big/a3.jpg',
        './img/big/a4.jpg',
        './img/big/a5.jpg'
    ]

    let photoPlay = ()=>{
        time = setInterval(() => {
            idx++;
            if(idx > photoUrl.length-1){
                idx = 0;
            }
            contentPhone.style.backgroundImage = `url(${photoUrl[idx]})`;
        },1500)
    }

    photoPlay();

}