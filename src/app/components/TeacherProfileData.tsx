"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { Button, Input } from "@nextui-org/react";
import { FormikErrors, useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import { Select, SelectItem } from "@nextui-org/select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
interface Education {
  institute: string;
  degree: string;
  year: string;
}

const initialEducation: Education = { institute: "", degree: "", year: "" };

const TeacherProfileData = () => {
  const [progress, setProgress] = useState(10);
  const [image, setImage] = useState<File | null>();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, isSetLoading] = useState(false);
  const [educations, setEducations] = useState<Education[]>([initialEducation]);

  const handleFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    console.log("File:", file);
    setImage(file);
  };

  const handleRemove = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setImage(null);
  };

  const handleAddEducation = () => {
    const updatedEducations = [...formik.values.educations, initialEducation];
    setEducations(updatedEducations);
    formik.setFieldValue("educations", updatedEducations);
  };

  const handleRemoveEducation = (index: number) => {
    const newEducations = educations.filter((_, i) => i !== index);
    setEducations(newEducations);
    formik.setFieldValue("educations", newEducations);
  };

  const handleLastEducation = (index: number) => {
    if (index > 0) {
      return index === educations.length - 1;
    }
  };

  const handleAddLast = (index: number) => {
    return index === educations.length - 1;
  };

  //validation
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      cnic: "",
      mobile: "",
      grades: "",
      subjects: "",
      educations: educations,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().label("First Name").required().max(30),
      lastName: Yup.string().label("Last Name").required().max(30),
      cnic: Yup.string().label("CNIC").required().max(13),
      mobile: Yup.string().label("Mobile").required(),
      grades: Yup.string()
        .label("Grades")
        .required("Grades is a required field"),
      subjects: Yup.string()
        .label("Subjects")
        .required("Subjects is a required field"),
      educations: Yup.array().of(
        Yup.object({
          institute: Yup.string().required().label("Institute").max(60),
          degree: Yup.string().required().label("Degree").max(30),
          year: Yup.string().required().label("Year").max(4),
        })
      ),
    }),
    onSubmit: async (values, { resetForm }) => {
      isSetLoading(true);
      console.log("FormData:", values);
      try {
        toast.success("Profile updated");
        resetForm();
      } catch (error) {
        toast.error("Something went wrong!");
      }
      isSetLoading(false);
    },
  });
  //validation

  //grades
  const allGrades = [
    { id: 1, grade: "9th" },
    { id: 2, grade: "10th" },
    { id: 3, grade: "1st year" },
    { id: 4, grade: "2nd year" },
  ];
  //grades

  //subjects
  const allSubjects = [
    { id: 1, subject: "Physics" },
    { id: 2, subject: "English" },
    { id: 3, subject: "Math" },
    { id: 4, subject: "History" },
  ];
  //subjects

  return (
    <div className=" w-full bg-gray-100 shadow-2xl rounded-2xl p-2 mx-4  sm:mx-2 md:mx-8 lg:mx-16  sm:p-2 md:p-4 lg:p-8">
      <form onSubmit={formik.handleSubmit}>
        <div className="flex justify-center items-center gap-1 sm:gap-1 md:gap-2 lg:gap-3 mb-2 sm:mb-2 md:mb-4 lg:mb-4">
          <div>
            <Image
              src="/user.png"
              alt="profileImage"
              width={100}
              height={100}
              className="rounded-full bg-primary"
            />
          </div>
          <div>
            <Button color="primary" variant="ghost" onClick={handleFileUpload}>
              Upload New picture
            </Button>
            <input
              type="file"
              hidden
              ref={fileInputRef}
              accept="image/*"
              onChange={handleUpload}
            />
          </div>
          <div>
            <Button color="primary" variant="ghost" onClick={handleRemove}>
              Remove
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 mb-2">
            <h1 className="text-2xl font-bold">Basic Details</h1>
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6">
            <Input
              type="text"
              variant="bordered"
              label="First Name"
              labelPlacement="outside"
              size="lg"
              isInvalid={formik.errors.firstName ? true : false}
              color={formik.errors.firstName ? "danger" : "primary"}
              onChange={(e) =>
                formik.setFieldValue("firstName", e.target.value)
              }
              value={formik.values.firstName}
              errorMessage={
                formik.touched.firstName && formik.errors.firstName
                  ? formik.errors.firstName
                  : ""
              }
            />
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6">
            <Input
              type="text"
              variant="bordered"
              label="Last Name"
              labelPlacement="outside"
              size="lg"
              isInvalid={formik.errors.lastName ? true : false}
              color={formik.errors.lastName ? "danger" : "primary"}
              onChange={(e) => formik.setFieldValue("lastName", e.target.value)}
              value={formik.values.lastName}
              errorMessage={
                formik.touched.lastName && formik.errors.lastName
                  ? formik.errors.lastName
                  : ""
              }
            />
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6">
            <Input
              type="text"
              variant="bordered"
              label="CNIC"
              labelPlacement="outside"
              size="lg"
              isInvalid={formik.errors.cnic ? true : false}
              color={formik.errors.cnic ? "danger" : "primary"}
              onChange={(e) => formik.setFieldValue("cnic", e.target.value)}
              value={formik.values.cnic}
              errorMessage={
                formik.touched.cnic && formik.errors.cnic
                  ? formik.errors.cnic
                  : ""
              }
            />
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6">
            <Input
              type="text"
              variant="bordered"
              label="Mobile"
              labelPlacement="outside"
              size="lg"
              isInvalid={formik.errors.mobile ? true : false}
              color={formik.errors.mobile ? "danger" : "primary"}
              onChange={(e) => formik.setFieldValue("mobile", e.target.value)}
              value={formik.values.mobile}
              errorMessage={
                formik.touched.mobile && formik.errors.mobile
                  ? formik.errors.mobile
                  : ""
              }
            />
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6">
            <Select
              label="Select grades you want to teach"
              labelPlacement="outside"
              selectionMode="multiple"
              size="lg"
              variant="bordered"
              isInvalid={formik.errors.grades ? true : false}
              color={formik.errors.grades ? "danger" : "primary"}
              onChange={(e) => formik.setFieldValue("grades", e.target.value)}
              value={formik.values.grades}
              errorMessage={
                formik.touched.grades && formik.errors.grades
                  ? formik.errors.grades
                  : ""
              }
            >
              {allGrades.map((grade) => (
                <SelectItem key={grade.id}>{grade.grade}</SelectItem>
              ))}
            </Select>
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6">
            <Select
              label="Select subjects you want to teach"
              labelPlacement="outside"
              selectionMode="multiple"
              size="lg"
              variant="bordered"
              isInvalid={formik.errors.subjects ? true : false}
              color={formik.errors.subjects ? "danger" : "primary"}
              onChange={(e) => formik.setFieldValue("subjects", e.target.value)}
              value={formik.values.subjects}
              errorMessage={
                formik.touched.subjects && formik.errors.subjects
                  ? formik.errors.subjects
                  : ""
              }
            >
              {allSubjects.map((sub) => (
                <SelectItem key={sub.id}>{sub.subject}</SelectItem>
              ))}
            </Select>
          </div>
          <div className="col-span-12 mb-2">
            <h1 className="text-2xl font-bold">Education</h1>
          </div>
          <div className="col-span-12">
            {formik.values.educations.map((education, index) => (
              <div
                className="grid grid-cols-12 gap-4 items-baseline"
                key={index}
              >
                <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4">
                  <Input
                    type="text"
                    variant="bordered"
                    label="Institute"
                    labelPlacement="outside"
                    size="lg"
                    isInvalid={
                      formik.errors.educations &&
                      formik.errors.educations[index] &&
                      (formik.errors.educations as FormikErrors<Education>[])[
                        index
                      ]?.institute
                        ? true
                        : false
                    }
                    color={
                      formik.errors.educations &&
                      formik.errors.educations[index] &&
                      (formik.errors.educations as FormikErrors<Education>[])[
                        index
                      ]?.institute
                        ? "danger"
                        : "primary"
                    }
                    onChange={formik.handleChange}
                    value={formik.values.educations[index].institute}
                    name={`educations[${index}].institute`}
                    errorMessage={
                      formik.touched.educations &&
                      formik.touched.educations[index] &&
                      formik.errors.educations &&
                      formik.errors.educations[index] &&
                      (formik.errors.educations as FormikErrors<Education>[])[
                        index
                      ]?.institute
                        ? (
                            formik.errors
                              .educations as FormikErrors<Education>[]
                          )[index]?.institute
                        : ""
                    }
                  />
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-3">
                  <Input
                    type="text"
                    variant="bordered"
                    label="Degree"
                    labelPlacement="outside"
                    size="lg"
                    isInvalid={
                      formik.errors.educations &&
                      formik.errors.educations[index] &&
                      (formik.errors.educations as FormikErrors<Education>[])[
                        index
                      ]?.degree
                        ? true
                        : false
                    }
                    color={
                      formik.errors.educations &&
                      formik.errors.educations[index] &&
                      (formik.errors.educations as FormikErrors<Education>[])[
                        index
                      ]?.degree
                        ? "danger"
                        : "primary"
                    }
                    onChange={formik.handleChange}
                    value={formik.values.educations[index].degree}
                    name={`educations[${index}].degree`}
                    errorMessage={
                      formik.touched.educations &&
                      formik.touched.educations[index] &&
                      formik.errors.educations &&
                      formik.errors.educations[index] &&
                      (formik.errors.educations as FormikErrors<Education>[])[
                        index
                      ]?.degree
                        ? (
                            formik.errors
                              .educations as FormikErrors<Education>[]
                          )[index]?.degree
                        : ""
                    }
                  />
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-3">
                  <Input
                    type="text"
                    variant="bordered"
                    label="Year"
                    labelPlacement="outside"
                    size="lg"
                    isInvalid={
                      formik.errors.educations &&
                      formik.errors.educations[index] &&
                      (formik.errors.educations as FormikErrors<Education>[])[
                        index
                      ]?.year
                        ? true
                        : false
                    }
                    color={
                      formik.errors.educations &&
                      formik.errors.educations[index] &&
                      (formik.errors.educations as FormikErrors<Education>[])[
                        index
                      ]?.year
                        ? "danger"
                        : "primary"
                    }
                    onChange={formik.handleChange}
                    value={formik.values.educations[index].year}
                    name={`educations[${index}].year`}
                    errorMessage={
                      formik.touched.educations &&
                      formik.touched.educations[index] &&
                      formik.errors.educations &&
                      formik.errors.educations[index] &&
                      (formik.errors.educations as FormikErrors<Education>[])[
                        index
                      ]?.year
                        ? (
                            formik.errors
                              .educations as FormikErrors<Education>[]
                          )[index]?.year
                        : ""
                    }
                  />
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-2">
                  {handleAddLast(index) ? (
                    <Button
                      color="primary"
                      variant="ghost"
                      onClick={handleAddEducation}
                      isIconOnly
                      className="mx-1 w-full sm:w-full md:w-full lg:w-10"
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </Button>
                  ) : (
                    ""
                  )}

                  {handleLastEducation(index) ? (
                    <Button
                      color="primary"
                      variant="ghost"
                      isIconOnly
                      onClick={() => handleRemoveEducation(index)}
                      className="mx-1 w-full sm:w-full md:w-full lg:w-10"
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </Button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-12 mb-2">
            <h1 className="text-2xl font-bold">Experience</h1>
          </div>

          <div className="col-span-12">
            <Button
              variant="ghost"
              type="submit"
              color="primary"
              isLoading={isLoading}
              aria-label="Submit"
              className="w-full text-lg"
              size="lg"
            >
              Save
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TeacherProfileData;
