import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className=" py-2 border-t h-[4rem] border-divider flex justify-center  w-full z-40 px-6">
      <div className="flex items-center max-w-[1024px] w-full justify-between px-3">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://vigneshgupta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:no-underline underline-offset-4 font-semibold"
          >
            Vignesh Gupta
          </a>
          . All Rights Reserved.
        </p>

        <div accessKey="2" className="flex gap-3 text-xl">
          <a
            target="_blank"
            aria-label="LinkedIn Link"
            href="https://linkedin.com/in/vigneshgupta/"
            className="text-foreground"
          >
            <BsLinkedin />
          </a>

          <a
            target="_blank"
            aria-label="GitHub Link"
            href="https://github.com/vignesh-gupta/"
            className="text-foreground"
          >
            <BsGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
