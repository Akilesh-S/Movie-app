import { URI } from "../constans/contants";

export const fetchData = async (title) => {
  const res = await fetch(`${URI}&s=${title}`);
  const data = await res.json();
  if (data.Response !== "False") return data.Search;
};
