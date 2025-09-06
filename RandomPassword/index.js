const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

function generatePassword(length) {
    let password = '';
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    
    return password;
}

const generateBtn = document.getElementById('generateBtn');
const passwordLengthSelect = document.getElementById('passwordLength');
const generatedPasswordInput = document.getElementById('generatedPassword');

generateBtn.addEventListener('click', function() {
    const selectedLength = parseInt(passwordLengthSelect.value);
    const newPassword = generatePassword(selectedLength);
    generatedPasswordInput.value = newPassword;
});

window.addEventListener('load', function() {
    const initialLength = parseInt(passwordLengthSelect.value);
    const initialPassword = generatePassword(initialLength);
    generatedPasswordInput.value = initialPassword;
});