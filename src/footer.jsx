import youtubeIcon from './assets/youtube.svg'
import discordIcon from './assets/discord.svg'
import glxyIcon from './assets/720x300.glxy.png'

function Footer() {

    return(
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    {/* Image Above the Welcome text */}
                    <img src={glxyIcon} alt="GLXY ARCANE" className="footer-image" />

                    <p className="footer-text">
                        Welcome to the official GLXY ARCANE page! Stay tuned for upcoming content, updates, and much more.
                    </p>
                    
                    {/* Social Media Icons below the text */}
                    <div className="footer-icons">
                        <a href="https://www.youtube.com/@GLXY_ARCANE" target="_blank" className="footer-icon-box">
                            <img src={youtubeIcon} alt="YouTube" className="footer-icon" />
                        </a>
                        <a href="https://discord.gg/nFNV5R8mBd" target="_blank" className="footer-icon-box">
                            <img src={discordIcon} alt="Discord" className="footer-icon" />
                        </a>
                    </div>
                </div>
                <div className="footer-right">
                    {/* Links on separate lines */}
                    <div className="footer-links">
                        <a href="/home" className="footer-link">Home</a>
                        <a href="/contact" className="footer-link">Contact</a>
                        <a href="/goals" className="footer-link">Goals</a>
                    </div>
                    {/* Copyright text */}
                    <p>&copy; {new Date().getFullYear()} GLXY ARCANE | All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer