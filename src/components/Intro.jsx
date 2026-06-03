import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('isc-icse'); // 'isc-icse' or 'cbse'
  const [isAutoPlayActive, setIsAutoPlayActive] = useState(true);

  useEffect(() => {
    if (!isAutoPlayActive) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev === 'isc-icse' ? 'cbse' : 'isc-icse'));
    }, 6000); // Switch every 6 seconds
    return () => clearInterval(interval);
  }, [isAutoPlayActive]);

  const icseToppers = [
    {
      name: "R Priya",
      board: "ICSE",
      avatar: "/assets/priya_avatar.png",
      scores: [
        { subject: "Maths", score: 86 },
        { subject: "Chemistry", score: 89 },
        { subject: "Physics", score: 85 }
      ]
    },
    {
      name: "Vidya Lal",
      board: "ICSE",
      avatar: "/assets/vidya_avatar.png",
      scores: [
        { subject: "Maths", score: 82 },
        { subject: "Computer", score: 100, perfect: true }
      ]
    },
    {
      name: "Raima Chakroborty",
      board: "ICSE",
      avatar: "/assets/raima_avatar.png",
      scores: [
        { subject: "Maths", score: 86 },
        { subject: "Computer", score: 95 }
      ]
    },
    {
      name: "Krishnava Chatterjee",
      board: "ICSE",
      avatar: "/assets/krishnava_avatar.png",
      scores: [
        { subject: "Maths", score: 92 },
        { subject: "Computer", score: 99 }
      ]
    }
  ];

  const cbseToppers = [
    {
      name: "Ronit Singh",
      board: "CBSE",
      avatar: "/assets/ronit_avatar.png",
      scores: [
        { subject: "Maths", score: 92 }
      ]
    },
    {
      name: "Dishani Paul",
      board: "CBSE",
      avatar: "/assets/dishani_avatar.png",
      scores: [
        { subject: "Science", score: 88 }
      ]
    },
    {
      name: "Neha Jain",
      board: "CBSE",
      avatar: "/assets/neha_avatar.png",
      scores: [
        { subject: "Maths", score: 82 },
        { subject: "Science", score: 85 }
      ]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 }
    }
  };

  return (
    <main className="relative bg-gradient-to-br from-[#FAF5EE] via-[#F4ECE0] to-[#FAF5EE] overflow-hidden py-16 px-4 md:px-8 lg:px-16 min-h-[90vh] flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[55%] h-[55%] bg-tan/30 rounded-full blur-[130px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[55%] h-[55%] bg-oxford/10 rounded-full blur-[130px]"></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,33,71,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,33,71,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Side Content */}
        <motion.div 
          className="lg:col-span-5 flex flex-col justify-center text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-tan/20 text-tan-dark border border-tan/30 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest mb-6 w-fit shadow-sm">
            <span className="w-2 h-2 rounded-full bg-tan-dark animate-pulse"></span>
            Academic Toppers 2026
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold text-oxford-dark tracking-tight leading-none mb-6">
            Where Dedication <br />
            Meets <span className="text-tan-dark inline-block relative">
              Distinction
              <span className="absolute bottom-1 left-0 w-full h-[4px] bg-tan/30 rounded"></span>
            </span>
          </h2>
          
          <p className="text-base md:text-lg text-oxford/85 leading-relaxed mb-8 max-w-xl">
            Advantage Academic Center celebrates the phenomenal success of our students in the ISC, ICSE, & CBSE Board Examinations. Through expert mentorship, conceptual depth, and structured excellence, we shape the leaders of tomorrow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8 lg:mb-0">
            <a 
              href="#enrollment" 
              className="px-8 py-4 bg-oxford hover:bg-oxford-light text-white text-center font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-oxford/20"
            >
              Enroll for 2026-27
            </a>
            <a 
              href="/results" 
              className="px-8 py-4 bg-transparent border border-oxford text-oxford hover:bg-oxford/5 text-center font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Detailed Results
            </a>
          </div>
        </motion.div>

        {/* Right Side Showcase */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Elegant Switcher */}
          <div className="flex bg-oxford/5 border border-oxford/10 rounded-full p-1 w-fit self-center lg:self-start shadow-md backdrop-blur-md relative z-20">
            <button 
              onClick={() => { setActiveTab('isc-icse'); setIsAutoPlayActive(false); }}
              className={`relative px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'isc-icse' 
                  ? 'bg-oxford text-white shadow-md' 
                  : 'text-oxford/70 hover:text-oxford'
              }`}
            >
              ISC & ICSE Results
            </button>
            <button 
              onClick={() => { setActiveTab('cbse'); setIsAutoPlayActive(false); }}
              className={`relative px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'cbse' 
                  ? 'bg-oxford text-white shadow-md' 
                  : 'text-oxford/70 hover:text-oxford'
              }`}
            >
              CBSE Results
            </button>
          </div>

          <div className="relative overflow-visible min-h-[500px]">
            <AnimatePresence mode="wait">
              {activeTab === 'isc-icse' ? (
                <motion.div
                  key="isc-icse"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex flex-col gap-6"
                >
                  {/* Featured Topper Card (ISC) */}
                  <motion.div 
                    variants={itemVariants}
                    className="bg-white hover:bg-white border border-tan/20 hover:border-tan rounded-3xl p-6 flex flex-col sm:flex-row items-center gap-6 shadow-xl relative overflow-hidden group transition-all duration-300"
                  >
                    <div className="absolute -inset-x-20 -inset-y-20 bg-tan/5 opacity-0 group-hover:opacity-100 rounded-full blur-3xl transition-opacity duration-500 pointer-events-none"></div>
                    
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 rounded-full border-4 border-tan/20 scale-105 group-hover:scale-110 transition-transform duration-500"></div>
                      <img 
                        src="/assets/suvam_avatar.png" 
                        alt="Suvam Dhar" 
                        className="w-28 h-28 rounded-full object-cover border-4 border-tan shadow-xl relative z-10"
                      />
                    </div>
                    
                    <div className="flex-grow text-center sm:text-left relative z-10">
                      <span className="inline-block bg-tan/20 text-tan-dark text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full mb-3 shadow-sm border border-tan/30">
                        🏆 ISC Topper of the Year
                      </span>
                      <h3 className="text-2xl font-extrabold text-oxford-dark mb-1 group-hover:text-tan-dark transition-colors duration-300">
                        Suvam Dhar
                      </h3>
                      <p className="text-oxford/60 text-sm font-semibold mb-4">
                        Frank Anthony Public School • ISC Class XII
                      </p>
                      
                      <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                        <span className="bg-[#FAF5EE] border border-tan/20 text-oxford-dark font-bold px-4 py-1.5 rounded-lg text-sm tracking-wide">
                          Maths: <span className="text-tan-dark text-base ml-1">93</span>
                        </span>
                        <span className="bg-[#FAF5EE] border border-tan/20 text-oxford-dark font-bold px-4 py-1.5 rounded-lg text-sm tracking-wide">
                          Physics: <span className="text-tan-dark text-base ml-1">97</span>
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* ICSE Grid (2x2) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {icseToppers.map((student, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-white border border-tan/20 hover:border-tan rounded-2xl p-5 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl group relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-tan/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <div className="relative mb-4">
                          <div className="absolute inset-0 rounded-full border-2 border-tan/10 scale-105 group-hover:scale-110 transition-transform duration-300"></div>
                          <img 
                            src={student.avatar} 
                            alt={student.name} 
                            className="w-20 h-20 rounded-full object-cover border-2 border-tan/40 shadow-lg relative z-10"
                          />
                        </div>

                        <span className="text-[10px] text-tan-dark font-extrabold uppercase tracking-wider mb-1">
                          {student.board} Exceptional Performer
                        </span>
                        <h4 className="text-lg font-bold text-oxford-dark group-hover:text-tan-dark transition-colors duration-300 mb-4">
                          {student.name}
                        </h4>

                        <div className="w-full flex justify-center gap-2 mt-auto">
                          {student.scores.map((scoreObj, sIdx) => (
                            <div 
                              key={sIdx} 
                              className={`flex flex-col items-center justify-center rounded-lg py-1 px-3 min-w-[70px] border transition-all duration-300 ${
                                scoreObj.perfect 
                                  ? "bg-tan/20 border-tan/30 text-tan-dark scale-105 font-bold shadow-sm" 
                                  : "bg-[#FAF5EE] border-tan/25 text-oxford/90"
                              }`}
                            >
                              <span className="text-[9px] uppercase opacity-60 tracking-wider">
                                {scoreObj.subject}
                              </span>
                              <span className={`text-sm font-extrabold ${scoreObj.perfect ? "text-tan-dark" : "text-oxford-dark"}`}>
                                {scoreObj.score}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="cbse"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex flex-col gap-6"
                >
                  {/* Featured Topper Card (CBSE) */}
                  <motion.div 
                    variants={itemVariants}
                    className="bg-white border border-tan/20 hover:border-tan rounded-3xl p-6 flex flex-col sm:flex-row items-center gap-6 shadow-xl relative overflow-hidden group transition-all duration-300"
                  >
                    <div className="absolute -inset-x-20 -inset-y-20 bg-tan/5 opacity-0 group-hover:opacity-100 rounded-full blur-3xl transition-opacity duration-500 pointer-events-none"></div>
                    
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 rounded-full border-4 border-tan/20 scale-105 group-hover:scale-110 transition-transform duration-500"></div>
                      <img 
                        src="/assets/sagnik_avatar_clean.png" 
                        alt="Sagnik Jana" 
                        className="w-28 h-28 rounded-full object-cover border-4 border-tan shadow-xl relative z-10"
                      />
                    </div>
                    
                    <div className="flex-grow text-center sm:text-left relative z-10">
                      <span className="inline-block bg-tan/20 text-tan-dark text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full mb-3 shadow-sm border border-tan/30">
                        🏆 CBSE Topper of the Year
                      </span>
                      <h3 className="text-2xl font-extrabold text-oxford-dark mb-1 group-hover:text-tan-dark transition-colors duration-300">
                        Sagnik Jana
                      </h3>
                      <p className="text-oxford/60 text-sm font-semibold mb-4">
                        Delhi Public School (DPS) • CBSE Class X
                      </p>
                      
                      <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                        <span className="bg-tan/25 border border-tan/35 text-tan-dark font-bold px-4 py-1.5 rounded-lg text-sm tracking-wide shadow-sm">
                          Maths: <span className="text-oxford-dark text-base ml-1">100</span>
                        </span>
                        <span className="bg-[#FAF5EE] border border-tan/20 text-oxford-dark font-bold px-4 py-1.5 rounded-lg text-sm tracking-wide">
                          Science: <span className="text-tan-dark text-base ml-1">95</span>
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* CBSE Grid (3 columns for Ronit, Dishani, Neha) */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {cbseToppers.map((student, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-white border border-tan/20 hover:border-tan rounded-2xl p-5 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl group relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-tan/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <div className="relative mb-4">
                          <div className="absolute inset-0 rounded-full border-2 border-tan/10 scale-105 group-hover:scale-110 transition-transform duration-300"></div>
                          <img 
                            src={student.avatar} 
                            alt={student.name} 
                            className="w-18 h-18 rounded-full object-cover border-2 border-tan/60 shadow-lg relative z-10"
                          />
                        </div>

                        <span className="text-[9px] text-tan-dark font-extrabold uppercase tracking-wider mb-1">
                          {student.board} Star
                        </span>
                        <h4 className="text-base font-bold text-oxford-dark group-hover:text-tan-dark transition-colors duration-300 mb-4 line-clamp-1">
                          {student.name}
                        </h4>

                        <div className="w-full flex justify-center gap-1.5 mt-auto">
                          {student.scores.map((scoreObj, sIdx) => (
                            <div 
                              key={sIdx} 
                              className="flex flex-col items-center justify-center rounded-lg py-1 px-2.5 min-w-[65px] border bg-[#FAF5EE] border-tan/20 text-oxford/90"
                            >
                              <span className="text-[8px] uppercase opacity-60 tracking-wider">
                                {scoreObj.subject}
                              </span>
                              <span className="text-xs font-extrabold text-oxford-dark">
                                {scoreObj.score}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </main>
  );
};

export default HeroSection;