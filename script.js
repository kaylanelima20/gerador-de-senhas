function generatePassword(){
    const length = document.getElementById("length").value;

    const uppercase = document.getElementById("uppercase").Checked;
    const lowercase = document.getElementById("lowercase").Checked;
    const numbers = document.getElementById("numbers").Checked;
    const symbols = document.getElementById("symbols").Checked;

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
}