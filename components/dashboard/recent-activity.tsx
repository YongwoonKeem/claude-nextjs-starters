import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ActivityItemProps {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  avatar?: string;
}

interface RecentActivityProps {
  activities: ActivityItemProps[];
  loading?: boolean;
}

export function RecentActivity({ activities, loading }: RecentActivityProps) {
  return (
    <Card className="col-span-1 md:col-span-2">
      <div className="flex flex-col h-full">
        {/* 헤더 */}
        <div className="p-6 border-b border-border">
          <h3 className="text-lg font-semibold text-foreground">최근 활동</h3>
        </div>

        {/* 활동 목록 */}
        <ScrollArea className="flex-1">
          <div className="p-6 space-y-4">
            {loading ? (
              // Skeleton 로딩 상태
              <div className="space-y-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="space-y-2">
                    <div className="h-4 w-3/4 bg-muted rounded animate-pulse" />
                    <div className="h-3 w-1/2 bg-muted rounded animate-pulse" />
                  </div>
                ))}
              </div>
            ) : (
              activities.map((activity, index) => (
                <div key={activity.id}>
                  <div className="flex gap-4">
                    <Avatar className="h-10 w-10 flex-shrink-0">
                      <AvatarImage src={activity.avatar} />
                      <AvatarFallback>{activity.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground">
                        {activity.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {activity.description}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {activity.timestamp}
                      </p>
                    </div>
                  </div>
                  {index < activities.length - 1 && (
                    <Separator className="mt-4" />
                  )}
                </div>
              ))
            )}
          </div>
        </ScrollArea>
      </div>
    </Card>
  );
}
