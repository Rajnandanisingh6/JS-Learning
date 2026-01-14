
setInterval(()=>{
    const result = document.getElementById('result');
    const currentTime = Date.now();
    const olympicStartTime = new Date(2028,6,14).getTime();

    let timmer = olympicStartTime - currentTime;
//millisecond

const days = Math.floor(timmer / (1000 * 60 * 60 * 24));
timmer %= (1000 * 60 * 60 * 24);

const hours = Math.floor(timmer / (1000 * 60 * 60));
timmer %= (1000 * 60 * 60);

const minutes = Math.floor(timmer / (1000 * 60));
timmer %= (1000 * 60);

const seconds = Math.floor(timmer / 1000);
timmer %= 1000;

result.textContent = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

},1000);

