// 네비게이션 아이템 타입
export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
  disabled?: boolean;
}

// 피처 카드 타입
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

// 통계 데이터 타입
export interface StatsData {
  id: string;
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
}

// 활동 항목 타입
export interface ActivityItem {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  avatar?: string;
}

// 사이트 설정 타입
export interface SiteConfig {
  name: string;
  description: string;
  baseUrl: string;
}
