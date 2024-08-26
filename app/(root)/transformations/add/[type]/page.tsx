//This page allows us to make different types of transformations
import Header from '@/components/shared/Header'
import TransformationForm from '@/components/shared/TransformationForm';
import { transformationTypes } from '@/constants'
import { getUserById } from '@/lib/actions/user.actions';
import { auth } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const AddTransformationTypePage = async ({ params: { type } }: SearchParamProps) => {
  const { userId } = auth();
  const transformation = transformationTypes[type];

  if (!userId) redirect('/sign-in')

  const user = await getUserById(userId);

  return (
    <>
      <div className="flex flex-row justify-between items-center">

        <Header
          title={transformation.title}

        />
        <div className='hidden lg:block'> <Link href="/">   <Image src="/assets/images/sa.png" alt="image" width={150} height={150} /></Link>
        </div>
      </div>
      <section className="mt-10">
        <div className='mb-5'>{transformation.subTitle}</div>
        <TransformationForm
          action="Add"
          userId={user._id}
          type={transformation.type as TransformationTypeKey}
          creditBalance={user.creditBalance}
        />
      </section>
    </>
  )
}

export default AddTransformationTypePage