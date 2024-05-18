import mongoose, { Document,  Schema } from "mongoose";

// Define the user schema
const userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    date_of_birth: {
        type: String
    },
    emirates: {
        type: String
    },
    blood: {
        type: String
    },
    password: {
        type: String
    },
    tel: {
        type: String
    },
    whatsapp: {
        type: String
    },
    role: {
        type: Number
    },
    qualificstion: {
        type: String
    },
    profession: {
        type: String
    },
    zone: {
        type: String
    },
    address: {
        house_name: {
            type: String
        },
        district: {
            type: String
        },
        panjayath: {
            type: String
        },
        pincode: {
            type: Number
        }
    },
    verifyed: {
        type: Boolean,
        default: false
    },
    legislative_assembly: {
        type: String
    },
    before_in_pdp: {
        type: Boolean
    }
}, {
    timestamps: { createdAt: true }
});

// Check if the model is already defined, otherwise define it
export const userModel = mongoose.models.user || mongoose.model<Document<any, any, any>>('user', userSchema);
