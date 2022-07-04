const sum = (a, b) => {

    return new Promise((resolve, reject) => {
        setTimeout(
            () =>  resolve(a + b)
         , 1000)  
    })
 
} 


console.time('performance')

    const a = await sum(2, 2)
    const b = await sum(2, 2)
sum(a, b).then(c => {
    console.log(c)
    console.timeEnd('performance')
})


