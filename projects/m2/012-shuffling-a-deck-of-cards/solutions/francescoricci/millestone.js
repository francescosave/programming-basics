module.exports = {
    getRandomInt: function (min,max) {
    /*
    This function generates an random number between min and max value. 
    */

        let result = [0, 0];
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min) + min);

    },
    f2: function () {
        console.log('f2')
    }
};
