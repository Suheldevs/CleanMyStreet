import React from "react";
import useComplaints from "../Hooks/UseComplaints";
import {useNavigate} from 'react-router-dom'
function Dash_Complaint() {
  const { complaints } = useComplaints();
  const navigate = useNavigate() 
const handleViewMore = (complaint)=>{
navigate(`/view/${complaint._id}`,{state:complaint})
}

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">Complaints Dashboard</h1>

      {complaints && complaints.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table-auto w-full bg-white shadow-lg rounded-lg">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((complaint, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } border-b`}
                >
                  <td className="px-4 py-2 text-center">{complaint.title}</td>
                  <td className="px-4 py-2 text-center">{new Date(complaint.createdAt).toLocaleDateString()}</td>
                  <td
                    className={`px-4 py-2 font-semibold text-center ${
                      complaint.status === "Resolved"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {complaint.status}
                  </td>
                  <td className="px-4 py-2 text-center">
                    <button
                      className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleViewMore(complaint)}
                    >
                      View More
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-600">No complaints available.</p>
      )}
    </div>
  );
}

export default Dash_Complaint;
