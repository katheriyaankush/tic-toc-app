var numbers = [175, 50, 25];

 console.log(numbers.reduceRight(myFunc));

function myFunc(total, num) {
    console.log(total,'==',num)
  return total + num;
}
console.log(numbers);