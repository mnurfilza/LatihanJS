function panggilNestedArray(value){
    for (var i = 0; i < value.length; i++) {
     console.log('id :', value[i][0])
     console.log('name :', value[i][1])
     console.log('company :', value[i][2])
     console.log('\n')
    }
   }
   
   var nestedArray = [
     [1, "Mark Zuckerberg", "Facebook"],
     [2, "Elon Musk", "Tesla"],
     [3, "Bill Gates", "Microsoft"],
     [4, "Steve Jobs", "Apple"]
   ]
   
//    panggilNestedArray(nestedArray)

function TugasNested(value) {
    var dataBaru = []
   for (let i = 0; i < value[0].length; i++) {
       console.log(dataBaru.concat(value[0][i],value[1][i],value[2][i]))
   }
}
   
var nestedArray = [
    [1,2,3,4],
   ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
   ['Facebook', 'Tesla', 'Microsoft', 'Apple']
]

TugasNested(nestedArray)