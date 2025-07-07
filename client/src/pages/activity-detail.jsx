/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"
import { ArrowLeft, Clock, Users, Star, CheckCircle, X } from "lucide-react"
import { useParams, useNavigate } from "react-router-dom"
import Badge1 from '../../public/profile-images/Frame.svg'

import { motion, AnimatePresence } from "framer-motion"

import DetailImage from "../../public/images/SVG-detail.svg"
import DetailImage1 from "../../public/images/SVG-detail-1.svg"
import DetailImage2 from "../../public/images/Frame (1)-detail.svg"
import BackgroundPicture1 from "../../public/images/Background (1).svg"
import BackgroundPicture2 from "../../public/images/Background (2).svg"
import BackgroundPicture3 from "../../public/images/Background (3).svg"
import BackgroundPicture4 from "../../public/images/Background (4).svg"
import BackgroundPicture5 from "../../public/images/Background.svg"
import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import Faqs from "../components/faqs"


const Sparkle = ({ style }) => (
  <div className="absolute pointer-events-none" style={style}>
    <div className="sparkle">✨</div>
  </div>
)

const CelebrationSparkles = ({ isVisible, onComplete }) => {
  const [sparkles, setSparkles] = useState([])

  useEffect(() => {
    if (isVisible) {
      const newSparkles = []
      for (let i = 0; i < 10; i++) {
        newSparkles.push({
          id: i,
          // Position sparkles around button area (bottom of left column)
          left: Math.random() * 20 + 20 + "%", // 20% to 80% from left
          top: Math.random() * 90 + 20 + "%", // 70% to 100% from top (bottom area)
          animationDelay: Math.random() * 2 + "s",
          animationDuration: Math.random() * 3 + 2 + "s",
        })
      }
      setSparkles(newSparkles)

      const timer = setTimeout(() => {
        setSparkles([])
        onComplete()
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [isVisible, onComplete])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {sparkles.map((sparkle) => (
        <Sparkle
          key={sparkle.id}
          style={{
            left: sparkle.left,
            top: sparkle.top,
            animationDelay: sparkle.animationDelay,
            animationDuration: sparkle.animationDuration,
          }}
        />
      ))}
      <style jsx>{`
        .sparkle {
          font-size: 30px;
          animation: sparkleButtonFloat var(--duration, 3s) ease-out forwards;
        }
        
        @keyframes sparkleButtonFloat {
          0% {
            transform: translateX(0) translateY(0) rotate(0deg) scale(0);
            opacity: 0;
          }
          20% {
            opacity: 1;
            transform: translateX(5px) translateY(-15px) rotate(180deg) scale(1);
          }
          60% {
            opacity: 1;
            transform: translateX(-10px) translateY(-25px) rotate(360deg) scale(1.1);
          }
          90% {
            opacity: 1;
            transform: translateX(15px) translateY(-35px) rotate(540deg) scale(1);
          }
          100% {
            transform: translateX(0) translateY(-45px) rotate(720deg) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}

const BadgeModal = ({ isVisible, onClose, onSubmitRating }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="bg-white rounded-3xl p-8 max-w-2xl w-full relative shadow-xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>

            {/* Content Layout */}
            <div className="flex flex-col md:p-2 p-0 sm:flex-row gap-6 items-center sm:items-start">
              {/* Badge Section */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", duration: 0.6 }}
                className="flex-1 flex justify-center sm:justify-end"
              >
                <div className="rounded-2xl border border-[#D9D9D9] p-3 shadow-xl w-full">
                  <div className="flex justify-center mb-3">
                    <div className="w-24 h-24 rounded-2xl  flex items-center justify-center">
                      <div className="w-20 h-20 rounded-xl shadow-2xl bg-[#FFF6F7] flex items-center justify-center">
                        <img src={Badge1} alt="Badge" className="w-10 h-10" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-black text-center inter-tight-400">First Step</h3>
                  <p className="mt-1 text-sm text-[#828282] inter-tight-400 text-center">Complete Your 1st Activity</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex-1 mt-2 text-center sm:text-left"
              >
                <h2 className="text-2xl  text-[#000000] inter-tight-700 mb-2">Congratulations!</h2>
                <p className="text-[#000000] inter-tight-400 mb-3 leading-relaxed">
                  You've Successfully Completed The Task And Earned A New Badge!
                </p>

              </motion.div>
            </div>

            <div className="flex justify-center mt-8 items-center text-center inter-tight-400 ">

              <p className="text-sm text-[#000000]">
                Keep Up The Great Work And Continue Unlocking More Achievements.
              </p>
            </div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 mt-6"
            >
              <button
                onClick={onSubmitRating}
                className="flex-1 px-6 py-2 border text-[#000000] border-[#A1A1A1] text-sm rounded-xl transition-colors"
              >
                Submit Rating
              </button>
              <button
                onClick={onClose}
                className="flex-1 px-6 py-2 bg-gradient-to-r from-[#2B60EB] to-[#8F35EA] text-white text-sm rounded-xl"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function ActivityDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [showRatingModal, setShowRatingModal] = useState(false)
  const [selectedRating, setSelectedRating] = useState(0)
  const [showCelebration, setShowCelebration] = useState(false)
  const [showBadgeModal, setShowBadgeModal] = useState(false)

  const activities = [
    {
      id: 1,
      title: "Dank-Kettingsprint",
      description: "Maak een mini-slinger van dankbaarheid die dagelijks kan groeien.",
      category: "Dankbaarheid",
      categoryDescription:
        "Kinderen die leren stilstaan bij wat fijn is, voelen zich vaak rustiger en blijer. In dit leergebied leert je kind kijken naar wat er wél is, waardering uitspreken en kleine dingen opmerken. Dat helpt bij een positieve kijk op het leven.",
      image: BackgroundPicture5,
      color: "orange",
      duration: "8 min",
      ageRange: "3-6 jaar",
      rating: 9.5,
      materials: "3 papieren stroken, nietmachine",
      steps: [
        "Schrijf/teken drie dingen van vandaag waar jullie dankbaar voor zijn",
        "Niet de stroken tot een mini-slinger",
        "Hang op kinderhoogte, volgende dag kun je de slinger met een nieuwe mini-slinger koppelen",
      ],
      effect:
        "Stimuleert probleemoplossend vermogen, vergroot de fijne motoriek en stimuleert creativiteit door te experimenteren met verschillende materialen en structuren.",
      learningAreas: ["Dankbaarheid", "Fijne motoriek", "Creativiteit"],
      difficulty: "Makkelijk",
      preparation: "2 min",
      completed: false,
      tag: "Dankbaarheid",
      tagColor: "bg-[#F59E0B] text-white",
    },
    {
      id: 2,
      title: "Toren-van-Terugkaats",
      description: "Maak een mini-slinger van dankbaarheid die dagelijks kan groeien.",
      category: "Veerkracht",
      categoryDescription: "Omgaan met tegenslagen",
      image: BackgroundPicture1,
      color: "blue",
      duration: "10 min",
      ageRange: "3-6 jaar",
      rating: 9.5,
      materials: "Kartonnen dozen, tape",
      steps: [
        "Bouw een toren van kartonnen dozen",
        "Laat kinderen de toren omgooien",
        "Bespreek hoe het voelt en bouw samen weer op",
      ],
      effect: "Leert kinderen omgaan met teleurstelling en het weer opbouwen na tegenslag.",
      learningAreas: ["Veerkracht", "Samenwerking", "Probleemoplossing"],
      difficulty: "Medium",
      preparation: "5 min",
      completed: false,
      tag: "Veerkracht",
      tagColor: "bg-[#3B82F6] text-white",
    },
    {
      id: 3,
      title: "Spiegelgezicht-Safari",
      description: "Ontdek emoties door gezichtsuitdrukkingen in de spiegel te maken en lichaamssignalen te voelen.",
      category: "Emotionele Gezondheid",
      categoryDescription: "Emoties herkennen en uiten",
      image: BackgroundPicture2,
      color: "red",
      duration: "10 min",
      ageRange: "3-6 jaar",
      rating: 9.5,
      materials: "Spiegel, emotiekaarten",
      steps: [
        "Maak verschillende gezichtsuitdrukkingen voor de spiegel",
        "Benoem de emoties die je ziet",
        "Bespreek wanneer je deze emoties voelt",
      ],
      effect: "Helpt kinderen emoties te herkennen en begrijpen, zowel bij zichzelf als bij anderen.",
      learningAreas: ["Emotionele intelligentie", "Zelfbewustzijn", "Communicatie"],
      difficulty: "Makkelijk",
      preparation: "2 min",
      completed: false,
      tag: "Emotionele Gezondheid",
      tagColor: "bg-[#EF4444] text-white",
    },
    {
      id: 4,
      title: "Limonade-Lab",
      description: "Experimenteer met smaken en laat familie jouw creaties beoordelen als echte klanten.",
      category: "Veerkracht",
      categoryDescription: "Omgaan met feedback",
      image: BackgroundPicture3,
      color: "blue",
      duration: "10 min",
      ageRange: "3-6 jaar",
      rating: 9.5,
      materials: "Verschillende vruchtensappen, water, suiker, bekers",
      steps: [
        "Meng verschillende smaken om limonade te maken",
        "Laat familie proeven en feedback geven",
        "Pas recept aan gebaseerd op feedback",
      ],
      effect: "Leert kinderen omgaan met feedback en door te zetten bij tegenslag.",
      learningAreas: ["Veerkracht", "Creativiteit", "Probleemoplossing"],
      difficulty: "Medium",
      preparation: "5 min",
      completed: false,
      tag: "Veerkracht",
      tagColor: "bg-[#3B82F6] text-white",
    },
    {
      id: 5,
      title: "Papieren-Brug-Challenge",
      description: "Los technische uitdagingen op door te experimenteren met eenvoudige materialen.",
      category: "Emotionele Gezondheid",
      categoryDescription: "Doorzettingsvermogen",
      image: BackgroundPicture4,
      color: "red",
      duration: "8 min",
      ageRange: "3-6 jaar",
      rating: 9.5,
      materials: "Papier, paperclips, kleine speelgoedfiguurtjes",
      steps: [
        "Bouw een brug van papier die een speelgoedfiguurtje kan dragen",
        "Test verschillende ontwerpen",
        "Bespreek wat werkte en wat niet",
      ],
      effect: "Ontwikkelt probleemoplossend vermogen en doorzettingsvermogen.",
      learningAreas: ["Doorzettingsvermogen", "Technisch denken", "Fijne motoriek"],
      difficulty: "Uitdagend",
      preparation: "3 min",
      completed: false,
      tag: "Emotionele Gezondheid",
      tagColor: "bg-[#EF4444] text-white",
    },
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const activityData = activities.find((activity) => activity.id === Number.parseInt(id)) || activities[0]
  const [completed, setCompleted] = React.useState(activityData.completed)

  const handleBack = () => {
    navigate(-1)
  }

  const handleMarkComplete = () => {
    setShowCelebration(true)
    setTimeout(() => {
      setCompleted(true)
      console.log(`Marking activity ${activityData.id} as complete`)
    }, 500)
  }

  const handleCelebrationComplete = () => {
    setShowCelebration(false)
    setTimeout(() => {
      setShowBadgeModal(true)
    }, 200)
  }

  const handleBadgeModalClose = () => {
    setShowBadgeModal(false)
  }

  const handleBadgeSubmitRating = () => {
    setShowBadgeModal(false)
    setShowRatingModal(true)
  }

  const handleRatingClick = () => {
    setShowRatingModal(true)
  }

  const handleStarClick = (rating) => {
    setSelectedRating(rating)
  }

  const handleSubmitRating = () => {
    console.log("Rating submitted:", selectedRating)
    setShowRatingModal(false)
    setSelectedRating(0)
  }

  const handleRateLater = () => {
    setShowRatingModal(false)
    setSelectedRating(0)
  }

  const getColorClasses = (color) => {
    const colorMap = {
      orange: "bg-orange-400",
      blue: "bg-blue-400",
      green: "bg-green-400",
      purple: "bg-purple-400",
      pink: "bg-pink-400",
      red: "bg-red-400",
    }
    return colorMap[color] || "bg-orange-400"
  }

  const getRatingRange = (index) => {
    const ranges = [
      <span key={0}>
        <span className="font-bold">1-2</span>
      </span>,
      <span key={1}>
        <span className="font-bold">3-4</span>
      </span>,
      <span key={2}>
        <span className="font-bold">5-6</span>
      </span>,
      <span key={3}>
        <span className="font-bold">7-8</span>
      </span>,
      <span key={4}>
        <span className="font-bold">9-10</span>
      </span>,
    ]
    return ranges[index]
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      <CelebrationSparkles isVisible={showCelebration} onComplete={handleCelebrationComplete} />
      <BadgeModal isVisible={showBadgeModal} onClose={handleBadgeModalClose} onSubmitRating={handleBadgeSubmitRating} />

      <div className="md:w-[90%] w-full mx-auto p-4 lg:p-6">
        <div className="px-4 py-3">
          <button onClick={handleBack} className="flex items-center text-[#262F40] cursor-pointer transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="text-sm inter-tight-400 font-medium">Terug naar activiteiten</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6 p-4 rounded-2xl bg-[#F1F6FB]">
            <div className={`${getColorClasses(activityData.color)} rounded-2xl text-white p-8 text-center`}>
              <div className="w-16 h-16 shadow-2xl bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <div>
                  <img src={activityData.image || "/placeholder.svg"} alt="" />
                </div>
              </div>
              <h1 className="text-2xl lg:text-3xl inter-tight-700 font-bold leading-tight">{activityData.title}</h1>
              <div className="flex justify-center mt-2">
                <span className={`${activityData.tagColor} px-3 py-1 rounded-full text-xs font-medium`}>
                  {activityData.tag}
                </span>
              </div>
            </div>

            <div className=" rounded-2xl p-3">
              <h2 className="text-lg poppins-700 font-semibold mb-1 text-[#111827]">Over deze activiteit</h2>
              <p className="text-[#374151] inter-tight-400 text-md leading-relaxed">{activityData.description}</p>
            </div>

            <div className=" p-3">
              <h2 className="text-lg inter-tight-700 font-semibold mb-3 flex items-center text-[#1F1F1F]">
                <div className="w-6 h-6 rounded-full flex items-center justify-center mr-1">
                  <div>
                    <img src={DetailImage || "/placeholder.svg"} alt="" />
                  </div>
                </div>
                Benodigdheden
              </h2>
              <div className="bg-[#F0FDF4] border border-[#BBF7D0] p-6 rounded-2xl">
                <p className="text-sm inter-tight-400 text-[#166534]">{activityData.materials}</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl  p-6">
              <h2 className="text-lg poppins-700 font-semibold mb-4 flex items-center text-[#111827]">
                <div className="w-6 h-6  rounded-full flex items-center justify-center mr-1">
                  <div>
                    <img src={DetailImage1 || "/placeholder.svg"} alt="" />
                  </div>
                </div>
                Stap voor stap
              </h2>
              <div className="space-y-4">
                {activityData.steps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 ">
                      <span className="text-white text-xs inter-tight-700 font-bold">{index + 1}</span>
                    </div>
                    <p className="text-sm inter-tight-400 text-[#4B5563]">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className=" rounded-2xl p-3">
              <h2 className="text-lg poppins-700 font-semibold mb-3 flex items-center text-[#111827]">
                <div className="w-6 h-6  rounded-full flex items-center justify-center mr-1">
                  <div>
                    <img src={DetailImage2 || "/placeholder.svg"} alt="" />
                  </div>
                </div>
                Effect op het kind{" "}
              </h2>
              <p className="text-[#374151] inter-tight-400 text-md leading-relaxed">{activityData.effect}</p>
            </div>

            <button
              onClick={handleMarkComplete}
              className={`w-full ${completed ? "bg-gray-400" : "bg-gradient-to-br from-[#079A68] to-[#20C25F]"} cursor-pointer text-white py-3 text-sm px-6 rounded-xl inter-tight-700 font-medium transition-colors flex items-center justify-center space-x-2 ${showCelebration ? "animate-pulse" : ""}`}
              disabled={completed || showCelebration}
            >
              <CheckCircle className="w-5 h-5" />
              <span>{completed ? "Voltooid" : showCelebration ? "Vieren..." : "Markeer als voltooid"}</span>
            </button>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-lg border border-[#E2E4E9] p-6">
              <h3 className="inter-tight-700 font-semibold mb-4 text-[#1F1F1F]">Activiteit details</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-[#4B5563]">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm inter-tight-400">Duur</span>
                  </div>
                  <span className="text-sm inter-tight-700 font-medium text-[#1F1F1F]">{activityData.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-[#4B5563]">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm inter-tight-400">Leeftijd</span>
                  </div>
                  <span className="text-sm inter-tight-700 font-medium text-[#1F1F1F]">{activityData.ageRange}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-[#4B5563]">
                    <Star className="w-4 h-4 mr-2" />
                    <span className="text-sm inter-tight-400">Rating</span>
                  </div>
                  <button
                    onClick={handleRatingClick}
                    className="text-sm text-[#1F1F1F] hover:text-blue-600 cursor-pointer"
                  >
                    <span className="inter-tight-700 font-bold">{activityData.rating}</span>
                    <span className="inter-tight-400 font-light">/10</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg border border-[#E2E4E9] p-6">
              <h3 className="inter-tight-700 font-semibold mb-4 text-[#1F1F1F]">Leergebied</h3>
              <div className="flex items-start space-x-4">
                {/* Fixed image container - larger and better proportions */}
                <div className={`w-8 h-8 rounded-2xl mt-1 flex items-center justify-center flex-shrink-0`}>
                  <img
                    src={activityData.image || "/placeholder.svg"}
                    alt={activityData.category}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <p className="inter-tight-700 font-medium text-base text-[#1F1F1F] mb-1">{activityData.category}</p>
                  <p className="text-sm inter-tight-400 text-[#4B5563] leading-relaxed">
                    {activityData.categoryDescription}
                  </p>
                </div>
              </div>
            </div>

            {completed && (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-6 animate-bounce">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <div>
                    <p className="inter-tight-700 font-medium text-sm text-green-800">Activiteit voltooid!</p>
                    <p className="text-xs inter-tight-400 text-green-600">Goed gedaan! 🎉</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {showRatingModal && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 md:p-4 p-2">
          <div className="bg-white rounded-3xl p-8 max-w-xl w-full mx-4 relative">
            <button
              onClick={() => setShowRatingModal(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>
            <div className="text-center">
              <h2 className="text-lg font-semibold inter-tight-400 text-gray-800 mb-8">
                Beoordeling Selecteer Een Aantal Sterren:
              </h2>
              <div className="flex justify-center space-x-4 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => handleStarClick(star)}
                    className="focus:outline-none transition-transform hover:scale-110"
                  >
                    <IoMdStar
                      className={`w-12 h-12 ${star <= selectedRating ? "text-[#EEAA43]" : "text-[#D9D9D9]"}`}
                    />

                  </button>
                ))}
              </div>
              <div className="flex justify-center space-x-8 mb-8 text-sm text-gray-500">
                {[1, 2, 3, 4, 5].map((index) => (
                  <span key={index} className={selectedRating === index ? "text-green-600 font-medium" : ""}>
                    {getRatingRange(index - 1)}
                  </span>
                ))}
              </div>
              <div className="flex md:flex-row gap-2  flex-col w-full space-x-4">
                <button
                  onClick={handleRateLater}
                  className="flex-1 px-6 py-2 md:w-auto w-full border inter-tight-400 text-sm border-gray-600 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                >
                  Beoordeel Later
                </button>
                <button
                  onClick={handleSubmitRating}
                  disabled={selectedRating === 0}
                  className={`flex-1 px-6 py-2 md:w-auto w-full rounded-xl inter-tight-400 text-sm font-medium transition-colors ${selectedRating > 0
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                >
                  Verstuur
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

   <Faqs/>
    </div>
  )
}

export default ActivityDetail
