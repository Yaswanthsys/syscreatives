import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      fullName,
      mobileNumber,
      emailAddress,
      serviceRequired,
      services,
      message,
      proposedDate,
      proposedLocation,
      isBookingPopup,
    } = body;

    // Normalizing selected services
    let finalService = serviceRequired;
    if (Array.isArray(services) && services.length > 0) {
      finalService = services.join(", ");
    } else if (!finalService && services) {
      finalService = String(services);
    }
    if (!finalService) {
      finalService = "General Media Inquiry";
    }

    // Input Validations
    if (!fullName || !emailAddress || !mobileNumber) {
      return NextResponse.json(
        { error: "Full Name, Mobile Number, and Email Address are required." },
        { status: 400 }
      );
    }

    // Require message only if not a booking popup
    if (!isBookingPopup && !message) {
      return NextResponse.json(
        { error: "Message cannot be empty." },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error("RESEND_API_KEY environment variable is not defined.");
      return NextResponse.json(
        { error: "Email configuration is incomplete on the server." },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);
    const primaryRecipient = "syscreatives@gmail.com";
    const accountOwnerRecipient = "yaswanth777ys@gmail.com";

    // Build subject and details for email
    const emailSubject = isBookingPopup
      ? `[SYS Creatives Booking] ${finalService} - ${fullName}`
      : `[SYS Creatives] Service Request: ${finalService}`;

    const submissionTitle = isBookingPopup
      ? "Luxury Event Booking Request"
      : "Luxury Event Consultation Request";

    const emailHtml = `
      <div style="background-color: #0F0F0F; color: #FFFFFF; font-family: 'Poppins', Arial, sans-serif; padding: 40px; border-radius: 16px; max-width: 600px; margin: auto; border: 1px solid rgba(212, 175, 55, 0.25);">
        <!-- Header -->
        <div style="text-align: center; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 20px; margin-bottom: 30px;">
          <h2 style="color: #D4AF37; font-size: 24px; font-weight: bold; letter-spacing: 2px; margin: 0;">SYS CREATIVES</h2>
          <p style="color: #9CA3AF; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-top: 5px;">${submissionTitle}</p>
        </div>
        
        <!-- Content Body -->
        <div style="font-size: 14px; line-height: 1.6;">
          <p style="color: #9CA3AF; margin-bottom: 25px;">You have received a new ${isBookingPopup ? "booking inquiry" : "consultation request"} from the website. Details are shown below:</p>
          
          <!-- Details Grid -->
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.04); color: #9CA3AF; font-weight: bold; width: 38%;">Client Name:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.04); color: #FFFFFF; font-weight: 600;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.04); color: #9CA3AF; font-weight: bold;">Mobile Number:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.04); color: #FFFFFF; font-weight: 500;">
                <a href="tel:${mobileNumber}" style="color: #D4AF37; text-decoration: none;">${mobileNumber}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.04); color: #9CA3AF; font-weight: bold;">Email Address:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.04); color: #FFFFFF; font-weight: 500;">
                <a href="mailto:${emailAddress}" style="color: #D4AF37; text-decoration: none;">${emailAddress}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.04); color: #9CA3AF; font-weight: bold;">Services Selected:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.04); color: #D4AF37; font-weight: bold; font-size: 15px;">${finalService}</td>
            </tr>
            ${
              proposedDate
                ? `<tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.04); color: #9CA3AF; font-weight: bold;">Proposed Date:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.04); color: #FFFFFF; font-weight: 500;">${proposedDate}</td>
                  </tr>`
                : ""
            }
            ${
              proposedLocation
                ? `<tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.04); color: #9CA3AF; font-weight: bold;">Proposed Location:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.04); color: #FFFFFF; font-weight: 500;">${proposedLocation}</td>
                  </tr>`
                : ""
            }
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.04); color: #9CA3AF; font-weight: bold;">Source:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.04); color: #9CA3AF; font-size: 12px;">${isBookingPopup ? "Request Service Popup Builder" : "Get In Touch Contact Form"}</td>
            </tr>
          </table>
          
          <!-- Message Block -->
          ${
            message
              ? `<div style="background-color: #181818; border: 1px solid rgba(255,255,255,0.05); padding: 20px; border-radius: 12px; margin-top: 20px;">
                  <h4 style="color: #FFFFFF; margin-top: 0; margin-bottom: 10px; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px;">Event Notes / Requirements</h4>
                  <p style="color: #E5E7EB; margin: 0; font-size: 13.5px; white-space: pre-wrap;">${message}</p>
                </div>`
              : ""
          }
        </div>
        
        <!-- Footer -->
        <div style="text-align: center; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 20px; margin-top: 30px; color: #9CA3AF; font-size: 11px;">
          <p style="margin: 0;">This email was automatically generated by your SYS Creatives client booking engine via Resend.</p>
          <p style="margin: 5px 0 0 0;">To reply directly to this client, simply click <strong>Reply</strong> in your email program.</p>
        </div>
      </div>
    `;

    // 1. Attempt sending to primary recipient
    let { data: teamData, error: teamError } = await resend.emails.send({
      from: "SYS Creatives Client <onboarding@resend.dev>",
      to: primaryRecipient,
      replyTo: emailAddress,
      subject: emailSubject,
      html: emailHtml,
    });

    // Handle Resend unverified domain restriction fallback:
    if (teamError && teamError.message?.toLowerCase().includes("testing emails to your own email address")) {
      console.warn("Resend test domain limitation active. Automatically routing to account owner email:", accountOwnerRecipient);
      const fallbackResult = await resend.emails.send({
        from: "SYS Creatives Client <onboarding@resend.dev>",
        to: accountOwnerRecipient,
        replyTo: emailAddress,
        subject: emailSubject,
        html: emailHtml,
      });
      teamData = fallbackResult.data;
      teamError = fallbackResult.error;
    }

    if (teamError) {
      console.error("Resend API response error (team email):", teamError);
      return NextResponse.json({ error: teamError.message }, { status: 400 });
    }

    // 2. Trigger Resend API call to send confirmation to the customer
    try {
      const { error: customerError } = await resend.emails.send({
        from: "SYS Creatives <onboarding@resend.dev>",
        to: emailAddress,
        subject: "Thank you for contacting SYS Creatives — Inquiry Received",
        html: `
          <div style="background-color: #0F0F0F; color: #FFFFFF; font-family: 'Poppins', Arial, sans-serif; padding: 40px; border-radius: 16px; max-width: 600px; margin: auto; border: 1px solid rgba(212, 175, 55, 0.25);">
            <!-- Header -->
            <div style="text-align: center; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 20px; margin-bottom: 30px;">
              <h2 style="color: #D4AF37; font-size: 24px; font-weight: bold; letter-spacing: 2px; margin: 0;">SYS CREATIVES</h2>
              <p style="color: #9CA3AF; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-top: 5px;">${isBookingPopup ? "Booking Inquiry Confirmation" : "Consultation Request Received"}</p>
            </div>
            
            <!-- Content Body -->
            <div style="font-size: 14px; line-height: 1.6;">
              <p style="color: #FFFFFF; font-size: 16px; font-weight: bold; margin-bottom: 15px;">Hello ${fullName},</p>
              <p style="color: #9CA3AF; margin-bottom: 25px;">Thank you for getting in touch with SYS Creatives. We have received your ${isBookingPopup ? "service booking request" : "inquiry"}, and our creative team will review your requirements and reach out to you within 24 hours.</p>
              
              <p style="color: #FFFFFF; font-weight: bold; text-transform: uppercase; font-size: 11px; letter-spacing: 1px; margin-bottom: 15px;">Summary of Your Request:</p>
              <!-- Details Grid -->
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.04); color: #9CA3AF; width: 38%;">Name:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.04); color: #FFFFFF; font-weight: 500;">${fullName}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.04); color: #9CA3AF;">Mobile Number:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.04); color: #FFFFFF; font-weight: 500;">${mobileNumber}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.04); color: #9CA3AF;">Email Address:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.04); color: #FFFFFF; font-weight: 500;">${emailAddress}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.04); color: #9CA3AF;">Services Selected:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.04); color: #D4AF37; font-weight: bold; font-size: 15px;">${finalService}</td>
                </tr>
                ${
                  proposedDate
                    ? `<tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.04); color: #9CA3AF;">Proposed Date:</td>
                        <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.04); color: #FFFFFF; font-weight: 500;">${proposedDate}</td>
                      </tr>`
                    : ""
                }
                ${
                  proposedLocation
                    ? `<tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.04); color: #9CA3AF;">Proposed Location:</td>
                        <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.04); color: #FFFFFF; font-weight: 500;">${proposedLocation}</td>
                      </tr>`
                    : ""
                }
              </table>
              
              ${
                message
                  ? `<div style="background-color: #181818; border: 1px solid rgba(255,255,255,0.05); padding: 20px; border-radius: 12px;">
                      <h4 style="color: #FFFFFF; margin-top: 0; margin-bottom: 10px; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px;">Your Notes</h4>
                      <p style="color: #E5E7EB; margin: 0; font-size: 13.5px; white-space: pre-wrap;">${message}</p>
                    </div>`
                  : ""
              }
            </div>
            
            <!-- Footer -->
            <div style="text-align: center; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 20px; margin-top: 30px; color: #9CA3AF; font-size: 11px;">
              <p style="margin: 0;">SYS Creatives — Where Creativity Meets Technology.</p>
              <p style="margin: 5px 0 0 0;">This is an automated confirmation of your request. Feel free to contact us at syscreatives@gmail.com.</p>
            </div>
          </div>
        `,
      });

      if (customerError) {
        console.warn("Customer confirmation email notice (domain unverified):", customerError);
      }
    } catch (customerMailError) {
      console.warn("Error sending customer confirmation email:", customerMailError);
    }

    return NextResponse.json({
      success: true,
      message: "Your request has been successfully dispatched to our team.",
    });
  } catch (error: any) {
    console.error("Resend catch error in API route:", error);
    return NextResponse.json(
      { error: "Server error occurred while dispatching email notification via Resend." },
      { status: 500 }
    );
  }
}
