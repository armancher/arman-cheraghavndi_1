let mysrt = prompt();
let reverse = "";
for (let i = mysrt.length - 1; i >= 0; i--) {
    reverse += mysrt.charAt(i)


}
console.log(reverse)
if (mysrt == reverse) {
    console.log("yes")
} else {
    console.log("no")
}