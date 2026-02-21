// // Map
// console.log("===========Map ===========");
// let a=[1,2,3,4,5];
// let map=a.map((a)=> a*a)
//     console.log(map);



// // Filter
// console.log("===========Filter ===========");
// let b=[1,2,3,4,5];
// let even=b.filter((num)=> num%2===0)
//     console.log(even);



// // Reduce
// console.log("===========Reduce ===========");
// let c=[1,2,3,4,5];
// let sum=c.reduce((acc , curr )=> acc+curr,0);
//     console.log(sum);



// // ForEach
// console.log("===========ForEach ===========");

// let d=[1,2,3,4,5];
// d.forEach((nums)=> console.log(nums*2));
    


// // Find
// console.log("===========Find ===========");

// let e=[1,2,3,4,5];
// let feven=e.find((nums)=> nums%2===0);
// console.log(feven);



// // Some
// console.log("===========Some ===========");

// let f=[1,2,3,4,5];
// let hasneg=f.some((nums)=> nums<0);
// console.log(hasneg);


// // Every
// console.log("===========Every ===========");

// let g=[1,2,3,4,5];
// let allpos=g.every((nums)=> nums>0);
// console.log(allpos);



// // Fill
// console.log("===========Fill ===========");

// let h=[1,2,3,4,5];
// h.fill(3,1,4)
// console.log(h);


// Concat
// console.log("===========Concat ===========");

// let a=[1,2];
// let b=[3,4]
// let c=a.concat(b)
// console.log(c);


// Fill
//  console.log("===========Fill ===========");

//  let h=[1,2,3,4,5];
//  h.copyWithin(0,3)
//  console.log(h);


 // Entries
 console.log("===========Entries ===========");
let h=[1,2,3,4,5];
for (let [index, value] of h.entries()) {
  console.log(index, value);
}