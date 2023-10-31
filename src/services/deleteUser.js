import axiosInstance from "../api/axiosInstance";

const deleteUser = async (id) => {
  try {
    await axiosInstance.delete(`/${id}`);
  } catch (err) {
    console.error(err);
  }
};

export default deleteUser;
