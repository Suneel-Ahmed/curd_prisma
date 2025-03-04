"use server"

import { prisma } from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function createPost(formData: FormData) {
    try {
        
    
    await prisma.post.create({
        data : {
            author : {
                connect : {
                    email : "suneel@gmail.com"
                }
            },
            title : formData.get("title") as string,
            slug : (formData.get("title") as string).replace(/\s+/g,"_").toLowerCase(),
            content : formData.get("content") as string
        }
    })
    revalidatePath("/posts")
} catch (error) {
 console.log(error)       
}
}


export async function editPost(formData: FormData, id: number) {
    await prisma.post.update({
        where : {id},
        data : {
            title : formData.get("title") as string,
            slug : (formData.get("title") as string).replace(/\s+/g,"_").toLowerCase(),
            content : formData.get("content") as string
        }
    })   
}
export async function deletePost(id: number) {
    await prisma.post.delete({where : {id}})   
}