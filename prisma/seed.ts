import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const initalPosts: Prisma.PostCreateInput[] =[
    {
        title : "Post 1",
        slug : "post1",
        content : "Hello Post 1",
        author : {
            connectOrCreate: {
                where : {
                    email : "test@gmail.com"
                },
                create : {
                    email : "test@gmail.com",
                    hashPass : "asdasdasdasd"
                }
            }
        },
        published : true

    }
]

async function main() {
 console.log("Starting Seeding ...");

 for(const post of initalPosts){
    const newPost = await prisma.post.create({
        data : post
    });
    console.log(`created post with id ${newPost.id} `)
}
console.log(`Seeding Finished ... `)
  
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })