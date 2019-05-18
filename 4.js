// FIRMANSYAH ROZY
cetakGambar = (num) => {
    if (num > 0 && num%2 === 1){
        let equal = "";
        for (let i = 0; i < num; i++) {
            equal += "=";
        }
        for (let j = 0; j < num; j++) {
            console.log(equal);
            
            
        }
    } else {
        return "masukkan angka ganjil";
    }
}
cetakGambar(5);


for (let i = 0; i < 5; i++) {
    console.log("=====");
    
}