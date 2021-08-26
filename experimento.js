function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}
array_diff([1,2,3,4,4,4,5],[4]);


