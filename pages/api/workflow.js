import Workflow from "../../models/Workflow";
import connectMongo from "../../config/dbConnect";


export default async  function handler(req, res) {
    const method = req.method
    connectMongo()

    switch(method) {
        case "GET": {
            try{
                const workFlowData = await Workflow.find()
                if(!workFlowData?.length)  return res.status(400).json({"mes": "no data found"})
                return res.json(workFlowData)
            

            }catch(err) {
                console.log(err)
    
            }
          }
          break

          case "POST": {
              try {
                  const {headerText, boxes} = req.body
                  const newWorkflow = await Workflow.create({headerText,boxes})

                  return res.status(200).json({"mes": `created ${newWorkflow.headerText}`})

              }catch(err) {
                  console.log(err)
              }
              break

              
          }
          case "PATCH":
                try {
                    const {headerText, boxes} = req.body
                    // if(!id) return res.status(400).json({"mes": "id required"})
                    const currentWorkflowrData = await Workflow.findOne()

                    if(!currentWorkflowrData) return res.status(400).json({"mes": "No data found"})
                    currentWorkflowrData.headerText = headerText
                    currentWorkflowrData.boxes = boxes
                   
                    const updatedWorkflowData = currentWorkflowrData.save()
                    return res.json({"mes": `Workflow updated ${updatedWorkflowData.headerText}`})
 
                }catch(err){
                    console.log(err)
                    return res.status(400).json({"mes": "no data"})
                }
                break

    }
}
