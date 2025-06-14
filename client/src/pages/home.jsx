import { useState } from "react"

import Image1 from '../../public/images/Group.svg'
import Image2 from '../../public/images/Group (1).svg'
import Image3 from '../../public/images/Frame (1).svg'

import DashImage from '../../public/images/Group - home.svg'
import DashImage2 from '../../public/images/Group (1) - home.svg'
import DashImage3 from '../../public/images/Group (2).svg'
import DashImage4 from '../../public/images/36.smile.svg'
import DashImage5 from '../../public/images/Frame (1) - home.svg'
import DashImage6 from '../../public/images/Vector.svg'
import DashImage7 from '../../public/images/Frame (2).svg'

import ArrowImage from '../../public/images/Arrow 1.svg'
import Card1 from '../../public/images/Highlight Frame 1.png'
import Card2 from '../../public/images/Group- home-2.svg'
import Card3 from '../../public/images/Background+Border+Shadow.svg'


import { Check, Mail, Users } from "lucide-react"


export default function HeroSection() {

    const [activeTab, setActiveTab] = useState("Naaractiviteiten")

    return (
        <>
            <section className="max-w-7xl m-auto">
                <div className="h-auto bg-gradient-to-br rounded-3xl from-[#EFF6FF] via-[#FAF5FF] to-[#FDF2F8] px-4 py-12 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto mt-7">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                                <span className=" inter-tight-700 text-[#2563EB]">Je kind future-proof maken?</span>
                                <br />
                                <span className="text-[#111827] inter-tight-700">Dat doe je samen.</span>
                            </h1>

                            <p className="text-md inter-tight-400 mt-7 text-[#8F8F8F] mb-2 max-w-3xl mx-auto">
                                In 10 Minuten Per Dag, Zonder Scherm.
                            </p>

                            <div className="flex items-center justify-center mb-12">
                                <div className="flex items-center space-x-4">
                                    <div className="text-center max-w-lg">
                                        <p className="text-sm sm:text-base text-[#8F8F8F] inter-tight-400 leading-relaxed">
                                            Luumilo helpt je kind (3–6 jaar) groeien in dankbaarheid, weerbaarheid, zelfzorg en meer – via korte, speelse missies die jullie band versterken.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
                                <div className="bg-[#F8F8FF] rounded-2xl p-6 sm:p-8  transition-shadow duration-500 cursor-pointer border border-slate-300">
                                    <div className="flex items-start space-x-3 mt-4">
                                        <div className="w-2 h-2 bg-gray-700 rounded-full mt-3 flex-shrink-0"></div>
                                        <p className="text-[#5D5D5D] text-base sm:text-lg font-medium leading-relaxed">
                                            Voor ouders die voelen: school alleen is niet genoeg.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-[#8D35EA] to-[#2C60EB] rounded-2xl p-6 sm:p-8  transition-shadow duration-300">
                                    <div className="flex items-start space-x-3 mt-4">
                                        <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                                        <p className="text-[#FFFFFF] text-base sm:text-lg font-medium ">
                                            Voor kinderen die straks sterk, nieuwsgierig en zelfstandig de wereld in stappen.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#F1F6FB] max-w-7xl m-auto py-16 rounded-3xl px-4 sm:px-6 lg:px-8 mt-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                        <div className=" flex gap-3">
                            <div className="flex justify-center mb-6">
                                <div>
                                    <img src={Image1} alt="" />
                                </div>
                            </div>
                            <div className="flex flex-col">

                                <h3 className="text-[18px]   text-[#000000] text-left     inter-tight-700">7 Leergebieden</h3>
                                <p className="text-[#9A9A9A] inter-tight-400 text-left text-sm  leading-relaxed">
                                    van emotionele gezondheid tot ondernemerschap
                                </p>
                            </div>
                        </div>

                        <div className=" flex gap-3">
                            <div className="flex justify-center mb-6">
                                <div>
                                    <img src={Image2} alt="" />
                                </div>
                            </div>
                            <div className="flex flex-col">

                                <h3 className="text-[18px]  text-[#000000] text-left inter-tight-700">5-15 Min Per Dag</h3>
                                <p className="text-[#9A9A9A] inter-tight-400 text-left text-sm  leading-relaxed">
                                    past altijd in jullie dagritme
                                </p>
                            </div>
                        </div>

                        <div className=" flex gap-3">
                            <div className="flex justify-center mb-6">
                                <div>
                                    <img src={Image3} alt="" />
                                </div>
                            </div>
                            <div className="flex flex-col">

                                <h3 className="text-[18px]   text-[#000000]      text-left inter-tight-700">Geen Scherm</h3>
                                <p className="text-[#9A9A9A] inter-tight-400 text-left text-sm  leading-relaxed">
                                    samen spelen samen groeien
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="h-auto max-w-7xl m-auto mt-10 bg-gradient-to-br rounded-3xl from-[#EFF6FF] via-[#FAF5FF] to-[#FDF2F8] py-16 px-4 sm:px-6 lg:px-8 ">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl sm:text-4xl inter-tight-700 text-[#000000] mb-2">Welkom terug!</h2>
                        <p className="text-md inter-tight-400 text-[#000000] text-sm mb-3">Klaar voor de volgende activiteit?</p>

                        <div className="flex justify-center mb-12">
                            <div className=" flex gap-2 items-center rounded-full p-1 ">
                                <button
                                    onClick={() => setActiveTab("Naaractiviteiten")}
                                    className={`px-10 py-2 rounded-lg text-sm inter-tight-400  cursor-pointer transition-all duration-300  ${activeTab === "Naaractiviteiten" ? "bg-[#8F34EA] text-white " : "text-[#000000] bg-[#FFFFFF] border border-[#EBEBEB]"
                                        }`}
                                >
                                    Naar activiteiten
                                </button>
                                <button
                                    onClick={() => setActiveTab("bekijk voortgang")}
                                    className={`px-10 py-2 rounded-lg text-sm inter-tight-400 cursor-pointer  transition-all duration-300  ${activeTab === "bekijk voortgang" ? "bg-[#8F34EA] text-white " : "text-[#000000] bg-[#FFFFFF] border border-[#EBEBEB]"
                                        }`}
                                >
                                    bekijk voortgang                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                        <div className="sm:col-span-1 lg:row-span-2">
                            <div className="bg-[#FFFFFF]  rounded-2xl p-6 shadow-sm cursor-pointer hover:shadow-xl transition-shadow duration-500 h-full flex flex-col justify-center">
                                <div className="text-center">
                                    <div className="h-16 w-16 shadow-lg bg-[#F8E6E6] rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <img src={DashImage} className="h-10 w-10" alt="" />
                                    </div>
                                    <h3 className="poppins-700 text-[#000000] text-md">Emotionele Gezondheid</h3>
                                    <p className="text-[#828282] text-sm leading-relaxed">Herken wat je voelt en leer dat ook zeggen</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="bg-[#FFFFFF]  rounded-2xl p-6 shadow-sm cursor-pointer hover:shadow-xl transition-shadow duration-500 h-full">
                                <div className="text-center">
                                    <div className="w-16 h-16 shadow-lg bg-[#F8E6E6] rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <img src={DashImage2} className="h-10 w-10" alt="" />
                                    </div>
                                    <h3 className="poppins-700 text-[#000000] text-md">Veerkracht</h3>
                                    <p className="text-[#828282] text-sm leading-relaxed">Blijf proberen, ook als iets moeilijk is</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="bg-[#FFFFFF]  rounded-2xl p-6 shadow-sm cursor-pointer hover:shadow-xl transition-shadow duration-500 h-full">
                                <div className="text-center">
                                    <div className="w-16 h-16 shadow-lg bg-[#F8E6E6] rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <img src={DashImage4} className="h-10 w-10" alt="" />
                                    </div>
                                    <h3 className="poppins-700 text-[#000000] text-md">Dankbaarheid</h3>
                                    <p className="text-[#828282] text-sm leading-relaxed">Zie wat er wél is — en voel hoe fijn dat is.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="bg-[#FFFFFF]  rounded-2xl p-6 shadow-sm cursor-pointer hover:shadow-xl transition-shadow duration-500 h-full">
                                <div className="text-center">
                                    <div className="w-16 h-16 shadow-lg bg-[#F8E6E6] rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <img src={DashImage6} className="h-10 w-10" alt="" />
                                    </div>
                                    <h3 className="poppins-700 text-[#000000] text-md">Zelfzorg</h3>
                                    <p className="text-[#828282] text-sm leading-relaxed">Zorg goed voor je lichaam én je hoofd.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="bg-[#FFFFFF]  rounded-2xl p-6 shadow-sm cursor-pointer hover:shadow-xl transition-shadow duration-500 h-full">
                                <div className="text-center">
                                    <div className="w-16 h-16 shadow-lg bg-[#F8E6E6] rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <img src={DashImage3} className="h-10 w-10" alt="" />
                                    </div>
                                    <h3 className="poppins-700 text-[#000000] ttextext-md">Geldwijsheid</h3>
                                    <p className="text-[#828282] text-sm leading-relaxed">
                                        Leer omgaan met geld, spullen en slimme keuzes maken.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="bg-[#FFFFFF]  rounded-2xl p-6 shadow-sm cursor-pointer hover:shadow-xl transition-shadow duration-500 h-full">
                                <div className="text-center">
                                    <div className="w-16 h-16 shadow-lg bg-[#F8E6E6] rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <img src={DashImage5} className="h-10 w-10" alt="" />
                                    </div>
                                    <h3 className="poppins-700 text-[#000000] text-md">Ondernemerschap</h3>
                                    <p className="text-[#828282] text-sm leading-relaxed">
                                        Kijk anders, denk verder, vind je eigen idee
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="bg-[#FFFFFF]  rounded-2xl p-6 shadow-sm cursor-pointer hover:shadow-xl transition-shadow duration-500 h-full">
                                <div className="text-center">
                                    <div className="w-16 h-16 shadow-lg bg-[#F8E6E6] rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <img src={DashImage7} className="h-10 w-10" alt="" />
                                    </div>
                                    <h3 className="poppins-700 text-[#000000] text-md">Anders Denken</h3>
                                    <p className="text-[#828282] text-sm leading-relaxed">Kijk Anders, Denk Verder, Vind Je Eigen Idee.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="4rth-section" className="relative h-auto max-w-7xl m-auto mt-16 rounded-3xl  bg-gradient-to-br from-[#ad1a75] via-[#435CDE] to-[#344bc0] py-16 px-4 sm:px-6 lg:px-8">

                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl poppins-700  text-white mb-2">Hoe het werkt</h2>
                        <p className="text-white text-md">3-stappenstroom</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-stretch">
                        <div className=" md:h-[450px] h-full">
                            <div className="bg-[#C52E8A]/30 backdrop-blur-3xl rounded-3xl p-6 sm:p-8 h-full shadow-inner" style={{ boxShadow: 'inset 0 8px 32px rgba(255, 255, 255, 0.6), inset 0 4px 16px rgba(255, 255, 255, 0.3)' }}>
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="relative">
                                        <h3 className="text-white text-center inter-tight-700 text-lg sm:text-xl mb-1">
                                            1-Ontdek betekenisvolle activiteiten
                                        </h3>
                                        <img src={ArrowImage} alt="Arrow" className="absolute  right-34 top-12 h-[30vh] w-full" />
                                        <p className="text-[#FFFFFF] inter-tight-400 ml-14 text-sm  leading-relaxed">
                                            Korte, speelse activiteiten die bouwen aan de fundering van je kind — thuis, met echte aandacht.
                                        </p>
                                    </div>
                                </div>

                                <div className="absolute bottom-0 left-40">
                                    <div>
                                        <img src={Card1} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="  md:h-[450px] h-full">
                            <div className="bg-[#C52E8A]/30 backdrop-blur-3xl rounded-3xl p-6 sm:p-8 h-full shadow-inner" style={{ boxShadow: 'inset 0 8px 32px rgba(255, 255, 255, 0.6), inset 0 4px 16px rgba(255, 255, 255, 0.3)' }}>
                                <div className="flex items-start gap-4 mb-6">

                                    <div className="relative">
                                        <img src={ArrowImage} alt="Arrow" className="absolute  right-34 top-12 h-[30vh] w-full" />
                                        <p className="text-[#FFFFFF] mt-24 ml-5 inter-tight-400 text-sm  leading-relaxed">
                                            Creëer dagelijkse momenten van verbinding, plezier en groei. Samen ontdekken, lachen en leren.
                                        </p>
                                    </div>
                                </div>

                                <div className="absolute bottom-0 left-40">
                                    <div>
                                        <img src={Card2} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=" md:h-[450px] h-full">
                            <div className="bg-[#C52E8A]/30 backdrop-blur-3xl rounded-3xl p-6 sm:p-8 h-full shadow-inner" style={{ boxShadow: 'inset 0 8px 32px rgba(255, 255, 255, 0.6), inset 0 4px 16px rgba(255, 255, 255, 0.3)' }}>
                                <div className="flex items-start gap-4 mb-6">

                                    <div className="relative">
                                        <h3 className="text-white text-center inter-tight-700 text-lg sm:text-xl mb-1">3-Stimuleer groei op 3 niveaus</h3>
                                        <img src={ArrowImage} alt="Arrow" className="absolute  right-34 top-12 h-[30vh] w-full" />
                                        <p className="text-[#FFFFFF] inter-tight-400 ml-14 text-sm  leading-relaxed">
                                            Elke activiteit versterkt je kind — emotioneel, praktisch en in de band met jou. Voor kinderen van 3–6 jaar.
                                        </p>
                                    </div>
                                </div>

                                <div className="absolute bottom-0 left-40">
                                    <div>
                                        <img src={Card3} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 mt-10 sm:px-6 lg:px-8 h-auto max-w-7xl m-auto ">
                <div className="max-w-4xl w-full m-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl poppins-700 lg:text-4xl  text-[#0F2137]">
                            Bouw mee aan het
                            <br />
                            onderwijs van de toekomst

                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                        <div className="bg-white rounded-3xl p-8 shadow-lg border-4 border-pink-500 relative">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                <div className="bg-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium">
                                    Slechts 15 plekken!
                                </div>
                            </div>

                            <div className="flex justify-start items-start flex-col">

                                <div className="mb-4 mt-4">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                                        <Users className="w-8 h-8 text-green-600" />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <h3 className="text-lg inter-tight-700 text-[#0F2137] ">Word testgezin</h3>
                                    <p className="text-[#666666] inter-tight-400 text-sm">Help ons Luzality te perfectioneren.</p>
                                </div>
                            </div>

                            <div className="space-y-4 mb-8 mt-5">
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-[#3FDBB1] rounded-full flex items-center justify-center flex-shrink-0">
                                        <Check className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-gray-700 text-sm">Levenslang gratis toegang</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-[#3FDBB1] rounded-full flex items-center justify-center flex-shrink-0">
                                        <Check className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-gray-700 text-sm">Exclusieve toegang tot nieuwe features</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-[#3FDBB1] rounded-full flex items-center justify-center flex-shrink-0">
                                        <Check className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-gray-700 text-sm">Direct contact met ontwikkelaars</span>
                                </div>
                            </div>

                            <button className="w-full bg-gradient-to-br  from-[#22C55E]  to-[#059669] cursor-pointer text-sm text-white inter-tight-400 py-4 px-6 rounded-2xl transition-colors duration-500">
                                Aanmelden als testgezin
                            </button>

                            <p className="text-xs text-gray-500 text-center mt-4">Vragenlijst met voor/achternaam, leeftijd kind, ervaring</p>
                        </div>

                        <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-200 relative">
                            <div className="flex justify-start items-start flex-col">

                                <div className="mb-4 mt-4">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                                        <Users className="w-8 h-8 text-green-600" />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <h3 className="text-lg inter-tight-700 text-[#0F2137] ">Blijf op de hoogte</h3>
                                    <p className="text-[#666666] inter-tight-400 text-sm">Krijg als eerste bericht bij de lancering</p>
                                </div>
                            </div>

                            <div className="space-y-4 mb-8 mt-5">
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-[#3FDBB1] rounded-full flex items-center justify-center flex-shrink-0">
                                        <Check className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-[#343D48] inter-tight-400 text-sm">Eerste bericht bij lancering</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-[#3FDBB1] rounded-full flex items-center justify-center flex-shrink-0">
                                        <Check className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-[#343D48] inter-tight-400 text-sm">Exclusieve lanceringsvoordelen</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-[#3FDBB1] rounded-full flex items-center justify-center flex-shrink-0">
                                        <Check className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-[#343D48] inter-tight-400 text-sm">Geen spam, alleen updates</span>
                                </div>
                            </div>

                            {/* Email Input */}
                            <div className="mb-6">
                                <input
                                    type="email"
                                    placeholder="jouw@email.nl"
                                    className="w-full px-4 py-3 border-none outline-none text-sm rounded-xl bg-[#F5F5F5E5] inter-tight-400 "
                                />
                            </div>

                            <button className="w-full bg-gradient-to-br  from-[#9CA3AF]  to-[#6B7280] cursor-pointer text-sm text-white inter-tight-400 py-4 px-6 rounded-2xl transition-colors duration-500">
                                📧 Houd mij op de hoogte
                            </button>

                            <p className="text-xs text-gray-500 text-center mt-4">Alleen je e-mailadres, meer niet</p>
                        </div>
                    </div>

                    <div className="text-center">
                        <a href="#" className="text-[#636363] cursor-pointer underline text-sm">
                            Kies uw abonnement!
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}