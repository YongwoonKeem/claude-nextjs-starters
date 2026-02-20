"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileSidebar } from "./mobile-sidebar";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface HeaderProps {
  variant?: "landing" | "dashboard";
}

export function Header({ variant = "landing" }: HeaderProps) {
  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
      variant === "dashboard" && "lg:border-b-0"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* 로고 */}
          <div className="flex items-center gap-2">
            {variant === "dashboard" && <MobileSidebar />}
            <Link href="/" className="flex items-center gap-2 font-bold text-lg">
              <div className="h-8 w-8 rounded bg-primary text-primary-foreground flex items-center justify-center font-bold">
                SK
              </div>
              <span className="hidden sm:inline">{SITE_CONFIG.name}</span>
            </Link>
          </div>

          {/* 네비게이션 - 랜딩 페이지용 */}
          {variant === "landing" && (
            <nav className="hidden md:flex items-center gap-6">
              <a
                href="#features"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                기능
              </a>
              <a
                href="#pricing"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                가격
              </a>
              <a
                href="#docs"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                문서
              </a>
            </nav>
          )}

          {/* 우측 액션 버튼 */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            {variant === "landing" && (
              <>
                <Button variant="ghost" className="hidden sm:inline-flex">
                  로그인
                </Button>
                <Button className="hidden sm:inline-flex">시작하기</Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
