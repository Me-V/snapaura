"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import { plans } from "@/constants";
import Header from "./Header";
import { Button } from "../ui/moving-border";

const GradienBackground = () => {
  return (

    <>

      <Header
        title="Buy Credits"
        subtitle="Choose a credit package that suits your needs!"

      />
      <div>
      <div className="flex flex-col justify-center items-center">
        <Button
          borderRadius="1.2rem"
          className="bg-purple-900 dark:bg-slate-900 text-white dark:text-white border-purple-800 dark:border-purple-800"
        >
          Buy Credits
        </Button>
      </div>

      <div className="flex flex-row bg-black justify-center items-center h-[100vh] gap-10">
        {/* <BackgroundGradient className="flex flex-col items-center justify-center rounded-[22px] h-[80vh] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">*/}
        <ul className="credits-list">
          {plans.map((plan) => (
            <li key={plan.name} className="credits-item bg-black">
              {/* <div className="flex-center flex-col gap-3"> */}
              <BackgroundGradient className="flex flex-col items-center justify-center rounded-[22px] h-[40vh] max-w-sm p-4 sm:p-10 bg-zinc-900 dark:bg-zinc-900">
                <Image src={plan.icon} alt="check" width={50} height={50} />
                <p className="p-20-semibold mt-2 text-purple-500">
                  {plan.name}
                </p>
                <p className="h1-semibold text-white">${plan.price}</p>
                <p className="p-16-regular text-white">{plan.credits} Credits</p>
                {/* </div> */}</BackgroundGradient>

              {/* Inclusions */}
              <ul className="flex flex-col gap-5 py-9">
                {plan.inclusions.map((inclusion) => (
                  <li
                    key={plan.name + inclusion.label}
                    className="flex items-center gap-4"
                  >
                    <Image
                      src={`/assets/icons/${inclusion.isIncluded ? "check.svg" : "cross.svg"
                        }`}
                      alt="check"
                      width={24}
                      height={24}
                    />
                    <p className="p-16-regular">{inclusion.label}</p>
                  </li>
                ))}
              </ul>

              {/* {plan.name === "Free" ? (
                <Button variant="outline" className="credits-btn">
                  Free Consumable
                </Button>
              ) : (
                <SignedIn>
                  <Checkout
                    plan={plan.name}
                    amount={plan.price}
                    credits={plan.credits}
                    buyerId={user._id}
                  />
                </SignedIn>
              )} */}
            </li>
          ))}
        </ul>
        {/* </BackgroundGradient> */}
        {/* <BackgroundGradient className="flex flex-col items-center justify-center rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src="/assets/icons/free-plan.svg"
          alt="check" width={50} height={50}
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Air Jordan 4 Retro Reimagined
        </p>
 
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            $100
          </span>
        </button>
      </BackgroundGradient>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src="/assets/icons/free-plan.svg"
          alt="check" width={50} height={50}
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Air Jordan 4 Retro Reimagined
        </p>
 
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            $100
          </span>
        </button>
      </BackgroundGradient> */}
      </div>
      </div>
    </>
  )
}

export default GradienBackground