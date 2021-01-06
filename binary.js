function find( decimal_number) 
{ 

    if (decimal_number == 0) { 

        return 0;  
    }
    else{

   
              return (decimal_number % 2 + 10 * find(decimal_number / 2));
}
} 


    let decimal_number = 20; 
     let n=find(decimal_number);
     console.log(n);
    





