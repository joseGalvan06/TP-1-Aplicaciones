var idUser =0
class User {
    /**
     * 
     * @param {number} idUser 
     * @param {string} username 
     * @param {string} password 
     */
    constructor(username, password) {
        this.idUser = idUser;
        this.username = username;
        this.password = password;
        idUser++;
    }
}

const users = [
    new User("Jose","Ferro"),
    new User("",""),
    new User("",""),
]