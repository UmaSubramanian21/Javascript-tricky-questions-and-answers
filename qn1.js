// What will be the output and why>
console.log(a)

var a = 10

function foo() {
    console.log(a)
    var a = 20
}
foo()
console.log(a)