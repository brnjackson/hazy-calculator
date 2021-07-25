let calculationSteps = [, , '', 23, '-', , 12]

function mathFun() {
    let i = 0
    let filtered = calculationSteps.filter(mathFun => mathFun.calculationSteps[i] != '')
    return calculationSteps
} 

console.log(filtered)
