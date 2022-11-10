import { URI } from "../constans/contants";

export const fetchDetails = async (id) => {
  const res = await fetch(`${URI}&i=${id}`);
  const data = await res.json();
  if (data.Response !== "False") return data;
};
