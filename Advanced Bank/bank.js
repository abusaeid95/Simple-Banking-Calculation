function getInput(inputId){
    const currentInput = document.getElementById(inputId)
    if(currentInput.value > 0){
        const currentInputValue = parseFloat(currentInput.value)
    currentInput.value = ''
    return currentInputValue
    }  
}
function preivousTotalBalance(disId){
    const displayInnerId = document.getElementById(disId) 
    const displayInnerValue = parseFloat(displayInnerId.innerText)
    return displayInnerValue
}  
function innerTotal(displayId, totalValue){
    const displayInnerId = document.getElementById(displayId)
    displayInnerId.innerText = totalValue
}
function makeDiposit(){
    const currentDiposit = getInput('diposit-in')
    const previousDiposit = preivousTotalBalance('diposit-dis')
    const totalDiposit = previousDiposit + currentDiposit
    innerTotal('diposit-dis', totalDiposit)
    const previousTotalBalance = preivousTotalBalance('balance-dis')
    const dipositAfterBalance = previousTotalBalance + currentDiposit
    innerTotal('balance-dis', dipositAfterBalance)
}

function makeWithdraw(){
    const currentWithdraw = getInput('withdraw-in')
    const previousWitdraw = preivousTotalBalance('withdraw-dis')
    const totalWthdraw = previousWitdraw + currentWithdraw
    innerTotal('withdraw-dis', totalWthdraw)
    const previousTotalBalance = preivousTotalBalance('balance-dis')
    const withdrawAfterBalance = previousTotalBalance - currentWithdraw
    innerTotal('balance-dis', withdrawAfterBalance)
}