var http=require("http");
var s=http.createServer(function(req,resp)
{
	resp.write("Hello World!");
	resp.end();
});
s.listen(2000);
console.log("Listening On port 2000");
