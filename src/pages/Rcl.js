import React from 'react';
import { Link } from 'react-router-dom';
import image31 from '../assets/Home_image31.jpg';
import image51 from '../assets/Home_image51.jpg';
import image4 from '../assets/Home_image4.jpg'; 
import image42 from '../assets/Home_image42.jpg'; 
import image43 from '../assets/Home_image43.jpg'; 
import '../css/Rcl.css';

function Rcl() {
  return (
    <div className="allpost">
      <div className="rcl-section">
        <ul>
          <li>
            <h2>Reading Chinese Literature</h2>
          </li>
          <li>
            <img src={image4} alt="Chinese Literature" />
          </li>
          <li>
            The study of Chinese literature and culture will help you bridge the cultural gap, better understand your Chinese counterparts, and create a platform of knowledge and understanding with them that is crucial for effective communication. Its literature is affected by their culture and traditions, and they also have main dialects used in their literature. The grammar of the written language was used by people of many different ethnic groups and countries during the Zhou, Qin, and Han eras, spanning from 1050 BC to 220 AD. People went through many changes and hosted many languages. Also, reading Chinese literature is a pleasure to teach and to read; it holds importance and relevance both in historical terms and in understanding the world today. Their history, language, and culture are quite rich and different from much of the Western tradition, making the study of Chinese literature both challenging and rewarding.
          </li>
          <li>
            <img src={image42} alt="Chinese Literature Context" />
          </li>
          <li>
            <h3>Han Dynasty</h3>
            The Han dynasty was the second great imperial dynasty of China (206 BCE–220 CE), after the Zhou dynasty (1046–256 BCE). It was founded by Liu Bang. The Han dynasty had a dominant effect on Chinese history and culture, and its governmental, cultural, and technological achievements were emulated by the dynasties that followed.
          </li>
          <li>
            <img src={image43} alt="Han Dynasty Achievements" />
          </li>
          <li>
            It is known for a long reign and its achievements, which included the development of the civil service and government structure, scientific advancements such as the invention of paper, use of water clocks and sundials to measure time, and the development of a seismograph. The Yuefu, which compiled descriptions of music, also emerged during this time. The Han dynasty put an end to civil war and reunified China in 202 BCE, ushering in a golden age of peace and prosperity during which progress and cultural development took place. The Western Han period continued many of the Qin's policies but modified them with Confucian ideals. The Han Empire was the most successful of them all, creating a government system based on merit, diverging from the traditional upper-class rule, and remains influential to this day.
          </li>
        </ul>
      </div>
      <div className="rcl-container">
        <div className="Ching">
          <img src={image31} alt="I Ching" />
          <Link to="/Ching">
            <h1>
              <span>I Ching, The Book of Changes</span><br />
              </h1>
          </Link>
        </div>
        <div className="Analects">
          <img src={image51} alt="The Analects" />
          <Link to="/Analects">
            <h1>
              <span>The Analects</span>
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Rcl;
