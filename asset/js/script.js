let isShow = false;
function showMenu(){
    let windowWidth = window.innerWidth
    let menuButton = document.getElementById("burgerMenu");
    let menuList = document.getElementById("menus");
    if(isShow){
        menuButton.innerHTML = "";
        menuButton.innerHTML = `<img src="asset/images/svg/Burger Nav Fill_.svg" alt="nav">`;
        menuList.style.display = "none";
    }else{
        menuButton.innerHTML = "";
        menuButton.innerHTML = `<img src="asset/images/svg/Times_.svg" alt="nav">`;
        menuList.style.display = "flex";
    }
    isShow = !isShow;
}