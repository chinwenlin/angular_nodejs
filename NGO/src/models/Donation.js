const mongoose=require('mongoose');

const donationSchema=new mongoose.Schema({
    Type:String
});

module.exports=mongoose.model('Donation',donationSchema);