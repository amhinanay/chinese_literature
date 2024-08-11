import React from 'react';
import { Link } from 'react-router-dom'; 
import image5 from '../assets/image5.jpg'; 
import image31 from '../assets/Home_image31.jpg'; 
import image41 from '../assets/Home_image41.jpg';



import '../css/Rcl.css';

function Rcl() {
  return (
    <div className="allpost">
      <div className="rcl-section">
        <ul>
          <li>
            <h2>The Analects</h2>
          </li>
          <li>
          The Analects (meaning "Selected Sayings"), also known as the Analects of Confucius, the Sayings of Confucius, or the Lun Yu, is an ancient Chinese book composed of a large collection of sayings and ideas attributed to the Chinese philosopher Confucius and his contemporaries, traditionally believed to have been compiled and written by Confucius's followers. It is believed to have been written during the Warring States period (475–221 BC), and it achieved its final form during the mid-Han dynasty (206 BC–220 AD). By the early Han dynasty the Analects was considered merely a "commentary" on the Five Classics, but the status of the Analects grew to be one of the central texts of Confucianism by the end of that dynasty. <br/>
            <img src={image5} alt="I Ching, The Book of Changes" /> <br/>
            The Analects Quotes

by Confucius

 “Respect yourself and others will respect you.”

 “Hold faithfulness and sincerity as first principles.”

 “To be wealthy and honored in an unjust society is a disgrace.”

 “Never give a sword to a man who can't dance.”

 “The noble-minded are calm and steady. Little people are forever fussing and fretting.”
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
          <img src={image31} alt="The Analects" />
          <Link to="/Ching">
            <h1>
              <span>I Ching, The Book of Changes</span><br />
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Rcl;

