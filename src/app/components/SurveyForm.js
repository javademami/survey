"use client";

import React from "react";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.css";
import { Model } from "survey-core";

const SurveyForm = () => {
  const surveyJSON = {
    title: "نظرسنجی در مورد سبک زندگی",
    description: "لطفاً به سوالات زیر پاسخ دهید.",
    completedHtml: "<h3>از شرکت در نظرسنجی متشکریم!</h3>",
    pages: [
      {
        name: "page1",
        title: "اطلاعات اولیه",
        questions: [
          {
            type: "text",
            name: "name",
            title: "نام شما چیست؟",
            isRequired: true,
          },
          {
            type: "dropdown",
            name: "age",
            title: "سن خود را انتخاب کنید:",
            choices: ["زیر 18", "18-25", "26-35", "36-50", "بالای 50"],
            isRequired: true,
          },
          {
            type: "radiogroup",
            name: "gender",
            title: "جنسیت خود را انتخاب کنید:",
            choices: ["مرد", "زن", "دیگر"],
            isRequired: true,
          },
        ],
      },
      {
        name: "page2",
        title: "عادات روزمره",
        questions: [
          {
            type: "checkbox",
            name: "activities",
            title: "کدام یک از این فعالیت‌ها را انجام می‌دهید؟",
            choices: ["ورزش", "مطالعه", "تماشای فیلم", "بازی‌های ویدیویی"],
            isRequired: true,
          },
          {
            type: "rating",
            name: "sleep_quality",
            title: "چقدر از کیفیت خواب خود راضی هستید؟",
            rateValues: [1, 2, 3, 4, 5],
            minRateDescription: "خیلی کم",
            maxRateDescription: "خیلی زیاد",
          },
          {
            type: "boolean",
            name: "healthy_food",
            title: "آیا غذاهای سالم مصرف می‌کنید؟",
          },
        ],
      },
      {
        name: "page3",
        title: "بازخورد",
        questions: [
          {
            type: "comment",
            name: "feedback",
            title: "چه پیشنهادی برای بهبود سبک زندگی دارید؟",
          },
          {
            type: "text",
            name: "hobby",
            title: "سرگرمی مورد علاقه شما چیست؟",
          },
          {
            type: "file",
            name: "photo",
            title: "در صورت تمایل عکسی از خودتان آپلود کنید:",
            storeDataAsText: true,
            maxSize: 102400,
          },
        ],
      },
    ],
  };

  const survey = new Model(surveyJSON);

  survey.onComplete.add(async (sender) => {
    const response = await fetch("/api/save-survey", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sender.data),
    });

    if (response.ok) {
      console.log("نتایج نظرسنجی با موفقیت ارسال شد.");
    } else {
      console.error("خطا در ارسال نتایج.");
    }
  });

  return (
    <div
      className="rtl text-right bg-gray-100 p-6"
      style={{ direction: "rtl", margin: "20px auto", maxWidth: "800px" }}
    >
      <Survey model={survey} />
    </div>
  );
};

export default SurveyForm;
