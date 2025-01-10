function foo(a,b){
  a = Number(a);
  b = Number(b);
  return a+b;
}
console.log(foo(1,2)); //3
console.log(foo(1,"2")); //3