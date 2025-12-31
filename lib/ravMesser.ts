/**
 * Utility function for Rav Messer newsletter subscription via Make webhook
 */

const MAKE_WEBHOOK_URL = "https://hook.eu1.make.com/6ahjg1f3u7iul6ka1v62yimqocjb6fym";

export interface RavMesserSubscriber {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
}

/**
 * Subscribes a user to Rav Messer newsletter via Make webhook
 * @param subscriber - Object containing email, firstName, lastName, and phone
 * @returns Promise with success/error response
 */
export async function subscribeToRavMesser(
  subscriber: RavMesserSubscriber
): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch(MAKE_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: subscriber.email,
        firstName: subscriber.firstName,
        lastName: subscriber.lastName,
        phone: subscriber.phone,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return {
      success: true,
      message: "Successfully subscribed to newsletter",
    };
  } catch (error) {
    console.error("Error subscribing to Rav Messer:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
}
