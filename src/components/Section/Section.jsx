import style from './Section.module.css';

const Section = ({ children, title }) => {
  return (
    <section className={title ? style.baseSection : style.superSection}>
      {title && <h1>{title}</h1>}
      {children}
    </section>
  );
};

export default Section;
