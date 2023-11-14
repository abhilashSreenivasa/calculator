class Calculator{
    constructor(){
        this.res=0
    }
    add(a,b){
        this.res=a+b
        return this.res
    }
    subtract(a,b){
        this.res=a-b
        return this.res
    }
    multiply(a,b){
        this.res=a*b
        return this.res
    }
    divide(a,b){
        if (b!=0){
            this.res=a/b
            return this.res
        }
        else{
            console.error("Divide by error")
            return undefined
        }
    }
};

module.exports=Calculator

