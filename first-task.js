window.onload = function () {
    evenNumber();
    listNumber();
    summa();
    table7D();
    addition();
    showUnicode();
};

/*
 = function () {
      alert("Найти наибольшее с двух чисел");
    var firstNumber = document.getElementById('first-number').value;
    var secondNumber = document.getElementById('second-number').value;

    (firstNumber==secondNumber) ? alert("Числа равны"):((firstNumber <secondNumber) ? alert("Второе число больше"):alert("Первое число больше"));


    alert("Задание №3");
    alert(" Определить номер квартиры по введенному числу");
    var numberRoom = prompt("Введите номер квартиры");
    if(numberRoom >=1 && numberRoom <=80){
     if(numberRoom >=1 && numberRoom <=20){
     alert("1 подъезд");
     }
     else if(numberRoom >=21 && numberRoom<=64){
     alert("2 подъезд");
     }
     else{
     alert("3 подъезд");
     }
     }
     else{
     alert("Квартиры с таким номеером нет");
     }


    (numberRoom >= 1 && numberRoom <= 80) ? (
        (numberRoom >= 1 && numberRoom <= 20) ? alert("1 подъезд") :
            (numberRoom >= 21 && numberRoom <= 64) ? alert("2 подъезд") :  alert("3 подъезд")
    )
        : alert("Квартиры с таким номеером нет");


    alert("Задание №4");
    alert("Проверка ");
    var userName = prompt("Введите Логин");
    var password = prompt("Введите парол ");
    if ((userName == "ivan" && password == "333") || (userName == "ssss" && password == "666") || (userName == "gibs " && password == "000")) {
        alert("Добро пожаловать!");
    }
    else {
        alert("Ошибка");
    }

    alert("Задание №5");
    alert("Найти максимальное с трёх чисел");
    var firstNumber = prompt("Введите первое число");
    var secondNumber = prompt("Введите второе число ");
    var thirdNumber = prompt("Введите третье число ");
    if( firstNumber == secondNumber && secondNumber == thirdNumber){
        alert("Введенно три одинаковых числа.")
    }
    else {
        if ((firstNumber > secondNumber) && (firstNumber > thirdNumber)) {
            alert("Максимальное первое число. Это число " + firstNumber);
        }
        else if (secondNumber > thirdNumber) {
            alert("Максимальное второе число. Это число " + secondNumber);
        }
        else {
            alert("Максимальное третье число. Это число " + thirdNumber);
        }
    }


    alert("Задание №6");
    alert("Найти все четные числа от 0 до 101");
    var body = document.getElementsByTagName('body')[0];
    console.log(body);
    var ol = document.createElement('ol');
    body.appendChild(ol);
    for (var i = 0; i < 101; i++) {
        if (i % 2 == 0) {
            var li = document.createElement('li');
            ol.appendChild(li);
            li.innerHTML = li.innerHTML + i;
        }
    }


    alert("Задание №7");
    alert("Вывести числа от 200 до 0");
    var body = document.getElementsByTagName('body')[0];
    console.log(body);
    var ul = document.createElement('ul');
    body.appendChild(ul);
    for (var i = 200; i >= 0; i--) {
        var li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = li.innerHTML + i;
    }


    alert("Задание №8");
    alert("Найти сумму чисел от 0 до 100 включительно");
    var body = document.getElementsByTagName('body')[0];
    var caption = document.createElement('h1');
    body.appendChild(caption);
    var summa = 0;
    for (var i = 200; i >= 0; i--) {
        summa+=i;
    }
    caption.innerHTML=caption.innerHTML+summa;

    alert("Задание №9");
    alert("Найти степень числа");
    var body = document.getElementsByTagName('body')[0];
    var numberInput = document.createElement('input');
    body.appendChild(numberInput);
    numberInput.className = 'numberInput';
    var powerInput = document.createElement('input');
    powerInput.className = 'powerInput';
    body.appendChild(powerInput);
    var powBtn = document.createElement('button');
    body.appendChild(powBtn);
    powBtn.innerHTML = 'click';
    powBtn.className = 'pow';
    powBtn.addEventListener('click',pow,false);
    var mult= 1;
    function pow() {
        var value1 = Number(document.getElementsByClassName('numberInput')[0].value);
        var value2 = Number(document.getElementsByClassName('powerInput')[0].value);
        console.log(value1,value2);
        for (var i = 1; i <= value2; i++) {
            mult = mult * value1;
        }
        alert(mult);
    }


    alert("Задание №10");
    alert("таблица умножения на 7 от 1 ");
    var body = document.getElementsByTagName('body')[0];
    var p = document.createElement('p');
    for(var i = 1 ; i<=10;i++){
        body.appendChild(p);
        p.innerHTML = p.innerHTML+i*7+"<br>";
    }

    alert("Задание №11");
    alert("Вывести сложение чисел от 1 до 50");
    var body = document.getElementsByTagName('body')[0];
    var p = document.createElement('p');
    var mul = 1;
    for(var i = 1 ; i<=50;i++){
        body.appendChild(p);
        mul*=i;

    }
    p.innerHTML = p.innerHTML+mul;


    alert("Задание №12");
    alert("Вывести  коды спецсимволов от 1000 до 2000");
    var body = document.getElementsByTagName('body')[0];
    var p = document.createElement('p');
    for(var i = 1000 ; i<=2000;i++){
        body.appendChild(p);
        p.innerHTML = p.innerHTML+"&#"+i+"<br>";
    }
};

*/


