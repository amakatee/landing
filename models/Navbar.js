import mongoose from 'mongoose';


const navbarSchema = new mongoose.Schema({
    logo: {
        type: String,
        required: true,

    },
    list: [String],
    btnText:{
        type: String
    }
})

const Navbar = mongoose.models.Navbar || mongoose.model('Navbar', navbarSchema)


export default Navbar