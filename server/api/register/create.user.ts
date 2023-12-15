import RegisterModel from "~~/server/models/Register.model";
import { RegisterSchema } from "~~/server/validation";

export default defineEventHandler(async (event) => {
	// Get data form body
	const body = await readBody(event);

	// validate
	let { error } = RegisterSchema.validate(body);
	if (error) {
		throw createError({
			message: error.message.replace(/"/g, ""),
			statusCode: 400,
			fatal: false,
		});
	}

	// create 
	try {
		await RegisterModel.create(body);
		return { message: "user created" };
	} catch (e:any) {
		throw createError({
			message: e.message,
		});
	}
});
