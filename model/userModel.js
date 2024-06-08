const fs = require('fs');
const path = require('path');

exports.getUser = (uname) => {

    const bufferData = fs.readFileSync(path.join(__dirname,'..','data','user.json'))
    const userJson = JSON.parse(bufferData);

    const filteredUser = userJson.filter((user) => {
        return user.uname == uname;
    })

    if(filteredUser.length > 0){
        return filteredUser[0];
    }
    return null;

}