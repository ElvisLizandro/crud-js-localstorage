document.addEventListener("DOMContentLoaded", laodUsers);

function laodUsers(){
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userList = document.getElementById("userList");
    userList.innerHTML = "";
    users.forEach((user, index) => {
        userList.innerHTML += `<li>
        ${user.name} - ${user.email}
        <button onclick="editUser(${index})">Editar</button>
        <button onclick="deleteUser(${index})">Eliminar</button>
        </li>`;
    });
}

function addUser() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    if (!name || !email) return alert("Completa los campos");

    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({name, email});
    localStorage.setItem("users" , JSON.stringify(users));
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    laodUsers();
}

function deleteUser(index) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
    laodUsers();
}

function editUser(index){
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const newName = prompt("Nuevo nombre", users[index].name);
    const newEmail = prompt("Nuevo correo", users[index].email);
    if(newName && newEmail) {
        users[index] = {name: newName, email: newEmail};
        localStorage.setItem("users", JSON.stringify(users));
        laodUsers();
    }
    
}


