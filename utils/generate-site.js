const fs = require('fs');


const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there is an error, reject the PRomise and send the error to the Promises .catch method
            if (err) {
                reject (err);
                // return out of the function here to make sure the promise doesnt accidentally execute the ressolve function as well 
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the .then method
            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
              reject (err);
              return;
            }
            resolve({
                ok: true,
                message: 'Style sheet copied successfully!'
          });
    });
    });
};


module.exports = { writeFile, copyFile };