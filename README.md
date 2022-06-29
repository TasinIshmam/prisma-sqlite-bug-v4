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


Prisma version
```
prisma                  : 4.0.0
@prisma/client          : 4.0.0
Current platform        : darwin-arm64
Query Engine (Node-API) : libquery-engine da41d2bb3406da22087b849f0e911199ba4fbf11 (at node_modules/@prisma/engines/libquery_engine-darwin-arm64.dylib.node)
Migration Engine        : migration-engine-cli da41d2bb3406da22087b849f0e911199ba4fbf11 (at node_modules/@prisma/engines/migration-engine-darwin-arm64)
Introspection Engine    : introspection-core da41d2bb3406da22087b849f0e911199ba4fbf11 (at node_modules/@prisma/engines/introspection-engine-darwin-arm64)
Format Binary           : prisma-fmt da41d2bb3406da22087b849f0e911199ba4fbf11 (at node_modules/@prisma/engines/prisma-fmt-darwin-arm64)
Default Engines Hash    : da41d2bb3406da22087b849f0e911199ba4fbf11
Studio                  : 0.465.0
```