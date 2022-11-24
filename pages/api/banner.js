import Banner from "../../models/Banner";
import connectMongo from "../../config/dbConnect";


export default async  function handler(req, res) {
    const method = req.method
    connectMongo()
     
 
    switch(method) {
        case "GET":
           try {
            const bannerData = await Banner.find().lean()
            if(!bannerData?.length) {
                return res.status(400).json({'mes': 'no data'})
            }
            res.json(bannerData)
           }catch(err) {
               console.log(err)
              
           }
           break

        case "POST":
            try {
                const {img, firstText,secondText, btnText} = req.body
                if(!firstText || !secondText) return
               
                const newBanner = await Banner.create({img, firstText,secondText, btnText})

                res.json({'mes': `created banner data ${newBanner.firstText}` })

            }  catch(err) {
                console.log(err)
            }  
            break

        case "PATCH":
                try {
                    const {id, img, firstText,secondText, btnText} = req.body
                    // if(!id) {
                    //     return res.status(400).json({message: "product id required" })
                    // }
                    const currentBannerData = await Banner.findOne()
                    console.log(currentBannerData)

                    if(!currentBannerData) {
                        return res.status(400).json({message:"No product found"})
                    }
                    currentBannerData.img = img
                    currentBannerData.firstText = firstText
                    currentBannerData.secondText = secondText
                    currentBannerData.btnText = btnText

                    const updatedBanner = await currentBannerData.save()
                    res.json({"mes": `Banner updated ${updatedBanner.firstText}`})

                } catch(err) {
                    console.log(err)
                }
                break

            
            
    }
}