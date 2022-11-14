import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
title: String,
message: String,
name: String,
creator: String,
tags: [String],
selectedFile: String,
likes: {
      type:[String],
      default:[],
},
createdAt:{
      type:Date,
      dafault:new Date()
}
});

var PostMessage = mongoose.model("PostMessage", postSchema);
console.log("in models of postmessage");
console.log(PostMessage);
export default PostMessage;

//mongoose.models are fancy constructors compiled from Schema definitions. An instance of a model is called a document.
// mongoose.models are responsible for creating and reading documents from the underlying MongoDB database.