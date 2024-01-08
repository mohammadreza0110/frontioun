import CourseCard from "@/components/CourseCard";
import React from "react";

export default function Courses() {
  const courseCards = [
    {
      title: "دوره ریکت",
      id: 1,
      price: 1500000,
      description:
        " توی این دوره شما راه و روش برنامه نویسی جاوااسکریپت رو یاد میگیرید و آماده میشید که از کتابخونه‌ها و فریمورک‌های اون استفاده کنید",
      image: {
        src: "/images/react.jpg",
        alt: "react image",
        width: 290,
        height: 100,
      },
    },
    {
      title: "دوره اچ تی ام ال",
      id: 2,
      price: 0,
      description:
        " توی این دوره شما راه و روش برنامه نویسی جاوااسکریپت رو یاد میگیرید و آماده میشید که از کتابخونه‌ها و فریمورک‌های اون استفاده کنید",
      image: {
        src: "/images/html.jpg",
        alt: "Htmlimage",
        width: 290,
        height: 100,
      },
    },
    {
      title: "دوره سی اس اس",
      id: 3,
      price: 300000,
      description:
        " توی این دوره شما راه و روش برنامه نویسی جاوااسکریپت رو یاد میگیرید و آماده میشید که از کتابخونه‌ها و فریمورک‌های اون استفاده کنید",
      image: {
        src: "/images/css.avif",
        alt: "Css image",
        width: 290,
        height: 100,
      },
    },
    {
      title: "دوره جاوااسکریپت",
      id: 4,
      price: 1000000,
      description:
        " توی این دوره شما راه و روش برنامه نویسی جاوااسکریپت رو یاد میگیرید و آماده میشید که از کتابخونه‌ها و فریمورک‌های اون استفاده کنید",
      image: {
        src: "/images/javascript.jpg",
        alt: "Js image",
        width: 500,
        height: 200,
      },
    },
  ];
  return (
    <main className="container mt-8">
      <h2 className="text-2xl font-bold">دوره‌های خفن آموزشی</h2>
      <div className="xl:grid xl:grid-cols-12 mt-20 gap-x-4">
        <section className="col-span-3 text-lg font-bold text-slate-700">
          <h2 className="px-8 py-4 mb-6 text-center bg-white rounded-xl">
            نوع دوره
          </h2>
          <h2 className="px-8 py-4 text-center bg-white rounded-xl">
            مرتب سازی
          </h2>
        </section>

        <section className="col-span-9 mt-28 xl:mt-0">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24">
            {courseCards.map((course, index) => {
              return (
                <CourseCard
                  image={course.image}
                  title={course.title}
                  price={course.price}
                  key={course.id}
                >
                  <p className="line-clamp-3">{course.description}</p>
                </CourseCard>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
