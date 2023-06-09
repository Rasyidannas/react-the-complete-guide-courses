//membuat star menggunakan methode yang ada pd javascript

// membuat segitiga siku-siku
let segitigaSiku = function(n){
    for(let i = 0; i <= n; i++){
        console.log("*".repeat(i).padStart(n));
    }
    return;
}

let cetak =  segitigaSiku (5)
