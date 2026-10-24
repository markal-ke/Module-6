import { useState } from "react";

function Emoji() {
const [mood, setMood] = useState('😊');

const handleLosingDeadlock = () => {
let newMood = '😫';
if (mood === '😫') newMood = '😰'
else if (mood === '😰') newMood = '😱';
setMood(newMood)
}

return (
<div className="MoodChanger componentBox">
Current Mood: {mood}
<button onClick={handleLosingDeadlock}>Running Late</button>
</div>
)
}




export default Emoji;