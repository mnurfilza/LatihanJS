function panggilMap() {
    var dataKota = ['Jakarta', 'Balikpapan', 'Medan'];
    dataKota.map(function (item,index,array) {
        console.log(array[0])
    })
}


//Tugas Parameters dan filter
function panggilFilterParameters(value) {
   
    var benuaEropa = value.filter(function(item) {
      return item.benua === 'Eropa';
    });
    var benuaAsia = value.filter(function (item) {
       return item.benua === 'Asia'; 
    });
    // console.log(benuaAsia);
    // console.log("================");
    // console.log(benuaEropa);
   }
   
   panggilFilterParameters( [
    {negara: 'Indonesia', benua: 'Asia'},
    {negara: 'Jerman', benua: 'Eropa'},
    {negara: 'Spanyol', benua: 'Eropa'},
    {negara: 'Korea', benua: 'Asia'},
    {negara: 'Portugal', benua: 'Eropa'},
    {negara: 'Amerika Serikat', benua: 'Amerika'},
  ]
 )
 //BelajarBalik Kata menggunakan split reverse dan join

//  function balikKata(kata) { 
//     return kata.split('').reverse('').join('');
//   }


//Tugas Balik kata menggunakan perulangan
function balikKata(kata){
    var res = kata.split('');
    var dataBaru = [];
    for (let i = res.length; i >= 0; i--) {
           dataBaru.splice(res.length-i,0,res[i])
 
    }
    return dataBaru.join('')
}   
// console.log(balikKata("Niomic!"))     
// console.log(balikKata("JavaScript"))  
// console.log(balikKata("alohahola"))   
// console.log(balikKata("Jawa_Barat"))  

//Tuugas Deret Belum Selsai 
function deretAngka(n){  
    var haslilDeretAngka =''
    for (let i = 1 ; i <= n; i++){
       if (i % 3 === 0) {
           if (i % 15 === 0) {
               haslilDeretAngka += 'NIOMIC '
           }else{
               haslilDeretAngka += 'NIO '
           }
       }else if(i% 5 === 0 ){
            haslilDeretAngka += 'MIC '
       }else{
           haslilDeretAngka += i+' ' 
       }
    }
    

    return haslilDeretAngka
}
console.log(deretAngka(10))
console.log(deretAngka(20))
console.log(deretAngka(30))