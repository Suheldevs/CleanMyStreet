import React, { useState, useEffect, useRef } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { TbCapture } from "react-icons/tb";
import { FaArrowRotateRight } from "react-icons/fa6";
const Hero = () => {
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [captureMode, setCaptureMode] = useState(false);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const startCamera = async () => {
    setPhoto(null);
    setCaptureMode(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { exact: "environment" } },
        audio: false,
      });
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    } catch (err) {
      console.error("Error accessing camera:", err);
    }
  };

  const captureImage = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const dataUrl = canvas.toDataURL("image/png");
    setPhoto(dataUrl);
    setCaptureMode(false);
  };

  const getLocation = () => {
    setLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          setLocation({ lat, lon });
          setLoading(false);
        },
        (error) => {
          console.error("Error getting location:", error);
          setLoading(false);
        }
      );
    } else {
      setLoading(false);
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleSubmit = () => {
    if (photo && location) {
      if(photo.name){
        const complaintData = {
          photo,
          location,
        };
        console.log("Complaint Data:", complaintData);
      }


    } else {
      alert("Please capture a photo and ensure location is available.");
    }
  };

  return (
    <div className="md:px-10 px-2 w-full bg-[url(/tile-y.jpg)] ">
      <div className="md:font-bold md:text-2xl text-xl font-semibold text-center">
        <span className=" md:block hidden  pt-4 underline uppercase">Your Voice, Your Power </span>
        <div className="pt-4">
          <span className="md:text-xl text-2xl px-2 bg-black/80 text-white">
            Report to clean, track, and transform Lucknow streets garbage free
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full p-4">
        <div className="flex flex-col w-full justify-center items-center">
          {photo ? (
            <div className="flex flex-col gap-2 justify-center items-center border-2 p-4 border-black rounded">
              <div className="bg-black/80 px-1 text-white font-semibold w-full ">* Photo is Required</div>
              <div>
                <img src={photo} alt="Complaint" width="200" className="rounded" />
              </div>
              <div className=" ">
                <button
                  onClick={startCamera}
                  className="flex justify-center items-center font-semibold gap-2 border p-1 rounded  border-black mt-2 hover:bg-black hover:text-white cursor-pointer"
                >
                  {" "}
                  Re-Capture Photo <FaArrowRotateRight />
                </button>
                </div>
                <div className="w-full ">
                <input
                  type="text"
                  placeholder="Title (optional)"
                  className="p-2 rounded bg-yellow-100 "
                />
                </div>
                <div className="w-full ">
                <input
                  placeholder="Description (optional)"
                  rows={2}
                  className="p-2 rounded bg-yellow-100"
                />
                </div>
              <div className="w-full">
                {location ? (
                  <div className="flex flex-col gap-1">
                    <div className="text-center font-semibold">Current Location </div>
                    <div><input type="text" value={`Lat: ${location.lat}`} className="text-center" disabled/> </div>
                    <div><input type="text" value={`Lon: ${location.lon}`} className="text-center" disabled/></div> 
                  </div>
                ) : (<div className="flex gap-2 flex-col w-full justify-center align-center">
                  <div className="bg-black/80 px-1 text-white font-semibold ">* Location is Required</div>
                  <div
                    onClick={getLocation}
                    className={`border ${
                      loading && "cursor-wait"
                    } rounded font-semibold  border-black flex items-center gap-3 px-2 w-full py-1 justify-center hover:cursor-pointer hover:bg-black hover:text-white`}
                  >
                    <FaLocationArrow />{" "}
                    <span>
                      {loading ? (
                        <div className="flex justify-center items-center">
                          <div className="h-4 w-4 rounded-full border-black border-2 border-t-transparent mx-2  animate-spin "></div>
                          Getting Information..
                        </div>
                      ) : (
                        "Use my current location "
                      )}
                    </span>
                  </div>
                  </div>
                )}
              </div>
              <div onClick={handleSubmit} className="border-black border-2 hover:text-white hover:bg-black  px-2 w-full hover:cursor-pointer mt-2 py-1 rounded font-semibold text-center">Submit Complaint</div>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center">
              {captureMode ? (
                <>
                  {" "}
                  <div className="mb-1">*Click a photo of street garbage</div>
                  <video
                    ref={videoRef}
                    style={{ width: "100%", maxHeight: "300px" }}
                    className="rounded"
                  />
                  <canvas ref={canvasRef} style={{ display: "none" }} />
                </>
              ) : (
                <button onClick={startCamera}>
                  <div className="">
                    <TbCapture size={250} className="hover:scale-110 " />
                  </div>
                  <div className="uppercase">Click here for Complaint</div>
                </button>
              )}

              {captureMode && (
                <button
                  onClick={captureImage}
                  className="border p-1 rounded  border-black mt-2 hover:bg-black hover:text-white cursor-pointer"
                >
                  Capture Photo
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
