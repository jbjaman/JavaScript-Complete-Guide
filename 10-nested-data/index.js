// 1. Array -> Array

const numbers = [
  [1, 2, 3],
  [6, 5, 4],
  [7, 8, 9],
];

// 2. data access

numbers[0];
numbers[0][0];

// 3. Objects -> Objects

const user = {
  name: "Jubayer",

  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
};

// 4. data access

user.address.city;

// 5. Array -> Object

const users = [
  {
    id: 1,
    name: "Jubayer",
    role: "admin",
  },
  {
    id: 2,
    name: "Rahim",
    role: "user",
  },
  {
    id: 3,
    name: "Karim",
    role: "user",
  },
];

// 6. Data access

users[0].name;

// 7. Objects -> Array

const user98 = {
  name: "Jubayer",

  skills: ["JavaScript", "React", "Node.js"],
};

// 8. Data Access

user98.skills[2];

// 9. Objects -> Array -> Objects

const user45 = {
  id: 101,
  name: "Jubayer",

  projects: [
    {
      id: 1,
      name: "Authentication System",
      status: "completed",
    },
    {
      id: 2,
      name: "ERP System",
      status: "in-progress",
    },
  ],
};

// 10. data access

user.projects[1].status;

// 11. Nested loop

const departments = [
  ["Jubayer", "Rahim"],
  ["Karim", "Hasan"],
];

for (const department of departments) {
  for (const employee of department) {
    console.log(employee);
  }
}

// 12. Nested Array + Object iterate

const departments99 = [
  {
    name: "Engineering",
    employees: [
      {
        name: "Jubayer",
        role: "Developer",
      },
      {
        name: "Rahim",
        role: "Developer",
      },
    ],
  },

  {
    name: "Design",
    employees: [
      {
        name: "Karim",
        role: "Designer",
      },
    ],
  },
];

for (const department of departments99) {
  for (const employee of department) {
    console.log(employee.name);
  }
}
