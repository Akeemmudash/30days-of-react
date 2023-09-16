// import React, { useState } from 'react'
import Picture from "./Components/images/Profile.png";
import MailIcon from "./Components/images/mail-icon.svg";
import Facebook from "./Components/images/facebook-icon.svg";
import Github from "./Components/images/github-icon.svg";
import Instagram from "./Components/images/instagram-icon.svg";
import Twitter from "./Components/images/twitter-icon.svg";
import Linkedin from "./Components/images/linkedin-icon.svg";

const Head = () => {
  return (
    <picture>
      <img src={Picture} alt="Profile" className="w-full h-full object-cover" />
    </picture>
  );
};
const Button = ({ children, value, className }) => {
  return (
    <button className={
      "flex justify-center items-center px-3 py-1 " + className.join(" ")
    }>
        {children} {value}
    </button>
  );
};
const Body = ({children, lightMode}) => {
  return (
    <section className="card-body px-8 py-4">
      <hgroup className="text-center">
        <h2 className="text-3xl font-bold">Laura Smith</h2>
        <h4 className="text-orange-300 mb-1 font-normal">Frontend Developer</h4>
        <h6 className="text-sm text-slate-200 font-light">
          <a href="#Site" className={lightMode && "text-black"}>laurasmith.website</a>
        </h6>
      </hgroup>
     <ButtonBox>
       {children}
     </ButtonBox>
      <section className="mb-5">
        <h3 className="text-xl font-semibold mb-1">About</h3>
        <p className="text-xs leading-5">
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
      </section>
      <section className="">
        <h3 className="text-xl font-semibold mb-1">Interests</h3>
        <p className="text-xs leading-5">
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.{" "}
        </p>
      </section>
    </section>
  );
};
const Card = ({children,lightMode=false}) => {
  return (
    <div className={"card max-w-screen-xs  rounded-xl my-3 overflow-hidden" + (lightMode? " bg-neutral-100" : " bg-neutral-900  text-white ")}>
          <Head />
          <Body lightMode={lightMode}>
        {children}
          </Body> 
      <Footer lightMode={lightMode}/> 
    </div>
  );
};

const App = () => {
  return (
    <div className="flex  justify-around items-center min-h-screen flex-wrap">
    <Card lightMode={true}> 
  
    <Button
          value="Email"
          className={["text-black", "bg-white", "rounded-md","w-1/2"]}
        >
          <img src={MailIcon} alt="Mail Icon" className="me-2" />
        </Button>
        <Button 
          value="LinkedIn"
          className={[
            "text-white",
            "bg-sky-600",
            "rounded-md",
            "w-1/2",
            "ms-3",
          ]}
        >
          <img src={Linkedin} alt="LinkedIn Icon" className="me-2" />
        </Button>
   
    </Card>
    <Card> 
  
    <Button
          value="Email"
          className={["text-black", "bg-white", "rounded-md","w-1/2"]}
        >
          <img src={MailIcon} alt="Mail Icon" className="me-2" />
        </Button>
        <Button 
          value="LinkedIn"
          className={[
            "text-white",
            "bg-sky-600",
            "rounded-md",
            "w-1/2",
            "ms-3",
          ]}
        >
          <img src={Linkedin} alt="LinkedIn Icon" className="me-2" />
        </Button>
   
    </Card>
    <Card >
    <Button
          value="Email"
          className={["text-black", "bg-white", "rounded-md","w-full"]}
        >
          <img src={MailIcon} alt="Mail Icon" className="me-2" />
        </Button>

    </Card>
    <Card lightMode={true} >
    <Button
          value="Email"
          className={["text-black", "bg-white", "rounded-md","w-full"]}
        >
          <img src={MailIcon} alt="Mail Icon" className="me-2" />
        </Button>

    </Card>

    </div>
  );
};

const Footer = ({lightMode}) => {
  return (
    <footer className={"flex justify-center gap-6 py-5" +  (lightMode? " bg-slate-300" : "  bg-neutral-950")}>
      <Icon icon={Twitter} />
      <Icon icon={Facebook} />
      <Icon icon={Instagram} />
      <Icon icon={Github} />
    </footer>
  );
};

const Icon = ({ icon }) => {
  return (
    <div className="social-icon">
      <img src={icon} alt={"social icon"} className="w-8" />
    </div>
  );
};
const ButtonBox =({children})=>{
  return(<div className="buttons mt-5 mb-5 text-center flex">
 {children}
</div>)

}
export default App;
