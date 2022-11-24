import mongoose from 'mongoose';



const featuresSchema = new mongoose.Schema({
    headerText: {
        type: String,
        required: true,

    },
    boxes: [{
        img: String,
        headerText: String,
        text: String
    }],
   
})

const Features = mongoose.models.Features || mongoose.model('Features', featuresSchema)


export default Features