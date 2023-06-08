class MinStack {
    private stack: Array<number>;
    private mins: Array<number>;

    constructor() {
        this.stack = new Array<number>();
        this.mins = new Array<number>();
    }

    push(val: number): void {
        this.stack.push(val);
        if (!this.mins.length || val <= this.mins.at(-1)!) {
            this.mins.push(val);
        }
    }

    pop(): void {
        const removed = this.stack.pop();
        removed === this.mins.at(-1) && this.mins.pop();
    }

    top(): number {
        return this.stack.at(-1)!
    }

    getMin(): number {
        return this.mins.at(-1)!;
    }
}

export { MinStack }