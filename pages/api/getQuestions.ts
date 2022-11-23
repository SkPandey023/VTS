import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { MathQuestion } from "../../typings";

const query = groq`
*[_type=="mathQuestion"]{question}
`;

type Data = {
  mathQuestion: MathQuestion[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
  // res: NextApiResponse<Data>
) {
  const mathQuestion: MathQuestion[] = await sanityClient.fetch(query);
  res.status(200).json({ mathQuestion });
}
