/**
 * This is the entrypoint for the CLI script
 */

const processOptions = require('./utils/processOptions').processOptions;

const main = async function(){
    await processOptions();
}