// import React, { useState, useEffect } from 'react';
// import Inputs from "../Components/Inputs/Inputs"

// const AgeCalculator = () => {
//   const [dob, setDob] = useState('');
//   const [age, setAge] = useState('');

//   const calculateAge = (dob) => {
//     const birthDate = new Date(dob);
//     const today = new Date();
//     const age = today.getFullYear() - birthDate.getFullYear();
//     const monthDiff = today.getMonth() - birthDate.getMonth();

//     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//       return age - 1;
//     }
//     return age;
//   };

//   useEffect(() => {
//     if (dob) {
//       const calculatedAge = calculateAge(dob);
//       setAge(calculatedAge);
//     } else {
//       setAge('');
//     }
//   }, [dob]);

//   return (
//     <div style={{ maxWidth: '400px', margin: 'auto' }}>
//       <h2>Age Calculator</h2>
//       <form>
//         <div>
//           <label htmlFor="dob">Date of Birth:</label>
//           <Inputs
//             type="date"
//             id="dob"
//             value={dob}
//             onChange={(e) => setDob(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="age">Age:</label>
//           <Inputs
//             type="number"
//             id="age"
//             value={age}
//             readOnly
//           />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AgeCalculator;



///////////////////////////////

// import React, { useState, useEffect } from 'react';
// import { Container, TextField, Typography, Box, Grid, Checkbox, FormControlLabel } from '@mui/material';

// const AgeCalculator = () => {
//     const [dob, setDob] = useState('');
//     const [age, setAge] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');
//     const [styles, setStyles] = useState({
//         styleOne: false,
//         styleTwo: false,
//         styleThree: false,
//         all: false,
//     });
//     const [dateOfIssue, setDateOfIssue] = useState('');
//     const [dateOfExpiry, setDateOfExpiry] = useState('');
//     const [expiryError, setExpiryError] = useState('');

//     const calculateAge = (dob) => {
//         const birthDate = new Date(dob);
//         const today = new Date();
//         let age = today.getFullYear() - birthDate.getFullYear();
//         const monthDiff = today.getMonth() - birthDate.getMonth();

//         if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//             age -= 1;
//         }
//         return age;
//     };

//     useEffect(() => {
//         if (dob) {
//             const calculatedAge = calculateAge(dob);
//             setAge(calculatedAge);

//             // Set error message if age is less than 19
//             if (calculatedAge < 19) {
//                 setErrorMessage('Applicant age should be more than 19');
//             } else {
//                 setErrorMessage(''); // Clear error message if age is valid
//             }
//         } else {
//             setAge('');
//             setErrorMessage(''); // Clear error message if no DOB is entered
//         }
//     }, [dob]);

//     useEffect(() => {
//         // Automatically set Date of Expiry to 5 years after Date of Issue
//         if (dateOfIssue) {
//             const issueDate = new Date(dateOfIssue);
//             const expiryDate = new Date(issueDate.setFullYear(issueDate.getFullYear() + 5));
//             setDateOfExpiry(expiryDate.toISOString().split('T')[0]); // Format as YYYY-MM-DD

//             // Check if expiry date has passed
//             if (expiryDate < new Date()) {
//                 setExpiryError('The expiry date has passed.');
//             } else {
//                 setExpiryError(''); // Clear error if valid
//             }
//         } else {
//             setDateOfExpiry('');
//             setExpiryError(''); // Clear error if no issue date is entered
//         }
//     }, [dateOfIssue]);

//     const handleStyleChange = (event) => {
//         const { name, checked } = event.target;

//         // If "All" checkbox is checked, set all styles to true
//         if (name === 'all') {
//             setStyles({
//                 styleOne: checked,
//                 styleTwo: checked,
//                 styleThree: checked,
//                 all: checked,
//             });
//         } else {
//             // If any style is unchecked, uncheck "All"
//             if (checked) {
//                 setStyles((prev) => ({ ...prev, [name]: checked }));
//             } else {
//                 setStyles((prev) => ({ ...prev, [name]: checked, all: false }));
//             }
//         }
//     };

//     return (
//         <Container maxWidth="xs">
//             <Box sx={{ mt: 4, p: 3, boxShadow: 3, borderRadius: 2 }}>
//                 <Typography variant="h5" component="h2" align="center" gutterBottom>
//                     Age Calculator
//                 </Typography>
//                 <Grid container spacing={2} alignItems="center">
//                     <Grid item xs={6}>
//                         <TextField
//                             label="Date of Birth"
//                             type="date"
//                             fullWidth
//                             value={dob}
//                             onChange={(e) => setDob(e.target.value)}
//                             InputLabelProps={{
//                                 shrink: true,
//                             }}
//                             required
//                         />
//                     </Grid>
//                     <Grid item xs={6}>
//                         <TextField
//                             label="Age"
//                             type="number"
//                             fullWidth
//                             value={age}
//                             InputProps={{
//                                 readOnly: true,
//                             }}
//                         />
//                     </Grid>
//                 </Grid>

//                 {/* Error Message */}
//                 {errorMessage && (
//                     <Typography variant="body2" color="error" sx={{ mt: 1 }}>
//                         {errorMessage}
//                     </Typography>
//                 )}

//                 {/* Date of Issue and Date of Expiry */}
//                 <Grid container spacing={2} alignItems="center" sx={{ mt: 2 }}>
//                     <Grid item xs={6}>
//                         <TextField
//                             label="Date of Issue"
//                             type="date"
//                             fullWidth
//                             value={dateOfIssue}
//                             onChange={(e) => setDateOfIssue(e.target.value)}
//                             InputLabelProps={{
//                                 shrink: true,
//                             }}
//                         />
//                     </Grid>
//                     <Grid item xs={6}>
//                         <TextField
//                             label="Date of Expiry"
//                             type="date"
//                             fullWidth
//                             value={dateOfExpiry}
//                             InputProps={{
//                                 readOnly: true,
//                             }}
//                         />
//                     </Grid>
//                 </Grid>

//                 {/* Expiry Error Message */}
//                 {expiryError && (
//                     <Typography variant="body2" color="error" sx={{ mt: 1 }}>
//                         {expiryError}
//                     </Typography>
//                 )}

//                 {/* Checkboxes Section */}
//                 <Box sx={{ mt: 4 }}>
//                     <Typography variant="h6" gutterBottom>
//                         Select Styles
//                     </Typography>
//                     <FormControlLabel
//                         control={
//                             <Checkbox
//                                 checked={styles.all}
//                                 onChange={handleStyleChange}
//                                 name="all"
//                             />
//                         }
//                         label="All"
//                     />
//                     <FormControlLabel
//                         control={
//                             <Checkbox
//                                 checked={styles.styleOne}
//                                 onChange={handleStyleChange}
//                                 name="styleOne"
//                             />
//                         }
//                         label="Style One"
//                     />
//                     <FormControlLabel
//                         control={
//                             <Checkbox
//                                 checked={styles.styleTwo}
//                                 onChange={handleStyleChange}
//                                 name="styleTwo"
//                             />
//                         }
//                         label="Style Two"
//                     />
//                     <FormControlLabel
//                         control={
//                             <Checkbox
//                                 checked={styles.styleThree}
//                                 onChange={handleStyleChange}
//                                 name="styleThree"
//                             />
//                         }
//                         label="Style Three"
//                     />
//                 </Box>
//             </Box>
//         </Container>
//     );
// };

// export default AgeCalculator;


//////////////////////////

// import React, { useState, useRef, useEffect } from 'react';
// import axios from 'axios';

// const YourComponent = () => {
//     const [applicantImage, setApplicantImage] = useState(null);
//     const [applicantallImage, setApplicantallImage] = useState(null);
    
//     const [applicantpassportImage, setApplicantpassportImage] = useState(null);
//     const [applicantallpassportImage, setApplicantallpassportImage] = useState(null);
    
//     const [fullBodyImage, setFullBodyImage] = useState(null);
//     const [fullBodyallImage, setFullBodyallImage] = useState(null);
    
//     const [age, setAge] = useState('');
//     const [personalInfo, setPersonalInfo] = useState({ name: '', email: '' }); // Example personal info
//     const applicantFileInputRef = useRef(null);
//     const passportFileInputRef = useRef(null);
//     const fullBodyFileInputRef = useRef(null);

//     const applicantssubmitImage = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();
        
//         // Append images and personal info
//         formData.append("applicantimage", applicantImage);
//         formData.append("passportimage", applicantpassportImage);
//         formData.append("fullbodyimage", fullBodyImage);
//         formData.append("name", "personalInfo.name");
//         formData.append("age", 22);
        
//         const result = await axios.post(
//             "http://localhost:4000/applicantupload-image",
//             formData,
//             {
//                 headers: { "Content-Type": "multipart/form-data" },
//             }
//         );

//         // Reset state after submission
//         setApplicantImage(null);
//         setApplicantpassportImage(null);
//         setFullBodyImage(null);
//         setAge('');
//     };

//     const applicantonInputChange = (setImage) => (e) => {
//         const selectedFile = e.target.files[0];
//         setImage(selectedFile);
//     };

//     const applicantgetImage = async () => {
//         const result = await axios.get("http://localhost:4000/applicantget-image");
//         setApplicantallImage(result.data.data);
//     };

//     return (
//         <div className="image-upload">
//             <form onSubmit={applicantssubmitImage} className="file-upload-form">
//                 {/* Applicant Image Upload */}
//                 <label>
//                     <span>Applicant Personal Image <span style={{ color: 'red' }}>*</span></span>
//                     <input
//                         type="file"
//                         accept="image/*"
//                         onChange={applicantonInputChange(setApplicantImage)}
//                         style={{ display: "none" }}
//                         ref={applicantFileInputRef}
//                     />
//                     <button type="button" onClick={() => applicantFileInputRef.current.click()}>
//                         Choose File
//                     </button>
//                 </label>

//                 {/* Passport Image Upload */}
//                 <label>
//                     <span>Passport Image <span style={{ color: 'red' }}>*</span></span>
//                     <input
//                         type="file"
//                         accept="image/*"
//                         onChange={applicantonInputChange(setApplicantpassportImage)}
//                         style={{ display: "none" }}
//                         ref={passportFileInputRef}
//                     />
//                     <button type="button" onClick={() => passportFileInputRef.current.click()}>
//                         Choose File
//                     </button>
//                 </label>

//                 {/* Full Body Image Upload */}
//                 <label>
//                     <span>Full Body Image <span style={{ color: 'red' }}>*</span></span>
//                     <input
//                         type="file"
//                         accept="image/*"
//                         onChange={applicantonInputChange(setFullBodyImage)}
//                         style={{ display: "none" }}
//                         ref={fullBodyFileInputRef}
//                     />
//                     <button type="button" onClick={() => fullBodyFileInputRef.current.click()}>
//                         Choose File
//                     </button>
//                 </label>

