/**
 * Utility function for Sending a lead to make webhook
 */

const MAKE_WEBHOOK_URL = "https://hook.eu1.make.com/6ahjg1f3u7iul6ka1v62yimqocjb6fym";

/**
 * Normalizes Israeli phone numbers to start with 05
 * Examples:
 * - 534244... -> 0534244...
 * - 0534244... -> 0534244... (unchanged)
 * - 9725342444... -> 05342444...
 * - +9725342444... -> 05342444...
 */
function toIsraeliInternational(phone: string): string {
  // Start from the normalized local format (05x...)
  const local = normalizePhoneNumber(phone);
  // Replace leading 0 with +972
  return '+972' + local.substring(1);
}

function normalizePhoneNumber(phone: string): string {
  // Remove all non-digit characters except leading +
  let cleaned = phone.replace(/[^\d+]/g, '');

  // Remove leading + if present
  if (cleaned.startsWith('+')) {
    cleaned = cleaned.substring(1);
  }

  // Handle international format (972...)
  if (cleaned.startsWith('972')) {
    // Remove country code and add 0 prefix
    cleaned = '0' + cleaned.substring(3);
  }
  // Handle local format without leading 0 (5...)
  else if (!cleaned.startsWith('0')) {
    cleaned = '0' + cleaned;
  }
  // Already has 0 prefix (05...) - no change needed

  return cleaned;
}

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
    // Normalize phone number before sending
    const normalizedData = {
      ...data,
      phone: normalizePhoneNumber(data.phone),
      israeliNumber: toIsraeliInternational(data.phone)
    };

    const response = await fetch(MAKE_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(normalizedData),
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
