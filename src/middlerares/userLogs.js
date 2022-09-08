const fs = require('fs');
const path = require('path');

const logPath = path.resolve(__dirname, './log/userLogs.txt');

function userLog (req, res, next){
    fs.appendFileSync(logPath, "El usuario ingresó a la ruta " + req.url + '\n' );
        next();
}

module.exports = userLog;