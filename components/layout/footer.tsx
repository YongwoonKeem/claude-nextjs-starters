import { Separator } from "@/components/ui/separator";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-4">
          {/* 브랜드 섹션 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{SITE_CONFIG.name}</h3>
            <p className="text-sm text-muted-foreground">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* 제품 링크 */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">제품</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#features"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  기능
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  가격
                </a>
              </li>
              <li>
                <a
                  href="#docs"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  문서
                </a>
              </li>
            </ul>
          </div>

          {/* 회사 링크 */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">회사</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  소개
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  블로그
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  채용
                </a>
              </li>
            </ul>
          </div>

          {/* 법률 링크 */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">법률</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#privacy"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  개인정보
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  이용약관
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* 하단 저작권 */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <a href="#twitter" className="hover:text-foreground transition-colors">
              트위터
            </a>
            <a href="#github" className="hover:text-foreground transition-colors">
              깃허브
            </a>
            <a href="#discord" className="hover:text-foreground transition-colors">
              디스코드
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
