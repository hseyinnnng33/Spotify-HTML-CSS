const next = document.getElementById("span");
const pause = document.getElementById("span1");
const iki = document.querySelector(".iki");
const result = document.querySelector("#result");
const gec = document.getElementById("resim-gec");
const geri = document.getElementById("resim-geri");
const resim1 = document.getElementById("resim1");
const resim2 = document.getElementById("resim2");
const birp = document.getElementById("bir-p");
const ikip = document.getElementById("iki-p");

gec.addEventListener("click", function(){
    resim1.style.display = "none";
    resim2.style.display = "flex";
    birp.textContent = "Şanlı Fenerbahçe";
    ikip.textContent = "Bruno Mars";
});

geri.addEventListener("click", function(){
    resim1.style.display = "flex";
    resim2.style.display = "none";
    birp.textContent = "Stolen Dance";
    ikip.textContent = "Bruno Mars";
});





let isClicked = false;

result.addEventListener("click", function(){    
    if(isClicked){
        result.style.color = "";
        isClicked = false;
    }
    else{
        result.style.color = "#3ede74";
        isClicked = true;
    }
});

iki.addEventListener("click", function(){
    if(isClicked){
    iki.style.color = "";
    isClicked = false;
}
else{
    iki.style.color = "#3ede74";
    isClicked = true;
}
});

let isPaused = false;

next.addEventListener("click", function(){
    if (!isPaused) {
    next.style.display ="none";
    pause.style.display ="flex";   
    }else{
        pause.style.display = "none";
        next.style.display = "flex";
        isPaused = false;
    }
});

pause.addEventListener("click", function(){
    if (isPaused) {
    pause.style.display ="none";
    next.style.display ="flex";
    next.style.backgroundColor = "#3ede74";
    isPaused = false;
    }
    else {
        next.style.display = "none";
        pause.style.display = "flex";
        isPaused = true;
      }
});

