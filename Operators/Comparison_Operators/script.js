// Comparison Operators

// Equal To ==
{
  let a = 6;
  let b = 7;
  let c = 6;
  let d = "7";
  console.log(a == b); // 6 == 7 = false
  console.log(a == c); // 6 == 6 = true
  console.log(b == d); // 7 == "7" = true
}

// Equal Value & Equal Data Type ===
{
  let a = 6;
  let b = 7;
  let c = 6;
  let d = "7";
  console.log(a === b); // 6 === 7 = false
  console.log(a === c); // 6 === 6 = true
  console.log(b === d); // 7 === "7" = false
}

// Not Equal !=
{
  let a = 5;
  let b = 8;
  let c = 5;
  let d = "8";
  console.log(a != b); // 5 != 8 = true
  console.log(a != c); // 5 != 5 = false
  console.log(b != d); // 8 != "8" = false
}

// Not Equal Value & Not Equal Data Type !==
{
  let a = 5;
  let b = 8;
  let c = 5;
  let d = "8";
  console.log(a !== b); // 5 !== 8 = true
  console.log(a !== c); // 5 !== 5 = false
  console.log(b !== d); // 8 != "8" == false
}

// Greater Than  > | Greater Than or Equal To >=
{
  let a = 4;
  let b = 6;
  let c = 8;
  let d = 8;
  console.log(a > b); // 4 > 6 = false
  console.log(c > b); // 8 > 6 = true
  console.log(c >= d); // 8 >= 8 = true
  console.log(a >= b); // 4 >= 8 = true
}

//  Less than < |  Less Than or Equal To <=
{
    let a = 4;
    let b = 6;
    let c = 8;
    let d = 8;
    console.log(a < b); // 4 < 6 = true
    console.log(c < b); // 8 < 6 = false
    console.log(c <= d); // 8 <= 8 = true
    console.log(c <= b); // 8 <= 6 = false
  }
