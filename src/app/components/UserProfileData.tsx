'use client'
import Image from 'next/image'
import React, { useState, useRef, useEffect } from 'react'
import { MultiSelect } from 'react-multi-select-component'
import { FormikErrors, useFormik } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-hot-toast'
import {
  GetCity,
  GetCountry,
  GetGrades,
  GetState,
  GetSubjects,
  UpdateProfileAction,
  UploadProfileImageAction,
} from '../dashboard/profile/_action'
import { FaCircleMinus, FaCirclePlus } from 'react-icons/fa6'
import { useRouter } from 'next/navigation'
import { FaInfoCircle } from 'react-icons/fa'
import MapSelector from './MapSelector'

interface OptionType {
  label: string
  value: string
}

interface FormValues {
  grades: OptionType[]
  subjects: OptionType[]
}

type GradeResponse = [
  {
    data: {
      id: string
      grade: string
      created_at: string
    }
  }
]

type SubjectResponse = [
  {
    id: string
    subject: string
    created_at: string
  }
]

interface Education {
  institute: string
  degree: string
  start_year: string
  end_year: string
}

interface Experience {
  institute: string
  title: string
  startDate: string
  endDate: string
  present: boolean
}

const initialEducation: Education = {
  institute: '',
  degree: '',
  start_year: '',
  end_year: '',
}
const initialExperience: Experience = {
  institute: '',
  title: '',
  startDate: '',
  endDate: '',
  present: false,
}

interface Location {
  lat: number
  lng: number
  address?: string
}

