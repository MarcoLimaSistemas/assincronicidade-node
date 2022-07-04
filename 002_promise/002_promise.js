const sum = (a, b) => {

    return new Promise((resolve, reject) => {
        setTimeout(
            () =>  resolve(a + b)
         , 1000)  
    })
 
} 


console.time('performance')

Promise.all([
    sum(2, 2),
    sum(2, 2)
]).then (result => {
    const [a, b] = result
    sum(a, b).then(c => {
        console.log(c)
        console.timeEnd('performance')
    })
})