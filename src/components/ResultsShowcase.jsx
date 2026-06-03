import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const studentsData = [
  // 2026 CBSE
  {
    name: "Sagnik Jana",
    year: 2026,
    board: "CBSE",
    classLevel: "Class X",
    school: "Delhi Public School (DPS)",
    avatar: "/assets/sagnik_avatar_clean.png",
    featured: true,
    title: "CBSE Topper of the Year",
    scores: [
      { subject: "Maths", score: 100, perfect: true },
      { subject: "Science", score: 95 }
    ]
  },
  {
    name: "Ronit Singh",
    year: 2026,
    board: "CBSE",
    classLevel: "Class X",
    avatar: "/assets/ronit_avatar.png",
    scores: [
      { subject: "Maths", score: 92 }
    ]
  },
  {
    name: "Dishani Paul",
    year: 2026,
    board: "CBSE",
    classLevel: "Class X",
    avatar: "/assets/dishani_avatar.png",
    scores: [
      { subject: "Science", score: 88 }
    ]
  },
  {
    name: "Neha Jain",
    year: 2026,
    board: "CBSE",
    classLevel: "Class X",
    avatar: "/assets/neha_avatar.png",
    scores: [
      { subject: "Maths", score: 82 },
      { subject: "Science", score: 85 }
    ]
  },
  // 2026 ISC & ICSE
  {
    name: "Suvam Dhar",
    year: 2026,
    board: "ISC",
    classLevel: "Class XII",
    school: "Frank Anthony Public School",
    avatar: "/assets/suvam_avatar.png",
    featured: true,
    title: "ISC Topper of the Year",
    scores: [
      { subject: "Maths", score: 93 },
      { subject: "Physics", score: 97 }
    ]
  },
  {
    name: "R Priya",
    year: 2026,
    board: "ICSE",
    classLevel: "Class X",
    avatar: "/assets/priya_avatar.png",
    scores: [
      { subject: "Maths", score: 86 },
      { subject: "Chemistry", score: 89 },
      { subject: "Physics", score: 85 }
    ]
  },
  {
    name: "Vidya Lal",
    year: 2026,
    board: "ICSE",
    classLevel: "Class X",
    avatar: "/assets/vidya_avatar.png",
    scores: [
      { subject: "Maths", score: 82 },
      { subject: "Computer", score: 100, perfect: true }
    ]
  },
  {
    name: "Raima Chakroborty",
    year: 2026,
    board: "ICSE",
    classLevel: "Class X",
    avatar: "/assets/raima_avatar.png",
    scores: [
      { subject: "Maths", score: 86 },
      { subject: "Computer", score: 95 }
    ]
  },
  {
    name: "Krishnava Chatterjee",
    year: 2026,
    board: "ICSE",
    classLevel: "Class X",
    avatar: "/assets/krishnava_avatar.png",
    scores: [
      { subject: "Maths", score: 92 },
      { subject: "Computer", score: 99 }
    ]
  },
  // 2024 Madhyamik
  {
    name: "Rachita Mondal",
    year: 2024,
    board: "Madhyamik",
    classLevel: "Class X",
    school: "BB",
    scores: [
      { subject: "Maths", score: 85 },
      { subject: "Physics", score: 80 }
    ]
  },
  {
    name: "Suvannita Das",
    year: 2024,
    board: "Madhyamik",
    classLevel: "Class X",
    school: "BB",
    scores: [
      { subject: "Maths", score: 82 }
    ]
  },
  {
    name: "Sharmistha Majhi",
    year: 2024,
    board: "Madhyamik",
    classLevel: "Class X",
    school: "BB",
    scores: [
      { subject: "Physics", score: 69 }
    ]
  },
  // 2024 ICSE
  {
    name: "Suvam Dhar",
    year: 2024,
    board: "ICSE",
    classLevel: "Class X",
    school: "Frank Anthony",
    scores: [
      { subject: "Maths", score: 84 },
      { subject: "Physics", score: 94 },
      { subject: "Chemistry", score: 100, perfect: true },
      { subject: "Biology", score: 99 }
    ]
  },
  {
    name: "Bidisha Mondal",
    year: 2024,
    board: "ICSE",
    classLevel: "Class X",
    school: "Shaw Public",
    scores: [
      { subject: "Maths", score: 85 },
      { subject: "Physics", score: 84 },
      { subject: "Chemistry", score: 90 },
      { subject: "Biology", score: 92 },
      { subject: "Computer", score: 100, perfect: true }
    ]
  },
  {
    name: "Aman Ali",
    year: 2024,
    board: "ICSE",
    classLevel: "Class X",
    school: "NGHSS",
    scores: [
      { subject: "Maths", score: 93 },
      { subject: "Physics", score: 83 },
      { subject: "Chemistry", score: 66 },
      { subject: "Biology", score: 90 },
      { subject: "Computer", score: 99 }
    ]
  },
  {
    name: "Manya Singh",
    year: 2024,
    board: "ICSE",
    classLevel: "Class X",
    school: "MPB",
    scores: [
      { subject: "Maths", score: 65 },
      { subject: "Computer", score: 90 }
    ]
  },
  {
    name: "Swati Sahoo",
    year: 2024,
    board: "ICSE",
    classLevel: "Class X",
    school: "NGHSS",
    scores: [
      { subject: "Maths", score: 76 },
      { subject: "Physics", score: 83 },
      { subject: "Chemistry", score: 87 },
      { subject: "Biology", score: 88 },
      { subject: "Computer", score: 95 }
    ]
  },
  {
    name: "Vasundhara Bhattacharya",
    year: 2024,
    board: "ICSE",
    classLevel: "Class X",
    school: "St Pauls",
    scores: [
      { subject: "Physics", score: 82 },
      { subject: "Chemistry", score: 86 }
    ]
  },
  {
    name: "Indra Halder",
    year: 2024,
    board: "ICSE",
    classLevel: "Class X",
    school: "Shaw Public",
    scores: [
      { subject: "Maths", score: 81 },
      { subject: "Physics", score: 82 },
      { subject: "Chemistry", score: 88 }
    ]
  },
  {
    name: "Payal Kumari",
    year: 2024,
    board: "ICSE",
    classLevel: "Class X",
    scores: [
      { subject: "Maths", score: 72 },
      { subject: "Computer", score: 84 }
    ]
  },
  // 2024 ISC
  {
    name: "Kriti Gupta",
    year: 2024,
    board: "ISC",
    classLevel: "Class XII",
    school: "St Pauls",
    scores: [
      { subject: "Maths", score: 80 },
      { subject: "Physics", score: 93 }
    ]
  },
  {
    name: "Aniket Jha",
    year: 2024,
    board: "ISC",
    classLevel: "Class XII",
    school: "Children's Foundation",
    scores: [
      { subject: "Maths", score: 77 },
      { subject: "Physics", score: 74 }
    ]
  }
];

