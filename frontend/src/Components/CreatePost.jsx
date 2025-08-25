import React, { useState } from 'react';
import axios from 'axios';
import './CreatePost.css'

function CreatePost() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      title,
      description,
      category,

    };

    try {
      const response = await axios.post('https://your-api-endpoint.com/posts', postData);
      console.log('Post created successfully:', response.data);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className='post-container'>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <label>Title:  </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <br />
        </div>
        <div className="input">
          <label>Description:</label>
          <br>
          </br>
          <textarea
            maxLength={10000}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <br />
        </div>
        <div>
          <label>Category: </label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>
              Choose a category
            </option>
            <option value="webdevelopment">Web Development</option>
            <option value="mobileappdevelopment">Mobile App Development</option>
            <option value="aiprojects">AI Projects</option>
            <option value="cloudprojects">Cloud Projects</option>
            <option value="contentwriting">Content Writing</option>
            <option value="photoediting">Photo Editing</option>
            <option value="videoediting">Video Editing</option>
          </select>
        </div>
        <br>
        </br>
        <div>
          <button type="submit">Post</button>
        </div>

      </form>
    </div>
  );
}

export default CreatePost;