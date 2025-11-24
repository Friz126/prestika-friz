import RecentAchievements from '../../components/RecentAchievements';
import StatChart from '../../components/StatChart';
import All from './client-layout/All'
export default function MyAch() {
  return (
    <All>
      <div className='flex flex-col justify-start gap-20'>
        <StatChart />
        <div className='flex flex-row justify-between space-x-5 w-full'>
          <div className='flex flex-col border border-slate-300 px-8 py-4 rounded-2xl gap-2'>
            <p className='text-white font-semibold'>Total Achievments</p>
            <h4 className='text-2xl text-white font-bold'>48</h4>
          </div>
          <div className='flex flex-col border border-slate-300 px-8 py-4 rounded-2xl gap-2'>
            <p className='text-white font-semibold'>Achievment Submission</p>
            <h4 className='text-2xl text-white font-bold'>120</h4>
          </div>
          <div className='flex flex-col border border-slate-300 px-8 py-4 rounded-2xl gap-2'>
            <p className='text-white font-semibold'>Pending Approval</p>
            <h4 className='text-2xl text-white font-bold'>4</h4>
          </div>
        </div>
        <RecentAchievements />
      </div>
    </All>
  );
}
