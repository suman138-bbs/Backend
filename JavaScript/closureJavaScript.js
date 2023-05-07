// function todo(task) {
//     setTimeout(function fun() {
//         console.log("Completed ",task)
//     },2000)
// }


// function test() {
//     for (var i = 0; i < 3; i++){
//         setTimeout(function exec() {
//             console.log(i)
//         },i*1000)
        
//     }
// }

// test()



// function test() {
//     for (let i = 0; i < 3; i++){
//         setTimeout(function exec() {
//             console.log(i)
//         },i*1000)
        
//     }
// }

// test()


function fun() {
    console.log("Fun Called")
    setTimeout(function execl() {
        console.log("Inside a 5s")
    }, 5000)
    setTimeout(function execl1() {
        console.log("Inside a 3s")
    }, 3000)
    
}

fun()
for (let i = 0; i < 100000000; i++){
    
}

setTimeout(function last() {
    console.log("Last timeOut of 7s")
},0)