"use client";

import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { abuseReportData } from "@/data/cases";


export default function PieActiveArc() {
  const valueFormatter = (item) => `${item.value}%`;

  return (
    <div style={{ 
    alignItems: "center",
    width: "100%", 
    maxWidth: "1000px", 
    margin: "0 auto", 
    padding: "20px",
    backgroundColor: "#1A1A2E",
    border: "2px solid #2196F3", 
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(33, 150, 243, 0.3)", 
    }}>

            <h3 className="text-white mb-4 text-6xl sm:text-5xl lg:text-2xl lg:leading-normal font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
                    Reports
                </span>
            </h3>
      <PieChart
        series={[
          {
            data: abuseReportData,
            highlightScope: { fade: "global", highlight: "item", color: "white"},
            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
            valueFormatter,
          },
        ]}
        width={800}
        height={300}
        slotProps={{
          legend: {
            hidden: false,
            labelStyle: { fill: "#2196F3", fontSize: 14,}, 
        }}}
      />
    </div>
  );
}
