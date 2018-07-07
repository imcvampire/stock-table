/**
 * Get a random number between min and max
 * @param {Number} min
 * @param {Number} max
 * @return {Number}
 */
const getRandomNumber = (min, max) => Math.random() * (max - min) + min

module.exports = getRandomNumber
