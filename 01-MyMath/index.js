import { MyMath } from "./MyMath.js";

window.MyMath = MyMath; // Fügt die Klasse MyMath zum globalen Namespace hinzu, damit ihr sie in der Browserkonsole hernehmen könnt.

let my = new MyMath(5);


my.pow(2).add(2).show().add(2).show();


