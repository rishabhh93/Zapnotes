import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)
  const [pdf, setPdf] = useState(null)

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("UPSC")
  const [subCategory, setSubCategory] = useState("History")
  const [bestseller, setBestseller] = useState(false)

  const subCategoriesMap = {
    UPSC: ["History", "Geography", "Art & Culture", "General Science", "Current Affairs", "Social Issue", "Art Culture"],
    SSC: ["English Comprehension", "Quantitative Aptitude", "General Awareness", "General Intelligence and Reasoning", "Statistics", "Maths"],
    JEE: [
      "Maths-Coordinate Geometry","Maths-Calculus","Maths-Algebra","Maths-Vector and 3D Geometry","Maths-Trigonometry",
      "Chemistry-Organic","Chemistry-Inorganic","Chemistry-Physical",
      "Physics-Mechanics 1","Physics-Mechanics 2","Physics-Waves and Thermodynamics","Physics-Optics and Modern Physics",
      "Physics-Electrostatics and Current Electricity","Physics-Magnetism and Electromagnetic Induction"
    ]
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      const formData = new FormData()
      formData.append("name", name)
      formData.append("description", description)
      formData.append("price", price)
      formData.append("category", category)
      formData.append("subCategory", subCategory)
      formData.append("bestseller", bestseller)
      image1 && formData.append("image1", image1)
      image2 && formData.append("image2", image2)
      image3 && formData.append("image3", image3)
      image4 && formData.append("image4", image4)
      pdf && formData.append("pdf", pdf)

      const response = await axios.post(backendUrl + "/api/product/add", formData, { headers: { token } })

      if (response.data.success) {
        toast.success(response.data.message)
        setName(''); setDescription(''); setPrice('')
        setImage1(false); setImage2(false); setImage3(false); setImage4(false)
        setPdf(null); setBestseller(false)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return (
    <form
      onSubmit={onSubmitHandler}
      className="relative flex w-full flex-col items-start gap-6 rounded-2xl border border-amber-200 bg-white/80 p-6 shadow-sm backdrop-blur"
    >
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-16 h-60 w-60 rounded-full bg-gradient-to-tr from-yellow-800/10 via-amber-700/10 to-orange-700/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-16 h-60 w-60 rounded-full bg-gradient-to-tr from-amber-800/10 via-yellow-700/10 to-orange-700/10 blur-3xl" />
      </div>

      {/* Header */}
      <div className="w-full">
        <h2 className="text-2xl font-extrabold bg-gradient-to-r from-yellow-800 via-amber-700 to-orange-700 bg-clip-text text-transparent">
          Add New Product
        </h2>
        <p className="mt-1 text-sm text-gray-600">Upload images, attach a PDF, and fill in the product details.</p>
      </div>

      {/* Images */}
      <div className="w-full">
        <p className="mb-2 text-sm font-medium text-amber-900">Upload Images</p>
        <div className="flex flex-wrap gap-3">
          {[
            { id: 'image1', file: image1, setter: setImage1 },
            { id: 'image2', file: image2, setter: setImage2 },
            { id: 'image3', file: image3, setter: setImage3 },
            { id: 'image4', file: image4, setter: setImage4 },
          ].map(({ id, file, setter }) => (
            <label
              key={id}
              htmlFor={id}
              className="group flex h-24 w-24 cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-amber-200 bg-gradient-to-br from-white/90 via-white/80 to-white/90 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              title="Upload image"
            >
              <img
                className="h-full w-full object-cover"
                src={!file ? assets.upload_area : URL.createObjectURL(file)}
                alt="upload"
              />
              <input onChange={(e) => setter(e.target.files[0])} type="file" id={id} hidden />
            </label>
          ))}
        </div>
        <p className="mt-2 text-xs text-gray-500">Recommended: 1:1 or 4:3 ratio, &lt; 2MB each.</p>
      </div>

      {/* PDF */}
      <div className="w-full">
        <p className="mb-2 text-sm font-medium text-amber-900">Attach PDF (notes file)</p>
        <label className="inline-flex cursor-pointer items-center gap-3 rounded-xl border border-amber-200 bg-white px-4 py-2 text-sm text-gray-800 shadow-sm transition hover:shadow-md">
          <img src={assets.upload_area} alt="" className="h-6 w-6 opacity-70" />
          <span>Choose PDF</span>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setPdf(e.target.files[0])}
            hidden
          />
        </label>
        {pdf && <p className="mt-1 text-xs text-gray-600">Selected: {pdf.name}</p>}
      </div>

      {/* Name */}
      <div className="w-full">
        <p className="mb-2 text-sm font-medium text-amber-900">Product name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full max-w-[560px] rounded-lg border border-amber-200 bg-white px-3 py-2 text-sm outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200"
          type="text"
          placeholder="Type here"
          required
        />
      </div>

      {/* Description */}
      <div className="w-full">
        <p className="mb-2 text-sm font-medium text-amber-900">Product description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="w-full max-w-[560px] rounded-lg border border-amber-200 bg-white px-3 py-2 text-sm outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200"
          placeholder="Write content here"
          rows={4}
          required
        />
      </div>

      {/* Meta row */}
      <div className="flex w-full flex-col gap-4 sm:flex-row sm:gap-8">
        {/* Category */}
        <div>
          <p className="mb-2 text-sm font-medium text-amber-900">Product category</p>
          <select
            onChange={(e) => {
              setCategory(e.target.value)
              setSubCategory(subCategoriesMap[e.target.value][0])
            }}
            className="w-full rounded-lg border border-amber-200 bg-white px-3 py-2 text-sm outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200"
            value={category}
          >
            <option value="UPSC">UPSC</option>
            <option value="SSC">SSC</option>
            <option value="JEE">JEE</option>
          </select>
        </div>

        {/* Subcategory */}
        <div>
          <p className="mb-2 text-sm font-medium text-amber-900">Sub category</p>
          <select
            onChange={(e) => setSubCategory(e.target.value)}
            value={subCategory}
            className="w-full rounded-lg border border-amber-200 bg-white px-3 py-2 text-sm outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200"
          >
            {subCategoriesMap[category].map(sub => (
              <option key={sub} value={sub}>{sub}</option>
            ))}
          </select>
        </div>

        {/* Price */}
        <div>
          <p className="mb-2 text-sm font-medium text-amber-900">Product price</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="w-full rounded-lg border border-amber-200 bg-white px-3 py-2 text-sm outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 sm:w-[140px]"
            type="number"
            placeholder="25"
          />
        </div>
      </div>

      {/* Flags */}
      <div className="mt-2 flex items-center gap-2">
        <input
          onChange={() => setBestseller(prev => !prev)}
          checked={bestseller}
          type="checkbox"
          id="bestseller"
          className="h-4 w-4 accent-amber-600"
        />
        <label className="cursor-pointer text-sm text-gray-800" htmlFor="bestseller">
          Add to bestseller
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="mt-2 w-32 rounded-xl bg-gradient-to-r from-yellow-800 via-amber-700 to-orange-700 py-3 text-sm font-semibold text-white shadow-sm transition hover:shadow-md hover:opacity-95 active:opacity-90"
      >
        ADD
      </button>
    </form>
  )
}

export default Add
