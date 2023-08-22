function linearSearch(A, T) {
  for (let i = 0; i < A.length; ++i) {
    // 見つかったら直ちに探索を終了
    if (A[i] == T) return i;
  }
  // 見つからなかった場合は-1を返す
  return -1;
}

function binarySearch(A, T) {
  let head = 0;
  let tail = A.length - 1;
  while(head <= tail) {
    const mid = Math.floor((head + tail) / 2);
    const guess = A[mid];
    if (guess == T) return mid;
    if (guess > T) tail = mid - 1;
    else head = mid + 1;
  }
  return -1;
}

for (const n of [100,10000,1000000]) {
  const arr = [...Array(n)].map((_, i) => 3 * i); // 3の倍数がn個
  const target = arr[arr.length-1];

  console.log("\nArray length:", n);
  console.log("-".repeat(20));

  console.time("linearSearch");
  linearSearch(arr, target);
  console.timeEnd("linearSearch");

  console.time("binarySearch");
  binarySearch(arr, target);
  console.timeEnd("binarySearch");
}
