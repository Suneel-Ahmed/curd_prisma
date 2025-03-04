
"use server"
import { prisma } from '@/lib/db';
// import { unstable_cache as cache } from 'next/cache';
import Link from 'next/link';
 
type PostPageProps = {
    params: {
      slug: string;
    };
  };

  

export default async function PostPage({params} : PostPageProps) {
  const Posts = await prisma.post.findUnique({
    where: {
      slug : params.slug,
    }
  });
  return (
    <div className="h-screen flex bg-slate-950  flex-col  w-full justify-center items-center ">
      <h1 className="text-[4rem] text-white font-bold " >ALL POST</h1>
     <div className='flex gap-[40px]'>
      <button className=" border px-10 py-3 rounded-4xl  cursor-pointer hover:bg-white hover:text-black mt-[20px] border-white text-white" >Create Post</button>
      <Link href={"/"} className=" border px-10 py-3 rounded-4xl  cursor-pointer hover:bg-white hover:text-black mt-[20px] border-white text-white" >Home Page</Link>
      <Link href={"/posts"} className=" border px-10 py-3 rounded-4xl  cursor-pointer hover:bg-white hover:text-black mt-[20px] border-white text-white" >All Posts</Link>

     </div>
    <div className="w-[70%] mt-[100px] flex justify-center " >
        <div className="grid w-full gap-[20px]  grid-cols-1" >
           <h1 className='text-[2rem] text-white' >{Posts?.title}</h1>
           <p className='text-[1.5rem] text-white/70 ' >{Posts?.content}</p>
              
        </div>
    </div>
    </div>
  );
}
