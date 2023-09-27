const jwt = require('jsonwebtoken')

const checkauth = async (req,res,next)=>{
     console.log('hello middleware')

    // token get
   //  const {token}= req.cookies
    // console.log(token)
    // if(!token){
    //     req.flash('error','Unauthorized User Do Not Access')
    //     res.redirect('/')
    //  }
    // else{
    //     const verifytoken = jwt.verify(token,'iamshivampninfosywebdeveloper')
    //    // console.log(verifytoken)
    //    const admin = await AdminModel.findOne({_id:verifytoken.id})
    //    //console.log(admin)
    //    req.admin = admin
    //    next()
    //  }

}
module.exports= checkauth