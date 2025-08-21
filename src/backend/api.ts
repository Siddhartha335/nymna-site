export const fetchAllBlogs  = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs`);
    return res.json();
}

export const fetchCareers = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/careers`);
  return res.json();
}