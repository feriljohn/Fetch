console.log('Welcome to the world of Mark Antony')
fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(result){
        console.log(result.json())
    })