import axios from "axios";

const url = "https://covidnigeria.herokuapp.com/api";

export const fetchData = async () => {
  try {
    const {
      data: {
        data: { states },
      },
    } = await axios.get(url);
    // console.log(result);
    return { states };
  } catch (error) {}
  // setData(result.data.data.states);
  // setData(result.data);
};
