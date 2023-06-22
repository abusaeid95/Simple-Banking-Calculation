function getInputValues (inputId){
    let getInputValue = document.getElementById(inputId)
    if(getInputValue.value > 0){
    const currentInput = parseFloat(getInputValue.value)
    getInputValue.value = ''
    return currentInput
    }
    else{
        alert('Please Input more than 0')
        return 0
    }
    }
    
    
    function makeDiposit(){
      const getCurrentDiposit = getInputValues('diposit-in')
      const displayDiposit = document.getElementById('diposit-dis')
      const displayTotalBalance = document.getElementById('balance-dis')
      const previousTotalBalance = parseFloat(displayTotalBalance.innerText)
      const previousDiposit = parseFloat(displayDiposit.innerText)
      const totalDiposit = previousDiposit + getCurrentDiposit
      displayDiposit.innerText = totalDiposit
      const totalAfterDiposit = previousTotalBalance + getCurrentDiposit
      displayTotalBalance.innerText = totalAfterDiposit
    }
    
    function makeWithdraw(){
      const getCurrentWthdraw = getInputValues('withdraw-in')
      const displayTotalBalance = document.getElementById('balance-dis')
      const previousTotalBalance = parseFloat(displayTotalBalance.innerText)
      const displayWithdraw = document.getElementById('withdraw-dis')
      const previousBalance = parseFloat(displayWithdraw.innerText)
      
        if(previousTotalBalance > getCurrentWthdraw){
          const totalWithdraw = previousBalance + getCurrentWthdraw
        displayWithdraw.innerText = totalWithdraw
          const balanceAfterWthdraw = previousTotalBalance - getCurrentWthdraw
          displayTotalBalance.innerText = balanceAfterWthdraw
        }
        else{
          alert('Insuficiant Balance')
          // return 0
        }
    }
    
    