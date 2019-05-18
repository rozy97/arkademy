// NAMA : FIRMANSYAH ROZY

// buat fungsi dengan parameter array yg menghasilkan array baru berisi minmax array sebelumnya
// dengan catatan index arrayMax tidak boleh lebih kecil dari index arrayMin


minMax = (arr) => {

    // array sementara, dengan method .sort() mengurutkan value terkecil ke terbesar dari array parameter
    let temp = arr.sort(function(a, b){return a - b});

    // for loop untuk menghapus index sebelum index dari value minimum array parameter
    for (let i = 0; i < arr.indexOf(temp[0]); i++) {
        arr.shift();
    }

    // urut kembali untuk mendapatkan value max sesuai syarat yg diinginkan
    temp = arr.sort(function(a, b){return a - b});

    // return array value min dan value max
    return [temp[0], temp[temp.length - 1]];
}

console.log(minMax([75, 45, 32, 1, 256, 3, 77,]));