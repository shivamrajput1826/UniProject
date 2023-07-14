import React from "react";

const Header = () => {
  return (
    <>
      <div class="bg-transparent flex justify-between w-full m-6 p-4">
        <div class="text-2xl">UNI</div>
        <div class="apply_btn no-underline visited:text-white text-white font-medium hover:text-[#7DEDDD] bg-black bg-opacity-60 hover:bg-black rounded-xl py-[11px] px-[30px]">
          Uni Paycheck
        </div>
      </div>
    </>
  );
};

export default Header;
