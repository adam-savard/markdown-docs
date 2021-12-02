/**
 * Used for changing default options; the default options are set in a .env file
 */

const fs = require('fs');
const appRoot = require('app-root-path');
const prompt = require('prompt-sync')({
    history: require('prompt-sync-history')() //open history file
});

const CONFIG_FILE = `${appRoot}/config/config.json`;

/**
 * Sets the working directory for markdown files
 * @param {string|null} directory null to be prompted to provide a directory; pass in a string for use in the API
 */
const setWorkingDirectory = async function(directory = null){
    const currentConfig = JSON.parse(await fs.readFile(CONFIG_FILE));


    if(!directory){
        directory = prompt("What path should I use for markdown files? ");
        prompt.history.save();
    }

    const newConfig = {...currentConfig};
    newConfig.workingDirectory = directory;

    await fs.writeFile(CONFIG_FILE, JSON.stringify(newConfig));

    console.log(`Working directory changed to ${directory}`);
}



module.exports = {
    setWorkingDirectory
}