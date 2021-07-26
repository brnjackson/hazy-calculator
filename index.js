function calculate(calculationSteps) {
    let nums = []
    let operator = ''
    let operators = ['+','-','/','*']

    for (let i = 0; i < calculationSteps.length; i++) {
        if (calculationSteps[i] === null){
            nums.push(0)
            continue
        } 
        if (operators.includes(calculationSteps[i])) {
            operator = calculationSteps[i]
            continue
        } 
        
        if (calculationSteps[i] === undefined || calculationSteps[i] === '' || isNaN (parseFloat(calculationSteps[i])))
        {
            continue
        }
        nums.push(Number(calculationSteps[i]))
    }

    if (nums.length !== 2 || operator.length !== 1) {
        return NaN
    }
    
    if (operator === '-'){
        return nums[0] - nums [1]
    }
    if (operator === '+'){
        return nums[0] + nums [1]
    }
    if (operator === '*'){
        return nums[0] * nums [1]
    }
    if (operator === '/'){
        return nums[0] / nums [1]
    }
}

   
module.exports = calculate