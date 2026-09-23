let arr1 = ["Toyota", "Moped", "Fiat"];
arr1[3] = "Honda";
arr1[-1] = "Kia";

for(let i = -1; i < arr1.length; i++) {
  console.log(`${i}th = ${arr1[i]}`);
}