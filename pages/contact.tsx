import ContactComponent from "../components/contact-component";
import SEOHead from "@/components/seo/SEOHead";
import { MultipleStructuredData } from "@/components/seo/StructuredData";

export default function Contact() {
  return (
    <>
      <SEOHead
        title="צור קשר | קי האוס אילת | משרד תיווך נדל״ן"
        description="צרו קשר עם קי האוס אילת - משרד תיווך נדל״ן מוביל. נשמח לענות על כל שאלה ולעזור לכם למצוא את הנכס המושלם. טלפון: 050-224-0035, כתובת: אנפה 1 מרכז מור, אילת."
        canonical="/contact"
        keywords={[
          'צור קשר',
          'משרד תיווך אילת',
          'ייעוץ נדל"ן',
          'קי האוס אילת',
          'רותם קהלון',
          'נדל"ן אילת',
          'פגישת ייעוץ'
        ]}
      />

      <MultipleStructuredData
        schemas={[
          {
            type: 'BreadcrumbList',
            data: {
              items: [
                { name: 'דף הבית', url: '/' },
                { name: 'צור קשר', url: '/contact' }
              ]
            }
          },
          {
            type: 'WebPage',
            data: {
              name: 'צור קשר - קי האוס אילת',
              url: '/contact',
              description: 'צרו קשר עם משרד התיווך המוביל באילת'
            }
          }
        ]}
      />

      <ContactComponent />
    </>
  )
}