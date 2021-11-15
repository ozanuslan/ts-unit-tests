const calculate = require('../index');

describe('calculate', () => {
    it("should add 2 and 5, and get 7", () => {
        const res = calculate.add(2, 5);
        expect(res).toBe(7);
    })

    it("should subtract 2 from 5, and get 3", () => {
        const res = calculate.subtract(5, 2);
        expect(res).toBe(3);
    })

    it("should multiply 0 with 100, and get 0", ()=> {
        const res = calculate.multiply(0, 100);
        expect(res).toBe(0);
    })

    it("should divide 2 by 0, and get Infinity", () => {
        const res = calculate.divide(2, 0);
        expect(res).toBe(Infinity);
    })
})