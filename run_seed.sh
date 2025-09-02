#!/bin/bash
cd resumemanager
export DATABASE_URL="file:c:/Users/mikem/OneDrive/Mike/GitHub/ResumeManager/resumemanager/prisma/dev.db"
npx prisma db push --schema=./prisma/schema.prisma
npm exec -- ts-node --compiler-options '{"module":"CommonJS"}' prisma/seed.ts