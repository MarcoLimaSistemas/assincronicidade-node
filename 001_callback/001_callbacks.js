const sum = (a, b, cb) => {
    setTimeout(
       () =>  cb(a + b)
    , 1000)  
} 

// const result = sum(2, 2, result => {
//     console.log(result)
// })

// problematização do callback
console.time('performance')
const problem = sum(2, 2, a => {
    console.log(a)
    sum(2, 2, b => {
        console.log(b)
        sum(a, b, c => {
            console.log(c)
            console.timeEnd('performance')
        })
    })
})