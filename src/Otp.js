import CryptoJS from 'crypto-js';

// Generate OTP key
export const key = CryptoJS.lib.WordArray.random(16); // Generate 16-byte OTP key

// Encrypt message
const message = 'Hello, world!';
export const encryptedMessage = CryptoJS.AES.encrypt(message, key);
console.log(encryptedMessage.toString(CryptoJS.enc.Utf8));

// Decrypt message
const decryptedMessage = CryptoJS.AES.decrypt(encryptedMessage, key);

console.log(decryptedMessage.toString(CryptoJS.enc.Utf8)); // Output: "Hello, world!"

