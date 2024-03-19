const mongoose = require("mongoose");
require("dotenv").config();

//const { MONGODB_URL } = process.env;
MONGODB_URL="mongodb+srv://vivekraj:vivekraj@cluster0.jpx9lxm.mongodb.net/student"
exports.connect = () => {
	mongoose
		.connect(MONGODB_URL, {
			useNewUrlparser: true,
			useUnifiedTopology: true,
		})
		.then(console.log(`DB Connection Success`))
		.catch((err) => {
			console.log(`DB Connection Failed`);
			console.log(err);
			process.exit(1);
		});
};
