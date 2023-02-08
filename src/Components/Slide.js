import React from "react";
import styles from "../Components/Slide.module.css";

const Slide = ({ slides }) => {
  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef();

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * active));
  }, [active]);

  function slidePrev() {
    if (active > 0) setActive(active - 1);
  }

  function slideNext() {
    if (active < slides.length - 1) setActive(active + 1);
  }

  return (
    <section className={styles.container}>
      <div
        ref={contentRef}
        className={styles.content}
        style={{ transform: `translate(${position}px)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className={styles.item}>
            <img
              key={slide.id}
              src={slide.image}
              alt={slide.id}
              className={styles.img}
            />
          </div>
        ))}
      </div>

      <nav className={styles.nav}>
        <button onClick={slidePrev} className={styles.btn}>
          Prev
        </button>
        <button onClick={slideNext} className={styles.btn}>
          Next
        </button>
      </nav>
    </section>
  );
};

export default Slide;
