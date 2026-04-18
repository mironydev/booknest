import React, { useContext, useState, useEffect } from "react";
import {
  Bar,
  BarChart,
  Label,
  LabelList,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { BookContext } from "../../context/BookProvider";

const PagesToRead = () => {
  const { storedBooks } = useContext(BookContext);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="container mx-auto bg-base-300 rounded-xl sm:p-3 md:p-5 mt-10 text-xs">
      <BarChart
        className="mx-auto select-none"
        style={{
          width: "100%",
          maxWidth: "",
          maxHeight: "400px",
          aspectRatio: 1.618,
        }}
        responsive
        data={storedBooks}
        margin={
          isMobile
            ? { top: 30, right: 10, bottom: 30, left: 20 }
            : { top: 10, right: 10, bottom: 30, left: 40 }
        }
      >
        <XAxis
          dataKey="bookName"
          interval={0}
          angle={isMobile ? -45 : 0}
          textAnchor={isMobile ? "end" : "middle"}
          height={isMobile ? 80 : undefined}
          tick={
            isMobile
              ? { fontSize: 8 }
              : (props) => {
                  const { x, y, payload } = props;
                  const words = payload.value.split(" ");
                  const lines = [];
                  for (let i = 0; i < words.length; i += 2) {
                    lines.push(words.slice(i, i + 2).join(" "));
                  }
                  return (
                    <text
                      x={x}
                      y={y + 20}
                      textAnchor="middle"
                      style={{ fontSize: "11px", fill: "#363636" }}
                    >
                      {lines.map((line, i) => (
                        <tspan key={i} x={x} dy={i === 0 ? 0 : 12}>
                          {line}
                        </tspan>
                      ))}
                    </text>
                  );
                }
          }
        />
        <YAxis width={35} tick={{ fontSize: 10 }}>
          <Label
            value="Total Pages"
            position="left"
            angle={-90}
            style={{ textAnchor: "middle", fontSize: "11px" }}
          />
        </YAxis>
        <Bar dataKey="totalPages" fill="#87CCAD">
          <LabelList position="top" dataKey="totalPages" fontSize={11} />
        </Bar>
      </BarChart>
    </div>
  );
};

export default PagesToRead;
