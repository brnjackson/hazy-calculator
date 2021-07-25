function calculate(calculationSteps) {
    let i = 0;
    let firstValue = calculationSteps[0]
    let secondValue = calculationSteps [2]

    // if item is a string convert to a number
    if(calculationSteps[i].typeOf === 'string'){
        Number(firstValue)
    }
     // use converted value to complete operation
    if (calculationSteps.includes('*')){
        return firstValue * secondValue

    }
    if (calculationSteps.includes(null) && calculationSteps.includes('+')){
        null === 0
    } return firstValue + secondValue
   }
module.exports = calculate