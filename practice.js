//

async function roundRobin(arr) {
    let i = 0;
    while(true){
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(arr[i])
        i = (i + 1) % arr.length;
    }
}

Array if server IP address
roundRobin(['123:345:455:500', '123:345:455:600', '123:345:455:700', '123:345:455:800']);