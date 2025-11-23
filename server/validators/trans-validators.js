import z from "zod";

export const transactionValid = z.object({
  transaction: z.array(
    z.object({
      title: z.string({ message: "Title is to be provided" }),
      amount: z.number({ message: "Amount must be a number" }),
      type: z.enum(["income", "expense"]),
    })
  ),
});
