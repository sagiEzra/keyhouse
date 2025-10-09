"use client"

import type React from "react"

// ============================================================================
// Type Definitions
// ============================================================================

export interface ChecklistItem {
  text: string
}

export interface NumberedStep {
  text: string
}

export interface Feature {
  title: string
  description: string
}

export interface HighlightCard {
  variant: "dark" | "gold" | "light" | "accent"
  title: string
  content: string
}

// ============================================================================
// Component 1: Checklist Content
// ============================================================================

interface ChecklistContentProps {
  items: ChecklistItem[]
  className?: string
}

export function ChecklistContent({ items, className = "" }: ChecklistContentProps) {
  return (
    <ul className={`mt-6 space-y-3 text-lg font-bold ${className}`} style={{ color: "rgba(25,39,74,0.85)" }}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className="mr-2 text-xl" style={{ color: "#c79d2a" }}>
            ✓
          </span>
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  )
}

// ============================================================================
// Component 2: Numbered Steps Card
// ============================================================================

interface NumberedStepsCardProps {
  title: string
  steps: NumberedStep[]
  className?: string
}

export function NumberedStepsCard({ title, steps, className = "" }: NumberedStepsCardProps) {
  return (
    <div
      className={`mt-6 rounded-2xl p-8 border-r-4 ${className}`}
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, #fafafa 100%)",
        borderColor: "#c79d2a",
        boxShadow: "0 10px 30px rgba(25,39,74,0.08), inset 0 1px 0 rgba(255,255,255,0.6)"
      }}
    >
      <h3 className="mb-4 text-2xl font-serif font-bold" style={{ color: "rgba(25,39,74,0.97)" }}>
        {title}
      </h3>
      <ul className="space-y-3 text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.85)" }}>
        {steps.map((step, index) => (
          <li key={index} className="flex items-start">
            <span className="ml-2 font-bold" style={{ color: "#c79d2a" }}>
              {index + 1}.
            </span>
            <span>{step.text}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

// ============================================================================
// Component 3: Feature Grid
// ============================================================================

interface FeatureGridProps {
  features: Feature[]
  columns?: 2 | 3 | 4
  className?: string
}

export function FeatureGrid({ features, columns = 2, className = "" }: FeatureGridProps) {
  const gridClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4"
  }[columns]

  return (
    <div className={`mt-8 grid gap-6 ${gridClass} ${className}`}>
      {features.map((feature, index) => (
        <div
          key={index}
          className="rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl group"
          style={{
            background: "rgba(255,255,255,0.95)",
            border: "1px solid rgba(25,39,74,0.1)",
            boxShadow: "0 8px 20px rgba(25,39,74,0.08), inset 0 1px 0 rgba(255,255,255,0.6)"
          }}
        >
          <h4 className="mb-3 text-xl font-serif font-bold" style={{ color: "rgba(25,39,74,0.97)" }}>
            {feature.title}
          </h4>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  )
}

// ============================================================================
// Component 4: Highlight Cards
// ============================================================================

interface HighlightCardsProps {
  cards: HighlightCard[]
  className?: string
}

export function HighlightCards({ cards, className = "" }: HighlightCardsProps) {
  const getVariantStyles = (variant: HighlightCard["variant"]) => {
    switch (variant) {
      case "dark":
        return {
          background: "linear-gradient(135deg, rgba(25,39,74,0.97) 0%, rgba(26,39,86,0.95) 50%, rgba(45,74,142,0.93) 100%)",
          boxShadow: "0 15px 40px rgba(25,39,74,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
          // borderColor: "rgba(199,157,42,0.3)",
          titleColor: "#ffffff",
          textColor: "rgba(255,255,255,0.95)"
        }
        case "accent":
          return {
            background: "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(248,249,255,0.95) 100%)",
            boxShadow: "0 15px 40px rgba(25,39,74,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
            borderColor: "rgba(25,39,74,0.97)",
            titleColor: "rgba(25,39,74,0.97)",
            textColor: "rgba(25,39,74,0.85)"
          }
      case "light": //NOT IN USE
        return {
          boxShadow: "0 15px 40px rgba(25,39,74,0.12), inset 0 1px 0 rgba(255,255,255,0.6)",
          borderColor: "#c79d2a",
          titleColor: "rgba(25,39,74,0.97)",
          textColor: "rgba(25,39,74,0.85)"
        }
      default:
        //accent
        return {
          background: "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(248,249,255,0.95) 100%)",
          boxShadow: "0 15px 40px rgba(25,39,74,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
          borderColor: "rgba(25,39,74,0.97)",
          titleColor: "rgba(25,39,74,0.97)",
          textColor: "rgba(25,39,74,0.85)"
        }
    }
  }

  return (
    <div className={`mt-6 space-y-6 ${className}`}>
      {cards.map((card, index) => {
        const styles = getVariantStyles(card.variant)

        return (
          <div
            key={index}
            className="rounded-2xl p-8 border-r-4"
            style={{
              background: styles.background,
              boxShadow: styles.boxShadow,
              borderColor: styles.borderColor
            }}
          >
            <h3
              className="text-2xl font-serif font-bold mb-3"
              style={{ color: styles.titleColor }}
            >
              {card.title}
            </h3>
            <p
              className="text-lg leading-relaxed"
              style={{ color: styles.textColor }}
            >
              {card.content}
            </p>
          </div>
        )
      })}
    </div>
  )
}
