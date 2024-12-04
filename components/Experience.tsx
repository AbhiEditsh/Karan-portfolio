import React from "react";
import { companiesData } from "@/lib/Constant";
import { Card } from "./ui/card";

interface JobHistoryItemProps {
  position: string;
  duration: string;
  isCurrent?: boolean;
}

const JobHistoryItem: React.FC<JobHistoryItemProps> = ({
  position,
  duration,
  isCurrent,
}) => (
  <div>
    <h3
      className={`text-gray-700 dark:text-neutral-300 ${
        isCurrent ? "font-medium text-blue-200 dark:text-blue-200" : ""
      }`}
    >
      {position}
    </h3>
    <p className="mt-1 text-xs text-gray-600 dark:text-neutral-400">
      {duration}
    </p>
  </div>
);

interface CompanyExperienceProps {
  companyLogo: string;
  company: string;
  location: string;
  jobs: JobHistoryItemProps[];
}

const CompanyExperience: React.FC<CompanyExperienceProps> = ({
  company,
  companyLogo,
  location,
  jobs,
}) => (
  <Card>
    <div className="p-4">
      <img
        src={companyLogo}
        alt={`${company} logo`}
        className="w-16 h-16 mb-2 rounded-full"
      />
      <h1 className="font-semibold text-gray-700 dark:text-neutral-300">
        {company}
      </h1>
      <h3 className="text-sm text-gray-600 dark:text-neutral-400">
        {location}
      </h3>
      {jobs.map((job, index) => (
        <JobHistoryItem key={index} {...job} />
      ))}
    </div>
  </Card>
);

const Experience: React.FC = () => (
  <div className="mt-5">
    <hr />
    <h4 className="my-4 text-lg font-medium">Experience</h4>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
      {companiesData.map((companyData, index) => (
        <CompanyExperience key={index} {...companyData} />
      ))}
    </div>
  </div>
);

export default Experience;
