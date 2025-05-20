#!/bin/bash

# This script creates folders with empty index.html, styles.css, and script.js files

INPUT_FILE=${1:-"folders.txt"}

if [ ! -f "$INPUT_FILE" ]; then
  echo "Error: File $INPUT_FILE not found!"
  echo "Please create a file with folder names (one per line)"
  exit 1
fi

echo "Creating folders from $INPUT_FILE..."

while IFS= read -r folder_name || [ -n "$folder_name" ]; do
  
  if [ -z "${folder_name// }" ]; then
    continue
  fi

  echo "Creating folder: $folder_name"
  
  mkdir -p "$folder_name"
  
  touch "$folder_name/index.html"
  touch "$folder_name/styles.css"
  touch "$folder_name/script.js"
  
done < "$INPUT_FILE"

echo "All folders and files created successfully!" 