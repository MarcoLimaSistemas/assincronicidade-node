const sum = (a, b) => {

    return new Promise((resolve, reject) => {
        setTimeout(
            () =>  resolve(a + b)
         , 1000)  
    })
 
} 


console.time('performance')
const problem = sum(2, 2).then(a => {
    console.log(a)
    sum(2, 2).then(b => {
        console.log(b)
        sum(a, b).then (c => {
            console.log(c)
            console.timeEnd('performance')
        })
    })
})