"use client";

import { useState, useEffect } from "react";

const SIDEBAR_STATE_KEY = "sidebar-open";

export function useSidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // 클라이언트 마운트 후 localStorage에서 상태 복원
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem(SIDEBAR_STATE_KEY);
    if (saved !== null) {
      setIsOpen(JSON.parse(saved));
    }
  }, []);

  // isOpen 변경 시 localStorage에 저장
  const toggleSidebar = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    if (mounted) {
      localStorage.setItem(SIDEBAR_STATE_KEY, JSON.stringify(newState));
    }
  };

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const closeMobileSidebar = () => {
    setIsMobileOpen(false);
  };

  return {
    isOpen,
    isMobileOpen,
    mounted,
    toggleSidebar,
    toggleMobileSidebar,
    closeMobileSidebar,
  };
}
