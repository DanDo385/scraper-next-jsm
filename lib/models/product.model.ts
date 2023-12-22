import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    url: { type: String, required: true, unique: true },
    currency: { type: String, required: true },
    image: { type: String, required: true },
    currentPrice: { type: Number, required: true }, 
    originalPrice: { type: Number, required: true },  
    priceHistory: [
        { price: { type: Number, required: true },
        date: {type: Date, default: Date.now } }
        ],
    lowestPrice: { type: Number, required: true },
    highestPrice: { type: Number, required: true },
    averagePrice: { type: Number, required: true },
    discountRate: { type: Number, required: true }, 
    description: { type: Number, required: true },
    category: { type: Number, required: true }, 
    reviewsCount: { type: Number, required: true },
    isOutOfStock: { type: Boolean, required: true },
    users: [
        { email: { type: String, required: true } }
    ], default: [],
}, { timestamps: true }
);

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;
