import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      user: "A",
      action: "New Booking: Venue A",
      date: "25 March,2025",
    },
    {
      id: 2,
      user: "B",
      action: "Venue Approval: Venue B",
      date: "25 March,2025",
    },
    {
      id: 3,
      user: "C",
      action: "Booking Confirmation: Venue C",
      date: "26 March,2025",
    },
    {
      id: 4,
      user: "D",
      action: "Final Payment: Venue D",
      date: "27 March,2025",
    },
    {
      id: 5,
      user: "E",
      action: "Event Setup: Venue E",
      date: "28 March,2025",
    },
    {
      id: 6,
      user: "F",
      action: "Guest Check-In: Venue F",
      date: "29 March,2025",
    },
    {
      id: 7,
      user: "G",
      action: "Event Wrap-Up: Venue G",
      date: "30 March,2025",
    },
  ];

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div
          key={activity.id}
          className="flex items-center justify-between py-2 border-b border-[#e4e4e4] last:border-0"
        >
          <div className="flex items-center gap-3">
            <Avatar className="w-8 h-8 border">
              <AvatarImage
                src={`/placeholder.svg?height=32&width=32&text=${activity.user}`}
              />
              <AvatarFallback>{activity.user}</AvatarFallback>
            </Avatar>
            <span className="text-sm">{activity.action}</span>
          </div>
          <span className="text-xs text-[#797979]">{activity.date}</span>
        </div>
      ))}
    </div>
  );
}
