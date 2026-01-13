/**
 * Utility function for Sending a lead to make webhook
 */

const MAKE_WEBHOOK_URL = "https://hook.eu1.make.com/6ahjg1f3u7iul6ka1v62yimqocjb6fym";

// Base user info (required for all webhook calls)
export interface UserInfo {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  leadPosition: string; // "מוכר" | "קונה" | "שכירות" | "לא ידוע"
}

// Contact form submission data
export interface ContactFormData extends UserInfo {
  type: 'contact';
  message: string;
}

// Property valuation form submission data
export interface PropertyValuationData extends UserInfo {
  type: 'property-valuation';
  address: string;
  floor?: string;
  rooms?: string;
  balcony?: string;
  yard?: string;
  accessibility?: string;
  renovated?: string;
  storage?: string;
  airConditioning?: string;
  safeRoom?: string;
  elevator?: string;
  parking?: string;
  furnished?: string;
  additionalDetails?: string;
}

// Union type for all webhook submissions
export type WebhookData = ContactFormData | PropertyValuationData;

/**
 * Sends a lead to Make webhook.
 * Supports both contact form submissions and property valuation requests.
 * @param data - Contact form data or property valuation data
 * @returns Promise with success/error response
 */
export async function sendLeadToWebhook(
  data: WebhookData
): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch(MAKE_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return {
      success: true,
      message: "Successfully sent lead to webhook",
    };
  } catch (error) {
    console.error("Error sending lead to webhook:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
}
