#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to cleanup on exit
cleanup() {
    echo -e "\n${YELLOW}Shutting down services...${NC}"
    kill 0
    exit
}

# Trap SIGINT (Ctrl+C) and SIGTERM
trap cleanup SIGINT SIGTERM

echo -e "${GREEN}Starting CTF Agar Server...${NC}\n"

# Get the base directory
BASE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Start Cigar2 webserver
echo -e "${BLUE}[Cigar2]${NC} Starting webserver..."
(cd "${BASE_DIR}/Cigar2" && node webserver.js 2>&1 | sed "s/^/$(echo -e ${BLUE}[Cigar2]${NC}) /") &
CIGAR_PID=$!

# Start MultiOgarII server
echo -e "${BLUE}[MultiOgarII]${NC} Starting game server..."
(cd "${BASE_DIR}/MultiOgarII" && cd src && node index 2>&1 | sed "s/^/$(echo -e ${BLUE}[MultiOgarII]${NC}) /") &
MULTIOGAR_PID=$!

echo -e "\n${GREEN}All services started!${NC}"
echo -e "Cigar2 PID: ${CIGAR_PID}"
echo -e "MultiOgarII PID: ${MULTIOGAR_PID}"
echo -e "\n${YELLOW}Press Ctrl+C to stop all services${NC}\n"

# Wait for all background processes
wait