//                 {/* Age Input */}
//                 <label>
//                     <span>Age <span style={{ color: 'red' }}>*</span></span>
//                     <input
//                         type="number"
//                         value={age}
//                         onChange={(e) => setAge(e.target.value)}
//                         min="18"
//                         required
//                     />
//                 </label>

//                 <button type="submit">Submit</button>
//             </form>

//             {/* Image Preview (optional) */}
//             {applicantallImage && applicantallImage.length > 0 && (
//                 <div className="image-preview">
//                     <h4>Uploaded Images:</h4>
//                     {applicantallImage.map((image, index) => (
//                         <img
//                             key={index}
//                             className="input-personal-image"
//                             alt="Uploaded"
//                             src={`./applicantimage/${image.applicantImage}`} // Adjust path as necessary
//                         />
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default YourComponent;



//////////////////////////////////


// import { useEffect, useState } from "react";
// import axios from "axios";

// function App() {
//   const [image, setImage] = useState(null);
//   const [allImage, setAllImage] = useState(null);

//   const [image2, setImage2] = useState(null);
//   const [allImage2, setAllImage2] = useState(null);

 

//   useEffect(() => {
//     getImages(); // Fetch images when the component mounts
//   }, []);


//   const getImages = async () => {
//     try {
//       const result = await axios.get("http://localhost:4000/tget-images");
//       setAllImage(result.data.data); // Assuming your API returns an array of images
//     } catch (error) {
//       console.error(error);
//     }
//   };
// //   const submitImage = async (e) => {
// //     e.preventDefault();

// //     const formData = new FormData();
// //     formData.append("image", image);
// //     // formData.append("image2", image2);

// //     const result = await axios.post(
// //       "http://localhost:4000/tupload-image",
// //       formData,
// //       {
// //         headers: { "Content-Type": "multipart/form-data" },
// //       }
// //     );
// //   };

// //   const submitImage2 = async (e) => {
// //     e.preventDefault();

// //     const formData = new FormData();
// //     // formData.append("image", image);
// //     formData.append("imaget", image2);

// //     const result = await axios.post(
// //       "http://localhost:4000/tupload-image",
// //       formData,
// //       {
// //         headers: { "Content-Type": "multipart/form-data" },
// //       }
// //     );
// //   };

//   const onInputChange = (e) => {
//     console.log(e.target.files[0]);
//     setImage(e.target.files[0]);
//   };

//   const onInputChange2 = (e) => {
//     console.log(e.target.files[0]);
//     setImage2(e.target.files[0]);
//   };

// //   const getImage = async () => {
// //     const result = await axios.get("http://localhost:4000/tget-image");
// //     console.log(result);
// //     setAllImage(result.data.data);
// //   };

// //   return (
// //     <div>
// //       <form onSubmit={submitImage}>
// //         <input type="file" accept="image/*" onChange={onInputChange}></input>
// //         <button type="submit">Submit</button>
// //       </form>
// //       {allImage == null
// //         ? ""
// //         : allImage.map((data) => {
// //             return (
// //               <img
// //                 src={require(`../applicantimagetest/${data.image}`)}
// //                 height={100}
// //                 width={100}
// //               />
// //             );
// //           })}

// // <form onSubmit={submitImage2}>
// //         <input type="file" accept="image/*" onChange={onInputChange2}></input>
// //         <button type="submit">Submit</button>
// //       </form>
// //       {allImage == null
// //         ? ""
// //         : allImage.map((data) => {
// //             return (
// //               <img
// //                 src={require(`../applicantimgtwo/${data.image}`)}
// //                 height={100}
// //                 width={100}
// //               />
// //             );
// //           })}
// //     </div>
// //   );

// const submitImages = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     if (image) formData.append("image", image);
//     if (image2) formData.append("imaget", image2);
  
//     try {
//       const result = await axios.post("http://localhost:4000/tupload-image", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       console.log(result.data);
//       // Handle successful upload...
//     } catch (error) {
//       console.error(error);
//     }
//   };
  
//   return (
//     <div>
//       <form onSubmit={submitImages}>
//         <input type="file" accept="image/*" onChange={onInputChange} />
//         <input type="file" accept="image/*" onChange={onInputChange2} />
//         <button type="submit">Submit</button>
//       </form>
//       {/* {allImage && allImage.map((data) => (
//         <img key={data.image} src={`http://localhost:4000/images/${data.image}`} height={100} width={100} alt="uploaded" />
//       ))} */}

// {/* {allImage == null
//         ? ""
//         : allImage.map((data) => {
//             return (
//               <img
//                 src={require(`../applicantimagetest/${data.image}`)}
//                 height={100}
//                 width={100}
//               />
//             );
//           })} */}




//     </div>
//   );
// }
// export default App;



/////////////////////////////////////////////////////////////

// import { useEffect, useState } from "react";
// import axios from "axios";

// function App() {
//   const [images, setImages] = useState([]);
//   const [allimages, setallImages] = useState([]);
//   const [formData, setFormData] = useState({
//     image: null,
//     image2: null,
//     name: "",
//     surname: "",
//     placeofbirth: "",
//     passportnum: "",
//     nationality: "",
//     martialstatus: "",
//     numberofchildren: "",
//     religion: "",
//     weight: "",
//     height: "",
//     educationattainment: "",
//     postappliedfor: "",
//     contractperiod: "",
//     arabicdegree: "",
//     englishdegree: "",
//     ownphonenum: "",
//     contactphonenum: "",
//     dateofbirth: "",
//     age: "",
//     dateofissue: "",
//     expireddate: "",
//     country: "",
//     position: "",
//     period: "",
//     babysitting: false,
//     cleaning: false,
//     washing: false,
//     cooking: false,
//     eldercare: false,
//     monthlysalarySaudi: "",
//     monthlysalaryJordan: "",
//   });

//   const getImages = async () => {
//     try {
//       const result = await axios.get("http://localhost:4000/get-images");
//       setImages(result.data.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     getImages();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const submitImages = async (e) => {
//     e.preventDefault();
//     const data = new FormData();
//     if (formData.image) data.append("image", formData.image);
//     if (formData.image2) data.append("imaget", formData.image2);
//     Object.keys(formData).forEach((key) => {
//       if (key !== "image" && key !== "image2") {
//         data.append(key, formData[key]);
//       }
//     });

//     try {
//       const result = await axios.post("http://localhost:4000/tupload-image", data, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       console.log(result.data);
//       getImages(); // Refresh the list of images
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h2>Upload Images</h2>
//       <form onSubmit={submitImages}>
//         <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
//         <input type="text" name="surname" placeholder="Surname" value={formData.surname} onChange={handleChange} />
//         <input type="text" name="placeofbirth" placeholder="Place of Birth" value={formData.placeofbirth} onChange={handleChange} />
//         <input type="text" name="passportnum" placeholder="Passport Number" value={formData.passportnum} onChange={handleChange} />
//         <input type="text" name="nationality" placeholder="Nationality" value={formData.nationality} onChange={handleChange} />
//         <input type="text" name="martialstatus" placeholder="Marital Status" value={formData.martialstatus} onChange={handleChange} />
//         <input type="number" name="numberofchildren" placeholder="Number of Children" value={formData.numberofchildren} onChange={handleChange} />
//         <input type="text" name="religion" placeholder="Religion" value={formData.religion} onChange={handleChange} />
//         <input type="number" name="weight" placeholder="Weight" value={formData.weight} onChange={handleChange} />
//         <input type="number" name="height" placeholder="Height" value={formData.height} onChange={handleChange} />
//         <input type="text" name="educationattainment" placeholder="Education Attainment" value={formData.educationattainment} onChange={handleChange} />
//         <input type="text" name="postappliedfor" placeholder="Post Applied For" value={formData.postappliedfor} onChange={handleChange} />
//         <input type="text" name="contractperiod" placeholder="Contract Period" value={formData.contractperiod} onChange={handleChange} />
//         <input type="text" name="arabicdegree" placeholder="Arabic Degree" value={formData.arabicdegree} onChange={handleChange} />
//         <input type="text" name="englishdegree" placeholder="English Degree" value={formData.englishdegree} onChange={handleChange} />
//         <input type="text" name="ownphonenum" placeholder="Own Phone Number" value={formData.ownphonenum} onChange={handleChange} />
//         <input type="text" name="contactphonenum" placeholder="Contact Phone Number" value={formData.contactphonenum} onChange={handleChange} />
//         <input type="date" name="dateofbirth" value={formData.dateofbirth} onChange={handleChange} />
//         <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} />
//         <input type="date" name="dateofissue" value={formData.dateofissue} onChange={handleChange} />
//         <input type="date" name="expireddate" value={formData.expireddate} onChange={handleChange} />
//         <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} />
//         <input type="text" name="position" placeholder="Position" value={formData.position} onChange={handleChange} />
//         <input type="text" name="period" placeholder="Period" value={formData.period} onChange={handleChange} />
        
//         {/* Checkboxes for additional services */}
//         <label>
//           Babysitting:
//           <input type="checkbox" name="babysitting" checked={formData.babysitting} onChange={handleChange} />
//         </label>
//         <label>
//           Cleaning:
//           <input type="checkbox" name="cleaning" checked={formData.cleaning} onChange={handleChange} />
//         </label>
//         <label>
//           Washing:
//           <input type="checkbox" name="washing" checked={formData.washing} onChange={handleChange} />
//         </label>
//         <label>
//           Cooking:
//           <input type="checkbox" name="cooking" checked={formData.cooking} onChange={handleChange} />
//         </label>
//         <label>
//           Eldercare:
//           <input type="checkbox" name="eldercare" checked={formData.eldercare} onChange={handleChange} />
//         </label>

//         <input type="number" name="monthlysalarySaudi" placeholder="Monthly Salary (Saudi)" value={formData.monthlysalarySaudi} onChange={handleChange} />
//         <input type="number" name="monthlysalaryJordan" placeholder="Monthly Salary (Jordan)" value={formData.monthlysalaryJordan} onChange={handleChange} />

//         <input type="file" accept="image/*" onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })} />
//         <input type="file" accept="image/*" onChange={(e) => setFormData({ ...formData, image2: e.target.files[0] })} />
//         <button type="submit">Submit</button>
//       </form>

//       <h2>Uploaded Images</h2>
//       {images.length === 0 ? (
//         <p>No images found.</p>
//       ) : (
//         images.map((data) => (
//           <div key={data._id}>
//             <img src={`http://localhost:4000/applicantimagetest/${data.image}`} height={100} width={100} alt="Uploaded" />
//             {data.image2 && (
//               <img src={`http://localhost:4000/applicantimgtwo/${data.image2}`} height={100} width={100} alt="Uploaded" />
//             )}
//             {/* Display additional fields */}
//             <p>Name: {data.name} {data.surname}</p>
//             <p>Nationality: {data.nationality}</p>
//             <p>Education: {data.educationattainment}</p>
//             {/* Add more fields as needed */}
//           </div>
//         ))
//       )}

