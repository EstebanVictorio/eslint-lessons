const sum = (...z) => z.reduce((prev, curr) => prev + curr);
/*eslint no-console:["error",{allow:["warn","error"]}]*/
console.warn(sum(1, 2, 3, 4));