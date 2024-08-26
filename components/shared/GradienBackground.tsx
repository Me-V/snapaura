"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";
import { plans } from "@/constants";
import Header from "./Header";
import { Button } from "../ui/moving-border";
import Link from "next/link";

const GradienBackground = () => {
  return (
    <>

      <div className="flex flex-row justify-between items-center">

        <Header
          title="Buy Credits"
        // subtitle="Choose a credit package that suits your needs!"
        />

        <div className="hidden lg:block">
          <Link href="/">
            <Image src="/assets/images/sa.png" alt="image" width={150} height={150} />
          </Link>
        </div>

      </div>




      <div className="flex flex-col items-center justify-center space-y-4 mt-5">


        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-6 p-4 sm:p-8">
          <ul className="w-full flex flex-col lg:flex-row justify-center gap-6">
            {plans.map((plan) => (
              <li
                key={plan.name}
                className="w-full max-w-xs lg:max-w-sm flex flex-col items-center bg-transparent rounded-lg p-4"
              >
                <BackgroundGradient className="flex flex-col items-center justify-center rounded-[22px] h-[40vh] w-full p-4 sm:p-10 bg-zinc-900 dark:bg-zinc-900">
                  <Image src={plan.icon} alt="check" width={50} height={50} />
                  <p className="p-20-semibold mt-2 text-purple-500">
                    {plan.name}
                  </p>
                  <p className="h1-semibold text-white">${plan.price}</p>
                  <p className="p-16-regular text-white">
                    {plan.credits} Credits
                  </p>
                </BackgroundGradient>

                <ul className="flex flex-col gap-2 py-4">
                  {plan.inclusions.map((inclusion) => (
                    <li
                      key={plan.name + inclusion.label}
                      className="flex items-center gap-3"
                    >
                      <Image
                        src={`/assets/icons/${inclusion.isIncluded ? "check.svg" : "cross.svg"
                          }`}
                        alt="check"
                        width={24}
                        height={24}
                      />
                      <p className="p-16-regular text-white">
                        {inclusion.label}
                      </p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <Button
          borderRadius="1.2rem"
          className="bg-purple-900 w-full dark:bg-slate-900 text-white border-purple-800 dark:border-purple-800"
        >
          Buy Credits
        </Button>
      </div>
    </>
  );
};

export default GradienBackground;
