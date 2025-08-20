import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: Array, required: true },   // will store image URLs
    pdf: { type: String }, // store uploaded PDF URL (e.g., Cloudinary or server path)
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
   
    bestseller: { type: Boolean, default: false },
    date: { type: Number, required: true }
})

const productModel = mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;
