export type ReportStatus = "Pending" | "Reviewed" | "Resolved" | "Dismissed";
export type ReportSeverity = "Low" | "Medium" | "High";
export type ReportType = "Product" | "Review" | "Message";

export type ReportIconKey = "product" | "review" | "message";

export type ReportItem = {
  id: string;
  title: string;
  type: ReportType;
  iconKey: ReportIconKey;  // ✅ add this
  reportedBy: string;
  age: string; // e.g. "366 days ago"
  reasonTitle: string; // e.g. "Copyright Infringement"
  description: string;
  severity: ReportSeverity;
  status: ReportStatus;
};
export type StatsTone = "blue" | "orange" | "indigo" | "green" | "gray";
export type StatsIconKey = "flag" | "clock" | "eye" | "check" | "x";

export type StatsItem = {
  key: string;
  label: string;
  value: number;
  tone: StatsTone;
  iconKey: StatsIconKey; 
  
};



export const statsMock: StatsItem[] = [
  { key: "total", label: "Total Reports", value: 342, tone: "blue", iconKey: "flag" },
  { key: "pending", label: "Pending", value: 23, tone: "orange", iconKey: "clock" },
  { key: "reviewed", label: "Reviewed", value: 87, tone: "indigo", iconKey: "eye" },
  { key: "resolved", label: "Resolved", value: 198, tone: "green", iconKey: "check" },
  { key: "dismissed", label: "Dismissed", value: 34, tone: "gray", iconKey: "x" },
];

export const reportsMock: ReportItem[] = [
  {
    id: "r1",
    title: "E-commerce Website Template",
    type: "Product",
    iconKey : "product",
    reportedBy: "john.doe@example.com",
    age: "366 days ago",
    reasonTitle: "Copyright Infringement",
    description: "This template uses copyrighted images without permission.",
    severity: "High",
    status: "Pending",
  },
  {
    id: "r2",
    title: 'Review on "Mobile App Design"',
    type: "Review",
    iconKey: "review",
    reportedBy: "emma.davis@example.com",
    age: "367 days ago",
    reasonTitle: "Fake Review",
    description: "This review appears to be fake and written by a competitor.",
    severity: "Medium",
    status: "Reviewed",
  },
  {
    id: "r3",
    title: "Message from user #8472",
    type: "Message",
    iconKey : "message",
    reportedBy: "alex.kim@example.com",
    age: "368 days ago",
    reasonTitle: "Spam",
    description: "User is sending unsolicited promotional messages.",
    severity: "Low",
    status: "Dismissed",
  },
];
