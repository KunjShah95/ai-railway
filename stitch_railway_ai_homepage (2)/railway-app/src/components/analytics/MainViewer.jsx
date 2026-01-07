import React from 'react';

const MainViewer = () => {
    return (
        <div className="lg:col-span-6 flex flex-col gap-6">
            {/* 3D Viewer Container */}
            <div className="bg-[#161e2e]/70 backdrop-blur-md border border-white/10 rounded-2xl p-1 relative flex-1 min-h-[400px] flex flex-col shadow-[0_0_10px_rgba(19,91,236,0.3)] group">
                {/* Header of the 3D Card */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                    <span className="px-2 py-1 rounded bg-primary/20 text-primary text-xs font-bold border border-primary/30 backdrop-blur-md">LIVE FEED</span>
                    <span className="text-xs text-gray-400 font-mono">ID: WGN-8842-X</span>
                </div>
                <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
                    <button className="size-8 rounded bg-[#161e2e]/80 text-white hover:bg-primary hover:text-white flex items-center justify-center backdrop-blur transition-colors">
                        <span className="material-symbols-outlined text-lg">3d_rotation</span>
                    </button>
                    <button className="size-8 rounded bg-[#161e2e]/80 text-white hover:bg-primary hover:text-white flex items-center justify-center backdrop-blur transition-colors">
                        <span className="material-symbols-outlined text-lg">zoom_in</span>
                    </button>
                    <button className="size-8 rounded bg-[#161e2e]/80 text-white hover:bg-primary hover:text-white flex items-center justify-center backdrop-blur transition-colors">
                        <span className="material-symbols-outlined text-lg">layers</span>
                    </button>
                </div>
                {/* The 3D Object Representation */}
                <div className="relative w-full h-full bg-gradient-to-b from-[#1c2638] to-[#111722] rounded-xl overflow-hidden flex items-center justify-center">
                    {/* Simulated 3D Grid Floor */}
                    <div className="absolute bottom-0 w-full h-1/2 transform perspective-[500px] rotateX(60deg) scale-150 origin-bottom" style={{ backgroundImage: "linear-gradient(transparent 0%, rgba(19,91,236,0.1) 100%)" }}></div>

                    {/* The Train Image */}
                    <div className="relative w-[90%] max-w-[500px] transition-transform duration-700 hover:scale-105 z-10">
                        <img className="w-full h-auto object-contain drop-shadow-2xl mix-blend-lighten opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCfjrMdebKZmvV0GRrx_gkEk0F8QQfHQZdoUpwxFhpnyPfcgy7NidV-frHPSHbi3uiyw6wh_4UHOUj4o2LVYZtX_k72sWdlsgT-RNPDwl4mO8LIMhvmLpaJruZif5oXatUK4mLJ5fCjCjZ945ZAj28mJZoxgTtUv9B9aPIDJeO6tWOjPYfcRaNVLOKs2r9uxvcwOJQcYaeko5sM6PqUBv3YFi58rWC0Unu_xUxKDX30VB6-NYXBVU_1w0bCltvjXMov0FD3sLVoloD" alt="Side profile view of a high speed train wagon" />

                        {/* Hotspot Markers Overlay */}
                        <div className="absolute top-[45%] left-[20%] size-6 flex items-center justify-center cursor-pointer group/marker">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border-2 border-white"></span>
                            {/* Tooltip */}
                            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-48 bg-[#161e2e]/90 backdrop-blur border border-red-500/50 p-2 rounded hidden group-hover/marker:block z-50">
                                <p className="text-xs text-red-400 font-bold uppercase">Crack Detected</p>
                                <p className="text-[10px] text-gray-300">Confidence: 98.5%</p>
                                <p className="text-[10px] text-gray-300">Surface abrasion on panel 4.</p>
                            </div>
                        </div>
                        <div className="absolute top-[60%] right-[25%] size-6 flex items-center justify-center cursor-pointer group/marker">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500 border-2 border-white"></span>
                            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-48 bg-[#161e2e]/90 backdrop-blur border border-yellow-500/50 p-2 rounded hidden group-hover/marker:block z-50">
                                <p className="text-xs text-yellow-400 font-bold uppercase">Minor Dent</p>
                                <p className="text-[10px] text-gray-300">Confidence: 82.1%</p>
                            </div>
                        </div>
                    </div>
                    {/* Scanning Beam Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent w-full h-full animate-[scan_3s_ease-in-out_infinite] pointer-events-none border-r border-primary/20"></div>
                </div>
            </div>

            {/* Recent Anomalies Strip */}
            <div className="h-40 bg-[#161e2e]/70 backdrop-blur-md rounded-2xl p-4 flex flex-col gap-3 border border-white/10">
                <div className="flex justify-between items-center">
                    <h4 className="text-sm font-medium text-gray-300 uppercase tracking-wider">Flagged Anomalies</h4>
                    <button className="text-xs text-primary hover:text-white transition-colors">View All Report</button>
                </div>
                <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                    {/* Anomaly Item */}
                    <div className="min-w-[140px] h-full bg-[#111722] rounded-lg border border-[#324467] relative overflow-hidden group cursor-pointer hover:border-primary transition-colors">
                        <img className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_mUMU3ozyNx7KSVVA_o-Pk1D7-O2LiGK_xJHmuYqwaIb7Qs0dCk4ynxnzEj-3mIAlCkldke0_f9dSB389HRX71Dm3IXTRQnCcrmGG9BfInWSv_3O2Ts_xL_n1sx2QsNw901mAU5QG8GG2B5aYJ9oefM5Dc5Dl6Q_hKxokvj-0XlquZdU5us4T0Zqbt39TZyJU_8O3bBWHEYq97knrMlVOiLZqNUbTcGMF4X8FHL31oU-sKGhInVCbZUUkz4FPuZbIe6xOR0_03Gku" alt="Rust" />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-2">
                            <p className="text-xs font-bold text-white">Rust #442</p>
                            <p className="text-[10px] text-gray-400">09:42 AM</p>
                        </div>
                    </div>
                    <div className="min-w-[140px] h-full bg-[#111722] rounded-lg border border-[#324467] relative overflow-hidden group cursor-pointer hover:border-primary transition-colors">
                        <img className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpbrkIQZKBlE8UFqe_wHjXa5XSsVv__l_uVOyulSe_fdnXtKs9PFnWdFlSRwFhEMvYfpbFgEIm6dezp0WtbpBOvqmV4D7H1dOSJVPE7X_IM6DxVQOFypntPF085bezreils_3BJPbwzLWYVgCDkHpVNJ857mAVGgPeuZuMeT_7BoyEb888bUoOqS0QZc7OSDtu4d83DpTpA0kr3DpLWnX-5N1JUfSHVcuB1t4HO-o0NuamFVeBwkpbuH-yfkDHvTgQFzSqAgnbEVMZ" alt="Wheel" />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-2">
                            <p className="text-xs font-bold text-white">Wheel #12A</p>
                            <p className="text-[10px] text-gray-400">09:40 AM</p>
                        </div>
                    </div>
                    <div className="min-w-[140px] h-full bg-[#111722] rounded-lg border border-[#324467] relative overflow-hidden group cursor-pointer hover:border-primary transition-colors">
                        <img className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW5eaG1UopCwhwwjBuUqUMhkwEI0ur56HJLj_CoGMaqhqGXXfIjdo8XBkd7pSdJis1GGbaiF6Ia3IjfBwY3GEsEOJewSZdKXqR5kWYbGDC2-iIrIh31fCSjUGFTPqDnMM0uXUEslx1zdaADvIiP7_WOtVRaX2b1unmKSB-68sEfhnWwydsSgmo9swwQGCsB6pdhEFL7CQWNDw1SkYpOLh30KN3rECWLbjq_9ypukO94F6FZzpgo9LRVHzxUxAxxtdEQ8dVEJkWUDec" alt="Scratch" />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-2">
                            <p className="text-xs font-bold text-white">Scratch #09</p>
                            <p className="text-[10px] text-gray-400">09:35 AM</p>
                        </div>
                    </div>
                    <div className="min-w-[140px] h-full bg-[#111722] rounded-lg border border-[#324467] relative overflow-hidden group cursor-pointer hover:border-primary transition-colors">
                        <div className="w-full h-full flex items-center justify-center bg-[#161e2e]">
                            <span className="material-symbols-outlined text-gray-600">add_photo_alternate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainViewer;
