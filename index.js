var input=document.getElementById('input');
var result=document.getElementById('result');
var inputtype =document.getElementById('inputtype');
var resulttype=document.getElementById('resulttype');
var inputtypevalue,resulttypevalue;



var list = new Map([
     ["kinnaur",["sq foot","Karam","Sq Karam","Biswa","Bigha"]],
     ["kinnaurvals",[0.09290,1.3716,1.881286,37.6257312,752.514624]],
      
           ["bilaspur",["sq foot","Karam","Sq Karam","Biswa","Bigha"]],
     ["bilaspurvals",[0.09290,1.3716,1.881286,37.6257312,752.514624]],
     
          ["shimla",["sq foot","Karam","Sq Karam","Biswa","Bigha"]],
     ["shimlavals",[0.09290,1.3716,1.881286,37.6257312,752.514624]],
     
     ["solan",["sq foot","Karam","Sq Karam","Biswa","Bigha"]],
     ["solanvals",[0.09290,1.3716,1.881286,37.6257312,752.514624]],
     
     ["mandi",["sq foot","Karam","Sq Karam","Biswa","Bigha"]],
     ["mandivals",[0.09290,1.4224,2.02322,40.4644,809.28870]],
     
      ["kullu",["sq foot","Karam","Sq Karam","Biswa","Bigha"]],
     ["kulluvals",[0.09290,1.4224,2.02322,40.4644,809.28870]],
     
      ["chamba",["sq foot","Karam","Sq Karam","Biswa","Bigha"]],
     ["chambavals",[0.09290,1.4224,2.02322,40.4644,809.28870]],
     
      ["lahul",["sq foot","Karam","Sq Karam","Biswa","Bigha"]],
     ["lahulvals",[0.09290,1.4224,2.02322,40.4644,809.28870]],
     
     
      ["una",["sq foot","Karam","Sq Karam","Marla","Kanal","Ghumao"]],
     ["unavals",[0.09290,1.4605,2.13306025,19.19754225,383.950845,3071.60676]],
     
     ["kangra",["sq foot","Karam","Sq Karam","Marla","Kanal","Ghumao"]],
     ["kangravals",[0.09290,1.4605,2.13306025,19.19754225,383.950845,3071.60676]],
     
     ["hamirpur",["sq foot","Karam","Sq Karam","Marla","Kanal","Ghumao"]],
     ["hamirpurvals",[0.09290,1.4605,2.13306025,19.19754225,383.950845,3071.60676]],
     
      ["solan1",["sq foot","Karam","Sq Karam","Marla","Kanal","Ghumao"]],
     ["solan1vals",[0.09290,1.6764,2.81031696,25.29285264,505.8570528,4046.8564224]],
     
     ["una1",["sq foot","Karam","Sq Karam","Marla","Kanal","Ghumao"]],
     ["una1vals",[0.09290,1.6764,2.81031696,25.29285264,505.8570528,4046.8564224]],
     
     ["kangra1",["sq foot","Karam","Sq Karam","Marla","Kanal","Ghumao"]],
     ["kangra1vals",[0.09290,1.6764,2.81031696,25.29285264,505.8570528,4046.8564224]],
     
     ["hamirpur1",["sq foot","Karam","Sq Karam","Marla","Kanal","Ghumao"]],
     ["hamirpur1vals",[0.09290,1.6764,2.81031696,25.29285264,505.8570528,4046.8564224]],
     
]);



var areafrom = document.getElementById("areatypefrom");
areafrom.value= "";
var preareafrom = getCookie("preareafrom");
var preareato = getCookie("preareato");
var pretypefrom = getCookie("pretypefrom");
var pretypeto = getCookie("pretypeto");
var tohold = getCookie("tohold");
var fromhold = getCookie("fromhold");
var fromtype = document.getElementById("fromtype");
var totype = document.getElementById("totype");
var areato = document.getElementById("areatypeto");

if(fromhold!=null && tohold!=null){
 input.addEventListener("keyup", myresult);
            function myresult(){
            if(input.value!=NaN){
               var ans = fromhold*(input.value)*tohold;
               result.value = ans;
               }
            }
}
if(tohold==null){ tohold = 0; } 
if(fromhold==null){ fromhold = 0; }

if(preareafrom!=null){
    areafrom.value = preareafrom;
    areafromonchange();
}
if(preareato!=null){
    areato.value = preareato;
    areatoonchange();
}
if(pretypefrom!=null){
    fromtype.value = pretypefrom;
}
if(pretypeto!=null){
    totype.value = pretypeto;
}
areafrom.onchange = () => areafromonchange();
areato.onchange = () => areatoonchange();
function areatoonchange(){
    setCookie("preareato",areato.value,7);
    var sub = list.get(areato.value);
    var subvals = list.get(areato.value+"vals");
    var s = 0;
    for(var i=0;i<sub.length;i++){
         totype.options[i] = new Option(sub[i],subvals[i]);
         s = s+1;
    }
    totype.options[s] = new Option("To Type","");
    if(pretypeto==null){
    totype.value = "";
    }else{
      totype.value = pretypeto;
    }
    totype.onchange = function(){
      setCookie("pretypeto",totype.value,7);
          tohold = 1/totype.value;
          setCookie("tohold",tohold,7);
          if(input.value!=NaN){
              var ans = fromhold*(input.value)*tohold;
              result.value = ans;
              }
    }
}
function areafromonchange(){
    setCookie("preareafrom",areafrom.value,7);
    var sub = list.get(areafrom.value);
    var subvals = list.get(areafrom.value+"vals");
    var s = 0;
    for(var i=0;i<sub.length;i++){
         fromtype.options[i] = new Option(sub[i],subvals[i]);
         s = s +1;
    }
    fromtype.options[s] = new Option("From type","");
    if(pretypefrom==null){
    fromtype.value = "";
    }else{
      fromtype.value = pretypefrom;
    }
    fromtype.onchange = function(){
           setCookie("pretypefrom",fromtype.value,7);
           fromhold = fromtype.value;
           setCookie("fromhold",fromhold,7);
           input.addEventListener("keyup", myresult);
            function myresult(){
            if(input.value!=NaN){
               var ans = fromhold*(input.value)*tohold;
               result.value = ans;
               }
            }
    }
}

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}


function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}










// feedback//
function dlgCancel(){
    dlgHide();
    document.getElementsByTagName("H1")[0].innerHTML = "Land-Scale-Converter";
}

function dlgOK(){
    dlgHide();
    document.getElementsByTagName("H1")[0].innerHTML = "Land-Scale-Converter.";
}

function dlgHide(){
    var whitebg = document.getElementById("white-background");
    var dlg = document.getElementById("dlgbox");
    whitebg.style.display = "none";
    dlg.style.display = "none";
}

function showDialog(){
    var whitebg = document.getElementById("white-background");
    var dlg = document.getElementById("dlgbox");
    whitebg.style.display = "block";
    dlg.style.display = "block";

    var winWidth = window.innerWidth;

    dlg.style.left = (winWidth/2) - 480/2 + "px";
    dlg.style.top = "150px";
}


const FAQHeaders = document.querySelectorAll(".FAQ-Container .FAQ-Header");
FAQHeaders.forEach((header, i) => {
    header.addEventListener("click",() => {
     header.nextElementSibling.classList.toggle("active")

     var open = header.querySelector(".open");
     var close = header.querySelector(".close");

     if(header.nextElementSibling.classList.contains("active")){
        open.classList.remove("active");
        close.classList.add("active");
     }
     else{
        open.classList.add("active");
        close.classList.remove("active");
     }
    });
});

