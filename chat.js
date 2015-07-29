var net = require("net");
var fs = require("fs");

var messages = [];
var connections = [];

var sendToAll = function sendToAll(message, sender){
	connections.forEach(function(){
			connection.write(message);
	});
}
var server = net.createServer();
	server.on("connection", function(connection){
		connections.push(connection);
		console.log(connections);
		connection.write("\n Welcome to our Chat! \n");
		messages.forEach(function(message){
			connection.write(message + "\n");
		});
		connection.on("data", function(input){
			input = input.toString().trim();
			//console.log(input);
			messages.push(input);
		});
});

server.listen(2003, function(){
	console.log("listening!");
})