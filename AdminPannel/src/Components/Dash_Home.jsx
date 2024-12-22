import React from 'react';
import useComplaints from '../Hooks/UseComplaints';

function Dash_Home() {
  const { complaints = [] } = useComplaints(); 
  const totalComplaints = complaints.length;
  const pendingComplaints = complaints.filter(c => c.status === 'Pending').length;
  const approvedComplaints = complaints.filter(c => c.status === 'Approved By Admin').length;
  const pendingAtNN = complaints.filter(c => c.status === 'Pending At Nagar Nigam').length;
  const Resolved = complaints.filter(c => c.status === 'Resolved').length;

  return (
    <div className='max-h-[80vh] overflow-y-auto  grid grid-cols-3'>
      <div className="m-4 py-6 px-2 shadow-lg bg-white text-center md:font-bold font-semibold md:text-lg uppercase rounded-lg">
        <div>Total Complaints</div>
        <div className='bg-gray-800 text-white inline px-2 py-1 rounded'>{totalComplaints}</div>
      </div>
      <div className="m-4 py-6 px-2 shadow-lg bg-white text-center md:font-bold font-semibold md:text-lg uppercase rounded-lg">
        <div>Pending</div>
        <div className='bg-gray-800 text-white inline px-2 py-1 rounded'>{pendingComplaints}</div>
      </div>
      <div className="m-4 py-6 px-2 shadow-lg bg-white text-center md:font-bold font-semibold md:text-lg uppercase rounded-lg">
        <div>Approved By Admin</div>
        <div className='bg-gray-800 text-white inline px-2 py-1 rounded'>{approvedComplaints}</div>
      </div>
      <div className="m-4 py-6 px-2 shadow-lg bg-white text-center md:font-bold font-semibold md:text-lg uppercase rounded-lg">
        <div>Pending At Nagar Nigam</div>
        <div className='bg-gray-800 text-white inline px-2 py-1 rounded'>{pendingAtNN}</div>
      </div>
      <div className="m-4 py-6 px-2 shadow-lg bg-white text-center md:font-bold font-semibold md:text-lg uppercase rounded-lg">
        <div>Resolved</div>
        <div className='bg-gray-800 text-white inline px-2 py-1 rounded'>{Resolved}</div>
      </div>
    </div>
  );
}

export default Dash_Home;
