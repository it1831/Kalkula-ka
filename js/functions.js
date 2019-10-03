//alert('pokus');
let prvni = document.getElementById('prvni');
let druhy = document.getElementById('druhy');
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let deleno = document.getElementById('deleno');
let krat = document.getElementById('krat');
let result = document.getElementById('result');
let button = document.getElementById('button');
let i ;


minus.addEventListener('click', function () {
    i = 1;
});

plus.addEventListener('click', function () {
    i = 2;
});
deleno.addEventListener('click', function () {
    i = 3;
});

krat.addEventListener('click', function () {
    i = 4;
});


button.addEventListener('click', function (){
    if(i == 1){
      result.innerText = prvni.value - druhy.value;
    }
    else if(i == 2){
      let PrvniPlus = Number(prvni.value);
      let DruhyPlus = Number(druhy.value);
        result.innerText = PrvniPlus + DruhyPlus;
      
      }
    else if(i == 3){
      result.innerText = prvni.value / druhy.value;
      }
    else if(i == 4){
      result.innerText = prvni.value * druhy.value;
      }
});