// {images == null
//         ? ""
//         : images.map((data) => {
//             return (
//               <img
//                 src={require(`../applicantimagetest/${data.image}`)}
//                 height={100}
//                 width={100}
//               />
//             );
//           })}

//     </div>
//   );
// }

// export default App;




////////////////////////////////////////////////////

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function App() {
//   const [images, setImages] = useState([]);
//   const [image1, setImage1] = useState(null);
//   const [image2, setImage2] = useState(null);
//   const [imagePreview1, setImagePreview1] = useState(null);
//   const [imagePreview2, setImagePreview2] = useState(null);

//   const getImages = async () => {
//     try {
//       const result = await axios.get("http://localhost:4000/get-images");
//       setImages(result.data.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     getImages();
//   }, []);

//   const onInputChange = (e) => {
//     const file = e.target.files[0];
//     setImage1(file);
//     if (file) {
//       setImagePreview1(URL.createObjectURL(file));
//     }
//   };

//   const onInputChange2 = (e) => {
//     const file = e.target.files[0];
//     setImage2(file);
//     if (file) {
//       setImagePreview2(URL.createObjectURL(file));
//     }
//   };

//   const submitImages = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     if (image1) formData.append("image", image1);
//     if (image2) formData.append("imaget", image2);

//     try {
//       const result = await axios.post("http://localhost:4000/tupload-image", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       console.log(result.data);
//       getImages(); // Refresh the list of images
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return ( 
//     <div>
//       <h2>Upload Images</h2>
//       <form onSubmit={submitImages}>
//         <input type="file" accept="image/*" onChange={onInputChange} />
//         {imagePreview1 && <img src={imagePreview1} alt="Preview 1" height={100} width={100} />}
        
//         <input type="file" accept="image/*" onChange={onInputChange2} />
//         {imagePreview2 && <img src={imagePreview2} alt="Preview 2" height={100} width={100} />}
        
//         <button type="submit">Submit</button>
//       </form>

//       <h2>Uploaded Images</h2>
  



///////////////////////////////////////////////////
// import React, { useState, useRef, useCallback } from "react";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import NameArea from "../Components/Inputs/NameAreaInputs";
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button
// } from '@mui/material';

// import imagePlaceholder from "../image_placeholder/download.png"
// import { useDropzone } from 'react-dropzone';
// import Tesseract from 'tesseract.js';

// function App() {
//   const [passportData, setPassportData] = useState({
//     name: '',
//     surname: '',
//     nationality: '',
//     age: '',
//     passportNumber: '',
//     placeOfBirth: '',
//     birthDate: ''
//   });
//   const [personalInfo, setPersonalInfo] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     about: '',
//     surname: "",
//     placeOfBirth: "",
//     passportNo: "", // Not required
//     nationality: "",
//     maritalStatus: "",
//     numberOfChildren: "",
//     religion: "",
//     weight: "",
//     height: "",
//     educationAttainment: "",
//     postAppliedFor: "",
//     contractPeriod: "",
//     arabicDegree: "",
//     englishDegree: "",
//     ownPhoneNumber: "",
//     contactPhoneNumber: "",
//     monthlysalarySaudi: "",
//     monthlysalaryJordan: ""
//   });

//   const [applicantpassportimagePreview, setApplicantpassportimagePreview] = useState(null);
//   const applicantpassportimagefileInputRef = useRef(null);
//   const [imageforpassportimage, setImageforpassportimage] = useState(null)



//   const [showModal, setShowModal] = useState(false);

//   const updateText = (e) => {
//     let targetStateArea = e.target.id.split('-')[0];
//     let targetStateField = e.target.id.split('-')[1];

//     const currState = { ...personalInfo };
//     if (Array.isArray(currState[targetStateField])) {
//       let arrIndex = e.target.id.split('-')[2];
//       currState[targetStateField][arrIndex][e.target.id.split('-')[3]] = e.target.value;
//     } else {
//       currState[targetStateField] = e.target.value;
//     }

//     setPersonalInfo(currState);
//   };

//   const addRecord = (e) => {
//     let targetStateArea = e.target.id.split('-')[0];
//     let targetStateField = e.target.id.split('-')[1];
//     const currState = { ...personalInfo };

//     let count = currState[targetStateField];
//     let newRecord = typeof count[0] === 'object' ? { ...count[0] } : '';

//     for (let item in newRecord) {
//       newRecord[item] = '';
//     }

//     count.push(newRecord);
//     currState[targetStateField] = count;

//     setPersonalInfo(currState);
//   };

//   const submit = () => {
//     setShowModal(true);
//   };

//   const confirmSubmission = async () => {
//     const { name, placeOfBirth, nationality, maritalStatus, religion } = personalInfo;

//     // Check if required fields are filled (passportNo is not required)
//     if (!name || !placeOfBirth || !nationality || !maritalStatus || !religion) {
//       toast.error("Please fill all the required fields.", {
//         position: "top-center"
//       });
//       return;
//     }

//     // Proceed with form submission logic here
//     // ...
//     toast.success("Form submitted successfully!");
//     setShowModal(false); // Close the modal after submission
//   };

//   const cancelSubmission = () => {
//     setShowModal(false); // Close the modal without submitting
//   };

//   const onInputChangeforpassportimagea = (e) => {
//     const file = e.target.files[0];
//     console.log(e.target.files[0]);
//     setImageforpassportimage(e.target.files[0]);
//     if (file) {
//         setApplicantpassportimagePreview(URL.createObjectURL(file))
//     }
//   };

//   const onInputChangeforpassportimage = (e) => {
//     const file = e.target.files[0];
//     setImageforpassportimage(e.target.files[0]);
//     if (file) {
//         setApplicantpassportimagePreview(URL.createObjectURL(file));
//         recognizeMRZa(file); // Call recognizeMRZ here to process the uploaded image
        

//       }
// };

// const recognizeMRZa = (file) => {
//   Tesseract.recognize(
//       file,
//       'eng',
//       {
//           logger: (m) => console.log(m), // Log progress
//       }
//   ).then(({ data: { text } }) => {
//       console.log("Extracted Text: ", text);
//       const extractedData = extractPassportData(text);
//       setPassportData(extractedData);
//   });
// };

//   /////////////////////////////////////////

//   const onDrop = useCallback((acceptedFiles) => {
//     const file = acceptedFiles[0];
//     recognizeMRZ(file);
//   }, []);

//   const recognizeMRZ = (file) => {
//     Tesseract.recognize(
//       file,
//       'eng',
//       {
//         logger: (m) => console.log(m), // Log progress
//       }
//     ).then(({ data: { text } }) => {
//       console.log("Extracted Text: ", text);
//       const extractedData = extractPassportData(text);
//       setPassportData(extractedData);
//     });
//   };

//   const extractPassportData = (text) => {
    



   



//     const lines = text.split('\n');
//     const mrzLines = lines.filter(line => line.match(/^[A-Z0-9<]+$/));

//     if (mrzLines.length < 2) return { name: '', surname: '', nationality: '', age: '', passportNumber: '', placeOfBirth: '', birthDate: '' };

//     const line1 = mrzLines[0]; // e.g., P<UTOEJANE<<<JOHN<<<<<<<<<<<<<<<<<<<<<<<<<
//     const line2 = mrzLines[1]; // e.g., 1234567890UTO7408129M1204159<<<<<<<<<<<<<<<<<

//     // Extracting name
//     const names = line1.substring(5, 44).replace(/</g, ' ').trim().split('<<');
//     const surname = names[0] ? names[0].trim() : ''; // Add check for surname
//     const name = names[1] ? names[1].trim() : ''; // Add check for given name

//     const nationality = line2.substring(10, 13) || '';
//     const passportNumber = line2.substring(0, 9) || '';

//     // Extracting birth date and gender
//     const birthDate = line2.substring(13, 19) || ''; // Birthdate in YYMMDD format
//     const gender = line2.charAt(20) || '';

//     // Calculate age
//     const year = birthDate ? parseInt(birthDate.substring(0, 2), 10) : 0;
//     const month = birthDate ? parseInt(birthDate.substring(2, 4), 10) : 0;
//     const day = birthDate ? parseInt(birthDate.substring(4, 6), 10) : 0;
//     const age = new Date().getFullYear() - (year < 50 ? 2000 + year : 1900 + year); // Basic age calculation

//     // Extracting place of birth
//     const placeOfBirth = line1.substring(44, 69).replace(/</g, ' ').trim() || '';


    

//     // Format birth date as YYYY-MM-DD for display
//     const formattedBirthDate = birthDate ? `20${birthDate.substring(0, 2)}-${birthDate.substring(2, 4)}-${birthDate.substring(4, 6)}` : '';


//     const startIndex = 5; // Starting at character 5
//     const firstEndIndex = line1.indexOf('<', startIndex); // Find the first '<' after the start index

//     const extractedTexts = [];

//     if (firstEndIndex !== -1) {
//       // First extraction
//       const firstResult = line1.substring(startIndex, firstEndIndex);
//       extractedTexts.push(firstResult);
      
//       // Skip two characters after the first result
//       const secondStartIndex = firstEndIndex + 2;
//       const secondEndIndex = line1.indexOf('<', secondStartIndex); // Find the next '<'

     
//       if (secondEndIndex !== -1) {
//         const secondResult = line1.substring(secondStartIndex, secondEndIndex);
//         extractedTexts.push(secondResult);
        
//         // Skip one character after the second result
//         const thirdStartIndex = secondEndIndex + 1;
//         const thirdEndIndex = line1.indexOf('<', thirdStartIndex); // Find the next '<'
         
        
//         if (thirdEndIndex !== -1) {
//           const thirdResult = line1.substring(thirdStartIndex, thirdEndIndex);
//           extractedTexts.push(thirdResult);
//           personalInfo.name = thirdResult;
//         } else {
//           extractedTexts.push(line1.substring(thirdStartIndex)); // If no '<' is found, return the rest of the string
//         }
//       }
//     }


   

//     return { name, surname, nationality, age, passportNumber, placeOfBirth, birthDate: formattedBirthDate };
//   };

//   const { getRootProps, getInputProps } = useDropzone({ onDrop });


//   return (
//     <div>
//       <div {...getRootProps()} style={{ border: '2px dashed #007bff', padding: '20px', textAlign: 'center', marginBottom: '20px' }}>
//         <input {...getInputProps()} />
//         <p>Drag 'n' drop a passport photo here, or click to select one</p>
//       </div>
//        <div className="image-upload">
           
//            <div className="image-preview">
//                <img
//                    className="input-personal-image"
//                    alt="Personal"
//                    src={
//                        applicantpassportimagePreview !== null
//                            ? applicantpassportimagePreview
//                            : imagePlaceholder
//                    }
//                    onClick={() => applicantpassportimagefileInputRef.current.click()}
//                />
//            </div>
//            <input
//                type="file"
//                accept="image/*"
//                onChange={onInputChangeforpassportimage}
//                style={{ display: "none" }}
//                ref={applicantpassportimagefileInputRef}
//            />
//            <label>
//                <span>Passport Image <span style={{ color: 'red' }}>*</span></span>
//                {/* <button type="button" onClick={() => fileInputRef.current.click()}>Choose File</button> */}
//            </label>
          
       
//    </div>
//    <div className="image-preview">
//   <img
//     className={`input-personal-image ${imageforpassportimage ? 'red-filter' : ''}`} // Apply red filter if there's an image
//     alt="Personal"
//     src={
//       applicantpassportimagePreview !== null
//         ? applicantpassportimagePreview
//         : imagePlaceholder
//     }
//     onClick={() => applicantpassportimagefileInputRef.current.click()}
//   />
// </div>
//    {passportData && (
//         <div>
//           <h3>Extracted Passport Data:</h3>
//           <p><strong>Name:</strong> {passportData.name}</p>
//           <p><strong>Surname:</strong> {passportData.surname}</p>
//           <p><strong>Nationality:</strong> {passportData.nationality}</p>
//           <p><strong>Age:</strong> {passportData.age}</p>
//           <p><strong>Passport Number:</strong> {passportData.passportNumber}</p>
//           <p><strong>Place of Birth:</strong> {passportData.placeOfBirth}</p>
//           <p><strong>Birth Date:</strong> {passportData.birthDate}</p>
//         </div>
//       )}
      
//       <NameArea callback={updateText} info={personalInfo} newField={addRecord} />
//       <Button variant="contained" color="primary" onClick={submit}>Save</Button>
//       <ToastContainer position="top-center" />

//       <Dialog open={showModal} onClose={cancelSubmission}>
//         <DialogTitle>Confirm Submission</DialogTitle>
//         <DialogContent>
//           <p>Are you sure you want to submit the form?</p>
//         </DialogContent>
//         <DialogActions>
//           <Button 
//             onClick={cancelSubmission} 
//             style={{ backgroundColor: '#f44336', color: 'white' }} // Red for "Back"
//           >
//             Back
//           </Button>
//           <Button 
//             onClick={confirmSubmission} 
//             style={{ backgroundColor: '#4caf50', color: 'white' }} // Green for "Proceed anyway"
//           >
//             Proceed anyway
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }

// export default App;





////////////////////////////////  paste to multiple field

// import React, { useState } from "react";
// import 'react-toastify/dist/ReactToastify.css';
// import NameArea from "../Components/Inputs/NameAreaInputs";

// function App() {
//   const [personalInfo, setPersonalInfo] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     about: '',
//     surname: '',
//     placeOfBirth: '',
//     passportNo: '',
//     nationality: '',
//     maritalStatus: '',
//     numberOfChildren: '',
//     religion: '',
//     weight: '',
//     height: '',
//     educationAttainment: '',
//     postAppliedFor: '',
//     contractPeriod: '',
//     arabicDegree: '',
//     englishDegree: '',
//     ownPhoneNumber: '',
//     contactPhoneNumber: '',
//     monthlysalarySaudi: '',
//     monthlysalaryJordan: '',
//     Qualifications: "",
//     job: ""
//   });

//   const updateText = (e) => {
//     const { id, value } = e.target;
//     const [targetStateArea, targetStateField] = id.split('-');

//     if (targetStateArea === 'personalInfo') {
//       setPersonalInfo((prevState) => ({
//         ...prevState,
//         [targetStateField]: value
//       }));
//     }
//   };

//   const handlePaste = (e) => {
//     e.preventDefault(); // Prevent the default paste behavior
//     const pastedData = e.clipboardData.getData('text/plain');

//     // Split the pasted data into lines
//     const lines = pastedData.split('\n').map(line => line.trim());

//     console.log(pastedData)
    
//     // Create a temporary object to hold extracted values
//     const newPersonalInfo = { ...personalInfo };

//     // Map the fields based on the pasted data
//     lines.forEach(line => {
//       if (line.includes('Surname')) {
//         newPersonalInfo.surname = line.split('Surname')[1].trim();
//       }
//       if (line.includes('Given Names')) {
//         newPersonalInfo.name = line.split('Given Names')[1].trim();
//       }
//       if (line.includes('Marital Status')) {
//         newPersonalInfo.maritalStatus = line.split('Marital Status')[1].trim();
//       }
//       if (line.includes('Religion')) {
//         newPersonalInfo.religion = line.split('Religion')[1].trim();
//       }
//       if (line.includes('Job')) {
//         newPersonalInfo.job = line.split('Job')[1].trim();
//       }
//       if (line.includes('Qualifications')) {
//         newPersonalInfo.Qualifications = line.split('Qualifications')[1].trim();
//       }
//       if (line.includes('Mobile Number')) {
//         newPersonalInfo.contactPhoneNumber = line.split('Mobile Number')[1].trim();
//       }
//       if (line.includes('Passport Number')) {
//         newPersonalInfo.passportNo = line.split('Passport Number')[1].trim();
//       }
//       if (line.includes('Passport Issue Place')) {
//         newPersonalInfo.placeOfBirth = line.split('Passport Issue Place')[1].trim();
//       }
//     });

//     // Update the state with the new values
//     setPersonalInfo(newPersonalInfo);
//   };

//   return (
//     <div>
//       <NameArea 
//         callback={updateText} 
//         info={personalInfo} 
//         onPaste={handlePaste} // Pass the handlePaste function to NameArea
//       />
//     </div>
//   );
// }

// export default App;


//////////////////





// import React from 'react';
// import html2pdf from 'html2pdf.js';

// import fullbodyapplicantimage from "../image_placeholder/fullbodyapplicantimage.jpeg"
// import phoneIcon from "../image_placeholder/phoneIcon.png"
// import EmailIcon from "../image_placeholder/emailIcon.png"
// import AddressIcon from "../image_placeholder/addressIcon.png"
// import { Height } from '@mui/icons-material';

// import KaanAlRiyadhHeaderImg from "../image_placeholder/KaanAlRiyadh.png"


// const TableToPdf = () => {
//     const downloadMultipleCVs = async () => {
//         const pdfElements = [
//             { elementId: 'KaanAlRiyadhCv', filename: 'KaanAlRiyadh.pdf' },
//             // Add more elements as needed
//         ];

//         const downloadPromises = pdfElements.map(({ elementId, filename }) => {
//             const element = document.getElementById(elementId);
//             const options = {
//                 margin: [0, 0.2, 0, 0.2],
//                 marginTop: 0,
//                 filename: filename,
//                 image: { type: 'jpeg', quality: 0.98 },
//                 html2canvas: { scale: 2 },
//                 jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
//             };

//             return html2pdf().from(element).set(options).save();
//         });

//         await Promise.all(downloadPromises);
//     };

//     return (
//         <div>
//             <div id="KaanAlRiyadhCv" style={{ display: '' }}>
//                 {/* First Table */}
//                 <div style={{ background: "" }}>
//     <img
//         src={KaanAlRiyadhHeaderImg}
//         alt="header"
//         style={{ maxWidth: '100%', height: 'auto' }} // Ensures the image is contained
//     />
// </div>


//                 <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//     <thead>
//         <tr>
//             <th style={{ backgroundColor: '#D050C9', border: '1px solid black', padding: '4px', color: 'white', textAlign: 'left' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
//                     <span style={{ fontSize: '10px', color: 'black' }}>First Name</span>
//                     <span style={{ fontSize: '10px', color: 'black' }}>الاسم الأول</span>
//                 </div>
//             </th>
//             <th style={{ backgroundColor: '#D050C9', border: '1px solid black', padding: '4px', color: 'white', textAlign: 'left' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
//                     <span style={{ fontSize: '10px', color: 'black' }}>Middle Name</span>
//                     <span style={{ fontSize: '10px', color: 'black' }}>الاسم الأوسط</span>
//                 </div>
//             </th>
//             <th style={{ backgroundColor: '#D050C9', border: '1px solid black', padding: '4px', color: 'white', textAlign: 'left' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
//                     <span style={{ fontSize: '10px', color: 'black' }}>Last Name</span>
//                     <span style={{ fontSize: '10px', color: 'black' }}>اسم العائلة</span>
//                 </div>
//             </th>
//             <th style={{ backgroundColor: '#D050C9', border: '1px solid black', padding: '4px', color: 'white', textAlign: 'left' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
//                     <span style={{ fontSize: '10px', color: 'black' }}>Surname</span>
//                     <span style={{ fontSize: '10px', color: 'black' }}>اللقب</span>
//                 </div>
//             </th>
//             <th style={{ backgroundColor: '#D050C9', border: '1px solid black', padding: '4px', color: 'white', textAlign: 'left' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
//                     <span style={{ fontSize: '10px', color: 'black' }}>CV Code</span>
//                     <span style={{ fontSize: '10px', color: 'black' }}>رمز السيرة الذاتية</span>
//                 </div>
//             </th>
//         </tr>
//     </thead>
//     <tbody>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>John</td>
//             <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>A.</td>
//             <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>Doe</td>
//             <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>Smith</td>
//             <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>CV001</td>
//         </tr>
//         {/* Add more rows as needed */}
//     </tbody>
// </table>

//                 {/* Second Table */}
//                 <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
//     <thead>
//         <tr>
//             <th style={{ backgroundColor: '#D050C9', border: '1px solid black', padding: '4px', color: 'white', textAlign: 'left' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
//                     <span style={{ fontSize: '10px', color: 'black' }}>Position Applied</span>
//                     <span style={{ fontSize: '10px', color: 'black' }}>الوظيفة المتقدم لها</span>
//                 </div>
//             </th>
//             <th style={{ backgroundColor: '#D050C9', border: '1px solid black', padding: '4px', color: 'white', textAlign: 'left' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
//                     <span style={{ fontSize: '10px', color: 'black' }}>Contract Period</span>
//                     <span style={{ fontSize: '10px', color: 'black' }}>مدة العقد</span>
//                 </div>
//             </th>
//             <th style={{ backgroundColor: '#D050C9', border: '1px solid black', padding: '4px', color: 'white', textAlign: 'left' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
//                     <span style={{ fontSize: '10px', color: 'black' }}>Monthly Salary</span>
//                     <span style={{ fontSize: '10px', color: 'black' }}>الراتب الشهري</span>
//                 </div>
//             </th>
//             <th style={{ backgroundColor: '#D050C9', border: '1px solid black', padding: '4px', color: 'white', textAlign: 'left' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
//                     <span style={{ fontSize: '10px', color: 'black' }}>City</span>
//                     <span style={{ fontSize: '10px', color: 'black' }}>المدينة</span>
//                 </div>
//             </th>
//             <th style={{ backgroundColor: '#D050C9', border: '1px solid black', padding: '4px', color: 'white', textAlign: 'left' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
//                     <span style={{ fontSize: '10px', color: 'black' }}>Address</span>
//                     <span style={{ fontSize: '10px', color: 'black' }}>العنوان</span>
//                 </div>
//             </th>
//         </tr>
//     </thead>
//     <tbody>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>Software Engineer</td>
//             <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>12 months</td>
//             <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>5000 SAR</td>
//             <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>Riyadh</td>
//             <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>123 Main St.</td>
//         </tr>
//         {/* Add more rows as needed */}
//     </tbody>
// </table>

//                 {/* Third Table - Passport Information */}
//                 <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
//     <thead>
//         <tr>
//             <th style={{ backgroundColor: '#D050C9', border: '1px solid black', padding: '4px', color: 'white', textAlign: 'left' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
//                     <span style={{ fontSize: '10px', color: 'black' }}>Passport No</span>
//                     <span style={{ fontSize: '10px', color: 'black' }}>رقم الجواز</span>
//                 </div>
//             </th>
//             <th style={{ backgroundColor: '#D050C9', border: '1px solid black', padding: '4px', color: 'white', textAlign: 'left' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
//                     <span style={{ fontSize: '10px', color: 'black' }}>Issued Date</span>
//                     <span style={{ fontSize: '10px', color: 'black' }}>تاريخ الإصدار</span>
//                 </div>
//             </th>
//             <th style={{ backgroundColor: '#D050C9', border: '1px solid black', padding: '4px', color: 'white', textAlign: 'left' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
//                     <span style={{ fontSize: '10px', color: 'black' }}>Expired Date</span>
//                     <span style={{ fontSize: '10px', color: 'black' }}>تاريخ الانتهاء</span>
//                 </div>
//             </th>
//             <th style={{ backgroundColor: '#D050C9', border: '1px solid black', padding: '4px', color: 'white', textAlign: 'left' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
//                     <span style={{ fontSize: '10px', color: 'black' }}>Issued Place</span>
//                     <span style={{ fontSize: '10px', color: 'black' }}>مكان الإصدار</span>
//                 </div>
//             </th>
//         </tr>
//     </thead>
//     <tbody>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>A123456789</td>
//             <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>2020-01-01</td>
//             <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>2030-01-01</td>
//             <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>Riyadh</td>
//         </tr>
//         {/* Add more rows as needed */}
//     </tbody>
// </table>

//                 {/* Personal Information and Previous Experience Tables */}
//                 <div style={{ display: 'flex', marginTop: '20px', background: "" }}>
//                     {/* Personal Information Table */}

//                     <div style={{ flex: '1', borderCollapse: 'collapse', marginRight: '10px' }}>
                    
//                     <table style={{ borderCollapse: 'collapse', minWidth: "100%" }}>
//     <thead>
//         <tr>
//             <th colSpan="2" style={{ backgroundColor: '#D050C9', border: '1px solid black', padding: '4px', color: 'black', textAlign: 'left', fontSize: '10px' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
//                     <span >Personal Information</span>
//                     <span >المعلومات الشخصية</span>
//                 </div>
//             </th>
//         </tr>
//     </thead>
//     <tbody>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Nationality / الجنسية</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Religion / الدين</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Age / العمر</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Gender / الجنس</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Birthday / تاريخ الميلاد</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Birthplace / مكان الميلاد</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Marital Status / الحالة الاجتماعية</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Number of Children / عدد الأطفال</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Height / الطول</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Weight / الوزن</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Education / التعليم</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>kkkk</td>
//         </tr>
//     </tbody>
// </table>




// <table style={{ borderCollapse: 'collapse', minWidth: '100%', marginTop: '20px' }}>
//     <thead>
//         <tr>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px', width: '50%', backgroundColor: '#D050C9' }}>Training (التدريب)</th>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px', backgroundColor: '#D050C9' }}>Excellent (ممتاز)</th>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px', backgroundColor: '#D050C9' }}>Very Good (جيد جداً)</th>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px', backgroundColor: '#D050C9' }}>Good (جيد)</th>
//         </tr>
//     </thead>
//     <tbody>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Cleaning (تنظيف)</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Laundry (غسيل)</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Ironing Clothes (كي الملابس)</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Baby Care (رعاية الأطفال)</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Children Care (رعاية الأطفال)</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Care of the Elderly (رعاية المسنين)</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//     </tbody>
// </table>


// <table style={{ borderCollapse: 'collapse', minWidth: '100%', marginTop: '20px' }}>
//     <thead>
//         <tr>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px', width: '50%', backgroundColor: '#D050C9' }}>Skills (المهارات)</th>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px', backgroundColor: '#D050C9' }}>Excellent (ممتاز)</th>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px', backgroundColor: '#D050C9' }}>Good (جيد)</th>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px', backgroundColor: '#D050C9' }}>Poor (ضعيف)</th>
//         </tr>
//     </thead>
//     <tbody>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Cooking (طبخ)</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Arabic Cooking (الطبخ العربي)</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Sewing Clothes (خياطة الملابس)</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Home Nursing (تمريض منزلي)</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Children's Care (رعاية الأطفال)</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Driving Cars (قيادة السيارات)</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Manicure Massage (مانيكير مساج)</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Arabic (العربية)</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//         <tr>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>English (الإنجليزية)</td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//             <td style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}></td>
//         </tr>
//     </tbody>
// </table>

// </div>

//                     {/* Previous Experience Table */}

//                     <div style={{ flex: '1', borderCollapse: 'collapse', marginLeft: '10px', display: "flex", flexDirection: "column", justifyContent: "center",  alignItems:"center" }}>

//                         <>
//                         <table style={{ borderCollapse: 'collapse', minWidth: "100%" }}>
//     <thead>
//         <tr>
//             <th colSpan="5" style={{ 
//                 backgroundColor: '#D050C9', 
//                 border: '1px solid black', 
//                 padding: '4px', 
//                 color: 'white', 
//                 textAlign: 'left', 
//                 fontSize: '10px' 
//             }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', color: "black" }}>
//                     <span>Previous Experience</span>
//                     <span>الخبرة السابقة</span>
//                 </div>
//             </th>
//         </tr>
//         <tr>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Country</th>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>Position</th>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>No of Years</th>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>From</th>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px' }}>To</th>
//         </tr>
//         <tr>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px', fontWeight: "normal" }}>gggg</th>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px', fontWeight: "normal" }}>kkk</th>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px', fontWeight: "normal" }}></th>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px', fontWeight: "normal" }}></th>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px', fontWeight: "normal" }}></th>
//         </tr>
//         <tr>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px', fontWeight: "normal" }}>jjj</th>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px', fontWeight: "normal" }}></th>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px', fontWeight: "normal" }}></th>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px', fontWeight: "normal" }}></th>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px', fontWeight: "normal" }}></th>
//         </tr>
//         <tr>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px', fontWeight: "normal" }}>jjj</th>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px', fontWeight: "normal" }}></th>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px', fontWeight: "normal" }}></th>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px', fontWeight: "normal" }}></th>
//             <th style={{ border: '1px solid black', padding: '4px', fontSize: '10px', fontWeight: "normal" }}></th>
//         </tr>
//     </thead>
//     <tbody>
//         {/* Add more rows as needed */}
//     </tbody>
// </table>


// </>


// {/* full body box */}
// <div style={{border: "10px solid green", borderRadius: "23px", marginTop: '20px', background: "red", height: '520px'}}>
//     <div style={{
//         background: "blue", 
//         maxWidth: "300px", 
//         minWidth: "300px", 
//         height: "100%", 
//         border: "10px solid red", 
//         borderRadius: "10px", 
//         overflow: 'hidden' // Ensure anything exceeding the bounds is hidden
//     }}>
//         <img 
//             src={fullbodyapplicantimage} 
//             style={{
//                 height: "100%", 
//                 width: "auto", 
//                 display: 'block' // Prevents any extra space at the bottom
//             }} 
//             alt="" 
//         />
//     </div>
// </div>



// </div>
//                 </div>


//                 {/* footer */}
//                 <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
//                 <div style={{display: "flex", justifyContent: "space-between", flexDirection: "row", background: "", width: "100%" }}>

//                     <div style={{display: "flex", flexDirection: "column",}}>
                          
//                           <div style={{display: "flex", flexDirection: "row", background: "" }}>

                          

//                           <div style={{background: ""}} >
//                           <img  src={phoneIcon} alt='' />
//                           </div>

//                           <div style={{marginLeft: "20px"}}>Phone</div>
                        
//                         </div>

//                         <div>0582894204 & 0550507629&</div>

//                         <div>0550507629 & 0595855829</div>

//                     </div>

//                     <div style={{display: "flex", flexDirection: "column",}}>
                          
//                           <div style={{display: "flex", flexDirection: "row", background: "" }}>

                          

//                           <div style={{background: ""}} >
//                           <img  src={EmailIcon} alt='' />
//                           </div>

//                           <div style={{marginLeft: "20px"}}>Email</div>
                        
//                         </div>

//                         <div>canoffice16@gmail.co</div>

                        

//                     </div>

//                     <div style={{display: "flex", flexDirection: "column",}}>
                          
//                           <div style={{display: "flex", flexDirection: "row", background: "" }}>

                          

//                           <div style={{background: ""}} >
//                           <img  src={AddressIcon} alt='' />
//                           </div>

//                           <div style={{marginLeft: "20px"}}>Address</div>
                        
//                         </div>

//                         <div>
//   Prince Saud bin Abdul Aziz Al Saud <br /> Al Kabeer – Riyadh KSA PO
// </div>
                       

//                     </div>


//                     </div>


//                 </div>
//                 {/* footer end */}


//             </div>
//             <button onClick={downloadMultipleCVs} style={{ marginTop: '20px' }}>
//                 Generate PDF
//             </button>
//         </div>
//     );
// };

// export default TableToPdf;



/////////////////////////////////////////////////////////


import React, { useState } from 'react';

const PostDummyData = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handlePostDummyData = async () => {
    const dummyData = { newValue: 6 }; // Ensure this is an integer

    try {
      const response = await fetch('https://alwasitapisecond.ntechagent.com/api/count', {
        method: 'PUT', // Assuming you want to update the count
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dummyData),
      });

      if (!response.ok) {
        throw new Error('Failed to post dummy data');
      }

      const result = await response.text(); // Adjust if your API returns JSON
      setMessage(`Successfully posted: ${result}`);
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to post dummy data. Please try again.');
    }
  };

  return (
    <div>
      <h2>Post Dummy Data</h2>
      <button onClick={handlePostDummyData}>Send Dummy Data</button>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default PostDummyData;


//////////////////////////////////////////////////////////////////////////////


// import React, { useEffect, useState } from 'react';

// const DisplayCount = () => {
//   const [count, setCount] = useState(0);
//   const [error, setError] = useState('');

//   const fetchCount = async () => {
//     try {
//       const response = await fetch('https://alwasitapisecond.ntechagent.com/api/count');
//       if (!response.ok) {
//         throw new Error('Failed to fetch count');
//       }
//       const data = await response.json();
//       setCount(data.cv_count); // Set the count from the response
//     } catch (error) {
//       console.error('Error:', error);
//       setError('Failed to fetch count. Please try again.');
//     }
//   };

//   useEffect(() => {
//     fetchCount(); // Fetch the count when the component mounts
//   }, []);

//   // Helper function to format the count
//   const formatCount = (number) => {
//     if (number < 10) {
//       return `00${number}`; // Add "00" for single digits
//     } else if (number < 100) {
//       return `0${number}`; // Add "0" for two digits
//     }
//     return number.toString(); // Leave as is for three or more digits
//   };

//   return (
//     <div>
//       <h2>Current Count: {formatCount(count)}</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </div>
//   );
// };

// export default DisplayCount;



///////////////////////////////////////////////////////////////////////////



// import React from 'react';
// import html2pdf from 'html2pdf.js';

// import fullbodyapplicantimage from "../image_placeholder/fullbodyapplicantimage.jpeg"
// import phoneIcon from "../image_placeholder/phoneIcon.png"
// import EmailIcon from "../image_placeholder/emailIcon.png"
// import AddressIcon from "../image_placeholder/addressIcon.png"
// import { Height } from '@mui/icons-material';

// import KaanAlRiyadhHeaderImg from "../image_placeholder/KaanAlRiyadh.png"


// const TableToPdf = () => {
//     const downloadMultipleCVs = async () => {
//         const pdfElements = [
//             { elementId: 'QimamAsiaCv', filename: 'Qimam Asia.pdf' },
//             // Add more elements as needed
//         ];

//         const downloadPromises = pdfElements.map(({ elementId, filename }) => {
//             const element = document.getElementById(elementId);
//             const options = {
//                 margin: [1, 0.9, 1, 1],
//                 // marginTop: 0,
//                 filename: filename,
//                 image: { type: 'jpeg', quality: 0.98 },
//                 html2canvas: { scale: 2 },
//                 jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
//             };

//             return html2pdf().from(element).set(options).save();
//         });

//         await Promise.all(downloadPromises);
//     };

//     return (
//         <div>
//             <div id="QimamAsiaCv" style={{ display: '' }}>
               

//                <div >


//                  {/* header */}
//                  <div style={{display: "grid", gridTemplateColumns: "75% 25%"}}>


//                  <div style={{display: "flex", flexDirection: "column"}}>

//                     <div style={{marginBottom: "20px", fontSize: "large", color: "#2ca2d4"}}>APPLICATION FOR EMPLOYMENT</div>

// <div style={{display: "flex", marginBottom: "20px" }}>
//     <div style={{display: "flex", justifyContent: "center", border: "2px solid black", width: "40%", fontSize: "12px", color: "#2ca2d4"}}>DATE APPLIED</div>
//     <div style={{display: "flex", justifyContent: "center", border: "2px solid black", width: "40%", fontSize: "12px"}}>aaa</div>
    
// </div>


// <div style={{ display: "flex", alignItems: "center" }}>
//     <div style={{ display: "flex", border: "2px solid black", width: "30%", fontSize: "12px", justifyContent: "center", color: "#2ca2d4" }}>
//         POSITION APPLIED FOR
//     </div>
//     <div style={{ display: "flex", border: "2px solid black", width: "30%", fontSize: "12px", justifyContent: "center", }}>kkkk</div>
//     <div style={{ display: "flex", border: "2px solid black", width: "30%", fontSize: "12px", justifyContent: "center", color: "#AB1319" }}>
//         الوظيفة
//     </div>
// </div>



// <div style={{ display: "flex", alignItems: "center" }}>
//     <div style={{ display: "flex", border: "2px solid black", width: "30%", fontSize: "12px", justifyContent: "center", color: "#2ca2d4" }}>
//  MONTHLY SALARY    </div>
//     <div style={{ display: "flex", border: "2px solid black", width: "30%", fontSize: "12px", justifyContent: "center" }}>kkkk</div>
//     <div style={{ display: "flex", border: "2px solid black", width: "30%", fontSize: "12px", justifyContent: "center", color: "#AB1319" }}>
        
//         الراتب الشهري
//     </div>
// </div>


// <div style={{ display: "flex", alignItems: "center" }}>
//     <div style={{ display: "flex", border: "2px solid black", width: "30%", fontSize: "12px", justifyContent: "center", color: "#2ca2d4" }}>
//         CONTRACT PERIOD
//     </div>
//     <div style={{ display: "flex", border: "2px solid black", width: "30%", fontSize: "12px", justifyContent: "center" }}>kkkk</div>
//     <div style={{ display: "flex", border: "2px solid black", width: "30%", fontSize: "12px", justifyContent: "center", color: "#AB1319" }}>
//         مدة العقد
//     </div>
// </div>


// </div>


//                       <div  style={{width: "100%"}}>
//                       <img src={fullbodyapplicantimage} alt="Wider" className="wider-image" style={{width: "100%"}} />
//                       </div>  


                                          



//                     </div>
//                 {/* header end */}

//                 {/* full name section */}

//                 <div style={{display: "flex", marginTop: "10px", marginBottom: "10px"}}>
//                     <div style={{display: "flex", justifyContent: "center", border: "2px solid black", width: "25%", color: "#2ca2d4", background: "#CECEEF"}}>FULL NAME</div>
//                     <div style={{display: "flex", justifyContent: "center", border: "2px solid black", width: "50%"}}></div>
//                     <div style={{display: "flex", justifyContent: "center", border: "2px solid black", width: "25%", color: "#AB1319", background: "#CECEEF"}}>الاسم الاول</div>
//                 </div>

//                 <div className='table-main-parent' style={{display: "", height: "20px",  }}>
//                     <div style={{display: "flex", justifyContent: "space-between", border: "2px solid black", background: "#CECEEF" }}><span style={{marginLeft: "10px", color: "#2ca2d4"}}>DETAILS OF APPLICATION</span> <span style={{marginRight: "10px", color: "#AB1319"}}>بيانات صاحب الطلب</span></div>
//                     <div style={{display: "none", justifyContent: "center", border: "2px solid black", width: "50%"}}></div>
                   
//                 </div>

//                 {/* full name section end */}


//                 {/* full body image and table */}


//                 <div className="table-main-parent" style={{background: "", height: "100%"}}>
//                     <div class="table-parent"  style={{background: "", height: "100%"}}>



// <div style={{color: "#2ca2d4"}}>NATIONALITY</div>
// <div></div>
// <div style={{color: "#AB1319"}}>الجنسية</div>

// <div style={{color: "#2ca2d4"}}>RELIGION</div>
// <div>ddd</div>
// <div style={{color: "#AB1319"}}>الديانة</div>

// <div style={{color: "#2ca2d4"}}>DATE OF BIRTH</div>
// <div>ddd</div>
// <div style={{color: "#AB1319"}}>تاريخ الميلاد</div>

// <div style={{color: "#2ca2d4"}}>PLACE Of Birth</div>
// <div>dddd</div>
// <div style={{color: "#AB1319"}}>مكان الولادة</div>

// <div style={{color: "#2ca2d4"}}>AGE</div>
// <div>ddd</div>
// <div style={{color: "#AB1319"}}>العمر</div>

// <div style={{color: "#2ca2d4"}}>LIVING TOWN</div>
// <div>ddd</div>
// <div style={{color: "#AB1319"}}>مكان السكن</div>

// <div style={{height: 35, color: "#2ca2d4"}}>MARITAL STATUS</div>
// <div style={{height: 35,}}>ddd</div>
// <div style={{height: 35, color: "#AB1319"}}>الحالة الاجتماعية</div>

// <div style={{height: 35, color: "#2ca2d4"}} >NUMBER OF CHILDREN</div>
// <div style={{height: 35}}>dddd</div>
// <div style={{height: 35, color: "#AB1319"}}>عدد الاطفال</div>

// <div style={{color: "#2ca2d4",}}>WEIGHT</div>
// <div>dddd</div>
// <div style={{color: "#AB1319"}}>الوزن</div>

// <div style={{color: "#2ca2d4"}}>HEIGHT</div>
// <div>ddd</div>
// <div style={{color: "#AB1319"}}>الطول</div>

// <div style={{color: "#2ca2d4"}}>COMPLEXION</div>
// <div>ddd</div>
// <div style={{color: "#AB1319"}}>لون البشرة</div>

// <div style={{height: 35, color: "#2ca2d4"}}>EDUCATIONAL Qualification</div>
// <div style={{height: 35}}>ddd</div>
// <div style={{height: 35, color: "#AB1319"}}> الدرجة العلمية</div>

// <div style={{width: "200px", color: "#2ca2d4"}}>CONTACT NUMBER</div>
// <div style={{borderColor: "transparent"}}></div>
// <div style={{borderColor: "transparent black transparent transparent"}}></div>


// <div style={{ width: "300px", fontSize: "15px", background: "#CECEEF", paddingLeft: "10px", position: "relative", zIndex: 2, display: "flex", justifyContent: "flex-start", borderColor: "black transparent black black" }}>
//     Previous experience
// </div>
// <div style={{ borderColor: "black transparent black transparent", background: "#CECEEF",  position: "relative", zIndex: -1, }}></div>
// <div style={{ borderColor: "black black black transparent", background: "#CECEEF",  position: "relative", zIndex: 1, }}></div>


// <div style={{color: "#2ca2d4"}}>COUNTRY</div>
// <div ></div>
// <div >  </div>

// <div style={{color: "#2ca2d4"}}>DURATION</div>
// <div ></div>
// <div >  </div>

// <div style={{color: "#2ca2d4"}}>POSITION</div>
// <div ></div>
// <div >  </div>












// </div>
// <div style={{ height: "100%", background: "" }}>
//     <div style={{ height: "100%" }}>
//         <img 
//             src={fullbodyapplicantimage !== null ? fullbodyapplicantimage : fullbodyapplicantimage} 
//             alt="Full Body" 
//             style={{ height: "100%", width: "100%", objectFit: "cover" }} 
//         />
//     </div>
//     {/* <div>
//         <img src={fullbodyapplicantimage} alt="Agent Logo" className="agent-logo" />
//     </div> */}
// </div>
//                     </div>

                  

//                 {/* full body image and table end */}


//                 {/* experience boolean */}


//                  <div  style={{background: "red", height: "auto"}}>
                
                    
                
//                                     <div className="specific-exp-atitle-sec" style={{borderColor: " black black transparent black", backgroundColor: "white"}}>
//                                         <div style={{borderColor: "transparent black", backgroundColor: "white black", display: "flex", flexDirection: "column", justifyContent: "flex-end", color: "#AB1319"}}>تربية الاطفال</div>
//                                         <div style={{borderColor: "transparent black", backgroundColor: "white", display: "flex", flexDirection: "column", justifyContent: "flex-end", color: "#AB1319"}}>النظافة</div>
//                                         <div style={{borderColor: "transparent black", backgroundColor: "white", display: "flex", flexDirection: "column", justifyContent: "flex-end", color: "#AB1319"}}>الغسيل</div>
//                                         <div style={{borderColor: "transparent black", backgroundColor: "white", display: "flex", flexDirection: "column", justifyContent: "flex-end", color: "#AB1319"}}>الطبخ</div>
//                                         <div style={{borderColor: "transparent black", backgroundColor: "white", display: "flex", flexDirection: "column", justifyContent: "flex-end", color: "#AB1319"}}>العناية بالمسنين</div>
//                                     </div>
//                                     <div className="specific-exp-etitle-sec" style={{borderColor: "transparent black black black", backgroundColor: "white", }}>
//                                         <div style={{borderColor: "transparent black", backgroundColor: "white", display: "flex", flexDirection: "column", justifyContent: "flex-start", color: "#AB1319", marginTop: "-5px"}}>BABY SITTING</div>
//                                         <div style={{borderColor: "transparent black", backgroundColor: "white", display: "flex", flexDirection: "column", justifyContent: "flex-start", color: "#AB1319", marginTop: "-5px"}}>CLEANING</div>
//                                         <div style={{borderColor: "transparent black", backgroundColor: "white", display: "flex", flexDirection: "column", justifyContent: "flex-start", color: "#AB1319", marginTop: "-5px"}}>WASHING</div>
//                                         <div style={{borderColor: "transparent black", backgroundColor: "white", display: "flex", flexDirection: "column", justifyContent: "flex-start", color: "#AB1319", marginTop: "-3px"}}>COOKING</div>
//                                         <div style={{borderColor: "transparent black", backgroundColor: "white", display: "flex", flexDirection: "column", justifyContent: "flex-start", color: "#AB1319", marginTop: "-5px"}}>ELDER CARE</div>
//                                     </div>
//                                     <div className="exp-trueorfalse-sec" style={{background: "white"}}>
//                                         <div style={{background: "white"}}>YES</div>
//                                         <div style={{background: "white"}}>YES</div>
//                                         <div style={{background: "white"}}>YES</div>
//                                         <div style={{background: "white"}}>NO</div>
//                                         <div style={{background: "white"}}>NO</div>
//                                     </div>
                
//                                     </div>


//                 {/* experience boolean end */}


//                 {/* footer  */}


//                 <div style={{display: "grid", gridTemplateColumns: "50% 50%", marginTop: "20px", }}>


//                  <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>




// <div style={{ display: "flex", alignItems: "center" }}>
//     <div style={{ display: "flex", border: "2px solid black", width: "45%", fontSize: "12px", justifyContent: "center", color: "#2ca2d4" }}>
//         PASSPORT NO.
//     </div>
//     <div style={{ display: "flex", border: "2px solid black", width: "45%", fontSize: "12px", justifyContent: "center" }}>kkkk</div>
   
// </div>


// <div style={{ display: "flex", alignItems: "center" }}>
//     <div style={{ display: "flex", border: "2px solid black", width: "45%", fontSize: "12px", justifyContent: "center", color: "#2ca2d4" }}>
//         DATE ISSUED
//     </div>
//     <div style={{ display: "flex", border: "2px solid black", width: "45%", fontSize: "12px", justifyContent: "center" }}>kkkk</div>
   
// </div>



// <div style={{ display: "flex", alignItems: "center" }}>
//     <div style={{ display: "flex", border: "2px solid black", width: "45%", fontSize: "12px", justifyContent: "center", color: "#2ca2d4" }}>
//         DATE EXPIRY
//     </div>
//     <div style={{ display: "flex", border: "2px solid black", width: "45%", fontSize: "12px", justifyContent: "center" }}>kkkk</div>
   
// </div>


// <div style={{ display: "flex", alignItems: "center" }}>
//     <div style={{ display: "flex", border: "2px solid black", width: "45%", fontSize: "12px", justifyContent: "center", color: "#2ca2d4" }}>
//         PLACE OF ISSUE
//     </div>
//     <div style={{ display: "flex", border: "2px solid black", width: "45%", fontSize: "12px", justifyContent: "center" }}>kkkk</div>
   
// </div>


// </div>


//                       <div  style={{width: "100%", border: "2px solid black", }}>

//                       <div style={{color: "#2ca2d4", fontWeight: "bold", marginLeft: "5px"}}>REMARK</div>

//                       <div style={{ fontSize: "10px", marginLeft: "5px"}}>SHE IS FIRST TIME.</div>
//                       <div style={{ fontSize: "10px", marginLeft: "5px"}}>SHE CAN DO ALL AROUND HOUSEHOLD CHORES.</div>
//                       <div style={{ fontSize: "10px", marginLeft: "5px"}}>SHE IS WILLING TO TAKE CARE BABY.</div>
//                       <div style={{ fontSize: "10px", marginLeft: "5px"}}>SHE CAN WASH AND IRON CLOTHES.</div>
//                       <div style={{ fontSize: "10px", marginLeft: "5px"}}>SHE IS WILLING TO LEARN ARABIC FOOD WITH HELP OF THE SPONSOR.</div>
//                       <div style={{ fontSize: "10px", marginLeft: "5px"}}>FAIR/ENGLISH LANGUAGE.</div>


//                       </div>  


                                          



//                     </div>

//                 {/* footer end */}


//                </div>
              

//             </div>
//             <button onClick={downloadMultipleCVs} style={{ marginTop: '20px' }}>
//                 Generate PDF
//             </button>
//         </div>
//     );
// };

// export default TableToPdf;






////////////////////////////////////////////////////////////////////////////////



// import  React, {useRef} from 'react';
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import Checkbox from '@mui/material/Checkbox'; // Import Checkbox
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete'; 
// import IconButton from '@mui/material/IconButton';
// import { useNavigate } from 'react-router-dom';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import Header from "../screens/header";

// import html2pdf from 'html2pdf.js';
// import embassylistpdftopimage from "../../src/image_placeholder/embassylistpdftopimage.jpeg"
// import Barcode from 'react-barcode';

 
// const columns = [
//   { id: 'name', label: 'Name', minWidth: 170 },
//   { id: 'surname', label: 'Surname', minWidth: 100 },
//   { id: 'currentNationality', label: 'Nationality', minWidth: 170 },
//   { id: 'postappliedfor', label: 'Position', minWidth: 170 },
//   { id: 'createdAt', label: 'Created At', minWidth: 170 },
//   { id: 'actions', label: 'Actions', minWidth: 100 },
// ];

// export default function StickyHeadTable() {
//   const [selected, setSelected] = React.useState([]); // State for selected rows
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);
//   const [rows, setRows] = React.useState([]);
//   const navigate = useNavigate();
//   const [isAnyChecked, setIsAnyChecked] = React.useState(false);

