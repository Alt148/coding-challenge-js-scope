const arr = [10, 12, 15, 21, 34];

const output = (i) => {
  console.log(`The index of ${arr[i]} this number is: ${i}`);
};

for (var i = 0; i < arr.length; i++) {
  setTimeout(output(i), 1000);
}