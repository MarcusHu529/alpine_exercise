function nameGenerator(){
    return {
        currentName: 'NULL',
        names:[
            'Alice', 'Bob', 'Charlie', 'Diana', 'Ethan', 
            'Fiona', 'George', 'Hannah', 'Ian', 'Julia'
        ],
        generateName(){
            const randomIndex = Math.floor(Math.random() * this.names.length);
            this.currentName = this.names[randomIndex];
        }
    }
}