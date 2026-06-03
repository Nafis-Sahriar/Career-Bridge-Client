"use client";
import React, { useState } from "react";
import {
  Form,
  TextField,
  Input,
  Label,
  FieldError,
  TextArea,
  Select,
  ListBox,
  Button,
  Switch
} from "@heroui/react";
import { BriefcaseBusiness, Building2, MapPin, FileText, Sparkles, HelpCircle } from "lucide-react";
import { createJob } from "@/lib/actions/jobs";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const NewJob = () => {
  const [isExternalATS, setIsExternalATS] = useState(false);
  const router = useRouter();

  // to do -- User informationt hakbe, then company information ashbe.
   const [mockCompany] = useState({
        name: "Acme Corp ",
        id: "company_123",
        isApproved: true,
    });


  const handleSubmit =async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const jobData = Object.fromEntries(formData.entries());
    console.log("Job Data:", jobData);
    // Here you would typically send jobData to your backend API

    const payload = {
        ...jobData,
        companyId: mockCompany.id,
        status: "active",
        isPubliclyVisible: true,
    };

    const res = await createJob(payload);
      if (res?.success) {
    toast.success("Job posted successfully!");
    e.target.reset();
    router.push("/");
} else {
    toast.error("Failed to post job. Please try again.");
}
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white">
          Create New Job
        </h2>
        <p className="mt-2 text-gray-400">
          Publish a new job opportunity for candidates.
        </p>
      </div>

      <Form className="space-y-8" onSubmit={handleSubmit} >

        {/* Job Information */}
        <div className="w-full rounded-3xl border border-white/10 bg-white/2 p-6 md:p-8 backdrop-blur-xl">
          <div className="mb-6 flex items-center gap-3">
            <BriefcaseBusiness size={22} className="text-violet-400" />
            <h3 className="text-xl font-semibold text-white">
              Job Information
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <TextField name="jobTitle" isRequired>
              <Label>Job Title</Label>
              <Input placeholder="Frontend Developer" className="rounded-2xl text-white" />
              <FieldError />
            </TextField>

            <TextField name="jobCategory" isRequired>
              <Label>Job Category</Label>
              <Input placeholder="Software Engineering" className="rounded-2xl text-white" />
              <FieldError />
            </TextField>

            <div>
              <Select name="jobType" placeholder="Select Job Type" className="w-full" isRequired>
                <Label>Job Type</Label>
                <Select.Trigger className="rounded-2xl text-white">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="full-time">Full-time</ListBox.Item>
                    <ListBox.Item id="part-time">Part-time</ListBox.Item>
                    <ListBox.Item id="contract">Contract</ListBox.Item>
                    <ListBox.Item id="internship">Internship</ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            <div>
              <Select name="experienceLevel" placeholder="Select Experience Level" className="w-full" isRequired>
                <Label>Experience Level</Label>
                <Select.Trigger className="rounded-2xl text-white">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="intern">Intern / Co-op</ListBox.Item>
                    <ListBox.Item id="entry">Entry Level</ListBox.Item>
                    <ListBox.Item id="mid">Mid-Senior Level</ListBox.Item>
                    <ListBox.Item id="senior">Senior Level</ListBox.Item>
                    <ListBox.Item id="lead">Lead / Manager</ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            <TextField name="vacancies" type="number" isRequired>
              <Label>Number of Openings</Label>
              <Input placeholder="1" min="1" type="number" className="rounded-2xl text-white" />
              <FieldError />
            </TextField>

            <TextField name="deadline" type="date" isRequired>
              <Label>Application Deadline</Label>
              <Input type="date" className="rounded-2xl text-white" />
              <FieldError />
            </TextField>
          </div>
        </div>

        {/* Skills & Qualifications */}
        <div className="w-full rounded-3xl border border-white/10 bg-white/2 p-6 md:p-8 backdrop-blur-xl">
          <div className="mb-6 flex items-center gap-3">
            <Sparkles size={22} className="text-violet-400" />
            <h3 className="text-xl font-semibold text-white">
              Skills & Tags
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <TextField name="requiredSkills" isRequired>
              <Label>Required Skills</Label>
              <Input placeholder="React, Next.js, TypeScript, Tailwind CSS (Comma separated)" className="rounded-2xl text-white" />
              <FieldError />
            </TextField>
          </div>
        </div>

        {/* Salary Information */}
        <div className="w-full rounded-3xl border border-white/10 bg-white/2 p-6 md:p-8 backdrop-blur-xl">
          <div className="mb-6 flex items-center gap-3">
            <FileText size={22} className="text-violet-400" />
            <h3 className="text-xl font-semibold text-white">
              Salary Information
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <TextField name="salaryMin" isRequired>
              <Label>Minimum Salary</Label>
              <Input type="number" placeholder="30000" className="rounded-2xl text-white" />
              <FieldError />
            </TextField>

            <TextField name="salaryMax" isRequired>
              <Label>Maximum Salary</Label>
              <Input type="number" placeholder="70000" className="rounded-2xl text-white" />
              <FieldError />
            </TextField>

            <TextField name="currency" isRequired>
              <Label>Currency</Label>
              <Input placeholder="BDT" className="rounded-2xl text-white" />
              <FieldError />
            </TextField>
          </div>
        </div>

        {/* Location & Workspace Layout */}
        <div className="w-full rounded-3xl border border-white/10 bg-white/2 p-6 md:p-8 backdrop-blur-xl">
          <div className="mb-6 flex items-center gap-3">
            <MapPin size={22} className="text-violet-400" />
            <h3 className="text-xl font-semibold text-white">
              Location details
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 items-end">
            <div>
              <Select name="workspaceType" placeholder="Select Workplace Model" className="w-full" isRequired>
                <Label>Workplace Model</Label>
                <Select.Trigger className="rounded-2xl text-white">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="on-site">On-site</ListBox.Item>
                    <ListBox.Item id="hybrid">Hybrid</ListBox.Item>
                    <ListBox.Item id="remote">Remote</ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            <TextField name="city" isRequired>
              <Label>City</Label>
              <Input placeholder="Dhaka" className="rounded-2xl text-white" />
              <FieldError />
            </TextField>

            <TextField name="country" isRequired>
              <Label>Country</Label>
              <Input placeholder="Bangladesh" className="rounded-2xl text-white" />
              <FieldError />
            </TextField>
          </div>
        </div>

        {/* Job Description */}
        <div className="w-full rounded-3xl border border-white/10 bg-white/2 p-6 md:p-8 backdrop-blur-xl">
          <div className="mb-6 flex items-center gap-3">
            <FileText size={22} className="text-violet-400" />
            <h3 className="text-xl font-semibold text-white">
              Job Description
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <TextField name="responsibilities" isRequired>
              <Label>Responsibilities</Label>
              <TextArea
                className="rounded-3xl text-white"
                placeholder="Describe responsibilities..."
              />
              <FieldError />
            </TextField>

            <TextField name="requirements" isRequired>
              <Label>Requirements</Label>
              <TextArea
                className="rounded-3xl text-white"
                placeholder="Describe requirements..."
              />
              <FieldError />
            </TextField>

            <TextField name="benefits">
              <Label>Benefits (Optional)</Label>
              <TextArea
                className="rounded-3xl text-white"
                placeholder="Health insurance, bonuses, remote allowance..."
              />
              <FieldError />
            </TextField>
          </div>
        </div>

        {/* Application Redirection Routing */}
        <div className="w-full rounded-3xl border border-white/10 bg-white/2 p-6 md:p-8 backdrop-blur-xl">
          <div className="mb-6 flex items-center gap-3">
            <HelpCircle size={22} className="text-violet-400" />
            <h3 className="text-xl font-semibold text-white">
              Application Route
            </h3>
          </div>

          <div className="space-y-6">
            <Switch isSelected={isExternalATS} onValueChange={setIsExternalATS}>
              Apply via External Link/ATS
            </Switch>

            {isExternalATS && (
              <div className="grid grid-cols-1 gap-6 animate-fade-in">
                <TextField name="externalUrl" isRequired={isExternalATS}>
                  <Label>External Application URL</Label>
                  <Input type="url" placeholder="https://careers.company.com/jobs/apply" className="rounded-2xl text-white" />
                  <FieldError />
                </TextField>
              </div>
            )}
          </div>
        </div>

        {/* Company Information */}
        <div className="w-full rounded-3xl border border-white/10 bg-white/2 p-6 md:p-8 backdrop-blur-xl">
          <div className="mb-6 flex items-center gap-3">
            <Building2 size={22} className="text-violet-400" />
            <h3 className="text-xl font-semibold text-white">
              Company Information
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <TextField name="companyName" isRequired>
              <Label>Company</Label>
              <Input
                value="Auto-filled Company Name"
                readOnly
                className="rounded-2xl text-white bg-white/5 opacity-80 cursor-not-allowed"
              />
            </TextField>

            <TextField name="status" isRequired>
              <Label>Status</Label>
              <Input
                value="Approved Company"
                readOnly
                className="rounded-2xl text-white bg-white/5 opacity-80 cursor-not-allowed"
              />
            </TextField>
          </div>
        </div>

        <Button
          type="submit"
          className="rounded-2xl bg-violet-600 px-10 py-6 font-semibold text-white hover:bg-violet-700 transition-colors duration-300 shadow-lg shadow-violet-600/20"
        >
          Publish Job
        </Button>

      </Form>
    </div>
  );
};

export default NewJob;