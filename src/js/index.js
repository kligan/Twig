
    "use strict";

/* - The function groupArrayElements() returns a new array derived from the givenArray parameter.
   - It returns the contents of the givenArray divided into N equally sized arrays. where N is a positive integer with the parameter set as arrayCount
   - By dividing the length of the givenArray by arrayCount we yield the new array 'newArray' and then round it to its nearest number using Math.ceil
   - Then iterate through the array and push the outcomes inside the new blank array
   - e.g
        Input: ([1, 2, 3, 4, 5], 3 );
        Output [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
 */

    let groupArrayElements = (givenArray, arrayCount) => {
        const results = [];
        const newArray = givenArray.length / arrayCount;
        const arrayRounded = Math.ceil(newArray);
        for (let i = 0; i < givenArray.length; i = i + arrayRounded) {
            results.push(givenArray.slice(i, i + arrayRounded));
        }
        return results;
    }

    // Exporting 'groupArrayElements' so that it can be shared and reused by other files (eg. Unit testing with jest, index.test.js)
    module.exports= groupArrayElements;