//   const selectedRows = rows.filter(row => selected.includes(row.id));

//   React.useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://alwasitapisecond.ntechagent.com/tt');
//         const result = await response.json();
//         if (result.status === 'ok') {
//           const sortedData = result.data
//             .filter(item => item.createdAt)
//             .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
//           setRows(sortedData);
//         }
//       } catch (error) {
//         console.error('Fetch error:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleSelectAllClick = (event) => {


//     if (event.target.checked) {
//         const newSelecteds = rows.map((row) => row.id);
//         setSelected(newSelecteds);
//         setIsAnyChecked(true); // Set to true if any checkbox is checked
//         return;
//       }
//       setSelected([]);
//       setIsAnyChecked(false); // 


//     // if (event.target.checked) {
//     //   const newSelecteds = rows.map((row) => row.id);
//     //   setSelected(newSelecteds);
//     //   return;
//     // }
//     // setSelected([]);
//   };

// //   const handleSelectAllClick = (event) => {
// //     if (event.target.checked) {
// //       const newSelecteds = rows.map((row) => row.id);
// //       setSelected(newSelecteds);
// //       setIsAnyChecked(true); // Set to true if any checkbox is checked
// //       return;
// //     }
// //     setSelected([]);
// //     setIsAnyChecked(false); // Set to false if all checkboxes are unchecked
// //   };
  
