import React from "react";
import { FileText, Persons, ThunderboltFill, CircleCheck } from "@gravity-ui/icons";

const stats = [
  {
    id: 1,
    title: "Total Job Posts",
    value: 48,
    icon: FileText,
  },
  {
    id: 2,
    title: "Total Applicants",
    value: "1,284",
    icon: Persons,
  },
  {
    id: 3,
    title: "Active Jobs",
    value: 18,
    icon: ThunderboltFill,
  },
  {
    id: 4,
    title: "Jobs Closed",
    value: 32,
    icon: CircleCheck,
  },
];

const JobStatCards = () => {
  return (
    <div className="grid grid-cols-2 gap-2 sm:gap-4 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
                key={stat.id}
                className="rounded-xl border border-white/10 bg-white/2 p-3 transition-all duration-300 hover:border-white/20 hover:bg-white/4 sm:p-5"
                >
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 sm:mb-6 sm:h-12 sm:w-12 sm:rounded-xl">
                    <Icon className="h-4 w-4 text-gray-300 sm:h-6 sm:w-6" />
                </div>

                <p className="text-xs text-gray-400 sm:text-sm">
                    {stat.title}
                </p>

                <h3 className="mt-1 text-xl font-semibold text-white sm:mt-2 sm:text-4xl">
                    {stat.value}
                </h3>
         </div>
        );
      })}
    </div>
  );
};

export default JobStatCards;