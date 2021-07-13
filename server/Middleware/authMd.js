import jwt,{decode} from "jsonwebtoken"

const secret = process.env.API_SECRET_KEY
//workflow of auth middlewar
// like a button => auth middleware verify token , (next) => go to like controller

const auth = async (req,res,next) =>{
    try {
        //recive the token from forntend api call which is injected
        const token = req.headers.authorization.split(" ")[1]
        let decodeData
        //customauth token 
        if(token && token.length < 500){
            decodeData = jwt.verify(token,secret)

            req.userId = decodeData?.id
        }else{ //google oAuth token
            decodeData = jwt.decode(token)

            req.userId = decodeData?.sub //google unique userd id 
        }

        next()
    } catch (error) {
        console.log(error)
    }
}

export default auth