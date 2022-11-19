//задача 1
// let d;
// d = 7;
// window.alert(d);
// window.alert(Math.pow(d, 2));
// window.alert(Math.pow(d, 3));

//задача 2
// let a;
// a = parseFloat(window.prompt('Введите число'));
// if (a > 0) {
// a = a * 2;
// window.alert(String('Новое значение = ') + String(a));
// }

//задача 3
// let a;
// a = parseFloat(window.prompt('Введите число'));
// if (a > 0) {
// window.alert('положительное');
// }
// if (a < 0) {
// window.alert('отрицательное');
// }
// if (a == 0) {
// window.alert('ноль');
// }

//задача 4
// let a;
// let b;
// a = parseFloat(window.prompt(' первое число'));
// b = parseFloat(window.prompt(' второе число'));
// if (a > b) {
// window.alert(a + b);
// }
// if (a < b) {
// window.alert(a * b);
// }
// if (a == b) {
// window.alert('числа одинаковые');
// }

//задача 5
// let a;
// a = parseFloat(window.prompt('Введите число'));
// if (a < 0) {
// a = Math.pow(a, 2);
// window.alert(a);
// } else {
// window.alert('ошибка');
// }

//задача 6
// let a;
// let b;
// let c;
// a = parseFloat(window.prompt('Введите кол-во учеников'));
// b = parseFloat(window.prompt('Введите кол-во стульев'));
// if (b >= a) {
// c = b - a;
// window.alert(String(c) + String(' стульев лишних'));
// } else {
// c = a - b;
// window.alert(String(c) + String(' стульев не хватает'));
// }

//задача 7
// let i;
// window.alert('старт');
// for (i = 1; i <= 9; i++) {
// window.alert(i);
// }
// window.alert('финиш');

//задача 8
// let i;
// for (i = 10; i <= 150; i++) {
// if (i % 5 == 0) {
// window.alert(i);
// }
// }


//задача 9
// let a;
// let i;
// a = parseFloat(window.prompt('Введите число'));
// if (a % 2 == 0) {
// a = a - 1;
// }
// for (i = 1; i <= 7; i++) {
// a = a + 2;
// window.alert(a);
// }

//задача 11
// let num = 0;
// while(num<10){
//   num++;
//   if(num%2) console.log(num);
// }

//задача 14 
// let sum = 0;
// for (var i = 0; i < 20; i++)
// {
//     if (i % 2 == 1) sum += i;
// }
// document.write(sum);