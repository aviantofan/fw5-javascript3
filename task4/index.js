const fetch = require("cross-fetch")

const url = "https://jsonplaceholder.typicode.com/users"

fetch(url).then(fin => {
    fin.json().then(res => {
        res.forEach(item=> {
            console.log(item.name) 
        })
    }).catch(err =>{
        console.log(new Error('Check again!'))
    })
}).catch(err =>{
    console.log(new Error("You must input the API url!"))
})