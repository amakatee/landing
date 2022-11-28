import mongoose from 'mongoose';



const pricingSchema = new mongoose.Schema({
    headerText: {
        type: String,
    },
    boxes: [{
        firstText:String,
        secondText:String,
        thirdText:String,
        fourthText: String
    } ],
   
})

const Pricing = mongoose.models.Pricing || mongoose.model('Pricing', pricingSchema)


export default Pricing
