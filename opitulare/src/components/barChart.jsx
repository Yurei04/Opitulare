import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { abuseReportData } from '@/data/yearly';

export default function AbuseReportChart() {
  return (
    <div style={{ 
      width: "5000", 
      maxWidth: "5000", 
      margin: "0 auto", 
      padding: "0 auto",
      alignContent: "center",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#1A1A2E",
      border: "2px solid #2196F3", 
      borderRadius: "8px",
      boxShadow: "0px 4px 8px rgba(33, 150, 243, 0.3)", 
      }}>

      <h3 className="text-white mb-4 text-6xl sm:text-5xl lg:text-2xl lg:leading-normal font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
              Yearly Cases
          </span>
      </h3>

      <BarChart
      dataset={abuseReportData}
      series={[
        { dataKey: 'reportedPhysical', stack: 'Physical', label: 'Reported Physical', color: '#FF5733' },
        { dataKey: 'unreportedPhysical', stack: 'Physical', label: 'Unreported Physical', color: '#C70039' },
        { dataKey: 'reportedEmotional', stack: 'Emotional', label: 'Reported Emotional', color: '#FFC300' },
        { dataKey: 'unreportedEmotional', stack: 'Emotional', label: 'Unreported Emotional', color: '#FF5733' },
        { dataKey: 'reportedNeglect', stack: 'Neglect', label: 'Reported Neglect', color: '#36A2EB' },
        { dataKey: 'unreportedNeglect', stack: 'Neglect', label: 'Unreported Neglect', color: '#1E88E5' },
        { dataKey: 'reportedSexual', stack: 'Sexual', label: 'Reported Sexual', color: '#8E44AD' },
        { dataKey: 'unreportedSexual', stack: 'Sexual', label: 'Unreported Sexual', color: '#6A1B9A' },
      ]}
      xAxis={[
        {
          scaleType: 'band',
          dataKey: 'year',
          tickLabelStyle: { fill: '#2196F3', fontSize: 14, fontWeight: 'bold' },
        },
      ]}
      yAxis={[
        {
          tickLabelStyle: { fill: '#2196F3', fontSize: 14, fontWeight: 'bold' }, 
        },
      ]}
      width={950}
      height={450}
      slotProps={{
        legend: {
          hidden: false, 
          labelStyle: { fill: '#2196F3', fontSize: 14, fontWeight: 'bold' }, 
        },
      }}
    />
    </div>
    
  );
}
