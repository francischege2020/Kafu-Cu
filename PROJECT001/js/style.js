
// navigation sticky

window.addEventListener("scroll", () =>{
    const header = document.getElementById("header");
    const topNav = document.getElementById("topnav");
    const navVarTop = document.getElementById("navbar-top");
   const windowsHeight = window.scrollY;
   const screenPos =0;
   

   console.log(windowsHeight)
   if(windowsHeight > 100){
       header.classList.add("sticky");
       topNav.style.display ="none";
   }
   else{
       header.classList.remove("sticky");
       topNav.style.display ="flex";
   }

   
});

// for revealing texts or blocks of text

window.onload = function revealtext(){//same as window.addEventListener("onload", revealtext);
    let revealT = document.querySelectorAll(".revealtext");

    for(i=0; i < revealT.length; i++){

        let windowsHeight = window.innerHeight;
        let revealTop = revealT[i].getBoundingClientRect().top;
        
        let revealpoint = 90;

        if(revealTop < windowsHeight - revealpoint){

            revealT[i].classList.add("active");

        }else{
            revealT[i].classList.remove("active");

        }
        console.log(revealTop);

    }
}



window.addEventListener("scroll", ()=>{

    const reveals = document.querySelectorAll(".reveal");
    const  revealText = document.querySelectorAll(".revealText");

    for(i = 0; i < reveals.length; i++){
        let windowheight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint =50;

        if(revealtop< windowheight - revealpoint){
            reveals[i].classList.add("active");
        }else{
            reveals[i].classList.remove("active");
        }
    }

})


















