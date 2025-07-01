"use client"

import { useState } from "react"
import { Edit3, Trash2, Badge, ChevronDown, Upload } from "lucide-react"

const ManageBadge = () => {
  const [activeTab, setActiveTab] = useState("CORE PROGRESSION")
  const [isCreating, setIsCreating] = useState(false)
  const [formData, setFormData] = useState({
    category: "Core progression",
    name: "",
    description: "",
    photo: null,
  })

  const tabs = ["CORE PROGRESSION", "LEARNING AREA BADGES", "SPECIAL & BONUS BADGES", "HIGH ACHIEVER BADGES"]

  const badges = [
    {
      id: 1,
      name: "First Step",
      description: "Complete Your 1st Activity",
      icon: "🏆",
      category: "CORE PROGRESSION",
    },
  ]

  const filteredBadges = badges.filter((badge) => badge.category === activeTab)

  const handleCreateBadge = () => {
    setIsCreating(true)
  }

  const handleBackToList = () => {
    setIsCreating(false)
    setFormData({
      category: "Core progression",
      name: "",
      description: "",
      photo: null,
    })
  }

  const handlePublish = () => {
    // Handle publish logic here
    console.log("Publishing badge:", formData)
    handleBackToList()
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  if (isCreating) {
    return (
      <div className="">
        <div className="max-w-7xl mx-auto border border-[#E2E4E9] md:h-[500px] h-full rounded-md p-6">
          {/* Create Badge Header */}
          <div className="mb-8">
            <h1 className="text-xl lg:text-[24px] inter-tight-400 text-[#262F40]">Create new badge</h1>
          </div>

          {/* Create Badge Form */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              {/* Category Dropdown */}
              <div className="p-4 relative">
                <div className="relative">
                  <select
                    value={formData.category}
                    onChange={(e) => handleInputChange("category", e.target.value)}
                    className="w-full appearance-none bg-transparent text-[#262F40] text-sm inter-tight-400 focus:outline-none cursor-pointer pr-8"
                  >
                    <option value="Core progression">Core progression</option>
                    <option value="Learning area">Learning area</option>
                    <option value="Special & bonus">Special & bonus</option>
                    <option value="High achiever">High achiever</option>
                  </select>
                  <ChevronDown className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div className="p-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full bg-transparent placeholder-[#262F40] text-sm inter-tight-400 text-[#262F40] outline-none"
                />
              </div>

              <div className="p-4">
                <input
                  type="text"
                  placeholder="Description"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  className="w-full bg-transparent text-sm inter-tight-400 text-[#262F40] placeholder-[#262F40]  focus:outline-none"
                />
              </div>

              {/* Upload Photo */}
              <div className="p-4">
                <div className="flex items-center gap-2 cursor-pointer">
                  <Upload className="w-4 h-4 text-[#262F40]" />
                  <span className="text-sm inter-tight-400 text-[#262F40] ">upload photo</span>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleInputChange("photo", e.target.files[0])}
                  className="hidden"
                  id="photo-upload"
                />
              </div>

              {/* Publish Button */}
              <div className="p-4 flex items-center">
                <button
                  onClick={handlePublish}
                  className="w-full bg-[#16A34A] hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm inter-tight-400 transition-colors"
                >
                  Publish
                </button>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-6">
            <button
              onClick={handleBackToList}
              className="text-[#262F40] text-sm inter-tight-400 hover:text-gray-600 transition-colors"
            >
              ← Back to badges
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="">
      <div className="max-w-7xl mx-auto border border-[#E2E4E9] md:h-[500px] h-full rounded-md p-3">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <h1 className="text-xl lg:text-[24px] inter-tight-400 text-[#262F40]">Manage badge</h1>
          <button
            onClick={handleCreateBadge}
            className="bg-[#16A34A] inter-tight-400 text-sm cursor-pointer hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <Badge className="w-4 h-4" />
            Create new badge
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex gap-4 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-4 text-sm font-medium whitespace-nowrap transition-colors ${
                    activeTab === tab
                      ? "border-gray-900 text-[#060606] "
                      : "border-transparent text-[#6B7280] hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-0">
            {filteredBadges.length > 0 ? (
              <div className="divide-y divide-gray-200">
                {filteredBadges.map((badge) => (
                  <div
                    key={badge.id}
                    className="grid grid-cols-1 md:grid-cols-12 gap-4 p-3 hover:bg-gray-50 transition-colors"
                  >
                    <div className="md:col-span-3 flex items-center">
                      <span className="text-[#262F40] font-medium text-sm inter-tight-400">{badge.name}</span>
                    </div>

                    <div className="md:col-span-4 flex items-center">
                      <span className="text-[#262F40] text-sm inter-tight-400">{badge.description}</span>
                    </div>

                    <div className="md:col-span-2 flex items-center justify-center md:justify-start">
                      <div className="w-12 h-12 bg-[#FFFCF8] rounded-xl shadow-xl flex items-center justify-center">
                        <span className="text-xl">🏆</span>
                      </div>
                    </div>

                    <div className="md:col-span-3 flex items-center gap-2 justify-end">
                      <button className="flex items-center gap-2 px-5 py-2 text-[#262F40] bg-[#F7FAFC] text-sm cursor-pointer border border-[#E2E4E9] rounded-md transition-colors">
                        <Edit3 className="w-4 h-4" />
                        <span className="text-sm">Edit</span>
                      </button>
                      <button className="flex items-center gap-2 px-5 py-2 text-[#262F40] bg-[#F7FAFC] text-sm cursor-pointer border border-[#E2E4E9] rounded-md transition-colors">
                        <Trash2 className="w-4 h-4" />
                        <span className="text-sm">Delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-12 text-center">
                <div className="text-gray-400 mb-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏆</span>
                  </div>
                </div>
                <h3 className="text-[24px] inter-tight-400 mb-2">No badges found</h3>
                <p className="text-gray-500 mb-6 text-sm inter-tight-400">
                  Get started by creating your first badge for this category.
                </p>
                <div className="flex justify-center items-center">
                  <button
                    onClick={handleCreateBadge}
                    className="bg-[#16A34A] inter-tight-400 text-sm cursor-pointer hover:bg-green-700 text-white px-4 py-2 rounded-lg justify-center flex items-center gap-2 transition-colors"
                  >
                    <Badge className="w-4 h-4" />
                    Create new badge
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageBadge
