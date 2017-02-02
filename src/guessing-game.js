class GuessingGame {
    constructor() {
    	this.left;
    	this.right;
    }

    setRange(min, max) {
    	this.left = min;
    	this.right = max;
    }

    guess() {
    	return Math.ceil((this.left + this.right) / 2);
    }

    lower() {
    	this.right = Math.ceil((this.left + this.right) / 2);
    }

    greater() {
    	this.left = Math.ceil((this.left + this.right) / 2);
    }
}

module.exports = GuessingGame;