import Features from "../../models/Features";
import connectMongo from "../../config/dbConnect";


export default async  function handler(req, res) {
    const method = req.method
    connectMongo()
    
    let result
    switch(method) {
        case "GET": 
        try {
            result = await Features.find()
            if(!result?.length) return res.status(400).json({"mes": "no data found"})
            res.json(result)


        }catch(err) {
            console.log(err)

        }
        break
        case "POST": 
        try {
            const {headerText, boxes} = req.body
            result = await Features.create({headerText, boxes})
            if(result) {
                return res.status(200).json({"mes": `feture created ${headerText}`})
            }

        }catch(err) {
            console.log(err)
        }
        break
        case "PATCH": 
        try {
            const {headerText, boxes} = req.body

            const currentFeaturesData = await Features.findOne()
            if(!currentFeaturesData) return res.status(400).json({"mes": "no data found"})

            currentFeaturesData.headerText = headerText
            currentFeaturesData.boxes = boxes

            const updatedFeaturesData = currentFeaturesData.save()
            return res.status(200).json({"mes": `Features updated ${updatedFeaturesData.headerText}`})
        }catch(err) {
            console.log(err)
        }
        break
    }
}