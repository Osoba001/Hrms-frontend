export const monthDiff = (d1, d2) => {
  let months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
};

export const identifyAccountType = (roleNumber) => {
  let role;
  switch (roleNumber) {
    case 0:
      role = "admin";
      break;
    case 2:
      role = "manager";
      break;
    case 6:
      role = "staff";
      break;
    case 9:
      role = "HR";
      break;
  }

  return role;
};

export const identifyAccountTypeFromString = (role) => {
  let roleNumber;
  switch (role) {
    case "admin":
      roleNumber = 0;
      break;
    case "manager":
      roleNumber = 2;
      break;
    case "staff":
    case "intern":
    case "corper":
      roleNumber = 6;
      break;
    case "HR":
      roleNumber = 9;
  }

  return roleNumber;
};
