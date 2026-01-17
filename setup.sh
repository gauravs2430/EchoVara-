#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Starting Project Setup...${NC}"

# Backend Setup
echo -e "${BLUE}📦 Installing Backend Dependencies...${NC}"
cd backend
npm install
echo -e "${GREEN}✅ Backend dependencies installed${NC}"

# Seed Database
echo -e "${BLUE}🌱 Seeding Database...${NC}"
npm run seed
echo -e "${GREEN}✅ Database seeded${NC}"

cd ..

# Frontend Setup
echo -e "${BLUE}📦 Installing Frontend Dependencies...${NC}"
cd frontend
npm install --legacy-peer-deps
echo -e "${GREEN}✅ Frontend dependencies installed${NC}"

cd ..

echo -e "${GREEN}✨ Setup Complete!${NC}"
echo -e "${BLUE}To run the project:${NC}"
echo -e "1. Open a terminal and run: ${GREEN}cd backend && npm run dev${NC}"
echo -e "2. Open another terminal and run: ${GREEN}cd frontend && npm start${NC}"
