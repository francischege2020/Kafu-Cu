

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