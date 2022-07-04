function * generator() {
    for (let index = 0; index < 100; index++) {
        yield index;        
    }
}

for (const iterator of generator()) {
    console.log(iterator)
}