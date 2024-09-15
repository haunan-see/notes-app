import React from "react"

export const useNotes = () => {
  const data = [
    {
      title: "Work and study",
      data: [
        "Overview of basic computer networking knowledge",
        "How to calculate float multiplication and division in JavaScript?",
      ],
    },
    {
      title: "Life",
      data: ["Pan-fried chicken breast with vegetable salad"],
    },
    {
      title: "Health and wellness",
      data: ["Maintain sufficient daily water intake"],
    },
  ]

  return {
    data,
  }
}
