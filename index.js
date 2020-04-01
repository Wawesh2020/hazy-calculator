


function calculate(steps) {
  let valueOne
  let operator
  let valueTwo



  for (let i = 0; i < steps.length; i++) {
    if (!isNaN(parseInt(steps[i])) && typeof (steps[i]) === 'string') {
      if (valueOne === undefined) {
        valueOne = parseInt(steps[i])
      } else {
        valueTwo = parseInt(steps[i])
      }
    }

    if (typeof (steps[i]) === 'number') {
      if (valueOne === undefined) {
        valueOne = steps[i]
      } else {
        valueTwo = steps[i]
      }
    }



    // checks if steps[i] is an operator
    if (steps[i] === '+' || steps[i] === '-' || steps[i] === '*' || steps[i] === '/') {
      operator = steps[i]
    }



    if ((steps[i]) === null) {
      if (valueOne === undefined) {
        valueOne = 0
      } else {
        valueTwo = 0
      }
    }
  }
  if (operator === undefined) {
    return NaN
  }
  if (operator === '*') {
    return valueOne * valueTwo
  }
  if (operator === '+') {
    return valueOne + valueTwo
  }
  if (operator === '-')
  {
    return valueOne - valueTwo
  }
  if (operator === '/')
  {
    return valueOne / valueTwo
  }
}



module.exports = calculate
