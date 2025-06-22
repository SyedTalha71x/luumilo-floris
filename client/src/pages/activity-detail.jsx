"use client"

/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"
import { ArrowLeft, Clock, Users, Star, CheckCircle } from "lucide-react"
import { useParams, useNavigate } from "react-router-dom"
import DetailImage from "../../public/images/SVG-detail.svg"
import DetailImage1 from "../../public/images/SVG-detail-1.svg"
import DetailImage2 from "../../public/images/Frame (1)-detail.svg"

import BackgroundPicture1 from "../../public/images/Background (1).svg"
import BackgroundPicture2 from "../../public/images/Background (2).svg"
import BackgroundPicture3 from "../../public/images/Background (3).svg"
import BackgroundPicture4 from "../../public/images/Background (4).svg"
import BackgroundPicture5 from "../../public/images/Background.svg"

function ActivityDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [showRatingModal, setShowRatingModal] = useState(false)
  const [selectedRating, setSelectedRating] = useState(0)

  const activities = [
    {
      id: 1,
      title: "Dank-Kettingsprint",
      description: "Maak een mini-slinger van dankbaarheid die dagelijks kan groeien.",
      category: "Dankbaarheid",
      categoryDescription: "Ontdekken waarom we dankbaar zijn",
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
    setCompleted(true)
    console.log(`Marking activity ${activityData.id} as complete`)
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

  const getIconColorClasses = (color) => {
    const colorMap = {
      orange: "text-orange-500 bg-orange-100",
      blue: "text-blue-500 bg-blue-100",
      green: "text-green-500 bg-green-100",
      purple: "text-purple-500 bg-purple-100",
      pink: "text-pink-500 bg-pink-100",
      red: "text-red-500 bg-red-100",
    }
    return colorMap[color] || "text-orange-500 bg-orange-100"
  }

  const getRatingRange = (index) => {
    const ranges = ["1-2", "3-4", "5-6", "7-8", "9-10"]
    return ranges[index]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-4 lg:p-6">
        <div className="px-4 py-3">
          <button onClick={handleBack} className="flex items-center text-[#262F40] cursor-pointer transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="text-sm inter-tight-400 font-medium">Terug naar activiteiten</span>
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6 p-4 rounded-2xl bg-[#F1F6FB]">
            <div className={`${getColorClasses(activityData.color)} rounded-2xl text-white p-8 text-center`}>
              <div className="w-16 h-16 shadow-2xl   bg-white rounded-full flex items-center justify-center mx-auto mb-4">
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
              className={`w-full ${completed ? "bg-gray-400" : "bg-gradient-to-br from-[#079A68] to-[#20C25F]"} cursor-pointer text-white py-3 text-sm px-6 rounded-xl inter-tight-700 font-medium transition-colors flex items-center justify-center space-x-2`}
              disabled={completed}
            >
              <CheckCircle className="w-5 h-5" />
              <span>{completed ? "Voltooid" : "Markeer als voltooid"}</span>
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
                    className="text-sm inter-tight-700 font-medium text-[#1F1F1F] hover:text-blue-600 cursor-pointer"
                  >
                    {activityData.rating} / 10
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg border border-[#E2E4E9] p-6">
              <h3 className="inter-tight-700 font-semibold mb-4 text-[#1F1F1F]">Leergebied</h3>
              <div className="flex items-center space-x-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${getIconColorClasses(activityData.color)}`}
                >
                  <img src={activityData.image || "/placeholder.svg"} alt="" />
                </div>
                <div>
                  <p className="inter-tight-700 font-medium text-sm text-[#1F1F1F]">{activityData.category}</p>
                  <p className="text-xs inter-tight-400 text-[#4B5563]">{activityData.categoryDescription}</p>
                </div>
              </div>
            </div>

            {completed && (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <div>
                    <p className="inter-tight-700 font-medium text-sm text-green-800">Activiteit voltooid!</p>
                    <p className="text-xs inter-tight-400 text-green-600">Goed gedaan!</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {showRatingModal && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-xl w-full mx-4 relative">
            <div className="text-center">
              <h2 className="text-lg font-semibold inter-tight-400 text-gray-800 mb-8">Beoordeling Selecteer Een Aantal Sterren:</h2>

              <div className="flex justify-center space-x-4 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => handleStarClick(star)}
                    className="focus:outline-none transition-transform hover:scale-110"
                  >
                    <Star
                      className={`w-12 h-12 ${
                        star <= selectedRating ? "fill-yellow-400 text-yellow-400" : "fill-none text-gray-300 stroke-2"
                      }`}
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

              <div className="flex space-x-4">
                <button
                  onClick={handleRateLater}
                  className="flex-1 px-6 py-3 border inter-tight-400 text-sm border-gray-600 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                >
                  Beoordeel Later
                </button>
                <button
                  onClick={handleSubmitRating}
                  disabled={selectedRating === 0}
                  className={`flex-1 px-6 py-3 rounded-xl inter-tight-400 text-sm font-medium transition-colors ${
                    selectedRating > 0
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
    </div>
  )
}

export default ActivityDetail
