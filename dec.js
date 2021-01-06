
 let number=40, n, remainder ,binary=0,place=1;                                                                                                                                                                                                                                                                                                                                             
n = number;

    while (n >= 1)
    {
        remainder = n % 2;
        n =~~(n/ 2);
        binary += remainder * place;
        place *= 10;
        
    }
    
    
    console.log( binary);

    