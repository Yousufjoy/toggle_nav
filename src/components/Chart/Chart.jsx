import { LineChart, Line } from "recharts";

const Chart = () => {
  const mathMarksData = [
    { name: "Student 1", mathMarks: 85 },
    { name: "Student 2", mathMarks: 78 },
    { name: "Student 3", mathMarks: 92 },
    { name: "Student 4", mathMarks: 67 },
    { name: "Student 5", mathMarks: 72 },
    { name: "Student 6", mathMarks: 89 },
    { name: "Student 7", mathMarks: 95 },
    { name: "Student 8", mathMarks: 76 },
    { name: "Student 9", mathMarks: 81 },
    { name: "Student 10", mathMarks: 88 },
  ];
  return (
    <div>
      <LineChart width={500} height={400} data={mathMarksData}>
        <Line dataKey="mathMarks"></Line>
      </LineChart>
    </div>
  );
};

export default Chart;
