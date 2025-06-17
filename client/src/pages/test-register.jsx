import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function TestRegister() {
  const [experience, setExperience] = useState("")

  return (
    <div className="h-full  p-4 mt-5">
        <div className="max-w-7xl mx-auto">
        <div>
        <h1 className="text-[#000000] mb-5 poppins-700 text-2xl">
            Register As Tester
        </h1>
        </div>
       
      <div className="  rounded-lg border border-[#E2E4E9] p-6 md:p-8">
        
        <form className="space-y-8">
          <div>
            <h2 className="text-lg text-[#000000] mb-4 inter-tight-700">Parent / Guardian Information</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm  text-[#000000] inter-tight-400 mb-1">
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="type..."
                    className="w-full px-3 py-2 border border-[#F0F1F4] bg-[#FBFCFD] rounded-md  placeholder-gray-400 outline-none inter-tight-400 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm  text-[#000000] inter-tight-400 mb-1">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="type..."
                    className="w-full px-3 py-2 border border-[#F0F1F4] bg-[#FBFCFD] rounded-md  placeholder-gray-400 outline-none inter-tight-400 text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm  text-[#000000] inter-tight-400 mb-1">
                  E-Mail
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="abc@def.com"
                  className="w-full px-3 py-2 border border-[#F0F1F4] bg-[#FBFCFD] rounded-md  placeholder-gray-400 outline-none inter-tight-400 text-sm"
                />
              </div>
            </div>
          </div>

          {/* Child Information */}
          <div>
            <h2 className="text-lg text-[#000000] mb-4 inter-tight-700">Child Information</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="childFirstName" className="block text-sm  text-[#000000] inter-tight-400 mb-1">
                    Child's First Name*
                  </label>
                  <input
                    type="text"
                    id="childFirstName"
                    placeholder="your child's first name"
                    className="w-full px-3 py-2 border border-[#F0F1F4] bg-[#FBFCFD] rounded-md  placeholder-gray-400 outline-none inter-tight-400 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="childAge" className="block text-sm  text-[#000000] inter-tight-400 mb-1">
                    Child's Age*
                  </label>
                  <input
                    type="text"
                    id="childAge"
                    placeholder="type..."
                    className="w-full px-3 py-2 border border-[#F0F1F4] bg-[#FBFCFD] rounded-md  placeholder-gray-400 outline-none inter-tight-400 text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="multipleChildren" className="block text-sm  text-[#000000] inter-tight-400 mb-1">
                  Do You Have More Than One Child? (Optional)
                </label>
                <input
                  type="text"
                  id="multipleChildren"
                  placeholder="eg. yes, also an 8 year old son"
                  className="w-full px-3 py-2 border border-[#F0F1F4] bg-[#FBFCFD] rounded-md  placeholder-gray-400 outline-none inter-tight-400 text-sm"
                />
              </div>
            </div>
          </div>

          {/* Your Experience & Background */}
          <div>
            <h2 className="text-lg text-[#000000] mb-4 inter-tight-700">Your Experience & Background</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm  text-[#000000] inter-tight-400 mb-3">
                  Do You Have Experience In Education, Upbringing Or Child Coaching?*
                </p>
                <div className="space-y-2">
                  <label className="flex items-start">
                    <input
                      type="radio"
                      name="experience"
                      value="professional"
                      checked={experience === "professional"}
                      onChange={(e) => setExperience(e.target.value)}
                      className="mt-0.5 h-4 w-4 text-blue-600 border-gray-300 "
                    />
                    <span className="ml-2 text-sm text-[#898989] inter-tight-400">
                      Yes, I Am A Professional Teacher, Child Coach, Pedagogue, Etc!
                    </span>
                  </label>
                  <label className="flex items-start">
                    <input
                      type="radio"
                      name="experience"
                      value="interested"
                      checked={experience === "interested"}
                      onChange={(e) => setExperience(e.target.value)}
                      className="mt-0.5 h-4 w-4 text-blue-600 border-gray-300 "
                    />
                    <span className="ml-2 text-sm text-[#898989] inter-tight-400">
                      NO, But I Am Very Interested In Child Development
                    </span>
                  </label>
                  <label className="flex items-start">
                    <input
                      type="radio"
                      name="experience"
                      value="none"
                      checked={experience === "none"}
                      onChange={(e) => setExperience(e.target.value)}
                      className="mt-0.5 h-4 w-4 text-blue-600 border-gray-300 "
                    />
                    <span className="ml-2 text-sm text-[#898989] inter-tight-400">No, No Specific Background</span>
                  </label>
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="experienceDetails" className="block text-sm  text-[#000000] inter-tight-400 mb-1">
                  Tell Us More About Your Experience (Optional)
                </label>
                <textarea
                  id="experienceDetails"
                  rows={3}
                  placeholder="for example, I am a primary school teacher with 10 years of experience & specialized in social-emotional development..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md  placeholder-gray-400 outline-none inter-tight-400 text-sm resize-none"
                />
              </div>
            </div>
          </div>

          {/* Why Do You Want To Become A Test Family? */}
          <div>
            <h2 className="text-lg text-[#000000] mb-4 inter-tight-700">Why Do You Want To Become A Test Family?</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm  text-[#000000] inter-tight-400 mb-2">Why are you interested in luumilo?</p>
                <textarea
                placeholder="Tell us why you want to participate as a test family and what you hope to achieve with LumiJo."
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md  placeholder-gray-400 outline-none inter-tight-400 text-sm resize-none"
                />
              </div>
              <div>
                <label htmlFor="timeCommitment" className="block text-sm font-medium inter-tight-400 text-[#000000] mb-1">
                  How Much Time Per Week Can You Spend On Testing And Feedback?
                </label>
                <div className="relative">
                  <select
                    id="timeCommitment"
                    className="w-full px-3 inter-tight-400 py-2 border border-[#B9B9B9] bg-[#F7FAFC] rounded-md  outline-none inter-tight-400 text-sm appearance-none"
                  >
                    <option value="">Select Time Investment</option>
                    <option value="1-2">1-2 hours per week</option>
                    <option value="3-5">3-5 hours per week</option>
                    <option value="6-10">6-10 hours per week</option>
                    <option value="10+">More than 10 hours per week</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      </div>
    </div>
  )
}
