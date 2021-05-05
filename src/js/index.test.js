const groupArrayElements = require('./index');

/*- e.g
Input: ([1, 2, 3, 4, 5], 3 );
Output [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]

Test command - npm test
 */
test('Returns the contents of the array divided into N equally sized arrays', ()=>{
    const givenArray = [1,2,3,4,5];
    const arrayCount = 3;
    expect(groupArrayElements(givenArray,arrayCount)).toEqual([[1,2],[3,4],[5]]);
})