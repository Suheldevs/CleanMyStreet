import { useEffect, useState } from "react";
import axios from "axios";

function useComplaints() {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchComplaints = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`${backendUrl}/complaint/get`);
      setComplaints(res.data.complaints);
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to fetch complaints");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  return { complaints, loading, error };
}

export default useComplaints;
