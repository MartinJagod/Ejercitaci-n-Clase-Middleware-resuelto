let usersAdmin = [ "Ada", "Greta", "Vim", "Tim"];

function admin (req, res, next){
    let user = req.query.user;
    if(user){
        usersAdmin.forEach(userAdmin=> {

            if(userAdmin == user){
                next();
            }
        });
    }  
         return res.send("No tienes los privilegios para ingresar")
        
            
};

module.exports = admin;
