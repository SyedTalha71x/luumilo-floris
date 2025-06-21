import React from 'react';

export default function IngezondenActiviteiten() {


    return (
        <div className="h-auto ">
            <div className="max-w-7xl  mx-auto">
                <div className='border border-[#E2E4E9] p-4 rounded-xl'>

                    <div className="flex  flex-col sm:flex-row sm:items-center gap-3    sm:justify-between mb-8">
                        <div className="">
                            <h1 className="text-xl  text-[#000000] inter-tight-400 mb-2">Ingezonden Activiteiten</h1>
                            <div className='mt-2'>
                                <span className='py-1 px-8 rounded-3xl bg-[#8937EA99] text-white inter-tight-400 text-sm'>0 wachtend</span>
                            </div>
                            <p className="text-black mt-2 inter-tight-400 text-[16px]">Activiteiten die wachten op goedkeuring. Na goedkeuring/afwijzing verdwijnen ze uit deze lijst.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}