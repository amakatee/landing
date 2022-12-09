import mongoose from 'mongoose';



  const userDataSchema = new mongoose.Schema({
      firstInput: {
        type: String
      },
      secondInput: {
        type:String,
      },
      thirdInput: {
        type: String
      },
      credentialsInput: {
        type: String
      }
      
     
  })
  
const UserData = mongoose.models.UserData || mongoose.model('UserData', userDataSchema)  

export default UserData