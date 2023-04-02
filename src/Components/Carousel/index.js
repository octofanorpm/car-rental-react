import "./style.css"
import React from "react";
import { useSnapCarousel } from "react-snap-carousel";

const AdvancedCarousel = () => {
  const { scrollRef, pages, activePageIndex, next, prev, goTo } =
    useSnapCarousel();
  return (
    <>
      <ul
        ref={scrollRef}
        style={{
          display: "flex",
          overflow: "auto",
          scrollSnapType: "mandatory",
        }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <li
            style={{
              borderRadius: "8px",
              backgroundColor: "#F1F3FF",
              margin: "16px",
              fontSize: "50px",
              width: "600px",
              height: "250px",
              flexShrink: 0,
              color: "#000",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Item {i}
          </li>
        ))}
      </ul>
      {/* <div>
        {activePageIndex + 1} / {pages.length}
      </div> */}
      <div className="carstyle">
        <button class="d-flex align-items-center justify-content-center btncar me-3" onClick={() => prev()}>
            <span className="iconstyle">&lsaquo;</span>
        </button>
      <button class="d-flex align-items-center justify-content-center btncar" onClick={() => next()}>
            <span className="iconstyle">&rsaquo;</span>
        </button>
      </div>
      {/* <ol style={{ display: "flex" }}>
        {pages.map((_, i) => (
          <li key={i}>
            <button
              class="" style={i === activePageIndex ? { opacity: 0.5 } : {}}
              onClick={() => goTo(i)}
            >
              {i + 1}
            </button>
          </li>
        ))}
      </ol> */}
    </>
  );
};

export default AdvancedCarousel;
