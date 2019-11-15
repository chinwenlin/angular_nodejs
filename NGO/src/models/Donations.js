const mongoose=require('mongoose');

const donationsSchema=new mongoose.Schema({
        FirstName:String,
        LastName: String,
        Email: String,
        Phone: String,
        Address:String,
        City:String,
        State:String,
        Zipcode: String,
        Country: String,
        Dtype: String,
        Amount:String
});

module.exports=mongoose.model('Donationlist',donationsSchema);