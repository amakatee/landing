import mongoose from 'mongoose';



const workflowSchema = new mongoose.Schema({
    headerText: {
        type: String,
        required: true,

    },
    boxes: [{
        img: String,
        text: String
    }],
   
})

const Workflow = mongoose.models.Workflow || mongoose.model('Workflow', workflowSchema)


export default Workflow