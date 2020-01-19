class PrismaModel {
    constructor(){
        /**@member {Array.<Object>} model fields */
        this.fields = [];
    }
    
    /**
     * 
     * @param {String} name 
     */
    setName(name=""){
        if(!name) return;
        this.name = name;
    }

    /**
     * 
     * @param {String} name 
     * @param {String} type 
     * @param {Object} options 
     */
    addField(name, type, options){
        if(!name || !type) return 
        this.fields.push({name, type, multiplicity: options.multiplicity, tags:[...options.tags]});
    }

    generateSchema(){

    }

}

module.exports = PrismaModel;