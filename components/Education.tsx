import React from "react";
import { educationData } from "@/lib/Constant";
import { Card } from "./ui/card";

interface EducationItemProps {
  institution: string;
  degree: string;
  stream?: string;
  duration: string;
}

const EducationItem: React.FC<EducationItemProps> = ({
  institution,
  degree,
  stream,
  duration,
}) => (
  <Card className="p-4 mb-6">
    <div>
      <h1 className="font-medium text-gray-700 dark:text-neutral-300">
        {institution}
        <span className="ml-2 text-xs text-gray-600 dark:text-neutral-400">
          ( {duration})
        </span>
      </h1>
      <div className="flex items-center gap-2">
        <h3 className="text-sm text-gray-600 dark:text-neutral-400">
          {degree}
        </h3>
        {stream && (
          <span className="text-xs text-gray-600 dark:text-neutral-400">
            ({stream})
          </span>
        )}
      </div>
    </div>
  </Card>
);

const Education: React.FC = () => (
  <div>
    <h4 className="my-4 text-lg font-medium">Education</h4>
    <div className="">
      {educationData.map((education, index) => (
        <EducationItem key={index} {...education} />
      ))}
    </div>
  </div>
);

export default Education;
