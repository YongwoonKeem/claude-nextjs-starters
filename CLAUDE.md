# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 언어 규칙

- 코드 주석, 커밋 메시지, 문서: **한국어**
- 변수명/함수명: **영어**

## 주요 명령어

```bash
npm run dev      # 개발 서버 실행 (http://localhost:3000)
npm run build    # 프로덕션 빌드
npm run lint     # ESLint 검사
```

테스트 프레임워크 없음. 빌드 성공 여부로 검증한다.

## 아키텍처 개요

**Next.js 15 App Router** 기반 스타터킷. 현재 2개 페이지만 존재:
- `/` → `app/page.tsx` (랜딩 페이지)
- `/dashboard` → `app/dashboard/page.tsx` (대시보드)

### 데이터 흐름 패턴

모든 정적 데이터와 설정은 `lib/constants.ts`에 집중 관리한다. 컴포넌트는 데이터를 직접 정의하지 않고 constants에서 import한다.

```
lib/constants.ts → 각 컴포넌트
  SITE_CONFIG          → app/layout.tsx (메타데이터)
  SIDEBAR_ITEMS_CONFIG → components/layout/sidebar.tsx, mobile-sidebar.tsx
  FEATURES_CONFIG      → components/landing/features-section.tsx
  STATS_DATA_CONFIG    → components/dashboard/stats-card.tsx
  RECENT_ACTIVITIES    → components/dashboard/recent-activity.tsx
```

### 아이콘 패턴

컴포넌트에 아이콘을 직접 import하지 않는다. constants에 `iconId: string`을 저장하고, `lib/icon-map.tsx`의 `getIcon(iconId)` / `getLargeIcon(iconId)`로 렌더링한다.

```typescript
// constants.ts
{ iconId: "dashboard" }  // 문자열 ID만 저장

// 컴포넌트에서
import { getIcon } from "@/lib/icon-map";
getIcon(item.iconId)  // lucide-react 컴포넌트로 변환
```

> 주의: `types/index.ts`의 `NavItem`, `Feature`, `StatsData` 타입에는 `icon: React.ReactNode`가 정의되어 있으나, 실제 constants 데이터는 `iconId: string`을 사용한다. 두 타입이 불일치하는 상태이므로 새 데이터 추가 시 constants 패턴을 따른다.

### 테마 / 다크모드

`app/layout.tsx`의 `ThemeProvider`(next-themes)가 전체를 감싼다. 클라이언트 컴포넌트에서 `useTheme()` 훅으로 접근. 하이드레이션 미스매치 방지를 위해 `mounted` 상태 체크 패턴을 사용한다 (`components/theme-toggle.tsx` 참고).

### 사이드바 상태

`hooks/use-sidebar.ts`가 사이드바 열림/닫힘 상태를 관리하며 `localStorage`에 영속화한다. 데스크탑(`sidebar.tsx`)과 모바일(`mobile-sidebar.tsx`) 사이드바가 분리되어 있다.

### Header variant

`components/layout/header.tsx`는 `variant="landing" | "dashboard"` prop으로 두 가지 모드로 동작한다. 랜딩 모드는 네비게이션 링크를 노출하고, 대시보드 모드는 모바일 햄버거 메뉴를 노출한다.

## 사이트 설정 변경

`lib/constants.ts`의 `SITE_CONFIG.baseUrl`은 현재 `"https://example.com"` 플레이스홀더다. 배포 전 실제 URL로 교체해야 한다.

## shadcn 컴포넌트 추가

```bash
npx shadcn add <component-name>
```

컴포넌트는 `components/ui/`에 생성된다. `components.json`에 shadcn 설정이 정의되어 있다.
