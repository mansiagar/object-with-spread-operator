let profile = {
  name: "Mansi",
  age: 24,
  address: {
    city: "Tarana",
    zipcode: "456665",
  },
};

let updates = {
  ...profile,
  address: {
    ...profile.address,
    zipcode: "445566",
    country: "India",
  },
};

console.log(updates);
