"use client";
import { useTransitionRouter } from "next-view-transitions";


const Nav = () => {
    const router = useTransitionRouter();

    function slideInOut(){
        document.documentElement.animate([
            {
                opacity: 1,
                transform: "translateY(0)",
            },
            {
                opacity: 0.2,
                transform: "translateY(-35%)",
            },
        ],  {
            duration: 1500,
            easing: "cubic-bezier(0.87, 0, 0.13, 1)",
            fill: "forwards",
            pseudoElement: "::view-transition-old(root)",
        });

        document.documentElement.animate([
            {
                clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            },
            {
                clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            }
        ],  {
            duration: 1500,
            easing: "cubic-bezier(0.87, 0, 0.13, 1)",
            fill: "forwards",
            pseudoElement: "::view-transition-new(root)",
        });
    }

    return(
        <nav id="navbar">
            <a 
                id="logo" 
                href="/"
                onClick={(e) => {
                    e.preventDefault();
                    router.push("/", { onTransitionReady: slideInOut });
                }}
            >
                <img src="/logo-Toved-White.png" alt="Logo Toved"/>
            </a>
            <a 
                id="menu-open" 
                href="/menu"
                onClick={(e) => {
                    e.preventDefault();
                    router.push("/menu", { onTransitionReady: slideInOut });
                }}
            >
                <div className="menu-text-container">
                    <div className="menu-text">MENU</div>
                </div>
            </a>
        </nav>


    );
};

export default Nav;
