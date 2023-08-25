/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { IoMdAddCircleOutline } from "react-icons/io";
import Modal from '@mui/material/Modal';
import { MdDelete } from "react-icons/md";
import { FormControl, InputLabel, OutlinedInput, Select, MenuItem , Input, Avatar} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import './CreateCourse.css'
import CourseCard from './CourseCard';
export default function CreateCourse() {
  const token = localStorage.getItem('token');
  const [categories, setCategories] = useState(null);
  const [open, setOpen] = useState(false);
  const [categoryID, setCategoryID] = useState(1);
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailURl, setThumbnailURl] =useState(null);
  const [courses, setCourse] = useState(null);
  const getCourses = async () => {
    fetch('http://localhost:8080/api/teacher/course/list',{
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    }).then( res => {
      if(res.ok){
        return res.json()
      }else{
        window.alert('Fail to connect to Course DB, please contact the administrator')
      }
    }).then(data => setCourse(data.results))
  }
  useEffect(()=>{
    if(!open) getCourses();
  },[open]);
  function handleUploadThumbnail(e) {
    setThumbnail(e.target.files[0]);
  }
  //function get link từ backend firebase đang lỗi 400-403
  const getThumbnailURL = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", thumbnail);
    if(thumbnail==null) return;
    const data = await fetch('http://localhost:8080/api/teacher/uploadFile', {
        method : 'POST',
        headers: {
          'Authorization': 'Bearer ' + token,
        },
        body: formData,
      }).catch(err => console.error(err.message));
    setThumbnailURl((await data.text()).toString());
  }
  const createCourse = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    fetch('http://localhost:8080/api/teacher/course/add',{
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name' : data.get('courseName'),
        'description': 'Hello các bạn mình là toidicodedao :)))',
        "status": "ACTIVE",
        'objectives' : objectives.join(),
        'target': targets.join(),
        "image": thumbnailURl,
        'price': data.get('price'),
        'categoryID' : categoryID,
      })
    }).then(res => {
      if(res.ok){
        setOpen(false)
        setThumbnail(null)
        setThumbnailURl(null)
      }else{
        window.alert("Fail to create course, Please contact the administrator!!")
      }
    })
    .catch(err => console.log(err.message))
    
  };
  const [target, setTarget] = useState("");
	const [targets, setTargets] = useState([]);
	const addTarget = () => {
		setTargets((prev)=>{
			return [...prev, target]
		});
		setTarget("");
	}
  const [objective, setObjective] = useState("");
	const [objectives, setObjectives] = useState([]);
	const addObjective = () => {
		setObjectives((prev)=>{
			return [...prev, objective]
		});
		setObjective("");
	}
  useEffect(()=>{
    if(categories == null)
    {
      fetch('http://localhost:8080/api/category/list', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
        }
      })
      .then(res => res.json())
      .then( data => {
        setCategories(data.results);
      })
      .catch(err => window.alert(err.message));
    }
  },[categories]);
  return (
    <div>
      <div style={{minHeight:'90vh', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <Button variant="contained" sx={{width:200, mt:5}} onClick={() => setOpen(true)} startIcon={<IoMdAddCircleOutline/>}>New Course</Button>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {
            courses && courses.map((course, index)=>{
              return (
                <Grid item key={index} xs={4}>
                  <CourseCard course={course}/>
                </Grid>
              )
            })
            }
          </Grid>
        </Box>
        {/* cân nhắc dùng speed dial */}
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
          <Box sx={{bgcolor: 'background.paper',minHeight: '100%',p: 4,}} onSubmit={createCourse} component="form" noValidate>
            <Typography variant='h4' align='center' paddingBottom={'20px'}>Create Course</Typography>
            <Grid container spacing={2}>
            <Grid xs={6}>
              <FormControl  >
              <InputLabel htmlFor="courseName">Name of Courses</InputLabel>
              <OutlinedInput
                id="courseName"
                name="courseName"
                label="Name of Courses"
              />
              </FormControl>
            </Grid>
            {categories && <Grid xs={2}>
              <FormControl   >
                <InputLabel id="select-category">Category</InputLabel>
                <Select
                  labelId="select-category"
                  value={categoryID}
                  label="Category"
                  defaultValue='1'
                  onChange={(event) => {setCategoryID(event.target.value)}}
                >
                  {
                    categories.map((category,index) =>{
                      return(
                        <MenuItem value={category.id} key={index}>{category.name}</MenuItem>
                      )
                    })
                  }
                </Select>
              </FormControl>
            </Grid>}
            {/* price */}
            <Grid xs={4} sx={{display:'inline-flex', justifyContent:'space-between'}}    >
              <FormControl>
                <InputLabel htmlFor="price" >Price</InputLabel>
                <OutlinedInput id="price" label="Price" name="price" type={'number'}/>
              </FormControl>
              <FormControl>
                <InputLabel >Unit</InputLabel>
                <Select
                  id="currentcy-unit"
                  labelId="currentcy-unit"
                  label="Currentcy-unit"
                  defaultValue='vnd'
                  name='currentcy-unit'
                >
                  <MenuItem value={'vnd'}>vnđ</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {/* price-done */}  
            <Grid xs={12}>
              <span style={{paddingRight:20}}>Course Thumbnails(4:3): </span>
              <Input type='file' startAdornment={
                <IoMdAddCircleOutline style={{width:20, height:20}} position="start" />
              } onChange={(e)=>handleUploadThumbnail(e)}/>
              {thumbnail&&<Avatar variant='square' sx={{width:400, height:300}} src={URL.createObjectURL(thumbnail)} />}
              <Button onClick={(e)=>getThumbnailURL(e)}>Save Thumbnail</Button>
            </Grid>
            {/* targets */}
            <Grid xs={12}>
              <FormControl   variant="filled">
              <Typography variant="h5" align='center'>Targets</Typography>
              <Box>
                <Box className="childOne">
                  <FormControl   sx={{display:'inline-flex'}}>
                      <InputLabel htmlFor="target">Type course's targets here and click add!!</InputLabel>
                      <OutlinedInput
                        id="target"
                        label="Type course's targets here and click add!!"
                        value={target}
                        onChange={(event) => setTarget(event.target.value)}
                      />
                  <Box sx={{m:2, display:'flex', justifyContent:'space-evenly'}}>
                    <Button className="AddBtn" variant='contained' sx={{width:200}} onClick={addTarget} startIcon={<IoMdAddCircleOutline />}>
                      Add
                    </Button>
                    <Button variant='contained'color='error' sx={{width:200,}} startIcon={<MdDelete />} className="delBtn" onClick={() =>setTargets([])}>
                      Delete All
                    </Button>
                  </Box>
                  </FormControl>
                  <Grid xs={12} sx={{p:0}}>
                    {
                      targets.map((val,index) => {
                        return (  
                        <FormControl   key={index}>
                          <OutlinedInput
                            defaultValue={val}
                            onChange={(e)=>{
                              const currentItem = targets;
                              currentItem[index] = e.target.value;
                              setTargets(currentItem)
                            }}
                          />
                        </FormControl>
                        )
                      })
                    }
                  </Grid>  
                </Box>
              </Box>
              </FormControl>
            </Grid>
            {/* target-done */}
            <Grid xs={12}>
              <FormControl   variant="filled">
              <Typography variant="h5" align='center'>Objectives</Typography>
              <Box>
                <Box className="childOne">
                  <FormControl   sx={{display:'inline-flex'}}>
                      <InputLabel htmlFor="objective">Type course's objectives here and click add!!</InputLabel>
                      <OutlinedInput
                        id="objective"
                        label="Type course's objectives here and click add!!"
                        value={objective}
                        onChange={(event) => setObjective(event.target.value)}
                      />
                  <Box sx={{m:2, display:'flex', justifyContent:'space-evenly'}}>
                    <Button className="AddBtn" variant='contained' sx={{width:200}} onClick={addObjective} startIcon={<IoMdAddCircleOutline />}>
                      Add
                    </Button>
                    <Button variant='contained'color='error' sx={{width:200,}} startIcon={<MdDelete />} className="delBtn" onClick={() =>setObjectives([])}>
                      Delete All
                    </Button>
                  </Box>
                  </FormControl>
                  <Grid xs={12} sx={{p:0}}>
                    {
                      objectives.map((val,index) => {
                        return (  
                          <FormControl   key={index}>
                            <OutlinedInput
                              defaultValue={val}
                              onChange={(e)=>{
                                const currentItem = objectives;
                                currentItem[index] = e.target.value;
                                setObjectives(currentItem)
                              }}
                            />
                          </FormControl>
                        )
                      })
                    }
                  </Grid>  
                </Box>
              </Box>
              </FormControl>
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
    </div>
  )
}