//   const handleClick = (id) => {
//     const selectedIndex = selected.indexOf(id);
//     let newSelected = [];
  
//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, id);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected.slice(0, selectedIndex),
//         selected.slice(selectedIndex + 1),
//       );
//     }
  
//     setSelected(newSelected);
//     setIsAnyChecked(newSelected.length > 0); // Update visibility based on selected count
//   };


// //   const handleDownload = () => {
// //     // Implement download logic here
// //     console.log('Download button clicked. Selected IDs:', selected);
// //     // For example: trigger a download of selected items
// //   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

  

// const pdfRef = useRef();

//   const downloadCV = () => {
//     const element = pdfRef.current;
  
//     // Configuration for html2pdf
//     const isMobile = window.innerWidth <= 768; // Adjust based on your breakpoints
//     const config = {
//       filename: 'Embassy_list.pdf',
//       margin: [1, 0.2, 0, 0.2],
//       image: { type: 'jpeg', quality: 0.98 },
//       html2canvas: { scale: isMobile ? 1 : 2, logging: true, dpi: 300, letterRendering: true },
//       jsPDF: { unit: 'mm', format: isMobile ? 'A4' : 'letter', orientation: 'Portrait' }
//     };
  
//     html2pdf()
//       .from(element)
//       .set(config)
//       .toPdf()
//       .get('pdf') 
//       .then(pdf => {
//         const totalPages = pdf.internal.getNumberOfPages();
//         const phoneNumber = `${dayName}, ${monthName} ${dayNumber}, ${year}`; // Replace with your phone number
//         const email = "www.ntechagent.com | +251 911 454176 | ntechagent@gmail.com"; // Replace with your email
  
