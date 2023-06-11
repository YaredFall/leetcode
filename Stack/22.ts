function generateParenthesis(n: number): string[] {
    const answer = new Array<string>();

    let [usedLeft, usedRight] = [0,0];

    let s = "";

    (function step(currentString: string, usedLeft: number, usedRight: number) {

        if (currentString.length < 2*n) {
            usedLeft < n && step(currentString + "(", usedLeft + 1, usedRight);
            usedRight < n && usedRight < usedLeft && step(currentString + ")", usedLeft, usedRight + 1);
        } else {
            answer.push(currentString);
        }

    })(s, usedLeft, usedRight);

    return answer;
};


export { generateParenthesis }