import React from "react";

const Hero = () => {
  return (
    <>
      {/*Hero*/}
      <div className="h-[100vh] bg-[#F5F7FA] flex shadow-md">
        <div className="flex justify-between items-center mx-48 w-full">
          <div
            class="left"
            className="flex flex-col gap-5 my-[10px] h-[194hug]"
          >
            <div className="leading-9">
              <h1 className="font-semibold text-5xl text-[#4D4D4D]">
                Lessons and insights
              </h1>

              <h1 className="font-semibold text-5xl text-[#4CAF4F] mt-2">
                from 8 years
              </h1>
            </div>
            <p className="text-[#717171]">
              Where to grow your business as a photographer: site or social
              media?
            </p>

            <div>
              <button className="bg-[#4CAF4F] py-2 px-4 rounded text-white">
                Register
              </button>
            </div>
          </div>
          <div class="right" className="">
            <img src="./Illustration.svg" alt="" className="" />
          </div>
        </div>
      </div>

      {/*Clients*/}
      <div className="shadow-md">
        <div class="up" className="flex flex-col gap-10 items-center">
          <div className="flex flex-col gap-2 justify-center items-center mt-8">
            <h1 className="font-semibold text-3xl text-[#4D4D4D]">
              Our Clients
            </h1>
            <p className="text-[#717171] text-sm">
              We have been working with some Fortune 500+ clients
            </p>
          </div>
          <div className="flex justify-between  items-center gap-28">
            <img src="./CL1.svg" alt="" />
            <img src="./CL2.svg" alt="" />
            <img src="./CL3.svg" alt="" />
            <img src="./CL4.svg" alt="" />
            <img src="./CL5.svg" alt="" />
            <img src="./CL6.svg" alt="" />
            <img src="./CL7.svg" alt="" />
          </div>
        </div>
        <div
          class="down"
          className="flex flex-col items-center justify-center gap-16 w-full mt-10"
        >
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[#4D4D4D] font-semibold text-3xl">
              Manage your entire community in a
            </h1>
            <h1 className="text-[#4D4D4D] font-semibold text-3xl">
              in a single system
            </h1>
            <p className="mt-2 text-sm text-[#717171]">
              Who is Nextcent suitable for?
            </p>
          </div>
          <div className="grid grid-cols-3 gap-48 mx-48 justify-between">
            <div className="flex flex-col text-center items-center gap-2 grid-cols-4 shadow-md rounded">
              <div className="flex flex-col justify-center items-center gap-1 pt-4">
                <img src="./member.svg" alt="" />
                <h1 className="text-[#4D4D4D] font-semibold text-2xl">
                  Membership Organisation
                </h1>
              </div>
              <div className="text-center">
                <p className="text-sm text-[#717171] px-4 pb-4">
                  Our membership management software provides full automation of
                  membership renewals and payments
                </p>
              </div>
            </div>
            <div className="flex flex-col text-center items-center gap-2 grid-cols-4 shadow-md rounded">
              <div className="flex flex-col justify-center items-center gap-1 pt-4">
                <img src="./national.svg" alt="" />
                <h1 className="text-[#4D4D4D] font-semibold text-3xl">
                  National Associations
                </h1>
              </div>
              <div className="text-center">
                <p className="text-sm text-[#717171] px-4 pb-4">
                  Our membership management software provides full automation of
                  membership renewals and payments
                </p>
              </div>
            </div>
            <div className="flex flex-col text-center items-center gap-2 grid-cols-4 shadow-md rounded">
              <div className="flex flex-col justify-center items-center gap-1 pt-4">
                <img src="./club.svg" alt="" />
                <h1 className="text-[#4D4D4D] font-semibold text-3xl">
                  Clubs And Groups
                </h1>
              </div>
              <div className="text-center">
                <p className="text-sm text-[#717171] px-4 pb-4">
                  Our membership management software provides full automation of
                  membership renewals and payments
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center my-8 mx-48">
          <img src="./rafiki.svg" alt="" className="object-fill" />

          <div className="flex w-[600px] h-[400px]">
            <div className="flex flex-col gap-4 justify-center">
              <h1 className="text-[#4D4D4D] font-semibold text-3xl">
                The unseen of spending three years at Pixelgrade
              </h1>
              <p className="text-sm text-[#717171]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
                Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                tristique iaculis. Nullam pulvinar sit amet risus pretium
                auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus
                sem. Donec elementum pulvinar odio.
              </p>
              <button className="bg-[#4CAF4F] py-2 px-4 rounded text-white">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
