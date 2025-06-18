import { ChevronUp } from 'lucide-react'
import React, { useState } from 'react'

const Faqs = () => {
      const [openFAQ, setOpenFAQ] = useState(0)
    
      const faqData = [
        {
          question: "Hoe lang duurt een activiteit?",
          answer: "Onze activiteiten duren tussen de 5 en 15 minuten. Perfect om in jullie dagelijkse routine te passen.",
        },
        {
          question: "Voor welke leeftijd is Luumilo geschikt?",
          answer: "Luumilo is speciaal ontwikkeld voor kinderen van 3 tot 6 jaar.",
        },
        {
          question: "Hebben jullie ervoor nodig materialen?",
          answer:
            "De meeste activiteiten kunnen met gewone huishoudelijke spullen. Soms hebben we simpele materialen nodig die je waarschijnlijk al thuis hebt.",
        },
        {
          question: "Wanneer is Luumilo beschikbaar?",
          answer:
            "We zijn hard bezig met de ontwikkeling. Meld je aan om als eerste op de hoogte te blijven van de lancering.",
        },
      ]
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl m-auto mt-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="mt-16">
              <h2 className="text-3xl sm:text-5xl  text-[#0F2137] inter-tight-700">
                Veelgestelde
                <br />
                vragen
              </h2>
            </div>

            <div className="space-y-4  bg-[#F1F6FB] p-7 rounded-md">
              {faqData.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                    className="flex justify-between items-center w-full text-left py-4"
                  >
                    <span className="text-[#0F2137] font-medium inter-tight-400 text-base">{faq.question}</span>
                    <div className="ml-4 flex-shrink-0">
                      {openFAQ === index ? (
                        <ChevronUp className="w-5 h-5 text-black" />
                      ) : (
                        <div className="w-6 h-6 rounded-full flex items-center justify-center">
                          <span className="text-black text-lg font-bold">+</span>
                        </div>
                      )}
                    </div>
                  </button>
                  {openFAQ === index && (
                    <div className="pb-4">
                      <p className="text-[#666666] text-sm inter-tight-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}

export default Faqs