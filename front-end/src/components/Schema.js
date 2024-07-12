 export const schema = {
    subsection: "Gross Annual Sales For The Last Three Years",
    type: "array",
    items: [
      {
        datatype: "mixed",
        fields: [
          {
            name: "year1",
            label: "Year 1",
            required: false,
            type: "date",
          },
          {
            name: "year2",
            label: "Year 2",
            required: false,
            type: "date",
          },
          {
            name: "year3",
            label: "Year 3",
            required: false,
            type: "date",
          },
          {
            name: "inr1",
            label: "INR 1",
            required: false,
            type: "text",
          },
          {
            name: "inr2",
            label: "INR 2",
            required: false,
            type: "text",
          },
          {
            name: "inr3",
            label: "INR 3",
            required: false,
            type: "text",
          },
        ],
      },
    ],
  };
  