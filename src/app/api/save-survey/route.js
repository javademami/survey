export async function POST(req) {
  const surveyData = await req.json(); // دریافت داده‌ها از درخواست
  console.log("داده‌های نظرسنجی دریافت شد:", surveyData);

  // اینجا می‌توانید داده‌ها را در پایگاه داده ذخیره کنید
  // مثلاً با MongoDB یا سایر دیتابیس‌ها.

  return new Response(JSON.stringify({ message: "نظرسنجی با موفقیت ذخیره شد." }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: { Allow: "POST" },
  });
}