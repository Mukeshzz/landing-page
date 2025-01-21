import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="flex justify-between mx-48">
        <div className="flex items-center gap-1 my-4">
          <img src="./Logo.svg" alt="" className="cursor-pointer" />
        </div>
        <div className="flex items-center gap-8 my-4 text-[#4D4D4D]">
          <button>Home</button>
          <button>Features</button>
          <button>Community</button>
          <button>Blog</button>
          <button>Pricing</button>
          <div>
            <button className="flex items-center gap-3 bg-[#4CAF4F] rounded py-2 px-6 text-white">
              <span>Register Now</span>
              <img src="./Vector.svg" alt="" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
