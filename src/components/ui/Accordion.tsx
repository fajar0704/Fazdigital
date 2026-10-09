"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export function AccordionItem({ question, answer, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="border border-brand-border rounded-xl overflow-hidden glass-card mb-4">
      <button
        className="w-full px-6 py-4 flex items-center justify-between bg-brand-secondary hover:bg-brand-secondary transition-colors focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-left text-brand-foreground text-base md:text-lg pr-4">{question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-brand-accent-cyan transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180" : ""}`} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="p-6 text-brand-muted border-t border-brand-border/50">
          {answer}
        </div>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: { id: string; question: string; answer: string }[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full max-w-3xl mx-auto">
      {items.map((item, index) => (
        <AccordionItem
          key={item.id}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
