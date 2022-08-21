document.getElementById('btn-field').addEventListener('click', function(){
    const inputFields = document.getElementById('input-field');
    const inputFieldsElementString = inputFields.value;
    const inputField = parseFloat(inputFieldsElementString) ;


    inputFields.value = '';

    const inputText = document.getElementById('input-text')
    const innerTextElement = inputText.value;
    inputText.value = '';

    
    const discountAmount = document.getElementById('discound');
    const discountAmountString = discountAmount.innerText;
    const discound = parseFloat(discountAmountString);



    if( innerTextElement == 'dom'){
        const discoundbalance = (inputField * 30)/ 100 ;
        discountAmount.innerText = discoundbalance;
    }

    else {
        document.getElementById('discound').innerHTML = 'Sorry Your code validition will expeier'

    }
    

    // const discoundbalance = (inputField * 30)/ 100 ;
    // // console.log(discoundbalance);
    // discountAmount.innerText = discoundbalance;

});

