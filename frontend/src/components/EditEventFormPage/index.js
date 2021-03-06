import './EditEventFormPage.css';
import hangout from '../../images/hangout.jpg'

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory} from "react-router-dom";
import * as sessionActions from "../../store/session";
import { editEvent, getOneEvent } from '../../store/event';
import { getEventCategories } from '../../store/category';


const EditEventFormPage = ({event, hideForm}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const eventCategories = useSelector(state => state.category.list);

  const eventCategory = eventCategories.find(category => category.id === event.categoryId);


  const sessionUser = useSelector(state => state.session.user);



  const [title, setTitle] = useState(event.title);
  const [description, setDescription] = useState(event.description);
  const [categoryId, setCategoryId ] = useState(event.categoryId);

  const [category, setCategory] = useState(eventCategory.type); // Need to check, since it's a dropdown
  const [imgUrl, setImgUrl] = useState(event.imgUrl);
  const [price, setPrice] = useState(event.price);
  const [date, setDate] = useState(event.date.slice(0,10));
  const [startTime, setStartTime] = useState(event.startTime);
  const [endTime, setEndTime] = useState(event.endTime);
  const [address, setAddress] = useState(event.address);
  const [city, setCity] = useState(event.city);
  const [state, setState] = useState(event.state)
  const [zipCode, setZipCode] = useState(event.zipCode);
  const [errors, setErrors] = useState([]);


  useEffect(() => {
    dispatch(getEventCategories());
  }, [dispatch])

  useEffect(() => {
    const cate = eventCategories.find(element => element.type === category);
    if (cate) setCategoryId(cate.id);
  }, [category])

  useEffect(() => {
    const errors = [];
    if (!title) errors.push("Title cannot be empty.");
    if (!description) errors.push("Description cannot be empty.");
    if (!category) errors.push("Please select a category.");
    if (!imgUrl) errors.push("Image URl cannot be empty.");
    // if (!price) errors.push("Price cannot be empty.");
    if (price < 0) errors.push("Price cannot be less than 0.");
    if (!date) errors.push("Date cannot be empty.");
    if (!startTime) errors.push("Start Time cannot be empty.");
    if (!endTime) errors.push("End Time cannot be empty.");
    if (!address) errors.push("Address cannot be empty.");
    if (!city) errors.push("City cannot be empty.");
    if (!state) errors.push("State cannot be empty.");
    if (!zipCode) errors.push("Zipcode cannot be empty.");
    if (zipCode.length !== 5) errors.push("Zipcode should be 5 digits.");

    setErrors(errors);

  }, [title, description, category, imgUrl, price, date, startTime, endTime, address, city, state, zipCode])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...event,
      hostId: event.hostId,
      title,
      description,
      categoryId,
      imgUrl,
      price,
      date,
      startTime,
      endTime,
      address,
      city,
      state,
      zipCode
    }

    let updatedEvent = await dispatch(editEvent(payload));

    if (updatedEvent) {
      hideForm();
    }
  }

  // TODO: not working yet, maybe define two content too?
  const handleCancelClick = (e) => {
    e.preventDefault();
    hideForm()
  }

  return (
    <div className='outter-container'>
      <div className='img-container2'>
        <img src={hangout}/>
      </div>
      <div className='form-container'>
        <h1>Edit this Event</h1>
        <form onSubmit={handleSubmit}>
        <ul>
            {errors && errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
          <div className='form-label'>
            <label htmlFor='title'>Title</label>
          </div>
          <div className='form-input2'>
            <input
              type="text"
              name="title"
              placeholder="Give a name for the event"
              value={title}
              onChange={e => setTitle(e.target.value)}>
            </input>
          </div>

          <div className='form-label'>
            <label htmlFor='description'>Description</label>
          </div>
          <div>
            <textarea
              name="description"
              placeholder='Tell us More about this event...'
              value={description}
              onChange={e => setDescription(e.target.value)}
              >
            </textarea>
          </div>

          <div className='form-label'>
            <label htmlFor='category'>Select a Category</label>
          </div>
            <select
              name="category"
              onChange={e => setCategory(e.target.value)}
              value={category}
            >
              {eventCategories.map(category =>
                <option key={category.id}>{category.type}</option>
                )}
            </select>


          <div className='form-label'>
            <label htmlFor='imgUrl'>The image URL of the event</label>
          </div>
          <div className='form-input2'>
            <input
              type="text"
              name="imgUrl"
              placeholder='Ex: http://123456'
              value={imgUrl}
              onChange={e => setImgUrl(e.target.value)}
              >
            </input>
          </div>

          <div className='form-label'>
            <label htmlFor='price'>Set the Price of Your Event</label>
          </div>
          <div className='form-input2'>
            <input
              type="number"
              name="price"
              value={price}
              min={0}
              onChange={e => setPrice(e.target.value)}>
            </input>
          </div>

          <div className='form-label'>
            <label htmlFor="date">Event Date</label>
          </div>
          <div className='form-input2'>
            <input
              type="date"
              name="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              >
            </input>
          </div>

          <div className='form-label'>
            <label htmlFor='startTime'>Event Start Time</label>
          </div>
          <div className='form-input2'>
            <input
              type="time"
              name="startTime"
              value={startTime}
              onChange={e => setStartTime(e.target.value)}
              >
            </input>
          </div>

          <div className='form-label'>
            <label htmlFor='endTime'>Event End Time</label>
          </div>
          <div className='form-input2'>
            <input
              type="time"
              name="endTime"
              value={endTime}
              onChange={e => setEndTime(e.target.value)}
              >
            </input>
          </div>

          <div className='form-label'>
            <label htmlFor='address'>Address</label>
          </div>
          <div className='form-input2'>
            <input
              type="text"
              name="address"
              value={address}
              onChange={e => setAddress(e.target.value)}
              >
            </input>
          </div>

          <div className='form-label'>
            <label htmlFor='city'>City</label>
          </div>
          <div className='form-input2'>
            <input
              type="text"
              name="city"
              placeholder='Ex. San Francisco'
              value={city}
              onChange={e => setCity(e.target.value)}
              >
            </input>
          </div>

          <div className='form-label'>
            <label htmlFor='state'>State</label>
          </div>
          <div className='form-input2'>
            <input
              type="text"
              name="city"
              placeholder='Ex: CA'
              value={state}
              onChange={e => setState(e.target.value)}
              >
            </input>
          </div>

          <div className='form-label'>
            <label htmlFor='zipCode'>Zipcode</label>
          </div>
          <div className='form-input2'>
            <input
              type="text"
              name="zipCode"
              placeholder='Ex: 91230'
              value={zipCode}
              onChange={e => setZipCode(e.target.value)}
              >
            </input>
          </div>

            <button
              className='btn submit'
              type="submit"
              // disabled={errors? true : false}
              >Submit</button>
          <div>
            <button className='btn submit' type="button" onClick={handleCancelClick}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}




export default EditEventFormPage;
