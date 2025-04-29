"use client";

import { useEffect } from "react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import "../css/projects.css";

const Slider = () => {
  useEffect(() => {
    gsap.registerPlugin(CustomEase);
    CustomEase.create(
      "hop",
      "M0,0 C0.071,0.505 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1"
    );

    const sliderImages = document.querySelector(".slider-images");
    const counter = document.querySelector(".counter");
    const titles = document.querySelector(".slider-title-wrapper");
    const indicators = document.querySelectorAll(".slider-indicators p");
    const prevSlides = document.querySelectorAll(".slider-preview .preview");
    const sliderPreview = document.querySelector(".slider-preview");

    let currentImg = 1;
    const totalSlides = 5;
    let indicatorRotation = 0;

    const updateCounterAndTitlePosition = () => {
      gsap.to(counter, { y: -20 * (currentImg - 1), duration: 1, ease: "hop" });
      gsap.to(titles, { y: -60 * (currentImg - 1), duration: 1, ease: "hop" });
    };

    const updateActiveSliderPreview = () => {
      prevSlides.forEach((prev) => prev.classList.remove("active"));
      prevSlides[currentImg - 1].classList.add("active");
    };

    const animateSlide = (direction) => {
      const images = document.querySelectorAll(".img");
      const currentSlide = images[images.length - 1];
      const slideImg = document.createElement("div");
      slideImg.classList.add("img"); 
      const slideImgElem = document.createElement("img");
      slideImgElem.src = `/img${currentImg}.jpg`;
      gsap.set(slideImgElem, { x: direction === "left" ? -300 : 300 });
      slideImg.appendChild(slideImgElem);
      sliderImages.appendChild(slideImg);

      gsap.to(currentSlide.querySelector("img"), { x: direction === "left" ? 300 : -300, duration: 1.5, ease: "power4.out" });
      gsap.fromTo(slideImg, { clipPath: direction === "left" ? "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" : "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)" }, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1.5, ease: "power4.out" });
      gsap.to(slideImgElem, { x: 0, duration: 1.5, ease: "power4.out" });

      indicatorRotation += direction === "left" ? -90 : 90;
      gsap.to(indicators, { rotate: indicatorRotation, duration: 1, ease: "hop" });
    };

    document.addEventListener("click", (event) => {
      const sliderWidth = document.querySelector(".slider").clientWidth;
      const clickPosition = event.clientX;

      if (sliderPreview.contains(event.target)) {
        const clickedPrev = event.target.closest(".preview");
        if (clickedPrev) {
          const clickedIndex = Array.from(prevSlides).indexOf(clickedPrev) + 1;
          if (clickedIndex !== currentImg) {
            currentImg = clickedIndex;
            animateSlide(clickedIndex < currentImg ? "left" : "right");
            updateActiveSliderPreview();
            updateCounterAndTitlePosition();
          }
        }
        return;
      }

      if (clickPosition < sliderWidth / 2 && currentImg !== 1) {
        currentImg--;
        animateSlide("left");
      } else if (clickPosition > sliderWidth / 2 && currentImg !== totalSlides) {
        currentImg++;
        animateSlide("right");
      }

      updateActiveSliderPreview();
      updateCounterAndTitlePosition();
    });
  }, []);

  return (
    <div className="slider">
      <div className="slider-images">
        <div className="img"><img src="/DSC05692.jpg" alt="" /></div>
      </div>

      <div className="slider-title">
        <div className="slider-title-wrapper">
        <p><a href="">Blender</a></p>
        <p><a href="">Premiere Pro</a></p>
        <p><a href="">Vs Code</a></p>
        <p><a href="">Figma</a></p>
        <p><a href="">Lightroom</a></p>
        </div>
      </div>

      <div className="slider-counter">
        <div className="counter">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
        </div>
        <div><p>&mdash;</p></div>
        <div><p>5</p></div>
      </div>

      <div className="slider-preview">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className={`preview ${i === 1 ? "active" : ""}`}>
            <img src={`/img${i}.jpg`} alt="" />
          </div>
        ))}
      </div>

      <div className="slider-indicators">
        <p>+</p>
        <p>+</p>
      </div>
    </div>
  );
};

export default Slider;
