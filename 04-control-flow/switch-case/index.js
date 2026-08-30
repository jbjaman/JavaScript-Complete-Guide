// 1.

switch (status) {
  case "pending":
    console.log("Waiting");
    break;
  case "approved":
    console.log("Approved");
    break;
  case "rejected":
    console.log("Rejected");
    break;
  default:
    console.log("Unknown status");
}
