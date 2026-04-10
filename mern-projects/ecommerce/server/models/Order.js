import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  orderItems: [
    {
      name: String,
      qty: Number,
      price: Number
    }
  ],
  totalPrice: Number,
  isPaid: { type: Boolean, default: false }
});

export default mongoose.model("Order", orderSchema);