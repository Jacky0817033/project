window.onload = function() {

    let nav = document.getElementById("nav");
    let footer = document.getElementById('footer');

    axios.get('./components/nav.html').then(res => {
        nav.innerHTML = res.data;
    });
    axios.get('./components/footer.html').then(res => {
        footer.innerHTML = res.data;
    });

    const angleleft = document.getElementById('angleleft');
    const angleright = document.getElementById('angleright');
    const photo = document.getElementById('photo');
    let idx = 0;
    let pagination = document.getElementById('pagination');
    let photoArr = [
        './img/big/a1.jpg',
        './img/big/a2.jpg',
        './img/big/a3.jpg',
        './img/big/a4.jpg',
        './img/big/a5.jpg'
    ]

    let imgChange = ()=>{
        pagination.innerText = `${(idx+1)}/${photoArr.length}`
        photo.src = photoArr[idx]
    }

    imgChange();

    angleright.addEventListener('click', () => {
        idx++;
        if(idx > photoArr.length-1){
            idx = 0;
        }
        imgChange();

    })

    angleleft.addEventListener('click', () => {
        idx --;
        if(idx < 0){
            idx = photoArr.length - 1;
        }
        imgChange();
    })

}