const User=require('./user');

let auth =(req,res,next)=>{
    let token =req.localStorage.getItem('Token');
    User.findByToken(token,(err,user)=>{
        if(err) throw err;
        if(!user) return res.json({
            error :true
        });

        req.token= token;
        req.User=user;
        next();

    })
}

module.exports={auth};
