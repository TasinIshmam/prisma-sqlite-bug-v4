import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log(await prisma.user.count());
}

main()
  .catch((e) => { console.log(e) })
  .finally(async () => await prisma.$disconnect())
