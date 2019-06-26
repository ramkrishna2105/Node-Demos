var http=require("http");
var url=require("url");
var fs=require("fs");
var query=require("querystring");
var m1=require("./add")



function process_request(req,resp)
{
	var p=url.parse(req.url);
	  resp.writeHead(200,{'Content-Type':'text/html'});
	switch(p.pathname)
	{
		case '/': 
				fs.readFile("form.html",function(err,data)
				{
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
				
				break;
				
		case '/calc': 
				var str="";
				req.on('data',function(d)
				{
					str+=d;
				});
				req.on('end',function()
				{
					console.log(str);
					

					var ob=query.parse(str);
					//console.log(ob.num1);
					if(ob.btn=="Add")
					{
						var sum1=m1.add(ob.num1,ob.num2);
						resp.end("<h1>Addition:"+sum1+"</h1>");
					}
					if(ob.btn=="Square")
					{
						var square=parseInt(ob.num1)*parseInt(ob.num1);
						var square1=parseInt(ob.num2)*parseInt(ob.num2);
						resp.end("<h1>Square:"+square+square1+"</h1>");
						
					}
					if(ob.btn=="Mult")
					{
						var mul=parseInt(ob.num1)*parseInt(ob.num2);
						resp.end("<h1>Multiplication:"+mul+"</h1>");
					}
					
					//console.log(ob.btn);
					//resp.write("Addition :"+(parseInt(ob.num1)+parseInt(ob.num2)));
					
					//var addd = parseInt(ob.num1)+parseInt(ob.num2);
					
					
				});
				break;
			
		
	}
		console.log(p);
}

var server=http.createServer(process_request);
server.listen(3000);
console.log("3000");