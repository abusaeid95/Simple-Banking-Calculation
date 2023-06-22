

function loginCheck (){
    const userNameInputField = document.getElementById('userId')
    const userNameInputValue = userNameInputField.value.toLowerCase()
    console.log(userNameInputValue);
    const passwordInputField = document.getElementById('userPass')
    const passwordInputValue = passwordInputField.value.toLowerCase()
    console.log(passwordInputValue);
    if(userNameInputValue === "moneybank@tk.com" && passwordInputValue === "newpass7212"){
        window.location.assign("bank.html")
    }
    else{
        alert('Please Input Valid User Name & Password')
    }
    userNameInputField.value = ''
    passwordInputField.value = ''
}