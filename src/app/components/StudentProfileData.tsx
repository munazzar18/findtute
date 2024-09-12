'use client'
import Image from 'next/image'
import React, { useState, useRef, useEffect } from 'react'
import { Button, Input } from '@nextui-org/react'
import { FormikErrors, useFormik } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-hot-toast'
import { Select, SelectItem } from '@nextui-org/select'
import { Spinner } from '@nextui-org/spinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlus,
  faMinus,
  faUpload,
  faTrash,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import { Checkbox } from '@nextui-org/checkbox'

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

interface StudentFormResponse {
  error: string
  message: string
  statusCode: number
  status: boolean
  data: {
    first_name: string
    last_name: string
    cnic: string
    mobile: string
    latitude: number
    longitude: number
    address: string
    avatar: string
    preference: string
    education: [
      {
        institute: string
        degree: string
        year: string
      }
    ]
    user_id: string
    is_active: boolean
    is_deleted: boolean
    is_verified: boolean
    id: string
    created_at: string
    updated_at: string
  }
}

interface StudentFormProps {
  getStudentData: (values: {
    first_name: string
    last_name: string
    cnic: string
    mobile: string
    latitude: number
    longitude: number
    address: string
    grades: string
    subjects: string
    avatar: string
    preference: string
    education: Education[]
  }) => Promise<StudentFormResponse>
}

interface StudentProfileDataProps {
  getStudentData: StudentFormProps['getStudentData']
  getGrades: () => Promise<void>
}

const initialEducation: Education = { institute: '', degree: '', year: '' }
const initialExperience: Experience = {
  institute: '',
  title: '',
  startDate: '',
  endDate: '',
  present: false,
}

