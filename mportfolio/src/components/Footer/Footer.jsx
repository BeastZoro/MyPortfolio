import React from "react";

const Footer = () => {
  return (
    <footer className="footer px-[20px] md:px-[50px] py-[80px] dark:bg-dark dark:text-light-text bg-light text-dark-text flex flex-col items-center justify-between">
      <div className="flex flex-wrap justify-between">
        <div className="max-w-[90%] md:max-w-[50%] space-y-[20px]">
          <h1 className="text-[1.2rem] font-bold">Mukesh Kumar</h1>
          <p className="text-sm">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
        </div>

        <div className="social my-[30px]">
          <div className="contacts text-sm">
            <p className="flex items-center">
              <i className="fa-solid fa-phone mr-[20px]"></i> 7019565874
            </p>
            <p className="flex items-center">
              <i className="fa-regular fa-envelope mr-[20px]"></i>{" "}
              <a href="mailto:beastzoro69@gmail.com">
                beastzoro69@gmail.com
              </a>
            </p>
          </div>

          <div className="my-[20px] flex gap-[20px] items-center">
            <h1 className="text-[] font-semibold capitalize">social : </h1>
            <a href="https://github.com/BeastZoro">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/mukesh-kumar-1b510b16a/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="mailto:beastzoro69@gmail.com">
              <i className="fa-brands fa-google"></i>
            </a>
          </div>
        </div>
      </div>

      <p className="text-xs mt-[10px]">
        &copy; copyright 2023. Made using React and TailwindCss
      </p>
    </footer>
  );
};

export default Footer;
