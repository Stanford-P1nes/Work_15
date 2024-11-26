const formBox = document.querySelector('.form-box');
const signInBtn = document.querySelector('.signin-btn');
const signUpBtn = document.querySelector('.signup-btn');
const wrapperSignIn = document.querySelector('.wrapper_sign-in');
const wrapperSignUp = document.querySelector('.wrapper_sign-up');

signUpBtn.addEventListener('click', () => {
    formBox.classList.add('active');
    wrapperSignUp.classList.add('active');
    wrapperSignIn.classList.add('active');
})

signInBtn.addEventListener('click', () => {
    formBox.classList.remove('active');
    wrapperSignUp.classList.remove('active');
    wrapperSignIn.classList.remove('active');
})