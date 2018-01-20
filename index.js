const url = "https://localhost:8001";
const event = "service:subscription_meal_plan";
const data = {
	data: "hello"
};

const socket  = require('socket.io-client').connect(url, {secure: true, rejectUnauthorized: false});

socket.on('connect', function(){
	console.log("Connected");

	socket.emit(event, data);

	socket.on(event, function(data){
		console.log("result: " + event, data);
	});
})  

socket.on('disconnect', function(){
	console.log("Disconnected");
});

