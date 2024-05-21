import mongoose, { Document, Model, Schema } from "mongoose";

export type MongoDbAdmin = Model<Document<any, any, any>>

const adminSchema = new Schema({
    name: { 
        type: String
    },
    email: { 
        type: String 
    },
    role: { 
        type: String ,
        default : "A"
    },
    password: {
         type: String 
    },
    number: { 
        type: String 
    },
    emirates: { 
        type: String 
    }
})

export const adminModel: MongoDbAdmin = mongoose.connection.model<Document<any, any, any>>("admin", adminSchema)