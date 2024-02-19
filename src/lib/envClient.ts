import z from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_SEGMENT_WRITE_KEY: z.string().min(1),
});

export const envClient = envSchema.parse({
  NEXT_PUBLIC_SEGMENT_WRITE_KEY: process.env.NEXT_PUBLIC_SEGMENT_WRITE_KEY,
});
