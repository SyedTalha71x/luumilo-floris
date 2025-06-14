/* eslint-disable no-irregular-whitespace */
import { useState } from "react"
import { Brain } from "lucide-react"
import { Heart, Shield, Smile, Leaf, User, Briefcase } from "lucide-react"

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
                                            Voor ouders die voelen: school alleen is niet genoeg.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-[#8D35EA] to-[#2C60EB] rounded-2xl p-6 sm:p-8  transition-shadow duration-300">
                                    <div className="flex items-start space-x-3 mt-4">
                                        <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                                        <p className="text-[#FFFFFF] text-base sm:text-lg font-medium ">
                                            Voor kinderen die straks sterk, nieuwsgierig en zelfstandig de wereld in stappen.
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
                                    className={`px-10 py-3 rounded-full text-sm inter-tight-400  cursor-pointer transition-all duration-300  ${activeTab === "nieuw" ? "bg-[#8F34EA] text-white " : "text-[#000000] bg-[#FFFFFF] border border-[#EBEBEB]"
                                        }`}
                                >
                                    Naar activiteiten
                                </button>
                                <button
                                    onClick={() => setActiveTab("bekijk voortgang")}
                                    className={`px-10 py-3 rounded-full text-sm inter-tight-400 cursor-pointer  transition-all duration-300  ${activeTab === "voortgang" ? "bg-[#8F34EA] text-white " : "text-[#000000] bg-[#FFFFFF] border border-[#EBEBEB]"
                                        }`}
                                >
                                    bekijk voortgang                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                        {/* Emotionele Gezondheid - Larger card */}
                        <div className="sm:col-span-1 lg:row-span-2">
                            <div className="bg-[#FFFFFF]  rounded-2xl p-6 shadow-sm cursor-pointer hover:shadow-xl transition-shadow duration-500 h-full flex flex-col justify-center">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-[#F8E6E6] rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <img src={DashImage} alt="" />
                                    </div>
                                    <h3 className="poppins-700 text-[#000000] text-md">Emotionele Gezondheid</h3>
                                    <p className="text-[#828282] text-sm leading-relaxed">Herken wat je voelt en leer dat ook zeggen</p>
                                </div>
                            </div>
                        </div>

                        {/* Veerkracht */}
                        <div>
                            <div className="bg-[#FFFFFF]  rounded-2xl p-6 shadow-sm cursor-pointer hover:shadow-xl transition-shadow duration-500 h-full">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-[#F8E6E6] rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <img src={DashImage2} alt="" />
                                    </div>
                                    <h3 className="poppins-700 text-[#000000] text-md">Veerkracht</h3>
                                    <p className="text-[#828282] text-sm leading-relaxed">Blijf proberen, ook als iets moeilijk is</p>
                                </div>
                            </div>
                        </div>

                        {/* Dankbaarheid */}
                        <div>
                            <div className="bg-[#FFFFFF]  rounded-2xl p-6 shadow-sm cursor-pointer hover:shadow-xl transition-shadow duration-500 h-full">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-[#F8E6E6] rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <img src={DashImage4} alt="" />
                                    </div>
                                    <h3 className="poppins-700 text-[#000000] text-md">Dankbaarheid</h3>
                                    <p className="text-[#828282] text-sm leading-relaxed">Zie wat er wél is — en voel hoe fijn dat is.</p>
                                </div>
                            </div>
                        </div>

                        {/* Zelfzorg */}
                        <div>
                            <div className="bg-[#FFFFFF]  rounded-2xl p-6 shadow-sm cursor-pointer hover:shadow-xl transition-shadow duration-500 h-full">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-[#F8E6E6] rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <img src={DashImage6} alt="" />
                                    </div>
                                    <h3 className="poppins-700 text-[#000000] text-md">Zelfzorg</h3>
                                    <p className="text-[#828282] text-sm leading-relaxed">Zorg goed voor je lichaam én je hoofd.</p>
                                </div>
                            </div>
                        </div>

                        {/* Geldwijsheid */}
                        <div>
                            <div className="bg-[#FFFFFF]  rounded-2xl p-6 shadow-sm cursor-pointer hover:shadow-xl transition-shadow duration-500 h-full">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-[#F8E6E6] rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <img src={DashImage3} alt="" />
                                    </div>
                                    <h3 className="poppins-700 text-[#000000] ttextext-md">Geldwijsheid</h3>
                                    <p className="text-[#828282] text-sm leading-relaxed">
                                        Leer omgaan met geld, spullen en slimme keuzes maken.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Ondernemerschap */}
                        <div>
                            <div className="bg-[#FFFFFF]  rounded-2xl p-6 shadow-sm cursor-pointer hover:shadow-xl transition-shadow duration-500 h-full">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-[#F8E6E6] rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <img src={DashImage5} alt="" />
                                    </div>
                                    <h3 className="poppins-700 text-[#000000] text-md">Ondernemerschap</h3>
                                    <p className="text-[#828282] text-sm leading-relaxed">
                                        Kijk anders, denk verder, vind je eigen idee
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Anders Denken */}
                        <div>
                            <div className="bg-[#FFFFFF]  rounded-2xl p-6 shadow-sm cursor-pointer hover:shadow-xl transition-shadow duration-500 h-full">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-[#F8E6E6] rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <img src={DashImage7} alt="" />
                                    </div>
                                    <h3 className="poppins-700 text-[#000000] text-md">Anders Denken</h3>
                                    <p className="text-[#828282] text-sm leading-relaxed">Kijk Anders, Denk Verder, Vind Je Eigen Idee.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
