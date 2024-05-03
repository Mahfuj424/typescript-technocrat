// Reference types ----> Object

const user: {
  readonly company: "XYZ"; // type ---> literal types
  firstName: String;
  middleName: String;
  lastName?: String; // optional type
} = {
  firstName: "Mahfuj",
  middleName: "Alam",
  company: "XYZ", // Assined same type character check uppercase or lowercase
};

// user.company = '' ----> // do not assined without type