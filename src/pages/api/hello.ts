import nodemailer from 'nodemailer';

export const POST = async ({ request }) => {
  const data = await request.formData();
  const name = data.get('name');
  const email = data.get('email');
  const message = data.get('message');

  // Configure your transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jamescook214@gmail.com',
      pass: import.meta.env.MAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: email?.toString(),
      to: 'jaemscook214@gmail.com',
      subject: `Contact Form Submission from ${name}`,
      text: message?.toString(),
    });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
};