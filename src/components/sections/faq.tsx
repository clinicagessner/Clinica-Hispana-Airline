import { getTranslations } from "next-intl/server";
import { Question } from "@phosphor-icons/react/dist/ssr";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/constants";
import { JsonLdFAQ } from "@/components/seo/json-ld";

export async function FAQ() {
  const t = await getTranslations();

  // Prepare FAQ data for JSON-LD
  const faqData = FAQ_ITEMS.map((item) => ({
    question: t(item.question),
    answer: t(item.answer),
  }));

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center size-16 rounded-full bg-blue-light mb-6">
            <Question className="size-8 text-blue-primary" weight="duotone" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-dark mb-4">
            {t("faq.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("faq.subtitle")}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="bg-blue-bg border-0 rounded-xl px-6 data-[state=open]:bg-blue-light"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-dark hover:text-blue-primary hover:no-underline py-5 [&[data-state=open]]:text-blue-primary">
                  <span className="flex items-start gap-3">
                    <span className="text-blue-primary font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {t(item.question)}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 pl-9">
                  {t(item.answer)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* JSON-LD for FAQ */}
      <JsonLdFAQ questions={faqData} />
    </section>
  );
}
