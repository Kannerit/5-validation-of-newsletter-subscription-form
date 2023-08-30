console.log('the script is running!');

let newsletterForm = document.getElementById('newsletter-form');
let allAgreeBox = document.getElementById('agree-all');

const validate = (event) => {

    let txtfname = document.getElementById('fname');
    let txtlname = document.getElementById('lname');
    let txtemail = document.getElementById('email');
    let agree1 = document.getElementById('agree-1');
    let agree2 = document.getElementById('agree-2');
    let errors = document.getElementById('errors');

    errors.innerHTML = '';

    if (txtfname.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Type Your First Name!'
        errors.appendChild(liError)
    }


    if (txtlname.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Type Your Last Name!'
        errors.appendChild(liError)
    }


    if (txtemail.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Type Your Email!'
        errors.appendChild(liError)
    }


    if (!txtemail.value.includes('@')) {
        let liError = document.createElement('li');
        liError.innerText = 'Must be valid @ Email!'
        errors.appendChild(liError)
    }

    if (!agree1.checked) {
        let liError = document.createElement('li');
        liError.innerText = 'You did not agree 1'
        errors.appendChild(liError)
    }

    console.log(errors.children.length );

    if (errors.children.length > 0) {
        event.preventDefault();
    }
   

}

const allAgree = (event) => {
    let agree1 = document.getElementById('agree-1');
    let agree2 = document.getElementById('agree-2');

    agree1.checked = event.target.checked;
    agree2.checked = event.target.checked;

    agree1.disabled = event.target.checked;
    agree2.disabled = event.target.checked;

}

newsletterForm.addEventListener('submit', validate);
allAgreeBox.addEventListener('change', allAgree);
