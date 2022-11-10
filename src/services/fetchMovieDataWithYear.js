import { URI } from "../constans/contants";

export const fetchDataWithYear = async (title, year) => {
  const res = await fetch(`${URI}&s=${title}&y=${year}`);
  const data = await res.json();
  if (data.Response !== "False") return data.Search;
};
