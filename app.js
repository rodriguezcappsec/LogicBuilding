class PascalPiramid {

    constructor(_prmdDimension) {
        this.vals = [1, 1];
        this.prmdDimension = _prmdDimension;
        this.prmdNextLevel = [];
        this.prmdLeves = {
            "Level 1": "1",
            "Level 2": "1 1",
        };
    }

    createPiramid() {
        let sum = 0;
        let count = 0;
        let num = 3;
        while (num <= this.prmdDimension) {
            this.vals.forEach((element) => {
                this.prmdNextLevel.push(sum += element);
                ++count;
                sum = element;
                count === 2 ? count = 0 : count;
            });
            count = 0;
            sum = 0;
            this.prmdNextLevel.push(1);
            this.prmdLeves[`Level ${num.toString()}`] = this.prmdNextLevel.toString();
            this.vals = this.prmdNextLevel;
            this.prmdNextLevel = [];
            ++num;
        }

        for (const key in this.prmdLeves) {
            console.log(`${key}: ${this.prmdLeves[key]}`);
        }
    }
}

let prmd = new PascalPiramid(50);
prmd.createPiramid();