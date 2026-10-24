import { useState } from "react";

// save in MoodChanger.jsx
function MoodChanger() {
const [mood, setMood] = useState('happy');

return (
<div className="MoodChanger componentBox">
Current Mood: {mood}

{/* Change the mood state by calling setMood when a
button is clicked */}
<button
onClick={() => setMood('tired')}>
Stay Up Late
</button>

<button
onClick={() => setMood('hungry')}>
Skip Lunch
</button>

{/* ++ Add these buttons and some of your own to
MoodChanger and try it out! */}
</div>
)
}




export default MoodChanger;

