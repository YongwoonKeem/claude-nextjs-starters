"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SIDEBAR_ITEMS } from "@/lib/constants";
import { useSidebar } from "@/hooks/use-sidebar";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();
  const { isOpen, toggleSidebar, mounted } = useSidebar();

  if (!mounted) return null;

  return (
    <aside
      className={cn(
        "hidden lg:flex flex-col h-screen border-r border-border bg-background transition-all duration-300",
        isOpen ? "w-64" : "w-16"
      )}
    >
      {/* 헤더: 토글 버튼 */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-border">
        {isOpen && (
          <h1 className="text-lg font-bold text-foreground truncate">스타터킷</h1>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          title={isOpen ? "사이드바 접기" : "사이드바 펼치기"}
          className={cn(!isOpen && "mx-auto")}
        >
          <ChevronLeft
            className={cn(
              "w-4 h-4 transition-transform",
              !isOpen && "rotate-180"
            )}
          />
        </Button>
      </div>

      {/* 네비게이션 아이템 */}
      <nav className="flex-1 space-y-2 overflow-y-auto px-2 py-4">
        {SIDEBAR_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <TooltipProvider key={item.id} delayDuration={300}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={item.href}>
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      className={cn(
                        "w-full",
                        isOpen ? "justify-start" : "justify-center px-2"
                      )}
                      size={isOpen ? "default" : "icon"}
                    >
                      {item.icon}
                      {isOpen && (
                        <span className="ml-2 truncate">{item.label}</span>
                      )}
                    </Button>
                  </Link>
                </TooltipTrigger>
                {!isOpen && (
                  <TooltipContent side="right">{item.label}</TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </nav>

      {/* 하단: 사용자 정보 */}
      <div className="border-t border-border px-2 py-4 space-y-2">
        <div className={cn(
          "flex items-center gap-3 px-2 py-2 rounded-md hover:bg-muted transition-colors",
          !isOpen && "justify-center"
        )}>
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>KS</AvatarFallback>
          </Avatar>
          {isOpen && (
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-foreground truncate">
                김철수
              </p>
              <p className="text-xs text-muted-foreground truncate">
                kim@example.com
              </p>
            </div>
          )}
        </div>
        <Button
          variant="ghost"
          className={cn(
            "w-full",
            isOpen ? "justify-start" : "justify-center px-2"
          )}
          size={isOpen ? "default" : "icon"}
        >
          <LogOut className="w-4 h-4" />
          {isOpen && <span className="ml-2">로그아웃</span>}
        </Button>
      </div>
    </aside>
  );
}
