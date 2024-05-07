import nodemailer from 'nodemailer';

export const maleSender = async (email, title, body) => {
     try {
          let transporter = nodemailer.createTransport({
               host: 'smtp.gmail.com',
               auth: {
                    user: 'sohith73@gmail.com',
                    pass: 'ayed ylfn xfcr jxoh'
               },
               secure: true,
          })
          let info = await transporter.sendMail({
               from: `"CheckInnEase | BSC"`,
               to: `${email}`,
               subject: `${title}`, 
               html: `${body}`, 
          })
          console.log(info.response)
          return info
     } catch (error) {
          console.log(error.message)
          return error.message
     }
}

