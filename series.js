
function fibonacci( n)
{
 let i, term1 = 0, term2 = 1, nextTerm;
 for (i = 1; i<=n; i++)
 {
  nextTerm = term1 + term2;
  term1 = term2;
  term2 = nextTerm;
 }
console.log( term1);
}
 function prime(n)
{
 let i, j, flag, count =0;
 for (i=2; i<=100; i++)
 {
  flag = 0;
  for (j=2; j<i; j++)
  {
   if(i%j == 0)
   {
    flag = 1;
    break;
   }
  }
  if (flag == 0)
   count++;
  if(count == n)
  {
   console.log( i);
   break;
  }
 }
}


 let n=10;
 if(n%2 == 1)
  fibonacci (n/2 + 1);
else
  prime(n/2);
 return 0;
 
    