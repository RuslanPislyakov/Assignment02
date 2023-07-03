
let coinFlip;
let randomNum = Math.round(Math.random());

let choise = prompt('Select "h" for Heads or "t" for Tails')

if (randomNum == 1) coinFlip = 'h'
    else coinFlip = 't'


if (coinFlip == 'h' && choise == 'h') {
    alert('The flip was heads and you chose heads...you win!')
} else if (coinFlip == 'h' && choise == 't') {
        alert('The flip was heads but you chose tails...you lose!')
} else if (coinFlip == 't' && choise == 'h') {
        alert('The flip was tails but you chose heads...you lose!')
} else {
        alert('The flip was tails and you chose tails...you win!')
}
