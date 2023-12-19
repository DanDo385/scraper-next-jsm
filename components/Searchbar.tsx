"use client"

//Import core libraries
import { FormEvent, useState } from 'react';
//Import web scraper
import { scrapeAndStoreProduct } from '@/lib/actions';

const isValidProductURL = (url : string) => {
  try {
    const parsedURL = new URL(url);
    const hostname = parsedURL.hostname;
  
    if (hostname.includes('amazon.com') || 
        hostname.includes('amazon.c') ||
        hostname.includes('amazon'))
        {
          return true;
        }
  } catch {
    return false;
  }
}


const Searchbar = () => {
    const handleSubmit = () ={}
  return (
    <form 
        className="flex flex-wrap gap-4 mt-12"
        
  )
}




export default Searchbar;
