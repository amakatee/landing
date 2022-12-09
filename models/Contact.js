import mongoose from 'mongoose';



  const contactSchema = new mongoose.Schema({
      headerText: {
          type: String,
          required: true,
  
      },
      formData: [{
          firstInput: String,
          secondInput: String,
          thirdInput: String,
          credentialsInput: String,
          btnText: String
      }]
     
  })
  
const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema)  

export default Contact