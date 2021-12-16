//aces deeply nested object properties without checking the property exists or not
const obj = {
     a:{
          b:{
               c:10
          }
     }
};
console.log(obj.a.b.c);