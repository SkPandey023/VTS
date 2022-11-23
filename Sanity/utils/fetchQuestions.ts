import { MathQuestion } from "./../../typings.d";

export const fetchQuestions = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getQuestions`
  );

  const data = await res.json();
  const mathQuestion: MathQuestion[] = data.mathQuestion;
  return mathQuestion;
};
