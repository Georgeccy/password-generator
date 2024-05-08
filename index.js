const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password_1_El = document.getElementById("password-1");
let password_2_El = document.getElementById("password-2");

function ranNum(arr) {
    return Math.floor(Math.random() * arr.length)
}

function generatePass(arr) {
    let hasNumber = document.getElementById("number").checked
    let hasSymbol = document.getElementById("symbol").checked
    if(!hasNumber){
        arr = arr.filter(item => !/\d/.test(item));
    }
    if(!hasSymbol){
        arr = arr.filter(item => /^[a-zA-Z0-9]/.test(item));
    }
    let length = document.getElementById("password_length").value;
    let pass = "";
    for(let i = 0; i < length; i++){
        pass += arr[ranNum(arr)];
    }
    return pass
}


function render(){
    password_1_El.textContent = generatePass(characters);
    password_2_El.textContent = generatePass(characters);
}


function copyToClipboard(id) {
        // 获取目标元素的文本内容
        const textToCopy = document.getElementById(id).textContent;
        // 使用navigator.clipboard API复制文本
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert('Text copied to clipboard');
        }, (err) => {
            console.error('Failed to copy text: ', err);
        });
    }