import BlogCard from "../components/homepage/blogs/blog-card";
import { placeholderBlogs } from "../data/blogs";

export default function Page() {
  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            All Blog
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {placeholderBlogs.map(
          (blog, i) => blog?.cover_image && <BlogCard blog={blog} key={i} />
        )}
      </div>
    </div>
  );
}
