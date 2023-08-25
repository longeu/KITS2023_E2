/* eslint-disable react/prop-types */

import { IoMdAddCircleOutline } from "react-icons/io";
import { useState, useEffect } from 'react';
import {
  Modal,
  Box,
  Typography,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Input,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
const Contents = ({course}) => {
  const token = localStorage.getItem('token');
  const [open, setOpen] = useState(false);
  const [document, setDocument] = useState(null);
  const [documentPath, setDocumentPath] =useState(null);
  const [video, setVideo] = useState(null);
  const [videoPath, setVideoPath] =useState(null);
  const [lecture, setLecture] = useState(null); 
  const role = localStorage.getItem('role');
  useEffect(()=>{
    fetch(`http://localhost:8080/api/teacher/lecture/list?courseID=${course.id}`,{
      headers: {
        'Authorization': 'Bearer ' + token,
      },
    }).then(res =>{
      if(res.ok){
        return res.json()
      }else{
        window.alert('Error when load lecture list, please contact the administrator')
      }
    }).then(data => setLecture(data.results))
    .catch(err => window.alert(err.message))
  },[open])
  function handleUploadDocument(e) {
    setDocument(e.target.files[0]);
  }
  function handleUploadVideo(e) {
    setVideo(e.target.files[0]);
  }
  //function get link từ backend firebase đang lỗi 400-403
  const getDocumentPath = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", document);
    if(document==null) return;
    const data = await fetch('http://localhost:8080/api/teacher/uploadFile', {
        method : 'POST',
        headers: {
          'Authorization': 'Bearer ' + token,
        },
        body: formData,
      }).catch(err => console.error(err.message));
    setDocumentPath((await data.text()).toString());
  }
  const getVideoPath = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", video);
    if(video==null) return;
    const data = await fetch('http://localhost:8080/api/teacher/uploadFile', {
        method : 'POST',
        headers: {
          'Authorization': 'Bearer ' + token,
        },
        body: formData,
      }).catch(err => console.error(err.message));
    setVideoPath((await data.text()).toString());
  }
  const createLecture = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    fetch('http://localhost:8080/api/teacher/lecture/add',{
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "description": data.get('description'),
        "name": data.get('lectureName'),
        "documentPath": documentPath,
        "videoPath": videoPath,
        "status": "ACTIVE",
        "courseID": course.id,
      })
    }).then(res => {
      if(res.ok){
        console.log(res.json());
        setOpen(false)
        setDocument(null)
        setDocumentPath(null)
        setVideo(null)
        setVideoPath(null)
      }else{
        window.alert("Fail to create course, Please contact the administrator!!")
      }
    })
    .catch(err => console.log(err.message))
    
  };
  return (
    <div style={{ padding: "10px", margin: "20px 0" }}>
      <Typography variant="h5" style={{ fontWeight: "bold", padding: "0 10px" , display:'inline'}}>
        Nội dung khóa học
      </Typography>
      {
        lecture && lecture.map((lec,index)=>{
          return (
            <Box key={index} >
              <Typography variant="h6">
                <b>{lec.name}</b>
              </Typography>
              <Typography variant="subtitle1">
                <b>{lec.description}</b>
              </Typography>
              <Typography variant="subtitle1">
                <a href={lec.documentPath} download><b>document</b></a>
              </Typography>
              {lec.videoPath && <video width="320" height="240" controls>
                <source src={lec.videoPath} type="video/mp4"/>
              </video>}
            </Box>
          )
        })
      }
      {
        role === 'ROLE_TEACHER' && <Button variant="contained" startIcon={<IoMdAddCircleOutline/>} onClick={()=>setOpen(true)}>Add Lecture</Button>
      }
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
          overflowY: "scroll",
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80vw',
          minHeight: '100%',
          border: '2px solid rgba(0, 0, 0, 0.1)',
          borderRadius: '5px',
          boxShadow: 24,
        }}
        >
          <Box sx={{bgcolor: 'background.paper',minHeight: '100%',p: 4,}} onSubmit={(e)=>{createLecture(e)}} component="form" noValidate>
            <Typography variant='h4' align='center' paddingBottom={'20px'}>Create Course</Typography>
            <Grid container spacing={2}>
              <Grid xs={6}>
                <FormControl  >
                <InputLabel htmlFor="lectureName">Name of Lecture</InputLabel>
                <OutlinedInput
                  id="lectureName"
                  name="lectureName"
                  label="Name of Lecture"
                />
                </FormControl>
              </Grid>
              <Grid xs={6}>
                <FormControl  >
                <InputLabel htmlFor="description">Description</InputLabel>
                <OutlinedInput
                  id="description"
                  name="description"
                  label="Description"
                />
                </FormControl>
              </Grid>
            
            <Grid xs={12}>
              <span style={{paddingRight:20}}>Lecture document: </span>
              <Input type='file' startAdornment={
                <IoMdAddCircleOutline style={{width:20, height:20}} position="start" />
              } onChange={(e)=>handleUploadDocument(e)}/>
              <Button onClick={(e)=>getDocumentPath(e)}>Save document</Button>
            </Grid>
            <Grid xs={12}>
              <span style={{paddingRight:20}}>Lecture video: </span>
              <Input type='file' startAdornment={
                <IoMdAddCircleOutline style={{width:20, height:20}} position="start" />
              } onChange={(e)=>handleUploadVideo(e)}/>
              <Button onClick={(e)=>getVideoPath(e)}>Save video</Button>
            </Grid>

            </Grid>
            <Box sx={{display:'flex', justifyContent:'space-evenly'}}>
              <Button type='submit' variant='contained'color='success' sx={{width:200}}>
                Create
              </Button>
              <Button type='button' variant='contained'color='error' sx={{width:200}} onClick={()=>setOpen(false)}>
                Close
              </Button>
            </Box>
          </Box>
        </Modal>
    </div>
  );
};

export default Contents;
