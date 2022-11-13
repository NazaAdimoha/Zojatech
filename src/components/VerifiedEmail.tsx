import React from "react";
import Verified from ".././assets/envelope-circle-check-solid 1.png";
import Button from "./Button";

const VerifiedEmail = () => {
  return (
    <div className="flex flex-col align-middle py-6">
      <div className="flex flex-col justify-center items-center ">
        <img
          className="w-[76px] h-[60.8px] flex flex-row justify-center align-middle items-center"
          src={Verified}
          alt=""
        />
        <div>
          <p className="text-2xl font-medium text-gray-800 text-center mt-2">
            Email verified !
          </p>
          <p className="w-[310px] flex flex-col justify-center align-middle p-[4px 4px 4px 0px] tracking-narrow text-sm text-gray-600 mt-4 gap-4 font-[13px] font-sans">
          The verified email address will be associated with your account. Click on the button below to continue
          </p>

          <div className="mt-6 flex flex-col justify-center items-center align-middle lg:order-2">
            <Button
              onClick={() => console.log("clicked")}
              type="primary"
              size="small"
              label="Continue"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifiedEmail;
