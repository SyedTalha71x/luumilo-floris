import { BookOpen, Circle, Plus } from "lucide-react"
import Specs from "../components/specs"
import Faqs from "../components/faqs"
import { Clock, User, Star, Play } from "lucide-react"
import { IoPlayCircleOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { useState } from "react";
import EducationalQuotes from '../components/educational-quotes'
import StarImage from '../../public/profile-images/Frame (11)-star.svg'

import BackgroundPicture1 from "../../public/activities-images/Frame (6).svg"
import BackgroundPicture2 from "../../public/activities-images/Frame (7).svg"
import BackgroundPicture3 from "../../public/activities-images/Frame (8).svg"
import BackgroundPicture5 from "../../public/activities-images/Group (3).svg"
import DashImage6 from "../../public/activities-images/SVG (1).svg"
import DashImage7 from "../../public/activities-images/SVG.svg"
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
            image: BackgroundPicture3,
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
            image: BackgroundPicture5,
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
            image: DashImage7,
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
            image: DashImage6,
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
                <div className="md:w-[90%] mx-auto w-full  text-center space-y-8">
                    <div className="flex justify-center items-center space-x-4 mb-8">
                        <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open w-8 h-8 text-white animate-pulse"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
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
                                <div className="w-2 h-2 rounded-full bg-[#2563EB] mr-2"></div>
                                <span className="text-md font-medium text-[#5D5D5D]">35+ Activiteiten Beschikbaar</span>
                            </div>
                        </div>

                        <div className="bg-[#F8F8FF] rounded-2xl py-2 border border-[#CDCDCD]">
                            <div className="flex items-center inter-tight-400 justify-center space-x-2">
                                <div className="w-2 h-2 rounded-full bg-[#3FDBB1] mr-2"></div>
                                <span className="text-md font-medium text-[#5D5D5D]">5-15 Minuten Per Dag</span>
                            </div>
                        </div>
                    </div>

                </div>

                <div>
                    <div className="text-center mb-8 ">
                        <div className="flex flex-col  mt-10 sm:flex-row  gap-2 justify-center items-center">
                            <div className="flex  gap-2 justify-center items-center bg-gradient-to-tr from-[#F3F4F6] to-[#E5E7EB] p-1 rounded-lg">
                                <button
                                    onClick={() => setActiveTab('speelweek')}
                                    className={`md:w-[575px] w-[160px] py-2 flex justify-center items-center gap-2 cursor-pointer rounded-lg text-sm transition-colors ${activeTab === 'speelweek'
                                        ? 'bg-[#8F34EA] text-white rounded-lg'
                                        : 'text-[#616161]  rounded-lg'
                                        }`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gamepad2 h-4 w-4"><line x1="6" x2="10" y1="11" y2="11"></line><line x1="8" x2="8" y1="9" y2="13"></line><line x1="15" x2="15.01" y1="12" y2="12"></line><line x1="18" x2="18.01" y1="10" y2="10"></line><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path></svg>
                                    <span className="inline">Speelweek</span>
                                </button>
                                <button
                                    onClick={() => setActiveTab('library')}
                                    className={`md:w-[575px] w-[160px] py-2 flex justify-center items-center gap-2 cursor-pointer rounded-lg text-sm transition-colors ${activeTab === 'library'
                                        ? 'bg-[#8F34EA] text-white rounded-lg'
                                        : 'text-[#616161] rounded-lg'
                                        }`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="hidden md:inline h-4 w-4"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M12 7v14"></path>
                                        <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                                    </svg>
                                    <span className="inline">Activiteitenbibliotheek</span>
                                </button>

                            </div>
                            <Link to={"/create-activity"}>
                                <button className="justify-center md:w-auto w-full cursor-pointer text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary hover:bg-primary/90 h-11 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold py-5 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 whitespace-nowrap ">
                                    <Plus size={16} />
                                    Activiteit Toevoegen
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {activeTab === 'library' && <div className="bg-gradient-to-br md:w-[90%] mx-auto w-full rounded-xl from-[#EFF6FF] via-[#FAF5FF] to-[#FDF2F8] p-6 mb-8 shadow-sm">
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
                            <option value="Alle Leergebieden">Alle Leergebieden</option>
                            <option value="Emotionele gezondheid">Emotionele gezondheid</option>
                            <option value="Veerkracht">Veerkracht</option>
                            <option value="Dankbaarheid">Dankbaarheid</option>
                            <option value="Zelfzorg">Zelfzorg</option>
                            <option value="Geldwijsheid">Geldwijsheid</option>
                            <option value="Ondernemerschap">Ondernemerschap</option>
                            <option value="Anders denken">Anders denken</option>

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
                            <option value="hoogstgewaardeerde">Hoogst gewaardeerde</option>
                            <option value="meestgewaardeerde">Meest gewaardeerde</option>
                            <option value="voltooid">Voltooid</option>
                        </select>
                    </div>
                </div>}

                <div className="md:w-[90%] mx-auto">
                    <div className="h-auto relative bg-gradient-to-br rounded-3xl from-[#EFF6FF] via-[#FAF5FF] to-[#FDF2F8] mt-5 p-4 md:p-8">
                        <img
                            src={StarImage}
                            alt="Top left decoration"
                            className="absolute top-2 left-2 sm:top-4 sm:left-4 lg:top-6 lg:left-6 w-16 sm:w-20 lg:w-24 h-auto z-10"
                        />
                        <div className=" w-full m-auto">
                            {activeTab === 'speelweek' && <div className="flex justify-center items-center flex-col">

                                <h1 className="text-2xl md:text-3xl  text-[#000000] poppins-700 py-5">Deze Week: Week 1</h1>
                                <p className="text-[#4B5563] text-center text-sm mb-6">5 zorgvuldig geselecteerde activiteiten om samen te ontdekken</p>
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
                                                    <div className="h-18 w-18 shadow-3xl bg-[#f1e7e7] rounded-full flex items-center justify-center mx-auto mb-4">
                                                        <img src={activity.image || "/placeholder.svg"} className="h-10 w-10" alt="" />
                                                    </div>                                                </div>
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
            {/* <TestimonialsSection /> */}
            <EducationalQuotes />
            <Specs />
            <Faqs />
        </>
    )
}