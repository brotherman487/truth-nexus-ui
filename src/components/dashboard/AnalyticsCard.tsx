
import { LineChart, Line, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ActivityIcon, TrendingUp } from "lucide-react";

const lineData = [
  { name: "Jan", value: 40 },
  { name: "Feb", value: 30 },
  { name: "Mar", value: 45 },
  { name: "Apr", value: 50 },
  { name: "May", value: 60 },
  { name: "Jun", value: 65 },
  { name: "Jul", value: 75 }
];

const donutData = [
  { name: "True", value: 65 },
  { name: "False", value: 25 },
  { name: "Misleading", value: 10 }
];

const COLORS = ["#00E0A0", "#FF5A87", "#FFD166"];

const AnalyticsCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card className="glass-card">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ActivityIcon size={18} className="text-primary" />
              <CardTitle className="text-md">Scan Activity</CardTitle>
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp size={14} className="mr-1 text-clarity-green" />
              <span>+24%</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[140px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#9B6EF3"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="glass-card">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ActivityIcon size={18} className="text-accent" />
              <CardTitle className="text-md">Truth Distribution</CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex items-center">
          <div className="h-[140px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={donutData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={60}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {donutData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-1 gap-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-clarity-green" />
              <span>True (65%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-clarity-red" />
              <span>False (25%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-clarity-yellow" />
              <span>Misleading (10%)</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsCard;
