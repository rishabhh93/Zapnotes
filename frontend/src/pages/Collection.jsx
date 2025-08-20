import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const subCategoriesMap = {
  UPSC: [
    'History',
    'Geography',
    'Art & Culture',
    'General Science',
    'Current Affairs',
    'Social Issue',
  ],
  SSC: [
    'English Comprehension',
    'Quantitative Aptitude',
    'General Awareness',
    'General Intelligence and Reasoning',
    'Statistics',
    'Maths',
  ],
  JEE: [
    'Maths-Coordinate Geometry',
    'Maths-Calculus',
    'Maths-Algebra',
    'Maths-Vector and 3D Geometry',
    'Maths-Trigonometry',
    'Chemistry-Organic',
    'Chemistry-Inorganic',
    'Chemistry-Physical',
    'Physics-Mechanics 1',
    'Physics-Mechanics 2',
    'Physics-Waves and Thermodynamics',
    'Physics-Optics and Modern Physics',
    'Physics-Electrostatics and Current Electricity',
    'Physics-Magnetism and Electromagnetic Induction',
  ],
}

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext)

  const [showFilter, setShowFilter] = useState(false)
  const [filterProducts, setFilterProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState('relevant')

  const toggleCategory = (e) => {
    const value = e.target.value
    if (category.includes(value)) {
      setCategory((prev) => prev.filter((item) => item !== value))
      setSubCategory((prev) =>
        prev.filter((sc) => !subCategoriesMap[value].includes(sc)),
      )
    } else {
      setCategory((prev) => [...prev, value])
    }
  }

  const toggleSubCategory = (e) => {
    const value = e.target.value
    if (subCategory.includes(value)) {
      setSubCategory((prev) => prev.filter((item) => item !== value))
    } else {
      setSubCategory((prev) => [...prev, value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice()

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      )
    }
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category),
      )
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory),
      )
    }

    setFilterProducts(productsCopy)
  }

  const sortProduct = () => {
    let fpCopy = filterProducts.slice()

    switch (sortType) {
      case 'low-high':
        fpCopy.sort((a, b) => a.price - b.price)
        setFilterProducts(fpCopy)
        break
      case 'high-low':
        fpCopy.sort((a, b) => b.price - a.price)
        setFilterProducts(fpCopy)
        break
      case 'a-z':
        fpCopy.sort((a, b) => a.name.localeCompare(b.name))
        setFilterProducts(fpCopy)
        break
      case 'z-a':
        fpCopy.sort((a, b) => b.name.localeCompare(a.name))
        setFilterProducts(fpCopy)
        break
      default:
        applyFilter()
        break
    }
  }

  useEffect(() => {
    applyFilter()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, subCategory, search, showSearch, products])

  useEffect(() => {
    sortProduct()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortType, filterProducts.length])

  return (
    <div className="relative">
      {/* prestige bg accents */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-20 h-64 w-64 rounded-full bg-gradient-to-tr from-yellow-800/10 via-amber-700/10 to-orange-600/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-gradient-to-tr from-orange-700/10 via-amber-700/10 to-yellow-700/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-4 border-t pt-10 sm:flex-row sm:gap-10">
          {/* Filter Options */}
          <div className="min-w-60">
            <p
              onClick={() => setShowFilter(!showFilter)}
              className="my-2 flex cursor-pointer select-none items-center gap-2 text-xl"
            >
              <span className="bg-gradient-to-r from-yellow-800 via-amber-700 to-orange-700 bg-clip-text font-semibold text-transparent">
                FILTERS
              </span>
              <img
                className={`h-3 transition-transform sm:hidden ${
                  showFilter ? 'rotate-90' : ''
                }`}
                src={assets.dropdown_icon}
                alt=""
              />
            </p>

            {/* Category Filter */}
            <div
              className={`mt-4 rounded-2xl border border-amber-200/70 bg-white/90 px-4 py-5 shadow-sm backdrop-blur ${
                showFilter ? '' : 'hidden'
              } sm:block`}
            >
              <div className="mb-4 flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-yellow-700 via-amber-700 to-orange-700 text-[10px] font-bold text-white shadow-sm">
                  ✓
                </span>
                <p className="text-sm font-extrabold tracking-wide text-amber-900">
                  CATEGORIES
                </p>
              </div>

              <div className="grid gap-3">
                {['UPSC', 'SSC', 'JEE'].map((cat) => (
                  <label key={cat} className="group relative block cursor-pointer">
                    <input
                      type="checkbox"
                      value={cat}
                      onChange={toggleCategory}
                      checked={category.includes(cat)}
                      className="peer sr-only"
                    />
                    <div
                      className="
                        flex items-center gap-3 rounded-xl border px-4 py-3 transition-all
                        border-amber-200/70 bg-white hover:shadow-md
                        peer-checked:border-amber-500 peer-checked:bg-amber-50
                      "
                    >
                      <span
                        className="
                          h-4 w-4 rounded-md border border-amber-300 bg-white shadow-sm
                          peer-checked:border-transparent peer-checked:bg-gradient-to-br
                          peer-checked:from-yellow-700 peer-checked:via-amber-700 peer-checked:to-orange-700
                        "
                      />
                      <span className="text-sm font-semibold text-gray-900 peer-checked:text-amber-900">
                        {cat}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* SubCategory Filter */}
            {category.length > 0 && (
              <div
                className={`my-5 rounded-2xl border border-amber-200/70 bg-white/90 px-4 py-5 shadow-sm backdrop-blur ${
                  showFilter ? '' : 'hidden'
                } sm:block`}
              >
                <div className="mb-4 flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-yellow-700 via-amber-700 to-orange-700 text-[10px] font-bold text-white shadow-sm">
                    #
                  </span>
                  <p className="text-sm font-extrabold tracking-wide text-amber-900">
                    SUB-CATEGORIES
                  </p>
                </div>

                <div className="space-y-5">
                  {category.includes('UPSC') && (
                    <div>
                      <p className="mb-2 text-xs font-bold tracking-wide text-gray-500">
                        UPSC
                      </p>
                      <div className="grid gap-2">
                        {subCategoriesMap.UPSC.map((sc) => (
                          <label
                            key={sc}
                            className="group relative block cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              value={sc}
                              onChange={toggleSubCategory}
                              checked={subCategory.includes(sc)}
                              className="peer sr-only"
                            />
                            <div
                              className="
                                flex items-center gap-3 rounded-xl border px-4 py-2.5 transition-all
                                border-amber-200/70 bg-white hover:shadow-sm
                                peer-checked:border-amber-500 peer-checked:bg-amber-50
                              "
                            >
                              <span
                                className="
                                  h-3.5 w-3.5 rounded-sm border border-amber-300 bg-white shadow-sm
                                  peer-checked:border-transparent peer-checked:bg-gradient-to-br
                                  peer-checked:from-yellow-700 peer-checked:via-amber-700 peer-checked:to-orange-700
                                "
                              />
                              <span className="text-[13px] font-medium text-gray-800 peer-checked:text-amber-900">
                                {sc}
                              </span>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}

                  {category.includes('SSC') && (
                    <div>
                      <p className="mb-2 text-xs font-bold tracking-wide text-gray-500">
                        SSC
                      </p>
                      <div className="grid gap-2">
                        {subCategoriesMap.SSC.map((sc) => (
                          <label
                            key={sc}
                            className="group relative block cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              value={sc}
                              onChange={toggleSubCategory}
                              checked={subCategory.includes(sc)}
                              className="peer sr-only"
                            />
                            <div
                              className="
                                flex items-center gap-3 rounded-xl border px-4 py-2.5 transition-all
                                border-amber-200/70 bg-white hover:shadow-sm
                                peer-checked:border-amber-500 peer-checked:bg-amber-50
                              "
                            >
                              <span
                                className="
                                  h-3.5 w-3.5 rounded-sm border border-amber-300 bg-white shadow-sm
                                  peer-checked:border-transparent peer-checked:bg-gradient-to-br
                                  peer-checked:from-yellow-700 peer-checked:via-amber-700 peer-checked:to-orange-700
                                "
                              />
                              <span className="text-[13px] font-medium text-gray-800 peer-checked:text-amber-900">
                                {sc}
                              </span>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}

                  {category.includes('JEE') && (
                    <div>
                      <p className="mb-2 text-xs font-bold tracking-wide text-gray-500">
                        JEE
                      </p>
                      <div className="grid gap-2">
                        {subCategoriesMap.JEE.map((sc) => (
                          <label
                            key={sc}
                            className="group relative block cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              value={sc}
                              onChange={toggleSubCategory}
                              checked={subCategory.includes(sc)}
                              className="peer sr-only"
                            />
                            <div
                              className="
                                flex items-center gap-3 rounded-xl border px-4 py-2.5 transition-all
                                border-amber-200/70 bg-white hover:shadow-sm
                                peer-checked:border-amber-500 peer-checked:bg-amber-50
                              "
                            >
                              <span
                                className="
                                  h-3.5 w-3.5 rounded-sm border border-amber-300 bg-white shadow-sm
                                  peer-checked:border-transparent peer-checked:bg-gradient-to-br
                                  peer-checked:from-yellow-700 peer-checked:via-amber-700 peer-checked:to-orange-700
                                "
                              />
                              <span className="text-[13px] font-medium text-gray-800 peer-checked:text-amber-900">
                                {sc}
                              </span>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Right Side */}
          <div className="flex-1">
            <div className="mb-5 flex items-center justify-between">
              <div className="text-base sm:text-2xl">
                <Title text1={'ALL'} text2={'NOTES'} />
              </div>

              {/* Product Sort */}
              <select
                onChange={(e) => setSortType(e.target.value)}
                value={sortType}
                className="rounded-lg border border-amber-200 bg-white px-3 py-2 text-sm outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200"
              >
                <option value="relevant">Sort by: Relevant</option>
                <option value="low-high">Sort by: Low to High</option>
                <option value="high-low">Sort by: High to Low</option>
                <option value="a-z">Sort by: A-Z</option>
                <option value="z-a">Sort by: Z-A</option>
              </select>
            </div>

            {/* Map Products */}
            <div className="grid grid-cols-2 gap-4 gap-y-6 md:grid-cols-3 lg:grid-cols-4">
              {filterProducts.map((item, index) => (
                <ProductItem
                  key={index}
                  name={item.name}
                  id={item._id}
                  price={item.price}
                  image={item.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection
