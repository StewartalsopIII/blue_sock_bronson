import styles from '../styles/About.module.css';
import teamCollage from '../assets/teamCollage.png'; // Ensure the image file is named correctly and placed in your project

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Hey! We're Your Company 😊</h1>
        <p>We’re an optimistic and gratitude-filled group of remote workers
        scattered around the world and dedicated to creating a product our
        customers will use and love.</p>
        <p>Read on to learn more about our story and history and see the
        full team.</p>
      </header>
      <div className={styles.photoCollage}>
        <img src={teamCollage} alt="Our Team" className={styles.collageImage} />
      </div>
    </div>
  );
};

export default AboutPage;
