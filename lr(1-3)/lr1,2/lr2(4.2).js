var a=prompt("Введите первое число");
var b=prompt("Введите второе число");
var c=prompt("Введите третье число");

let arr = [a, b, c];
arr.sort((a, b) => b - a);
if(arr[0]==arr[1]&&arr[0]>arr[2]){
  alert("Максимальные числа:"+" "+arr[0]+";"+arr[1]);
}
if(arr[0]!==arr[1]){
  alert("Максимальные число:"+" "+arr[0]+";");
}
if(arr[0]==arr[1]&&arr[0]==arr[2]){
  alert("Максимальные числа:"+" "+arr[0]+";"+arr[1]+";"+arr[2]);
}



