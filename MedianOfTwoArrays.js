let nums1 = [1,2], nums2 = [3,4];
let mergedArr = [...nums1,...nums2].sort((a, b) => a - b);
let mid=[];
let sum=0;

if(mergedArr.length %2 !== 0) {
    mid = [mergedArr[parseInt(mergedArr.length/2)]];
}else{
    mid = [mergedArr[mergedArr.length / 2],mergedArr[mergedArr.length / 2 - 1]];
}
if(mid.length>1){
    mid.forEach(element=>{
        sum = sum+element;
    })
    console.log(sum/2);
}else{
    console.log(mid[0]);
}
