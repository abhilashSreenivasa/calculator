const Calculator=require('../src/calculater')

describe("Calculator",()=>{
    let c;
    beforeEach(()=>{
        c=new Calculator()
    })
    test("Add two numbers",()=>{
        const res=c.add(2,5)
        expect(res).toBe(7)
    })
    test("Subtract two numbers",()=>{
        const res=c.subtract(9,5)
        expect(res).toBe(4)
    })
    test("Multiply two numbers",()=>{
        const res=c.multiply(9,2)
        expect(res).toBe(18)
    })
    test("Divide two numbers",()=>{
        const res=c.divide(9,3)
        expect(res).toBe(3)
    })
    test("Divide by zero error",()=>{
        const res=c.divide(4,0)
        expect(res).toBe(undefined)
    })
})