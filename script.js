
const form = document.querySelector('form');
const confirmPassword = document.querySelector('#confirm-password');



form.addEventListener("submit",e =>{
    const password = document.querySelector('#password')
    const confirmPassword = document.querySelector('#confirm-password');
    if(password.value != confirmPassword.value) {
        e.preventDefault();
        password.classList.add('error');
        confirmPassword.classList.add('error');
    }
    else{
        password.classList.remove('error');
        confirmPassword.classList.remove('error');
        password.classList.add('valid');
        confirmPassword.classList.add('valid');
    }
});