const nums = [2,7,11,15];
const target = 9;



// ================================== (1) =====================================
// Brute force approach 
// Iterate over every element of the array nums[] twice.
// Check if array nums[i] plus nums[j] is equal to the target.
// If yes, return the numbers else go out of the loop and return an empty array;

function findSumOfTarget(nums, sum) {
    // check params
    if(!Array.isArray(nums) || typeof sum !== 'number') {
        return;
    }

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === sum) {
                return [nums[i], nums[j]];
            }
        }
    }
    return [];
}

const haveSum = findSumOfTarget(nums, target);
console.log(haveSum);

// Time Complexity: O(n^2)
// Space Complexity: O(1)




// ================================== (2) =====================================
// Effiecient approach of solving the challenge
// Create a set;
// Iterate over every element of the array nums[].
// Check if element is not equal to target and push to the set.
// Iterate over every element of the array nums[];
// Check if the second integer which is target minus the the current element nums[j] is equal to any element in the set.
// If yes, return the numbers else go out of the loop and return an empty array;


function findSumOfTarget2(nums, target) {
    // check params
    if(!Array.isArray(nums) || typeof target !== 'number') {
        return;
    }

    const mySet = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== target) {
            mySet.add(nums[i]);
        }
    }

    for (let j = 0; j < mySet.size; j++) {
        let otherInteger = target - nums[j];
        if (mySet.has(otherInteger)) {
            return [nums[j], otherInteger];
        }
    }
    return [];
}

const haveSum2 = findSumOfTarget2(nums, target);
console.log(haveSum2);


// Time Complexity: O(n)
// Space Complexity: O(n)
