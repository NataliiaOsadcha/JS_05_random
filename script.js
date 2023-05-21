const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(len) {
    let randomString = '';
    for (let i = 0; i < len; i++) {
        let randomPoz = Math.floor(Math.random() * characters.length);
        randomString += characters.substring(randomPoz,randomPoz+1);
    }
    return randomString;
}

const key = generateKey(20, characters);
console.log(key);