function zipList (a, b) {
  const returnList = [];
  for (let i = 0; i < a.length; i++) {
    returnList.push(a[i]);
    returnList.push(b[i]);
  }
  return returnList;
}

function zipListTheSimpleWay (a, b) {
  const returnList = _.zip(a, b);
  return _.flatten(returnList);
}

const listA = ['a', 'b', 'c'];
const listB = [1, 2, 3];
console.log(zipList(listA, listB));
console.log(zipListTheSimpleWay(listA, listB));
