var http=require("http");
var fs=require("fs");

function process_request(req,resp)
{
	fs.readFile("test.txt",function(err,data){
	 if(err)
	 {
		console.log(err);
	 }
	 else
	 {
		resp.write(data);
		resp.end();
	 }
	});
}
console.log("Program end");
var server=http.createServer(process_request);
server.listen(2500);
console.log("listening on port 2500");
