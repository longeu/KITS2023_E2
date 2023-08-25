/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const Profile = () => {
  const [profile, setProfile] = useState(null);
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
          setProfile(userInfo);
        } else {
          console.error('Request failed with status:', response.status);
        }
      } else {
        console.error('Invalid user role');
      }
    };

    fetchProfileData();
  }, []);

  if (!profile) {
    return <div>Profile not found</div>;
  }else{
    console.log(profile);
  }

  const { avatar, firstName, lastName, description, email, phone, role, bio } = profile;
  const handleEditClick = () => {
    navigate(`/edit-profile/`);
  };
  return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '400px', margin: '2rem auto' }}>
      <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
        <Avatar alt="Avatar" src={avatar} sx={{ width: 100, height: 100, margin: 'auto' }} />
        <button
          onClick={handleEditClick}
          style={{ position: 'absolute', top: 0, right: 0, background: 'none', border: 'none' }}
        >
          <MdEdit style={{ fontSize: '1.5rem', color: 'blue', cursor: 'pointer' }} />
        </button>
      </div>
      <Typography variant="h5" align="center" gutterBottom>
        {firstName} {lastName}
      </Typography>
      <Typography variant="body2" align="center" gutterBottom>
        {bio}
      </Typography>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <FaEnvelope style={{ marginRight: '5px' }} />
        <Typography variant="body2">{email}</Typography>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FaPhone style={{ marginRight: '5px' }} />
        <Typography variant="body2">{phone}</Typography>
      </div>
    </Paper>
  );
};

export default Profile;
