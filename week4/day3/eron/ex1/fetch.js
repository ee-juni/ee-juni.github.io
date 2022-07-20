const pprint = (val)=>{document.write(val);console.log(val)}


//async, await ==> 훨씬 더 많이 사용


const getPokemon = async () => {
    //returns Promise
    const resp = await fetch('jsondata/pikachuu.json')
    if (resp.status != 200){
        throw new Error('Cannot find communication address')
    }

    const data = await resp.json()
    return data

}

getPokemon()

/*
//Promise chain
fetch('jsondata/jamanbo.json').then(res =>{
    return res.json()
}).then(data => {
    console.log(data)
}).catch(err=>{
    console.log(err.message)
})
*/