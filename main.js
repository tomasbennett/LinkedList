import { LinkedList } from "./LinkedList.js";

const list = new LinkedList();

list.prepend("weather");
list.prepend("time");
list.prepend("maths");
list.prepend("science");
list.prepend("fun");
list.append("gaming");

console.log(list.toString());
console.log(list.tail.value);
console.log(list.toString());