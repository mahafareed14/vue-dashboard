import axios from "axios";
const GET_USER_DATA = "https://65029168a0f2c1f3faea93f5.mockapi.io/api/users";

export async function getusers() {
  const response = await axios.get(GET_USER_DATA);
  return response.data;
}
