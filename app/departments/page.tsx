import DepartmentLabs from "@/components/home/DepartmentLabs";

export default function DepartmentsIndexPage() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Academic Departments &amp; Laboratory Hubs
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            Our specialized engineering departments blend rigorous theory with hands-on practice across 35+ fully
            equipped laboratories in Computer Science, Artificial Intelligence, Mechanical, Electrical, and Civil
            Engineering.
          </p>
        </div>

        <DepartmentLabs />
      </div>
    </div>
  );
}
