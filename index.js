const arr = [10, 12, 15, 21, 34];

for (var i = 0; i < arr.length; i++) {
  setTimeout(() => {
    console.log('The index of ' + arr[i] + ' this number is: ' + i);
  }, 1000);
}