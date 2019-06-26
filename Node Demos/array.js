var arr=new Array(12,45,69);
console.log(arr.length);
sum=0;
for(var i=0;i<arr.length;i++)
{
	sum=sum+arr[i];
	console.log("Array Elements::"+arr[i]);
}
console.log("Sum::"+sum);

num=10;
var flag=false;
for(var i=0;i<arr.length;i++)
{
	if(arr[i]==num)
	{
		flag=true;
		console.log("Number found at::"+i);
		break;	
	}	
}
if(flag==false)
{
	console.log("Number not found....");
}

function search(arr,num)
{
	for(var i=0;i<arr.length;i++)
	{
	if(arr[i]==num)
		{
			return i;
		}
	
	}
return -1;
}

var pos=search(arr,69);
console.log("Number found at"+pos+"position");

