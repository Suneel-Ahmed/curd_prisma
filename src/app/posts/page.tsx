
"use server"
import { prisma } from '@/lib/db';
import Link from 'next/link';
 

export default async function Home() {
  const user = await prisma.user.findMany({
      where:{
        email : "test@gmail.com"
      }
      ,
      include : {
        posts : true
      }
  });

  console.log("user" , user)
  
  return (
    <div className="h-screen flex bg-slate-950  flex-col  w-full justify-center items-center ">
      <h1 className="text-[4rem] text-white font-bold " >ALL POST</h1>
     <div className='flex gap-[40px]'>
      <Link href={'/posts/create'} className=" border px-10 py-3 rounded-4xl  cursor-pointer hover:bg-white hover:text-black mt-[20px] border-white text-white" >Create Post</Link>
      <Link href={"/"} className=" border px-10 py-3 rounded-4xl  cursor-pointer hover:bg-white hover:text-black mt-[20px] border-white text-white" >Home Page</Link>

     </div>
    <div className="w-[70%] mt-[100px] flex justify-center " >
        <div className="grid w-full gap-[20px]  grid-cols-1" >
            {
              user[0]?.posts.map((val : any)=>(
              <Link href={`/posts/${val?.slug}`} key={val?.id} className="w-full bg-slate-700 rounded-4xl py-3 flex justify-center  text-white text-[1.5rem]" >
                <h1>{val?.title}</h1> 
              </Link>
              ))
            }
              
        </div>
    </div>
    </div>
  );
}
