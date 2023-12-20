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
  return false;
}

const Searchbar = () => {
  const [searchPrompt, setSearchPrompt] = useState('');
  const [isLoading, setIsloading] = useState('');  
  
  const handleSubmit = async (event: FormEvent<HTMLFormElements>) => {
    event.preventDefault();
    const isValidLink = isValidProductURL(searchPrompt);

    if(!isValidLink) 
      return alert('Please provide a valid Amazon link')

    try {
      setIsLoading(true);

      // Scrape the product page
      const product = await scrapeAndStoreProduct(searchPrompt);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form 
      className="flex flex-wrap gap-4 mt-12" 
      onSubmit={handleSubmit}
    >
      <input 
        type="text"
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
        placeholder="Enter product link"
        className = "searchbar-input"
      />

      <button 
        type="submit" 
        className = "searchbar-btn"
        disabled={searchPrompt === ""}
      >
        {isLoading ? 'Searching...' : 'Search'}
      </button>
    </form>
  )
}

export default Searchbar;
