import React from 'react';
import KPIGrid from '@/components/analytics/KPIGrid';
import MainViewer from '@/components/analytics/MainViewer';
import RightSidebar from '@/components/analytics/RightSidebar';

const Analytics = () => {
    return (
        <div className="bg-background-dark min-h-screen text-white font-display relative overflow-x-hidden selection:bg-primary selection:text-white pb-20">
            {/* Background Grid Effect */}
            <div className="fixed inset-0 pointer-events-none z-0" style={{
                backgroundImage: "linear-gradient(rgba(19, 91, 236, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(19, 91, 236, 0.05) 1px, transparent 1px)",
                backgroundSize: "40px 40px"
            }}></div>

            {/* Main Content Area */}
            <main className="relative z-10 flex-1 flex flex-col p-4 md:p-8 max-w-[1440px] mx-auto w-full gap-8 perspective-2000 pt-24">
                {/* Search / AI Command Bar */}
                <div className="w-full max-w-3xl mx-auto transform-style-3d mb-4">
                    <div className="bg-[#161e2e]/70 backdrop-blur-md p-1 rounded-xl shadow-[0_0_10px_rgba(19,91,236,0.3)] border border-primary/30">
                        <div className="flex items-center h-14 bg-background-dark/80 rounded-lg px-4 gap-4">
                            <span className="material-symbols-outlined text-primary text-2xl animate-pulse">neurology</span>
                            <input className="flex-1 bg-transparent border-none outline-none text-lg text-white placeholder-gray-500 focus:ring-0" placeholder='Ask AI: "Show top 10 frames with highest blur correction"' type="text" />
                            <button className="bg-primary hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(19,91,236,0.5)] transition-all">
                                ANALYZE
                            </button>
                        </div>
                    </div>
                </div>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
                    <KPIGrid />
                    <MainViewer />
                    <RightSidebar />
                </div>
            </main>
        </div>
    );
};

export default Analytics;
