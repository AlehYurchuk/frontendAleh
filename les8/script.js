//Array

// let fruits = ['Apple', 'Banana'];
// //console.log(fruits.length); //длина массива

// let fruit1 = fruits[0];
// //console.log(fruit1);  //Apple

// let fruit2 = fruits[1];
// //console.log(fruit2); //Banana

// let new_fruits = fruits.push('Orange'); // добавление элемента

// let del_last = fruits.pop();//удаление 

// fruits.unshift('Orange'); //Добавление в начало массива
// fruits.shift(); //удаление первого элемента массива

// fruits.push('mango');

// //console.log(fruits.indexOf('mango')); //поиск номера элемента

// let removidetem = fruits.splice(1,1); // выбираем откуда удалить(1) второе значение- сколько удалить
// console.log(removidetem);
// console.log(fruits);

// let arr = [];
// let num1 = Number(prompt('Enter the number'));
// let num2 = Number(prompt('Enter the number'));
// let num3 = Number(prompt('Enter the number'));

// arr.push(num1, num2, num3);
// console.log(arr);

// let styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');
// styles[Math.floor((styles.length - 1)/2)] = 'классика'; 
// let removidetem = styles.splice(0,1);
// console.log(removidetem);
// console.log(styles);
// styles.unshift('Рэп', 'Регги');
// console.log(styles);
//Math.floor округление в меньшую
// Math.ceil округление в большую
// Math.round округление к ближайшему

// let arr = [1, 4, 2, 5, 3];
// //let new_arr = [arr[0]**2, arr[1]**2, arr[2]**2, arr[3]**2, arr[4]**2];
// let new_arr = [];

// for(let i = 0; i < 5; i++){
//     new_arr[i] = arr[i]**2;
// }
// console.log(arr);
// console.log(new_arr);

// let arr = [];
// for(let num = 0; num < 3; num++){
//     arr.push(Number(prompt('Array')));
// }
// console.log(arr);


//Написать цикл, которвый выводит только четные числа из массива
// let arr = [12, 15, 20, 21, 33, 36, 78];
// for(let i = 0; i < 7; i++){
//    if(arr[i]%2==0){
//     console.log(arr[i]);
//    }
// }

let arr = [-6, 12, 0, 22, -27, 33, 27, 17, ]
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0){
        sum += arr[i];
        
    }
}
console.log(sum);
