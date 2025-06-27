function handleclick() {
    addresult("Just Clicked This button");
}

function handlemousein() {
    addresult("Just Mouse Entered Hover Button");
}

function handlemouseout() {
    addresult("Mouse exited from Hover");
}

function handleinput(event) {
    addresult(`Typing: ${event.target.value}`);
}

function handlesubmit(event){
    
    event.preventDefault(); // Prevent form refresh
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        addresult(`Form Submitted! Username: ${username}, Password: ${'*'.repeat(password.length)}`);
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    } else {
        addresult("Please Fill The Username & Password");
    }
}

function addresult(message) {
    const resultbox = document.getElementById('result');
    const timestamp = new Date().toLocaleTimeString();
    resultbox.innerHTML += `<div>[${timestamp}] ${message}</div>`;
    resultbox.scrollTop = resultbox.scrollHeight;
}
