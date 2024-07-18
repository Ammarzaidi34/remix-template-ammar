import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Contact" },
    { name: "description", content: "This is contact page" },
  ];
};

export default function Contact() {
  return (
    <section id="contact" className="">
    <div className="max-w-screen-xl mx-auto w-full px-6 py-16">
        <div className="flex flex-col gap-7 md:flex-row md:flex-wrap">
            <div className="flex-1">
                <h2 className="text-4xl font-bold mb-5">This is Contact page</h2>
                <p className="text-lg">
          
                </p>
            </div>
        </div>
    </div>
</section>
  );
}
