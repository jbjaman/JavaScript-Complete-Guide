const prices = [100, 200, 300];

const total = prices.reduce((sum, price) => sum + price, 0);

console.log(total);

// 2.

const employees = [
  { id: 1, name: "Arafat", department: "IT", salary: 50000, isActive: true },
  { id: 2, name: "Nusrat", department: "HR", salary: 40000, isActive: true },
  { id: 3, name: "Sakib", department: "IT", salary: 60000, isActive: false },
  { id: 4, name: "Tania", department: "IT", salary: 40000, isActive: true },
];

function createDepartmentCalculator(employees, departmentName) {
  // ১. Scope & Filter: আউটার ফাংশনের স্কোপে ফিল্টার করা ডেটা রাখা হলো
  const activeDeptEmployees = employees.filter((emp) => {
    return emp.department === departmentName && emp.isActive === true;
  });

  // ২. Closure: ভেতরের ফাংশনটি বাইরের 'activeDeptEmployees' ভেরিয়েবলটিকে মনে রাখবে
  return function (bonusPercent) {
    // ৩. Map: প্রতিটি কর্মচারীর মূল বেতনের সাথে বোনাস যোগ করে নতুন অ্যারে তৈরি
    const salariesWithBonus = activeDeptEmployees.map((emp) => {
      return emp.salary + emp.salary * bonusPercent;
    });

    // ৪. Reduce: নতুন বেতনের অ্যারে থেকে সব সংখ্যার যোগফল বের করা
    const totalSalary = salariesWithBonus.reduce((total, currentSalary) => {
      return total + currentSalary;
    }, 0); // এখানে 0 হলো total-এর প্রাথমিক মান (initial value)

    return totalSalary;
  };
}

// ফাংশন ব্যবহার:
const calculateITSalary = createDepartmentCalculator(employees, "IT");

console.log(calculateITSalary(0.1)); // ১০% বোনাসসহ আউটপুট: 99000
console.log(calculateITSalary(0.2)); // ২০% বোনাসসহ আউটপুট: 108000 (একই লিস্ট বারবার ফিল্টার না করেই কাজ হলো!)
