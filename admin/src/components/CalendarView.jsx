export function CalendarView() {
  // Calendar data for November 2022
  const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  const currentDay = 25; // Highlighted day

  return (
    <div className="w-full">
      <div className="grid grid-cols-7 gap-2 mb-2 text-center">
        {days.map((day) => (
          <div key={day} className="text-xs font-medium text-[#797979]">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 text-center">
        <div className="text-xs py-2 text-[#a1a1a1]">31</div>
        {Array.from({ length: 30 }, (_, i) => i + 1).map((date) => (
          <div
            key={date}
            className={`text-xs py-2 rounded-full ${
              date === currentDay
                ? "bg-[#d4af37] text-white font-medium"
                : "hover:bg-[#f4f4f4]"
            }`}
          >
            {date}
          </div>
        ))}
        {Array.from({ length: 3 }, (_, i) => i + 1).map((date) => (
          <div key={`next-${date}`} className="text-xs py-2 text-[#a1a1a1]">
            {date}
          </div>
        ))}
      </div>
    </div>
  );
}
