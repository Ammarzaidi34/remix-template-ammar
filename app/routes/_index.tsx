import type { MetaFunction } from "@remix-run/node";
import bannerImage from "~/images/banner.jpeg"; // Adjust the path as necessary

export const meta: MetaFunction = () => {
  return [
    { title: "Home | Website Template" },
    { name: "description", content: "Welcome to the landing page" },
  ];
};

export default function Index() {
  return (
    <section>
      <div className="container mx-auto px-6 md:px-0">
        <div className="rounded-md relative">
          <h1 className="text-3xl md:text-8xl font-bold text-center text-white absolute bottom-5 left-5">Homepage</h1>
          <img className="rounded-xl" src={bannerImage} alt="Banner-image" />
        </div>
      </div>
    </section>
  );
}
