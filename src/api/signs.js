import axios from "axios";

export const getSigns = async () => {
  const { data } = await axios.get(
    `https://65fe8406b2a18489b38625df.mockapi.io/signs`
  );
  return data;
};
