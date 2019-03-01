function panggilRegex(){
    let str ="abcdefghijklmn";
    return str.search(/a/)
}
function panggilregexP(){
    let str ="abcdefghijklmn";
    console.log(str.match(/c/))
  }
  
  function panggilRegexp(value) {
    var ambilData = value.match(/[a-i]/g)
    console.log(ambilData)
 }
 panggilRegexp("bulan ke 1 sd ke 4");

