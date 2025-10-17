import React, { useState, useEffect } from "react";

export default function About() {
  const words = [
    "angad aheer",
    "Data scientist",
    "ML engineer",
    "software developer",
  ];

  const [text, setText] = useState(words[0]); // initial shown text
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let typingSpeed = isDeleting ? 60 : 120; // ms between updates
    const currentIndex = loopNum % words.length;
    const fullText = words[currentIndex];

    let timer = null;

    if (isDeleting) {
      // deleting characters
      if (text.length > 0) {
        timer = setTimeout(() => {
          setText(fullText.substring(0, text.length - 1));
        }, typingSpeed);
      } else {
        // finished deleting -> move to next word
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
      }
    } else {
      // typing characters
      if (text.length < fullText.length) {
        timer = setTimeout(() => {
          setText(fullText.substring(0, text.length + 1));
        }, typingSpeed);
      } else {
        // finished typing -> pause then start deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1200);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, words]);

  return (
    <section
      id="about"
      className="py-5 bg-dark min-vh-100 d-flex align-items-center"
      aria-label="About section"
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left side */}
          <div className="col-md-6 mb-4 mb-md-0">
            {/* Big heading with unique font + color */}
            <h1
              className="fw-bold mb-3"
              style={{
                // font will be imported below via @import in the style tag
                fontFamily:
                  "'Rubik', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
                color: "#0b5ed7", // prefix color (Bootstrap primary-like)
                fontSize: "clamp(2.0rem, 4.5vw, 3.2rem)", // responsive big size
                lineHeight: 1.05,
              }}
            >
              Hello, I am{" "}
              <span
                className="text-capitalize"
                style={{
                  display: "inline-block",
                  marginLeft: "6px",
                  // unique color & stronger weight for the dynamic part
                  color: "#6f42c1",
                  fontWeight: 800,
                }}
              >
                {text}
                <span
                  className="typing-caret"
                  aria-hidden="true"
                  style={{ marginLeft: "6px" }}
                />
              </span>
            </h1>

            <p className="fs-5 text-secondary">
              Passionate about building clean, scalable ML & software solutions —
              I enjoy turning data into product-ready models and user-facing
              apps.
            </p>

            <div className="mt-4">
              <a
                className="btn btn-primary me-3 px-4 py-2 fs-6"
                href="/media/Angad aheer - Resume.pdf"
                download
                role="button"
              >
                Download Resume
              </a>

              <a
                className="btn btn-outline-light px-4 py-2 fs-6"
                href="/media/Angad aheer - Resume.pdf"
                download
                role="button"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right side (image from public folder) */}
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/media/images/my_image.png"
              alt="Angad Aheer"
              className="img-fluid rounded-pill shadow-lg"
              style={{ maxWidth: "280px" }}
            />
          </div>
        </div>
      </div>

      {/* Inline styles: font import, caret blink. This keeps everything inside the component (no external CSS file). */}
      <style>{`
        /* font import (you can alternatively add this to public/index.html <head>) */
        @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;700;800&display=swap');

        /* blinking caret next to the typewriter text */
        .typing-caret {
          display: inline-block;
          width: 2px;
          height: 1.05em;
          background: currentColor;
          vertical-align: middle;
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          50% { opacity: 0; }
        }

        /* small responsive tweak: reduce top/bottom padding on small screens */
        @media (max-width: 576px) {
          section#about { padding-top: 3rem; padding-bottom: 3rem; }
        }
      `}</style>
    </section>
  );
}
