let number = -121;

//This first makes an array str.split("") = ['1','2','3'] then reverse them and then join them together
let reversedStr = number.toString().split("").reverse().join("");

if (parseInt(reversedStr) === number){
    console.log("Pallindrome");
}else{
    console.log("Not pallindrome");
}
