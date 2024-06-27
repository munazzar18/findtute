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
import { Checkbox } from "@nextui-org/checkbox";

interface Education {
  institute: string;
  degree: string;
  year: string;
}

interface Experience {
  institute: string;
  title: string;
  startDate: string;
  endDate: string;
  present: boolean;
}

const initialEducation: Education = { institute: "", degree: "", year: "" };
const initialExperience: Experience = {
  institute: "",
  title: "",
  startDate: "",
  endDate: "",
  present: false,
};

const TeacherProfileData = () => {
  const [progress, setProgress] = useState(10);
  const [image, setImage] = useState<File | null>();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, isSetLoading] = useState(false);
  const [educations, setEducations] = useState<Education[]>([initialEducation]);
  const [experiences, setExperiences] = useState<Experience[]>([
    initialExperience,
  ]);

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

  const handleAddLastEducation = (index: number) => {
    return index === educations.length - 1;
  };

  const handleAddExperience = () => {
    const updatedExperiences = [
      ...formik.values.experiences,
      initialExperience,
    ];
    setExperiences(updatedExperiences);
    formik.setFieldValue("experiences", updatedExperiences);
  };

  const handleRemoveExperience = (index: number) => {
    const newExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(newExperiences);
    formik.setFieldValue("experiences", newExperiences);
  };

  const handleLastExperience = (index: number) => {
    if (index > 0) {
      return index === experiences.length - 1;
    }
  };

  const handleAddLastExperience = (index: number) => {
    return index === experiences.length - 1;
  };

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          formik.setFieldValue("latitude", pos.coords.latitude);
          formik.setFieldValue("longitude", pos.coords.longitude);
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            toast.error("Permission to access location was denied.");
          } else {
            toast.error("Error retrieving location.");
          }
          console.error(error);
        }
      );
    } else {
      toast.error("Geolocation is not supported by this browser.");
    }
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
      preference: "",
      latitude: 0,
      longitude: 0,
      educations: educations,
      experiences: experiences,
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
      preference: Yup.string().required().label("Preference"),
      latitude: Yup.number().required().label("Latitude"),
      longitude: Yup.number().required().label("Longitude"),
      educations: Yup.array().of(
        Yup.object({
          institute: Yup.string().required().label("Institute").max(60),
          degree: Yup.string().required().label("Degree").max(30),
          year: Yup.string().required().label("Year").max(4),
        })
      ),
      experiences: Yup.array().of(
        Yup.object({
          institute: Yup.string().required().label("Institute").max(60),
          title: Yup.string().required().label("Title").max(60),
          startDate: Yup.string().required().label("Institute").max(20),
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
          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6">
            <Select
              label="Select your teaching preference"
              labelPlacement="outside"
              selectionMode="single"
              size="lg"
              variant="bordered"
              isInvalid={formik.errors.preference ? true : false}
              color={formik.errors.preference ? "danger" : "primary"}
              onChange={(e) =>
                formik.setFieldValue("preference", e.target.value)
              }
              value={formik.values.preference}
              errorMessage={
                formik.touched.preference && formik.errors.preference
                  ? formik.errors.preference
                  : ""
              }
            >
              <SelectItem key="online">Online</SelectItem>
              <SelectItem key="onsite">On-site</SelectItem>
              <SelectItem key="both">Both</SelectItem>
            </Select>
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6">
            <div className="grid grid-cols-12 gap-4 items-baseline">
              <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4">
                <Input
                  type="number"
                  variant="bordered"
                  label="Latitude"
                  labelPlacement="outside"
                  size="lg"
                  isInvalid={formik.errors.latitude ? true : false}
                  color={formik.errors.latitude ? "danger" : "primary"}
                  onChange={(e) =>
                    formik.setFieldValue("latitude", e.target.value)
                  }
                  value={formik.values.latitude.toString()}
                  errorMessage={
                    formik.touched.latitude && formik.errors.latitude
                      ? formik.errors.latitude
                      : ""
                  }
                />
              </div>
              <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4">
                <Input
                  type="number"
                  variant="bordered"
                  label="Longitude"
                  labelPlacement="outside"
                  size="lg"
                  isInvalid={formik.errors.longitude ? true : false}
                  color={formik.errors.longitude ? "danger" : "primary"}
                  onChange={(e) =>
                    formik.setFieldValue("longitude", e.target.value)
                  }
                  value={formik.values.longitude.toString()}
                  errorMessage={
                    formik.touched.longitude && formik.errors.longitude
                      ? formik.errors.longitude
                      : ""
                  }
                />
              </div>
              <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4">
                <Button
                  type="button"
                  variant="ghost"
                  color="primary"
                  onClick={handleLocation}
                >
                  Get Your Location
                </Button>
              </div>
            </div>
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
                  {handleAddLastEducation(index) ? (
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
          <div className="col-span-12 mb-2">
            {formik.values.experiences.map((experience, index) => (
              <div
                className="grid grid-cols-12 gap-4 items-baseline"
                key={index}
              >
                <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6">
                  <Input
                    type="text"
                    variant="bordered"
                    label="Institute"
                    labelPlacement="outside"
                    size="lg"
                    isInvalid={
                      formik.errors.experiences &&
                      formik.errors.experiences[index] &&
                      (formik.errors.experiences as FormikErrors<Experience>[])[
                        index
                      ]?.institute
                        ? true
                        : false
                    }
                    color={
                      formik.errors.experiences &&
                      formik.errors.experiences[index] &&
                      (formik.errors.experiences as FormikErrors<Experience>[])[
                        index
                      ]?.institute
                        ? "danger"
                        : "primary"
                    }
                    onChange={formik.handleChange}
                    value={formik.values.experiences[index].institute}
                    name={`experiences[${index}].instituteExp`}
                    errorMessage={
                      formik.touched.experiences &&
                      formik.touched.experiences[index] &&
                      formik.errors.experiences &&
                      formik.errors.experiences[index] &&
                      (formik.errors.experiences as FormikErrors<Experience>[])[
                        index
                      ]?.institute
                        ? (
                            formik.errors
                              .experiences as FormikErrors<Experience>[]
                          )[index]?.institute
                        : ""
                    }
                  />
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6">
                  <Input
                    type="text"
                    variant="bordered"
                    label="Title"
                    labelPlacement="outside"
                    size="lg"
                    isInvalid={
                      formik.errors.experiences &&
                      formik.errors.experiences[index] &&
                      (formik.errors.experiences as FormikErrors<Experience>[])[
                        index
                      ]?.title
                        ? true
                        : false
                    }
                    color={
                      formik.errors.experiences &&
                      formik.errors.experiences[index] &&
                      (formik.errors.experiences as FormikErrors<Experience>[])[
                        index
                      ]?.title
                        ? "danger"
                        : "primary"
                    }
                    onChange={formik.handleChange}
                    value={formik.values.experiences[index].title}
                    name={`experiences[${index}].title`}
                    errorMessage={
                      formik.touched.experiences &&
                      formik.touched.experiences[index] &&
                      formik.errors.experiences &&
                      formik.errors.experiences[index] &&
                      (formik.errors.experiences as FormikErrors<Experience>[])[
                        index
                      ]?.title
                        ? (
                            formik.errors
                              .experiences as FormikErrors<Experience>[]
                          )[index]?.title
                        : ""
                    }
                  />
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4">
                  <Input
                    type="date"
                    variant="bordered"
                    label="Start Date"
                    labelPlacement="outside"
                    size="lg"
                    isInvalid={
                      formik.errors.experiences &&
                      formik.errors.experiences[index] &&
                      (formik.errors.experiences as FormikErrors<Experience>[])[
                        index
                      ]?.startDate
                        ? true
                        : false
                    }
                    color={
                      formik.errors.experiences &&
                      formik.errors.experiences[index] &&
                      (formik.errors.experiences as FormikErrors<Experience>[])[
                        index
                      ]?.startDate
                        ? "danger"
                        : "primary"
                    }
                    onChange={formik.handleChange}
                    value={formik.values.experiences[index].startDate}
                    name={`experiences[${index}].startDate`}
                    errorMessage={
                      formik.touched.experiences &&
                      formik.touched.experiences[index] &&
                      formik.errors.experiences &&
                      formik.errors.experiences[index] &&
                      (formik.errors.experiences as FormikErrors<Experience>[])[
                        index
                      ]?.startDate
                        ? (
                            formik.errors
                              .experiences as FormikErrors<Experience>[]
                          )[index]?.startDate
                        : ""
                    }
                  />
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4">
                  {formik.values.experiences[index].present == false ? (
                    <Input
                      type="date"
                      variant="bordered"
                      label="End Date"
                      labelPlacement="outside"
                      size="lg"
                      color="primary"
                      onChange={formik.handleChange}
                      value={
                        formik.values.experiences[index].present == false
                          ? formik.values.experiences[index].endDate
                          : ""
                      }
                      name={`experiences[${index}].endDate`}
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-2">
                  <Checkbox
                    onChange={formik.handleChange}
                    value={formik.values.experiences[index].present.toString()}
                    name={`experiences[${index}].present`}
                  >
                    Present
                  </Checkbox>
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-2">
                  {handleAddLastExperience(index) ? (
                    <Button
                      color="primary"
                      variant="ghost"
                      onClick={handleAddExperience}
                      isIconOnly
                      className="mx-1 w-full sm:w-full md:w-full lg:w-10"
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </Button>
                  ) : (
                    ""
                  )}

                  {handleLastExperience(index) ? (
                    <Button
                      color="primary"
                      variant="ghost"
                      isIconOnly
                      onClick={() => handleRemoveExperience(index)}
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
