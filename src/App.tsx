import React, { useState } from "react";
import { Main, Section, Pagination, Dot } from "./components";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Shop from "./Pages/Shop";
import Hair from "./Pages/Hair";
import NewLocation from "./Pages/NewLocation";

const pages = [Shop, Hair, NewLocation];

function App() {
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [ref1, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    drag: false,
    slides: {
      origin: "center",
      perView: 1,
      spacing: 0,
    },
    vertical: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  const [ref2, instanceRef2] = useKeenSlider<HTMLDivElement>({
    initial: pages.length - 1,
    loop: true,
    drag: false,
    slides: {
      origin: "center",
      perView: 1,
      spacing: 0,
    },
    vertical: true,
  });

  return (
    <Main>
      <Section>
        <div ref={ref1} className="keen-slider">
          {pages.map((page, i) => (
            <React.Fragment key={`left-${i}`}>{page[0]()}</React.Fragment>
          ))}
        </div>
        <div ref={ref2} className="keen-slider">
          {/* the reverse function cause some weirde behaviore so just clone the array */}
          {[...pages].reverse().map((page, i) => (
            <React.Fragment key={`left-${i}`}>{page[1]()}</React.Fragment>
          ))}
        </div>
      </Section>
      <Pagination direction="vertical">
        {loaded &&
          instanceRef.current &&
          [
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((_, i) => (
            <Dot
              key={i}
              onClick={() => {
                instanceRef.current?.moveToIdx(i);
                instanceRef2.current?.moveToIdx(pages.length - 1 - i);
              }}
              active={currentSlide === i}
            />
          ))}
      </Pagination>
    </Main>
  );
}

export default App;
