import React, { useState } from 'react';

const SolutionChallenge = () => {
    const [sliderValue, setSliderValue] = useState(50);

    const handleSliderChange = (e) => {
        setSliderValue(e.target.value);
    };

    return (
        <section className="py-24 relative bg-background-dark">
            <div className="container mx-auto px-6">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-4 text-white">The Challenge: Speed vs. Clarity</h2>
                    <p className="text-slate-400 max-w-2xl text-lg">Traditional cameras fail at high speeds, resulting in motion blur that hides critical defects. Our AI reconstructs visual data in real-time.</p>
                </div>
                <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 group select-none">
                    {/* Before Image (Left) */}
                    <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBwj8FfxlbDwUChfEFzgpMV8rXbQFKL2mMkLysmj-36LZLRVhZF2KrmfB3edWH6HwkfqbmlSdmYnrRmu3g0EqZp331D7ZIfy5rshMxtkMfhiniIOsPWupTIRfY22R6_sgfHnyqcHJADukUb45TROxujdHCrdWBrMA25-nBw9p1AH_XPr5FIH737d6X2Coh0eZCTiSwhSNbyCwzwNZ9RgwQm3nsZ5HUqCx6nG2PaCD38NqSNupX-zkDlMoHU3Lo9Fs6bQcAwQgMornOY')", filter: "blur(4px) brightness(0.5)" }}>
                        <div className="absolute top-4 left-4 bg-red-500/20 text-red-400 px-3 py-1 rounded text-xs font-bold border border-red-500/30 z-30">RAW INPUT</div>
                    </div>

                    {/* After Image (Right) - Overlay with clip-path */}
                    <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBhjXZGwbh0FR-hiJA-JUDmUvVU1FDa_eT73sB9zS176BvFiEhg4PirweLdxj-GylRQt3Axo5Pl9Sx2N_MhZjNeymyLWVIXOXgzGbsF3pmQeZgUlaTRG-HJZngNioR6DPCqfJCnOPZabzoZovnwMC_7_xa9_t1SNZDhz43MwEeYCW8GNAWbcPeJwC2cspErWPNjXhR1nhoYgaYgjlnMgi9xTcnFz5z_cOCKP2DiY-sPcpjZ92ysavW5IcGbavb8nxSFv-p8wRR5L-ZN')", clipPath: `polygon(${sliderValue}% 0, 100% 0, 100% 100%, ${sliderValue}% 100%)` }}>
                        <div className="absolute top-4 right-4 bg-primary/20 text-primary px-3 py-1 rounded text-xs font-bold border border-primary/30 z-30">AI ENHANCED</div>
                    </div>

                    {/* Slider Handle */}
                    <div className="absolute inset-y-0 w-1 bg-white z-20 shadow-[0_0_20px_white]" style={{ left: `${sliderValue}%` }}>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg cursor-ew-resize">
                            <span className="material-symbols-outlined text-black text-sm">compare_arrows</span>
                        </div>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={sliderValue}
                        onChange={handleSliderChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40"
                    />
                </div>
            </div>
        </section>
    );
};
export default SolutionChallenge;
