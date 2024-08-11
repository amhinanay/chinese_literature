import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Page1.css';
import image3 from '../assets/Home_image3.jpg';
import image4 from '../assets/Home_image4.jpg';
import image5 from '../assets/Home_image5.jpg';
import image6 from '../assets/Home_image6.jpg';


function Page1() {
  const [activeTab, setActiveTab] = useState('overview');

  // Handle tab click and save to localStorage
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    localStorage.setItem('activeTab', tab);
  };

  // Retrieve saved tab from localStorage on component mount
  useEffect(() => {
    const savedTab = localStorage.getItem('activeTab');
    if (savedTab) {
      setActiveTab(savedTab);
    }
  }, []);

  return (
    <div className="page1">
      <div className="frontpage">
        <h1>CHINESE<br />LITERATURE</h1>
      </div>
      <div className="allpost">
        <div className="rcl">
        <img src={image4} alt="Reading Chinese Literature" />
        <Link to="Rcl">
            <h1>
              <span>Reading Chinese Literature</span><br />
              The study of Chinese literature and culture will help you bridge the cultural gap, better understand your Chinese counterparts, and...
            </h1>
          </Link>
        </div>
        <div className="ching">
        <img src={image3} alt="I Ching" />
        <Link to="Ching"> 
                  <h1>
            <span>I Ching, The Book of Changes</span><br />
            The I Ching is known as the Book of Changes, and Hexagram 49 details the precise changes in Revolution, the goal of which is to "create...
          </h1>
        </Link>
        </div>
        <div className="analects">
          <img src={image5} alt="The Analects" />
          <Link to="Analects"> 
          <h1>
            <span>The Analects</span><br />
            The Analects (meaning "Selected Sayings"), also known as the Analects of Confucius, the Sayings of Confucius, or the Lun Yu, is an...
          </h1>
          </Link>
        </div>
      </div>
      <div className="last">
        <div className="about-col-1">
          <img src={image6} alt="Chinese Literature" />
        </div>
        <div className="about-col-2">
          <div className="tab-title">
            <p 
              className={`tab-link ${activeTab === 'overview' ? 'active-link' : ''}`} 
              onClick={() => handleTabClick('overview')}
            >
              Overview
            </p>
            <p 
              className={`tab-link ${activeTab === 'classics' ? 'active-link' : ''}`} 
              onClick={() => handleTabClick('classics')}
            >
              Classics
            </p>
            <p 
              className={`tab-link ${activeTab === 'modern' ? 'active-link' : ''}`} 
              onClick={() => handleTabClick('modern')}
            >
              Modern Works
            </p>
          </div>
          <div className={`tab-contents ${activeTab === 'overview' ? 'active-tab' : ''}`} id="overview">
            <ul>
              <li><span>Introduction to Chinese Literature</span><br />Discover the foundational aspects of Chinese literature, including its historical development and key characteristics.</li>
              <li><span>Thematic Elements</span><br />Explore common themes in Chinese literature such as Confucianism, Daoism, and the interplay of nature and humanity.</li>
            </ul>
          </div>
          <div className={`tab-contents ${activeTab === 'classics' ? 'active-tab' : ''}`} id="classics">
            <ul>
              <li><span>The Book of Songs</span><br />An anthology of ancient Chinese poetry that provides insight into early Chinese society and culture.</li>
              <li><span>The Dao De Jing</span><br />A foundational text of Daoism attributed to Laozi, exploring themes of harmony and balance.</li>
            </ul>
          </div>
          <div className={`tab-contents ${activeTab === 'modern' ? 'active-tab' : ''}`} id="modern">
            <ul>
              <li><span>Modern Chinese Poetry</span><br />Explore the evolution of Chinese poetry from the late Qing dynasty to contemporary times.</li>
              <li><span>Lu Xun</span><br />Lu Xun, the father of modern Chinese literature, provided critical views on early 20th-century Chinese society and culture.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1;
