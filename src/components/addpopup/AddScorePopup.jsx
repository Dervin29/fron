import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addScore } from '../store/actions';
import './addscore.css';

const AddScorePopup = ({ closePopup }) => {
  const [username, setUsername] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [milliseconds, setMilliseconds] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();



  const formatTimePart = (part) => {
    return part.length === 1 ? `0${part}` : part;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || minutes.trim().length === 0 || !seconds.trim().length === 0 || !milliseconds.trim().length === 0) {
      setError('Please enter a valid username and time');
      return;
    }
    const formattedMinutes = formatTimePart(minutes);
    const formattedSeconds = formatTimePart(seconds);
    const formattedMilliseconds = formatTimePart(milliseconds);
    const score = `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
    dispatch(addScore(username, score));
    setUsername('');
    setMinutes('');
    setSeconds('');
    setMilliseconds('');
    setError('');
    closePopup();
  };

  return (
    <div className="popup">
      <h2>Add Score</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <div className="time-inputs">
        <input
          type="number"
          min={1}
          max={60}
          placeholder="MM"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
        />
        <input
          type="number"
          min={1}
          max={60}
          placeholder="SS"
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
        />
        <input
          type="number"
          placeholder="MSS"
          min={1}
          max={60}
          value={milliseconds}
          onChange={(e) => setMilliseconds(e.target.value)}
        />
      </div>
      {error && <div className="error-message">{error}</div>}
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default AddScorePopup;
