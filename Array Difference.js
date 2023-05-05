nums1 = [1, 2, 3, 3];
nums2 = [1, 1, 2, 2];
let filteredArr1;
let filteredArr2;
let toRemove = [];

nums1.forEach((element) => {
    if(nums2.includes(element)){
        toRemove.push(element);  
    }
});
filteredArr1 = nums1.filter((value)=>{
    return !toRemove.includes(value);
});
let unique_arr1 = new Set(filteredArr1);
unique_arr1 = [...unique_arr1];

filteredArr2 = nums2.filter((value)=>{
    return !toRemove.includes(value);
})
let unique_arr2 = new Set(filteredArr2);
unique_arr2 = [...unique_arr2];

console.log([unique_arr1,unique_arr2]);