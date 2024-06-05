/*
Implement a class named ArrayUtils that cannot be instantiated and contains static methods average and max.
If the class is instantiated throw an error with the message 'ArrayUtils cannot be instantiated.'
The average method should return the average of an array of numbers. 
If the array is empty, throw an error with the message 'Array cannot be empty.'
The max method should return the largest number from an array of numbers. 
You can assume you will always get passed an arrray of numbers
*/

class ArrayUtils {
     constructor(){
        throw new Error(`ArrayUtils Class cannot be instantiated`);
    }
    static average(array){
        let total = 0;
        if (array === 0 || array.length === 0){
            throw new Error(`Array cannot be empty!`)
        }
        for ( let i = 0; i < array.length; i++ ){
            total += array[i];
        }
        return total / array.length;
    }
    static max(array){
        let maxNum = 0;
        if (array === 0 || array.length === 0 ){
            throw new Error(`Array cannot be empty!`)
        }
        for (var i = 0; i < array.length; i++){ 
            //you want to loop over the array and compare it to the previous number and see if it is greater than over lesser than.
            if (array[i] > maxNum){
                maxNum = array[i];
            }
        }
        return maxNum;
    }
}
//You need to define an array to pass to this function 
console.log(ArrayUtils.avg([1,2,3,10]));
console.log(ArrayUtils.max([1,21,12,3]));