var id_modification = 0
class Modification {
    /**
     * 
     * @param {string} date 
     * @param {number} idUser 
     * @param {string} category2 
     * @param {string} history 
     * @param {string} lastModification 
     * @param {string} title2 
     * @param {string} lastCategory 
     */
    constructor(date, idUser, categoryBeforeMod, contenidoLastMod, title) {
        this.id = id_modification;
        this.idUser = idUser;
        this.title = title;
        this.date = date;
        this.contenidoLastMod = contenidoLastMod;
        this.categoryBeforeMod= categoryBeforeMod;
        id_modification++;
    }
}