
const users = ['Felipe', 'Ray', 'João'];

function print(u){
    console.log(users)
}

function add(u){
    let promise = new Promise(function (resolve, reject){
        setTimeout(()=>{
            users.push(u)
            let sucess = true;
            if(sucess){
                resolve(); // executando resolve
            }else{
                reject({msg : "Erro de qualquer coisa"}) //executando reject passando um obj
            }
        }, 2000);
    })
    return promise;
}

//usando promise
add('João Lucas').then(print).catch((e)=>{
    console.log(e.msg)
})

//usando async await
async function execute(){
    await add('João Lucas')
    print();
}