const mongoose = require('mongoose');
const fs = require("fs");
const path = require("path");
const models_path = path.join(__dirname, "./../models");


mongoose.connect('mongodb://localhost/petShop', {
  useNewUrlParser: true,
  useCreateIndex: true
});
mongoose.connection.on('connected', () => console.log('Connected to Mongo'));


fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf(".js") >= 0)
		require(models_path+"/"+file);
});
