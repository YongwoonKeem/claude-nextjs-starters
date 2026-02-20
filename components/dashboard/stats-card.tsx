import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
}

export function StatsCard({ title, value, change, icon }: StatsCardProps) {
  const isPositive = change >= 0;

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between space-y-2">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <div className="flex items-end gap-2">
            <p className="text-3xl font-bold text-foreground">{value}</p>
            <div
              className={cn(
                "flex items-center gap-1 text-sm font-semibold",
                isPositive ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
              )}
            >
              {isPositive ? (
                <TrendingUp className="h-4 w-4" />
              ) : (
                <TrendingDown className="h-4 w-4" />
              )}
              {Math.abs(change)}%
            </div>
          </div>
        </div>
        <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
      </div>
    </Card>
  );
}
