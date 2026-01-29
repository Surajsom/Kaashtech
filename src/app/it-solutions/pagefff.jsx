import { notFound } from "next/navigation";

const workforceData = {
  "contract-staffing": {
    title: "Contract Staffing",
    description:
      "Flexible workforce solutions to scale your team quickly with skilled professionals.",
  },
  "permanent-hiring": {
    title: "Permanent Hiring",
    description:
      "Find the right talent for long-term success with our permanent hiring solutions.",
  },
  "rpo": {
    title: "Recruitment Process Outsourcing (RPO)",
    description:
      "End-to-end recruitment solutions tailored to your business needs.",
  },
};

export default function WorkforceSlugPage({ params }) {
  const data = workforceData[params.slug];

  if (!data) return notFound();

  return (
    <section className="min-h-screen px-6 py-20 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-green-700 mb-6">
        {data.title}
      </h1>
      <p className="text-lg text-gray-700">
        {data.description}
      </p>
    </section>
  );
}
