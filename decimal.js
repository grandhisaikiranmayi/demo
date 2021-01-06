// function to convert decimal to binary 
 function decToBinary(n)
{ 
    // array to store binary number 
    let binaryNum=['5']; 
 // counter for binary array 
    let i = 0; 
    while (n > 0) { 
  
        // storing remainder in binary array 
        binaryNum[i] = n % 2; 
        n = ~~(n / 2); 
        i++; 
    } 
  
    // printing binary array in reverse order 
    for (let j = i - 1; j >= 0; j--) 
        cout << binaryNum[j];  

{ 
    console.log(binaryNUM)
}
    let n = 20; 
     decToBinary(n); 
    return 0; 
}
}




   