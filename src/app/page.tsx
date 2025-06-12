import './page.css';
import './responsive-fixes.css';
import { Award, Users, Building2, Trophy, Calendar, Phone, Mail } from 'lucide-react';
import ImageSlider from './components/image-slider';
export default function Home() {
  return (
    <div style={styles.container}>
      <section style={styles.hero}>
         <div style={styles.logoRow} className="logoRow">
            {/* <div style={styles.logoContainer} className="logoContainer">
              <img src="/inapp-logo12.png" alt="InApp Logo" style={styles.inappLogo} className="inapp-logo"/>
            </div> */}
            <div style={styles.logoContainer}>
              <img src="/logo1.png" alt="IEEE CS Logo" style={styles.inappLogo} className="ieeecslogo"/>
            </div>
         </div>

          {/* <img src="/heading.png" alt="Heading Text" style={styles.headingImage} /> */}
       
        <h1 style={styles.heading} className="responsiveHeading">InApp - IEEE CS STUDENT PROJECT AWARDS</h1>
        <p style={styles.subheading} className="responsiveSubheading">Inspiring New Solutions, Propelling Innovation, Realizing Excellence</p>
       
        <a
          href="https://your-form-link.com"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.button}
        >
          Apply Now
        </a>
      </section>
      
    <section style={styles.aboutSection} id="about">
        <div style={styles.sectionContainer}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionBadge}>About</div>
            <h2 style={styles.sectionTitle}>Empowering Innovation Through Excellence</h2>
            <p style={styles.sectionSubtitle}>
              Discover the partnership that's shaping the future of technology education and innovation
            </p>
          </div>

          <ImageSlider />

          <div style={styles.aboutCardsGrid} className="about-cards-grid">
            <div style={styles.aboutCard} className="about-card">
              <div style={styles.aboutCardIcon}>
                <Award size={32} color="white" />
              </div>

              <div style={styles.aboutCardContent}>
                <h3 style={styles.aboutCardTitle}> InApp </h3>
                <p style={styles.aboutCardText}>Founded in 2000, InApp has been at the forefront of providing cutting-edge technology solutions to businesses  worldwide. With a dedicated team of over 200 professionals and offices in the USA, India, and Japan, InApp serves a diverse clientele ranging from Fortune 500 companies to SMBs.</p>
                <p style={styles.aboutCardText}>The company specializes in custom software development, quality assurance, mobile app development, and cloud computing services, utilizing the latest technologies like AI, blockchain, and IoT. InApp’s customer-centric approach ensures the delivery of high-quality, scalable solutions that address unique business needs, nurturing long-term relationships built on trust and innovation.</p>
              </div>
            </div>

            <div style={styles.aboutCard} className="about-card">
              <div style={styles.aboutCardIcon}>
                <Users size={32} color="white" />
              </div>
              <div style={styles.aboutCardContent}>
                <h3 style={styles.aboutCardTitle}>IEEE Computer Society</h3>
                <p style={styles.aboutCardText}>
                  The IEEE Computer Society (CS) Kerala Chapter, founded in 1985, is the world’s largest Computer Society Chapter, with 48 Student Branch Chapters and over 2,400 members as of 2025. Renowned for encouraging innovation in computer science and engineering, it organizes flagship events like AKCSSC and AICSSYC-23.                </p>
                <p style={styles.aboutCardText}>
                  Its success is powered by dedicated volunteers whose leadership has earned recognitions such as the IEEE CS (Global) Outstanding Chapter Award (2018), Early Career Professionals Engagement Award (2022), and the IEEE Kerala Section’s Outstanding Large Society Chapter Award (2023). With a commitment to excellence, the Chapter inspires collaboration and meaningful change in technology.                      </p>
              </div>
            </div>

            <div style={styles.aboutCard} className="about-card">
              <div style={styles.aboutCardIcon}>
                <Building2 size={32} color="white" />
              </div>
              <div style={styles.aboutCardContent}>
                <h3 style={styles.aboutCardTitle}>InApp - IEEE CS Student Project Awards</h3>
                <p style={styles.aboutCardText}>
                                    Established to provide an engaging and supportive platform for students to showcase their skills in software development, the InApp Awards serve as a space for aspiring developers to bring their ideas to life. By recognizing outstanding projects and solutions, these awards nurture innovation and inspire students to push the boundaries.</p>
                <p style={styles.aboutCardText}>
                
                  A panel of industry experts evaluates the submissions, ensuring that the best ideas receive the recognition they deserve. Beyond celebrating technical excellence, the InApp Awards aim to empower the next generation to become future leaders.                </p>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="history" style={styles.historySection}>
        <div style={styles.sectionContainer}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionBadge}>History</div>
            <h2 style={styles.sectionTitle}>Legacy of Excellence</h2>
            <p style={styles.sectionSubtitle}>
              Over a decade of recognizing and celebrating student innovation in technology
            </p>
          </div>

          <div style={styles.historyContent} className="history-content">
            <div style={styles.historyStats} className="history-stats">
              <div style={styles.statCard}>
                <h3 style={styles.statNumber}>14</h3>
                <p style={styles.statLabel}>Years of Awards</p>
              </div>
              <div style={styles.statCard}>
                <h3 style={styles.statNumber}>500+</h3>
                <p style={styles.statLabel}>Projects Submitted</p>
              </div>
              <div style={styles.statCard}>
                <h3 style={styles.statNumber}>100+</h3>
                <p style={styles.statLabel}>Winners Recognized</p>
              </div>
              <div style={styles.statCard}>
                <h3 style={styles.statNumber}>50+</h3>
                <p style={styles.statLabel}>Institutions Participated</p>
              </div>
            </div>

            <div style={styles.historyText} className="history-text">
              <p style={styles.historyParagraph} className="history-paragraph">
                The InApp Awards have a longstanding tradition of encouraging innovation and recognizing excellence in software development among students. Since their inception, the awards have aimed to provide a platform for young developers to showcase their skills and creative solutions to real-world problems.
              </p>
              <p style={styles.historyParagraph} className="history-paragraph">
                In the 14th edition, the InApp Awards reached a significant milestone by partnering with Kerala Technological University. The projects were evaluated by a distinguished panel of industry pioneers, ensuring that the best and most innovative solutions received the recognition they deserved.
              </p>
              <p style={styles.historyParagraph} className="history-paragraph">
                Building on this success, the 15th edition of the InApp Awards returns with renewed enthusiasm, continuing its mission to celebrate and nurture the talent of aspiring developers. This year’s edition remains committed to encouraging students to push their boundaries, innovate, and make an impact in the world of software development.
              </p>
              {/* <div style={styles.historyLink} className="history-link">
                <a href="#" style={styles.linkButton} className="history-link-btn">
                  View Previous Year Winners →
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </section>

 <section id="awards" style={styles.awardsSection}>
        <div style={styles.sectionContainer}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionBadge}>Awards</div>
            <h2 style={styles.sectionTitle}>Competition Details & Guidelines</h2>
            <p style={styles.sectionSubtitle}>
              Everything you need to know about participating in the  InApp - IEEE CS Awards
            </p>
          </div>

          <div style={styles.awardsGrid} className="awards-grid">
            {/* Award Rules Card */}
            <div style={styles.awardsCard} className="awards-card">
              <div style={styles.awardsCardHeader}>
                <Trophy size={24} color="#CC232E" />
                <h3 style={styles.awardsCardTitle}>Award Rules</h3>
              </div>
              <div style={styles.awardsCardContent}>
  <p><strong>1. <em>Zero Fees, Unlimited Potential</em></strong><br/>
  Participation is absolutely free. No registration or submission fees apply at any stage.</p>

  <p><strong>2. <em>Who Can Participate</em></strong><br/>
  <ul>
    <li>Open to all <strong>B.E./B.Tech</strong> students from accredited institutions and universities worldwide.</li>
    <li>Teams may include up to <strong>five students</strong> from the <strong>same institution</strong>, guided by a <strong>faculty mentor</strong>.</li>
  </ul></p>

  <p><strong>3. <em>Submission Requirements</em></strong><br/>
  To enter the arena:
  <ul>
    <li>Craft a powerful two-page abstract using the official template.</li>
    <li>Ensure your project is entirely original, born from your own minds — no copied ideas, no recycled work.</li>
    <li>Have your abstract certified, then submit it online.</li>
  </ul></p>

  <p><strong>4. <em>Evaluation that Mirrors the Real World</em></strong><br/>
  Our selection process is designed to test <strong>vision, execution, and impact</strong> — just like in the real world of tech and innovation.
  <ul>
    <li><strong><em>Stage 1: Expert Screening</em></strong><br/>
      <ol>
        <li>Every abstract is reviewed by domain experts.</li>
        <li>The most compelling entries are shortlisted and notified via email.</li>
      </ol>
    </li>
    <li><strong><em>Stage 2: The Final Showdown</em></strong><br/>
      <ol>
        <li>Shortlisted teams will present a live demonstration of their project.</li>
        <li>Judging takes place through video conferencing, in front of a seasoned panel of technologists, innovators, and industry leaders.</li>
      </ol>
    </li>
  </ul></p>

  <p><strong>5. <em>What We’re Looking For</em></strong><br/>
  <ul>
    <li><strong><em>Innovation:</em></strong> Is your solution daring, original, and future-facing?</li>
    <li><strong><em>Feasibility:</em></strong> Can it work in the real world? Is it practically executable?</li>
    <li><strong><em>Relevance:</em></strong> Does it solve a real problem or meet a real need?</li>
  </ul></p>

  <p><strong>6. <em>Decisions Are Final</em></strong><br/>
  The verdicts of the Award Evaluation Committee are final, absolute, and based on merit.</p>

  <p><strong><em>Your Journey Starts Here</em></strong><br/>
  You’re not just entering a competition. You’re stepping onto a global stage.<br/>
  <em>Bring your boldest ideas. We’ll bring the spotlight.</em></p>
