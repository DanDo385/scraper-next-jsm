"use server"

import { url } from "inspector";
import { scrapeAmazonProduct } from "../scraper";

export async function scrapeAndStoreProdcut(productUrl: string) {
    if(!url) return;

    try {
      const scrapedProductrespo = await scrapeAmazonProduct(productUrl);  
    } catch (error: any) {
      throw new Error(`Failed to create/update product: ${error.message}`)  
    }
}