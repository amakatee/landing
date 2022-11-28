import Pricing from "../../models/Pricng";
import connectMongo from "../../config/dbConnect";


export default async  function handler(req, res) {
    const method = req.method
    connectMongo() 
    
    let result
    switch(method) {
        case"GET":
        try {
            result = await Pricing.find()
            if(!result?.length) return res.status(400).json({"mes": "no data found"})

            res.json(result)

        }catch(err) {
            console.log(err)
            return res.status(400).json({"mes": "no data discovered"})
        }
        break
        case "POST":
            try {
                const {headerText, boxes} = req.body
                result = await Pricing.create({headerText, boxes})

                if(result) {
                    return res.status(200).json({"mes": "product created"})
                }


            }catch(err){
                console.log(err)
            }
            break
            case "PATCH":
                try {
                    const {headerText , boxes} = req.body
                    const currentPricingData= await Pricing.findOne()
                    if(!currentPricingData) return res.status(400).json({"mes": "no pricing data found"})

                    currentPricingData.headerText = headerText
                    currentPricingData.boxes = boxes

                    const updatedPricingData = await currentPricingData.save()
                    return res.status(200).json({"mes": `${updatedPricingData.headerText} updated `})

                } catch(err ) {
                    console.log(err)
                }
                break

                case "DELETE": 
                try{
                    const {id} = req.body
                    const item = await Pricing.findById(id)
                    if(!item) return res.status(400).json({"mes": "no item found"})
                    result = await item.deleteOne() 
                    res.json({"mes": `deleted`})

                }catch(err) {
                    console.log(err)
                }
                break


    }
}