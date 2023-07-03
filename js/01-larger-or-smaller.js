document.write(`<h1>Wellcome to Larger-or-Smaller application</h1>`)

 let x = parseInt(window.prompt('Enter first number'))
 let y = parseInt(window.prompt('Enter second number'))

if (x > y) document.write(`<h2>${x} is bigger</h2>`)
if (y > x) document.write(`<h2>${y} is bigger</h2>`)
if ( x === y) document.write(`<h2>Numbers are equal</h2>`)