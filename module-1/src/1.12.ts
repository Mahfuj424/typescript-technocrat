// nullable type & unknown type & never type

const searchName = (value: string | null) => {
  if (value) {
    console.log("searching");
  } else {
    console.log("no found any name");
  }
};
// searchName(null)

// unknown
const checkUnknownMethod = (value: unknown) => {
  if (typeof value === "number") {
    const convertedSpeed = (value * 1000) / 3600;
    console.log(`the speed is ${convertedSpeed} ms^-1`);
  } else if (typeof value === "string") {
    const num = value.split(" ")[0];
    const result = (parseFloat(num) * 1000) / 3600;
    console.log(`the speed is ${result} ms^-1`);
  } else {
    console.log("your input is wrong!  please provide number or string number");
  }
};

checkUnknownMethod(null);

// never type
const thorwError = (msg: string): never => {
  throw new Error(msg);
};

thorwError("this is a never type error");
