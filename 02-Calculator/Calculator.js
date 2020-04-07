import {MyMath} from "../01-MyMath/MyMath.js";

export class Calculator {

    constructor(numpad, ops, outputCalculation, outputSolution, delete_key) {
        this.numpad = numpad;
        this.ops = ops;
        this.outputCalculation = outputCalculation;
        this.outputSolution = outputSolution;
        this.delete_key = delete_key;
        this.setupNumPad();
    }

    setupNumPad() { 
        for (let i of this.numpad.children) {
            i.addEventListener('click', (event) => { this.onNumButtonClick(i.innerText) });
        }
        this.delete_key.addEventListener('click', (event) => {this.clear();});


    }

    onNumButtonClick(symbol) {
        this.click_count++;
        console.log(symbol);
        this.print(symbol);
    }

    print(string) {
        this.outputCalculation.innerHTML += string;
    }

    printSolution(string) {

    }

    clear() {
        this.ops = null;
        this.outputCalculation.innerHTML = '';
    }

}
