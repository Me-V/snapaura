import { SignedIn, auth } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

import Header from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { plans } from "@/constants";
import { getUserById } from "@/lib/actions/user.actions";
import Checkout from "@/components/shared/Checkout";
import GradienBackground from "@/components/shared/GradienBackground";
import Link from "next/link"

const Credits = async () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);

  return (
    // <>
    //   <Header
    //     title="Buy Credits"
    //     subtitle="Choose a credit package that suits your needs!"
    //   />

    //   <section>
    //     <ul className="credits-list">
    //       {plans.map((plan) => (
    //         <li key={plan.name} className="credits-item">
    //           <div className="flex-center flex-col gap-3">
    //             <Image src={plan.icon} alt="check" width={50} height={50} />
    //             <p className="p-20-semibold mt-2 text-purple-500">
    //               {plan.name}
    //             </p>
    //             <p className="h1-semibold text-dark-600">${plan.price}</p>
    //             <p className="p-16-regular">{plan.credits} Credits</p>
    //           </div>

    //           {/* Inclusions */}
    //           <ul className="flex flex-col gap-5 py-9">
    //             {plan.inclusions.map((inclusion) => (
    //               <li
    //                 key={plan.name + inclusion.label}
    //                 className="flex items-center gap-4"
    //               >
    //                 <Image
    //                   src={`/assets/icons/${
    //                     inclusion.isIncluded ? "check.svg" : "cross.svg"
    //                   }`}
    //                   alt="check"
    //                   width={24}
    //                   height={24}
    //                 />
    //                 <p className="p-16-regular">{inclusion.label}</p>
    //               </li>
    //             ))}
    //           </ul>

    //           {plan.name === "Free" ? (
    //             <Button variant="outline" className="credits-btn">
    //               Free Consumable
    //             </Button>
    //           ) : (
    //             <SignedIn>
    //               <Checkout
    //                 plan={plan.name}
    //                 amount={plan.price}
    //                 credits={plan.credits}
    //                 buyerId={user._id}
    //               />
    //             </SignedIn>
    //           )}
    //         </li>
    //       ))}
    //     </ul>
    //   </section>

    // </>


    <>

      <div className="flex flex-col justify-center items-center">

        <div className="flex flex-row justify-between items-center gap-[100vh]">

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


        <div className="mt-10 flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-16">

          <div className="flex flex-col items-center ">

            {/* {plans.map((plan) => (
<div key={plan._id}> */}
            <p className="mb-3">Buy Pro Package</p>
            <SignedIn>
              <Checkout
                plan={plans[1].name}
                amount={plans[1].price}
                credits={plans[1].credits}
                buyerId={user._id}
              />

            </SignedIn>

            {/* </div>
))} */}

          </div>

          <div className="flex flex-col items-center ">

            {/* {plans.map((plan) => (
<div key={plan._id}> */}
            <p className="mb-3">Buy Premiuim Package</p>
            <SignedIn>
              <Checkout
                plan={plans[2].name}
                amount={plans[2].price}
                credits={plans[2].credits}
                buyerId={user._id}
              />

            </SignedIn>

            {/* </div>
))} */}

          </div>
        </div>
        <GradienBackground />
      </div>






    </>


  );
};

export default Credits;