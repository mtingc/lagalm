import { NextResponse, NextRequest } from 'next/server';
import { mailOptions, transporter } from "@/config/nodemailer";
import { ContactFormData } from "@/interfaces/formData.interface";

export async function POST(req: NextRequest) {
  try {
    const data: ContactFormData = await req.json();
  
    if (!data.firstname || !data.lastname || !data.email || !data.company || !data.message) {
      return NextResponse.json({ message: "Bad request" });
    }
  
    const email = await transporter.sendMail({
      ...mailOptions,
      subject: `Importante: Persona interesada en contactarse`,
      text: `From: ${data.firstname} ${data.lastname} (${data.email})\n\n${data.message}`,
      html: `
        <p>Estimado equipo de <strong>Lagalm</strong>, les escribo para informarles que una persona está intentando contactarse a través de nuestro formulario de contacto en la página web.</p>
        <p>Este contacto es de suma importancia y requerirá una pronta atención.</p>
        <br />
        <strong>Por favor, revisen la siguiente información del remitente:</strong>
        <br />
        <p><strong>Nombre:</strong> ${data.firstname} ${data.lastname}</p>
        <p><strong>Correo:</strong> ${data.email}</p>
        <p><strong>Empresa:</strong> ${data.company}</p>
        <p><strong>Mensaje:</strong> ${data.message}</p>
      `
    });
  
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ message: error.message });
  }
}
