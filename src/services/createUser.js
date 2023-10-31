import axiosInstance from "../api/axiosInstance";

const createUser = async (data) => {
  try {
    await axiosInstance.post("/", data);
  } catch (err) {
    console.error(err);
  }
};

export default createUser;
