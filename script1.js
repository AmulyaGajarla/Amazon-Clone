document.addEventListener("DOMContentLoaded", function() {
    const panelAll = document.querySelector(".panel-all");
    const panelOps = document.querySelector(".panel-ops");

    panelAll.addEventListener("click", function() {
        panelOps.classList.toggle("show-panel-ops");
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const boxImages = document.querySelectorAll(".box-image");

    boxImages.forEach(function(boxImage) {
        boxImage.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.1)";
        });

        boxImage.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const heroMsgLink = document.querySelector(".hero-msg a");
    const heroMsg = document.querySelector(".hero-msg p");

    heroMsgLink.addEventListener("click", function(event) {
        event.preventDefault();
        heroMsg.textContent = "You've ordered from Amazon! Enjoy your shopping!";
    });
});
const submit=document.querySelector('.submit');
submit.addEventListener("click",function(){
    const username=document.getElementById("username").value;
    const password=document.getElementById("password").value;
    if(username==="rgukt" && password==="rgukt"){
        alert("Login Successful");
    }
    else{
        alert("Login Failed");
    }
});
