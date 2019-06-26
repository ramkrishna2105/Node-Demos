var http = require("http");
var url = require("url");
var query_string = require("querystring");
var fs = require("fs");

var server = http.createServer(function(req,resp)
{
	var u = url.parse(req.url);
	
	switch(u.pathname)
	{
		case '/':
		fs.readFile("form.html",function(err,data)
		{
			if(err)
			{
				resp.write("Error");
				console.log(err);
			}
			else
			{
				resp.write(data);
				resp.end();
				
			}
			
		});
		break;
		
		case "/calc":
		var str="";
		req.on("data",function(d)
		{
			str+=d;
		});
		req.on("end",function()
		{
			var dd = query_string.parse(str);
			console.log(dd.num1);
			console.log(dd);
			var add = parseInt(dd.num1) + parseInt(dd.num2);
			resp.write("addtion"+add);	
			resp.end();
		});
		break;
	}
}).listen(4000);
console.log(4000);
