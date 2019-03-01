function hacktiv(number) {
    let greatest;

    if(number.length === 0){
    return "data kosong"
} else{
 greatest = number[0];
 console.log("ini 1" + greatest);

 for (let i = 1; i < number.length; i++) {
     if (number[i]> greatest) {
        greatest = number[i];
        console.log("ini 2" + greatest);
        console.log(number[i]);
     }

        }
    }

    return greatest
}

console.log(hacktiv([2,5,20,4,6,7]));