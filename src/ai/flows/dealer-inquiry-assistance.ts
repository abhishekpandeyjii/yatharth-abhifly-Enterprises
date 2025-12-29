'use server';

/**
 * @fileOverview Provides assistance for dealer inquiries by analyzing the inquiry and suggesting relevant information from dealer relationship management documentation.
 *
 * - dealerInquiryAssistance - A function that handles the dealer inquiry assistance process.
 * - DealerInquiryAssistanceInput - The input type for the dealerInquiryAssistance function.
 * - DealerInquiryAssistanceOutput - The return type for the dealerInquiryAssistance function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DealerInquiryAssistanceInputSchema = z.object({
  inquiryText: z.string().describe('The text of the dealer inquiry.'),
  documentationText: z.string().describe('The dealer relationship management documentation text.'),
});
export type DealerInquiryAssistanceInput = z.infer<typeof DealerInquiryAssistanceInputSchema>;

const DealerInquiryAssistanceOutputSchema = z.object({
  suggestedInformation: z.string().describe('Suggested information from the documentation to address the inquiry.'),
});
export type DealerInquiryAssistanceOutput = z.infer<typeof DealerInquiryAssistanceOutputSchema>;

export async function dealerInquiryAssistance(input: DealerInquiryAssistanceInput): Promise<DealerInquiryAssistanceOutput> {
  return dealerInquiryAssistanceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'dealerInquiryAssistancePrompt',
  input: {schema: DealerInquiryAssistanceInputSchema},
  output: {schema: DealerInquiryAssistanceOutputSchema},
  prompt: `You are an AI assistant helping sales representatives respond to dealer inquiries.

  Analyze the following dealer inquiry and suggest relevant information from the provided dealer relationship management documentation to help address the inquiry.

  Inquiry: {{{inquiryText}}}

  Documentation: {{{documentationText}}}

  Suggested Information:`,
});

const dealerInquiryAssistanceFlow = ai.defineFlow(
  {
    name: 'dealerInquiryAssistanceFlow',
    inputSchema: DealerInquiryAssistanceInputSchema,
    outputSchema: DealerInquiryAssistanceOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
