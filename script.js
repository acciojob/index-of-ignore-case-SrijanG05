function indexOfIgnoreCase(s1, s2) {
  // write your code here
	s1=s1.toLowercase();
	s2=s2.toLowercase();
	let substr;
	for(let i=0;i<s1.length;i++)
		{
         if(s1[i]===s2.charAt[0])
		 {
          substr=s1.substr(i,s1.length-1);
		 }
		}
			else
		 {
          return -1;
		 }
	console.log(substr);
		}
        

// Please do not change the code below
