'use client'
import Image from 'next/image'
import React, { useState, useRef } from 'react'
import { MultiSelect } from 'react-multi-select-component'
import { FormikErrors, useFormik } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-hot-toast'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

interface OptionType {
  label: string
  value: string
}

interface FormValues {
  grades: OptionType[]
  subjects: OptionType[]
}

interface Education {
  institute: string
  degree: string
  year: string
}

interface Experience {
  institute: string
  title: string
  startDate: string
  endDate: string
  present: boolean
}

const initialEducation: Education = { institute: '', degree: '', year: '' }
const initialExperience: Experience = {
  institute: '',
  title: '',
  startDate: '',
  endDate: '',
  present: false,
}

const UserProfileData = () => {
  const [progress, setProgress] = useState(10)
  const [image, setImage] = useState<File | null>()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isLoading, isSetLoading] = useState(false)
  const [educations, setEducations] = useState<Education[]>([initialEducation])
  const [experiences, setExperiences] = useState<Experience[]>([
    initialExperience,
  ])

  const handleFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    console.log('File:', file)
    setImage(file)
  }

  const handleRemove = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
    setImage(null)
  }

  const handleAddEducation = () => {
    const updatedEducations = [...formik.values.educations, initialEducation]
    setEducations(updatedEducations)
    formik.setFieldValue('educations', updatedEducations)
  }

  const handleRemoveEducation = (index: number) => {
    const newEducations = educations.filter((_, i) => i !== index)
    setEducations(newEducations)
    formik.setFieldValue('educations', newEducations)
  }

  const handleLastEducation = (index: number) => {
    if (index > 0) {
      return index === educations.length - 1
    }
  }

  const handleAddLastEducation = (index: number) => {
    return index === educations.length - 1
  }

  const handleAddExperience = () => {
    const updatedExperiences = [...formik.values.experiences, initialExperience]
    setExperiences(updatedExperiences)
    formik.setFieldValue('experiences', updatedExperiences)
  }

  const handleRemoveExperience = (index: number) => {
    const newExperiences = experiences.filter((_, i) => i !== index)
    setExperiences(newExperiences)
    formik.setFieldValue('experiences', newExperiences)
  }

  const handleLastExperience = (index: number) => {
    if (index > 0) {
      return index === experiences.length - 1
    }
  }

  const handleAddLastExperience = (index: number) => {
    return index === experiences.length - 1
  }

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          formik.setFieldValue('latitude', pos.coords.latitude)
          formik.setFieldValue('longitude', pos.coords.longitude)
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            toast.error('Permission to access location was denied.')
          } else {
            toast.error('Error retrieving location.')
          }
          console.error(error)
        }
      )
    } else {
      toast.error('Geolocation is not supported by this browser.')
    }
  }

  //validation
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      cnic: '',
      mobile: '',
      grades: [],
      subjects: [],
      preference: '',
      latitude: 0,
      longitude: 0,
      educations: educations,
      experiences: experiences,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().label('First Name').required().max(30),
      lastName: Yup.string().label('Last Name').required().max(30),
      cnic: Yup.string().label('CNIC').required().max(13),
      mobile: Yup.string().label('Mobile').required(),
      grades: Yup.string()
        .label('Grades')
        .required('Grades is a required field'),
      subjects: Yup.string()
        .label('Subjects')
        .required('Subjects is a required field'),
      preference: Yup.string().required().label('Preference'),
      latitude: Yup.number().required().label('Latitude'),
      longitude: Yup.number().required().label('Longitude'),
      educations: Yup.array().of(
        Yup.object({
          institute: Yup.string().required().label('Institute').max(60),
          degree: Yup.string().required().label('Degree').max(30),
          year: Yup.string().required().label('Year').max(4),
        })
      ),
      experiences: Yup.array().of(
        Yup.object({
          institute: Yup.string().required().label('Institute').max(60),
          title: Yup.string().required().label('Title').max(60),
          startDate: Yup.string().required().label('Institute').max(20),
        })
      ),
    }),
    onSubmit: async (values, { resetForm }) => {
      isSetLoading(true)
      console.log('FormData:', values)
      try {
        toast.success('Profile updated')
        resetForm()
      } catch (error) {
        toast.error('Something went wrong!')
      }
      isSetLoading(false)
    },
  })
  //validation

  //grades
  const allGrades: OptionType[] = [
    { label: '9th grade', value: '9th' },
    { label: '10th grade', value: '10th' },
    { label: '1st year', value: '1st year' },
    { label: '2nd year', value: '2nd year' },
  ]
  //grades

  //subjects
  const allSubjects: OptionType[] = [
    { label: 'Physics', value: 'Physics' },
    { label: 'English', value: 'English' },
    { label: 'Math', value: 'Math' },
    { label: 'History', value: 'History' },
  ]
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
            <button
              color="primary"
              className="text-sm text-nowrap sm:text-sm md:text-lg  lg:text-lg  bg-green text-cream-foreground rounded-md max-h-1 !leading-[0.2] btn "
              onClick={handleFileUpload}
            >
              Upload picture
            </button>
            <input
              type="file"
              hidden
              ref={fileInputRef}
              accept="image/*"
              onChange={handleUpload}
            />
          </div>
          <div>
            <button
              color="primary"
              className="w-full text-lg bg-red-600 text-cream-foreground rounded-md max-h-1 !leading-[0.2] btn"
              onClick={handleRemove}
            >
              Remove
            </button>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 mb-2">
            <h1 className="text-2xl font-bold">Basic Details</h1>
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">First Name</span>
              </div>
              <input
                type="text"
                className="input input-bordered input-primary w-full"
                color={formik.errors.firstName ? 'danger' : 'primary'}
                onChange={(e) =>
                  formik.setFieldValue('firstName', e.target.value)
                }
                value={formik.values.firstName}
              />
              <span>
                {formik.touched.firstName && formik.errors.firstName
                  ? formik.errors.firstName
                  : ''}
              </span>
            </label>
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Last Name</span>
              </div>
              <input
                type="text"
                color={formik.errors.lastName ? 'danger' : 'primary'}
                onChange={(e) =>
                  formik.setFieldValue('lastName', e.target.value)
                }
                value={formik.values.lastName}
                className="input input-bordered input-primary w-full"
              />
              <span>
                {formik.touched.lastName && formik.errors.lastName
                  ? formik.errors.lastName
                  : ''}
              </span>
            </label>
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Last Name</span>
              </div>
              <input
                type="text"
                className="input input-bordered input-primary w-full"
                color={formik.errors.cnic ? 'danger' : 'primary'}
                onChange={(e) => formik.setFieldValue('cnic', e.target.value)}
                value={formik.values.cnic}
              />
              <span>
                {formik.touched.cnic && formik.errors.cnic
                  ? formik.errors.cnic
                  : ''}
              </span>
            </label>
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Mobile</span>
              </div>
              <input
                type="text"
                color={formik.errors.mobile ? 'danger' : 'primary'}
                onChange={(e) => formik.setFieldValue('mobile', e.target.value)}
                value={formik.values.mobile}
                className="input input-bordered input-primary w-full"
              />
              <span>
                {formik.touched.mobile && formik.errors.mobile
                  ? formik.errors.mobile
                  : ''}
              </span>
            </label>
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Select your grades</span>
              </div>
              <MultiSelect
                options={allGrades}
                value={formik.values.grades}
                onChange={(selected: OptionType[]) =>
                  formik.setFieldValue('grades', selected)
                }
                labelledBy="Select grades"
              />
              <span>
                {formik.touched.grades && formik.errors.grades
                  ? formik.errors.grades
                  : ''}
              </span>
            </label>
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Select your subjects</span>
              </div>
              <MultiSelect
                options={allSubjects}
                value={formik.values.subjects}
                onChange={(selected: OptionType[]) =>
                  formik.setFieldValue('subjects', selected)
                }
                labelledBy="Select subjects"
              />
              <span className="text-red-500">
                {formik.touched.subjects && formik.errors.subjects
                  ? formik.errors.subjects
                  : ''}
              </span>
            </label>
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Select your subjects</span>
              </div>
              <select
                className="select select-primary w-full"
                color={formik.errors.preference ? 'danger' : 'primary'}
                onChange={(e) =>
                  formik.setFieldValue('preference', e.target.value)
                }
                value={formik.values.preference}
              >
                <option key="online">Online</option>
                <option key="onsite">On-site</option>
                <option key="both">Both</option>
              </select>
              <span>
                {formik.touched.preference && formik.errors.preference
                  ? formik.errors.preference
                  : ''}
              </span>
            </label>
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6">
            <div className="grid grid-cols-12 gap-4 items-baseline">
              <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Latitude</span>
                  </div>
                  <input
                    className="input input-bordered input-primary w-full"
                    type="number"
                    color={formik.errors.latitude ? 'danger' : 'primary'}
                    onChange={(e) =>
                      formik.setFieldValue('latitude', e.target.value)
                    }
                    value={formik.values.latitude.toString()}
                  />
                  <span>
                    {formik.touched.latitude && formik.errors.latitude
                      ? formik.errors.latitude
                      : ''}
                  </span>
                </label>
              </div>
              <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Longitude</span>
                  </div>
                  <input
                    type="number"
                    className="input input-bordered input-primary w-full"
                    color={formik.errors.longitude ? 'danger' : 'primary'}
                    onChange={(e) =>
                      formik.setFieldValue('longitude', e.target.value)
                    }
                    value={formik.values.longitude.toString()}
                  />
                  <span>
                    {formik.touched.longitude && formik.errors.longitude
                      ? formik.errors.longitude
                      : ''}
                  </span>
                </label>
              </div>
              <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text mb-1"></span>
                  </div>
                  <button
                    type="button"
                    color="primary"
                    className="text-nowrap text-lg bg-green text-cream-foreground rounded-md max-h-1  !leading-[0.2] btn"
                    onClick={handleLocation}
                  >
                    Get Your Location
                  </button>
                </label>
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
                <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4 mb-4">
                  <input
                    type="text"
                    className="input input-bordered input-primary w-full"
                    color={
                      formik.errors.educations &&
                      formik.errors.educations[index] &&
                      (formik.errors.educations as FormikErrors<Education>[])[
                        index
                      ]?.institute
                        ? 'danger'
                        : 'primary'
                    }
                    onChange={formik.handleChange}
                    value={formik.values.educations[index].institute}
                    name={`educations[${index}].institute`}
                  />
                  <span>
                    {formik.touched.educations &&
                    formik.touched.educations[index] &&
                    formik.errors.educations &&
                    formik.errors.educations[index] &&
                    (formik.errors.educations as FormikErrors<Education>[])[
                      index
                    ]?.institute
                      ? (formik.errors.educations as FormikErrors<Education>[])[
                          index
                        ]?.institute
                      : ''}
                  </span>
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-3">
                  <input
                    type="text"
                    className="input input-bordered input-primary w-full"
                    color={
                      formik.errors.educations &&
                      formik.errors.educations[index] &&
                      (formik.errors.educations as FormikErrors<Education>[])[
                        index
                      ]?.degree
                        ? 'danger'
                        : 'primary'
                    }
                    onChange={formik.handleChange}
                    value={formik.values.educations[index].degree}
                    name={`educations[${index}].degree`}
                  />
                  <span>
                    {formik.touched.educations &&
                    formik.touched.educations[index] &&
                    formik.errors.educations &&
                    formik.errors.educations[index] &&
                    (formik.errors.educations as FormikErrors<Education>[])[
                      index
                    ]?.degree
                      ? (formik.errors.educations as FormikErrors<Education>[])[
                          index
                        ]?.degree
                      : ''}
                  </span>
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-3">
                  <input
                    type="text"
                    className="input input-bordered input-primary w-full"
                    color={
                      formik.errors.educations &&
                      formik.errors.educations[index] &&
                      (formik.errors.educations as FormikErrors<Education>[])[
                        index
                      ]?.year
                        ? 'danger'
                        : 'primary'
                    }
                    onChange={formik.handleChange}
                    value={formik.values.educations[index].year}
                    name={`educations[${index}].year`}
                  />
                  <span>
                    {formik.touched.educations &&
                    formik.touched.educations[index] &&
                    formik.errors.educations &&
                    formik.errors.educations[index] &&
                    (formik.errors.educations as FormikErrors<Education>[])[
                      index
                    ]?.year
                      ? (formik.errors.educations as FormikErrors<Education>[])[
                          index
                        ]?.year
                      : ''}
                  </span>
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-2">
                  {handleAddLastEducation(index) ? (
                    <button
                      color="primary"
                      onClick={handleAddEducation}
                      type="button"
                      className="mx-1 w-full sm:w-full md:w-full lg:w-10"
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  ) : (
                    ''
                  )}

                  {handleLastEducation(index) ? (
                    <button
                      color="primary"
                      type="button"
                      onClick={() => handleRemoveEducation(index)}
                      className="mx-1 w-full sm:w-full md:w-full lg:w-10"
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                  ) : (
                    ''
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
                className="grid grid-cols-12 gap-4 items-baseline mb-4"
                key={index}
              >
                <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6">
                  <input
                    type="text"
                    className="input input-bordered input-primary w-full"
                    color={
                      formik.errors.experiences &&
                      formik.errors.experiences[index] &&
                      (formik.errors.experiences as FormikErrors<Experience>[])[
                        index
                      ]?.institute
                        ? 'danger'
                        : 'primary'
                    }
                    onChange={formik.handleChange}
                    value={formik.values.experiences[index].institute}
                    name={`experiences[${index}].instituteExp`}
                  />
                  <span>
                    {formik.touched.experiences &&
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
                      : ''}
                  </span>
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6">
                  <input
                    type="text"
                    className="input input-bordered input-primary w-full"
                    color={
                      formik.errors.experiences &&
                      formik.errors.experiences[index] &&
                      (formik.errors.experiences as FormikErrors<Experience>[])[
                        index
                      ]?.title
                        ? 'danger'
                        : 'primary'
                    }
                    onChange={formik.handleChange}
                    value={formik.values.experiences[index].title}
                    name={`experiences[${index}].title`}
                  />
                  <span>
                    {formik.touched.experiences &&
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
                      : ''}
                  </span>
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4">
                  <input
                    type="date"
                    className="input input-bordered input-primary w-full"
                    color={
                      formik.errors.experiences &&
                      formik.errors.experiences[index] &&
                      (formik.errors.experiences as FormikErrors<Experience>[])[
                        index
                      ]?.startDate
                        ? 'danger'
                        : 'primary'
                    }
                    onChange={formik.handleChange}
                    value={formik.values.experiences[index].startDate}
                    name={`experiences[${index}].startDate`}
                  />
                  <span>
                    {formik.touched.experiences &&
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
                      : ''}
                  </span>
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4">
                  {formik.values.experiences[index].present == false ? (
                    <input
                      type="date"
                      className="input input-bordered input-primary w-full"
                      onChange={formik.handleChange}
                      value={
                        formik.values.experiences[index].present == false
                          ? formik.values.experiences[index].endDate
                          : ''
                      }
                      name={`experiences[${index}].endDate`}
                    />
                  ) : (
                    ''
                  )}
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-2">
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text">Present</span>
                      <input
                        type="checkbox"
                        className="checkbox checkbox-primary"
                        onChange={formik.handleChange}
                        value={formik.values.experiences[
                          index
                        ].present.toString()}
                        name={`experiences[${index}].present`}
                      />
                    </label>
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-2">
                  {handleAddLastExperience(index) ? (
                    <button
                      color="primary"
                      onClick={handleAddExperience}
                      className="mx-1 w-full sm:w-full md:w-full lg:w-10"
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  ) : (
                    ''
                  )}

                  {handleLastExperience(index) ? (
                    <button
                      color="primary"
                      onClick={() => handleRemoveExperience(index)}
                      className="mx-1 w-full sm:w-full md:w-full lg:w-10"
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="col-span-12">
            <button
              type="submit"
              color="primary"
              aria-label="Submit"
              className="w-full text-lg bg-green text-cream-foreground rounded-md max-h-1 !leading-[0.2] btn"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default UserProfileData
