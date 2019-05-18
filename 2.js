// NAMA : FIRMANSYAH ROZY

// Buat fungsi untuk generate 32 char random alphanumeric dengan return array






generateString = (num) => {
    
    const arr = []; // deklarasi array kosong, diisi dengan for loop
    let random = ''; // deklarasi variable kosong untuk alphanumeric, diisi juga dengan for loop
    
    // for loop untuk generate random alphanumeric dan mengisi array
    for (let i = 0; i < num; i++) {
        
        // dengan method .toString() untuk mengganti hasil Math.random() dengan random character 1 - 9, aA - zZ
        // kemudian dengan method .replace() untuk mengghilangkan nol dan koma diawal
        // dijumlahkan (concatenate) sebanyak 3 kali untuk menghasilkan random alphanumeric melebihi 32 character
        random = Math.random().toString(36).replace('0.', '') + Math.random().toString(36).replace('0.', '') + Math.random().toString(36).replace('0.', '') + Math.random().toString(36).replace('0.', '');
        
        // dengan method .substr untuk mengekstrak 32 karakter awal dari random alphanumeric diatas
        // kemudian dengan method push untuk memasukkan value ke array
        arr.push(random.substr(0, 32));
    }
    return arr;
}

console.log(generateString(2));