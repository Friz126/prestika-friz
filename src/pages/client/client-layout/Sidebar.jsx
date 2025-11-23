import { Link } from "react-router-dom"

export default function Sidebar() {
  return (
    <div className="bg-[#1d4b62] flex flex-col text-white w-64 p-2 shadow-lg">
      <div className="mb-6 flex justify-center">
        <Link to="/home-client">
          <img
            src="https://www.uhamka.ac.id/static/media/onlylogo.34f66f590c1032ef7703.png"
            alt="logo uhamka"
            className="h-40 w-40 hover:scale-105 transition-all duration-300"
          />
        </Link>
      </div>
      <div className="space-y-2">
        <Link to="/home-client" className="block px-4 py-2 rounded-lg hover:bg-slate-700 transition flex items-center">
          <i className="fas fa-gauge mr-2"></i> Dashboard
        </Link>
        <Link to="/uhamka-ach" className="block px-4 py-2 rounded-lg hover:bg-slate-700 transition flex items-center">
          <i className="fas fa-trophy mr-2"></i>Uhamka Achievements
        </Link>
        <Link to="/my-achievements" className="block px-4 py-2 rounded-lg hover:bg-slate-700 transition flex items-center">
          <i className="fa fa-trophy mr-2"></i>My Achievements
        </Link>
        <Link to="/leaderboard" className="block px-4 py-2 rounded-lg hover:bg-slate-700 transition flex items-center">
          <i className="fas fa-list mr-2"></i>Leaderboard
        </Link>
        <Link to="/add-ach" className="block px-4 py-2 rounded-lg bg-blue-600 hover:bg-white hover:text-slate-700 transition flex items-center">
          <i className="fas fa-plus mr-2"></i>Add Achievements
        </Link>
      </div>
      <div className="mt-auto pt-4">
        <Link to="/"
          className="block px-4 py-2 rounded-lg bg-red-600 hover:bg-white hover:text-slate-700 transition flex items-center">
          <i className="fas fa-sign-out mr-2"></i>Logout
        </Link>
      </div>

    </div>
  );
}
