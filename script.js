function indexOfIgnoreCase(s1, s2) {
  // write your code here
	if (!s1 || s2 === null) return -1;

  let str = s1.toLowerCase();
  let subStr = s2.toLowerCase();

  return str.indexOf(subStr);
}
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));        

// Please do not change the code below
