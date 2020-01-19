const prisma = require('./prisma');

function _askForPath(prompt){
    let files = app.dialogs.showOpenDialog(prompt, null, null, {properties: ['openDirectory']});
    if(files && files.length > 0){
        return files[0];
    }
}

function _handlePrismaGeneration(base, path, options){
    path = !path ? _askForPath() : path;

    if(!path){
        return;
    }

    if(!base){
        _getBase(({buttonId, returnValue})=>{
            if( buttonId === 'ok'){
                base = returnValue;

                prisma.generate(base,path,options);
            }
        });
    }else{
        prisma.generate(base,path,options);
    }
}

function init(){
    app.commands.register("prisma:generate",_handlePrismaGeneration);
}

module.exports = init;