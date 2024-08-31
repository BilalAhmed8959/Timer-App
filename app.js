var hours = document.querySelector("#hours");
var minutes = document.querySelector("#minutes");
var sec = document.querySelector("#sec");
var span_1 = document.querySelector("#span_1")
var span_2 = document.querySelector("#span_2")
var span_3 = document.querySelector("#span_3")
var span_4 = document.querySelector("#span_4")
var span_5 = document.querySelector("#span_5")
var span_6 = document.querySelector("#span_6")
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0;
var h = 0;

var abc ;

function startTimer(){
    
  abc = setInterval(function(){
    a += 1;
    span_6.innerHTML = a ;
    if(span_6.innerHTML == 10){
        a = 0;
        span_6.innerHTML = a;
        b += 1;
        span_5.innerHTML = b
        if(span_5.innerHTML == 6){
            b = 0;
            span_5.innerHTML = b;
            c += 1;
            span_4.innerHTML = c;
        }if(span_4.innerHTML == 10){
            c = 0;
            span_4.innerHTML = c;
            d += 1;
            span_3.innerHTML = d;
        }if(span_3.innerHTML == 6){
            d = 0;
            span_3.innerHTML = d;
            e += 1;
            span_2.innerHTML = e;
        }if(span_2.innerHTML == 10){
            e = 0;
            span_2.innerHTML = e;
            f += 1;
            span_1.innerHTML = f;
        }

    }

    
    // a += 1
    // sec.innerHTML = a
    // if(sec.innerHTML == 5){
    //     sec.innerHTML = 0;
    //     a = 0;
    //     b += 1;
    //     minutes.innerHTML = b
    //     if(minutes.innerHTML == 2){
    //         minutes.innerHTML = 0;
    //         b =0 ;
    //         c += 1;
    //         hours.innerHTML = c;
    //     }
    // }
},1000)
}
function stopTimer(){
    clearInterval(abc);
}
var clearsec = sec.innerHTML;
var clearmminutes = minutes.innerHTML;
var clearhours = hours.innerHTML;
function clearAll(){
    a = 0;
    sec.innerHTML = clearsec;
    minutes.innerHTML = clearmminutes;
    hours.innerHTML = clearhours;
}
