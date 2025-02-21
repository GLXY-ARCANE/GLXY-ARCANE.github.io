import glxyPfp from './assets/200pxPFP.png'
import specsImg from './assets/200pxSpecs.png'
import discordImg from './assets/discord.svg'
import youtubeImg from './assets/youtube.svg'
import merchImg from './assets/merch.png'

import { useState, useEffect } from 'react'


function Card(){
    const [stats, setStats] = useState({
        subscriberCount: "Loading...",
        viewCount: "Loading...",
        videoCount: "Loading..."
      });
    
      useEffect(() => {
        const fetchStats = async () => {
          // ***EXTREMELY IMPORTANT: DO NOT DO THIS IN PRODUCTION***
          const API_KEY = 'AIzaSyAJ5rdxxzCM7sx3VlMYjoIu9QMa4L4uzLE'; // ONLY FOR LOCAL TESTING - VERY INSECURE
    
          const channelId = 'UCuf0BVG8kjmMSoTBkC9XzFg'; // Replace with your channel ID
    
          try {
            const response = await fetch(
                `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${API_KEY}`
            );
    
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            const stats = data.items[0].statistics;
    
            setStats({
              subscriberCount: stats.subscriberCount,
              viewCount: stats.viewCount,
            });
          } catch (error) {
            console.error("Error fetching stats:", error);
            setStats({
              subscriberCount: "Error",
              viewCount: "Error",
            });
          }
        };
    
        fetchStats();
      }, []);

      const subProgress = (stats.subscriberCount / 2500) * 100;
      const viewProgress = (stats.viewCount / 1000000) * 100;
    return (
      <>
      <div className="containerBox1">
          <div className="container about-me">
            <div className="card">
                <div className="cardHeader">
                  <img src={glxyPfp} alt="GLXY_ARCANE Profile Picture" className="cardImg" />
                    <div className="cardText">
                      <h2 className="cardH2"><strong>ABOUT ME</strong></h2>
                    </div>
                    </div>
                      <p className="cardP">Hey there! I'm GLXY_ARCANE, or just GLXY for short. I'm here to create content that people actually want to watch! Whether it's gaming, streaming, or storytelling, my goal is to bring you enjoyable content you can vibe with. And most importantly, I LOVE streaming—it’s my absolute favorite part of being on YouTube.</p>
                      <p className="cardP">I’m a teenager living in the good ol’ USA. When I’m not gaming or streaming, you’ll find me hanging out with my awesome pets—three dogs (Daphne, a German Shepherd; Marla, a Great Dane; and Daisy, a Maltese Poodle mix) and two cats (Ozzy & Copper). Animals are a huge part of my life!</p>
                      <p className="cardP">When I’m not gaming, I’m probably coding or out camping. I also spend a lot of time with friends, and you can always count on me to be down for a chill hangout. I'm a Boy Scout, which means I enjoy exploring the outdoors and learning new skills along the way.</p>
                      <p className="cardP">A fun fact! I love with collecting hats! I currently have 8, but I don't plan on stopping anytime soon! One of my coolest hats is from my own merch! That's right! I’ve also got some sweet merch that you can check out. My setup? Two PCs, three monitors—just the way I like it. And when I need a break from all the action, you’ll probably catch me jamming out to my favorite band, Theory of a Deadman.</p>
                      <p className="cardP">Thanks for stopping by! Stay tuned for more adventures and content. Hope you enjoy what I have in store!</p>
                      <p className="cardP">(Links below)</p>
                  </div>
              </div>
              <div className="container specs">
                <div className="card">
                    <div className="cardHeader">
                        <img src={specsImg} alt="Specs Image" className="cardImg" />
                        <div className="cardText">
                            <h2 className="cardH2"><strong>MY SETUP</strong></h2>
                        </div>
                    </div>
                  <div className="listContainter">
                  <h3 className="specsHeaders"><strong>MAIN PC:</strong></h3>
                  <ul className="specsUl">
                    <li className="specsLi">CPU: AMD Ryzen 5 5500</li>
                    <li className="specsLi">GPU: NVIDIA GeForce RTX 3060</li>
                    <li className="specsLi">RAM: T-Force Delta 32GB DDR4</li>
                    <li className="specsLi">Storage: 1TB NVME SSD - 500GB Sata SSD</li>
                    <li className="specsLi">Motherboard: ASUS TUF A520M WIFI</li>
                  </ul>
                  <h3 className="specsHeaders"><strong>STREAMING PC:</strong></h3>
                  <ul className="specsUl">
                    <li className="specsLi">CPU: Intel i7-4790</li>
                    <li className="specsLi">GPU: NVIDIA GeForce GTX 1050</li>
                    <li className="specsLi">RAM: 16GB DDR3</li>
                  </ul>
                  <h3 className="specsHeaders"><strong>Peripherals:</strong></h3>
                  <ul className="specsUl">
                    <li className="specsLi">Main Monitor: AOC C27G2 27" 165hz </li>
                    <li className="specsLi">Keyboard: iLuvBee B87 Wireless</li>
                    <li className="specsLi">Mouse: Razer Deathadder Essential</li>
                    <li className="specsLi">Headset: Scullcandy Grom Wireless</li>
                    <li className="specsLi">Capture Card: EVGA XR1 Lite</li>
                  </ul>
                  <h3 className="specsHeaders"><strong>Software:</strong></h3>
                  <ul className="specsUl">
                    <li className="specsLi">Streaming Software: OBS Studio</li>
                    <li className="specsLi">Editing Software: Premier Pro 24</li>
                    <li className="specsLi">Bot Software: Streamer.bot</li>
                  </ul>
                  </div>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="stats">
              <div className="statsSubs">
                <h3 className="statsH3">Total Subscribers</h3>
                <p className="statsP">{stats.subscriberCount} / 2500</p>
              <div className="progress-bar">
                <div className="progress-fill subs" style={{ width: `${subProgress}%` }}>
                  <span className="progress-text">{subProgress.toFixed(1)}%</span>
                </div>
              </div>
            </div>
              <div className="statsViews">
                <h3 className="statsH3">Total Views</h3>
                <p className="statsP">{stats.viewCount} / 1000000</p>
              <div className="progress-bar">
                <div className="progress-fill views" style={{ width: `${viewProgress}%` }}>
                  <span className="progress-text">{viewProgress.toFixed(1)}%</span>
                 </div>
                </div>
              </div>
           </div>
           <div className="divider"></div>
           <div className="socials">
            <h2 className="socialsH2">LINKS</h2>
            <div className="socialsContainer">
              <a href="https://www.youtube.com/@GLXY_ARCANE" target="_blank" rel="noopener noreferrer" className="socialLink">
                <img src={youtubeImg} alt="YouTube Icon" className="socialIcon" />
                <span className="socialText">YouTube</span>
              </a>
              <a href="https://discord.gg/nFNV5R8mBd" target="_blank" rel="noopener noreferrer" className="socialLink">
                <img src={discordImg} alt="Discord Icon" className="socialIcon" />
                <span className="socialText">Discord</span>
              </a>
              <a href="https://glxyarcane.printful.me" target="_blank" rel="noopener noreferrer" className="socialLink">
                <img src={merchImg} alt="Merch Icon" className="socialIcon" />
                <span className="socialText">Merch</span>
              </a>
            </div>
          </div>
        </>
    );
}

export default Card