const ResultsShowcase = () => {
  const [activeYear, setActiveYear] = useState('2026'); // 'all', '2026', '2024'
  const [activeBoard, setActiveBoard] = useState('all'); // 'all', 'CBSE', 'ICSE', 'ISC', 'Madhyamik'
  const [searchQuery, setSearchQuery] = useState('');

  // Extract statistics
  const stats = {
    passRate: "100%",
    perfectScores: "10+",
    topScore: "100/100",
    totalGuided: "150+"
  };

  // Filter logic
  const filteredStudents = useMemo(() => {
    return studentsData.filter(student => {
      // Filter by Year
      if (activeYear !== 'all' && student.year.toString() !== activeYear) {
        return false;
      }
      
      // Filter by Board
      if (activeBoard !== 'all' && student.board.toLowerCase() !== activeBoard.toLowerCase()) {
        return false;
      }

      // Filter by Search Query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = student.name.toLowerCase().includes(query);
        const matchesSchool = student.school && student.school.toLowerCase().includes(query);
        const matchesBoard = student.board.toLowerCase().includes(query);
        const matchesSubject = student.scores.some(s => s.subject.toLowerCase().includes(query));
        return matchesName || matchesSchool || matchesBoard || matchesSubject;
      }

      return true;
    });
  }, [activeYear, activeBoard, searchQuery]);

  // Separate featured toppers (only for 2026 when displaying 'all' or '2026')
  const { featuredStudents, normalStudents } = useMemo(() => {
    const featured = [];
    const normal = [];
    
    filteredStudents.forEach(student => {
      if (student.featured && (activeYear === 'all' || activeYear === '2026')) {
        featured.push(student);
      } else {
        normal.push(student);
      }
    });

    return { featuredStudents: featured, normalStudents: normal };
  }, [filteredStudents, activeYear]);

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
  };

  return (
    <div className="w-full text-oxford-dark">
      
      {/* Statistics Dashboard Banner */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16 bg-white border border-tan/20 rounded-3xl p-8 relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-32 h-32 bg-tan/10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-tan-light/10 rounded-full blur-2xl pointer-events-none"></div>
        
        <div className="flex flex-col items-center text-center p-2 border-r border-tan/10 last:border-0 md:border-r">
          <span className="text-3xl md:text-5xl font-black text-oxford-dark tracking-tight mb-2">{stats.passRate}</span>
          <span className="text-xs md:text-sm text-oxford/60 font-semibold uppercase tracking-wider">Pass Rate</span>
        </div>
        
        <div className="flex flex-col items-center text-center p-2 border-none md:border-r border-tan/10">
          <span className="text-3xl md:text-5xl font-black text-oxford-dark tracking-tight mb-2">{stats.perfectScores}</span>
          <span className="text-xs md:text-sm text-oxford/60 font-semibold uppercase tracking-wider">Perfect 100s</span>
        </div>
        
        <div className="flex flex-col items-center text-center p-2 border-r border-tan/10 md:border-r">
          <span className="text-3xl md:text-5xl font-black text-oxford-dark tracking-tight mb-2">{stats.topScore}</span>
          <span className="text-xs md:text-sm text-oxford/60 font-semibold uppercase tracking-wider">Subject Highest</span>
        </div>
        
        <div className="flex flex-col items-center text-center p-2 last:border-0">
          <span className="text-3xl md:text-5xl font-black text-oxford-dark tracking-tight mb-2">{stats.totalGuided}</span>
          <span className="text-xs md:text-sm text-oxford/60 font-semibold uppercase tracking-wider">Students Guided</span>
        </div>
      </div>

      {/* Control Center: Search & Filters */}
      <div className="max-w-6xl mx-auto mb-12 flex flex-col gap-6 bg-white border border-tan/20 rounded-3xl p-6 md:p-8 shadow-xl">
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-stretch lg:items-center">
          
          {/* Year Switcher */}
          <div className="flex bg-oxford/5 border border-oxford/10 rounded-2xl p-1 w-full lg:w-fit shadow-md">
            <button 
              onClick={() => { setActiveYear('2026'); }}
              className={`flex-1 lg:flex-none px-6 py-3 rounded-xl text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeYear === '2026' 
                  ? 'bg-oxford text-white shadow-md' 
                  : 'text-oxford/70 hover:text-oxford hover:bg-oxford/5'
              }`}
            >
              2026 Board Results
            </button>
            <button 
              onClick={() => { setActiveYear('2024'); }}
              className={`flex-1 lg:flex-none px-6 py-3 rounded-xl text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeYear === '2024' 
                  ? 'bg-oxford text-white shadow-md' 
                  : 'text-oxford/70 hover:text-oxford hover:bg-oxford/5'
              }`}
            >
              2024 Hall of Fame
            </button>
            <button 
              onClick={() => { setActiveYear('all'); }}
              className={`flex-1 lg:flex-none px-6 py-3 rounded-xl text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeYear === 'all' 
                  ? 'bg-oxford text-white shadow-md' 
                  : 'text-oxford/70 hover:text-oxford hover:bg-oxford/5'
              }`}
            >
              All Years
            </button>
          </div>

          {/* Search bar */}
          <div className="relative flex-grow max-w-md w-full">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-oxford/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input 
              type="text"
              placeholder="Search student, board, or subject..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-11 pr-4 py-3 bg-white border border-tan/30 hover:border-tan focus:border-oxford focus:bg-white focus:ring-1 focus:ring-oxford rounded-2xl text-sm placeholder-oxford/40 text-oxford outline-none transition-all duration-300 shadow-inner"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-oxford/40 hover:text-oxford transition-colors"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Board Pill Filters */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-tan/10 items-center">
          <span className="text-xs uppercase tracking-widest text-oxford/40 font-bold mr-2">Filter Board:</span>
          {['all', 'CBSE', 'ICSE', 'ISC', 'Madhyamik'].map((board) => {
            // Count matching students for the badge
            const count = studentsData.filter(s => {
              if (activeYear !== 'all' && s.year.toString() !== activeYear) return false;
              if (board !== 'all' && s.board.toLowerCase() !== board.toLowerCase()) return false;
              return true;
            }).length;

            return (
              <button
                key={board}
                onClick={() => setActiveBoard(board)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1.5 border ${
                  activeBoard === board
                    ? 'bg-tan/25 border-tan-dark text-tan-dark shadow-sm'
                    : 'bg-white border border-tan/20 text-oxford/75 hover:bg-tan-light/10'
                }`}
              >
                {board === 'all' ? 'All Boards' : board}
                <span className={`px-1.5 py-0.5 rounded-md text-[9px] font-black ${
                  activeBoard === board ? 'bg-tan-dark text-white' : 'bg-oxford/5 text-oxford/50'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Results Grid Container */}
      <div className="max-w-6xl mx-auto px-4">
        <AnimatePresence mode="wait">
          {filteredStudents.length === 0 ? (
            <motion.div 
              key="no-results"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-center py-20 bg-white border border-tan/25 rounded-3xl shadow-md"
            >
              <svg className="mx-auto h-12 w-12 text-oxford/20 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-bold text-oxford-dark mb-1">No matching results found</h3>
              <p className="text-sm text-oxford/50">Try modifying your search or filters to see other years/boards.</p>
            </motion.div>
          ) : (
            <motion.div 
              key={`${activeYear}-${activeBoard}-${searchQuery}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-12"
            >
              {/* 1. Featured Top Performing Section */}
              {featuredStudents.length > 0 && (
                <div className="flex flex-col gap-6">
                  <h3 className="text-xs uppercase tracking-widest text-tan-dark font-extrabold flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-tan-dark"></span>
                    Flagship Board Toppers
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {featuredStudents.map((student, idx) => (
                      <motion.div
                        key={student.name}
                        variants={itemVariants}
                        className="bg-white border border-tan/25 hover:border-tan rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-xl hover:shadow-2xl relative overflow-hidden group transition-all duration-500"
                      >
                        <div className="absolute -inset-x-20 -inset-y-20 bg-tan/5 opacity-0 group-hover:opacity-100 rounded-full blur-3xl transition-opacity duration-750 pointer-events-none"></div>
                        <div className="absolute top-3 right-3 text-tan/5 group-hover:text-tan/15 transition-colors duration-500 font-black text-6xl select-none pointer-events-none">🏆</div>

                        {/* Student Avatar */}
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 rounded-full border-4 border-tan/20 scale-105 group-hover:scale-110 transition-transform duration-500"></div>
                          {student.avatar ? (
                            <img 
                              src={student.avatar} 
                              alt={student.name} 
                              className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-tan shadow-xl relative z-10"
                            />
                          ) : (
                            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-[#FAF5EE] border-4 border-tan/60 flex items-center justify-center text-oxford/40 font-black text-4xl relative z-10 shadow-xl">
                              {student.name.split(' ').map(n => n[0]).join('')}
                            </div>
                          )}
                        </div>

                        {/* Details */}
                        <div className="flex-grow text-center sm:text-left relative z-10">
                          <span className="inline-flex bg-tan/20 text-tan-dark border border-tan/30 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-3.5 shadow-sm">
                            {student.title}
                          </span>
                          <h4 className="text-2xl md:text-3xl font-extrabold text-oxford-dark mb-1 group-hover:text-tan-dark transition-colors duration-300 leading-tight">
                            {student.name}
                          </h4>
                          <p className="text-oxford/60 text-xs md:text-sm font-semibold mb-5">
                            {student.school || `${student.board} Affiliate`} • {student.board} {student.classLevel} ({student.year})
                          </p>

                          <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                            {student.scores.map((scoreObj, sIdx) => (
                              <span 
                                key={sIdx} 
                                className={`font-bold px-4 py-2 rounded-xl text-xs md:text-sm tracking-wide border shadow-sm flex items-center gap-1.5 ${
                                  scoreObj.perfect 
                                    ? "bg-tan/30 border-tan text-oxford-dark" 
                                    : "bg-[#FAF5EE] border border-tan/25 text-oxford-dark"
                                }`}
                              >
                                {scoreObj.subject}:
                                <span className={scoreObj.perfect ? "text-tan-dark font-extrabold" : "text-oxford font-extrabold"}>
                                  {scoreObj.score}
                                </span>
                                {scoreObj.perfect && <span className="text-xs">💯</span>}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* 2. General Grid Section */}
              <div className="flex flex-col gap-6">
                {featuredStudents.length > 0 && normalStudents.length > 0 && (
                  <h3 className="text-xs uppercase tracking-widest text-oxford/40 font-extrabold flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-oxford/30"></span>
                    Board Honor Roll
                  </h3>
                )}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {normalStudents.map((student, index) => (
                    <motion.div
                      key={`${student.name}-${student.year}-${index}`}
                      variants={itemVariants}
                      className="bg-white border border-tan/25 hover:border-tan rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-tan/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                      {/* Student Profile Picture / Placeholder */}
                      <div className="relative mb-5 flex-shrink-0">
                        <div className="absolute inset-0 rounded-full border-2 border-tan/10 scale-105 group-hover:scale-110 transition-transform duration-300"></div>
                        {student.avatar ? (
                          <img 
                            src={student.avatar} 
                            alt={student.name} 
                            className="w-20 h-20 rounded-full object-cover border-2 border-tan/40 shadow-lg relative z-10"
                          />
                        ) : (
                          <div className="w-20 h-20 rounded-full bg-[#FAF5EE] border-2 border-tan/30 flex items-center justify-center text-oxford/30 font-bold text-2xl relative z-10 shadow-lg">
                            {student.name.split(' ').map(n => n[0]).join('')}
                          </div>
                        )}
                      </div>

                      <span className="text-[10px] text-tan-dark font-extrabold uppercase tracking-wider mb-1">
                        {student.board} • {student.year}
                      </span>
                      <h4 className="text-lg font-bold text-oxford-dark group-hover:text-tan-dark transition-colors duration-300 mb-1 line-clamp-1">
                        {student.name}
                      </h4>
                      {student.school && (
                        <p className="text-[11px] text-oxford/50 font-semibold mb-4 leading-none">
                          {student.school}
                        </p>
                      )}

                      {/* Scores List */}
                      <div className="w-full flex flex-wrap justify-center gap-2 mt-auto pt-2 border-t border-tan/10">
                        {student.scores.map((scoreObj, sIdx) => (
                          <div 
                            key={sIdx} 
                            className={`flex flex-col items-center justify-center rounded-xl py-1 px-3 min-w-[70px] border transition-all duration-300 ${
                              scoreObj.perfect 
                                ? "bg-tan/30 border border-tan text-oxford-dark font-bold shadow-sm" 
                                : "bg-[#FAF5EE] border border-tan/20 text-oxford/90"
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
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
};

export default ResultsShowcase;
