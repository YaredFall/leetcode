import { MinStack } from "./155";

describe('155. Min Stack', () => {
    test('case 1', () => {
        const minStack = new MinStack();
        minStack.push(-2);
        minStack.push(0);
        minStack.push(-3);
        // minStack.getMin(); // return -3
        expect(minStack.getMin()).toBe(-3);

        minStack.pop();
        // minStack.top();    // return 0
        expect(minStack.top()).toBe(0);

        // minStack.getMin(); // return -2
        expect(minStack.getMin()).toBe(-2);
    })
})