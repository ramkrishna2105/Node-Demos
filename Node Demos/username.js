var h=require("http");
var fs=require("fs");
var url=require("url");
var query=require("querystring");

function process_request(req,resp)
{
	var p=url.parse(req.url);
	
	switch(p.pathname)
	{
		case '/':
		fs.readFile("form1.html",function(err,data)
		{
			if(err)
			{
				resp.write("Error");
			}
			else
			{
				resp.write(data);
				resp.end();
			}
			
		});
		break;
		
		case '/check':
			var str="";
			req.on('data',function(d)
			{
				str+=d;
			});
			
			req.on('end',function()
			{
				console.log(str);
				var ob=query.parse(str);
				resp.end(ob);
			});
		break;
	}
}

var server=h.createServer(process_request);
server.listen(2000);
console.log("server is running at port 2000");