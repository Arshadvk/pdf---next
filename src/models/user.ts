import mongoose ,  { Document, Model, Schema } from "mongoose";

export type MongoDBUser = Model<Document<any,any,any>>

const userSchema = new Schema({
    name : {
        type:String
    },
    email:{
        type :String
    },
    date_of_birth : {
        type : String
    },
    emirates : {
        type : String
    },
    blood : {
        type : String
    },
    password:{
        type : String
    },
    tel:{
        type : String
    },
    whatsapp:{
        type : String
    },
    role :{
        type : Number,
        required: true
    },
    qualificstion :{
        type :String
    },
    profession : {
        type : String
    },
    zone : {
        type : String
    },
    address: {
        type : {
            house_name :{
                type : String
            }, 
            district : {
                type : String
            },
            panjayath : {
                type : String 
            },
            pincode : {
                type : Number
            }
        }
    },
    verifyed : {
        type : Boolean,
        default : false
    },
    legislative_assembly :{
        type : String
    },
    before_in_pdp : {
        type : Boolean,
    }
},{
    timestamps : {createdAt:true}
})

export const userModel : MongoDBUser = mongoose.connection.model<Document<any,any,any>>('user', userSchema)