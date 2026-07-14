const page_color = document.querySelector("body");
const h1_color = document.querySelector("h1");
const p_color = document.querySelector("p");
const icon_page_color = document.getElementById("icon_page_color");
const logo_teachboard = document.getElementById("logo_teachboard")

let page_black = true

const page_wite = () => {
  if(page_black === true){
        page_color.style.backgroundColor = "#ffffff";
        h1_color.style.color = "#000000";
        p_color.style.color = "#000000";
        icon_page_color.src ="./src/icons/icon-dark.png";
        icon_page_color.alt ="icone de lua";
        logo_teachboard.src ="./src/img/logo-black.png";

        page_black = false
  }else{
        page_color.style.backgroundColor = "#000000";
        h1_color.style.color = "#ffffff";
        p_color.style.color = "#ffffff";
        icon_page_color.alt ="icone de sol";
        icon_page_color.src ="./src/icons/icon-light.png";
        logo_teachboard.src ="./src/img/logo-white.png";

        page_black = true
  }
};
