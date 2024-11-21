import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Auto Genegrate Website" }
  ];
};

export default function BuildWebsite() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className=" text-gray-700 p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 ">Build your website</h1>

        <div className="mb-4">
          <label
            className="block font-semibold mb-2"
          >
            Restaurant name
          </label>
          <input
            type="text"
            id="restaurantName"
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Enter restaurant name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Upload logo
          </label>
          <input
            type="file"
            id="uploadLogo"
            className="w-full px-3 py-2 border rounded-lg"
            accept="image/*"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Choose brand color
          </label>
          <input
            type="color"
            id="brandColor"
            className="w-full h-10 px-2 py-2 rounded-lg cursor-pointer bg-gray-200"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Choose template
          </label>
          <select
            id="template"
            className="w-full px-3 py-2 border rounded-lg text-gray-700"
            required
          >
            <option value="">Select a template</option>
            <option value="amber">Amber</option>
            <option value="roush">Roush</option>
            <option value="furosa">Furosa</option>
          </select>

          <a
            className="text-brand text-sm inline-block mt-2 text-right"
            href="https://zuppler-website-templates.netlify.app/"
            target="_blank"
          >
            View templates
          </a>
        </div>

        <button
          id="createBtn"
          className="w-full bg-brand text-white py-2 rounded-lg hover:opacity-[0.8]"
        >
          Create Website
        </button>
      </div>
    </div>
  );
}