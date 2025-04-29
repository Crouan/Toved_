"use client";

import { useRef } from "react";

import ReactLenis from "@studio-freight/react-lenis";
import Nav from "@/app/components/NavHome";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP);

export default function Home() {
  const container = useRef();

  useGSAP(
    () => {
      const heroText = new SplitType(".home h1", {types: "chars"});
      gsap.set(heroText.chars, {y: 400});

      gsap.to(heroText.chars, {
        y:0,
        duration: 1,
        stagger:0.075,
        ease: "power4.out",
        delay: 1,
      })
    }
  )

  return (
    <ReactLenis root>
    <Nav/>
    <div className="home">  
        <h1>Toved</h1>
            <main id="main-content">
                <div className="overlay-container">
                    <div className="overlay"></div>
                    <div className="page-content">
                        <div id="home-media">
                            <div id="media-play-container">
                                <a id="media-play" href="/video/introduction">
                                    <div id="play-icon-container">
                                        <div id="play-icon">
                                            <svg viewBox="0 0 42 42">
                                                <circle cx="21" cy="21" r="19" stroke="#fff" fill="none"/>
                                                <path d="M27.5,21L17,27.063V14.937L27.5,21z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div id="play-text-container">
                                        <div className="text-line-container">
                                            <div className="text-line">PLAY</div>
                                        </div>
                                        <div className="text-line-container">
                                            <div className="text-line">THE FILM</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div id="create-curator">
                                <div id="creator-curator-section">
                                    <div className="text-line-container">
                                        <div className="text-line">CREATOR</div>
                                    </div>
                                    <div className="text-line-container">
                                        <div className="text-line">CURATOR</div>
                                    </div>
                                </div>
                                <div id="locations-section">
                                    <div className="text-line-container">
                                        <div className="text-line">NEW YORK</div>
                                    </div>
                                    <div className="text-line-container">
                                        <div className="text-line">LOS ANGELES</div>
                                    </div>
                                </div>
                            </div>
                      </div>
                  </div>
              </div>
          </main>
    </div>
    </ReactLenis>
  );
}
