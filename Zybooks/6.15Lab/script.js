function drawTriangle(size) {

   for(let i=1; i<= size; i++)
   {
       //intialize c as empty string
       c = "";
       //iterate from j = 1 to i
       for(let j=1; j<=i; j++)
       //concate * with c
       c = c + "*";
       //print c
       console.log(c);
   }
   
}
drawTriangle(4);