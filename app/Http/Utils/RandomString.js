module.exports = {
  make: (len) => {
    let result = "";
    let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let charLen = char.length;
    for (let i = 0; i < len; i++) {
      result += char.charAt(Math.floor(Math.random() * charLen));
    }
    return result;
  },
};
