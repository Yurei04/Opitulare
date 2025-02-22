{
  // DATA FROM NSCA
/*"https://www.nationalchildrensalliance.org/media-room/national-statistics-on-child-abuse/ */ 

}


export const abuseReportData = [
  { id: 0, label: "Neglect", value: 74, color: "#1976D2" }, 
  { id: 1, label: "Physical Abuse", value: 17, color: "#D32F2F" }, 
  { id: 2, label: "Sexual Abuse", value: 11, color: "#F57C00" }, 
  { id: 3, label: "Sex Trafficking", value: 0.2, color: "#7B1FA2" },
];

export const valueFormatter = (item) => `${item.value}%`;

