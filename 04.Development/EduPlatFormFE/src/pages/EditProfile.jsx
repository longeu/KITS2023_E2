import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const EditProfile = () => {
  const [formData, setFormData] = useState({
    avatar: null,
    firstName: '',
    lastName: '',
    bio: '',
    email: '',
    phone: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfileData = async () => {
      const endpoint =
        localStorage.getItem('role') === 'ROLE_STUDENT'
          ? 'http://localhost:8080/api/student/info'
          : localStorage.getItem('role') === 'ROLE_TEACHER'
          ? 'http://localhost:8080/api/teacher/info'
          : null;

      if (endpoint) {
        const response = await fetch(endpoint, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        });

        if (response.ok) {
          const userInfo = await response.json();
          setFormData(userInfo);
        } else {
          console.error('Request failed with status:', response.status);
        }
      } else {
        console.error('Invalid user role');
      }
    };

    fetchProfileData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const endpoint =
    localStorage.getItem('role') === 'ROLE_STUDENT'
      ? 'http://localhost:8080/api/student/update'
      : localStorage.getItem('role') === 'ROLE_TEACHER'
      ? 'http://localhost:8080/api/teacher/update'
      : null;

  if (endpoint) {
    const response = await fetch(endpoint, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      navigate('/profile');
    } else {
      console.error('Request failed with status:', response.status);
    }
  } else {
    console.error('Invalid user role');
  }
};


  return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '400px', margin: '2rem auto' }}>
      <Typography variant="h5" align="center" gutterBottom>
        Edit Profile
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Avatar"
          name="avatar"
          type="file"
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          inputProps={{ accept: 'image/*' }}
        />
        <Box sx={{ display: 'flex' }}>
          <TextField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            sx={{ marginRight: '10px' }}
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
        </Box>
        <TextField
          label="Bio"
          name="bio"
          value={formData.bio}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default EditProfile;