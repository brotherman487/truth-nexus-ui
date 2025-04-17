
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const monthData = [
  { name: "Jan", scans: 15 },
  { name: "Feb", scans: 22 },
  { name: "Mar", scans: 18 },
  { name: "Apr", scans: 31 },
  { name: "May", scans: 25 },
  { name: "Jun", scans: 42 },
  { name: "Jul", scans: 38 }
];

const ContributionHistory = () => {
  const [contributionData] = useState(monthData);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-dark p-2 text-xs border border-border">
          <p>{`${label}: ${payload[0].value} scans`}</p>
        </div>
      );
    }
  
    return null;
  };

  return (
    <Card className="glass-card mb-6">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle>Contribution History</CardTitle>
          <Badge variant="outline" className="bg-primary/10 text-primary">
            2025
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="h-[220px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={contributionData}>
              <XAxis 
                dataKey="name" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#888' }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#888' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="scans" 
                fill="url(#colorGradient)" 
                radius={[4, 4, 0, 0]} 
              />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#9B6EF3" />
                  <stop offset="100%" stopColor="#00C6FF" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContributionHistory;
