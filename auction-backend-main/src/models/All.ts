import mongoose, { Schema } from "mongoose";

const dataSchema = new Schema({
  componentName: { type: String, required: true },
  items:{type:Array,required:true},
  quantity:{type:Number,required:true}
});

const dataModel = mongoose.model("avaliable", dataSchema);
export default dataModel;