//ЗАДАНИЕ 1
function getYearOld(){
    var enterYear = document.getElementById('yearOld').value;
    var currentYear = new Date().getFullYear();
    var old = null;
    if(enterYear.length == 4){
        old = currentYear - enterYear;
    }
    else if(enterYear.length == 2){
        old = currentYear - 2000 -  enterYear;
    }
    else{
        alert("Error");
    }
    alert("Вам"+old+" лет");
}


//ЗАДАНИЕ 2

function Max() {
    alert("test");
    var firstNumber = document.getElementById('first-number').value;
    var secondNumber = document.getElementById('second-number').value;
    var max = (firstNumber == secondNumber) ? firstNumber:((firstNumber < secondNumber) ? secondNumber : firstNumber);
    document.getElementById("result").innerHTML = max;
}

function getHouseNumber() {
    var numberRoom = document.getElementById('number-room').value;
    var getHouse = (numberRoom >= 1 && numberRoom <= 80) ? (
        (numberRoom >= 1 && numberRoom <= 20) ? "1 подъезд" :
            (numberRoom >= 21 && numberRoom <= 64) ? "2 подъезд" : "3 подъезд"
    )
        : "Квартиры с таким номеером нет";

    document.getElementById("house-number").innerHTML = getHouse;
}

function auth() {
var userName = document.getElementById('user-name').value;
var password = document.getElementById('password').value;
    if ((userName == "ivan" && password == "333") || (userName == "ssss" && password == "666") || (userName == "gibs " && password == "000")) {
        alert("Добро пожаловать!");
    }
    else {
        alert("Ошибка");
    }
}


function max3D() {
    var firstNumber = document.getElementById('first').value;
    var secondNumber = document.getElementById('second').value;
    var thirdNumber = document.getElementById('third').value;
	
	console.log(firstNumber,secondNumber,thirdNumber);
    var max = null;
	max = Math.max(firstNumber,secondNumber,thirdNumber);
   /* if( firstNumber == secondNumber && secondNumber == thirdNumber){
       max = firstNumber;
    }
    else {
        if ((firstNumber > secondNumber) && (firstNumber > thirdNumber)) {
           max = firstNumber;
        }
        else if (secondNumber > thirdNumber) {
            max = secondNumber;
        }
        else {
            max = thirdNumber;
        }
    }*/
    document.getElementById("max").innerHTML = max;
}

function evenNumber() {
    var body = document.getElementsByTagName('body')[0];
    var div = document.createElement('div');
    body.appendChild(div);
    div.id="odd";
    for (var i = 0; i < 101; i++) {
        if (i % 2 == 0) {
            var span = document.createElement('span');
            div.appendChild(span);
            span.innerHTML = span.innerHTML + i;
        }
    }
}

function listNumber(){
    var body = document.getElementsByTagName('body')[0];
   var div = document.createElement('div');
    div.id= "test";
    body.appendChild(div);
    for (var i = 200; i >= 0; i--) {
        var span = document.createElement('span');
        div.appendChild(span);
        span.innerHTML = span.innerHTML + i;
    }
}

function summa() {
    var summ = 0;
    for(var i =0; i<100;i++){
        summ+=i;
    }
    document.getElementById("summa").innerHTML = summ;

}

function getPower() {
    var mult = 1;
    var number = document.getElementById('number').value;
    var powered = document.getElementById('power').value;
    for (var i = 1; i <= powered; i++) {
        mult = mult * number;
    }
    document.getElementById("result-power").innerHTML = mult;
}

function table7D() {
    var body = document.getElementsByTagName('body')[0];
    var p = document.createElement('p');
    for(var i = 1 ; i<=10;i++){
        body.appendChild(p);
        p.innerHTML = p.innerHTML+i*7+"<br>";
    }
}

function addition(){
    var mul = 1;
    for(var i = 1 ; i<=50;i++){
        mul*=i;

    }
    document.getElementById("addition").innerHTML = mul;
}

function showUnicode() {
    var body = document.getElementsByTagName('body')[0];
    var div = document.createElement('div');
    div.id= "unicode";
    body.appendChild(div);
    for(var i = 1000 ; i<=2000;i++){
        var span = document.createElement('span');
        div.appendChild(span);
        span.innerHTML = span.innerHTML +"&#"+i;
    }
}

