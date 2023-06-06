const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema for the user model
//all info is obtained via user's google profile except stacks & books
const userSchema = new Schema(
	{
		name: String,
		googleId: {
			type: String,
			required: true,
		},
		email: String,
		avatar: String,
		//an array of stack IDs of all stacks that are created by the user
		plants: [{ type: Schema.Types.ObjectId, ref: "Plants" }],
	},
	{ timestamps: true }
);

module.exports = mongoose.model("User", userSchema);