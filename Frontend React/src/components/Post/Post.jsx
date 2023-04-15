import React, { useState } from 'react';
import './post.css';

const Post = () => {
  const [postDate, setPostDate] = useState('');
  const [postTime, setPostTime] = useState('');
  const [postContent, setPostContent] = useState('');
  const [isPosting, setIsPosting] = useState(false);

  const handleDateChange = (event) => {
    setPostDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setPostTime(event.target.value);
  };

  const handleContentChange = (event) => {
    setPostContent(event.target.value);
  };

  const handlePostClick = () => {
    setIsPosting(true);
    setTimeout(() => {
      alert(`Post scheduled for ${postDate} at ${postTime} on multiple social media platforms: ${postContent}`);
      setIsPosting(false);
    }, 2000);
  };

  return (
    <div className="social-media-post-scheduler">
      <h2>Schedule Social Media Post</h2>
      <form>
        <div className="form-group">
          <label htmlFor="post-date">Date:</label>
          <input
            type="date"
            id="post-date"
            name="post-date"
            value={postDate}
            onChange={handleDateChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="post-time">Time:</label>
          <input
            type="time"
            id="post-time"
            name="post-time"
            value={postTime}
            onChange={handleTimeChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="post-content">Content:</label>
          <textarea
            id="post-content"
            name="post-content"
            rows="5"
            value={postContent}
            onChange={handleContentChange}
            placeholder="Enter your post content here..."
            required
          />
        </div>
        <button type="button" disabled={isPosting} onClick={handlePostClick}>
          {isPosting ? 'Posting...' : 'Schedule and Post to Multiple Platforms'}
        </button>
      </form>
    </div>
  );
};

export default Post;