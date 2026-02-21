import { SiteConfig } from "@/types";

// 사이트 설정
export const SITE_CONFIG: SiteConfig = {
  name: "모던 스타터킷",
  description: "Next.js 15 + React 19 + TailwindCSS v4 기반의 실무형 웹 스타터킷",
  baseUrl: "https://example.com",
};

// 대시보드 사이드바 아이템 (아이콘 ID만 저장)
export const SIDEBAR_ITEMS_CONFIG = [
  {
    id: "dashboard",
    label: "대시보드",
    href: "/dashboard",
    iconId: "dashboard",
  },
  {
    id: "analytics",
    label: "분석",
    href: "/dashboard/analytics",
    iconId: "analytics",
  },
  {
    id: "users",
    label: "사용자",
    href: "/dashboard/users",
    iconId: "users",
  },
  {
    id: "documents",
    label: "문서",
    href: "/dashboard/documents",
    iconId: "documents",
  },
  {
    id: "settings",
    label: "설정",
    href: "/dashboard/settings",
    iconId: "settings",
  },
];

// 랜딩 페이지 피처 (아이콘 ID만 저장)
export const FEATURES_CONFIG = [
  {
    id: "performance",
    title: "⚡ 번개 같은 속도",
    description: "Next.js 최적화와 자동 코드 스플리팅으로 최고의 성능을 제공합니다.",
    iconId: "zap",
  },
  {
    id: "type-safe",
    title: "🛡️ 타입 안전성",
    description: "TypeScript와 함께 런타임 오류를 미리 방지하고 개발 경험을 향상시킵니다.",
    iconId: "shield",
  },
  {
    id: "components",
    title: "🎨 완성된 UI 컴포넌트",
    description: "shadcn/ui와 TailwindCSS로 구성된 즉시 사용 가능한 컴포넌트 라이브러리입니다.",
    iconId: "palette",
  },
  {
    id: "dark-mode",
    title: "🌓 다크모드 지원",
    description: "next-themes를 활용한 자동 다크모드 전환 및 테마 영속화 기능을 제공합니다.",
    iconId: "moon",
  },
  {
    id: "responsive",
    title: "📱 완벽한 반응형",
    description: "모든 기기에서 완벽하게 작동하는 모바일 우선 디자인 패턴을 적용했습니다.",
    iconId: "smartphone",
  },
  {
    id: "extensible",
    title: "🔧 확장 가능한 구조",
    description: "모듈식 구조로 설계되어 새로운 기능 추가와 커스터마이징이 용이합니다.",
    iconId: "plug",
  },
];

// 더미 통계 데이터 (아이콘 ID만 저장)
export const STATS_DATA_CONFIG = [
  {
    id: "revenue",
    title: "총 매출",
    value: "$12,450",
    change: 12.5,
    iconId: "trending-up",
  },
  {
    id: "users",
    title: "활성 사용자",
    value: "2,342",
    change: 8.2,
    iconId: "users",
  },
  {
    id: "conversion",
    title: "전환율",
    value: "4.2%",
    change: -2.1,
    iconId: "trending-up",
  },
  {
    id: "engagement",
    title: "참여도",
    value: "68%",
    change: 5.8,
    iconId: "trending-up",
  },
];

// 더미 활동 데이터
export const RECENT_ACTIVITIES = [
  {
    id: "1",
    title: "새 사용자 가입",
    description: "김철수님이 새로 가입했습니다.",
    timestamp: "2분 전",
    avatar: "K",
  },
  {
    id: "2",
    title: "판매 완료",
    description: "프리미엄 플랜 구독 1건이 완료되었습니다.",
    timestamp: "15분 전",
    avatar: "S",
  },
  {
    id: "3",
    title: "피드백 수신",
    description: "새로운 기능 제안 3건이 접수되었습니다.",
    timestamp: "1시간 전",
    avatar: "F",
  },
  {
    id: "4",
    title: "시스템 업데이트",
    description: "보안 패치 v2.1.0이 배포되었습니다.",
    timestamp: "3시간 전",
    avatar: "U",
  },
  {
    id: "5",
    title: "분석 데이터 생성",
    description: "주간 분석 리포트가 생성되었습니다.",
    timestamp: "어제",
    avatar: "A",
  },
];
