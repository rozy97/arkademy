// NAMA : FIRMANSYAH ROZY

// menghitung banyaknya character dalam sebuah kata 


myCountChar = (myString, myChar) => {
    count = 0; // variabel yg menghitung jumlah char dalam string
    
    for (let i = 0; i < myString.length; i++) {
        if (myString[i] == myChar) {
            count = count + 1;
        }
        
    }
    return count;
}
console.log(myCountChar("bootcamp","o"));
console.log(myCountChar("arkademy","k"));