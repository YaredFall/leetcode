import { isValid } from "./20"

describe('20. Valid Parentheses', () => { 
    test('case 1', () => { 
        expect(isValid("()")).toBe(true);
     });
     
     test('case 2', () => { 
        expect(isValid("()[]{}")).toBe(true);
     });
     
     test('case 3', () => { 
        expect(isValid("(]")).toBe(false);
     });
     
     test('additional case 1', () => { 
        expect(isValid("([)]")).toBe(false);
     });
     
     test('additional case 2', () => { 
        expect(isValid("[")).toBe(false);
     });
 })