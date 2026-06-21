window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if(window.scrollY > 50){
        nav.style.borderBottom = "1px solid #151515";
    }
    else{
        nav.style.borderBottom = "none";
    }

});