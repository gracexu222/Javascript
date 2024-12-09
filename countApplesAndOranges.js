function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleCount = 0;
  let orange_count = 0;

  for (let i = 0; i < apples.length; i++) {
    let applePosition = a + apples[i];
    if (applePosition >= s && applePosition <= t) {
      appleCount++;
    }
  }
  for (let i = 0; i < oranges.length; i++) {
    let orangePosition = b + oranges[i];
    if (orangePosition >= s && orangePosition <= t) {
      orange_count++;
    }
  }

  console.log(appleCount);
  console.log(orange_count);
}
