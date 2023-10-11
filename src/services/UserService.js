import axios from "axios";
const GET_USER_DATA = "https://65029168a0f2c1f3faea93f5.mockapi.io/api/users";

export async function getusers() {
  const response = await axios.get(GET_USER_DATA);
  return response.data;
}

// Adding the domain in each user.
export function AddDomainInUser(users) {
  users.map((user) => {
    let index = user.email.indexOf("@") + 1;
    user.domain = user.email.substring(index);
  });
}

// Getting all domains
export function GetAllDomains(users) {
  AddDomainInUser(users);
  const total_domains = [];
  users.forEach((user) => {
    if (total_domains.indexOf(user.domain) === -1)
      total_domains.push(user.domain);
  });
  return total_domains;
}

// Getting the total number of users with same domain.
export function GetUsersAccrossDomains(users, totaldomains) {
  let arr = [];
  for (let i = 0; i < totaldomains.length; i++) {
    const newusers = users.filter((user) => user.domain === totaldomains[i]);
    arr.push(newusers);
  }
  return arr;
}
