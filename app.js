process.stdin.resume()
process.stdin.setEncoding('utf8')
let year = 2019;

console.log('What\'s your age ? ')
process.stdin.on('data', (age) => {
    if (age >= 100) {
        console.log("Trop vieux")
        process.exit()
    }
    else if (age>0){
        console.log(`You are born in ${year - age}`)
        process.exit()
    }else{
        console.log('bad age, please retry')
        process.stdin.resume()

    }
})

