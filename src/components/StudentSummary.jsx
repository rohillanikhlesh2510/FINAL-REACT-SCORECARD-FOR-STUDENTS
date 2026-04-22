function StudentsSummary() {
  return (
    <div className="w-200 flex items-center justify-between border border-[#7C3AED]">
        <div className="flex flex-col border border-r-[#7C3AED] flex-1 p-2 relative inline-block group cursor-pointer hover:bg-[#C084FC]/10">
            <div className="flex flex-col">
            <span className="text-[#7C3AED]">TOTAL</span>
            <span className="text-[#C084FC] text-5xl font-bold">4</span>
            </div>
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#C084FC] transition-all duration-300 group-hover:w-full"></span>
        </div>
        <div className="flex flex-col border border-r-[#7C3AED] flex-1 p-2 relative inline-block group cursor-pointer hover:bg-[#C084FC]/10">
            <div className="flex flex-col">
                 <span className="text-[#7C3AED]">PASSED</span>
            <span className="text-[#C084FC] text-5xl font-bold">4</span>
            </div>
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#C084FC] transition-all duration-300 group-hover:w-full"></span>
        </div>
        <div className="flex flex-col  flex-1 p-2 relative inline-block group cursor-pointer hover:bg-[#C084FC]/10">
            <div className="flex flex-col">
                 <span className="text-[#7C3AED]">AVG SCORE</span>
            <span className="text-[#C084FC] text-5xl font-bold">4</span>
            </div>
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#C084FC] transition-all duration-300 group-hover:w-full"></span>

        </div>
    </div>
  )
}

export default StudentsSummary