// Fungsi IndexOF
function panggilindexOf() { 
    var kota = ["jakarta","bekasi","bandung","solo"];

    return kota.indexOf("solo");
 }
// Fungsi Split dengan di ambil data ke 0
 function panggilSplit() { 
     var kalimat = "halo nama saya filza";

     console.log(kalimat);
     var res = kalimat.split(" ");
     var split = res[0];
     return split
  }
  //Fungsi Join 
  function panggilJoin() {
      var kota = ["Jakarta","Padang","Bekasi","Bandung","sumedang"];
        console.log(kota);
        var res = kota.join(",");
        return res
  }

  //Fungsi Reverse

  function panggilReverse() {
      var kota = ["Jakarta","kota","medan","bandung"];
      console.log(kota);
      res = kota.reverse();
      return res
  }

  console.log(panggilReverse());
  