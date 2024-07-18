import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "About" },
    { name: "description", content: "This is about page" },
  ];
};

export default function About() {
  return (
    <section id="about" className="">
    <div className="max-w-screen-xl mx-auto w-full px-6 py-16">
        <div className="flex flex-col gap-7 md:flex-row md:flex-wrap">
            <div className="flex-1">
                <h2 className="text-4xl font-bold mb-5">This is About page</h2>
                <p className="text-lg">
          
                </p>
            </div>
        </div>
    </div>
</section>
  );
}
