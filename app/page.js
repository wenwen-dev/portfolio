import styles from './page.module.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

const projects = [
  { title: 'project 1', description: 'description 1' },
  { title: 'project 2', description: 'description 2' },
];

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Main />
      {/* <Footer /> */}
      {/* <About /> */}
      {/* <Projects projects={projects} /> */}
      {/* <Contact /> */}
    </div>
  );
}
