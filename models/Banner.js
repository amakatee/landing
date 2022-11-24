import mongoose from 'mongoose';



const bannerSchema = new mongoose.Schema({
    img: {
        type: String,
        

    },
    firstText: {
        type:String
    },
    secondText: {
        type:String
    },
    btnText: {
        type:String
    }


})

const Banner = mongoose.models.Banner || mongoose.model('Banner', bannerSchema)


export default Banner