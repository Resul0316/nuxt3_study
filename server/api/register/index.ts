import RegisterModel from "~~/server/models/Register.model";

export default defineEventHandler(async (event) => {
	return await RegisterModel.find().populate("username");
});
