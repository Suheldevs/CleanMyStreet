import React, { useState, useEffect } from 'react';

const CaptureComplaint = () => {
  const [photo, setPhoto] = useState(null);  // To store the captured photo
  const [location, setLocation] = useState(null);  // To store the geolocation

  // Function to capture photo using the device's camera
  const capturePhoto = (e) => {
    const photoFile = e.target.files[0];
    setPhoto(URL.createObjectURL(photoFile));  // Create an object URL to preview the image
  };

  // Function to get the current location
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          setLocation({ lat, lon });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  useEffect(() => {
    getLocation();  // Get location when the component mounts
  }, []);

  // Function to handle the form submission
  const handleSubmit = () => {
    if (photo && location) {
      // Prepare the data to send to the server
      const complaintData = {
        photo,  // You can store the image as base64 or send the URL
        location,
      };

      console.log('Complaint Data:', complaintData);

      // Send the complaint data to your backend API (e.g., POST request)
    } else {
      alert('Please capture a photo and ensure location is available.');
    }
  };

  return (
    <div>
      <h2>Submit a Complaint</h2>
      
      {/* Input for capturing photo */}
      <input
        type="file"
        accept="image/*"
        capture="camera"
        onChange={capturePhoto}
      />
      
      {/* Display captured photo */}
      {photo && <img src={photo} alt="Complaint" width="200" />}
      
      {/* Display location */}
      {location && (
        <p>
          Location: Lat: {location.lat}, Lon: {location.lon}
        </p>
      )}
      
      {/* Submit Button */}
      <button onClick={handleSubmit}>Submit Complaint</button>
    </div>
  );
};

export default CaptureComplaint;
