import Link from "next/link";

type Props = {
  title: string;
  link: string;
  description?: string;
};

export default function DepartmentCard({ title, link, description }: Props) {
  return (
    <Link
      href={link}
      className="block rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
    >
      <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
      {description ? (
        <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
      ) : null}
      <span className="mt-4 inline-block text-sm font-semibold text-blue-700">
        Learn more
      </span>
    </Link>
  );
}
