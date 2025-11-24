export default function RecentAchievements() {
  const achievements = [
    {
      icon: "https://github.githubassets.com/assets/starstruck-default-b6610abad518.png",
      title: "Graduated from the University of California",
      date: "May 2022",
    },
    {
      icon: "https://github.githubassets.com/assets/yolo-default-be0bbff04951.png",
      title: "Awarded the Best in Show at the Art Festival",
      date: "September 2021",
    },
    {
      icon: "https://github.githubassets.com/assets/arctic-code-vault-contributor-default-df8d74122a06.png",
      title: "Published a Research Paper on Quantum Mechanics",
      date: "January 2023",
    },
    {
      icon: "https://github.githubassets.com/assets/pair-extraordinaire-default-579438a20e01.png",
      title: "Won the National Championship with the School Soccer Team",
      date: "March 2022",
    },
    {
      icon: "https://github.githubassets.com/assets/galaxy-brain-default-847262c21056.png",
      title: "Volunteered 100 Hours at the Local Food Bank",
      date: "July 2023",
    },
  ];

  const notifications = [
    {
      icon: "https://github.githubassets.com/assets/yolo-default-be0bbff04951.png",
      title: "Achievement Approved",
      description:
        "Your achievement 'Best in Show at the Art Festival' has been approved and added to your profile.",
      time: "2d ago",
    },
    {
      icon: "https://github.githubassets.com/assets/starstruck-default-b6610abad518.png",
      title: "New Achievement Opportunity",
      description:
        "New achievement opportunity: 'Research Assistant for Spring Semester 2023'.",
      time: "1w ago",
    },
  ];

  return (
    <div className="bg-transparent p-6 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4 text-white"> 🕢 Recent Achievements</h2>
      <div className="space-y-4">
        {achievements.map((a, i) => (
          <div key={i} className="flex items-start gap-3">
            <img src={a.icon} alt="" className="w-8 h-8" />
            <div>
              <p className="font-medium text-white">{a.title}</p>
              <p className="text-sm text-white">{a.date}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-lg font-semibold mt-8 mb-4 text-white">🛎️ Notifications</h2>
      <div className="space-y-4">
        {notifications.map((n, i) => (
          <div key={i} className="flex items-start gap-3">
            <img src={n.icon} alt="" className="w-10 h-10" />
            <div className="flex-1">
              <p className="font-medium text-white">{n.title}</p>
              <p className="text-sm text-white">{n.description}</p>
            </div>
            <p className="text-xs text-white">{n.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
