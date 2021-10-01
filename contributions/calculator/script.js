const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen = (number) => {
    calculatorScreen.value = number
}
const numbers = document.querySelectorAll(".number")
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        updateScreen(event.target.value)

    })
})
let prevInput = '0'
let calculationOperator = ''
let currentInput = '0'
const inputNumber = (number) => {
    if (currentInput === '0') {
        currentInput = number
    } else {
        currentInput += number
    }
}
numbers.forEach((number) => {
    number.addEventListener(("click"), (event) => {
        inputNumber(event.target.value)
        updateScreen(currentInput)
    })
})
const operators = document.querySelectorAll(".operator")
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })

})
const inputOperator = (operator) => {
    prevInput = currentInput
    calculationOperator = operator
    currentInput = '0'
}
const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener("click", () => {
    calculate()
    updateScreen(currentInput)
})
const calculate = () => {
    let result = 0
    switch (calculationOperator) {
        case '+':
            result = parseInt(prevInput) + parseInt(currentInput)
            break
        case '-':
            result = parseInt(prevInput) - parseInt(currentInput)
            break
        case '*':
            result = parseInt(prevInput) * parseInt(currentInput)
            break
        case '/':
            result = parseInt(prevInput) / parseInt(currentInput)
            break
        default:
            return
    }
    currentInput = result.toString()
    calculationOperator = ''
}
const clearBtn = document.querySelector(".all-clear")
clearBtn.addEventListener("click", () => {
    clearAll()
    updateScreen(currentInput)
})
const clearAll = () => {
    prevInput = '0'
    currentInput = '0'
    calculationOperator = ''
}
const decimal = document.querySelector(".decimal")
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
})
inputDecimal = (dot) => {
    if (currentInput.includes(".")) {
        return
    }
    currentInput += dot
}