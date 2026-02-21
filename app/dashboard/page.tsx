"use client";

import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { StatsCard } from "@/components/dashboard/stats-card";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { STATS_DATA_CONFIG, RECENT_ACTIVITIES } from "@/lib/constants";
import { getIcon } from "@/lib/icon-map";
import { useState } from "react";

export default function DashboardPage() {
  const [loading] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* 데스크탑 사이드바 */}
      <Sidebar />

      {/* 메인 콘텐츠 */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header variant="dashboard" />

        {/* 페이지 콘텐츠 */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-6 md:p-8 lg:p-10">
            {/* 페이지 헤더 */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground">대시보드</h1>
              <p className="text-sm text-muted-foreground mt-1">
                시스템 상태 및 주요 지표를 한눈에 확인하세요
              </p>
            </div>

            {/* 통계 카드 - 4개 그리드 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {STATS_DATA_CONFIG.map((stat) => (
                <StatsCard
                  key={stat.id}
                  title={stat.title}
                  value={stat.value}
                  change={stat.change}
                  icon={getIcon(stat.iconId, { className: "w-5 h-5" })}
                />
              ))}
            </div>

            {/* 하단 2열: 차트 플레이스홀더 + 최근 활동 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* 차트 영역 (왼쪽) */}
              <div className="lg:col-span-1">
                <div className="h-96 rounded-lg border border-border bg-muted/30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground">
                      📊 차트 플레이스홀더
                    </div>
                  </div>
                </div>
              </div>

              {/* 최근 활동 (오른쪽) */}
              <div className="lg:col-span-2">
                <RecentActivity activities={RECENT_ACTIVITIES} loading={loading} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
