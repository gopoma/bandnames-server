const Band = require("./band");

class BandList {
    constructor() {
        this.bands = [
            new Band('Metallica'),
            new Band('Héroes del Silencio'),
            new Band('Bon Jovi'),
            new Band('Breaking Benjamin'),
        ];
    }

    getBands() {
        return this.bands;
    }

    addBand(name) {
        const newBand = new Band(name);
        this.bands.push(newBand);

        return this.getBands();
    }

    increaseVotes(id) {
        this.bands = this.bands.map(band => {
            if(band.id === id) {
                band.votes += 1;
            }

            return band;
        })
    }

    removeBand(id) {
        this.bands = this.bands.filter(band => band.id !== id);
    }

    changeName(id, newName) {
        this.bands = this.bands.map(band => {
            if(band.id === id)  {
                band.name = newName;
            }

            return band;
        });
    }
}

module.exports = BandList;
