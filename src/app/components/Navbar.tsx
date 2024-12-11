import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-white h-[466px]">
      <div className="flex justify-center">
        <div className=" flex items-center space-x-2">
          <Image
            src="/images/burger-logo.png"
            alt="Burger Logo"
            width={326}
            height={326}
          />
          <h2 className="text-[50px] font-bold text-[#FF5C00] w-[437px]">Только самые сочные бургеры!</h2>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
