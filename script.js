function generatePassword(){
    const length = document.getElementById("length").value;

    const uppercase = document.getElementById("uppercase").checked;
    const lowercase = document.getElementById("lowercase").checked;
    const numbers = document.getElementById("numbers").checked;
    const symbols = document.getElementById("symbols").checked;

    let chars = "";

    if (uppercase){
        chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (lowercase){
        chars += "abcdefghijklmnopqrstuvwxyz";
    }

    if (numbers){
        chars += "0123456789";
    }

    if (symbols){
        chars += "!@#$%&*()";
    }

    if (chars === ""){
        alert("Selecione pelo menos uma das opções!");
        return;
    }

    let password = "";

    for (let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    document.getElementById("result").textContent = password;
}