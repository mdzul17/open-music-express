require("dotenv").config();
const nodemailer = require("nodemailer");

module.exports = {
  sendCode: async (to, code) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.MAIL_ADDRESS, // generated ethereal user
        pass: process.env.MAIL_PASSWORD, // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `"cyberzone" <noreply@cyberzone.id>`, // sender address
      to, // list of receivers
      subject: `Reset password akun cyberzone anda`, // Subject line
      html: `
          <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head>
          <!--[if gte mso 9]><xml>
           <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
           </o:OfficeDocumentSettings>
          </xml><![endif]-->
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
          <meta name="viewport" content="width=device-width">
          <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
          <title></title>
          <!--[if !mso]>-->
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css">
        <!--<![endif]-->
          
          <style type="text/css" id="media-query">
            body {
              margin: 0;
              padding: 0; }
            
            table, tr, td {
              vertical-align: top;
              border-collapse: collapse; }
            .nav_margin{margin:20px 0px !important;}
            .ie-browser table, .mso-container table {
              table-layout: fixed; }
            
            * {
              line-height: inherit; }
            
            a[x-apple-data-detectors=true] {
              color: inherit !important;
              text-decoration: none !important; }
            
            [owa] .img-container div, [owa] .img-container button {
              display: block !important; }
            
            [owa] .fullwidth button {
              width: 100% !important; }
            
            [owa] .block-grid .col {
              display: table-cell;
              float: none !important;
              vertical-align: top; }
            
            .ie-browser .num12, .ie-browser .block-grid, [owa] .num12, [owa] .block-grid {
              width: 640px !important; }
            
            .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {
              line-height: 100%; }
            
            .ie-browser .mixed-two-up .num4, [owa] .mixed-two-up .num4 {
              width: 212px !important; }
            
            .ie-browser .mixed-two-up .num8, [owa] .mixed-two-up .num8 {
              width: 424px !important; }
            
            .ie-browser .block-grid.two-up .col, [owa] .block-grid.two-up .col {
              width: 320px !important; }
            
            .ie-browser .block-grid.three-up .col, [owa] .block-grid.three-up .col {
              width: 213px !important; }
            
            .ie-browser .block-grid.four-up .col, [owa] .block-grid.four-up .col {
              width: 160px !important; }
            
            .ie-browser .block-grid.five-up .col, [owa] .block-grid.five-up .col {
              width: 128px !important; }
            
            .ie-browser .block-grid.six-up .col, [owa] .block-grid.six-up .col {
              width: 106px !important; }
            
            .ie-browser .block-grid.seven-up .col, [owa] .block-grid.seven-up .col {
              width: 91px !important; }
            
            .ie-browser .block-grid.eight-up .col, [owa] .block-grid.eight-up .col {
              width: 80px !important; }
            
            .ie-browser .block-grid.nine-up .col, [owa] .block-grid.nine-up .col {
              width: 71px !important; }
            
            .ie-browser .block-grid.ten-up .col, [owa] .block-grid.ten-up .col {
              width: 64px !important; }
            
            .ie-browser .block-grid.eleven-up .col, [owa] .block-grid.eleven-up .col {
              width: 58px !important; }
            
            .ie-browser .block-grid.twelve-up .col, [owa] .block-grid.twelve-up .col {
              width: 53px !important; }
            
            @media only screen and (min-width: 660px) {
              .block-grid {
                width: 640px !important; }
              .block-grid .col {
                vertical-align: top; }
                .block-grid .col.num12 {
                  width: 640px !important; }
              .block-grid.mixed-two-up .col.num4 {
                width: 212px !important; }
              .block-grid.mixed-two-up .col.num8 {
                width: 424px !important; }
              .block-grid.two-up .col {
                width: 320px !important; }
              .block-grid.three-up .col {
                width: 213px !important; }
              .block-grid.four-up .col {
                width: 160px !important; }
              .block-grid.five-up .col {
                width: 128px !important; }
              .block-grid.six-up .col {
                width: 106px !important; }
              .block-grid.seven-up .col {
                width: 91px !important; }
              .block-grid.eight-up .col {
                width: 80px !important; }
              .block-grid.nine-up .col {
                width: 71px !important; }
              .block-grid.ten-up .col {
                width: 64px !important; }
              .block-grid.eleven-up .col {
                width: 58px !important; }
              .block-grid.twelve-up .col {
                width: 53px !important; } 
              }
            
            @media (max-width: 660px) {
              .block-grid, .col {
                min-width: 320px !important;
                max-width: 100% !important;
                display: block !important; }
              .block-grid {
                width: calc(100% - 40px) !important; }
              .col {
                width: 100% !important; }
                .col > div {
                  margin: 0 auto; }
              img.fullwidth, img.fullwidthOnMobile {
                max-width: 100% !important; }
              .no-stack .col {
                min-width: 0 !important;
                display: table-cell !important; }
              .no-stack.two-up .col {
                width: 50% !important; }
              .no-stack.mixed-two-up .col.num4 {
                width: 33% !important; }
              .no-stack.mixed-two-up .col.num8 {
                width: 66% !important; }
              .no-stack.three-up .col.num4 {
                width: 33% !important; }
              .no-stack.four-up .col.num3 {
                width: 25% !important; } 
            .nav_margin{margin:0px 0px !important;}
              }
          </style>
      </head>
      <body class="clean-body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #FFFFFF">
        <style type="text/css" id="media-query-bodytag">
          @media (max-width: 520px) {
            .block-grid {
              min-width: 320px!important;
              max-width: 100%!important;
              width: 100%!important;
              display: block!important;
            }
      .nav_margin{margin:0px 0px !important;}
            .col {
              min-width: 320px!important;
              max-width: 100%!important;
              width: 100%!important;
              display: block!important;
            }
      
            .col > div {
              margin: 0 auto;
            }
            img.fullwidth {
              max-width: 60%!important;
              margin:0 auto;
            }
            img.fullwidthOnMobile {
              max-width: 100%!important;
            }
            .no-stack .col {
              min-width: 0!important;
              display: table-cell!important;
            }
            .no-stack.two-up .col {
              width: 50%!important;
            }
            .no-stack.mixed-two-up .col.num4 {
              width: 33%!important;
            }
            .no-stack.mixed-two-up .col.num8 {
              width: 66%!important;
            }
            .no-stack.three-up .col.num4 {
              width: 33%!important
            }
            .no-stack.four-up .col.num3 {
              width: 25%!important
            }
          }
        </style>
      </head>
       <body style="margin:0;padding:0;min-width: 100%;background-color:#F7F7F7;"> <!-- Max-width Table --> 
        <table class="notification-v4" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#F7F7F7"> 
         <tbody>
          <tr> 
           <td></td> 
           <td width="415"> <!-- Max-width Table --> <!-- Padding Between Screen and Content Table --> 
            <table width="100%" cellspacing="0" cellpadding="0" border="0"> 
             <tbody>
              <tr> 
               <td width="20"><img src="" height="1" width="20" style="display: block;"></td> 
               <td width="100%"> <!-- Padding Between Screen and Content Table --> <!-- Content Column Table --> 
                <table width="100%" cellspacing="0" cellpadding="0"> 
                 <tbody>
                  <tr>
                   <td height="50"> <img src="" width="1" height="50" style="display: block;"> </td>
                  </tr> 
                  <tr> 
                   <td align="center"> 
                    <table align="center" class="container" border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff" width="100%" style="-webkit-border-radius: 24px;  -moz-border-radius: 24px;  -ms-border-radius: 24px;  -o-border-radius: 24px;  border-radius: 24px;  overflow: hidden;  table-layout: fixed;"> 
                     <tbody>
                      <tr>
                       <td height="48"> <img src="" width="1" height="48" style="display: block;"> </td>
                      </tr> 
                      <tr> 
                       
                      </tr> 
                      <tr>
                       <td height="24"> <img src="" width="1" height="24" style="display: block;"> </td>
                      </tr> 
                      <tr> 
                       <td align="center" style="padding: 0 48px"> 
                        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"> 
                         <tbody>
                          <tr>
                           <td align="center" class="title" style="font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif;  font-size: 16px;  font-weight: 400;  letter-spacing: 0.2px;  line-height: 22px;  color: #333;">
                            <div class="text" style="overflow: hidden;">
                             Reset Password
                            </div></td>
                          </tr> 
                          <tr>
                           <td height="16"> <img src="" width="1" height="16" style="display: block;"> </td>
                          </tr> 
                         </tbody>
                        </table> </td> 
                      </tr> 
                      <tr> 
                       <td align="center" style="padding: 0 48px"> 
                        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"> 
                         <tbody>
                          <tr>
                           <td align="center" class="secondary" style="color: #999;  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif;  font-size: 16px;  line-height: 24px;  font-weight: 400;">
                            <div class="subtitle text" style="overflow: hidden;">
                             Anda mencoba me-reset password akun Cyberzone anda, Berikut kode untuk reset password.
                            </div></td>
                          </tr> 
                          <tr>
                           <td height="22"> <img src="" width="1" height="22" style="display: block;"> </td>
                          </tr> 
                         </tbody>
                        </table> </td> 
                      </tr> 
                      <tr>
                       <td height="24"> <img src="" width="1" height="24" style="display: block;"> </td>
                      </tr> 
                      <tr> 
                       <td align="center"> 
                        <table border="0" cellpadding="0" cellspacing="0"> 
                         <tbody>
                          <tr>
                           <td height="70" align="center" valign="middle" class="button" style="border: 1px solid #E6E6E6;  display: block;  -webkit-border-radius: 8px;  -moz-border-radius: 8px;  -ms-border-radius: 8px;  -o-border-radius: 8px;  border-radius: 8px;"> <a class="primary-button" href="##link##" style="color: #00D64F;  display: inline-block;  font-size: 18px;  font-weight: 500;  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif;  text-decoration: none;  width: 212px;  text-align: center;  line-height: 70px;  letter-spacing: 0.2px;"> <span ">${code}</span> </a> </td>
                          </tr> 
                         </tbody>
                        </table> </td> 
                      </tr> 
                      <tr>
                       <td height="12"> <img src="" width="1" height="12" style="display: block;"> </td>
                      </tr> 
                      <tr>
                       <td height="36"> <img src="" width="1" height="36" style="display: block;"> </td>
                      </tr> 
                     </tbody>
                    </table> </td> 
                  </tr> <!-- Large Gap between content and footer text areas --> 
                  <tr>
                   <td> 
                    <table align="center" class="container" border="0" cellpadding="0" cellspacing="0" width="280" style="-webkit-border-radius: 24px;  -moz-border-radius: 24px;  -ms-border-radius: 24px;  -o-border-radius: 24px;  border-radius: 24px;  overflow: hidden;  table-layout: fixed;"> 
                     <tbody>
                      <tr>
                       <td height="24"> <img src="" width="1" height="24" style="display: block;"> </td>
                      </tr> 
                     </tbody>
                    </table> </td>
                  </tr> 
                  <tr>
                   <td height="1"> <img src="" width="1" height="1" style="display: block;"> </td>
                  </tr> 
                  <tr>
                   <td align="center"> 
                    <div class="footer" style="font-size: 14px;  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif;  line-height: 24px;  font-weight: 300;  text-align: center;  color: #999;"> <a href="##link##" style="color: #999;  text-decoration: none;  padding: 0 10px;">© Square Inc.</a> 
                    </div> </td>
                  </tr> 
                  <tr>
                   <td height="70"> <img src="" width="1" height="70" style="display: block;"> </td>
                  </tr> 
                 </tbody>
                </table> <!-- Content Column Table --> <!-- Padding Between Screen and Content Table --> </td> 
               <td width="20"><img src="" height="1" width="20" style="display: block;"></td> 
              </tr> 
             </tbody>
            </table> <!-- Padding Between Screen and Content Table --> <!-- Max-width Table --> </td> 
           <td></td> 
          </tr> 
         </tbody>
        </table> <!-- Max-width Table -->  
      
      </body>
      </html>
    `, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  },

  sendVerif: async (to, url) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "doejohn2036@gmail.com", // generated ethereal user
        pass: "jnokczrzrghlayid", // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `"cyberzone" <noreply@cyberzone.id>`, // sender address
      to, // list of receivers
      subject: `Verifikasi akun cyberzone anda`, // Subject line
      html: `
          <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head>
          <!--[if gte mso 9]><xml>
           <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
           </o:OfficeDocumentSettings>
          </xml><![endif]-->
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
          <meta name="viewport" content="width=device-width">
          <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
          <title></title>
          <!--[if !mso]>-->
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css">
        <!--<![endif]-->
          
          <style type="text/css" id="media-query">
            body {
              margin: 0;
              padding: 0; }
            
            table, tr, td {
              vertical-align: top;
              border-collapse: collapse; }
            .nav_margin{margin:20px 0px !important;}
            .ie-browser table, .mso-container table {
              table-layout: fixed; }
            
            * {
              line-height: inherit; }
            
            a[x-apple-data-detectors=true] {
              color: inherit !important;
              text-decoration: none !important; }
            
            [owa] .img-container div, [owa] .img-container button {
              display: block !important; }
            
            [owa] .fullwidth button {
              width: 100% !important; }
            
            [owa] .block-grid .col {
              display: table-cell;
              float: none !important;
              vertical-align: top; }
            
            .ie-browser .num12, .ie-browser .block-grid, [owa] .num12, [owa] .block-grid {
              width: 640px !important; }
            
            .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {
              line-height: 100%; }
            
            .ie-browser .mixed-two-up .num4, [owa] .mixed-two-up .num4 {
              width: 212px !important; }
            
            .ie-browser .mixed-two-up .num8, [owa] .mixed-two-up .num8 {
              width: 424px !important; }
            
            .ie-browser .block-grid.two-up .col, [owa] .block-grid.two-up .col {
              width: 320px !important; }
            
            .ie-browser .block-grid.three-up .col, [owa] .block-grid.three-up .col {
              width: 213px !important; }
            
            .ie-browser .block-grid.four-up .col, [owa] .block-grid.four-up .col {
              width: 160px !important; }
            
            .ie-browser .block-grid.five-up .col, [owa] .block-grid.five-up .col {
              width: 128px !important; }
            
            .ie-browser .block-grid.six-up .col, [owa] .block-grid.six-up .col {
              width: 106px !important; }
            
            .ie-browser .block-grid.seven-up .col, [owa] .block-grid.seven-up .col {
              width: 91px !important; }
            
            .ie-browser .block-grid.eight-up .col, [owa] .block-grid.eight-up .col {
              width: 80px !important; }
            
            .ie-browser .block-grid.nine-up .col, [owa] .block-grid.nine-up .col {
              width: 71px !important; }
            
            .ie-browser .block-grid.ten-up .col, [owa] .block-grid.ten-up .col {
              width: 64px !important; }
            
            .ie-browser .block-grid.eleven-up .col, [owa] .block-grid.eleven-up .col {
              width: 58px !important; }
            
            .ie-browser .block-grid.twelve-up .col, [owa] .block-grid.twelve-up .col {
              width: 53px !important; }
            
            @media only screen and (min-width: 660px) {
              .block-grid {
                width: 640px !important; }
              .block-grid .col {
                vertical-align: top; }
                .block-grid .col.num12 {
                  width: 640px !important; }
              .block-grid.mixed-two-up .col.num4 {
                width: 212px !important; }
              .block-grid.mixed-two-up .col.num8 {
                width: 424px !important; }
              .block-grid.two-up .col {
                width: 320px !important; }
              .block-grid.three-up .col {
                width: 213px !important; }
              .block-grid.four-up .col {
                width: 160px !important; }
              .block-grid.five-up .col {
                width: 128px !important; }
              .block-grid.six-up .col {
                width: 106px !important; }
              .block-grid.seven-up .col {
                width: 91px !important; }
              .block-grid.eight-up .col {
                width: 80px !important; }
              .block-grid.nine-up .col {
                width: 71px !important; }
              .block-grid.ten-up .col {
                width: 64px !important; }
              .block-grid.eleven-up .col {
                width: 58px !important; }
              .block-grid.twelve-up .col {
                width: 53px !important; } 
              }
            
            @media (max-width: 660px) {
              .block-grid, .col {
                min-width: 320px !important;
                max-width: 100% !important;
                display: block !important; }
              .block-grid {
                width: calc(100% - 40px) !important; }
              .col {
                width: 100% !important; }
                .col > div {
                  margin: 0 auto; }
              img.fullwidth, img.fullwidthOnMobile {
                max-width: 100% !important; }
              .no-stack .col {
                min-width: 0 !important;
                display: table-cell !important; }
              .no-stack.two-up .col {
                width: 50% !important; }
              .no-stack.mixed-two-up .col.num4 {
                width: 33% !important; }
              .no-stack.mixed-two-up .col.num8 {
                width: 66% !important; }
              .no-stack.three-up .col.num4 {
                width: 33% !important; }
              .no-stack.four-up .col.num3 {
                width: 25% !important; } 
            .nav_margin{margin:0px 0px !important;}
              }
          </style>
      </head>
      <body class="clean-body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #FFFFFF">
        <style type="text/css" id="media-query-bodytag">
          @media (max-width: 520px) {
            .block-grid {
              min-width: 320px!important;
              max-width: 100%!important;
              width: 100%!important;
              display: block!important;
            }
      .nav_margin{margin:0px 0px !important;}
            .col {
              min-width: 320px!important;
              max-width: 100%!important;
              width: 100%!important;
              display: block!important;
            }
      
            .col > div {
              margin: 0 auto;
            }
            img.fullwidth {
              max-width: 60%!important;
              margin:0 auto;
            }
            img.fullwidthOnMobile {
              max-width: 100%!important;
            }
            .no-stack .col {
              min-width: 0!important;
              display: table-cell!important;
            }
            .no-stack.two-up .col {
              width: 50%!important;
            }
            .no-stack.mixed-two-up .col.num4 {
              width: 33%!important;
            }
            .no-stack.mixed-two-up .col.num8 {
              width: 66%!important;
            }
            .no-stack.three-up .col.num4 {
              width: 33%!important
            }
            .no-stack.four-up .col.num3 {
              width: 25%!important
            }
          }
        </style>
      </head>
       <body style="margin:0;padding:0;min-width: 100%;background-color:#F7F7F7;"> <!-- Max-width Table --> 
        <table class="notification-v4" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#F7F7F7"> 
         <tbody>
          <tr> 
           <td></td> 
           <td width="415"> <!-- Max-width Table --> <!-- Padding Between Screen and Content Table --> 
            <table width="100%" cellspacing="0" cellpadding="0" border="0"> 
             <tbody>
              <tr> 
               <td width="20"><img src="" height="1" width="20" style="display: block;"></td> 
               <td width="100%"> <!-- Padding Between Screen and Content Table --> <!-- Content Column Table --> 
                <table width="100%" cellspacing="0" cellpadding="0"> 
                 <tbody>
                  <tr>
                   <td height="50"> <img src="" width="1" height="50" style="display: block;"> </td>
                  </tr> 
                  <tr> 
                   <td align="center"> 
                    <table align="center" class="container" border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff" width="100%" style="-webkit-border-radius: 24px;  -moz-border-radius: 24px;  -ms-border-radius: 24px;  -o-border-radius: 24px;  border-radius: 24px;  overflow: hidden;  table-layout: fixed;"> 
                     <tbody>
                      <tr>
                       <td height="48"> <img src="" width="1" height="48" style="display: block;"> </td>
                      </tr> 
                      <tr> 
                       
                      </tr> 
                      <tr>
                       <td height="24"> <img src="" width="1" height="24" style="display: block;"> </td>
                      </tr> 
                      <tr> 
                       <td align="center" style="padding: 0 48px"> 
                        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"> 
                         <tbody>
                          <tr>
                           <td align="center" class="title" style="font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif;  font-size: 16px;  font-weight: 400;  letter-spacing: 0.2px;  line-height: 22px;  color: #333;">
                            <div class="text" style="overflow: hidden;">
                             Verifikasi email
                            </div></td>
                          </tr> 
                          <tr>
                           <td height="16"> <img src="" width="1" height="16" style="display: block;"> </td>
                          </tr> 
                         </tbody>
                        </table> </td> 
                      </tr> 
                      <tr> 
                       <td align="center" style="padding: 0 48px"> 
                        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"> 
                         <tbody>
                          <tr>
                           <td align="center" class="secondary" style="color: #999;  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif;  font-size: 16px;  line-height: 24px;  font-weight: 400;">
                            <div class="subtitle text" style="overflow: hidden;">
                             Silahkan klik tombol dibawah ini untuk melanjutkan
                            </div></td>
                          </tr> 
                          <tr>
                           <td height="22"> <img src="" width="1" height="22" style="display: block;"> </td>
                          </tr> 
                         </tbody>
                        </table> </td> 
                      </tr> 
                      <tr>
                       <td height="24"> <img src="" width="1" height="24" style="display: block;"> </td>
                      </tr> 
                      <tr> 
                       <td align="center"> 
                        <table border="0" cellpadding="0" cellspacing="0"> 
                         <tbody>
                          <tr>
                           <td height="70" align="center" valign="middle" class="button" style="border: 1px solid #E6E6E6;  display: block;  -webkit-border-radius: 8px;  -moz-border-radius: 8px;  -ms-border-radius: 8px;  -o-border-radius: 8px;  border-radius: 8px;"> <a class="primary-button" href="${url}" style="color: #00D64F;  display: inline-block;  font-size: 18px;  font-weight: 500;  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif;  text-decoration: none;  width: 212px;  text-align: center;  line-height: 70px;  letter-spacing: 0.2px;"> <span ">Verifikasi</span> </a> </td>
                          </tr> 
                         </tbody>
                        </table> </td> 
                      </tr> 
                      <tr>
                       <td height="12"> <img src="" width="1" height="12" style="display: block;"> </td>
                      </tr> 
                      <tr>
                       <td height="36"> <img src="" width="1" height="36" style="display: block;"> </td>
                      </tr> 
                     </tbody>
                    </table> </td> 
                  </tr> <!-- Large Gap between content and footer text areas --> 
                  <tr>
                   <td> 
                    <table align="center" class="container" border="0" cellpadding="0" cellspacing="0" width="280" style="-webkit-border-radius: 24px;  -moz-border-radius: 24px;  -ms-border-radius: 24px;  -o-border-radius: 24px;  border-radius: 24px;  overflow: hidden;  table-layout: fixed;"> 
                     <tbody>
                      <tr>
                       <td height="24"> <img src="" width="1" height="24" style="display: block;"> </td>
                      </tr> 
                     </tbody>
                    </table> </td>
                  </tr> 
                  <tr>
                   <td height="1"> <img src="" width="1" height="1" style="display: block;"> </td>
                  </tr> 
                  <tr>
                   <td align="center"> 
                    <div class="footer" style="font-size: 14px;  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif;  line-height: 24px;  font-weight: 300;  text-align: center;  color: #999;"> <a href="##link##" style="color: #999;  text-decoration: none;  padding: 0 10px;">© Square Inc.</a> 
                    </div> </td>
                  </tr> 
                  <tr>
                   <td height="70"> <img src="" width="1" height="70" style="display: block;"> </td>
                  </tr> 
                 </tbody>
                </table> <!-- Content Column Table --> <!-- Padding Between Screen and Content Table --> </td> 
               <td width="20"><img src="" height="1" width="20" style="display: block;"></td> 
              </tr> 
             </tbody>
            </table> <!-- Padding Between Screen and Content Table --> <!-- Max-width Table --> </td> 
           <td></td> 
          </tr> 
         </tbody>
        </table> <!-- Max-width Table -->  
      
      </body>
      </html>
    `, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  },
};
