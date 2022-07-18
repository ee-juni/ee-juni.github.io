fetch('jsondata/pikachu.json')
    .then(result => {
        return result.json();
    }).then(data=>{
        console.log(data);
    }).catch(err => {
        console.log(err)
    })

