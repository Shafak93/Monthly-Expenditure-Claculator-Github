function getInputValue(inputid){
    const inputField = document.getElementById(inputid);
    const inputAmount = parseFloat(inputField.value);
    return inputAmount;
    
}

function inputValidation(functionParameter, idParameter){
    if(!isNaN(functionParameter) && functionParameter > 0){
        document.getElementById(idParameter).style.display = 'none';
        //expense alert
        document.getElementById('expense-alert').style.display = 'none';
        document.getElementById('total-expenses').style.display = 'block';
        document.getElementById('rest-balance').style.display = 'block'
    }else{
        document.getElementById(idParameter).style.display = 'block'
        document.getElementById('rest-balance').style.display = 'none'
    }
}

//Calculate button
document.getElementById('calculate-btn').addEventListener('click', function(){
    //Get Income Amount and income validation
    const incomeInputAmount = getInputValue('income-input');
    inputValidation(incomeInputAmount,'income-fail');
    
    //Get Food Amount and food validation
    const foodInputAmount = getInputValue('food-input');
    inputValidation(foodInputAmount,'food-fail');
    
    //Get Rent amount and rent validation
    const rentInputAmount = getInputValue('rent-input');
    inputValidation(rentInputAmount,'rent-fail');
    
    //Get Cloth Amount and cloth validation
    const clothInputAmount = getInputValue('cloth-input');
    inputValidation(clothInputAmount,'cloth-fail');
    
    //Get Total Expenses
    const totalExpenses = document.getElementById('total-expenses');
    const totalExpensesNumber = foodInputAmount + rentInputAmount + clothInputAmount;
    //Expenses error validation
    if(incomeInputAmount> totalExpensesNumber){
        totalExpenses.innerText = totalExpensesNumber;
    }else{
        document.getElementById('expense-alert').style.display = 'block';
        document.getElementById('total-expenses').style.display = 'none';
        document.getElementById('rest-balance').style.display = 'none';
    }
    const totalExpensesAmount = totalExpenses.innerText;
    //Rest Balance
    const restBalance = document.getElementById('rest-balance');
    restBalance.innerText = incomeInputAmount - totalExpensesAmount
})

//Save Button
document.getElementById('save-btn').addEventListener('click', function(){
    //Income amount
    const incomeInputAmount = getInputValue('income-input');
    //Food Amount
    const foodInputAmount = getInputValue('food-input');
    //Rent amount
    const rentInputAmount = getInputValue('rent-input');
    //Cloth Amount
    const clothInputAmount = getInputValue('cloth-input');
    //total expense
    const totalExpenses = foodInputAmount + rentInputAmount + clothInputAmount;
    //Rest balance
    const restBalance = incomeInputAmount - totalExpenses
    //Get Save Input Value
    const saveInput = document.getElementById('save-input');
    const saveInputValue = parseFloat(saveInput.value);
    //Get Save Input Amount and error validation
    const savingAmount = document.getElementById('saving-amount');
    const savingAmountNumber = (saveInputValue / 100) * incomeInputAmount
    if(restBalance > savingAmountNumber){
        savingAmount.innerText = savingAmountNumber
        document.getElementById('saving-amount').style.display = 'block';
        document.getElementById('save-alert').style.display = 'none';
    }else{
        document.getElementById('save-alert').style.display = 'block';
        document.getElementById('saving-amount').style.display = 'none';
    }

    const savingAmountValue = savingAmount.innerText
    //Remaining Balance
    const remainingBalance = document.getElementById('balance-remaining');
    remainingBalance.innerText =  restBalance - savingAmountValue

})