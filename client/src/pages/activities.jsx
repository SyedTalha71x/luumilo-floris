import { BookOpen, Circle } from "lucide-react"
import EducationalActivites from "../components/educational-activities"
import TestimonialsSection from "../components/testimonial"
import Specs from "../components/specs"
import Faqs from "../components/faqs"

export default function Activities() {
    return (
        <>

            <div className="h-full flex flex-col items-center justify-center px-4 py-8">
                <div className="max-w-7xl w-full  text-center space-y-8">
                    <div className="flex justify-center items-center space-x-4 mb-8">
                        <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
                            <BookOpen className="w-8 h-8 text-white" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl inter-tight-700 text-[#1F1F1F] leading-tight">
                            Samen groeien met elke activiteit
                        </h1>

                        <p className="text-sm text-[#4B5563] inter-tight-400 font-medium">Bouw mee aan het onderwijs van de toekomst</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-2xl mx-auto">
                        <div className="bg-[#F8F8FF] rounded-2xl py-2 border border-[#CDCDCD]">
                            <div className="flex items-center inter-tight-400 justify-center space-x-2">
                                <span className="text-md">•</span>
                                <span className="text-md font-medium text-[#5D5D5D]">35+ Activiteiten Beschikbaar</span>
                            </div>
                        </div>

                        <div className="bg-[#F8F8FF] rounded-2xl py-2 border border-[#CDCDCD]">
                            <div className="flex items-center inter-tight-400 justify-center space-x-2">
                                <span className="text-md">•</span>
                                <span className="text-md font-medium text-[#5D5D5D]">5-15 Minuten Per Dag</span>
                            </div>
                        </div>
                    </div>
                </div>

                <EducationalActivites />

            </div>
            <TestimonialsSection />
            <Specs />
            <Faqs />
        </>
    )
}
