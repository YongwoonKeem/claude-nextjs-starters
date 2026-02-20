import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative py-20 sm:py-32 lg:py-40 overflow-hidden">
      {/* 배경 그래디언트 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-secondary/20 to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          {/* 배지 */}
          <Badge variant="secondary" className="mx-auto">
            🚀 새로운 세대의 웹 개발
          </Badge>

          {/* 제목 */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
              모던한 웹 개발,
              <span className="block bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                지금 시작하세요
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Next.js 15, React 19, TailwindCSS v4를 기반으로 한 완전한 웹 스타터킷.
              프로덕션 준비가 된 컴포넌트와 최적화된 구조로 개발 시간을 단축하세요.
            </p>
          </div>

          {/* CTA 버튼 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/dashboard">
              <Button size="lg" className="group">
                대시보드 보기
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              <Github className="h-4 w-4 mr-2" />
              GitHub에서 보기
            </Button>
          </div>

          {/* 스크린샷 플레이스홀더 */}
          <div className="pt-12">
            <div className="rounded-lg border border-border bg-muted/30 p-8 sm:p-12 backdrop-blur-sm">
              <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent border border-border flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 mb-4">
                    <div className="h-6 w-6 bg-primary rounded" />
                  </div>
                  <p className="text-sm text-muted-foreground">대시보드 스크린샷</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