</div>

            </div>
            </div>
         <div style={styles.awardsGrid1} className="awards-grid">
            {/* Prizes Card */}
            <div style={styles.awardsCard} className="awards-card">
              <div style={styles.awardsCardHeader}>
                <Award size={24} color="#CC232E" />
                <h3 style={styles.awardsCardTitle}>Prizes</h3>
              </div>
              <div style={styles.awardsCardContent}>
                <div style={styles.prizeItem}>
                  <div style={styles.prizeIcon}>🥇</div>
                  <div>
                    <h4 style={styles.prizeTitle}>First Prize</h4>
                    <p style={styles.prizeAmount}>Award Instrument + ₹50,000</p>
                  </div>
                </div>
                <div style={styles.prizeItem}>
                  <div style={styles.prizeIcon}>🥈</div>
                  <div>
                    <h4 style={styles.prizeTitle}>Consolation Prize</h4>
                    <p style={styles.prizeAmount}>Award Instrument + ₹25,000</p>
                  </div>
                </div>
                <div style={styles.bonusCard}>
                  <p style={styles.bonusText}>
                    Bonus: Cash Prizes — Exclusively for All Finalists
                  </p>
                </div>
              </div>
            </div>
          

          {/* Timeline */}
          <div style={styles.timelineCard} className="timeline-card">
            <div style={styles.timelineHeader}>
              <Calendar size={24} color="#CC232E" />
              <h3 style={styles.timelineTitle}>Important Dates</h3>
            </div>
            <div style={styles.timelineContent}>
              <div style={styles.timelineItem}>
                <div style={styles.timelineDot}></div>
                <div style={styles.timelineInfo}>
                  <h4 style={styles.timelineEventTitle}>Call for Abstracts</h4>
                  <p style={styles.timelineDate}>16th JUNE, 2025</p>
                </div>
              </div>
              <div style={styles.timelineItem}>
                <div style={styles.timelineDot}></div>
                <div style={styles.timelineInfo}>
                  <h4 style={styles.timelineEventTitle}>Submission Deadline</h4>
                  <p style={styles.timelineDate}>30th JUNE, 2025</p>
                </div>
              </div>
               <div style={styles.timelineItem}>
                <div style={styles.timelineDot}></div>
                <div style={styles.timelineInfo}>
                  <h4 style={styles.timelineEventTitle}>Initial Evaluation & Scrutiny</h4>
                  <p style={styles.timelineDate}>JULY</p>
                </div>
              </div>
               <div style={styles.timelineItem}>
                <div style={styles.timelineDot}></div>
                <div style={styles.timelineInfo}>
                  <h4 style={styles.timelineEventTitle}>⁠Final Evaluation</h4>
                  <p style={styles.timelineDate}>AUGUST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
       <section id="contact" style={styles.contactSection}>
        <div style={styles.sectionContainer}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionBadge}>Contact Us</div>
            <h2 style={styles.sectionTitle1}> Stuck somewhere? Curious about the next step?
              Reach out — we’re here to ensure nothing holds you back</h2>
            <p style={styles.sectionSubtitle}>
              
            </p>
          </div>

          <div style={styles.contactGrid} className="contact-grid">
            <div style={styles.contactCard} className="contact-card">
              <div style={styles.contactCardHeader}>
                <div style={styles.contactAvatar}>
                  <Users size={24} color="white" />
                </div>
                <div>
                  <h3 style={styles.contactName}>Awards Team</h3>
                  {/* <p style={styles.contactRole}>Awards Team</p> */}
                </div>
              </div>
              <div style={styles.contactDetails}>
                <div style={styles.contactItem}>
                  <Mail size={18} color="#CC232E" />
                  <a href="mailto:awards@inapp.com" style={styles.contactLink}>
                    studentawards@inapp.com
                  </a>
                </div>
                <div style={styles.contactItem}>
                  <Phone size={18} color="#CC232E" />
                  <span style={styles.contactText}>+91 86061 64747</span>
                </div>
                <div style={styles.contactItem}>
                  <Phone size={18} color="#CC232E" />
                  <span style={styles.contactText}>+91 73560 47629</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        <p>©️2025 InApp - IEEE CS Student Project Awards. All rights reserved.</p>
      </footer>
    </div>
    
  );
}

