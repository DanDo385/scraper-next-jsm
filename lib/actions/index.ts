"use server"

export async function scrapeAndStoreProdcut (productUrl: string) {
    if(!productUrl) return;

    try {
        
    } catch (error: any) {
      throw new Error(`Failed to create/update product: ${error.message`)  
    }
}