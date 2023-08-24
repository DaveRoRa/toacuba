import { NextResponse } from "next/server";
import mailgun from "mailgun-js";

const mg = mailgun({
  apiKey: process.env.MAILGUN_APIKEY as string,
  domain: process.env.MAILGUN_DOMAIN as string,
});

export async function POST({ json }: Request) {
  const { email, address, name, message } = await json();
  try {
    const response = await new Promise((resolve, reject) => {
      mg.messages().send(
        {
          from: email,
          to: process.env.MAILGUN_DESTINATION_EMAIL as string,
          text: `${message} \n Address: ${address}`,
          subject: `From ${name}`,
        },
        (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        }
      );
    });
    return NextResponse.json({ data: response });
  } catch (error) {
    console.log("Error sending mail:>> ", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
