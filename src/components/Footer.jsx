import React from "react";
import {
    AiFillGithub,
    AiFillInstagram,
    AiFillLinkedin,
    AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
    return (
        <footer>
            <div>
                <img
                    src={"https://avatars.githubusercontent.com/ujjwaljamuar"}
                    alt="Founder"
                />

                <h2>Ujjwal Jamuar</h2>
                <p>Motivation is temporary, but discipline last forever.</p>
            </div>

            <aside>
                <h2>Social Media</h2>

                <article>
                    <a
                        href="https://linkedin/in/ujjwal-jamuar"
                        target={"blank"}
                    >
                        <AiFillLinkedin />
                    </a>
                    <a
                        href="https://instagram.com/loneee_wolff_"
                        target={"blank"}
                    >
                        <AiFillInstagram />
                    </a>
                    <a href="https://github.com/ujjwaljamuar" target={"blank"}>
                        <AiFillGithub />
                    </a>
                </article>
            </aside>
            <a href="#home">
                <AiOutlineArrowUp />
            </a>
        </footer>
    );
};

export default Footer;
