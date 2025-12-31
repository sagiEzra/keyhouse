import { motion } from 'framer-motion'
import LuxuryCard from '../ui/luxury-card'
import StructuredData from './StructuredData'
import { FaQuestionCircle } from 'react-icons/fa'

export interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  title?: string
  faqs: FAQItem[]
  className?: string
}

/**
 * FAQSection Component - שאלות ותשובות עם Schema.org
 *
 * מוסיף סעיף FAQ לעמוד עם structured data שמנועי חיפוש אוהבים
 * מאפשר למנועי חיפוש להציג את התשובות ישירות בתוצאות החיפוש (Rich Snippets)
 */
export default function FAQSection({ title = 'שאלות נפוצות', faqs, className = '' }: FAQSectionProps) {
  return (
    <>
      {/* Schema.org FAQ Structured Data */}
      <StructuredData
        type="FAQPage"
        data={{
          questions: faqs
        }}
      />

      {/* Visual FAQ Section */}
      <section className={`py-16 ${className}`}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaQuestionCircle
                className="h-8 w-8"
                style={{ color: '#c79d2a' }}
              />
              <h2
                className="text-4xl md:text-5xl font-serif font-bold"
                style={{ color: 'rgba(25,39,74,0.97)' }}
              >
                {title}
              </h2>
            </div>

            {/* Decorative line */}
            <div
              className="mx-auto h-1 w-24 rounded-full"
              style={{
                background: 'linear-gradient(90deg, #c79d2a 0%, rgba(199,157,42,0.4) 50%, #c79d2a 100%)',
                boxShadow: '0 4px 20px rgba(199,157,42,0.3)'
              }}
            />
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <LuxuryCard className="p-8 hover:shadow-2xl transition-all duration-300">
                  <h3
                    className="text-2xl font-bold mb-4 flex items-start gap-3"
                    style={{ color: 'rgba(25,39,74,0.97)' }}
                  >
                    <span
                      className="flex h-8 w-8 items-center justify-center rounded-full text-base font-bold flex-shrink-0 mt-1"
                      style={{
                        background: 'linear-gradient(135deg, #c79d2a 0%, rgba(199,157,42,0.8) 100%)',
                        color: '#ffffff',
                        boxShadow: '0 4px 12px rgba(199,157,42,0.3)'
                      }}
                    >
                      {index + 1}
                    </span>
                    <span>{faq.question}</span>
                  </h3>

                  <p
                    className="text-lg leading-relaxed pr-11"
                    style={{ color: 'rgba(25,39,74,0.8)' }}
                  >
                    {faq.answer}
                  </p>
                </LuxuryCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
