// modulus adalah operataor sisa hasil pembagian

function panggilModulus(){
    var data1 = 5;
    var data2 = 2;
    
    return data1 % data2
}
// Mencari Bilangan genap
function panggilGenap() { 
    var dataGenap = []
    for (let i = 0; i < 10; i++) {
        if (i%2 === 0) {
            dataGenap.push(i)
        }
    }
    return dataGenap
 }
// Mencari Bilangan Ganjil
 function panggilGanjil() { 
    var dataGanjil = []
    for (let i = 1; i < 30; i++) {
        if (i%2 !== 0) {
            dataGanjil.push(i);
        }
        
    }
    return dataGanjil
  }
  
//Mencari Kelipatan 5
function panggilKelipatan() {
    var data = []

    for (let i = 1; i < 50; i++) {
        if (i%5 === 0) {
          data.push(i)   
        }
    }
    return data;
}

console.log(panggilKelipatan())
