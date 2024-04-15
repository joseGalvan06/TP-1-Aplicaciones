function checkUserLogin() {
    let respuesta = checkUser(getUser(), getPassword())
    console.log(respuesta)
    if (respuesta == -1){
        alert("no va la contraseña");
    } else if (respuesta == 0){
        return "ni el usuario ni la cotraseña va";
    } else {
        return changeScreen();
    }
}


function checkUser(username,password) {
    console.log("aña")
    var check = false
    var i = 0
    while (check == false) {
        if (users[i].username == username) {
            check = true;
        }
        else {
            i++;
            if (i > users.length-1) {
                return -1
            }
        }
    }
    if (users[i].password == password) {
        return users[i].idUser
    }
    else {
        return 0
    }
}
