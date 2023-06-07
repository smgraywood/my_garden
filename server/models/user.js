const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const plantSchema = new Schema(
	{
		common_name: {
			type: Array,
		},
		scientific_name: {
			type: String,
		},
		poison_level: {
			type: Number,
		},
		sunlight_or_shade: {
			type: String,
		},
		photo: {
			type: String,
		},
	},
	{ timestamps: true }
);

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			unique: true,
			trim: true,
			lowercase: true,
			required: true,
		},
		password: {
			type: String,
			trim: true,
			minLength: 3,
			required: true,
		},
		plants: [plantSchema],
	},
	{
		timestamps: true,
		toJSON: {
			transform: function (doc, ret) {
				delete ret.password;
				return ret;
			},
		},
	}
);

userSchema.pre("save", async function (next) {
	if (!this.isModified("password")) return next();
	this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
	return next();
});

module.exports = mongoose.model("User", userSchema);
