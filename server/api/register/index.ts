import RegisterModel from "~~/server/models/Register.model";

export default defineEventHandler(async (event) => {
	// get all books & populate the authors
	return await RegisterModel.find().populate("username");
});
