
let str=['(','}'];
      let count, limit=10, opencount1=0,opencount2=0,opencount3=0,closecount1=0,closecount2=0, closecount3=0;
     
      for(count = 0; count < limit; count++)
      {
            if(str[count] === '{')
            {
                  opencount1++;
            }
            else if(str[count] === '[')
            {
                  opencount2++;
            }
            else if(str[count] === '(')
            {
                  opencount3++;
            }
            else if(str[count] === '}' ){
                  closecount1++;
            }
            else if(str[count] === ']' ){
                closecount2++;
          }
          else if(str[count] === ')') {
            closecount3++;
      }
      }
      if(opencount1=== closecount1 &&opencount2===closecount2 &&opencount3===closecount3)
      {
            console.log("The Algebraic Expression has matching Parantheses");
      }
      else
      {
            console.log("The Algebraic Expression does not have matching Parantheses");
      }
      
