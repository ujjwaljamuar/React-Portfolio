import { motion } from "framer-motion";
import { SiSpringboot } from "react-icons/si";
import { FaPython, FaJava, FaReact } from "react-icons/fa";

const Services = () => {
    const animations = {
        whileInView: {
            x: 0,
            y: 0,
            opacity: 1,
        },
        one: {
            opacity: 0,
            x: "-100%",
        },
        twoAndThree: {
            opacity: 0,
            y: "-100%",
        },

        four: {
            opacity: 0,
            x: "100%",
        },
    };

    return (
        <div id="services">
            <h2>Skills</h2>
            <section>
                <motion.div
                    className="serviceBox1"
                    whileInView={animations.whileInView}
                    initial={animations.one}
                >
                    <h3>2+</h3>
                    <p>Years Experience</p>
                </motion.div>

                <motion.div
                    className="serviceBox2"
                    whileInView={animations.whileInView}
                    initial={animations.twoAndThree}
                >
                    <FaReact />
                    <span>MERN</span>
                </motion.div>

                <motion.div
                    className="serviceBox3"
                    whileInView={animations.whileInView}
                    initial={animations.twoAndThree}
                    transition={{
                        delay: 0.2,
                    }}
                >
                    <SiSpringboot />
                    <span>SpringBoot</span>
                </motion.div>

                <motion.div
                    className="serviceBox4"
                    whileInView={animations.whileInView}
                    initial={animations.four}
                >
                    <FaJava />
                    <span>Java</span>
                </motion.div>

                <motion.div
                    className="serviceBox5"
                    whileInView={animations.whileInView}
                    initial={animations.four}
                >
                    <FaPython />
                    <span>Python</span>
                </motion.div>
            </section>
        </div>
    );
};

export default Services;
