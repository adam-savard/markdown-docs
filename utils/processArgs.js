/**
 * File used to process arguments from the command line
 */

/**
 * Processes arguments. If there are no matching strings, then the default case is run
 */
const processArguments = async function (args) {
    let defaultCase = true;

    const validArguments = [
        "f",
        "file",
        "d",
        "directory",
        "o",
        "output"
    ];

    args.forEach((argument, index) => {
        if (validArguments.includes(argument)) {
            defaultCase = false;

            //check what argument it is
            switch (argument) {
                case "f":
                case "file":
                    console.warn('TODO read from file');
                    break;
                case "d":
                case "directory":
                    console.warn('TODO process directory');
                    break;
                case "o":
                case "output":
                    console.warn('TODO output to folder');
                    break;
            }
        }
    });

    //process specified file
    if(defaultCase){
        
    }
}