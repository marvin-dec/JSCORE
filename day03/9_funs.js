// console.log(funs,fun);
function fun(){
  for (var i=0,arr=[];i<3;i++){
    arr[i]=function(){console.log(i)};
  }
  return arr;
}
var funs=fun();
console.log(funs);
funs[0]();//3
funs[1]();//3
funs[2]();//3





// 循环中匿名函数未被调用，arr内存放三个相同的函数均为function(){console.log(i)}
for (var i=0,arr=[];i<3;i++){
  arr[i]=function(){console.log(i)};
  console.log(arr[i]);
}
console.log(arr);