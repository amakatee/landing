import Contact from '../../models/Contact'
import connectMongo from "../../config/dbConnect";


export default async  function handler(req, res) {
    const method = req.method
    connectMongo()
    
    let result
    switch(method){
        case "GET":
            try{
                result = await Contact.find()
                if(!result?.length)  return res.status(400).json({"mes": "no data found"})

                res.json(result)


            } catch(err){
                console.log(err)
            }
            break
            case "POST":
                try {
                    const { headerText, formData } = req.body 
                    result = await Contact.create({headerText, formData})
                    if(result) {
                        return res.status(200).json({"mes":`created ${result.headerText}`})

                    }
                }catch(err) {
                    console.log(err)

                }
                break
                case "PATCH":
                    try {
                        const {headerText, formData} = req.body
                        const currentContactData = await Contact.findOne()
                        if(!currentContactData) {
                            return res.status(400).json({"mes": "no data discoverd"})

                        }

                        currentContactData.headerText = headerText
                        currentContactData.formData = formData

                        const updatedContactData = await currentContactData.save()
                        return res.status(200).json({"mes": `${updatedContactData.headerText} updated`})


                    }catch(err) {
                        console.log(err)

                    }
                    break
                    case "DELETE" : 
                    try {
                        const {id} = req.body
                        const item  = await Contact.findById(id)
                        result = await item.deleteOne()
                        res.status(200).json({"mes": "deleted"})


                    }catch(err) {
                        console.log(err)
                    }
    }
}