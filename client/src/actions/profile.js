import axios from "axios";

export const getProfile = () => async (dispatch) => {
  const res = await axios.get("/api/");
};
