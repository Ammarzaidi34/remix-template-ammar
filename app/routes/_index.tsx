import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "My App" },
    { name: "description", content: "This is homepage" },
  ];
};

export default function Homepage() {
  return (
    <section id="banner" className="">
    <div className="max-w-screen-xl mx-auto w-full px-6 py-16">
        <div className="flex flex-col gap-7 md:flex-row md:flex-wrap">
            <div className="flex-1">
                <h2 className="text-4xl font-bold mb-5">This is banner Text</h2>
                <p className="text-lg">
          
                </p>
            </div>
        </div>
    </div>
</section>
  );
}
