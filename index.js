function changeBg(){
    var navbar = document.getElementById('navbar')
    var scrollValue = window.scrollY;
    // console.log(scrollValue);
    if(scrollValue<500){
        navbar.classList.remove('bgcolor');
    }else{
        navbar.classList.add('bgcolor');
    }
}

window.addEventListener('scroll',changeBg);

