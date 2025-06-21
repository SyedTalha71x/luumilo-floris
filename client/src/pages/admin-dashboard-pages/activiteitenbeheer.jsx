import React, { useState } from 'react';
import { ChevronDown, Plus } from 'lucide-react';

export default function ActiviteitenBeheer() {
  const [selectedFilter, setSelectedFilter] = useState('Alle Activiteiten');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filterOptions = [
    'Alle Activiteiten',
    'Actieve Activiteiten',
    'Voltooide Activiteiten',
    'Concept Activiteiten'
  ];

  return (
    <div className="h-auto ">
      <div className="max-w-7xl  mx-auto">
        <div className='border border-[#E2E4E9] p-4 rounded-xl'>

        <div className="flex  flex-col sm:flex-row sm:items-center gap-3    sm:justify-between mb-8">
          <div className="">
            <h1 className="text-xl  text-[#000000] inter-tight-400 mb-2">Activiteiten Beheer</h1>
            <p className="text-[#838383] inter-tight-400 text-[16px]">Beheer alle activiteiten: status wijzigen, verbergen of permanent verwijderen</p>
          </div>
          <button className="bg-[#000000] cursor-pointer justify-center inter-tight-400 text-sm text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors whitespace-nowrap">
            <Plus className="w-4 h-4" />
            Nieuwe Activiteit          </button>
        </div>

        <div className="rounded-lg">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start     gap-4">
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="bg-white border border-gray-300 text-[#707070] inter-tight-400 rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-gray-50 transition-colors min-w-48"
                >
                <span className="text-gray-700">{selectedFilter}</span>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                  <div className="absolute top-full text-sm inter-tight-400 text-[#707070] left-0 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                  {filterOptions.map((option) => (
                      <button
                      key={option}
                      onClick={() => {
                        setSelectedFilter(option);
                        setIsDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div className=" text-[#707070] inter-tight-400">
              <span className="font-medium text-black">0</span> Activiteiten Totaal
            </div>
          </div>
        </div>
              </div>
      </div>
    </div>
  );
}