//         for (let i = 1; i <= totalPages; i++) {
//           pdf.setPage(i);
//           pdf.setFontSize(10);
//           pdf.setTextColor(5);
  
//           // Set positions
//           const pageYPosition = pdf.internal.pageSize.getHeight() - 10; // Y position for footer
//           const leftXPosition = 3; // X position for left side text
//           const rightXPosition = pdf.internal.pageSize.getWidth() - 22; // Base position for page number
//           const centerXPosition = pdf.internal.pageSize.getWidth() / 2 + 10; // Center position
  
//           // Add phone number on the left
//           pdf.text(`${phoneNumber}`, leftXPosition, pageYPosition);
  
//           // Add email in the center
//           pdf.text(` ${email}`, centerXPosition, pageYPosition, { align: 'center' });
  
//           // Add page number and total pages to the footer on the right
//           pdf.text(`Page ${i} of ${totalPages}`, rightXPosition, pageYPosition);
//           // pdf.text(`${email}`, rightXPosition, pageYPosition);
//         }
//       })
//       .save();
//   };
  




//   const today = new Date();
//   // Format the date as MM/DD/YYYY
//   const formattedTodayDate = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;




//    // Get today's date
//   //  const today = new Date();

//    // Define arrays for day and month names
//    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 
//    // Get the required date parts
//    const dayName = dayNames[today.getDay()];
//    const monthName = monthNames[today.getMonth()];
//    const dayNumber = today.getDate();
//    const year = today.getFullYear();

