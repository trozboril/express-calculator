var express = require('express');
var app = express();
var port = 6543;
var toodaloo = require('./logic');

app.get('/:operand/:num1/:num2', function (req, res) {
	var operand = req.params.operand;
	var num1 = parseFloat(req.params.num1);
	var num2 = parseFloat(req.params.num2);
	res.sendStatus(toodaloo.setFunction(num1, num2, operand));
});

app.listen(port, function() {
    console.log('Express app listening on port ' + port);
});