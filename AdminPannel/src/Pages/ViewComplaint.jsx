import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
// import { Icon } from "leaflet";

// Leaflet styles
// import "leaflet/dist/leaflet.css";

import axios from "axios";

// const containerStyle = {
//   width: "100%",
//   height: "400px",
// };

// const center = {
//   lat: 20.5937, // Default lat
//   lng: 78.9629, // Default lng
// };

function ViewComplaint() {
  const backendUrl = import.meta.env.VITE_BACKEND_URL ;
  const location = useLocation();
  const data = location.state || {};
  const [isEditable, setIsEditable] = useState(false);
  const [complaint, setComplaint] = useState(data);
  const latitude = complaint.location?.coordinates[0] || 20.5937;
  const longitude = complaint.location?.coordinates[1] || 78.9629;
  const googleMapsUrl = `https://www.google.com/maps/place/${latitude},${longitude}`;
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3557.659305645617!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1shi!2sin!4v1734700254595!5m2!1shi!2sin`;

  useEffect(() => {
    setComplaint(data);
  }, [data]);

  const handleSave = async () => {
    try {
      const updatedComplaint = {
        ...complaint,
      };
      const res = await axios.put(
        `${backendUrl}/complaint/update/${complaint._id}`,
        updatedComplaint
      );
      if (res.status === 200) {
        alert("Complaint updated successfully");
      }
    } catch (err) {
      console.error(err);
      alert("Error updating complaint");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">View and Edit Complaint  &nbsp; || &nbsp; Complaint ID- <span className="text-blue-700">{complaint.uniqueId}</span> </h1>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex md:flex-row flex-col w-full gap-4">
          <div className=" md:w-2/5 w-full flex flex-col gap-4">
          <div>
            <label className="block text-sm font-semibold">Title</label>
            <input
              type="text"
              value={complaint.title}
              disabled={!isEditable}
              className="w-full p-2 border rounded"
              onChange={(e) =>
                setComplaint({ ...complaint, title: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-semibold">Description</label>
            <textarea
              value={complaint.description}
              disabled={!isEditable}
              className="w-full p-2 border rounded"
              rows="4"
              onChange={(e) =>
                setComplaint({ ...complaint, description: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-semibold">Status</label>
            <select
              disabled={!isEditable}
              className="w-full p-2 border rounded"
              value={complaint.status}
              onChange={(e) =>
                setComplaint({ ...complaint, status: e.target.value })
              }
            >
              <option value="Pending">Pending</option>
              <option value="Approved By Admin">Approved By Admin</option>
              <option value="Rejected By Admin">Rejected By Admin</option>
              <option value="Rejected By Admin">Pending At Nagar Nigam</option>
            </select>
          </div>
          <div className="flex gap-4 mt-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setIsEditable(!isEditable)}
            >
              {isEditable ? "Cancel Edit" : "Edit"}
            </button>

            {isEditable && (
              <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={handleSave}
              >
                Save Changes
              </button>
            )}
          </div>
         </div>

         <div className="md:w-3/5 w-full my-2">
          {/* Google Map for Location */}

          <div>
            {/* <label className="block text-sm font-semibold">Location</label>
            <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={newLocation}
                zoom={15}
                onClick={(e) => setNewLocation({ lat: e.latLng.lat(), lng: e.latLng.lng() })}
              >
                <Marker position={newLocation} />
              </GoogleMap>
            </LoadScript> */}

            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="text-blue-800 hover:text-blue-600 text-end">
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
              Open in Google Maps
            </a>
            </div>
          </div>
          <div className="w-full flex justify-center mt-2">
            <div>

            <img src={complaint.imageUrl} width={'300px'}/>
            </div>
          </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default ViewComplaint;