const UserProfileData = () => {
  const [progress, setProgress] = useState(10)
  const [image, setImage] = useState<string>('')
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [allGrades, setAllGrades] = useState<OptionType[]>([])
  const [allSubjects, setAllSubjects] = useState<OptionType[]>([])
  const [selectedGrades, setSelectedGrades] = useState()
  const [selectedSubjects, setSelectedSubjects] = useState()
  const [isLoading, isSetLoading] = useState(false)
  const [allCountries, setAllCountries] = useState([])
  const [allStates, setAllStates] = useState([])
  const [allCities, setAllCities] = useState([])
  const [education, seteducation] = useState<Education[]>([initialEducation])
  const [experience, setexperience] = useState<Experience[]>([
    initialExperience,
  ])

  const [url, setUrl] = useState(process.env.NEXT_PUBLIC_IMAGE_URL)

  const [locationInfo, setLocationInfo] = useState<Location>()

  const router = useRouter()

  const getAllGrades = async () => {
    const res = await GetGrades()
    if (res) {
      res.data.map((grade: { id: string; grade: string }) => {
        setAllGrades((prev) => [
          ...prev,
          {
            label: grade.grade,
            value: grade.id,
          },
        ])
      })
    }
    return res
  }

  const getAllSubjects = async () => {
    const res = await GetSubjects()
    if (res) {
      res.map((subject: { id: string; subject: string }) => {
        setAllSubjects((prev) => [
          ...prev,
          {
            label: subject.subject,
            value: subject.id,
          },
        ])
      })
    }
    return res
  }

  const getCountry = async () => {
    const res = await GetCountry()
    if (res) {
      setAllCountries(res)
    }
  }

  const getStates = async () => {
    const res = await GetState(formik.values.country)
    if (res) {
      setAllStates(res)
    }
  }

  const getCities = async () => {
    const res = await GetCity(formik.values.country, formik.values.state)
    if (res) {
      setAllCities(res)
    }
  }

  useEffect(() => {
    getAllGrades()
    getAllSubjects()
    getCountry()
  }, [])

  const handleFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    if (!file) return
    const formData = new FormData()
    formData.append('file', file)
    try {
      const res = await UploadProfileImageAction(formData)
      if (res.status && res.status === true) {
        toast.success(res.message)

        //only temporary for now
        const path = res.data
        setImage(path)
      } else {
        toast.error(res.message)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleRemove = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
    setImage('')
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

  const handleAddExperience = () => {
    const updatedexperience = [...formik.values.experience, initialExperience]
    setexperience(updatedexperience)
    formik.setFieldValue('experience', updatedexperience)
  }

  const handleRemoveExperience = (index: number) => {
    const newexperience = experience.filter((_, i) => i !== index)
    setexperience(newexperience)
    formik.setFieldValue('experience', newexperience)
  }

  const handleLastExperience = (index: number) => {
    if (index > 0) {
      return index === experience.length - 1
    }
  }

  const handleAddLastExperience = (index: number) => {
    return index === experience.length - 1
  }

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          formik.setFieldValue('lattitude', pos.coords.latitude)
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

  const filterSelectedGrades = (selected: OptionType[]) => {
    let newGrades: any = []
    selected.map((grade) => {
      newGrades.push(grade.value)
    })

    setSelectedGrades(newGrades)
  }

  const filterSelectedSubjects = (selected: OptionType[]) => {
    let newSubjects: any = []
    selected.map((subject) => {
      newSubjects.push(subject.value)
    })

    setSelectedSubjects(newSubjects)
  }

  const handleLocationSelect = (location: Location) => {
    setLocationInfo({
      lat: location.lat,
      lng: location.lng,
      address: location.address,
    })
    formik.setFieldValue('lattitude', location.lat)
    formik.setFieldValue('longitude', location.lng)
    formik.setFieldValue('address', location.address)
  }

  //validation
  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      cnic: '',
      mobile: '',
      lattitude: 0,
      longitude: 0,
      city: '',
      state: '',
      country: '',
      address: '',
      avatar: '',
      preference: '',
      education: education,
      experience: experience,
      grades_ids: [],
      subjects_ids: [],
    },
    validationSchema: Yup.object({
      first_name: Yup.string().label('First Name').required().max(30),
      last_name: Yup.string().label('Last Name').required().max(30),
      cnic: Yup.string().label('CNIC').required().max(13),
      mobile: Yup.string().label('Mobile').required(),
      city: Yup.string().label('City').required().max(30),
      state: Yup.string().label('State').required().max(30),
      country: Yup.string().label('Country').required().max(30),
      address: Yup.string().label('Address').required().max(300),
      preference: Yup.string().required().label('Preference'),
      lattitude: Yup.number().required().label('lattitude'),
      longitude: Yup.number().required().label('Longitude'),
      education: Yup.array().of(
        Yup.object({
          institute: Yup.string().required().label('Institute').max(60),
          degree: Yup.string().required().label('Degree').max(30),
          start_year: Yup.string().required().label('Year').max(4),
          end_year: Yup.string().required().label('Year').max(4),
        })
      ),
      experience: Yup.array().of(
        Yup.object({
          institute: Yup.string().label('Institute').max(60),
          title: Yup.string().label('Title').max(60),
          startDate: Yup.string().label('startDate').max(20),
          endDate: Yup.string().label('endDate').max(20),
        })
      ),
    }),
    onSubmit: async (values, { resetForm }) => {
      isSetLoading(true)

      const formData = new FormData()
      formData.append('first_name', values.first_name)
      formData.append('last_name', values.last_name)
      formData.append('cnic', values.cnic)
      formData.append('mobile', values.mobile)
      formData.append('lattitude', values.lattitude.toString())
      formData.append('longitude', values.longitude.toString())
      formData.append('city', values.city)
      formData.append('state', values.state)
      formData.append('country', values.country)
      formData.append('address', values.address)
      formData.append('avatar', image)
      formData.append('preference', values.preference)
      formData.append('education', JSON.stringify(values.education))
      formData.append('experience', JSON.stringify(values.experience))
      formData.append('grades_ids', JSON.stringify(selectedGrades))
      formData.append('subjects_ids', JSON.stringify(selectedSubjects))
      const res = await UpdateProfileAction(formData)

      if (res.status && res.status === true) {
        toast.success(res.message)
        resetForm()
        setTimeout(() => {
          router.push('/dashboard')
        }, 2000)
      } else {
        toast.error(res.message)
      }

      isSetLoading(false)
    },
  })
  //validation

  useEffect(() => {
    getStates()
  }, [formik.values.country])

  useEffect(() => {
    getCities()
  }, [formik.values.state])

  return (
    <div className=" w-full bg-gray-100 shadow-2xl rounded-2xl p-2 mx-4  sm:mx-2 md:mx-8 lg:mx-16  sm:p-2 md:p-4 lg:p-8">
      <div className="bg-red-500 py-2 w-full rounded-md spin mb-5">
        <h3 className=" text-xl text-white ml-3 p-2 gap-4 flex justify-start items-start font-bold">
          <FaInfoCircle className="mt-1 animate-ping" />
          <span>
            To access FindTute services, you must complete your profile first.
          </span>
        </h3>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex justify-center items-center gap-1 sm:gap-1 md:gap-2 lg:gap-3 mb-2 sm:mb-2 md:mb-4 lg:mb-4">
          <div>
            <img
              src={image && url ? `${url}/${image}` : '/user.png'}
              alt="your profile image"
              width={200}
              height={200}
              className="rounded-full bg-primary"
            />
          </div>
          <div>
            <button
              color="primary"
              type="button"
              className="text-sm text-nowrap sm:text-sm md:text-lg  lg:text-lg  bg-green text-cream-foreground rounded-md max-h-1 !leading-[0.2] customBtn "
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
              type="button"
              className="w-full text-lg bg-red-600 text-cream-foreground rounded-md max-h-1 !leading-[0.2] customBtn"
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
                color={formik.errors.first_name ? 'danger' : 'primary'}
                onChange={(e) =>
                  formik.setFieldValue('first_name', e.target.value)
                }
                value={formik.values.first_name}
              />
              <span>
                {formik.touched.first_name && formik.errors.first_name
                  ? formik.errors.first_name
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
                color={formik.errors.last_name ? 'danger' : 'primary'}
                onChange={(e) =>
                  formik.setFieldValue('last_name', e.target.value)
                }
                value={formik.values.last_name}
                className="input input-bordered input-primary w-full"
              />
              <span>
                {formik.touched.last_name && formik.errors.last_name
                  ? formik.errors.last_name
                  : ''}
              </span>
            </label>
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">CNIC (Without dashes)</span>
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
                <span className="label-text">Mobile Number</span>
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
                <span className="label-text">
                  Select your grades (You can select multiple)
                </span>
              </div>
              <MultiSelect
                options={allGrades}
                value={formik.values.grades_ids}
                onChange={(selected: OptionType[]) => {
                  formik.setFieldValue('grades_ids', selected)
                  filterSelectedGrades(selected)
                }}
                labelledBy="Select grades"
              />
              <span>
                {formik.touched.grades_ids && formik.errors.grades_ids
                  ? formik.errors.grades_ids
                  : ''}
              </span>
            </label>
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">
                  Select your subjects (You can select multiple)
                </span>
              </div>
              <MultiSelect
                options={allSubjects}
                value={formik.values.subjects_ids}
                onChange={(selected: OptionType[]) => {
                  formik.setFieldValue('subjects_ids', selected)
                  filterSelectedSubjects(selected)
                }}
                labelledBy="Select subjects"
              />
              <span className="">
                {formik.touched.subjects_ids && formik.errors.subjects_ids
                  ? formik.errors.subjects_ids
                  : ''}
              </span>
            </label>
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Select your preference</span>
              </div>
              <select
                className="select select-primary w-full"
                color={formik.errors.preference ? 'danger' : 'primary'}
                onChange={(e) =>
                  formik.setFieldValue('preference', e.target.value)
                }
                value={formik.values.preference}
              >
                <option value="">Select preference</option>
                <option value="online">Online</option>
                <option value="onsite">On-site</option>
                <option value="both">Both</option>
              </select>
              <span>
                {formik.touched.preference && formik.errors.preference
                  ? formik.errors.preference
                  : ''}
              </span>
            </label>
          </div>

          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Select country</span>
              </div>
              <select
                className="select select-primary w-full"
                color={formik.errors.country ? 'danger' : 'primary'}
                onChange={(e) =>
                  formik.setFieldValue('country', e.target.value)
                }
                value={formik.values.country}
              >
                <option value="">Select country</option>
                {allCountries.map((country: any) => (
                  <option key={country.isoCode} value={country.isoCode}>
                    {country.name}
                  </option>
                ))}
              </select>
              <span>
                {formik.touched.country && formik.errors.country
                  ? formik.errors.country
                  : ''}
              </span>
            </label>
          </div>

          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Select State</span>
              </div>
              <select
                className="select select-primary w-full"
                color={formik.errors.state ? 'danger' : 'primary'}
                onChange={(e) => formik.setFieldValue('state', e.target.value)}
                value={formik.values.state}
              >
                <option value="">Select state</option>
                {allStates.map((state: any) => (
                  <option key={state.isoCode} value={state.isoCode}>
                    {state.name}
                  </option>
                ))}
              </select>
              <span>
                {formik.touched.country && formik.errors.country
                  ? formik.errors.country
                  : ''}
              </span>
            </label>
          </div>

          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Select City</span>
              </div>
              <select
                className="select select-primary w-full"
                color={formik.errors.city ? 'danger' : 'primary'}
                onChange={(e) => formik.setFieldValue('city', e.target.value)}
                value={formik.values.city}
              >
                <option value="">Select city</option>
                {allCities.map((city: any) => (
                  <option key={city.name} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
              <span>
                {formik.touched.country && formik.errors.country
                  ? formik.errors.country
                  : ''}
              </span>
            </label>
          </div>

          <div className="col-span-12 mb-2">
            <h1 className="text-2xl font-bold">
              Education{' '}
              <span className="text-sm">
                (You can add multiple education by clicking + icon)
              </span>
            </h1>
          </div>
          <div className="col-span-12">
            {formik.values.education.map((education, index) => (
              <div
                className="grid grid-cols-12 gap-4 items-baseline"
                key={index}
              >
                <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4 mb-4">
                  <label className="form-control">
                    <div className="label">
                      <span className="label-text">Institute</span>
                    </div>
                    <input
                      type="text"
                      className="input input-bordered input-primary w-full"
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
                    />
                  </label>
                  <span>
                    {formik.touched.education &&
                    formik.touched.education[index] &&
                    formik.errors.education &&
                    formik.errors.education[index] &&
                    (formik.errors.education as FormikErrors<Education>[])[
                      index
                    ]?.institute
                      ? (formik.errors.education as FormikErrors<Education>[])[
                          index
                        ]?.institute
                      : ''}
                  </span>
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-3">
                  <label className="form-control">
                    <div className="label">
                      <span className="label-text">Degree</span>
                    </div>
                    <input
                      type="text"
                      className="input input-bordered input-primary w-full"
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
                    />
                  </label>
                  <span>
                    {formik.touched.education &&
                    formik.touched.education[index] &&
                    formik.errors.education &&
                    formik.errors.education[index] &&
                    (formik.errors.education as FormikErrors<Education>[])[
                      index
                    ]?.degree
                      ? (formik.errors.education as FormikErrors<Education>[])[
                          index
                        ]?.degree
                      : ''}
                  </span>
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-2">
                  <label className="form-control">
                    <div className="label">
                      <span className="label-text">Start Year</span>
                    </div>
                    <input
                      type="text"
                      className="input input-bordered input-primary w-full"
                      color={
                        formik.errors.education &&
                        formik.errors.education[index] &&
                        (formik.errors.education as FormikErrors<Education>[])[
                          index
                        ]?.start_year
                          ? 'danger'
                          : 'primary'
                      }
                      onChange={formik.handleChange}
                      value={formik.values.education[index].start_year}
                      name={`education[${index}].start_year`}
                    />
                  </label>
                  <span>
                    {formik.touched.education &&
                    formik.touched.education[index] &&
                    formik.errors.education &&
                    formik.errors.education[index] &&
                    (formik.errors.education as FormikErrors<Education>[])[
                      index
                    ]?.start_year
                      ? (formik.errors.education as FormikErrors<Education>[])[
                          index
                        ]?.start_year
                      : ''}
                  </span>
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-2">
                  <label className="form-control">
                    <div className="label">
                      <span className="label-text">End Year</span>
                    </div>
                    <input
                      type="text"
                      className="input input-bordered input-primary w-full"
                      color={
                        formik.errors.education &&
                        formik.errors.education[index] &&
                        (formik.errors.education as FormikErrors<Education>[])[
                          index
                        ]?.end_year
                          ? 'danger'
                          : 'primary'
                      }
                      onChange={formik.handleChange}
                      value={formik.values.education[index].end_year}
                      name={`education[${index}].end_year`}
                    />
                  </label>
                  <span>
                    {formik.touched.education &&
                    formik.touched.education[index] &&
                    formik.errors.education &&
                    formik.errors.education[index] &&
                    (formik.errors.education as FormikErrors<Education>[])[
                      index
                    ]?.end_year
                      ? (formik.errors.education as FormikErrors<Education>[])[
                          index
                        ]?.end_year
                      : ''}
                  </span>
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-1 items-center">
                  <label className="form-control">
                    <div className="label mb-2">
                      <span className="label-text"></span>
                    </div>
                    {handleAddLastEducation(index) ? (
                      <button
                        color="primary"
                        onClick={handleAddEducation}
                        type="button"
                        className="mx-1 w-full sm:w-full md:w-full lg:w-10 "
                      >
                        <FaCirclePlus size={20} />
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
                        <FaCircleMinus />
                      </button>
                    ) : (
                      ''
                    )}
                  </label>
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-12 mb-2">
            <div className="flex w-full flex-col">
              <div className="divider text-lg font-bold">
                Experience details only for teachers
              </div>
            </div>
            <h1 className="text-2xl font-bold">
              Experience{' '}
              <span className="text-sm">
                (You can add multiple experience by clicking + icon)
              </span>
            </h1>
          </div>
          <div className="col-span-12 mb-2">
            {formik.values.experience.map((experience, index) => (
              <div
                className="grid grid-cols-12 gap-4 items-baseline mb-4"
                key={index}
              >
                <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6">
                  <input
                    type="text"
                    className="input input-bordered input-primary w-full"
                    color={
                      formik.errors.experience &&
                      formik.errors.experience[index] &&
                      (formik.errors.experience as FormikErrors<Experience>[])[
                        index
                      ]?.institute
                        ? 'danger'
                        : 'primary'
                    }
                    onChange={formik.handleChange}
                    value={formik.values.experience[index].institute}
                    name={`experience[${index}].institute`}
                  />
                  <span>
                    {formik.touched.experience &&
                    formik.touched.experience[index] &&
                    formik.errors.experience &&
                    formik.errors.experience[index] &&
                    (formik.errors.experience as FormikErrors<Experience>[])[
                      index
                    ]?.institute
                      ? (
                          formik.errors.experience as FormikErrors<Experience>[]
                        )[index]?.institute
                      : ''}
                  </span>
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6">
                  <input
                    type="text"
                    className="input input-bordered input-primary w-full"
                    color={
                      formik.errors.experience &&
                      formik.errors.experience[index] &&
                      (formik.errors.experience as FormikErrors<Experience>[])[
                        index
                      ]?.title
                        ? 'danger'
                        : 'primary'
                    }
                    onChange={formik.handleChange}
                    value={formik.values.experience[index].title}
                    name={`experience[${index}].title`}
                  />
                  <span>
                    {formik.touched.experience &&
                    formik.touched.experience[index] &&
                    formik.errors.experience &&
                    formik.errors.experience[index] &&
                    (formik.errors.experience as FormikErrors<Experience>[])[
                      index
                    ]?.title
                      ? (
                          formik.errors.experience as FormikErrors<Experience>[]
                        )[index]?.title
                      : ''}
                  </span>
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4">
                  <input
                    type="date"
                    className="input input-bordered input-primary w-full"
                    color={
                      formik.errors.experience &&
                      formik.errors.experience[index] &&
                      (formik.errors.experience as FormikErrors<Experience>[])[
                        index
                      ]?.startDate
                        ? 'danger'
                        : 'primary'
                    }
                    onChange={formik.handleChange}
                    value={formik.values.experience[index].startDate}
                    name={`experience[${index}].startDate`}
                  />
                  <span>
                    {formik.touched.experience &&
                    formik.touched.experience[index] &&
                    formik.errors.experience &&
                    formik.errors.experience[index] &&
                    (formik.errors.experience as FormikErrors<Experience>[])[
                      index
                    ]?.startDate
                      ? (
                          formik.errors.experience as FormikErrors<Experience>[]
                        )[index]?.startDate
                      : ''}
                  </span>
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4">
                  {formik.values.experience[index].present == false ? (
                    <input
                      type="date"
                      className="input input-bordered input-primary w-full"
                      onChange={formik.handleChange}
                      value={
                        formik.values.experience[index].present == false
                          ? formik.values.experience[index].endDate
                          : ''
                      }
                      name={`experience[${index}].endDate`}
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
                        value={formik.values.experience[
                          index
                        ].present.toString()}
                        name={`experience[${index}].present`}
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
                      <FaCirclePlus />
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
                      <FaCircleMinus />
                    </button>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="col-span-12">
            <div className="divider text-lg font-bold">
              Please enter your accurate address or select your precise location
              from map below
            </div>
            <MapSelector onLocationSelect={handleLocationSelect} />
          </div>

          <div className="col-span-12">
            <button
              type="submit"
              color="primary"
              aria-label="Submit"
              className="w-full text-lg bg-green text-cream-foreground rounded-md max-h-1 !leading-[0.2] customBtn"
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
