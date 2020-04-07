const calculator={
    plus:function(a,b){
        return a+b
    },
    sub:function(a,b){
        return a-b
    },
    mul:function(a,b){
        return a*b;
    },
    div:function(a,b){
        return a/b;
    },
    sq:function(a,b){
        return a**b;
    }

}

const plus=calculator.plus(5,5)
const sub=calculator.sub(5,3)
const mul=calculator.mul(5,3)
const div=calculator.mul(10,2)
const sq=calculator.sq(2,2)
console.log(plus)
console.log(sub)
console.log(mul)
console.log(div)
console.log(sq)

