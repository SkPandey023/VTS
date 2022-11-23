export default {
  name: "mathQuestion",
  title: "Question",
  type: "document",
  fields: [
    {
      name: "question", //TYPE FOR BACKEND
      title: "MathQuestion",
      type: "string",
    },
    {
      name: "questionImage",
      title: "Questioimage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "a",
      title: "A",
      type: "string",
    },
    {
      name: "b",
      title: "B",
      type: "string",
    },
    {
      name: "c",
      title: "C",
      type: "string",
    },
    {
      name: "d",
      title: "D",
      type: "string",
    },
  ],
};
