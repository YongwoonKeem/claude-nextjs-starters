// 아이콘 ID를 실제 아이콘 컴포넌트로 변환하는 함수
import {
  LayoutDashboard,
  BarChart2,
  Users,
  FileText,
  Settings,
  Zap,
  Shield,
  Palette,
  Smartphone,
  Plug,
  TrendingUp,
  Moon,
} from "lucide-react";

interface IconProps {
  className?: string;
}

export function getIcon(iconId: string, props?: IconProps) {
  const iconProps = { ...props, className: props?.className || "w-5 h-5" };

  const iconMap: Record<string, React.ReactNode> = {
    dashboard: <LayoutDashboard {...iconProps} />,
    analytics: <BarChart2 {...iconProps} />,
    users: <Users {...iconProps} />,
    documents: <FileText {...iconProps} />,
    settings: <Settings {...iconProps} />,
    zap: <Zap {...iconProps} />,
    shield: <Shield {...iconProps} />,
    palette: <Palette {...iconProps} />,
    moon: <Moon {...iconProps} />,
    smartphone: <Smartphone {...iconProps} />,
    plug: <Plug {...iconProps} />,
    "trending-up": <TrendingUp {...iconProps} />,
  };

  return iconMap[iconId] || null;
}

// 큰 아이콘용 헬퍼 (8x8 사이즈)
export function getLargeIcon(iconId: string) {
  return getIcon(iconId, { className: "w-8 h-8" });
}
