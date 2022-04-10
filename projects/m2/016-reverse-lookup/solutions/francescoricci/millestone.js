module.exports = {
    reverseLookup: function (object, searchValue) {
        /* This function return array with possible key where value is equal to searchValue*/

        // varaibles declaration
        let arrayKey = []

        for (const key in object) if (object[key] === searchValue) arrayKey.push(key);

        return arrayKey;
    }
};