


function calculate(steps) {
  let total = 0
  let operator

  let valueTwo = 0


  for (let i = 0; i < steps.length; i++) {
    if (!isNaN(parseInt(steps[i])) && typeof (steps[i]) === 'string') {
      total = parseInt(steps[i])
    }
    if (typeof (steps[i]) === 'number') {
      valueTwo = steps[i]
    }

    if (steps[i] === '+' || steps[i] === '-' || steps[i] === '*' || steps[i] === '/') {
      operator = steps[i]
    }

    //   if (typeof (steps[i]) === 'number' && !isNaN(parseInt(steps[i])) ) {
    //     total = parseInt(steps[i])
    //   }
    //   if (typeof (steps[i]) < 1) { 
    //     valueTwo = steps[i]
    //   }
    // }
  }
  if (operator === undefined) {
    return NaN
  }
  if (operator === '*') {
    return total = total * valueTwo
  }
}

module.exports = calculate
