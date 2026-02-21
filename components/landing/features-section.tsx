import { Card } from "@/components/ui/card";
import { FEATURES_CONFIG } from "@/lib/constants";
import { getLargeIcon } from "@/lib/icon-map";

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-32 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            강력한 기능들
          </h2>
          <p className="text-lg text-muted-foreground">
            실무 개발에 필요한 모든 것을 포함한 스타터킷
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES_CONFIG.map((feature) => (
            <Card key={feature.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                  {getLargeIcon(feature.iconId)}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
