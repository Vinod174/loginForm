const container = document.querySelector('.container');
const userNameInput = document.querySelector(".username");
const userNameError = document.querySelector(".username__error");
const passwordInput = document.querySelector(".password");
const passwordError = document.querySelector(".password__error");
const button = document.querySelector(".button");
const chButton = document.querySelector('.btn')

const welcome = document.querySelector('.welcome');
const welcomeName = document.querySelector('.welcome__input');
const reset = document.querySelector(".reset")


const resetErrorMessages = () => {
    userNameError.textContent= "";
    passwordError.textContent= "";
}


const resetWelcomeMessage = () => {
    welcomeName.textContent = "";
}

const resetInputs = () => {
    userNameInput.value = "";
    passwordInput.value = "";
}

const areInputsValid = (userName, password) => {
    let isValidInputs = true;

    let fixPassword = 'iamthebest'

    if (userName.length === 0) {
        userNameError.textContent = "Enter the username";
        isValidInputs = false;
    }

    if(passwordInput.value !== fixPassword){
        passwordError.textContent = "invalid password"
        isValidInputs = false
    }
    
    return isValidInputs;
}



button.addEventListener("click", () => {
    resetWelcomeMessage();
    resetErrorMessages();

    const userName = userNameInput.value;
    const password = passwordInput.value;
    const isValid = areInputsValid(userName, password);

    if(isValid) {
        container.style.display = "none";
        welcome.style.display = "block";
        welcomeName.textContent = `Welcome, ${userName}`;
        resetInputs();
    }
});


reset.addEventListener('click' , () => {
    container.style.display = "block";
    welcome.style.display = "none";
})
