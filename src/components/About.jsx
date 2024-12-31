import React from "react";

const About = () => {
    return (
        <section id="about" className="bg-white px-8 py-16">
            <div className="mx-auto text-center container">
                <h2 className="mb-6 font-extrabold text-8xl text-teal-400">About Me</h2>
                <p className="mx-auto mb-8 max-w-3xl text-gray-800 text-lg">
                    Hello! I'm <span className="font-semibold text-teal-400">Gaurav Kumar Singh</span>, a passionate
                    <span className="text-teal-300"> Android Developer</span> and a 3rd-year Computer Science and Engineering
                    student at IIIT Sonepat. My journey in tech began with a deep fascination for mobile applications and
                    their ability to solve real-world problems.
                </p>
                <p className="mx-auto mb-8 max-w-3xl text-gray-800 text-lg">
                    I specialize in building efficient, scalable, and user-friendly Android applications. With a keen eye for
                    detail, I ensure that every app I create is not only functional but also offers a seamless user experience.
                    I am always eager to learn new technologies and improve my skills to stay at the forefront of the ever-evolving
                    tech landscape.
                </p>
                <p className="mx-auto max-w-3xl text-gray-800 text-lg">
                    When I'm not coding, you can find me exploring new ideas, collaborating on innovative projects, or contributing
                    to open-source communities. My goal is to continuously push the boundaries of what's possible with technology,
                    and to create impactful solutions that make a difference in people's lives.
                </p>
            </div>
        </section>
    );
};

export default About;
