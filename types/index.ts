export interface ContactFormData {
  fullName: string;
  mobileNumber: string;
  emailAddress: string;
  serviceRequired: "Photography" | "Live Streaming" | "Video Editing" | "Graphic Design" | "QR Photo Scanning" | "";
  message: string;
}

export interface FormErrors {
  fullName?: string;
  mobileNumber?: string;
  emailAddress?: string;
  serviceRequired?: string;
  message?: string;
}
