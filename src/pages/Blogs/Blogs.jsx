import React from "react";

const blogs = [
  {
    date: "June 28, 2025",
    title: "Top 10 Tips for Renting a Car on a Budget",
    image: "https://source.unsplash.com/800x600/?car,rental",
  },
  {
    date: "June 24, 2025",
    title: "The Ultimate Guide to Vacation Rentals for Families",
    image: "https://source.unsplash.com/800x600/?family,vacation",
  },
  {
    date: "June 21, 2025",
    title: "Avoiding Hidden Fees in Rental Agreements",
    image: "https://source.unsplash.com/800x600/?contract,agreement",
  },
  {
    date: "June 18, 2025",
    title: "How to Find the Best Deals on Rental Homes",
    image: "https://source.unsplash.com/800x600/?rental,house",
  },
  {
    date: "June 15, 2025",
    title: "Essential Checklist Before Renting a Property",
    image: "https://source.unsplash.com/800x600/?checklist,realestate",
  },
  {
    date: "June 12, 2025",
    title: "Short-Term vs. Long-Term Rentals: What’s Right for You?",
    image: "https://source.unsplash.com/800x600/?shortterm,longterm",
  },
  {
    date: "June 9, 2025",
    title: "Top Rental Platforms Reviewed: Airbnb, Vrbo, and More",
    image: "https://source.unsplash.com/800x600/?airbnb,vrbo",
  },
  {
    date: "June 6, 2025",
    title: "The Pros and Cons of Renting a Vacation Apartment",
    image: "https://source.unsplash.com/800x600/?apartment,vacation",
  },
  {
    date: "June 3, 2025",
    title: "Tips for Renting Out Your Home While Traveling",
    image: "https://source.unsplash.com/800x600/?home,rent",
  },
  {
    date: "May 30, 2025",
    title: "How to Stay Safe in a Rented Property Abroad",
    image: "https://source.unsplash.com/800x600/?safe,travel",
  },
  {
    date: "May 27, 2025",
    title: "Understanding Rental Insurance: Do You Need It?",
    image: "https://source.unsplash.com/800x600/?insurance,document",
  },
  {
    date: "May 24, 2025",
    title: "Pet-Friendly Rentals: What You Need to Know",
    image: "https://source.unsplash.com/800x600/?pet,friendly",
  },
  {
    date: "May 20, 2025",
    title: "A Guide to Furnished vs. Unfurnished Rentals",
    image: "https://source.unsplash.com/800x600/?furniture,interior",
  },
  {
    date: "May 16, 2025",
    title: "Common Mistakes Renters Make and How to Avoid Them",
    image: "https://source.unsplash.com/800x600/?mistake,rent",
  },
  {
    date: "May 13, 2025",
    title: "How to Negotiate Rental Prices with Landlords",
    image: "https://source.unsplash.com/800x600/?landlord,tenant",
  },
  {
    date: "May 9, 2025",
    title: "Your First Rental: A Step-by-Step Guide",
    image: "https://source.unsplash.com/800x600/?first,home",
  },
  {
    date: "May 5, 2025",
    title: "How to List Your Property for Rent Effectively",
    image: "https://source.unsplash.com/800x600/?list,property",
  },
  {
    date: "May 1, 2025",
    title: "Smart Devices to Have in Your Rental Property",
    image: "https://source.unsplash.com/800x600/?smart,home",
  },
  {
    date: "April 28, 2025",
    title: "Best Cities for Vacation Rentals in 2025",
    image: "https://source.unsplash.com/800x600/?city,travel",
  },
  {
    date: "April 24, 2025",
    title: "Renting vs. Buying: Pros and Cons You Need to Know",
    image: "https://source.unsplash.com/800x600/?buy,rent",
  },
];

export default function Blogs() {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl font-pj">
            Read our blog
          </h2>
          <p className="mt-5 font-normal text-gray-600 font-pj">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
        </div>

        <div className="grid max-w-6xl grid-cols-1 mx-auto mt-8 text-center sm:mt-16 sm:text-left sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-10">
          {blogs.map((blog, index) => (
            <div key={index} className="relative group">
              <div className="overflow-hidden rounded-lg aspect-w-16 aspect-h-9">
                <img
                  className="object-cover w-full h-full transition-all duration-300 transform group-hover:scale-110"
                  src={blog.image}
                  alt={blog.title}
                />
              </div>
              <p className="mt-6 text-sm font-normal text-gray-600 font-pj">
                {blog.date}
              </p>
              <p className="mt-4 text-xl font-bold text-gray-900 font-pj">
                {blog.title}
              </p>
              <a href="#" title="">
                <span className="absolute inset-0" aria-hidden="true"></span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
