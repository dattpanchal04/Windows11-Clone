let taskbar = document.getElementsByClassName("taskbar")[0];
let startMenu = document.getElementsByClassName("startMenu")[0];

taskbar.addEventListener("click", ()=>{

    if(startMenu.style.bottom == "50px"){
        startMenu.style.bottom = "-700px";
    }
    else{
        startMenu.style.bottom = "50px";
    }

})
