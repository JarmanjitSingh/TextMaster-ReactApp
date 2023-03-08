import React from "react";

export default function About() {
  return (
    <>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              About TextMaster
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              "Welcome to TextMaster! We're thrilled to introduce our innovative
              new React app designed to make your text editing experience easier
              and more efficient. Our app is designed with a simple,
              user-friendly interface, allowing you to effortlessly convert your
              text into upper case, lower case, and remove any extra spaces.
              Whether you're a professional writer, a student, or simply need to
              format text for personal use, TextMaster is here to help. With its
              powerful features, you can save time and improve the overall
              quality of your work. Try TextMaster today and experience the
              convenience of quick and efficient text editing. We're confident
              you'll love it!"
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              About Developer
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              "Hello! I am Jarmanjit Singh, a talented Front-end Developer with
              a passion for creating visually appealing and functional web
              applications. I am proud to say that TextMaster is my first React
              app and I am thrilled to bring my skills and knowledge to the
              world of software development. With a strong background in HTML,
              CSS, Bootstrap, and ReactJS, I have the skills and experience
              necessary to turn complex concepts into easy-to-use, user-friendly
              applications. In addition to my Front-end Development expertise, I
              also have experience in software testing and IT administration.
              From September 2021 to present, I have honed my skills in these
              areas, gaining a deep understanding of how to create, implement,
              and maintain high-quality software systems. I am committed to
              providing my clients with the highest level of service and
              delivering innovative solutions that meet their unique needs. I am
              excited to bring my experience, passion, and skills to the table,
              and I look forward to the opportunity to collaborate with others
              to create cutting-edge applications that push the boundaries of
              what's possible. Thank you for considering me for your Front-end
              Development needs."
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Contact me
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              "If you're interested in working with me, Jarmanjit Singh, on your
              next Front-end Development project, please don't hesitate to
              contact me. I would be happy to discuss your needs and see how I
              can help bring your vision to life. You can reach me at the
              following details:
              <div>Email: <a href="https://mail.google.com/" rel="noreferrer" target="_blank">jarmanjits176@gmail.com</a> </div>
              <div>Phone: (+91) 6239724933</div>
              <div>LinkedIn: <a href="https://www.linkedin.com/in/jarmanjit-singh-029452256/" rel="noreferrer" target="_blank">JarmanjitlinkedIn</a> </div> I look
              forward to the opportunity to bring my skills, experience, and
              passion to your project and help you achieve your goals. Thank you
              for considering me for your Front-end Development needs."
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
