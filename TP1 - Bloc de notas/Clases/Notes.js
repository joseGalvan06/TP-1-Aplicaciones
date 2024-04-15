var idNotes = 0;
class Note {
    /**
     * @param {string} title 
     * @param {string} content 
     * @param {number} idUser 
     * @param {string} category 
     */
    constructor(title, content, idUser, category) {
        this.id = idNotes;
        this.title = title;
        this.content = content;
        this.users = [idUser];
        this.category = category;
        this.history = [];
        idNotes++;
    }
}

const notes = [
    new Note("a", "d", 0, "e", "df"),
    new Note("Ferro", "Aguante ferro", 1, "Fulbo"),
    new Note("Boca", "Aguante boca", 2, "Fulbo"),
];