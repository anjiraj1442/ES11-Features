//It returns the right operand (rightExpression) if the left operand (leftExpression) is null or undefined.


const name = null ?? 'John';
console.log(name); // 'John'

//The nullish coalescing operator is short-circuited and cannot directly combine with the AND or OR logical operator.
const result = (null || undefined) ?? 'OK'; 
console.log(result); // 'OK'