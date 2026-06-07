import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER || 'fiiifit.nutrition@gmail.com',
    pass: process.env.GMAIL_PASSWORD, // App password din Google
  },
});

export async function sendWelcomeEmail(
  to: string,
  firstName: string,
  plan: string,
  planName: string
) {
  const htmlContent = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
      .container { max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px; border-radius: 10px; }
      .content { background: white; padding: 40px; border-radius: 8px; }
      .header { text-align: center; margin-bottom: 30px; }
      .logo { font-size: 28px; font-weight: bold; color: #667eea; }
      .welcome-title { font-size: 24px; font-weight: bold; color: #333; margin: 20px 0; }
      .benefit { background: #f0f4ff; padding: 15px; margin: 15px 0; border-left: 4px solid #667eea; border-radius: 4px; }
      .benefit-icon { font-size: 20px; margin-right: 10px; }
      .plan-box { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center; }
      .plan-duration { font-size: 32px; font-weight: bold; }
      .plan-label { font-size: 14px; opacity: 0.9; }
      .cta-button { display: inline-block; background: #667eea; color: white; padding: 12px 30px; border-radius: 6px; text-decoration: none; font-weight: bold; margin-top: 20px; }
      .footer { text-align: center; margin-top: 40px; border-top: 1px solid #ddd; padding-top: 20px; font-size: 12px; color: #999; }
      .social { margin: 20px 0; }
      .social a { display: inline-block; margin: 0 10px; color: #667eea; text-decoration: none; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="content">
        <div class="header">
          <div class="logo">🎯 FiiFit Nutrition</div>
        </div>

        <div class="welcome-title">
          Bine ai venit, ${firstName}! 🎉
        </div>

        <p>
          Îți mulțumim că te-ai alăturat comunității FiiFit! Ești gata să-ți transformi viața cu programul nostru personalizat de nutriție și fitness?
        </p>

        <div class="plan-box">
          <div class="plan-label">Planul tău:</div>
          <div class="plan-duration">${planName}</div>
        </div>

        <h3 style="color: #667eea; margin-top: 30px;">Ce te așteaptă:</h3>

        <div class="benefit">
          <span class="benefit-icon">📋</span>
          <strong>Programe Personalizate</strong> - Antrenamente adaptate nivelului tău de fitness
        </div>

        <div class="benefit">
          <span class="benefit-icon">🥗</span>
          <strong>Planuri de Nutriție</strong> - Meniu zilnic adaptat preferințelor tale
        </div>

        <div class="benefit">
          <span class="benefit-icon">📊</span>
          <strong>Tracking Progres</strong> - Monitorizează rezultatele în timp real
        </div>

        <div class="benefit">
          <span class="benefit-icon">🤝</span>
          <strong>Comunitate Suport</strong> - Alătură-te la 4500+ utilizatori motivați
        </div>

        <div class="benefit">
          <span class="benefit-icon">📱</span>
          <strong>App Mobile</strong> - Acces complet pe telefon, oricând, oriunde
        </div>

        <p style="margin-top: 30px; padding: 20px; background: #fffaf0; border-radius: 6px; border-left: 4px solid #ffa500;">
          <strong>⚠️ Pasul Următor:</strong><br>
          Platforma ta este activă! Accesează aplicația și personalizează-ți profilul pentru a primi recomandări optime.
        </p>

        <a href="https://fiiifit.com/app" class="cta-button">
          Accesează Acum →
        </a>

        <div class="footer">
          <p>
            Dacă ai întrebări, nu ezita să ne contactezi: <strong>support@fiiifit.com</strong>
          </p>
          <div class="social">
            <a href="#">Facebook</a> •
            <a href="#">Instagram</a> •
            <a href="#">TikTok</a>
          </div>
          <p>© 2026 FiiFit Nutrition. Toate drepturile rezervate.</p>
        </div>
      </div>
    </div>
  </body>
</html>
  `;

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER || 'fiiifit.nutrition@gmail.com',
      to,
      subject: `🎉 Bine ai venit la FiiFit, ${firstName}! Încep acum!`,
      html: htmlContent,
    });

    console.log(`Email trimis cu succes la ${to}`);
    return { success: true };
  } catch (error) {
    console.error('Email send error:', error);
    return { success: false, error };
  }
}
