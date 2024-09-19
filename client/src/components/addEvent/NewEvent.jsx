import React, { useState } from 'react'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import UploadWidget from '../uploadWidget/UploadWidget';
import "./newEvent.scss";

function NewEvent() {

  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);

  const handleSubmit = async (e) => {
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);

    log

  }



  return (
    <div className="newPostPage">
      <div className="formContainer">
        <h1>Add New Event</h1>
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <div className="item">
              <label htmlFor="title">Title</label>
              <input id="title" name="title" type="text" />
            </div>
            <div className="item">
              <label htmlFor="price">General Price</label>
              <input id="price" name="price" type="number" />
            </div>
            <div className="item">
              <label htmlFor="address">Address</label>
              <input id="address" name="address" type="text" />
            </div>
            <div className="item description">
              <label htmlFor="desc">Description</label>
              <ReactQuill theme="snow" onChange={setValue} value={value} />
            </div>

            <div className="item">
              <label htmlFor="city">City</label>
              <input id="city" name="city" type="text" />
            </div>

            <div className="item">
              <label htmlFor="latitude">Latitude</label>
              <input id="latitude" name="latitude" type="text" />
            </div>
            <div className="item">
              <label htmlFor="longitude">Longitude</label>
              <input id="longitude" name="longitude" type="text" />
            </div>
            <div className="item">
              <label htmlFor="type">Type</label>
              <select name="type">
                <option value="rent" defaultChecked>
                  Rent
                </option>
                <option value="buy">Buy</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="type">Age Restriction</label>
              <select name="property">
                <option value="apartment">No</option>
                <option value="house">Yes</option>
              </select>
            </div>

            <div className="item">
              <label htmlFor="income">VIP Price</label>
              <input
                id="vip"
                name="vip"
                type="text"
                placeholder="Enter VIP price (0 if none)"
              />
            </div>

            <div className="item">
              <label htmlFor="income">VVIP Price</label>
              <input
                id="vvip"
                name="vvip"
                type="text"
                placeholder="Enter VVIP price (0 if none)"
              />
            </div>


            <div className="item">
              <label htmlFor="startDate">Start Date</label>
              <input id="startDate" name="startDate" type="date" />
            </div>

           
            <button className="sendButton">Add</button>
            {/* {error && <span>error</span>} */}
          </form>
        </div>
      </div>
      <div className="sideContainer">

        {images.map((image, index) => (
          <img src={image} key={index} alt="" />
        ))}
        <UploadWidget
          uwConfig={{
            multiple: true,
            cloudName: "dguxu4bqb",
            uploadPreset: "computicket",
            folder: "event",
          }}
          setState={setImages}
        />
      </div>
    </div>
  )
}

export default NewEvent