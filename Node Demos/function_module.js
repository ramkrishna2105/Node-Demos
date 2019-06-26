exports.search=function(arr,num)
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

exports.Fact=function(num)
{
	var ans=1;
	for (var i=num;i>=1;i--)
	{
		 ans=ans*i;
		
	}
	 return ans;
}
