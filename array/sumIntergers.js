const nums = [2,7,11,15];
const target = 9;



// ================================== (1) =====================================
// Brute force approach 
// Iterate over every element of the array nums[] where i is less than the length of the array.
// Iterate over every element where j is less than the value of i plus 1.
// Check if array nums[i] plus nums[j] is equal to the target.
// If yes, return the numbers else go out of the loop and return [0, 0];

function findSumOfTarget(nums, sum) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 0; j < i + 1; j++) {
            if (nums[i] + nums[j] === sum) {
                return [nums[j], nums[i]];
            }
        }
    }
    return [0, 0];
}

const haveSum = findSumOfTarget(nums, target);
console.log(haveSum);

// Time Complexity: O(n^2)
// Space Complexity: O(1)




// ================================== (2) =====================================
// Effiecient approach of solving the challenge
// Create a set;
// Iterate over every element of the array nums[] where i is less than the length of the array.
// Check if mySet has the current element in the array is not equal to the target, add to the set;
// Iterate over every element of the array nums[] where j is less than the size of the set.
// Check if the second integer which is target minus the the current element nums[j].
// If yes, return the numbers else go out of the loop and return [0, 0];


function findSumOfTarget2(nums, target) {
    const mySet = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != target) {
            mySet.add(nums[i]);
        }
    }

    for (let j = 0; j < mySet.size; j++) {
        let otherInteger = target - nums[j];
        if (mySet.has(otherInteger)) {
            return [nums[j], otherInteger];
        }
    }
    return [0, 0];
}

const haveSum2 = findSumOfTarget2(nums, target);
console.log(haveSum2);


// Time Complexity: O(n)
// Space Complexity: O(n)
