import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactForm from "../components/ContactForm";

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <ContactForm />
        </>
    );
};

export default Home;
