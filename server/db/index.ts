import mongoose from "mongoose";
import { Nitro } from "nitropack";

export default async (_nitroApp: Nitro) => {
	// connect to mongodb
	let personalInfo = 'resulavsar2:Aa123456@cluster2.qvjitnt';
	const uri = `mongodb+srv://${personalInfo}.mongodb.net/test?retryWrites=true&w=majority`;
	mongoose
		.connect(uri)
		.then(() => console.log(`Connected to DB`))
		.catch((e) => console.log(e));
};
