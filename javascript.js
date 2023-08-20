const item = document.querySelector('.modal-body');
const items = [];

function Add(name, image, price,quantity) {
    items.push({ name, image, price, quantity });
}

function Remove(index) {
    items.splice(index, 1);
    Display();
}

function Display() {
    const itemsContainer = document.createElement('div');
    itemsContainer.classList.add('modal-body');
    if(items.length != 0){
        itemsContainer.innerHTML = items.map((item, index) => {
            return `
                <div class="d-flex align-items-center justify-content-between mb-2">
                    <img src="${item.image}" alt="${item.name}">
                    <p>${item.name}</p>
                    <p>Price: ${item.price}</p>
                    <input type="number" value="${item.quantity}" class="mx-2">
                    <button class="btn btn-danger" onclick="Remove(${index})"><i class="fa fa-trash"></i></button>
                </div>
            `;
        }).join('');         
    }else{
        itemsContainer.innerHTML = `<p style="text-align: center;">Cart Is Empty.</p>`;
    }
    item.innerHTML = '';
    item.appendChild(itemsContainer);
}

function Login() {
    const Username = document.getElementById("Username").value;
    const Password = document.getElementById("Password").value;
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const username = urlParams.get('username');
    const password = urlParams.get('password');
    if (Username==username && Password==password) {
        window.location.href = "index.html";
        return false;
    }
    document.getElementById("log-status").innerHTML = "Incorrect username or password";
    return false;
}

function SignUp() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const password2 = document.getElementById("password2").value;  
    if (password == password2) {
        window.location.href = "login.html?username="+username+"&password="+password;
    }else{
        document.getElementById('sign-status').innerHTML = "Password do not match!";
    }
    return false;
}