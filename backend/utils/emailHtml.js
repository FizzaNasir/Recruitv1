// This file contains the HTML for the email that is sent to the user when they request a password reset.
exports.emailHtml = resetPasswordLink => {
  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Reset Password</title>
    <style>
      body {
        font-family: Arial, sans-serif;
      }

      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
      }

      a {
        color: white;
        background-color: #412a94;
        padding: 10px 10px;
        border-radius: 10px;
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }

      #cm {
        color: #412a94;
      }

      #link {
        margin: 30px 0px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <p>Hi there,</p>
      <p>We received a request to reset the password for your account. If you made this request, please click the link below to reset your password:</p>
      <p id="link">
        <a href="${resetPasswordLink}">Reset Password</a>
      </p>
      <p>If you did not make this request, you can ignore this email.</p>
      <p>Thanks,</p>
      <p id="cm">The Recruuit team</p>
    </div>
  </body>
</html>
`;
};
