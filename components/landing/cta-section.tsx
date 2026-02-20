"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ArrowRight, Mail } from "lucide-react";

export function CtaSection() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // 시뮬레이션: 실제로는 백엔드 API 호출
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setEmail("");
    setIsLoading(false);
    alert(`${email}로 뉴스레터 구독이 신청되었습니다!`);
  };

  return (
    <section className="py-20 sm:py-32 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="relative overflow-hidden p-8 sm:p-12 lg:p-16">
          {/* 배경 그래디언트 */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl" />
          </div>

          <div className="mx-auto max-w-2xl text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                지금 시작해보세요
              </h2>
              <p className="text-lg text-muted-foreground">
                최신 웹 기술을 활용한 프로젝트를 오늘 바로 시작할 수 있습니다.
              </p>
            </div>

            {/* 이메일 입력 폼 */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="이메일 주소 입력"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
                className="flex-1"
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="gap-2"
              >
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">
                  {isLoading ? "구독 중..." : "뉴스레터 구독"}
                </span>
                <span className="sm:hidden">
                  {isLoading ? "..." : "구독"}
                </span>
              </Button>
            </form>

            {/* 추가 정보 */}
            <p className="text-sm text-muted-foreground">
              스팸은 보내지 않습니다. 언제든지 구독을 취소할 수 있습니다.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