const styles = {
  container: {
    paddingTop: '0px',
  },
  hero: {
    height: '100vh',
    backgroundImage: 'url(/bg1.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center' as const,
    padding: '0 20px',
  },

    logo: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
  } as React.CSSProperties,
  inappLogo: {
    maxWidth: '320%',
    maxHeight: '320%',
    
    objectFit: 'contain',
  } as React.CSSProperties,
  ieeecsLogo: {
    maxWidth: '300%',
    maxHeight: '300%',
    objectFit: 'contain',
  } as React.CSSProperties,
  
  logoContainer: {
  width: '300px',
  height: '150px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 -25px',
},
  logoRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '-30px',
  },
  heading: {
    fontFamily: 'Nexa',
    fontSize: '3.5rem',
    fontWeight: '800',
    marginBottom: '10px',
    color: '#ffffff',
    // textTransform: 'uppercase' as React.CSSProperties['textTransform'],

  },
  subheading: {
    fontFamily: 'Rothek',
    fontStyle: 'italic',
    fontWeight: '300',
    color: '#ffffff',
    fontSize: '1.4rem',
    marginBottom: '20px',
  },
    headingImage: {
    width: '100%', // adjust as needed
    maxWidth: '1000px',
    marginBottom: '10px',
  },
  button: {
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '16px 40px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
  },

 sectionContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  sectionHeader: {
    textAlign: 'center' as const,
    marginBottom: '4rem',
  },
  sectionBadge: {
    display: 'inline-block',
    backgroundColor: '#CC232E',
    color: 'white',
    padding: '8px 24px',
    borderRadius: '50px',
    fontSize: '1.9rem',
    fontWeight: '600',
    textTransform: 'uppercase' as const,
    letterSpacing: '1px',
    marginBottom: '1rem',
  },
  sectionTitle: {
    fontSize: '3rem',
    fontWeight: '700',
    color: 'black',
    marginBottom: '1.5rem',
    lineHeight: '1.2',
  },
  sectionTitle1: {
    fontSize: '1.2rem',
    fontWeight: '500',
    color: 'white',
    marginBottom: '1.5rem',
    lineHeight: '1.2',
  },
  sectionSubtitle: {
    fontSize: '1rem',
    color: '#666',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.6',
  },

  // About Section
  aboutSection: {
    padding: '8rem 0',
    backgroundColor: '#f8f9fa',
  },

  // History Section
  historySection: {
    padding: '8rem 0',
    backgroundColor: 'white',
  },
  historyContent: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'center',
    marginTop: '3rem',
  },
  historyStats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '2rem',
  },
  statCard: {
    textAlign: 'center' as const,
    padding: '2rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '15px',
    border: '2px solid #CC232E',
  },
  statNumber: {
    fontSize: '3rem',
    fontWeight: '800',
    color: '#CC232E',
    margin: '0 0 0.5rem 0',
  },
  statLabel: {
    fontSize: '1.1rem',
    color: '#666',
    margin: 0,
    fontWeight: '600',
  },
  historyText: {
    paddingLeft: '2rem',
  },
  historyParagraph: {
    fontSize: '1.2rem',
    color: '#666',
    lineHeight: '1.8',
    marginBottom: '1.5rem',
  },
  historyLink: {
    marginTop: '2rem',
  },
  linkButton: {
    display: 'inline-block',
    backgroundColor: '#CC232E',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '1.1rem',
    transition: 'all 0.3s ease',
  },
  aboutCardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
    marginTop: '3rem',
  },
  aboutCard: {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '2rem',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
    position: 'relative' as const,
    overflow: 'hidden',
  },
  aboutCardIcon: {
    width: '80px',
    height: '80px',
    backgroundColor: '#CC232E',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.5rem',
    position: 'relative' as const,
  },
  aboutCardContent: {
    position: 'relative' as const,
    zIndex: 2,
  },
  aboutCardTitle: {
    fontSize: '1.8rem',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '1.2rem',
  },
  aboutCardText: {
    fontSize: '1.1rem',
    color: '#666',
    lineHeight: '1.7',
    marginBottom: '1.2rem',
  },
  // Awards Section
  awardsSection: {
    padding: '8rem 0',
    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
  },
  awardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(700px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem',
  },
   awardsGrid1: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem',
  },
  awardsCard: {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '2rem',
    border: '2px solid #CC232E',
    boxShadow: '0 15px 40px rgba(204, 35, 46, 0.1)',
    transition: 'all 0.3s ease',
  },
  awardsCardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1.5rem',
  },
  awardsCardTitle: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#1a1a1a',
  },
  awardsCardContent: {
    color: '#666',
  },
  rulesList: {
    paddingLeft: '1.5rem',
    lineHeight: '1.8',
    fontSize: '1rem',
  },
  prizeItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1.5rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '15px',
    marginBottom: '1.5rem',
    boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
    border: '1px solid #e9ecef',
    transition: 'all 0.3s ease',
  },
  prizeIcon: {
    fontSize: '2rem',
  },
  prizeTitle: {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#1a1a1a',
    margin: '0 0 0.5rem 0',
  },
  prizeAmount: {
    fontSize: '1rem',
    color: '#CC232E',
    fontWeight: '600',
    margin: 0,
  },
  bonusCard: {
    backgroundColor: '#CC232E',
    color: 'white',
    padding: '1.5rem',
    borderRadius: '15px',
    textAlign: 'center' as const,
    boxShadow: '0 8px 25px rgba(204, 35, 46, 0.3)',
    border: '2px solid #CC232E',
  },
  bonusText: {
    margin: 0,
    fontSize: '1rem',
  },

  // Timeline
  timelineCard: {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '2rem',
    border: '2px solid #CC232E',
    boxShadow: '0 15px 40px rgba(204, 35, 46, 0.1)',
    transition: 'all 0.3s ease',
  },
  timelineHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '2rem',
  },
  timelineTitle: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#1a1a1a',
  },
  timelineContent: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1.5rem',
  },
  timelineItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  timelineDot: {
    width: '16px',
    height: '16px',
    backgroundColor: '#CC232E',
    borderRadius: '50%',
    flexShrink: 0,
  },
  timelineInfo: {
    flex: 1,
  },
  timelineEventTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#1a1a1a',
    margin: '0 0 0.5rem 0',
  },
  timelineDate: {
   fontSize: '1rem',
    color: '#CC232E',
    fontWeight: '600',
    margin: 0,

  },
  contactSection: {
    padding: '8rem 0',
    backgroundColor: '#1a1a1a',
    color: 'white',
  },
  contactGrid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    marginTop: '3rem',
  },
  contactCard: {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '2rem',
    color: '#1a1a1a',
    transition: 'all 0.3s ease',
    maxWidth: '400px',
    width: '100%',
  },
  contactCardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1.5rem',
  },
  contactAvatar: {
    width: '60px',
    height: '60px',
    backgroundColor: '#CC232E',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactName: {
    fontSize: '1.3rem',
    fontWeight: '700',
    color: '#1a1a1a',
    margin: '0 0 0.5rem 0',
  },
  contactRole: {
    fontSize: '1rem',
    color: '#666',
    margin: 0,
  },
  contactDetails: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  contactText: {
    fontSize: '1rem',
    color: '#1a1a1a',
  },
  contactLink: {
    fontSize: '1rem',
    color: '#CC232E',
    textDecoration: 'none',
    fontWeight: '500',
  },

  footer: {
    backgroundColor: '#222',
    color: '#fff',
    textAlign: 'center' as const,
    padding: '20px 0',
    position: 'relative' as const,
    bottom: 0,
    width: '100%',
  },


};
