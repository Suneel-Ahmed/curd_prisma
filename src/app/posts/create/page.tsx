
"use server"
import { createPost } from '@/actions/actions';
import Link from 'next/link';
 
export default async function PostPage() {
  
  return (
    <div className="h-screen flex bg-slate-950  flex-col  w-full justify-center items-center ">
      <h1 className="text-[4rem] text-white font-bold " >CREATE POST</h1>
     <div className='flex gap-[40px]'>
      <Link href={"/"} className=" border px-10 py-3 rounded-4xl  cursor-pointer hover:bg-white hover:text-black mt-[20px] border-white text-white" >Home Page</Link>
      <Link href={"/posts"} className=" border px-10 py-3 rounded-4xl  cursor-pointer hover:bg-white hover:text-black mt-[20px] border-white text-white" >All Posts</Link>

     </div>
    <div className="w-[50%] p-[20px] py-[40px] rounded-4xl bg-white/20 mt-[100px] flex justify-center " >
        <form action={createPost} className='w-[40%] flex flex-col '>
            <div className='flex w-full flex-col  gap-[20px]' >
                <label htmlFor="" className='text-white' >Title</label>
                <input type="text" name='title' placeholder='title' className='border-white w-full py-2 outline-0 px-4 text-white border rounded-3xl' />
            </div>
            <div className='mt-[20px] flex flex-col gap-[20px] ' >
                <label htmlFor="" className='text-white' >Content</label>
                <textarea rows={5} name='content' className='border-white w-full py-2 outline-0 px-4 text-white border rounded-3xl' />
            </div>
            <button type='submit' className='btn btn-outline mt-5 border-white text-white hover:text-black hover:bg-white ms-auto' >Submit</button>
        </form>
    </div>
    </div>
  );
}
