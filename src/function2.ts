// promise function
async function countDown() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Countdown finished!');
        }, 5000);
    });
}

countDown().then((message) => {
    console.log(message);
});
