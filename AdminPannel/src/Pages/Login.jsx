import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Alert, Button } from '@mui/material';
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const formdata = { username, password };

    try {
      const res = await axios.post(`${backendUrl}/admin/login`, formdata);
      if (res.status === 200) {
        Swal.fire('Success', 'Log-in Successful!', 'success');
        navigate('/dashboard', { state: res.data.userData });
      }
    } catch (err) {
      console.log(err);
      setError(err.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <form
        className="md:w-1/3 w-full p-6 md:mx-0 mx-4 border flex flex-col gap-4 shadow-lg rounded"
        onSubmit={handleSubmit}
      >
        <div className="text-lg font-semibold text-center mb-2">LOG IN</div>
        {error && <Alert severity="error">{error}</Alert>}
        <TextField
          label="User Name"
          variant="outlined"
          className="w-full"
          size="small"
          name="username"
          required
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          className="w-full"
          size="small"
          name="password"
          required
        />
        <Button
          variant="contained"
          className="w-full"
          disabled={loading}
          type="submit"
        >
          {loading ? 'Loading...' : 'SIGN IN'}
        </Button>
      </form>
    </div>
  );
}

export default Login;
