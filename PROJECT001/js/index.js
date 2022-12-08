


var i=0, text;

text = "Welcome to KAFUCU";

function typing(){

    if (i<text.length) {
        document.getElementById("a-header").innerHTML += text.charAt(i);

        i++;

        setTimeout(typing, 50);
    }
}

typing();