"use client"

import { scrapeAndStoreProduct } from '@/lib/actions';
import { FormEvent, useState } from 'react';

const Searchbar = () => {
    const handleSubmit = () => {}
    
    const isValidProductURL = (url: string) => {
        try {
            const parsedURL = new URL(url);
            const hostname = parsedURL.hostname;
        if(
            hostname.includes('')
        )
  
    return (
    <form 
        className="flex flex-wrap gap-4 mt-12"
        onSubmit={handleSubmit}
    >
        <input
            type='text'
            placeholder='Enter Product Link'
            className = "searchbar-input"
        />

    </form>
  )
}

export default Searchbar;
