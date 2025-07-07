import { BookOpen, Circle } from "lucide-react"
import EducationalActivites from "../components/educational-activities"
import TestimonialsSection from "../components/testimonial"
import Specs from "../components/specs"
import Faqs from "../components/faqs"
import BookImage from '../../public/nav-images/Frame (6).svg'
import { Clock, User, Star, Play } from "lucide-react"
import { IoPlayCircleOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { useState } from "react";

import BackgroundPicture1 from "../../public/images/Background (1).svg"
import BackgroundPicture2 from "../../public/images/Background (2).svg"
import BackgroundPicture3 from "../../public/images/Background (3).svg"
import BackgroundPicture4 from "../../public/images/Background (4).svg"
import BackgroundPicture5 from "../../public/images/Background.svg"
import { Link } from "react-router-dom";

export default function Activities() {
    const [activeTab, setActiveTab] = useState('speelweek');
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("alle-leergebieden")
    const [selectedAge, setSelectedAge] = useState("alle-leeftijden")
    const [selectedHeight, setSelectedHeight] = useState("hoogte")


    const speelweekActivities = [
        {
            id: 1,
            title: "Dank-Kettingsprint",
            description: "Maak een mini-slinger van dankbaarheid die dagelijks kan groeien.",
            image: BackgroundPicture5,
            progress: "20 min",
            ageRange: "4-6 jaar",
            rating: "9.5",
            reviews: "203 reviews",
            tag: "Dankbaarheid",
            tagColor: "bg-[#F59E0B] text-white",
        },
        {
            id: 2,
            title: "Toren-van-Terugkaats",
            description: "Maak een mini-slinger van dankbaarheid die dagelijks kan groeien.",
            image: BackgroundPicture1,
            progress: "10 min",
            ageRange: "3-6 jaar",
            rating: "9.5",
            reviews: "167 reviews",
            tag: "Veerkracht",
            tagColor: "bg-[#3B82F6] text-white",
        },
        {
            id: 3,
            title: "Spiegelgezicht-Safari",
            description: "Ontdek emoties door gezichtsuitdrukkingen in de iegel te maken en lichaamssignalen te voelen.",
            image: BackgroundPicture2,
            progress: "10 min",
            ageRange: "3-6 jaar",
            rating: "9.5",
            reviews: "156 reviews",
            tag: "Emotionele Gezondheid",
            tagColor: "bg-[#EF4444] text-white",
        },
        {
            id: 4,
            title: "Limonade-Lab",
            description: "Experimenteer met smaken en laat familie jouw creaties beoordelen als echte klanten.",
            image: BackgroundPicture3,
            progress: "10 min",
            ageRange: "3-6 jaar",
            rating: "9.5",
            reviews: "167 reviews",
            tag: "Veerkracht",
            tagColor: "bg-[#3B82F6] text-white",
        },
        {
            id: 5,
            title: "Papieren-Brug-Challenge",
            description: "Los technische uitdagingen op door te experimenteren met eenvoudige materialen.",
            image: BackgroundPicture4,
            progress: "8 min",
            ageRange: "3-6 jaar",
            rating: "9.5",
            reviews: "156 reviews",
            tag: "Emotionele Gezondheid",
            tagColor: "bg-[#EF4444] text-white",
        },
    ];

    const libraryActivities = [
        ...speelweekActivities,
        {
            id: 6,
            title: "Regenboog-Experiment",
            description: "Ontdek de wetenschap achter kleuren met eenvoudige huishoudelijke items.",
            image: BackgroundPicture1,
            progress: "15 min",
            ageRange: "4-7 jaar",
            rating: "9.2",
            reviews: "189 reviews",
            tag: "Wetenschap",
            tagColor: "bg-[#10B981] text-white",
        },
        {
            id: 7,
            title: "Verhaal-Bouwer",
            description: "Creëer samen fantasierijke verhalen met onverwachte wendingen.",
            image: BackgroundPicture2,
            progress: "12 min",
            ageRange: "3-6 jaar",
            rating: "9.7",
            reviews: "224 reviews",
            tag: "Creativiteit",
            tagColor: "bg-[#8B5CF6] text-white",
        },
        {
            id: 8,
            title: "Muziek-Makers",
            description: "Maak je eigen muziekinstrumenten en componeer eenvoudige melodieën.",
            image: BackgroundPicture3,
            progress: "18 min",
            ageRange: "4-8 jaar",
            rating: "9.4",
            reviews: "176 reviews",
            tag: "Muziek",
            tagColor: "bg-[#F97316] text-white",
        },
    ];

    const getCurrentActivities = () => {
        return activeTab === 'speelweek' ? speelweekActivities : libraryActivities;
    };

    return (
        <>
            <div className="h-full flex flex-col items-center justify-center px-4 py-8">
                <div className="max-w-7xl w-full  text-center space-y-8">
                    <div className="flex justify-center items-center space-x-4 mb-8">
                        <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
                            <img src={BookImage} alt="" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl inter-tight-700  bg-clip-text text-transparent  bg-gradient-to-b to-[#9333EA] from-[#DB2777]">
                            Samen groeien met elke activiteit
                        </h1>

                        <p className="text-sm text-[#4B5563] inter-tight-400 font-medium">Bouw mee aan het onderwijs van de toekomst</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-2xl mx-auto">
                        <div className="bg-[#F8F8FF] rounded-2xl py-2 border border-[#CDCDCD]">
                            <div className="flex items-center inter-tight-400 justify-center space-x-2">
                                <span className="text-md font-medium text-[#5D5D5D]">35+ Activiteiten Beschikbaar</span>
                            </div>
                        </div>

                        <div className="bg-[#F8F8FF] rounded-2xl py-2 border border-[#CDCDCD]">
                            <div className="flex items-center inter-tight-400 justify-center space-x-2">
                                <span className="text-md font-medium text-[#5D5D5D]">5-15 Minuten Per Dag</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="h-auto bg-gradient-to-br rounded-3xl from-[#EFF6FF] via-[#FAF5FF] to-[#FDF2F8] md:mt-24 mt-10 p-4 md:p-8">
                        <div className="max-w-7xl mx-auto py-16">
                            <div className="text-center mb-8">
                                <h1 className="text-2xl md:text-3xl  text-[#000000] poppins-700 mb-2">Deze Week: Week 1</h1>
                                <p className="text-[#4B5563] text-sm mb-6">5 zorgvuldig geselecteerde activiteiten om samen te ontdekken</p>

                                <div className="flex flex-col mt-10 sm:flex-row gap-4 justify-center items-center">
                                    <button
                                        onClick={() => setActiveTab('speelweek')}
                                        className={`w-[300px] py-2 cursor-pointer text-sm transition-colors ${activeTab === 'speelweek'
                                            ? 'bg-[#8F34EA] text-white rounded-xl'
                                            : 'text-[#616161] border border-gray-300 rounded-xl'
                                            }`}
                                    >
                                        Speelweek
                                    </button>

                                    <div className="hidden sm:block w-px h-6 bg-gray-300"></div>

                                    <button
                                        onClick={() => setActiveTab('library')}
                                        className={`w-[300px] py-2 cursor-pointer text-sm transition-colors ${activeTab === 'library'
                                            ? 'bg-[#8F34EA] text-white rounded-xl'
                                            : 'text-[#616161] border border-gray-300 rounded-xl'
                                            }`}
                                    >
                                        Activiteitenbibliotheek
                                    </button>
                                </div>

                            </div>

                            {activeTab === 'library' && <div className="bg-gradient-to-br rounded-3xl from-[#EFF6FF] via-[#FAF5FF] to-[#FDF2F8] p-6 mb-8 shadow-sm">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="relative">

                            <input
                                type="text"
                                placeholder="Zoek Activiteiten"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border-none outline-none text-sm bg-[#FFFFFF] rounded-xl inter-tight-400 "
                            />
                            <div className="absolute inset-y-0 left-0 bottom-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                        </div>

                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border-none outline-none text-[#707070] text-sm bg-[#FFFFFF] rounded-xl inter-tight-400"
                        >
                            <option value="alle-leergebieden">Alle Leergebieden</option>
                            <option value="emotioneel">Emotioneel</option>
                            <option value="sociaal">Sociaal</option>
                            <option value="cognitief">Cognitief</option>
                        </select>

                        <select
                            value={selectedAge}
                            onChange={(e) => setSelectedAge(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border-none outline-none text-[#707070] text-sm bg-[#FFFFFF] rounded-xl inter-tight-400"
                        >
                            <option value="alle-leeftijden">Alle Leeftijden</option>
                            <option value="3-4">3-4 jaar</option>
                            <option value="5-6">5-6 jaar</option>
                            <option value="7-8">7-8 jaar</option>
                        </select>

                        <select
                            value={selectedHeight}
                            onChange={(e) => setSelectedHeight(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border-none outline-none text-[#707070] text-sm bg-[#FFFFFF] rounded-xl inter-tight-400"
                        >
                            <option value="hoogte">Hoogte</option>
                            <option value="laag">Laag</option>
                            <option value="gemiddeld">Gemiddeld</option>
                            <option value="hoog">Hoog</option>
                        </select>
                    </div>
                </div>}

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {getCurrentActivities().map((activity, index) => (
                                    <Link
                                        to={`/activity-detail/${activity.id}`}
                                        key={activity.id}
                                        className="relative group pt-5 pb-2 p-[1px]"
                                    >
                                        <div className="absolute -inset-1  rounded-2xl bg-gradient-to-br from-[#DB297A] to-[#7940EA] z-0 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                                        <div
                                            className={`
          relative z-10 bg-white  rounded-2xl overflow-hidden
          transition-shadow duration-300 ease-in-out
          group-hover:shadow-lg
          cursor-pointer
          ${index >= 3 ? "lg:col-span-1" : ""}
        `}
                                        >
                                            <div className="p-3">
                                                <div className="bg-[#F3F4F6] rounded-2xl h-48 flex items-center justify-center">
                                                    <img src={activity.image || "/placeholder.svg"} alt="" className="w-16 h-16 object-cover" />
                                                </div>
                                            </div>

                                            <div className="p-4 space-y-4">
                                                <div>
                                                    <h3 className="text-lg text-[#0F2137] poppins-700 mb-1">{activity.title}</h3>
                                                    <p className="text-[#666666] space-grotesk-400 text-[16px] leading-relaxed">{activity.description}</p>
                                                </div>

                                                <div className="flex items-center inter-tight-400 justify-between text-sm mt-8 text-[#838383]">
                                                    <div className="flex items-center gap-1 sora-400">
                                                        <Clock className="w-4 h-4" />
                                                        <span>{activity.progress}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1 sora-400">
                                                        <FiUsers className="w-4 h-4" />
                                                        <span>{activity.ageRange}</span>
                                                    </div>
                                                </div>

                                                <div className="rounded-lg bg-[#FFFCE6] border border-yellow-200 p-3 flex items-center justify-center gap-2">
                                                    <Star className="w-4 h-4 text-[#FACC15] fill-current" />
                                                    <span className="text-sm inter-tight-400 font-medium text-gray-700">
                                                        <span className="font-bold text-black inter-tight-700">{activity.rating}</span> ({activity.reviews})
                                                    </span>
                                                </div>

                                                <div className="flex justify-center">
                                                    <span className={`${activity.tagColor} px-3 py-1 rounded-full text-xs font-medium`}>
                                                        {activity.tag}
                                                    </span>
                                                </div>

                                                <button
                                                    className="w-full bg-gradient-to-br from-[#C42E8B] to-[#6650C7] text-white inter-tight-700 cursor-pointer py-2.5 px-4 rounded-2xl hover:opacity-90 transition-opacity text-sm flex items-center justify-center gap-2"
                                                >
                                                    <IoPlayCircleOutline className="w-6 h-6" />
                                                    Start Activiteit
                                                </button>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            <div className="lg:grid lg:grid-cols-3 lg:gap-6 lg:mt-6">
                                <div className="lg:col-start-1 lg:col-end-3"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <TestimonialsSection />
            <Specs />
            <Faqs />
        </>
    )
}