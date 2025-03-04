
import Link from "next/link";

 

export default  function Home() {
  
  return (
    <div className="h-screen flex bg-slate-950  flex-col  w-full justify-center items-center ">
      <h1 className="text-[4rem] text-white font-bold " >POSTS</h1>
      <Link href={"/posts"} className="btn btn-outline text-white px-20 rounded-4xl hover:bg-white hover:text-black py-5 mt-6" >All Posts</Link>
    </div>
  );
}
