/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-unused-vars */

import React ,{useState} from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import logo from "./edusity_assets/logo.png";
import user1 from "./edusity_assets/user-1.png";
import user2 from "./edusity_assets/user-2.png";
import user3 from "./edusity_assets/user-3.png";
import user4 from "./edusity_assets/user-4.png";
import { animated,useSpring } from "@react-spring/web";
import email from "./edusity_assets/mail-icon.png";
import phone from "./edusity_assets/phone-icon.png";
import location from "./edusity_assets/location-icon.png"
import program1 from "./edusity_assets/program-icon-1.png";
import program2 from "./edusity_assets/program-icon-2.png";
import program3 from "./edusity_assets/program-icon-3.png";
import image1 from "./edusity_assets/menu_open.svg";


const App = () =>
{ 
  let [, setResult] = useState("");
  let [bool, setbool]=useState(true);
  let [springs, api] = useSpring(() => ({
    from:
    {
        translateX:"0%"
      }
  }))
  
  
  let next = () =>
  {
    api.start({
      from: {
        translateX: "0%",
      },
      to: {
        translateX: "-50%",
      },
    });
   }
  
  let back = () =>
  {
    api.start({
      from: {
        translateX: "-50%",
      },
      to: {
        translateX: "00%",
      },
    });
  }

  let [springs1, api1] = useSpring(() => ({
    from: {
      height: "0px",
    },
  }));

const onSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  formData.append("access_key", "47bd7ea9-4143-497b-86c1-a3b133f7f8fc");

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (data.success) {
    alert("Form Submitted Successfully");
    event.target.reset();
  } else {
    console.log("Error", data);
    setResult(data.message);
  }
}
  
  let handleclick = () =>
  {
    if (bool)
    {
      api1.start
        (
          {
            from:
            {
              height: "0px"
            },
            to:
            {
              height: "500px"
            }
          }
      );
      setbool(false);
    }
    else
    {
      api1.start({
        from: {
          height: "500px",
        },
        to: {
          height: "0px",
        },
      });
      setbool(true);
     }
  }
  
  return (
    <div className="back-12">
      <div class="background h-full w-full back-12">
        <div class="background2 h-full w-full flex flex-col">
          <div class="flex flex-row items-center justify-around height2 ">
            <img src={logo} class="h-8" alt="Graduation picture" />
            <div class="flex justify-around back items-center">
              <img src={image1} alt="menu-open" class="brick2" onClick={handleclick} />
              <animated.div className="flex flex-row items-center justify-around brick w-full" style={{
                transition: "all 0.1s linear",
                ...springs1
              }}>
              <p className="text-white">Home</p>
              <p className="text-white">Progarm</p>
              <p className="text-white">About us</p>
              <p className="text-white">Testimonials</p>
              <button class="bg-white text-black border-none p-2 w-32 rounded-full">
                Contact Us
                </button>
                </animated.div>
            </div>
          </div>
          <div class="height1 flex flex-col justify-center items-center class1" >
            <h1 class="font-serif text-center text-6xl text-white font-bold font-serif">
              We Ensure better education
              <br />
              for a better world
            </h1>
            <br />
            <p className="text-center text-white">
              Our cutting-edge curriculum is designed to empower students with
              the knowledge, skills,and
              <br />
              experiences needed to excel in the dynamic field of education
            </p>
            <br />
            <button class="bg-white p-3 rounded-full w-40">
              Explore more <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <h1 className="text-blue-900 text-center text-base font-bold">
        OUR PROGRAM
      </h1>
      <br />
      <h1 class="font-bold text-4xl text-center">What We Offer</h1>
      <br />
      <br />
      <br />
      <div className="flex flex-row justify-center items-center pound1 ">
        <div class="flex justify-around gap-16 pound2 brick3">
          <div className="pound  rounded-md flex flex-col justify-center items-center">
            <div className="back1 rounded-md h-full w-full flex flex-col justify-center items-center back21">
              <div className="flex flex-col justify-center items-center back25">
                <img src={program1} class="h-24" alt="program-icon" />
                <p class="text-lg font-bold text-white">Graduation Degree</p>
              </div>
            </div>
          </div>
          <div className="pound  rounded-md flex flex-col justify-center items-center">
            <div className="back1 rounded-md h-full w-full flex flex-col justify-center items-center back21">
              <div className="flex flex-col justify-center items-center back25">
                <img src={program2} class="h-24" alt="program-icon" />
                <p class="text-lg font-bold text-white">Masters Degree</p>
              </div>
            </div>
          </div>
          <div className="pound  rounded-md flex flex-col justify-center items-center">
            <div className="back1 rounded-md h-full w-full flex flex-col justify-center items-center back21">
              <div className="flex flex-col justify-center items-center back25">
                <img src={program3} class="h-24" alt="program-icon" />
                <p class="text-lg font-bold text-white">Post graduation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div class="flex flex-row gap-8 flex justify-center pound3 brick4">
        <div className="h-96 w-96 back10 rounded-md flex justify-center"></div>
        <div className="flex flex-col h-96 par1">
          <h1 class="text-md font-bold text-blue-900 ">ABOUT UNIVERSITY</h1>
          <h1 className="text-3xl font-bold">
            Nurturing Tomorrow`s
            <br />
            Leaders Today
          </h1>
          <p className="text-left">
            Embark on a transformative educational journey with our university`s
            comprehensive
            <br />
            Education programs. Our cutting-edge curriculum is designed to
            empower students
            <br />
            with the knowledge, skills and experiences needed to excel in the
            dynamic field of
            <br />
            education.
          </p>
          <br />
          <p className="text-left">
            With a focus on innovative, hands-on learning, and personalized
            mentorship, our
            <br />
            programs prepare aspiring educators to make a meaningful impact in
            classrooms,
            <br />
            schools, and communities.
          </p>
          <br />
          <p className="text-left">
            Whether you aspire to become a teacher, administrator, counselor or
            educational
            <br />
            leader, our diverse range of programs offers the perfect pathway to
            achieve your
            <br />
            goals and unlock your full potential in shaping the future of
            education
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <h1 className="text-blue-900 text-center text-base font-bold">
        {" "}
        GALLERY
      </h1>
      <h1 class="font-bold text-4xl text-center">Campus Photos</h1>
      <br />
      <br />
      <br />
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row items-center justify-center gap-5 pound5 brick5">
          <div className="h-96 w-72 rounded-md round1"></div>
          <div className="h-96 w-72 rounded-md round1"></div>
          <div className="h-96 w-72 rounded-md round1"></div>
          <div className="h-96 w-72 rounded-md round1"></div>
        </div>
        <br />
        <br />
        <button class="bg-blue-900 text-white p-3 rounded-full w-40 ">
          See more here <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h1 className="text-blue-900 text-center text-base font-bold">
        {" "}
        TESTIMONIALS
      </h1>
      <br />
      <h1 class="font-bold text-4xl text-center">What Students Say</h1>
      <br />
      <br />
      <br />
      <br />
      <div className="flex flex-row align-center justify-center gap-10 h-96">
        <button
          style={{ marginTop: "100px" }}
          onClick={back}
          className="w-10 h-10 rounded-full bg-blue-900 text-white brick9"
        >
          <i class="fa-solid fa-arrow-left"></i>
        </button>
        <div className="overflow-hidden decoration-white bg-white flex flex-row  items-center">
          <animated.div
            className="carousel flex flex-row  items-center gap-4 brick7"
            style={{ ...springs }}
          >
            <div className="card flex flex-col shadow-xl p-5 rounded-md ">
              <div class="flex  gap-2">
                <img
                  src={user1}
                  alt="profile-picture"
                  className="h-12 w-12 rounded-full border- border-blue-900"
                />
                <div class="flex flex-col">
                  <h1 className="text-blue-900 font-bold">Emily Williams</h1>
                  <h1>Edusity, USA</h1>
                  <br />
                  <p>
                    Choosing to pursue my degree at Edusity was one of the
                    <br />
                    best decisions I`ve ever made. The supportive community,
                    <br />
                    state-of-the-art facilties and commitment to academic
                    <br />
                    excellence have truly exceeded my expectations
                  </p>
                </div>
              </div>
            </div>
            <div className="card flex flex-col shadow-xl p-5 rounded-md ">
              <div class="flex  gap-2">
                <img
                  src={user2}
                  alt="profile-picture"
                  className="h-12 w-12 rounded-full border- border-blue-900"
                />
                <div class="flex flex-col">
                  <h1 className="text-blue-900 font-bold">Emily Williams</h1>
                  <h1>Edusity, USA</h1>
                  <br />
                  <p>
                    Choosing to pursue my degree at Edusity was one of the
                    <br />
                    best decisions I`ve ever made. The supportive community,
                    <br />
                    state-of-the-art facilties and commitment to academic
                    <br />
                    excellence have truly exceeded my expectations
                  </p>
                </div>
              </div>
            </div>
            <div className="card flex flex-col shadow-xl p-5 rounded-md ">
              <div class="flex  gap-2">
                <img
                  src={user3}
                  alt="profile-picture"
                  className="h-12 w-12 rounded-full border- border-blue-900"
                />
                <div class="flex flex-col">
                  <h1 className="text-blue-900 font-bold">Emily Williams</h1>
                  <h1>Edusity, USA</h1>
                  <br />
                  <p>
                    Choosing to pursue my degree at Edusity was one of the
                    <br />
                    best decisions I`ve ever made. The supportive community,
                    <br />
                    state-of-the-art facilties and commitment to academic
                    <br />
                    excellence have truly exceeded my expectations
                  </p>
                </div>
              </div>
            </div>
            <div className="card flex flex-col shadow-xl p-5 rounded-md ">
              <div class="flex  gap-2">
                <img
                  src={user4}
                  alt="profile-picture"
                  className="h-12 w-12 rounded-full border- border-blue-900"
                />
                <div class="flex flex-col">
                  <h1 className="text-blue-900 font-bold">Emily Williams</h1>
                  <h1>Edusity, USA</h1>
                  <br />
                  <p>
                    Choosing to pursue my degree at Edusity was one of the
                    <br />
                    best decisions I`ve ever made. The supportive community,
                    <br />
                    state-of-the-art facilties and commitment to academic
                    <br />
                    excellence have truly exceeded my expectations
                  </p>
                </div>
              </div>
            </div>
          </animated.div>
        </div>
        <button
          style={{ marginTop: "100px" }}
          onClick={next}
          className="w-10 h-10 rounded-full bg-blue-900 text-white brick9"
        >
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <h1 className="text-blue-900 text-center text-base font-bold">
        CONTACT US
      </h1>
      <h1 class="font-bold text-3xl text-center">Get in Touch</h1>
      <br />
      <br />
      <br />
      <div class="flex justify-center items-center">
        <div class="flex flex-row gap-52 pound6 brick6">
          <div className="pound7">
            <h1 className="text-3xl text-blue-900 font-semibold">
              Send us a message
            </h1>
            <br />
            <p>
              Feel free to reach out through contact form or find our contact
              <br />
              information below. Your feedback, questions and suggestions
              <br />
              are important to us as we strive to provide exceptional service
              <br />
              to our university community
            </p>
            <br />
            <div class="flex">
              <img class="h-5" src={email} />
              <p> Wrightgichana@gmail.com</p>
            </div>
            <br />
            <div class="flex">
              <img class="h-5" src={phone} />
              <p> 254714471627</p>
            </div>
            <br />
            <div class="flex">
              <img class="h-5" src={location} />
              <p>Mombasa, Kenya</p>
            </div>
          </div>
          <form className="flex flex-col" onSubmit={onSubmit}>
            <label>Your name</label>
            <input
              type="text"
              placeholder="Enter you name"
              class="p-3 border-none outline-none bg-blue-100  text-black"
              name="name"
            />
            <br />
            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="Enter you mobile number"
              class="p-3 border-none outline-none bg-blue-100 text-black"
              name="telephone"
            />
            <br />
            <label>Write your message here</label>
            <textarea
              placeholder="Enter your message"
              className=" h-40 p-3 bg-blue-100 resize-none outline-none"
              name="message"
            ></textarea>
            <br />
            <input
              type="submit"
              className="w-32 p-3 rounded-full bg-blue-900 text-white"
            />
          </form>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div class="flex justify-center items-center pound10">
        <div class="border-t-2 border-black ">
          <div className="flex flex-row justify-between pound9">
            <p>Copyright 2024 Edusity. All rights reserved</p>
            <div className="w-72 flex justify-between pound11">
              <p>Terms of service</p>
              <p>Privacy policy</p>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
 

const body = document.querySelector("body");
const root = createRoot(body);
root.render(<App />);