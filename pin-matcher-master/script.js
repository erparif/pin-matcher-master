
document.getElementById('generate-pin').addEventListener('click', ()=>{
    let pin = Math.round(Math.random() * (9999 - 1000) + 1000);
    document.getElementById('show-generate-pin').value = pin;
    document.getElementById('matched', 'un-match').style.display = 'none';
    // document.getElementById('un-match').style.display = 'none';
});

document.getElementById('calculator').addEventListener('click', (event)=>{
    const number = event.target.innerText;
    let typedNumberField = document.getElementById('match-pin');
    const previousTypedNumber = typedNumberField.value;

    if (isNaN(number)) {
        if(number === 'C'){
            typedNumberField.value = '';
        }
        else if(number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    } 
    else {
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }

});

document.getElementById('submit-btn').addEventListener('click', ()=>{
    if (document.getElementById('show-generate-pin').value === document.getElementById('match-pin').value) {
        // document.getElementById('matched').style.display = 'block';
        // document.getElementById('un-match').style.display = 'none';
        display(true);
    }
    else{
        // document.getElementById('un-match').style.display = 'block';
        // document.getElementById('matched').style.display = 'none';
        display(false);
    }
});

function display(style){
    if(style === true){
        document.getElementById('matched').style.display = 'block';
        document.getElementById('un-match').style.display = 'none';
    }
    else if( style === false){
        document.getElementById('matched').style.display = 'none';
        document.getElementById('un-match').style.display = 'block';
    }
}