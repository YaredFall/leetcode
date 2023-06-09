const OPERATORS = ['+', '-', '/', '*'];

function evalRPN(tokens: string[]): number {
    const stack = new Array();

    for (let token of tokens) {
        stack.push(OPERATORS.includes(token)
            ? performOperation(stack, token)
            : token
        )
    }
    
    return +stack[0];
};

function performOperation(stack: string[], operation: string) {
    const secondOperand = +stack.pop()!;
    const firstOperand = +stack.pop()!;
    switch (operation) {
        case '+':
            return firstOperand + secondOperand;
        case '-':
            return firstOperand - secondOperand;
        case '*':
            return firstOperand * secondOperand;
        case '/':
            return ~~(firstOperand / secondOperand);

        default: throw new Error("Unexpected operation token")
    }
}

export { evalRPN }