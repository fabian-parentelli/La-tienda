import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const configCollection = 'configs';

const configSchema = new mongoose.Schema({
    role: { type: String },
    userId: { type: String },
    days: [
        {
            day: { type: String },
            cut: { type: Boolean, default: false },
            hin: { type: String },
            hout: { type: String },
            hCutIn: { type: String },
            hCutOut: { type: String },
        }
    ],
    businessDay: { type: Boolean, default: false }
});

configSchema.plugin(mongoosePaginate);

export const configModel = mongoose.model(configCollection, configSchema);