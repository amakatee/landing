import Admin from "../../models/Admin";
import connectMongo from "../../config/dbConnect";



export default async function handler(req, res) {
    const method = req.method
    await connectMongo()


    let result 
    switch(method){
        case 'GET':
            try{
                result = await Admin.find()
                if(!result.length) return res.status(400).json({"mes": "no admins yet"})
                
                res.json(result)

            }catch(err) {
                return res.status(400).json({"mes": "no admins yet"})

            }
        
            case "POST": 
            try {
                const {username, password} = req.body
    

           
                result = await Admin.create({username, password})
                if(result){
                   return res.status(201).json({'mes':`user ${result.username} created`})

                } else {
                    res.status(400).json({'mes':' Invalid Data'})
                }

            } catch(err) {
                return res.status(400).json({'mes': 'invalid Product data'})

            }

            case "DELETE": 
            try {
                result = await Admin.deleteMany()
                return res.status(200).json({"mes": "deleted"})

            } catch(err) {
                return res.status(400).json({'mes': 'invalid Admin data'})

            }

         
         
    }
}