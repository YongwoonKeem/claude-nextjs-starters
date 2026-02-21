"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { SIDEBAR_ITEMS_CONFIG } from "@/lib/constants";
import { getIcon } from "@/lib/icon-map";
import { useSidebar } from "@/hooks/use-sidebar";
import { cn } from "@/lib/utils";

export function MobileSidebar() {
  const pathname = usePathname();
  const { isMobileOpen, toggleMobileSidebar, closeMobileSidebar, mounted } =
    useSidebar();

  if (!mounted) return null;

  return (
    <Sheet open={isMobileOpen} onOpenChange={toggleMobileSidebar}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="w-5 h-5" />
          <span className="sr-only">메뉴 열기</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 px-0">
        <div className="space-y-4">
          {/* 헤더 */}
          <div className="px-4 py-2">
            <h1 className="text-lg font-bold">스타터킷</h1>
          </div>

          <Separator />

          {/* 네비게이션 아이템 */}
          <nav className="space-y-1 px-2">
            {SIDEBAR_ITEMS_CONFIG.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.id} href={item.href} onClick={closeMobileSidebar}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className="w-full justify-start"
                  >
                    {getIcon(item.iconId, { className: "w-5 h-5" })}
                    <span className="ml-2">{item.label}</span>
                  </Button>
                </Link>
              );
            })}
          </nav>

          <Separator />

          {/* 사용자 정보 */}
          <div className="px-4 space-y-3">
            <div className="flex items-center gap-3 py-2">
              <Avatar className="h-10 w-10">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>KS</AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-foreground truncate">
                  김철수
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  kim@example.com
                </p>
              </div>
            </div>
            <Button variant="outline" className="w-full justify-start">
              <LogOut className="w-4 h-4" />
              <span className="ml-2">로그아웃</span>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
