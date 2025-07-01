import { Award, Crown, Heart } from "lucide-react";
import Badge1 from '../../public/profile-images/Frame.svg'
import Badge2 from '../../public/profile-images/Frame-1.svg'
import Badge3 from '../../public/profile-images/Frame-3.svg'

export default function EarnedBadgesPage() {
  const badges = [
    {
      id: 1,
      title: "First Step",
      image: Badge1,
      bgColor: "bg-[#FFF6F7]",
    },
    {
      id: 2,
      title: "5-In-A Row",
      image: Badge2,
      bgColor: "bg-[#FFF6F7]",
    },
    {
      id: 3,
      title: "Consistency Champ",
      image: Badge3,
      bgColor: "bg-[#FFF6F7]",
    }
  ];

  return (
    <div className="">
      <div className="bg-white rounded-lg border border-[#E2E4E9] p-6 md:p-8">
        <h1 className="text-xl md:text-[24px] intet-tight-400x  text-black mb-8">
          Earned Badges
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className=" rounded-xl border border-[#D9D9D9] p-6   shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-6 bg-[#FFFCF8]">
                <div className={`w-26 h-26 rounded-2xl ${badge.iconBg} flex items-center justify-center`}>
                  <div className={`w-26 h-26 rounded-xl shadow-xl ${badge.bgColor} flex items-center justify-center`}>
                   <img src={badge.image} alt="" />
                  </div>
                </div>
              </div>

              <h3 className="text-lg md:text-xl poppins-700 text-black text-center">
                {badge.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}