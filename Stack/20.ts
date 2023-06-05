function isValid(s: string): boolean {

    const bracketsMap = new Map([
        ['}', '{'],
        [']', '['],
        [')', '(']
    ]);
    
    const stack = new Array();

    for (let c of s) {
        const pair = bracketsMap.get(c);
        
        if (!pair) { //then it is opening bracket
            stack.push(c);
        } else if (stack.at(-1) && pair === stack.at(-1)) {
            stack.pop();
        } else {
            return false;
        }
    }
    
    return stack.length === 0;
};

export { isValid }