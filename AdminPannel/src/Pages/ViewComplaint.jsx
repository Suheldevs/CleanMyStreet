import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Icon } from "leaflet";

// Leaflet styles
import "leaflet/dist/leaflet.css";
import axios from "axios";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 20.5937, // Default lat
  lng: 78.9629, // Default lng
};

function ViewComplaint() {
  const [latitude, setLatitude] = useState(26.9142); // Initial lat
  const [longitude, setLongitude] = useState(80.9215); // Initial lon

  // Google Maps URL for sharing the location
//   const googleMapsUrl = `https://www.google.com/maps/place/${latitude},${longitude}`;
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3557.659305645617!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1shi!2sin!4v1734700254595!5m2!1shi!2sin`;
  const location = useLocation();
  const data = location.state || {};
  const navigate = useNavigate();

  const [complaint, setComplaint] = useState(data);
  const [newLocation, setNewLocation] = useState({
    lat: complaint.location?.coordinates[0] || 20.5937,
    lng: complaint.location?.coordinates[1] || 78.9629,
  });
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    setComplaint(data);
    setNewLocation({
      lat: data.location?.coordinates[0] || 20.5937,
      lng: data.location?.coordinates[1] || 78.9629,
    });
  }, [data]);

  const handleSave = async () => {
    try {
      const updatedComplaint = {
        ...complaint,
        location: {
          type: "Point",
          coordinates: [newLocation.lat, newLocation.lng],
        },
      };
      const res = await axios.put(
        `/complaint/update/${complaint.uniqueId}`,
        updatedComplaint
      );
      if (res.status === 200) {
        alert("Complaint updated successfully");
        navigate("/dashboard");
      }
    } catch (err) {
      console.error(err);
      alert("Error updating complaint");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">View and Edit Complaint</h1>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex flex-col gap-4">
          {/* Complaint Title */}
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

          {/* Complaint Description */}
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

          {/* Status */}
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
            </select>
          </div>

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
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
              Open in Google Maps
            </a> */}
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
      </div>
    </div>
  );
}

export default ViewComplaint;
