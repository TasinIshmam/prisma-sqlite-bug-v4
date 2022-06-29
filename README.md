### SQLite connector bug 

1. Run `npm install`  
2. Run `npx prisma migrate dev` 
3. Run `npx ts-node index.ts` 
    - Notice everything should work fine
4. Change prisma to v4 in `package.json` 
5. Run `npm install`
6. Run `npx prisma generate` 
7. Run `npx ts-node index.ts` 
    - Console output: `[1]    41223 killed     npx ts-node index.ts` 