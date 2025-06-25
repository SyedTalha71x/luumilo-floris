import React from 'react'
import DashImage from "../../public/images/Group - home.svg"
import DashImage2 from "../../public/images/Group (1) - home.svg"
import DashImage3 from "../../public/images/Group (2).svg"
import DashImage4 from "../../public/images/36.smile.svg"
import DashImage5 from "../../public/images/Frame (1) - home.svg"
import DashImage6 from "../../public/images/Vector.svg"
import DashImage7 from "../../public/images/Frame (2).svg"

const AboutUs = () => {
    return (
        <div className='h-full p-4 mt-10 max-w-7xl mx-auto w-full'>
            <div className='flex justify-center items-center flex-col'>
                <h1 className='text-4xl inter-tight-700  bg-clip-text text-transparent  bg-gradient-to-b to-[#9333EA] from-[#DB2777]'>Welkom bij Luumilo!</h1>
                <p className='mt-3 max-w-2xl text-[#4B5563] m-auto text-center'>Bij Luumilo geloven we dat sommige van de belangrijkste vaardigheden in het leven – zoals emotionele veerkracht, dankbaarheid en zelfzorg – het beste al vroeg aangeleerd kunnen worden, door middel van echte ervaringen en speelse interactie. Daarom hebben we een platform gecreëerd dat gezinnen helpt deze essentiële waarden te introduceren bij kinderen van 3 tot 6 jaar door middel van leuke, schermloze dagelijkse activiteiten.
                </p>
            </div>

            <section className="h-auto max-w-7xl m-auto mt-10 bg-gradient-to-br rounded-4xl from-[#EFF6FF] via-[#FAF5FF] to-[#FDF2F8] py-16 px-4 sm:px-6 lg:px-8 ">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl sm:text-4xl inter-tight-700 text-[#000000] mb-2">Wat wij doen</h2>
                        <p className="text-md inter-tight-400 text-[#000000] text-sm mb-3">Elke week biedt Luumilo een samengestelde set van vijf praktische activiteiten aan – genaamd Speelweek-activiteiten – gericht op leren door te spelen. Elke activiteit is ontworpen om de band tussen ouder en kind te versterken en thema's te verkennen zoals</p>


                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                        <div className="sm:col-span-1 lg:row-span-2">
                            <div className="bg-[#FFFFFF]  rounded-2xl p-6 shadow-sm cursor-pointer hover:shadow-xl transition-shadow duration-500 h-full flex flex-col justify-center">
                                <div className="text-center">
                                    <div className="h-16 w-16 shadow-lg bg-[#F8E6E6] rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <img src={DashImage || "/placeholder.svg"} className="h-10 w-10" alt="" />
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
                                        <img src={DashImage2 || "/placeholder.svg"} className="h-10 w-10" alt="" />
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
                                        <img src={DashImage4 || "/placeholder.svg"} className="h-10 w-10" alt="" />
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
                                        <img src={DashImage6 || "/placeholder.svg"} className="h-10 w-10" alt="" />
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
                                        <img src={DashImage3 || "/placeholder.svg"} className="h-10 w-10" alt="" />
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
                                        <img src={DashImage5 || "/placeholder.svg"} className="h-10 w-10" alt="" />
                                    </div>
                                    <h3 className="poppins-700 text-[#000000] text-md">Ondernemerschap</h3>
                                    <p className="text-[#828282] text-sm leading-relaxed">Kijk anders, denk verder, vind je eigen idee</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="bg-[#FFFFFF]  rounded-2xl p-6 shadow-sm cursor-pointer hover:shadow-xl transition-shadow duration-500 h-full">
                                <div className="text-center">
                                    <div className="w-16 h-16 shadow-lg bg-[#F8E6E6] rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <img src={DashImage7 || "/placeholder.svg"} className="h-10 w-10" alt="" />
                                    </div>
                                    <h3 className="poppins-700 text-[#000000] text-md">Anders Denken</h3>
                                    <p className="text-[#828282] text-sm leading-relaxed">
                                        Kijk Anders, Denk Verder, Vind Je Eigen Idee.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center mt-7 max-w-4xl m-auto '>
                        <p className='text-sm text-[#000000] inter-tight-400'>Naast de wekelijkse activiteiten hebben ouders toegang tot een groeiende bibliotheek met meer dan 35 activiteiten, voortgangsregistratie en spelfuncties zoals prestatiebadges.</p>
                    </div>
                </div>
            </section>

            <div className='flex justify-center mt-16 items-center flex-col'>
                <h1 className='text-4xl inter-tight-700  bg-clip-text text-transparent  bg-gradient-to-b to-[#9333EA] from-[#DB2777]'>Waarom het ertoe doet</h1>
                <p className='mt-3 max-w-2xl text-[#4B5563] m-auto text-center'>We weten dat de kindertijd de belangrijkste fase is voor het ontwikkelen van gezonde gewoonten en emotionele vaardigheden. Luumilo moedigt kinderen aan om niet alleen academisch, maar ook sociaal en emotioneel te groeien – vaardigheden waar ze hun hele leven profijt van hebben.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4 p-10">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4 inter-tight-700">Onze waarden</h2>
                        <p className="text-gray-900 text-sm inter-tight-400"><span className='font-bold mr-1 text-[#000000] poppins-700 text-sm'>Verbinding:</span>Familiebanden versterken door gezamenlijke activiteiten</p>
                        <p className="text-gray-900 text-sm inter-tight-400">
                            <span className='font-bold mr-1 text-[#000000] poppins-700 text-sm'>Groei:</span>Persoonlijke ontwikkeling bevorderen in kleine, vreugdevolle stapjes
                        </p>
                        <p className="text-gray-900 text-sm inter-tight-400"><span className='font-bold mr-1 text-[#000000] poppins-700 text-sm'>Eenvoud:</span>Het voor drukke ouders gemakkelijk maken om betekenisvol betrokken te zijn</p>
                        <p className="text-gray-900 text-sm inter-tight-400"><span className='font-bold mr-1 text-[#000000] poppins-700 text-sm'>Inclusie:</span>Kinderen van alle achtergronden en mogelijkheden verwelkomen</p>

                    </div>

                    <div className="bg-[#F1F6FB] p-10 rounded-lg">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4 inter-tight-700">Met zorg gebouwd</h2>
                        <p className="text-[#1B2838] inter-tight-400">
                        Luumilo is ontwikkeld door een gepassioneerd team van pedagogen, ouders en ontwerpers die de waarde van onderwijs aan jonge kinderen begrijpen. We zijn er om gezinnen te ondersteunen en een blijvende impact te maken – één speelse missie tegelijk.
                        </p>
                    </div>
                </div>

                <div className="mt-16 space-y-4 flex justify-center items-center flex-col text-center">
                    <h2 className="text-4xl inter-tight-700  bg-clip-text text-transparent  bg-gradient-to-b to-[#9333EA] from-[#DB2777]">Missie</h2>
                    <p className="text-[#4B5563] inter-tight-400 text-center max-w-3xl mx-auto">
                    Bij Luumilo helpen we jou als ouder om op een eenvoudige en inspirerende manier thuis te bouwen aan de innerlijke kracht van je kind.
                    </p>
                    <p className="text-[#4B5563] inter-tight-400  text-center max-w-3xl mx-auto">
                    Met ons leerplatform ondersteun je je kind (3-6) in het ontwikkelen van veerkracht, dankbaarheid, zelfzorg en essentiële levensvaardigheden – via kleine, haalbare stappen die passen in jullie dagelijks leven. Zonder extra stress en vrij van schermtijd.
                    </p>
                </div>

                <div className="mt-12 space-y-4 flex justify-center items-center flex-col text-center">
                    <h2 className="text-4xl inter-tight-700  text-[#000000]">Visie</h2>
                    <p className="text-[#4B5563] text-center max-w-3xl mx-auto inter-tight-400">
                    Wij geloven dat kinderen die stevig in hun schoenen staan, klaar zijn voor de toekomst.

                    </p>
                    <p className="text-[#4B5563] text-center max-w-3xl mx-auto inter-tight-400">
                    In een wereld vol prikkels, prestatiedruk en constante verandering, bieden wij jou een toegankelijke, unieke en speelse methodiek om een sterke basis te leggen voor je kind, met aandacht en intentie, passend in jullie gezinsleven.

                    </p>
                    <p className="text-[#4B5563] text-center max-w-3xl mx-auto inter-tight-400">
                    Ons doel is om samen met miljoenen ouders zoals jij een krachtiger, betekenisvoller begin te bouwen in de belangrijkste en meest vormende jaren van jullie kinderen.
                    </p>
                </div>

                <div className="mt-12 bg-gradient-to-r from-[#A855F7] to-[#EC4899] rounded-2xl   p-6 text-white">
                    <h2 className="text-xl font-bold mb-4 text-center">Ga mee op reis! 🚀</h2>
                    <p className="text-center max-w-3xl mx-auto">
                    Wij nodigen u uit om Luumilo te ontdekken, de activiteiten uit te proberen, de voortgang van uw kind te volgen en te genieten van de leerzame en grappige momenten die u onderweg tegenkomt.
                    </p>
                    <p className="text-center max-w-3xl mx-auto mt-4">
                    Laten we samen een betere toekomst bouwen, één dag, één missie tegelijk.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs