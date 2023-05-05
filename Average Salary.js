let salary = [1000,2000,3000,4000];

let minSalary = Math.min(...salary);
let maxSalary = Math.max(...salary);

let newSalaryArr = salary.filter((element) => {
  return element !== minSalary && element !== maxSalary;
});
console.log(newSalaryArr);
// console.log(minSalary)