const StudentProfileData = ({
  getStudentData,
  getGrades,
}: StudentProfileDataProps) => {
  const [progress, setProgress] = useState(10)
  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState<File | null>()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isLoading, isSetLoading] = useState(false)
  const [education, seteducation] = useState<Education[]>([initialEducation])
  const [experiences, setExperiences] = useState<Experience[]>([
    initialExperience,
  ])
  const [grades, setGrades] = useState([])

  const fetchGrades = async () => {
    setLoading(true)
    try {
      const res: any = await getGrades()
      console.log(res)
      setGrades(res.data)
    } catch (error) {
      console.error('Failed to fetch grades', error)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchGrades()
  }, [])

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
    const updatededucation = [...formik.values.education, initialEducation]
    seteducation(updatededucation)
    formik.setFieldValue('education', updatededucation)
  }

  const handleRemoveEducation = (index: number) => {
    const neweducation = education.filter((_, i) => i !== index)
    seteducation(neweducation)
    formik.setFieldValue('education', neweducation)
  }

  const handleLastEducation = (index: number) => {
    if (index > 0) {
      return index === education.length - 1
    }
  }

  const handleAddLastEducation = (index: number) => {
    return index === education.length - 1
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
      first_name: '',
      last_name: '',
      cnic: '',
      mobile: '',
      grades: '',
      subjects: '',
      preference: '',
      latitude: 0,
      longitude: 0,
      address: '',
      avatar: '',
      education: education,
    },
    validationSchema: Yup.object({
      first_name: Yup.string().label('First Name').required().max(30),
      last_name: Yup.string().label('Last Name').required().max(30),
      cnic: Yup.string().label('CNIC').required().max(13),
      mobile: Yup.string().label('Mobile').required(),
      address: Yup.string().label('Address').required().max(100),
      grades: Yup.string()
        .label('Grades')
        .required('Grades is a required field'),
      subjects: Yup.string()
        .label('Subjects')
        .required('Subjects is a required field'),
      preference: Yup.string().required().label('Preference'),
      latitude: Yup.number().required().label('Latitude'),
      longitude: Yup.number().required().label('Longitude'),
      education: Yup.array().of(
        Yup.object({
          institute: Yup.string().required().label('Institute').max(60),
          degree: Yup.string().required().label('Degree').max(30),
          year: Yup.string().required().label('Year').max(4),
        })
      ),
    }),
    onSubmit: async (values, { resetForm }) => {
      isSetLoading(true)
      let res = await getStudentData(values)
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
  const allGrades = [
    { id: 1, grade: '9th' },
    { id: 2, grade: '10th' },
    { id: 3, grade: '1st year' },
    { id: 4, grade: '2nd year' },
  ]
  //grades

  //subjects
  const allSubjects = [
    { id: 1, subject: 'Physics' },
    { id: 2, subject: 'English' },
    { id: 3, subject: 'Math' },
    { id: 4, subject: 'History' },
  ]
  //subjects

  return (
    <div className=" w-full bg-gray-100 shadow-2xl rounded-2xl p-2 mx-4 sm:mx-2 md:mx-8 lg:mx-16  sm:p-2 md:p-4 lg:p-8">
      {loading && (
        <div className="fixed inset-0 bg-black/10 flex items-center justify-center">
          <Spinner color="primary" size="lg" />
        </div>
      )}
      <form className="p-2 sm:p-2 md:p-2 lg:p-4" onSubmit={formik.handleSubmit}>
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
              type="button"
              onClick={handleFileUpload}
              className="bg-green text-cream-foreground rounded-md max-h-1 leading-[0.2] btn"
            >
              Upload picture
              <FontAwesomeIcon icon={faUpload} size="sm" />
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
              type="button"
              className="bg-red-600 text-cream-foreground rounded-md max-h-1 leading-[0.2] btn"
              onClick={handleRemove}
            >
              Remove
              <FontAwesomeIcon icon={faTrash} size="sm" />
            </button>
            {/* <Button color="primary" variant="ghost" onClick={handleRemove}>
              Remove
            </Button> */}
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
              isInvalid={formik.errors.first_name ? true : false}
              color={formik.errors.first_name ? 'danger' : 'primary'}
              onChange={(e) =>
                formik.setFieldValue('first_name', e.target.value)
              }
              value={formik.values.first_name}
              errorMessage={
                formik.touched.first_name && formik.errors.first_name
                  ? formik.errors.first_name
                  : ''
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
              isInvalid={formik.errors.last_name ? true : false}
              color={formik.errors.last_name ? 'danger' : 'primary'}
              onChange={(e) =>
                formik.setFieldValue('last_name', e.target.value)
              }
              value={formik.values.last_name}
              errorMessage={
                formik.touched.last_name && formik.errors.last_name
                  ? formik.errors.last_name
                  : ''
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
              color={formik.errors.cnic ? 'danger' : 'primary'}
              onChange={(e) => formik.setFieldValue('cnic', e.target.value)}
              value={formik.values.cnic}
              errorMessage={
                formik.touched.cnic && formik.errors.cnic
                  ? formik.errors.cnic
                  : ''
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
              color={formik.errors.mobile ? 'danger' : 'primary'}
              onChange={(e) => formik.setFieldValue('mobile', e.target.value)}
              value={formik.values.mobile}
              errorMessage={
                formik.touched.mobile && formik.errors.mobile
                  ? formik.errors.mobile
                  : ''
              }
            />
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6">
            <Select
              label="Select grades you want to learn"
              labelPlacement="outside"
              selectionMode="multiple"
              size="lg"
              variant="bordered"
              isInvalid={formik.errors.grades ? true : false}
              color={formik.errors.grades ? 'danger' : 'primary'}
              onChange={(e) => formik.setFieldValue('grades', e.target.value)}
              value={formik.values.grades}
              errorMessage={
                formik.touched.grades && formik.errors.grades
                  ? formik.errors.grades
                  : ''
              }
            >
              {grades?.map((grade: any) => (
                <SelectItem key={grade.id}>{grade.grade}</SelectItem>
              ))}
            </Select>
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6">
            <Select
              label="Select subjects you want to learn"
              labelPlacement="outside"
              selectionMode="multiple"
              size="lg"
              variant="bordered"
              isInvalid={formik.errors.subjects ? true : false}
              color={formik.errors.subjects ? 'danger' : 'primary'}
              onChange={(e) => formik.setFieldValue('subjects', e.target.value)}
              value={formik.values.subjects}
              errorMessage={
                formik.touched.subjects && formik.errors.subjects
                  ? formik.errors.subjects
                  : ''
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
              color={formik.errors.preference ? 'danger' : 'primary'}
              onChange={(e) =>
                formik.setFieldValue('preference', e.target.value)
              }
              value={formik.values.preference}
              errorMessage={
                formik.touched.preference && formik.errors.preference
                  ? formik.errors.preference
                  : ''
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
                  color={formik.errors.latitude ? 'danger' : 'primary'}
                  onChange={(e) =>
                    formik.setFieldValue('latitude', e.target.value)
                  }
                  value={formik.values.latitude.toString()}
                  errorMessage={
                    formik.touched.latitude && formik.errors.latitude
                      ? formik.errors.latitude
                      : ''
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
                  color={formik.errors.longitude ? 'danger' : 'primary'}
                  onChange={(e) =>
                    formik.setFieldValue('longitude', e.target.value)
                  }
                  value={formik.values.longitude.toString()}
                  errorMessage={
                    formik.touched.longitude && formik.errors.longitude
                      ? formik.errors.longitude
                      : ''
                  }
                />
              </div>

              <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4">
                <button
                  type="button"
                  onClick={handleLocation}
                  className="bg-green text-cream-foreground rounded-md max-h-1 leading-[0.2] btn"
                >
                  Get Location
                  <FontAwesomeIcon icon={faLocationDot} size="sm" />
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6">
            <Input
              type="text"
              variant="bordered"
              label="Address"
              labelPlacement="outside"
              size="lg"
              isInvalid={formik.errors.address ? true : false}
              color={formik.errors.address ? 'danger' : 'primary'}
              onChange={(e) => formik.setFieldValue('address', e.target.value)}
              value={formik.values.address}
              errorMessage={
                formik.touched.address && formik.errors.address
                  ? formik.errors.address
                  : ''
              }
            />
          </div>
          <div className="col-span-12 mb-2">
            <h1 className="text-2xl font-bold">Education</h1>
          </div>
          <div className="col-span-12">
            {formik.values.education.map((education, index) => (
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
                      formik.errors.education &&
                      formik.errors.education[index] &&
                      (formik.errors.education as FormikErrors<Education>[])[
                        index
                      ]?.institute
                        ? true
                        : false
                    }
                    color={
                      formik.errors.education &&
                      formik.errors.education[index] &&
                      (formik.errors.education as FormikErrors<Education>[])[
                        index
                      ]?.institute
                        ? 'danger'
                        : 'primary'
                    }
                    onChange={formik.handleChange}
                    value={formik.values.education[index].institute}
                    name={`education[${index}].institute`}
                    errorMessage={
                      formik.touched.education &&
                      formik.touched.education[index] &&
                      formik.errors.education &&
                      formik.errors.education[index] &&
                      (formik.errors.education as FormikErrors<Education>[])[
                        index
                      ]?.institute
                        ? (
                            formik.errors.education as FormikErrors<Education>[]
                          )[index]?.institute
                        : ''
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
                      formik.errors.education &&
                      formik.errors.education[index] &&
                      (formik.errors.education as FormikErrors<Education>[])[
                        index
                      ]?.degree
                        ? true
                        : false
                    }
                    color={
                      formik.errors.education &&
                      formik.errors.education[index] &&
                      (formik.errors.education as FormikErrors<Education>[])[
                        index
                      ]?.degree
                        ? 'danger'
                        : 'primary'
                    }
                    onChange={formik.handleChange}
                    value={formik.values.education[index].degree}
                    name={`education[${index}].degree`}
                    errorMessage={
                      formik.touched.education &&
                      formik.touched.education[index] &&
                      formik.errors.education &&
                      formik.errors.education[index] &&
                      (formik.errors.education as FormikErrors<Education>[])[
                        index
                      ]?.degree
                        ? (
                            formik.errors.education as FormikErrors<Education>[]
                          )[index]?.degree
                        : ''
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
                      formik.errors.education &&
                      formik.errors.education[index] &&
                      (formik.errors.education as FormikErrors<Education>[])[
                        index
                      ]?.year
                        ? true
                        : false
                    }
                    color={
                      formik.errors.education &&
                      formik.errors.education[index] &&
                      (formik.errors.education as FormikErrors<Education>[])[
                        index
                      ]?.year
                        ? 'danger'
                        : 'primary'
                    }
                    onChange={formik.handleChange}
                    value={formik.values.education[index].year}
                    name={`education[${index}].year`}
                    errorMessage={
                      formik.touched.education &&
                      formik.touched.education[index] &&
                      formik.errors.education &&
                      formik.errors.education[index] &&
                      (formik.errors.education as FormikErrors<Education>[])[
                        index
                      ]?.year
                        ? (
                            formik.errors.education as FormikErrors<Education>[]
                          )[index]?.year
                        : ''
                    }
                  />
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-2">
                  {handleAddLastEducation(index) ? (
                    <Button
                      type="button"
                      onClick={handleAddEducation}
                      className="bg-green text-cream-foreground rounded-md max-h-0 leading-[0] btn"
                      size="sm"
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </Button>
                  ) : (
                    ''
                  )}

                  {handleLastEducation(index) ? (
                    <Button
                      type="button"
                      onClick={() => handleRemoveEducation(index)}
                      className="bg-red-600 text-cream-foreground rounded-md max-h-0 leading-[0] btn"
                      size="sm"
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </Button>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="col-span-12">
            <Button
              type="submit"
              isLoading={isLoading}
              aria-label="Submit"
              className="w-full text-lg bg-green text-cream-foreground rounded-md max-h-0 leading-[0] btn"
              size="lg"
            >
              Save
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default StudentProfileData
