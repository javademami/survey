export default async function handler(req, res) {
  if (req.method === "POST") {
    const surveyData = req.body;
    console.log("داده‌های نظرسنجی دریافت شد:", surveyData);

    // اینجا می‌توانید داده‌ها را در پایگاه داده ذخیره کنید
    // مثلاً با MongoDB یا سایر دیتابیس‌ها.

    return res.status(200).json({ message: "نظرسنجی با موفقیت ذخیره شد." });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}