import type { NextApiRequest, NextApiResponse } from "next";

const nasaAPIBase = "https://api.nasa.gov/planetary/apod";

const apodAPI = (query: NextApiRequest["query"]) => {
  const res = fetch(
    `${nasaAPIBase}?${new URLSearchParams({
      api_key: process.env.NASA_API_KEY!,
      ...query,
    })}`
  );
  return res;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const query = req.query;
  const { date, count } = query;
  apodAPI({ date, count })
    .then((response) => {
      res.status(200).send(response.body);
    })
    .catch((error) => {
      res.status(404).send(error);
    });
}
