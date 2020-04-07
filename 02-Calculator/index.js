import {Calculator} from './Calculator.js';
import {MyMath} from "../01-MyMath/MyMath.js";

window.Calculator = Calculator;

window.calc = new Calculator(
    document.querySelector(".numpad"), 
    document.querySelector(".operations"),
    document.querySelector("#calculation"), 
    document.querySelector("#solution"), 
    document.querySelector("#delete")
    );

window.MyMath = MyMath