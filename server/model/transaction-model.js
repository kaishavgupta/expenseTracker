import mongoose from "mongoose";

const transactionSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },

  transaction: [
    {
      _id: {
        type: Number,
        default: ()=>Date.now()
      },
      title: {
        type: String,
        required: true
      },
      amount: {
        type: Number,
        required: true
      },
      type: {
        type: String,
        required: true
      }
    }
  ]
});

export const UserTransaction = mongoose.model("transaction", transactionSchema);
