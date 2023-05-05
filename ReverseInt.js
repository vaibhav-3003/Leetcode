let num = 120;
let leftRange = -Math.pow(2,31); 
let rightRange = Math.pow(2,31)-1; 
let reversedNum =
  parseInt(Math.abs(num).toString().split("").reverse().join("")) *
  Math.sign(num);

if(reversedNum<leftRange || reversedNum>rightRange){
    console.log(0);
}else{
    console.log(reversedNum);
}
