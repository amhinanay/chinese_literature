import React from 'react';
import { Link } from 'react-router-dom';
import image41 from '../assets/Home_image41.jpg';
import image51 from '../assets/Home_image51.jpg';
import image31 from '../assets/Home_image31.jpg'; 
import image32 from '../assets/Home_image32.jpg'; 

import '../css/Rcl.css';

function Rcl() {
  return (
    <div className="allpost">
      <div className="rcl-section">
        <ul>
          <li>
            <h2>I Ching, The Book of Changes</h2>
          </li>
          <li>
          The I Ching is known as the Book of Changes, and Hexagram 49 details the precise changes in Revolution, the goal of which is to "create the new." The new should be better than the old. "According to Legge's translation, revolution "is believed in only after it has occurred." There will be significant advancement and prosperity. Being firm and correct will benefit you. <br/>
            <img src={image31} alt="I Ching, The Book of Changes" />
          </li>
          <li>
          The ancient book of the I Ching's Hexagram 49 includes enlightening insights about the organic nature of revolution and its stages. The hexagram depicts basic forces at odds in the early stages of a revolution, as in the picture of two quarreling, warring sisters whose interests eventually separate. The fire in the midst of a lake helps us see how revolution works: its fierce, crackling flames are mirrored in the water around it, and its light and smoke touch the heavenly plane. There is no such thing as a spontaneous revolution; you cannot decide to launch a social or political movement. It happens naturally. The success of a revolution is dependent on timing.<br/> Hexagram 49 embodies the phases of a revolution, including its peril and process. Once a revolution is born, it must be "bound with the hide of a yellow ox" in order to provide the groundwork for its success, such as devotion and allegiance. The revolution will begin on the "right day," which will be a period of splendour. A setback: The revolution's objective may be expressed "three times," as in a charm or spell. Magic happens in threes in fairy and folk stories. Do not proceed until the objectives have been properly expressed, reiterated, and shared. When the goals are clear, regret will fade away.  
          </li>
          <li>
            <img src={image32} alt="Chinese Literature Context" />
          </li>
          <li>
            <h3>Han Dynasty</h3>
            A great leader becomes like a tiger, whose stripes are apparent even from a distance; her or his honesty is obvious to everybody. When the revolution is over, everyone must transform—this time, into a panther. Eras change; following a revolution, a new period of stability must emerge. Because revolution is "bright" on its "proper day" and has a fire connotation, Hexagram 49 implies that it has the capacity to "enlighten."
          <li/>
          </li>
           
      
        </ul>
      </div>
      <div className="rcl-container">
        <div className="Ching">
          <img src={image41} alt="I Ching" />
          <Link to="/Rcl">
            <h1>
              <span>Reading Chinese Literature</span><br />
            </h1>
          </Link>
        </div>
        <div className="Analects">
          <img src={image51} alt="The Analects" />
          <Link to="/Analects">
            <h1>
              <span>The Analects</span><br />
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Rcl;
