import { evalRPN } from "./150";

describe('150. Evaluate Reverse Polish Notation', () => { 
    test('case 1', () => {
        expect(evalRPN(["2","1","+","3","*"])).toBe(9);
    });
    test('case 2', () => {
        expect(evalRPN(["4","13","5","/","+"])).toBe(6);
    });
    test('case 3', () => {
        expect(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])).toBe(22);
    });
 })