//    const handleRowClick = (id) => {
//     navigate(`/list/${id}`);
//   }; 

  
  
//   return (
//     <>
//       <Paper sx={{ width: '100%', overflow: 'hidden' }}>
//         <Header />
//         <TableContainer sx={{ maxHeight: 440 }}>
//           <Table stickyHeader aria-label="sticky table">
//             <TableHead>
//               <TableRow>
//                 <TableCell padding="checkbox">
//                   <Checkbox
//                     color="primary"
//                     indeterminate={selected.length > 0 && selected.length < rows.length}
//                     checked={rows.length > 0 && selected.length === rows.length}
//                     onChange={handleSelectAllClick}
//                   />
//                 </TableCell>
//                 {columns.map((column) => (
//                   <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
//                     {column.label}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//   {rows
//     .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//     .map((row) => {
//       const isSelected = selected.indexOf(row.id) !== -1;
//       return (
//         <TableRow
//           hover
//           role="checkbox"
//           tabIndex={-1}
//           key={row.id}
//           onClick={(event) => { 
//             // event.stopPropagation(); // Prevent row click from toggling checkbox
//             handleRowClick(row.name + "-" + row.middleName + "-" + row.surname + "_" + row.createdAt);
//           }}
//           selected={isSelected}
//         >
//           <TableCell padding="checkbox">
//             <Checkbox
//               color="primary"
//               checked={isSelected}
//               onChange={(event) => {
//                 event.stopPropagation(); // Prevent checkbox click from triggering row click
//                 handleClick(row.id);
//               }}

