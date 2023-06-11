function dailyTemperatures(temperatures: number[]): number[] {
    const answer = new Array<number>(temperatures.length).fill(0);

    let stack = [0];

    for (let i = 1; i < temperatures.length; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack.at(-1)!]) {
            const day = stack.pop()!;
            answer[day] = i - day ;
        }
        stack.push(i);
    }

    return answer;
};

export { dailyTemperatures };