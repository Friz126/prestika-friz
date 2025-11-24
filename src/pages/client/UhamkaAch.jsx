import UhamkaChart from '../../components/UhamkaChart'
import All from './client-layout/All'

export default function UhamkaAch() {
  return (
    <All>
      <div className='flex flex-col justify-start gap-20'>
        <UhamkaChart />
      </div>
    </All>
  );
}
