type Props = {
  title: string;
  link: string;
};

export default function DepartmentCard({ title, link }: Props) {
  return (
    <a
      href={link}
      className="block p-6 shadow rounded-xl hover:shadow-lg text-center"
    >
      <h3 className="text-xl font-semibold">{title}</h3>
    </a>
  );
}