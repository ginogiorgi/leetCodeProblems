/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
    let maxWater = 0;
    let leftPointer = 0;
    let rightPointer = height.length - 1;

    while (leftPointer < rightPointer) {
        let water =
            Math.min(height[leftPointer], height[rightPointer]) *
            (rightPointer - leftPointer);

        if (maxWater < water) {
            maxWater = water;
        }
        if (height[leftPointer] < height[rightPointer]) {
            leftPointer++;
        } else {
            rightPointer--;
        }
    }
    return maxWater;
}
