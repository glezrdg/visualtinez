import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const DESTINATION_EMAIL = "visualtinez@gmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, email, telefono, servicio, mensaje } = body;

    if (!nombre || !email || !servicio || !mensaje) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const servicioLabels: Record<string, string> = {
      fotografia: "Fotografía",
      videografia: "Producción Audiovisual",
      redes: "Gestión de Redes Sociales",
      marketing: "Marketing Digital",
      paquete: "Paquete completo (varios servicios)",
    };

    await transporter.sendMail({
      from: `"Visual Tinez Web" <${process.env.GMAIL_USER}>`,
      to: DESTINATION_EMAIL,
      replyTo: email,
      subject: `Nuevo contacto: ${nombre} — ${servicioLabels[servicio] || servicio}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #005a6a; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">Nuevo mensaje desde la web</h1>
          </div>
          <div style="background: #f8fafc; padding: 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #334155; width: 140px;">Nombre</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${nombre}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #334155;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;"><a href="mailto:${email}" style="color: #005a6a;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #334155;">Teléfono</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${telefono || "No proporcionado"}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #334155;">Servicio</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${servicioLabels[servicio] || servicio}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #334155; vertical-align: top;">Mensaje</td>
                <td style="padding: 12px 0; color: #1e293b; white-space: pre-wrap;">${mensaje}</td>
              </tr>
            </table>
          </div>
          <p style="text-align: center; color: #94a3b8; font-size: 12px; margin-top: 16px;">
            Enviado desde visualtinez.com
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error enviando email:", error);
    return NextResponse.json(
      { error: "Error al enviar el mensaje" },
      { status: 500 }
    );
  }
}
