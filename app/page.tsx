"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  MagnifyingGlass, Bookmark, BookmarkSimple, Play, Pause, 
  ArrowCounterClockwise, DownloadSimple, ArrowSquareOut, Plus, X, 
  CircleNotch, PaperPlane, CheckCircle, FileText 
} from "@phosphor-icons/react";

import { coursesData, Course, Paper } from "./data/courses";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBranch, setSelectedBranch] = useState<string>("all");
  const [activeCourse, setActiveCourse] = useState<Course>(coursesData[0]);
  const [rightPaneView, setRightPaneView] = useState<"list" | "detail">("list");
  
  // Bookmarks state
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [showBookmarksOnly, setShowBookmarksOnly] = useState(false);

  // Timer State (integrated on the left HUD)
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerMode, setTimerMode] = useState<"study" | "break">("study");
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Contributor Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courseCode, setCourseCode] = useState("");
  const [courseName, setCourseName] = useState("");
  const [examType, setExamType] = useState("FAT");
  const [year, setYear] = useState("2026");
  const [driveLink, setDriveLink] = useState("");
  const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const searchInputRef = useRef<HTMLInputElement>(null);

  // Load bookmarks on mount
  useEffect(() => {
    const saved = localStorage.getItem("paperflow-bookmarks");
    if (saved) {
      try {
        setBookmarkedIds(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse bookmarks", e);
      }
    }
  }, []);

  // Keyboard shortcut: pressing '/' focuses the search box
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "/" &&
        document.activeElement?.tagName !== "INPUT" &&
        document.activeElement?.tagName !== "TEXTAREA"
      ) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Timer effect
  useEffect(() => {
    if (timerRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            setTimerRunning(false);
            setTimerMode((prevMode) => {
              const newMode = prevMode === "study" ? "break" : "study";
              setTimeLeft(newMode === "study" ? 25 * 60 : 5 * 60);
              return newMode;
            });
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [timerRunning]);

  const toggleTimer = () => setTimerRunning(!timerRunning);
  const resetTimer = () => {
    setTimerRunning(false);
    setTimeLeft(timerMode === "study" ? 25 * 60 : 5 * 60);
  };
  const setMode = (mode: "study" | "break") => {
    setTimerRunning(false);
    setTimerMode(mode);
    setTimeLeft(mode === "study" ? 25 * 60 : 5 * 60);
  };

  // Toggle bookmark action
  const handleToggleBookmark = (paperId: string) => {
    setBookmarkedIds((prev) => {
      const next = prev.includes(paperId)
        ? prev.filter((id) => id !== paperId)
        : [...prev, paperId];
      localStorage.setItem("paperflow-bookmarks", JSON.stringify(next));
      return next;
    });
  };

  // Handle Form Submit
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!courseCode.trim() || !courseName.trim()) {
      setErrorMsg("Course Code and Title are required.");
      setSubmitStatus("error");
      return;
    }

    setSubmitStatus("submitting");
    setTimeout(() => {
      setSubmitStatus("success");
      setCourseCode("");
      setCourseName("");
      setDriveLink("");
    }, 2000);
  };

  // Filter courses Data
  const filteredCourses = coursesData.filter((course) => {
    // Branch mapping
    // codes: CSE..., ECE..., MAT..., FRL..., MGT...
    const codePrefix = course.code.substring(0, 3).toLowerCase();
    
    let matchesBranch = true;
    if (selectedBranch !== "all") {
      if (selectedBranch === "cse") matchesBranch = codePrefix === "cse";
      else if (selectedBranch === "ece") matchesBranch = codePrefix === "ece";
      else if (selectedBranch === "mat") matchesBranch = codePrefix === "mat";
      else if (selectedBranch === "lang") matchesBranch = codePrefix === "frl" || codePrefix === "eng";
      else if (selectedBranch === "other") matchesBranch = codePrefix !== "cse" && codePrefix !== "ece" && codePrefix !== "mat" && codePrefix !== "frl" && codePrefix !== "eng";
    }

    const matchesSearch = 
      course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.name.toLowerCase().includes(searchQuery.toLowerCase());

    const hasBookmarks = course.papers.some(p => bookmarkedIds.includes(p.id));
    const matchesBookmarksFilter = !showBookmarksOnly || hasBookmarks;

    return matchesBranch && matchesSearch && matchesBookmarksFilter;
  });

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-[100dvh] flex flex-col md:flex-row overflow-hidden bg-white text-zinc-950 font-sans">
      
      {/* ================= LEFT SIDEBAR (BLACK PANE) ================= */}
      <div className="w-full md:w-[42%] flex flex-col justify-between p-8 md:p-12 bg-black text-white relative border-b md:border-b-0 md:border-r border-zinc-900">
        
        {/* Top Header - Logo and small tags */}
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 border border-white font-mono text-sm font-bold rounded">
              PF
            </span>
            <span className="wide-text text-xs tracking-widest text-zinc-300">PAPERFLOW INC.</span>
          </div>
          
          <button 
            onClick={() => setShowBookmarksOnly(!showBookmarksOnly)}
            className={`flex items-center gap-1.5 px-3 py-1 border rounded-full text-[10px] tracking-wider uppercase font-semibold transition-all duration-200 cursor-pointer ${
              showBookmarksOnly ? "border-accent text-accent bg-accent/5" : "border-zinc-800 text-zinc-400 hover:border-white hover:text-white"
            }`}
          >
            <span>Saved ({bookmarkedIds.length})</span>
          </button>
        </div>

        {/* Center - Hero Typography */}
        <div className="my-12 md:my-auto max-w-md z-10">
          <h1 className="wide-display text-3xl md:text-5xl tracking-wide leading-tight text-white mb-6">
            WE ORGANIZE THE PAPERS YOU NEED
          </h1>
          <p className="text-xs text-zinc-400 font-medium leading-relaxed mb-8 max-w-[38ch]">
            Paperflow takes care of your exam preparation and provides the best experience of your semester revision. Sourced by students, verified by peers.
          </p>
          
          <motion.button
            onClick={() => { setIsModalOpen(true); setSubmitStatus("idle"); }}
            className="h-10 px-6 rounded-full border border-white bg-transparent text-white text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-all duration-200 cursor-pointer"
            whileTap={{ scale: 0.96 }}
          >
            Submit A Paper
          </motion.button>
        </div>

        {/* Bottom - Focus HUD (Timer resembling Music playback controller) */}
        <div className="z-10 bg-zinc-950/40 border border-zinc-900 p-5 rounded-2xl">
          <div className="flex items-center justify-between mb-3.5 pb-2 border-b border-zinc-900">
            <span className="wide-text text-[9px] tracking-widest text-accent font-semibold flex items-center gap-1.5">
              <span>●</span> STUDY SESSION TIMER
            </span>
            <div className="flex gap-2">
              <button 
                onClick={() => setMode("study")}
                className={`text-[9px] uppercase tracking-wider font-bold transition-all duration-150 ${timerMode === "study" ? "text-white" : "text-zinc-500 hover:text-zinc-300"}`}
              >
                Study
              </button>
              <button 
                onClick={() => setMode("break")}
                className={`text-[9px] uppercase tracking-wider font-bold transition-all duration-150 ${timerMode === "break" ? "text-white" : "text-zinc-500 hover:text-zinc-300"}`}
              >
                Break
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="font-mono text-3xl font-bold text-white tracking-tight leading-none select-none">
                {formatTime(timeLeft)}
              </span>
              <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-semibold mt-1">
                {timerRunning ? (timerMode === "study" ? "KEEP FOCUSING" : "TAKE A BREATH") : "TIMER PAUSED"}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={resetTimer}
                className="w-8 h-8 rounded-full border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-500 flex items-center justify-center transition-colors cursor-pointer"
                title="Reset timer"
              >
                <ArrowCounterClockwise size={14} />
              </button>
              <button
                onClick={toggleTimer}
                className="w-10 h-10 rounded-full bg-white text-black hover:scale-105 flex items-center justify-center transition-transform cursor-pointer"
                title={timerRunning ? "Pause" : "Start"}
              >
                {timerRunning ? <Pause size={16} weight="fill" /> : <Play size={16} weight="fill" className="ml-0.5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= RIGHT PANEL (WHITE PANE) ================= */}
      <div className="w-full md:w-[58%] flex flex-col bg-white text-zinc-950 overflow-y-auto h-full md:h-[100dvh] relative">
        <AnimatePresence mode="wait">
          {rightPaneView === "detail" && activeCourse ? (
            /* ================= SUBJECT DETAIL VIEW ================= */
            <motion.div
              key="detail"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex-1 p-8 md:p-12 pb-20 flex flex-col min-h-full"
            >
              {/* Back Button */}
              <button
                onClick={() => setRightPaneView("list")}
                className="flex items-center gap-2 px-4 py-2 border border-zinc-200 rounded-full hover:bg-black hover:text-white transition-all cursor-pointer wide-text text-[9px] font-bold w-fit"
              >
                <span>← Back to Subjects</span>
              </button>

              {/* Course Title Details */}
              <div className="mt-8 mb-10 pb-6 border-b border-zinc-100">
                <span className="wide-text text-[10px] tracking-wider text-accent font-bold">
                  {activeCourse.code}
                </span>
                <h2 className="wide-display text-2xl md:text-3xl font-bold tracking-tight text-zinc-950 mt-1 leading-snug">
                  {activeCourse.name}
                </h2>
                <div className="flex flex-wrap items-center gap-3 mt-3">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 font-semibold bg-zinc-50 border border-zinc-100 px-2.5 py-0.5 rounded">
                    {activeCourse.category}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 font-semibold bg-zinc-50 border border-zinc-100 px-2.5 py-0.5 rounded">
                    {activeCourse.semester}
                  </span>
                </div>
              </div>

              {/* Papers List grouped by CAT-1, CAT-2, FAT */}
              <div className="space-y-8 flex-1">
                {activeCourse.papers.length === 0 ? (
                  <div className="py-16 text-center border border-dashed border-zinc-200 rounded-2xl bg-zinc-50/10">
                    <span className="text-xs text-zinc-400 font-medium">No question papers uploaded for this course yet.</span>
                  </div>
                ) : (
                  <>
                    {/* Group FAT */}
                    {activeCourse.papers.some(p => p.type === "FAT") && (
                      <div>
                        <h3 className="wide-text text-[9px] font-bold tracking-widest text-zinc-400 uppercase mb-4 flex items-center gap-2">
                          <span>FAT (Final Assessment Tests)</span>
                          <span className="h-[1px] flex-1 bg-zinc-100" />
                        </h3>
                        <div className="grid grid-cols-1 gap-3">
                          {activeCourse.papers
                            .filter(p => p.type === "FAT")
                            .map((paper) => {
                              const isBookmarked = bookmarkedIds.includes(paper.id);
                              return (
                                <div 
                                  key={paper.id} 
                                  className="flex items-center justify-between p-4 sm:p-5 rounded-xl border border-zinc-200 bg-white transition-all duration-200 hover:border-black hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5"
                                >
                                  <div className="flex items-center gap-3">
                                    <span className="px-2 py-0.5 rounded bg-zinc-950 text-white font-mono text-[9px] font-bold">
                                      {paper.year}
                                    </span>
                                    <span className="text-xs font-semibold text-zinc-800">
                                      {paper.name}
                                    </span>
                                  </div>

                                  <div className="flex items-center gap-2">
                                    <button
                                      onClick={() => handleToggleBookmark(paper.id)}
                                      className={`w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-white transition-all cursor-pointer ${
                                        isBookmarked ? "text-accent border-accent/40 bg-accent/5" : "text-zinc-400"
                                      }`}
                                      title={isBookmarked ? "Remove Bookmark" : "Save Paper"}
                                    >
                                      {isBookmarked ? <Bookmark size={12} weight="fill" className="text-accent" /> : <BookmarkSimple size={12} />}
                                    </button>
                                    
                                    <a
                                      href={paper.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="h-8 px-4 rounded-full bg-zinc-950 text-white text-[10px] font-bold tracking-wider uppercase hover:bg-zinc-800 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                                    >
                                      <span>Open</span>
                                      <ArrowSquareOut size={10} />
                                    </a>
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    )}

                    {/* Group CAT-2 */}
                    {activeCourse.papers.some(p => p.type === "CAT-2") && (
                      <div>
                        <h3 className="wide-text text-[9px] font-bold tracking-widest text-zinc-400 uppercase mb-4 flex items-center gap-2">
                          <span>CAT-2 Exams</span>
                          <span className="h-[1px] flex-1 bg-zinc-100" />
                        </h3>
                        <div className="grid grid-cols-1 gap-3">
                          {activeCourse.papers
                            .filter(p => p.type === "CAT-2")
                            .map((paper) => {
                              const isBookmarked = bookmarkedIds.includes(paper.id);
                              return (
                                <div 
                                  key={paper.id} 
                                  className="flex items-center justify-between p-4 sm:p-5 rounded-xl border border-zinc-200 bg-white transition-all duration-200 hover:border-black hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5"
                                >
                                  <div className="flex items-center gap-3">
                                    <span className="px-2 py-0.5 rounded bg-zinc-950 text-white font-mono text-[9px] font-bold">
                                      {paper.year}
                                    </span>
                                    <span className="text-xs font-semibold text-zinc-800">
                                      {paper.name}
                                    </span>
                                  </div>

                                  <div className="flex items-center gap-2">
                                    <button
                                      onClick={() => handleToggleBookmark(paper.id)}
                                      className={`w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-white transition-all cursor-pointer ${
                                        isBookmarked ? "text-accent border-accent/40 bg-accent/5" : "text-zinc-400"
                                      }`}
                                      title={isBookmarked ? "Remove Bookmark" : "Save Paper"}
                                    >
                                      {isBookmarked ? <Bookmark size={12} weight="fill" className="text-accent" /> : <BookmarkSimple size={12} />}
                                    </button>
                                    
                                    <a
                                      href={paper.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="h-8 px-4 rounded-full bg-zinc-950 text-white text-[10px] font-bold tracking-wider uppercase hover:bg-zinc-800 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                                    >
                                      <span>Open</span>
                                      <ArrowSquareOut size={10} />
                                    </a>
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    )}

                    {/* Group CAT-1 */}
                    {activeCourse.papers.some(p => p.type === "CAT-1") && (
                      <div>
                        <h3 className="wide-text text-[9px] font-bold tracking-widest text-zinc-400 uppercase mb-4 flex items-center gap-2">
                          <span>CAT-1 Exams</span>
                          <span className="h-[1px] flex-1 bg-zinc-100" />
                        </h3>
                        <div className="grid grid-cols-1 gap-3">
                          {activeCourse.papers
                            .filter(p => p.type === "CAT-1")
                            .map((paper) => {
                              const isBookmarked = bookmarkedIds.includes(paper.id);
                              return (
                                <div 
                                  key={paper.id} 
                                  className="flex items-center justify-between p-4 sm:p-5 rounded-xl border border-zinc-200 bg-white transition-all duration-200 hover:border-black hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5"
                                >
                                  <div className="flex items-center gap-3">
                                    <span className="px-2 py-0.5 rounded bg-zinc-950 text-white font-mono text-[9px] font-bold">
                                      {paper.year}
                                    </span>
                                    <span className="text-xs font-semibold text-zinc-800">
                                      {paper.name}
                                    </span>
                                  </div>

                                  <div className="flex items-center gap-2">
                                    <button
                                      onClick={() => handleToggleBookmark(paper.id)}
                                      className={`w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-white transition-all cursor-pointer ${
                                        isBookmarked ? "text-accent border-accent/40 bg-accent/5" : "text-zinc-400"
                                      }`}
                                      title={isBookmarked ? "Remove Bookmark" : "Save Paper"}
                                    >
                                      {isBookmarked ? <Bookmark size={12} weight="fill" className="text-accent" /> : <BookmarkSimple size={12} />}
                                    </button>
                                    
                                    <a
                                      href={paper.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="h-8 px-4 rounded-full bg-zinc-950 text-white text-[10px] font-bold tracking-wider uppercase hover:bg-zinc-800 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                                    >
                                      <span>Open</span>
                                      <ArrowSquareOut size={10} />
                                    </a>
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          ) : (
            /* ================= SUBJECT CATALOG LIST VIEW ================= */
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col flex-1"
            >
              {/* Top Sticky Header */}
              <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-8 py-6 border-b border-black flex flex-col gap-5 shrink-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {/* Search Box - Pill layout */}
                  <div className="relative flex-1 max-w-sm">
                    <MagnifyingGlass size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
                    <input
                      ref={searchInputRef}
                      type="text"
                      placeholder="Search subject code or name..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full h-10 pl-11 pr-10 rounded-full border border-zinc-300 bg-white text-xs font-bold focus:outline-none focus:border-black focus:ring-1 focus:ring-black focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all text-zinc-950"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[9px] font-mono text-zinc-400 bg-white border border-zinc-200 px-1.5 py-0.5 rounded">
                      /
                    </span>
                  </div>

                  {/* Navigation links styled as branch filters in wide font */}
                  <div className="flex flex-wrap items-center gap-2 wide-text text-[9px] font-bold">
                    <button 
                      onClick={() => setSelectedBranch("all")}
                      className={`h-8 px-3 rounded-full border transition-all cursor-pointer flex items-center justify-center ${
                        selectedBranch === "all" 
                          ? "bg-black text-white border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]" 
                          : "bg-white text-zinc-500 border-zinc-200 hover:border-black hover:text-black"
                      }`}
                    >
                      All
                    </button>
                    <button 
                      onClick={() => setSelectedBranch("cse")}
                      className={`h-8 px-3 rounded-full border transition-all cursor-pointer flex items-center justify-center ${
                        selectedBranch === "cse" 
                          ? "bg-black text-white border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]" 
                          : "bg-white text-zinc-500 border-zinc-200 hover:border-black hover:text-black"
                      }`}
                    >
                      CSE
                    </button>
                    <button 
                      onClick={() => setSelectedBranch("ece")}
                      className={`h-8 px-3 rounded-full border transition-all cursor-pointer flex items-center justify-center ${
                        selectedBranch === "ece" 
                          ? "bg-black text-white border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]" 
                          : "bg-white text-zinc-500 border-zinc-200 hover:border-black hover:text-black"
                      }`}
                    >
                      ECE
                    </button>
                    <button 
                      onClick={() => setSelectedBranch("mat")}
                      className={`h-8 px-3 rounded-full border transition-all cursor-pointer flex items-center justify-center ${
                        selectedBranch === "mat" 
                          ? "bg-black text-white border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]" 
                          : "bg-white text-zinc-500 border-zinc-200 hover:border-black hover:text-black"
                      }`}
                    >
                      Maths
                    </button>
                    <button 
                      onClick={() => setSelectedBranch("lang")}
                      className={`h-8 px-3 rounded-full border transition-all cursor-pointer flex items-center justify-center ${
                        selectedBranch === "lang" 
                          ? "bg-black text-white border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]" 
                          : "bg-white text-zinc-500 border-zinc-200 hover:border-black hover:text-black"
                      }`}
                    >
                      Languages
                    </button>
                    <button 
                      onClick={() => setSelectedBranch("other")}
                      className={`h-8 px-3 rounded-full border transition-all cursor-pointer flex items-center justify-center ${
                        selectedBranch === "other" 
                          ? "bg-black text-white border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]" 
                          : "bg-white text-zinc-500 border-zinc-200 hover:border-black hover:text-black"
                      }`}
                    >
                      Others
                    </button>
                  </div>
                </div>
              </div>

              {/* Content Body - The Tracklist */}
              <div className="flex-1 px-8 py-8 pb-20">
                <div className="flex justify-between items-center wide-text text-[8px] font-bold tracking-widest text-zinc-400 uppercase mb-5 px-2">
                  <span>Subject Catalog</span>
                  <span>Volume</span>
                </div>

                <div className="space-y-3.5">
                  {filteredCourses.length === 0 ? (
                    <div className="text-center py-16 border border-dashed border-zinc-200 rounded-2xl bg-zinc-50/20">
                      <span className="text-xs text-zinc-400 font-medium">No subjects found matching the filters.</span>
                    </div>
                  ) : (
                    filteredCourses.map((course) => {
                      return (
                        <div
                          key={course.code}
                          onClick={() => {
                            setActiveCourse(course);
                            setRightPaneView("detail");
                          }}
                          className="group relative cursor-pointer border border-zinc-200 rounded-xl p-5 bg-white transition-all duration-250 hover:border-black hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex flex-col">
                              <span className="wide-display text-sm tracking-wide font-bold text-zinc-800 group-hover:text-black transition-colors leading-none">
                                {course.name}
                              </span>
                              <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 mt-2 font-semibold group-hover:text-zinc-500 transition-colors">
                                {course.code} • {course.category}
                              </span>
                            </div>
                            
                            <span className="wide-text text-[8px] tracking-widest text-zinc-400 border border-zinc-200 px-3 py-1 rounded-full font-bold group-hover:border-black group-hover:text-black transition-all">
                              {course.papersCount} papers
                            </span>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ================= CONTRIBUTOR SUBMISSION MODAL ================= */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop overlay */}
            <motion.div
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Box */}
            <motion.div
              className="relative z-10 w-full max-w-md p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-900 text-white shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-between mb-6 pb-2 border-b border-zinc-900">
                <span className="wide-text text-[10px] tracking-widest text-accent font-semibold">
                  SUBMIT RESOURCE
                </span>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-zinc-500 hover:text-white transition-colors cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              {submitStatus === "success" ? (
                <div className="text-center py-6">
                  <div className="w-12 h-12 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={24} weight="bold" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1 uppercase tracking-wide">Submission Succeeded</h4>
                  <p className="text-[11px] text-zinc-400 max-w-[260px] mx-auto mt-2 leading-relaxed">
                    Thank you. Student moderators will review the drive document and update the index database shortly.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="mt-6 px-5 py-2 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="courseCode" className="text-[9px] uppercase tracking-widest font-bold text-zinc-400">
                      Subject Code
                    </label>
                    <input
                      type="text"
                      id="courseCode"
                      placeholder="e.g. CSE4004"
                      value={courseCode}
                      onChange={(e) => setCourseCode(e.target.value.toUpperCase())}
                      disabled={submitStatus === "submitting"}
                      className="w-full h-10 px-4 rounded-xl border border-zinc-900 bg-zinc-900/60 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-700 text-xs font-semibold"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="courseName" className="text-[9px] uppercase tracking-widest font-bold text-zinc-400">
                      Subject Title
                    </label>
                    <input
                      type="text"
                      id="courseName"
                      placeholder="e.g. Web Technologies"
                      value={courseName}
                      onChange={(e) => setCourseName(e.target.value)}
                      disabled={submitStatus === "submitting"}
                      className="w-full h-10 px-4 rounded-xl border border-zinc-900 bg-zinc-900/60 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-700 text-xs font-semibold"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="examType" className="text-[9px] uppercase tracking-widest font-bold text-zinc-400">
                        Exam Type
                      </label>
                      <select
                        id="examType"
                        value={examType}
                        onChange={(e) => setExamType(e.target.value)}
                        disabled={submitStatus === "submitting"}
                        className="w-full h-10 px-3 rounded-xl border border-zinc-900 bg-zinc-900/60 text-zinc-300 focus:outline-none focus:border-zinc-700 text-xs font-semibold cursor-pointer"
                      >
                        <option value="FAT">FAT</option>
                        <option value="CAT-2">CAT-2</option>
                        <option value="CAT-1">CAT-1</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="year" className="text-[9px] uppercase tracking-widest font-bold text-zinc-400">
                        Exam Year
                      </label>
                      <select
                        id="year"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        disabled={submitStatus === "submitting"}
                        className="w-full h-10 px-3 rounded-xl border border-zinc-900 bg-zinc-900/60 text-zinc-300 focus:outline-none focus:border-zinc-700 text-xs font-semibold cursor-pointer"
                      >
                        <option value="2026">2026</option>
                        <option value="2025">2025</option>
                        <option value="2024">2024</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="driveLink" className="text-[9px] uppercase tracking-widest font-bold text-zinc-400">
                      Drive Link
                    </label>
                    <input
                      type="url"
                      id="driveLink"
                      placeholder="https://drive.google.com/..."
                      value={driveLink}
                      onChange={(e) => setDriveLink(e.target.value)}
                      disabled={submitStatus === "submitting"}
                      className="w-full h-10 px-4 rounded-xl border border-zinc-900 bg-zinc-900/60 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-700 text-xs font-semibold"
                    />
                  </div>

                  {submitStatus === "error" && errorMsg && (
                    <div className="text-[10px] text-rose-500 font-semibold uppercase tracking-wider mt-2">
                      * {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitStatus === "submitting"}
                    className="flex items-center justify-center w-full h-10 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-zinc-200 transition-colors disabled:bg-zinc-800 disabled:text-zinc-600 cursor-pointer gap-2 mt-4"
                  >
                    {submitStatus === "submitting" ? (
                      <>
                        <CircleNotch size={14} className="animate-spin" />
                        <span>Uploading...</span>
                      </>
                    ) : (
                      <>
                        <PaperPlane size={14} weight="fill" />
                        <span>Send Resource</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ================= ROLLING MARQUEE TICKER BANNER ================= */}
      <div className="fixed bottom-0 left-0 w-full h-8 bg-black text-white border-t border-zinc-900 z-40 flex items-center overflow-hidden select-none">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-1">
          {/* First copy */}
          <div className="flex items-center gap-16 wide-text text-[9px] tracking-widest text-zinc-300">
            <span>★ PAPERFLOW EXAM ARCHIVE</span>
            <span>★ VIT AP UNIVERSITY</span>
            <span>★ 100% PEER-VERIFIED EXAM PAPERS</span>
            <span>★ REVISE EFFORTLESSLY</span>
            <span>★ USE THE FOCUS TIMER HUD</span>
            <span>★ SUBMIT MISSING DOCUMENTS</span>
          </div>
          {/* Second copy for seamless looping */}
          <div className="flex items-center gap-16 wide-text text-[9px] tracking-widest text-zinc-300" aria-hidden="true">
            <span>★ PAPERFLOW EXAM ARCHIVE</span>
            <span>★ VIT AP UNIVERSITY</span>
            <span>★ 100% PEER-VERIFIED EXAM PAPERS</span>
            <span>★ REVISE EFFORTLESSLY</span>
            <span>★ USE THE FOCUS TIMER HUD</span>
            <span>★ SUBMIT MISSING DOCUMENTS</span>
          </div>
        </div>
      </div>
    </div>
  );
}
