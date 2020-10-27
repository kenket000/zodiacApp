const express = require('express');

const app = express();

app.use(express.static(__dirname + '/client'));
// Setup Environment Variable
const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log('Server is running on port '+ port);
});