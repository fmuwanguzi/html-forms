const init = function (){
    document.getElementById('button-cancel').addEventListener('click', reset);
    document.getElementById('button-send').addEventListener('click', send);
};

const reset = function(ev) {
    //with HTML it will automatically put the form back to the initial statement
    ev.preventDefault();
    //we can reset programmatically
    document.getElementById('form-user').reset();
    //if you wanted to add more logic to the reset function you can add it here
};

const validate = function (){
    let valid = false;
    let failures = [];

    const first = document.getElementById('input first');
    const password = document.getElementById('input-password');
    const email = document.getElementById('input-email');
    const select = document.getElementById('input-age'); //.selected index, .options, .length 
    const chk = document.getElementById('input-alive'); // .checked, .value

    // logic for first (element)
    if(first.value === ''){
        failures.push({Input:'input-first', msg: 'Required field'})
    }
    //logic for the email element 
    if(email.value === '' || !email.value.includes('@')) {
        failures.push({Input:'input-email', msg: 'Required field'})
    }
    //logic for the password element
    if(password.value === ''|| password.value.length < 8){
        failures.push({Input:'input-password', msg: 'Must be at least 8 characters'})   
    }
    // logic for select element
    if(select.selectedIndex === 0) {
        failures.push({input: 'input-age', msg: 'Too young...'});
    }
    // logic for chk element
    if (!chk.checked){
        failures.push({input: 'input-alive', msg: 'Must be alive to submit form'});

    }
    return failures;
    

};

const send = function(ev){
    ev.preventDefault();
    ev.stopPropagation(); //bubbling up to any parent  element regarding the click 

    let fails = validate();

    if(fails.length === 0){
        //good to go 
        document.getElementById('form-user').submit();
    }else{
        //we a bad user
        fails.forEach(obj => {
            const field = document.getElementById(obj.input);
            field.parentElement.classList.add('error');
            field.parentElement.setAttribute('data-errormsg', obj.msg);

    })
};

document.addEventListener('DOMContentLoaded', init);
}

// function init() {};
