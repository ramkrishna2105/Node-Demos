var fs=require("fs");
fs.readFile("test.txt",function(err,data)
{
	if(err)
	{
		console.log(err);
	}
	else
	{
		console.log(data);
		console.log(data.toString());
	}

}
);
console.log("Program end");
console.log("Program end123");