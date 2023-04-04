import './ImgPreview.css';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [profileImg, setProfileImg] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png');

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfileImg(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  useEffect(()=>
  {
    console.log(profileImg)
  }, [profileImg])
  return (
    <div className="page">
      <div className="container">
        <h2 className="heading">Add your Logo</h2>
        <div className="img-holder">
          <img src={profileImg} alt="" id="img" className="img" />
        </div>
        <input
          type="file"
          accept="image/*"
          name="image-upload"
          id="input"
          onChange={imageHandler}
        />
        <div className="label">
          <label className="image-upload" htmlFor="input">
            {/* <i className="material-icons">add_photo_alternate</i> */}
            Choose image
          </label>
        </div>
      </div>
    </div>
  );
};

export default App;
