import styles from './page.module.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Logo from './components/Logo/Logo';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Header>
        <Logo />
      </Header>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
