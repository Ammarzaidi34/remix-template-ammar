// app/routes/contact.jsx
import type { MetaFunction } from "@remix-run/node";
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import contactData from "~/data/restaurant.json";

export const meta: MetaFunction = () => {
  return [
    { title: "About Us | Website Template" },
    { name: "description", content: "This is the about us page" },
  ];
};
export const loader: LoaderFunction = async () => {
  return json(contactData);
};

export default function aboutUs() {
  const data = useLoaderData<typeof loader>();
  return (
    <section id="about" className="">
      <div className="container mx-auto py-10 px-6 md:px-0">
        <div className="flex flex-col gap-7 md:flex-row md:flex-wrap">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-5">
              Delicious, Fresh and Flavorful {data.cuisine} food in {data.city}
            </h2>
            <p className="text-lg mb-5">
              Get a taste of the best, local {data.cuisine} food in {data.city}! 
              {data.name} offers delicious {data.cuisine} dishes made with the
              freshest ingredients. Locally owned and operated, {data.name}
              prides itself on offering its customers an amazing dining
              experience. Our mission is to create the best {data.cuisine} food
              and provide exceptional service that will leave guests feeling
              satisfied and ready to come back for more.
            </p>

            <p className="text-lg mb-5">
              Whether you're joining us in person or looking for a quick bite to
              go, {data.name} has you covered. We are proud to offer multiple ways
              for you to enjoy your favorite dishes. Dine in-house or place your
              order online for easy and fast {data.cuisine} takeout or delivery
              in {data.city}. You won't be disappointed!
            </p>
          </div>

          <div className="flex-1">
            <img
              className="w-full rounded-3xl shadow-xl max-h-[450px] object-cover object-center"
              src={data.aboutPageImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
