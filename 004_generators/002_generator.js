const sum = (a, b) => {

    return new Promise((resolve, reject) => {
        setTimeout(
            () =>  resolve(a + b)
         , 1000)  
    })
 
} 


const async = (fn) => {
    const gen = fn()
    ascynR(gen)
}

 const ascynR = (gen, result) => {
     const obj = gen.next(result)
     if (obj.done) return
     obj.value.then(result => {
         ascynR(gen, result)
     })
 }

console.time('performance')
async(function * () { 
    const a = yield sum(2, 2)
    const b = yield sum(2, 2)
    sum(a, b).then(c => {
        console.log(c)
        console.timeEnd('performance')
    })
    
})


