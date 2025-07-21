import Image from "next/image"

const card = () => {
  return (
        <div className="rounded-md border border-gray-200 bg-white p-6 shadow-md">
            <Image
                src="/blog-image-1.jpg"
                alt="Blog Post 1"
                width={336}
                height={240}
                className="rounded-md mb-8"
            />
            <p>Design</p>
            <h3 className="text-lg font-semibold">UX Review Presentations</h3>
            <p className="mt-2 text-sm text-gray-600 mb-16">
                How do you create compelling presentations that wow your colleagues and impress your managers?
            </p>
            <div className="flex gap-3 items-center">
                <Image 
                src="/jenny.jpg"
                alt="Author"
                width={40}
                height={40}
                className="rounded-full"
                />
                <div className="text-xs">
                <h2>Jenny Wilson</h2>
                <p>20 Jan 2022</p>
                </div>
            </div>
        </div>  
  )
}

export default card