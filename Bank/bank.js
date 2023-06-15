// // Diposit input and display
// const inputDiposit = document.getElementById('diposit-in')
// const dipositDisplay = document.getElementById('diposit-dis')
// let balanceDisplay = document.getElementById('balance-dis')
// let previousDipValue = 0
// function makeDiposit(){
//   const balanceDisplay = document.getElementById('balance-dis')
//   const inputDiposit = document.getElementById('diposit-in')
//   const currentDiposit = inputDiposit.value
//   // const totalBalanceString = balanceDisplay.innerText
//   // const totalBalanace = parseFloat(totalBalanceString)
//  if(inputDiposit.value > 0){
//    const dipValue = inputDiposit.value
//  previousDipValue = Number(previousDipValue) + Number(dipValue)
// }
// dipositDisplay.innerText = previousDipValue
// // balanceDisplay.innerText = previousDipValue
// balanceDisplay.innerText = parseFloat(withDrawAfterTotal) + parseFloat(currentDiposit)
// inputDiposit.value = ""
// }

// // withdraw input and display
// let inputWithdraw = document.getElementById('withdraw-in')
// const withdrawDisplay = document.getElementById('withdraw-dis')
// let previousWithdValue = 0;
// let withDrawAfterTotal = 0
// function makeWithdraw (){
//   const balanceDisplay = document.getElementById('balance-dis')
//   const currentWithdraw = inputWithdraw.value
//   if(inputWithdraw.value > 0){
//     const withdValue = inputWithdraw.value
//     previousWithdValue = Number(previousWithdValue) + Number(withdValue)
//     withdrawDisplay.innerText = previousWithdValue
//   }
//   const previousWithDrawString = balanceDisplay.innerText
//   const previousBalanceTotal = parseFloat(previousWithDrawString)
//   const newBalanceTotal = previousBalanceTotal - Number(currentWithdraw)
//   balanceDisplay.innerText = newBalanceTotal
//   inputWithdraw.value = ''
//   withDrawAfterTotal = balanceDisplay.innerText
// }
// // Balance Calculation and Display

