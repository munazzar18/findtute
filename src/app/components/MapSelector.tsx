'use client'
import React, { useRef, useState, useCallback, useEffect } from 'react'
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
} from '@react-google-maps/api'

// TypeScript interfaces
interface Location {
  lat: number
  lng: number
  address?: string
}

interface MapSelectorProps {
  onLocationSelect: (location: Location) => void
  editLocation?: Location
}

const libraries: ('places' | 'drawing' | 'geometry' | 'visualization')[] = [
  'places',
]
const containerStyle = { width: '100%', height: '400px' }
const defaultCenter = { lat: 29.40602657263624, lng: 71.66944921010912 }

export default function MapSelector({
  onLocationSelect,
  editLocation,
}: MapSelectorProps) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    libraries,
  })

  // Initialize markerPos + address from editLocation if present, else default
  const [markerPos, setMarkerPos] = useState<google.maps.LatLngLiteral>(
    editLocation
      ? { lat: editLocation.lat, lng: editLocation.lng }
      : defaultCenter
  )
  const [address, setAddress] = useState<string>(editLocation?.address || '')

  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const geocoderRef = useRef<google.maps.Geocoder | null>(null)
  const [map, setMap] = useState<google.maps.Map | null>(null)

  const onLoadMap = useCallback((mapInstance: google.maps.Map) => {
    setMap(mapInstance)
    if (!geocoderRef.current && window.google) {
      geocoderRef.current = new window.google.maps.Geocoder()
    }
  }, [])

  // Only run the "default" reverse-geocode if we're NOT editing

  // Reverse-geocode helper
  const getAddressFromCoordinates = useCallback(
    (lat: number, lng: number) => {
      const geocoder = geocoderRef.current
      if (!geocoder) return

      geocoder.geocode(
        { location: { lat, lng } },
        (
          results: google.maps.GeocoderResult[] | null,
          status: google.maps.GeocoderStatus
        ) => {
          if (
            status === google.maps.GeocoderStatus.OK &&
            results &&
            results[0]
          ) {
            const newAddress = results[0].formatted_address
            setAddress(newAddress)
            if (inputRef.current) inputRef.current.value = newAddress
            onLocationSelect({ address: newAddress, lat, lng })
          }
        }
      )
    },
    [onLocationSelect]
  )

  useEffect(() => {
    if (isLoaded && map && geocoderRef.current) {
      if (editLocation) {
        setMarkerPos({ lat: editLocation.lat, lng: editLocation.lng })
        setAddress(editLocation.address || '')
        map.panTo({ lat: editLocation.lat, lng: editLocation.lng })
      } else {
        getAddressFromCoordinates(defaultCenter.lat, defaultCenter.lng)
      }
    }
  }, [isLoaded, map, editLocation])

  useEffect(() => {
    if (editLocation && map) {
      setMarkerPos({ lat: editLocation.lat, lng: editLocation.lng })
      setAddress(editLocation.address || '')
      if (inputRef.current) inputRef.current.value = editLocation.address || ''
      map.panTo({ lat: editLocation.lat, lng: editLocation.lng })
    }
  }, [editLocation, map])

  // Called when user picks from autocomplete
  const onPlaceChanged = () => {
    if (!autocompleteRef.current) return

    const place = autocompleteRef.current.getPlace()
    if (!place?.geometry?.location) return

    const lat = place.geometry.location.lat()
    const lng = place.geometry.location.lng()
    const newAddress = place.formatted_address || ''

    setMarkerPos({ lat, lng })
    setAddress(newAddress)
    if (map) map.panTo({ lat, lng })
    onLocationSelect({ address: newAddress, lat, lng })
  }

  // Map click => reverse-geocode there
  const handleMapClick = (e: google.maps.MapMouseEvent) => {
    if (!e.latLng) return

    const lat = e.latLng.lat()
    const lng = e.latLng.lng()
    setMarkerPos({ lat, lng })
    if (map) map.panTo({ lat, lng })
    getAddressFromCoordinates(lat, lng)
  }

  // Drag marker => reverse-geocode there
  const handleMarkerDragEnd = (e: google.maps.MapMouseEvent) => {
    if (!e.latLng) return

    const lat = e.latLng.lat()
    const lng = e.latLng.lng()
    setMarkerPos({ lat, lng })
    getAddressFromCoordinates(lat, lng)
  }

  // Manual typing (just update the input value)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value)
  }

  if (!isLoaded) return <p>Loading map…</p>

  return (
    <>
      <Autocomplete
        onLoad={(ref) => (autocompleteRef.current = ref)}
        onPlaceChanged={onPlaceChanged}
      >
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Location</span>
          </div>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search address"
            value={address}
            onChange={handleInputChange}
            className="input input-bordered input-primary w-full mb-3"
          />
        </label>
      </Autocomplete>

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={markerPos}
        zoom={15}
        onLoad={onLoadMap}
        onClick={handleMapClick}
      >
        <Marker
          position={markerPos}
          draggable={true}
          onDragEnd={handleMarkerDragEnd}
        />
      </GoogleMap>
    </>
  )
}
