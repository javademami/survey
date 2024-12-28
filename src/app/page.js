"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const navigateToSurvey = () => {
    router.push("/survey"); // به صفحه نظرسنجی هدایت می‌شود
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
        به نظرسنجی ما خوش آمدید!
      </h1>
      <p className="text-lg text-gray-600 text-center mb-8 max-w-lg">
        ما به دنبال نظرات شما درباره سبک زندگی هستیم. با پاسخ دادن به سوالات 
        کوتاه ما، به ما در بهبود کیفیت خدمات کمک کنید.
      </p>
      <button
        onClick={navigateToSurvey}
        className="px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-blue-700 transition-all"
      >
        شروع نظرسنجی
      </button>
    </div>
  );
}
