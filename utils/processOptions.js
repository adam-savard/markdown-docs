/**
 * This file is used for processing the config options and seeing if there are any that need to be set on first run
 * 
 * The only mandatory one is the workingDirectory location
 */

const fs = require('fs');
const appRoot = require('app-root-path');
const options = require('../commands/options');

const CONFIG_FILE = `${appRoot}/config/config.json`;

const processOptions = async function(){

    try{
        const currentOptions = JSON.parse(await fs.readFile(CONFIG_FILE));

        if(!currentOptions.workingDirectory){
            await options.setWorkingDirectory();
        }
    }
    catch(e){
        console.log(e);
        console.log("Error reading the config file. Is it corrupted?");
    }

}

module.exports = {
    processOptions
}