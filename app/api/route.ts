import { NextResponse } from "next/server";
import axios, { AxiosError } from "axios";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return new NextResponse("Adresse courriel manquante", { status: 400 });
    }

    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const DATACENTER = process.env.MAILCHIMP_API_SERVER;

    const values = {
      email_address: email,
      status: "subscribed",
    };

    const response = await axios.post(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
      values,
      {
        headers: {
          Authorization: `apikey ${API_KEY}`,
          "Content-Type": "application/json",
        },
      },
    );

    return NextResponse.json(response.data);
  } catch (error: any | AxiosError) {
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError = error;
      if (axiosError.response && axiosError.response.status === 400) {
        return NextResponse.json(axiosError.response.data);
      }
    }

    return new NextResponse("Internal Server Error!!", {
      status: 500,
    });
  }
}
