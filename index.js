"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = (0, express_1["default"])();
app.get('/', function (req, res) {
    res.send('Well done!');
});
app.listen(3000, function () {
    console.log('The application is listening on port 3000!');
});
