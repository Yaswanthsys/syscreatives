export interface ContactFormData {
  fullName: string;
  mobileNumber: string;
  emailAddress: string;
  serviceRequired: "Live Streaming" | "Video Editing" | "Web Development" | "Graphic Design" | "QR Photo Scanning" | "";
  message: string;
}

export interface FormErrors {
  fullName?: string;
  mobileNumber?: string;
  emailAddress?: string;
  serviceRequired?: string;
  message?: string;
}
