import Navbar from "../../models/Navbar";
import connectMongo from "../../config/dbConnect";


export default async  function handler(req, res) {
    const method = req.method
    connectMongo()



    let result 
    switch(method){
        case 'GET':
            try{
                result = await Navbar.find()
                if(!result?.length) return res.status(400).json({"mes": "No data"})
            

               res.json(result)
            } catch(err) {
                console.log(err)
                 return res.status(400).json({"mes": "no info"})
            }
            break
        case "POST":
  
            try{
                const {logo, list} = req.body
                result = await Navbar.create({logo, list})
                if(!logo && !list) return res.status(400).res.json({"mes": "not enough data"})
              
                if(result){
                    return res.status(201).json({'mes':`navbar ${result.logo} created`})
 
                 } else {
                     res.status(400).json({'mes':' Invalid Data'})
                 }

            } catch(err) {
                console.log(err)
            }
            break

            case "PATCH":
                try {
                    const {id, logo, list, btnText} = req.body
                    // if(!id) return res.status(400).json({"mes": "id required"})
                    const currentNavbarData = await Navbar.findOne()

                    if(!currentNavbarData) return res.status(400).json({"mes": "No data found"})
                    currentNavbarData.logo = logo
                    currentNavbarData.list = list
                    currentNavbarData.btnText = btnText

                    const updatedNavData = currentNavbarData.save()
                    return res.json({"mes": `Navbar daat updates ${updatedNavData.logo}`})
 
                }catch(err){
                    console.log(err)
                }
                break
        
    } 
           
        

        


  }
  