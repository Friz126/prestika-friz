import KpiCards from "./KpiCards";
import BarFaculty from "./BarFakultas";
import PieCategory from "./PaiKategori";
import LineTimeline from "./LineTimeline";
import TopPerformers from "./TopPerformers";
import RecentAchievementsUhamka from "./RecentAchievementsUhamka";

export default function UhamkaChart() {
  return (
    <div className="space-y-6">
      <KpiCards />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <BarFaculty />
          <LineTimeline />
          <RecentAchievementsUhamka />
        </div>

        <div className="space-y-6">
          <PieCategory />
          <TopPerformers />
        </div>
      </div>
    </div>
  );
}
