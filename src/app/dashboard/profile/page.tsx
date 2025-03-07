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
  GetProfileByIdAction,
  GetState,
  GetSubjects,
  UpdateProfileAction,
  UploadProfileImageAction,
} from './_action'
import { FaCircleMinus, FaCirclePlus } from 'react-icons/fa6'
import Loader from '@/app/components/Loader'

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
  },
]

type SubjectResponse = [
  {
    id: string
    subject: string
    created_at: string
  },
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

const UserProfileData = () => {
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(10)
  const [image, setImage] = useState<string>('')
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [allGrades, setAllGrades] = useState<OptionType[]>([])
  const [allSubjects, setAllSubjects] = useState<OptionType[]>([])
  const [selectedGrades, setSelectedGrades] = useState<any[]>()
  const [selectedSubjects, setSelectedSubjects] = useState<any>()
  const [isLoading, isSetLoading] = useState(false)
  const [allCountries, setAllCountries] = useState([])
  const [allStates, setAllStates] = useState([])
  const [allCities, setAllCities] = useState([])
  const [education, seteducation] = useState<Education[]>([initialEducation])
  const [experience, setexperience] = useState<Experience[]>([
    initialExperience,
  ])
  const [url, setUrl] = useState('http://localhost:3500')

  const [profile, setProfile] = useState({
    first_name: '',
    last_name: '',
    email: '',
    mobile: '',
    address: '',
    city: '',
    state: '',
    country: '',
    hourly_rate: 0,
    monthly_rate: 0,
    privacy_terms_conditions: false,
    cnic: '',
    lattitude: 0,
    longitude: 0,
    avatar: '',
    preference: '',
  })

  const getProfile = async () => {
    setLoading(true)
    const res = await GetProfileByIdAction()
    setProfile({
      first_name: res.first_name,
      last_name: res.last_name,
      email: res.email,
      mobile: res.mobile,
      address: res.address,
      city: res.city,
      state: res.state,
      country: res.country,
      hourly_rate: res.hourly_rate,
      monthly_rate: res.monthly_rate,
      privacy_terms_conditions: res.privacy_terms_conditions,
      cnic: res.cnic,
      lattitude: res.lattitude,
      longitude: res.longitude,
      avatar: res.avatar,
      preference: res.preference,
    })
    const grades = res?.grades
    const subjects: any[] = res?.subjects
    let newGrades: any = []
    let newSubjects: any = []
    grades?.map((grade: any) => {
      newGrades.push({
        label: grade.grade,
        value: grade.id,
      })
    })
    subjects?.map((subject: any) => {
      newSubjects.push({
        label: subject.subject,
        value: subject.id,
      })
    })
    setImage(res?.avatar)
    if (newGrades.length > 0) {
      setSelectedGrades(newGrades)
    }
    if (newSubjects.length > 0) {
      setSelectedSubjects(newSubjects)
    }
    seteducation(JSON.parse(res?.education))
    setexperience(JSON.parse(res?.experience))
    setLoading(false)
  }

  const getAllGrades = async () => {
    setLoading(true)
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
    setLoading(false)
    return res
  }

  const getAllSubjects = async () => {
    setLoading(true)
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
    setLoading(false)
    return res
  }

  const getCountry = async () => {
    setLoading(true)
    const res = await GetCountry()
    if (res) {
      setAllCountries(res)
    }
    setLoading(false)
  }

  const getStates = async () => {
    setLoading(true)
    const res = await GetState(formik.values.country)
    if (res) {
      setAllStates(res)
    }
    setLoading(false)
  }

  const getCities = async () => {
    setLoading(true)
    const res = await GetCity(formik.values.country, formik.values.state)
    if (res) {
      setAllCities(res)
    }
    setLoading(false)
  }

  useEffect(() => {
    getProfile()
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
    isSetLoading(true)
    setLoading(true)
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

    isSetLoading(false)
    setLoading(false)
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
      return index === education?.length - 1
    }
  }

  const handleAddLastEducation = (index: number) => {
    return index === education?.length - 1
  }

  const handleAddExperience = () => {
    const updatedexperience = [...formik.values.experience, initialExperience]
    setexperience(updatedexperience)
    formik.setFieldValue('experience', updatedexperience)
  }

  const handleRemoveExperience = (index: number) => {
    const newexperience = experience?.filter((_, i) => i !== index)
    setexperience(newexperience)
    formik.setFieldValue('experience', newexperience)
  }

  const handleLastExperience = (index: number) => {
    if (index > 0) {
      return index === experience?.length - 1
    }
  }

  const handleAddLastExperience = (index: number) => {
    return index === experience?.length - 1
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
        },
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

  //validation
  const formik = useFormik({
    enableReinitialize: true, // Allow reinitialization of values
    initialValues: {
      first_name: profile.first_name || '',
      last_name: profile.last_name || '',
      cnic: profile.cnic || '',
      mobile: profile.mobile || '',
      hourly_rate: profile.hourly_rate || 0,
      monthly_rate: profile.monthly_rate || 0,
      lattitude: profile.lattitude || 0,
      longitude: profile.longitude || 0,
      city: profile.city || '',
      state: profile.state || '',
      country: profile.country || '',
      address: profile.address || '',
      avatar: profile.avatar || image || '',
      preference: profile.preference || '',
      education: education,
      experience: experience,
      grades_ids: selectedGrades?.length ? selectedGrades : [],
      subjects_ids: selectedSubjects?.length ? selectedSubjects : [],
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
        }),
      ),
      experience: Yup.array().of(
        Yup.object({
          institute: Yup.string().label('Institute').max(60),
          title: Yup.string().label('Title').max(60),
          startDate: Yup.string().label('startDate').max(20),
          endDate: Yup.string().label('endDate').max(20),
        }),
      ),
    }),
    onSubmit: async (values, { resetForm }) => {
      isSetLoading(true)

      let newGrades: any[] = []
      let newSubjects: any[] = []

      if (Array.isArray(selectedGrades) && selectedGrades[0]?.label) {
        selectedGrades?.map((grade: any) => {
          newGrades.push(grade.value)
        })
      }

      if (Array.isArray(selectedSubjects) && selectedSubjects[0]?.label) {
        selectedSubjects.map((subject: any) => {
          newSubjects.push(subject.value)
        })
      }
      const formData = new FormData()
      formData.append('first_name', values.first_name)
      formData.append('last_name', values.last_name)
      formData.append('cnic', values.cnic)
      formData.append('mobile', values.mobile)
      formData.append('hourly_rate', values.hourly_rate.toString())
      formData.append('monthly_rate', values.monthly_rate.toString())
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
      formData.append(
        'grades_ids',
        JSON.stringify(newGrades.length ? newGrades : selectedGrades),
      )
      formData.append(
        'subjects_ids',
        JSON.stringify(newSubjects.length ? newSubjects : selectedSubjects),
      )

      const res = await UpdateProfileAction(formData)

      if (res.status && res.status === true) {
        toast.success(res.message)
        resetForm()
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
    <div className=" w-full bg-gray-100 shadow-2xl rounded-2xl p-2 ">
      {loading && <Loader />}
      <form onSubmit={formik.handleSubmit}>
        <div className="flex justify-center items-center gap-1 sm:gap-1 md:gap-2 lg:gap-3 mb-2 sm:mb-2 md:mb-4 lg:mb-4">
          <div>
            <img
              src={image ? url + image : '/user.png'}
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
                <span className="label-text">CNIC</span>
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
                <span className="label-text">Hourly Rate (Rs)</span>
              </div>
              <input
                type="text"
                color={formik.errors.hourly_rate ? 'danger' : 'primary'}
                onChange={(e) =>
                  formik.setFieldValue('hourly_rate', e.target.value)
                }
                value={formik.values.hourly_rate}
                className="input input-bordered input-primary w-full"
              />
              <span>
                {formik.touched.hourly_rate && formik.errors.hourly_rate
                  ? formik.errors.hourly_rate
                  : ''}
              </span>
            </label>
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Monthly Rate (Rs)</span>
              </div>
              <input
                type="text"
                color={formik.errors.monthly_rate ? 'danger' : 'primary'}
                onChange={(e) =>
                  formik.setFieldValue('monthly_rate', e.target.value)
                }
                value={formik.values.monthly_rate}
                className="input input-bordered input-primary w-full"
              />
              <span>
                {formik.touched.monthly_rate && formik.errors.monthly_rate
                  ? formik.errors.monthly_rate
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
                value={allGrades.filter((grade) =>
                  formik.values.grades_ids.includes(grade.value),
                )}
                onChange={(selected: OptionType[]) => {
                  const selectedValues = selected.map((option) => option.value) // Extract UUIDs
                  formik.setFieldValue('grades_ids', selectedValues)
                  filterSelectedGrades(selected) // Keep full objects for filtering
                }}
                labelledBy="Select grades"
              />

              <span>
                {formik.touched.grades_ids && formik.errors.grades_ids ? (
                  <span style={{ color: 'red' }}>
                    {formik.errors.grades_ids.toString()}
                  </span>
                ) : (
                  ''
                )}
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
                value={allSubjects.filter((subject) =>
                  formik.values.subjects_ids.includes(subject.value),
                )}
                onChange={(selected: OptionType[]) => {
                  const selectedValues = selected.map((option) => option.value) // Extract UUIDs
                  formik.setFieldValue('subjects_ids', selectedValues)
                  filterSelectedSubjects(selected) // Keep full objects for filtering
                }}
                labelledBy="Select subjects"
              />

              <span className="">
                {formik.touched.subjects_ids && formik.errors.subjects_ids
                  ? formik.errors.subjects_ids.toString()
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
          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6">
            <div className="grid grid-cols-12 gap-4 items-baseline">
              <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">lattitude</span>
                  </div>
                  <input
                    className="input input-bordered input-primary w-full"
                    type="number"
                    color={formik.errors.lattitude ? 'danger' : 'primary'}
                    onChange={(e) =>
                      formik.setFieldValue('lattitude', e.target.value)
                    }
                    value={formik.values.lattitude.toString()}
                  />
                  <span>
                    {formik.touched.lattitude && formik.errors.lattitude
                      ? formik.errors.lattitude
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

          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12">
            <label className="form-control">
              <div className="label">
                <span className="label-text">Address</span>
              </div>
              <textarea
                color={formik.errors.address ? 'danger' : 'primary'}
                onChange={(e) =>
                  formik.setFieldValue('address', e.target.value)
                }
                value={formik.values.address}
                className="textarea textarea-primary h-24"
                placeholder="Please enter your complete address"
              ></textarea>
            </label>
            <span>
              {formik.touched.address && formik.errors.address
                ? formik.errors.address
                : ''}
            </span>
          </div>

          <div className="col-span-12 mb-2">
            <h1 className="text-2xl font-bold">Education</h1>
          </div>
          <div className="col-span-12">
            {formik.values.education?.map((education, index) => (
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
                        <FaCirclePlus />
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
            <h1 className="text-2xl font-bold">Experience</h1>
          </div>
          <div className="col-span-12 mb-2">
            {formik.values.experience?.map((experience, index) => (
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
                      ? (formik.errors.experience as FormikErrors<
                          Experience
                        >[])[index]?.institute
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
                      ? (formik.errors.experience as FormikErrors<
                          Experience
                        >[])[index]?.title
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
                      ? (formik.errors.experience as FormikErrors<
                          Experience
                        >[])[index]?.startDate
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
                        checked={formik.values.experience[index].present}
                        value={
                          formik.values.experience[index].present == true
                            ? 'true'
                            : 'false'
                        }
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
