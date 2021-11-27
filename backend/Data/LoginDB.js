const LoginUser = [
  {
    username: "Mohammed Mosa Alsenani",
    userId: "1010101010",
    birthDate: "01/01/1418",
    gender: "Male",
    bloodType: "A+",
    password: "123",
    //Immune محصن          Exposed مخالط         Infected مصاب
    healthStatus: "Immune",
    isAdmin: true,
  },
  {
    username: "Hamad Sarrar Algubari",
    userId: "1111111111",
    birthDate: "08/01/1417",
    gender: "Male",
    bloodType: "O-",
    password: "123",
    //Immune محصن          Exposed مخالط         Infected مصاب
    healthStatus: "Exposed",
    isAdmin: false,
  },
  {
    username: "Ibrahim Nashir Alyami",
    userId: "0000000000",
    birthDate: "01/11/1419",
    gender: "Male",
    bloodType: "AB",
    password: "123",
    //Immune محصن          Exposed مخالط         Infected مصاب
    healthStatus: "Infected",
    isAdmin: false,
  },
];

module.exports = { LoginUser };
