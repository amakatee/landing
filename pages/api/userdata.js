import UserData from "../../models/UserData";
import connectMongo from "../../config/dbConnect";


export default async  function handler(req, res) {
    const method = req.method
    connectMongo()
    
    let result
    switch(method){
        case "GET":
            try{
                result = await UserData.find()
                if(!result?.length)  return res.status(400).json({"mes": "no data found"})

                res.json(result)


            } catch(err){
                console.log(err)
            }
            break
            case "POST":
                try {
                     //const {recievedData} = req.body
                   const {firstInput, secondInput, thirdInput, credentialsInput} = req.body
                    // const {firstInput, secondInput, thirdInput, credentialsInput} = req.body 
                    const newUserData = await UserData.create({firstInput, secondInput, thirdInput, credentialsInput})
                    if(newUserData) {
                       
                        return res.status(201).json({message: `data ${firstInput}  created`})
                        
                    } else {
                        return res.status(400).json({message: 'Invalid Data'})
                    }
                  
            

                    
                }catch(err) {
                    console.log(err)

                }
                break
                case "PATCH":
                    try {
                        // const {recievedData} = req.body
                        const {firstInput, secondInput, thirdInput, credentialsInput} = req.body 

                        const newData = {
                            firstInput, secondInput, thirdInput, credentialsInput
                        }

 
                        const currentContactData = await UserData.findOne()
                        if(!currentContactData) {
                            return res.status(400).json({"mes": "no data discoverd"})

                        }
                        
                       
                        console.log(currentContactData)

                       const updatedContactData = await currentContactData.save()
                        return res.status(200).json({"mes": `${updatedContactData.firstInput} updated`})


                    }catch(err) {
                        console.log(err)

                    }
                    break
                    case "DELETE" : 
                    try {
                        result = await UserData.deleteMany()
                                         return res.status(200).json({"mes": "deleted"})

                        // const {id} = req.body
                        // const item  = await UserData.findById(id)
                        // result = await item.deleteOne()
                        // res.status(200).json({"mes": "deleted"})


                    }catch(err) {
                        console.log(err)
                    }
    }
}