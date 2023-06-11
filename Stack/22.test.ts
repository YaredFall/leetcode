import { generateParenthesis } from "./22";

describe('22. Generate Parentheses', () => {
    test('case 1', () => {
        expect(generateParenthesis(3))
        .toEqual(["((()))","(()())","(())()","()(())","()()()"]);
    });

    test('case 2', () => {
        expect(generateParenthesis(1))
        .toEqual(["()"]);
    });
});