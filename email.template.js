export default function emailTemplate(prop = { name: 'john smith', email: 'xyz@gmail.com', message: "Barking dog seldom bite.", sessionId: "pi-1234567890", logo: "xxxx" }) {
    const { name, email, message, sessionId, logo } = prop
    console.log(sessionId, 'sessionId')
    const currentDate = new Date().toLocaleDateString();

    return (`
<div style="
    font-family: Arial, sans-serif;
    max-width: 750px;
    margin: 0 auto;
    padding: 0;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    color: #333;
">
    <div style="
        background-color: black;
        padding: 1rem 0;
        border-radius: 8px 8px 0 0;
        text-align: center;
    ">
        <h1 style="color: white; font-size: 1.8em; margin: 0;">Vehware Ltd.</h1>
    </div>

    <div style="padding: 30px;">
        <p style="font-size: 1.4em; color: #333; margin-bottom: 10px;">
            Hello <strong style="font-style: italic;">${name}</strong>,
        </p>
        <p style="font-size: 1.2em; margin-bottom: 20px;">
            We appreciate your interest in our services. Here are the details of your inquiry:
        </p>
        <table style="
            width: 100%;
            font-size: 1.1em;
            border-collapse: collapse;
            margin-bottom: 20px;
        ">
            <tbody>
                <tr>
                    <td style="
                        padding: 10px 0;
                        font-weight: bold;
                        border-bottom: 1px solid #ddd;
                        width: 35%;
                    ">Email:</td>
                    <td style="
                        padding: 10px 0;
                        border-bottom: 1px solid #ddd;
                    ">${email}</td>
                </tr>
                <tr>
                    <td style="
                        padding: 10px 0;
                        font-weight: bold;
                        border-bottom: 1px solid #ddd;
                    ">Description:</td>
                    <td style="
                        padding: 10px 0;
                        border-bottom: 1px solid #ddd;
                    ">${message}</td>
                </tr>
            </tbody>
        </table>
        <div style="text-align: center; padding: 20px 0;">
            <p style="font-size: 1.2em; margin-bottom: 10px;">
                Please click the button below to complete your payment:
            </p>
            <a href="https://vehware-invoice.vercel.app/payment/${sessionId}" target="_blank" style="
                display: inline-block;
                padding: 15px 30px;
                background-color: #3f97cf;
                color: #fff;
                text-decoration: none;
                border-radius: 5px;
                font-size: 1.1em;
                font-weight: bold;
                transition: background-color 0.3s, transform 0.3s;
            ">
                Complete Your Payment
            </a>
        </div>
        <p style="margin-top: 30px; font-size: 1.1em;">
            Thank you for choosing us. If you have any questions, feel free to reach out at any time.
        </p>
        <p style="margin-top: 30px; font-weight: bold; font-size: 1.2em;">
            Best regards,
        </p>
        <p style="color: #FF6F00; font-weight: bold; font-size: 1.2em;">
            Vehware Ltd.
        </p>
    </div>
    <hr style="border: none; border-top: 1px solid #ddd; margin: 0;" />
    <div style="text-align: center; padding: 20px;">
        <p style="font-size: 1em; color: #888;">
            Date: ${currentDate}
        </p>
    </div>
</div>


    `)
}