//               onClick={(event) => { event.stopPropagation(); /* Edit functionality */ }}
//             />
//           </TableCell>
//           {columns.map((column) => {
//             const value = row[column.id];
//             return (
//               <TableCell key={column.id} align={column.align}>
//                 {column.id === 'actions' ? (
//                   <>
//                     <IconButton onClick={(event) => { event.stopPropagation(); /* Edit functionality */ }}>
//                       <EditIcon />
//                     </IconButton>
//                     <IconButton color="error" onClick={(event) => { event.stopPropagation(); /* Delete functionality */ }}>
//                       <DeleteIcon />
//                     </IconButton>
//                     <IconButton onClick={(event) => { event.stopPropagation(); /* Menu functionality */ }}>
//                       <MoreVertIcon />
//                     </IconButton>
//                   </>
//                 ) : (
//                   value
//                 )}
//               </TableCell>
//             );
//           })}
//         </TableRow>
//       );
//     })}
// </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination
//           rowsPerPageOptions={[10, 25, 100]}
//           component="div"
//           count={rows.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </Paper>

//       <TablePagination
//   rowsPerPageOptions={[10, 25, 100]}
//   component="div"
//   count={rows.length}
//   rowsPerPage={rowsPerPage}
//   page={page}
//   onPageChange={handleChangePage}
//   onRowsPerPageChange={handleChangeRowsPerPage}
// />

// {/* New Table for Selected Applicants */}
// <Paper sx={{ marginTop: 2 }}>
//   <TableContainer>
//     <Table aria-label="selected applicants table">
//       <TableHead>
//         <TableRow>
//           <TableCell>Name</TableCell>
//           <TableCell>Surname</TableCell>
//           <TableCell>Nationality</TableCell>
//           <TableCell>Position</TableCell>
//           <TableCell>Created At</TableCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {selectedRows.map((row, index) => (
//           <TableRow key={row.id}>
//             <TableCell>{index + 1}</TableCell>
//             <TableCell>{row.name}</TableCell>
//             <TableCell>{row.surname}</TableCell>
//             <TableCell>{row.currentNationality}</TableCell>
//             <TableCell>{row.postappliedfor}</TableCell>
//             <TableCell>{new Date(row.createdAt).toLocaleDateString()}</TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   </TableContainer>
// </Paper>

// {isAnyChecked && (
//   <button onClick={downloadCV} style={{ marginTop: '20px' }}>
//     Download
//   </button>
// )}


// <div style={{display: "none"}}>
// <div id="embassy_list" ref={pdfRef}>
//   <div style={{ background: "", marginTop: "20px", display: "flex", justifyContent: "center" }}>
//     <img
//       src={embassylistpdftopimage}
//       alt="header"
//       style={{ maxWidth: '98%',  }} // Ensures the image is contained
//     />
//   </div>

//   <div style={{ background: "", display: "flex", justifyContent: "center" }}>
//     {/* <table style={{ 
//       maxWidth: '97%', 
//       minWidth: '97%', 
//       background: '', 
//       borderCollapse: 'collapse',  // Ensures borders are collapsed
//       marginTop: "10px"
//     }}>
//       <thead>
//         <tr>
//           <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left', fontSize: "12px" }}>SNo</th>
//           <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left', fontSize: "12px" }}>Applicant Name</th>
//           <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left', fontSize: "12px" }}>Passport #</th>
//           <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left', fontSize: "12px" }}>Sponsor ID</th>
//           <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left', fontSize: "12px" }}>Visa No.</th>
//           <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left', fontSize: "12px" }}>Application No</th>
//           <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left', fontSize: "12px" }}>Bar Code</th>
//         </tr>
//       </thead>
//       <tbody>
//         {selectedRows.map((row, index) => (
//           <tr key={row.id}>
//             <td style={{ border: '1px solid black', padding: '8px', fontSize: "12" }}>{index + 1}</td>
//             <td style={{ border: '1px solid black', padding: '8px', fontSize: "12" }}>{row.name}</td>
//             <td style={{ border: '1px solid black', padding: '8px', fontSize: "12" }}>{row.passportnum}</td>
//             <td style={{ border: '1px solid black', padding: '8px', fontSize: "12" }}>{row.sponsorId}</td>
//             <td style={{ border: '1px solid black', padding: '8px', fontSize: "12" }}>{row.visaNo}</td>
//             <td style={{ border: '1px solid black', padding: '8px', fontSize: "12" }}>{row.applicationNo}</td>
//             <td style={{ border: '1px solid black', padding: '8px', fontSize: "12" }}>hhhhhhhhhhhh</td>
//           </tr>
//         ))}
//       </tbody>
//     </table> */}




//     <table style={{ maxWidth: '97%', 
//       minWidth: '97%',  borderCollapse: 'collapse', marginTop: "20px" }}>
//     <thead>
//         <tr>
//             <th style={{ border: '1px solid black', padding: '4px', color: 'white', textAlign: 'left' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
//                     <span style={{ fontSize: '10px', color: 'black' }}>SNo</span>
//                     <span style={{ fontSize: '10px', color: 'black', display: "none" }}> </span>
//                 </div>
//             </th>
//             <th style={{ backgroundColor: '', border: '1px solid black', padding: '4px', color: 'white', textAlign: 'left' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
//                     <span style={{ fontSize: '10px', color: 'black' }}>Applicant Name</span>
//                     <span style={{ fontSize: '10px', color: 'black', display: "none" }}>الاسم الأوسط</span>
//                 </div>
//             </th>
//             <th style={{ backgroundColor: '', border: '1px solid black', padding: '4px', color: 'white', textAlign: 'left' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
//                     <span style={{ fontSize: '10px', color: 'black' }}>Passport #</span>
//                     <span style={{ fontSize: '10px', color: 'black', display: "none" }}>اسم العائلة</span>
//                 </div>
//             </th>
//             <th style={{ backgroundColor: '', border: '1px solid black', padding: '4px', color: 'white', textAlign: 'left' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
//                     <span style={{ fontSize: '10px', color: 'black' }}>Sponsor ID</span>
//                     <span style={{ fontSize: '10px', color: 'black', display: "none" }}>اللقب</span>
//                 </div>
//             </th>
//             <th style={{ backgroundColor: '', border: '1px solid black', padding: '4px', color: 'white', textAlign: 'left' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
//                     <span style={{ fontSize: '10px', color: 'black' }}>Visa No.</span>
//                     <span style={{ fontSize: '10px', color: 'black', display: "none" }}>رمز السيرة الذاتية</span>
//                 </div>
//             </th>

//             <th style={{ backgroundColor: '', border: '1px solid black', padding: '4px', color: 'white', textAlign: 'left' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
//                     <span style={{ fontSize: '10px', color: 'black' }}>Application No</span>
//                     <span style={{ fontSize: '10px', color: 'black', display: "none" }}>رمز السيرة الذاتية</span>
//                 </div>
//             </th>

//             <th style={{ backgroundColor: '', border: '1px solid black', padding: '4px', color: 'white', textAlign: 'left' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
//                     <span style={{ fontSize: '10px', color: 'black' }}>Bar Code</span>
//                     <span style={{ fontSize: '10px', color: 'black', display: "none" }}>رمز السيرة الذاتية</span>
//                 </div>
//             </th>
//         </tr>
//     </thead>
//     <tbody>
//         {/* <tr>
//             <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>{}</td>
//             <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>{}</td>
//             <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>{}</td>
//             <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>{}</td>
//             <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>CV{}</td>
//             <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>CV{}</td>
//             <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>CV{}</td>
//         </tr> */}

//         {selectedRows.map((row, index) => ( 
            
//             <tr >

// {/* <td style={{ border: '1px solid black', padding: '8px', fontSize: "12" }}>{index + 1}</td> */}
//             {/* <td style={{ border: '1px solid black', padding: '8px', fontSize: "12px" }}>{row.name}</td>
//             <td style={{ border: '1px solid black', padding: '8px', fontSize: "12px" }}>{row.passportnum}</td>
//             <td style={{ border: '1px solid black', padding: '8px', fontSize: "12px" }}>{row.sponsorId}</td>
//             <td style={{ border: '1px solid black', padding: '8px', fontSize: "12px" }}>{row.visaNo}</td>
//             <td style={{ border: '1px solid black', padding: '8px', fontSize: "12px" }}>{row.applicationNo}</td>
//             <td style={{ border: '1px solid black', padding: '8px', fontSize: "12px" }}>hhhhhhhhhhhh</td> */}


//             <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>{index + 1}</td>
//             <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>{row.name} {row.middleName} {row.surname}</td>
//             <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>{row.passportnum}</td>
//             <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>{row.sponsorId}</td>
//             <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>{row.visaNo}</td>
//             <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>{row.applicationNo}</td>
//             <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>
//     <Barcode
//         displayValue={false}
//         value={row.applicationNo && row.applicationNo.length === 10 ? row.applicationNo : "E333777777"}
//         height={23}
//         width={1.7}
//         marginBottom={1}
//     />
// </td>

//             </tr>
            
//             ))}
       
//     </tbody>
// </table>



//   </div>
// </div>
// </div>
//     </>
//   ); 
// }