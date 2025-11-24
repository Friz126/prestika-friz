import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="bg-[#1d4b62] flex flex-col text-white w-64 p-2 shadow-lg">
      <div className="mb-6 flex justify-center">
        <NavLink to="/home-client">
          <img
            src="https://www.uhamka.ac.id/static/media/onlylogo.34f66f590c1032ef7703.png"
            alt="logo uhamka"
            className="h-40 w-40 hover:scale-105 transition-all duration-300"
          />
        </NavLink>
      </div>

      <div className="space-y-2">
        <NavLink
          to="/home-client"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg flex items-center transition 
             ${isActive ? "bg-slate-900" : "hover:bg-slate-900"}`
          }
        >
          <i className="fas fa-gauge mr-2"></i> Dashboard
        </NavLink>

        <NavLink
          to="/uhamka-ach"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg flex items-center transition 
             ${isActive ? "bg-slate-900" : "hover:bg-slate-900"}`
          }
        >
          <i className="fas fa-trophy mr-2"></i>Uhamka Achievements
        </NavLink>

        <NavLink
          to="/my-achievements"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg flex items-center transition 
             ${isActive ? "bg-slate-900" : "hover:bg-slate-900"}`
          }
        >
          <i className="fa fa-trophy mr-2"></i>My Achievements
        </NavLink>

        <NavLink
          to="/leaderboard"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg flex items-center transition 
             ${isActive ? "bg-slate-900" : "hover:bg-slate-900"}`
          }
        >
          <i className="fas fa-list mr-2"></i>Leaderboard
        </NavLink>

        <NavLink
          to="/add-ach"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg flex items-center transition 
             ${isActive ? "bg-white text-slate-900" : "bg-blue-600 hover:bg-white hover:text-slate-900"}`
          }
        >
          <i className="fas fa-plus mr-2"></i>Add Achievements
        </NavLink>
      </div>

      <div className="mt-auto pt-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg flex items-center transition 
             ${isActive ? "bg-white text-red-600" : "bg-red-600 hover:bg-white hover:text-slate-700"}`
          }
        >
          <i className="fas fa-sign-out mr-2"></i>Logout
        </NavLink>
      </div>
    </div>
  );
}
