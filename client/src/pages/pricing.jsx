import { Check, Users } from 'lucide-react'
import React from 'react'
import Tick from '../../public/nav-images/contract.svg'
const pricing = () => {
  return (
    <section className="py-16 px-4 mt-10 sm:px-6 lg:px-8 h-auto max-w-7xl m-auto ">
    <div className="max-w-7xl w-full m-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl inter-tight-700 lg:text-2xl  text-[#636363]">
        KIES JE ABONNEMENT!
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
      

        <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-200 relative">
          <div className="flex flex-col items-start">
            <div className="mb-4 mt-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <img src={Tick} alt="" />
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-lg inter-tight-700 text-[#0F2137]">Proefreis</h3>
              <p className="text-[#666666] inter-tight-400 text-sm">Start vandaag met je kind</p>
            </div>
          </div>

          <div className="space-y-4 mb-8 mt-5">
            {["Gratis week om te starten: Probeer 1 week alle activiteiten, exclusief voor de eerste 1,000 ouders!", "Flexibel stoppen wanneer je wilt: Geen gedoe, opzeggen is makkelijk!"].map(
              (text, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#3FDBB1] rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[#343D48] inter-tight-400 text-sm">{text}</span>
                </div>
              ),
            )}
          </div>

          <button className="w-full bg-gradient-to-br from-[#22C55E] to-[#059669] cursor-pointer text-sm text-white inter-tight-400 py-3 px-6 rounded-2xl transition-colors duration-500">
            Meld je NU aan!
            </button>

          <p className="text-xs text-gray-500 text-center mt-4">daarna €9.95/maand</p>
        </div>
        <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-200 relative">
          <div className="flex flex-col items-start">
            <div className="mb-4 mt-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <img src={Tick} alt="" />
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-lg inter-tight-700 text-[#0F2137]">Jaaravontuur</h3>
              <p className="text-[#666666] inter-tight-400 text-sm">Ervaar nu samen een jaar vol groei en inspiratie</p>
            </div>
          </div>

          <div className="space-y-4 mb-8 mt-5">
            {["Heel jaar onbeperkt waarde: Geniet een jaar lang van alle activiteiten, exclusief voor de eerste 1,000 ouders!", "Bespaar 16% op je abonnement: Een slimme deal voor je portemonnee!"].map(
              (text, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#3FDBB1] rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[#343D48] inter-tight-400 text-sm">{text}</span>
                </div>
              ),
            )}
          </div>


          <button className="w-full bg-gradient-to-br from-[#22C55E] to-[#059669] cursor-pointer text-sm text-white inter-tight-400 py-3 px-6 rounded-2xl transition-colors duration-500">
            Meld je NU aan!
            </button>
          <p className="text-xs text-gray-500 text-center mt-4">€99.95/jaar</p>
        </div>


        <div className="relative ">
          <div className="absolute inset-0 bg-gradient-to-br from-[#DB297A] to-[#7940EA]  rounded-3xl z-0"></div>
          <div className="absolute  left-1/2 transform -translate-x-1/2 z-20">
            <div className=" text-white md:px-6 px-full py-2 font-bold text-sm">Meest gekozen</div>
          </div>
          <div className="bg-white mt-10 rounded-3xl pb-20 p-8 m-3 shadow-lg relative z-10">
            <div className="flex flex-col items-start">
              <div className="mb-4 mt-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <img src={Tick} alt="" />
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-lg inter-tight-700 text-[#0F2137]">Eeuwig Sterk</h3>
                <p className="text-[#666666] inter-tight-400 text-sm">Bouw aan het onderwijs van de toekomst
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-8 mt-5">
              {[
                "Eénmalig investeren, altijd toegang: Betaal nu één keer en ontvang betekenis voor een lifetime.",
                "Exclusieve pioniersstatus: Word een pionier met early adaptor badge.",
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#3FDBB1] rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 text-sm">{text}</span>
                </div>
              ))}
            </div>

            <button className="w-full bg-gradient-to-br from-[#22C55E] to-[#059669] cursor-pointer text-sm text-white inter-tight-400 py-3 px-6 rounded-2xl transition-colors duration-500">
            Meld je NU aan!
            </button>

            <p className="text-xs text-gray-500 text-center mt-4">
            eenmalig €199.95
            </p>
          </div>
        </div>
      </div>

    
    </div>
  </section>
  )
}

export default pricing