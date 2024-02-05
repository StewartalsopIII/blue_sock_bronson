import styles from '../styles/HomePage.module.css'; // Import the CSS module

function HomePage() {
  return (
    <div className={styles.homepage}>
      <div className={styles.homePageBackground}></div>
      <h1 className={styles.title}>Welcome to the Crazy Wisdom Podcast!</h1>
      <p className={styles.description}>
        The Crazy Wisdom Podcast explores the intersection of creativity, madness and society. Join us as we delve into the minds of artists, entrepreneurs, and scientists to uncover what it is that makes us tick.
      </p>
      <p className={styles.description}>
        Discover thought-provoking conversations, inspiring personal stories, and insights into the creative process. Whether you're looking for a spark of inspiration, a new perspective, or a moment of reflection, the Crazy Wisdom Podcast is here to help you navigate the complexities of the modern world.
      </p>
      {/* You can add more content here such as sections, articles, images, etc. */}
    </div>
  );
}

export default HomePage;
