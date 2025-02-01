import { Schema } from "mongoose";
import mongoose from "mongoose";

const activeSchema = new Schema({
  componentName: { type: String, required: true },
  items:{type:Array,required:true},
  quantity:{type:Number,required:true},
});

const activeModel = mongoose.model("active", activeSchema);

export default activeModel;
