var input=document.getElementById('input');
var result=document.getElementById('result');
var inputtype =document.getElementById('inputtype');
var resulttype=document.getElementById('resulttype');
var inputtypevalue,resulttypevalue;



var list = new Map([
     ["kinnaur",["Karam","Sq Karam","Biswa","Bigha"]],
     ["kinnaurvals",[1.3716,1.881286,37.6257312,752.514624]],
      
           ["bilaspur",["Karam","Sq Karam","Biswa","Bigha"]],
     ["bilaspurvals",[1.3716,1.881286,37.6257312,752.514624]],
     
          ["shimla",["Karam","Sq Karam","Biswa","Bigha"]],
     ["shimlavals",[1.3716,1.881286,37.6257312,752.514624]],
     
     ["solan",["Karam","Sq Karam","Biswa","Bigha"]],
     ["solanvals",[1.3716,1.881286,37.6257312,752.514624]],
     
     ["mandi",["Karam","Sq Karam","Biswa","Bigha"]],
     ["mandivals",[1.4224,2.02322,40.4644,809.28870]],
     
      ["kullu",["Karam","Sq Karam","Biswa","Bigha"]],
     ["kulluvals",[1.4224,2.02322,40.4644,809.28870]],
     
      ["chamba",["Karam","Sq Karam","Biswa","Bigha"]],
     ["chambavals",[1.4224,2.02322,40.4644,809.28870]],
     
      ["lahul",["Karam","Sq Karam","Biswa","Bigha"]],
     ["lahulvals",[1.4224,2.02322,40.4644,809.28870]],
     
     
      ["una",["Karam","Sq Karam","Marla","Kanal","Ghumao"]],
     ["unavals",[1.4605,2.13306025,19.19754225,383.950845,3071.60676]],
     
     ["kangra",["Karam","Sq Karam","Marla","Kanal","Ghumao"]],
     ["kangravals",[1.4605,2.13306025,19.19754225,383.950845,3071.60676]],
     
     ["hamirpur",["Karam","Sq Karam","Marla","Kanal","Ghumao"]],
     ["hamirpurvals",[1.4605,2.13306025,19.19754225,383.950845,3071.60676]],
     
      ["solan1",["Karam","Sq Karam","Marla","Kanal","Ghumao"]],
     ["solan1vals",[1.6764,2.81031696,25.29285264,505.8570528,4046.8564224]],
     
     ["una1",["Karam","Sq Karam","Marla","Kanal","Ghumao"]],
     ["una1vals",[1.6764,2.81031696,25.29285264,505.8570528,4046.8564224]],
     
     ["kangra1",["Karam","Sq Karam","Marla","Kanal","Ghumao"]],
     ["kangra1vals",[1.6764,2.81031696,25.29285264,505.8570528,4046.8564224]],
     
     ["hamirpur1",["Karam","Sq Karam","Marla","Kanal","Ghumao"]],
     ["hamirpur1vals",[1.6764,2.81031696,25.29285264,505.8570528,4046.8564224]],
     
]);




var areafrom = document.getElementById("areatypefrom");
areafrom.value= "";
var fromtype = document.getElementById("fromtype");
var totype = document.getElementById("totype");
var areato = document.getElementById("areatypeto");
var fromhold = 0;
var tohold = 0;
areafrom.onchange = function(){
      var sub = list.get(areafrom.value);
      var subvals = list.get(areafrom.value+"vals");
      var s = 0;
      for(var i=0;i<sub.length;i++){
           fromtype.options[i] = new Option(sub[i],subvals[i]);
           s = s +1;
      }
      fromtype.options[s] = new Option("From type","");
      fromtype.value = "";
      fromtype.onchange = function(){
             fromhold = fromtype.value;
             input.addEventListener("keyup", myresult);





















              function myresult(){
              if(input.value!=NaN){
                 var ans = fromhold*(input.value)*tohold;
                 result.value = ans;
                 }
              }
      }
}
areato.onchange = function(){
      var sub = list.get(areato.value);
      var subvals = list.get(areato.value+"vals");
      var s = 0;
      for(var i=0;i<sub.length;i++){
           totype.options[i] = new Option(sub[i],subvals[i]);
           s = s+1;
      }
      totype.options[s] = new Option("To Type","");
      totype.value = "";
      totype.onchange = function(){
            tohold = 1/totype.value;
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



