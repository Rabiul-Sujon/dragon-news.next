import Image from "next/image";

async function getCategories() {
  const res = await fetch ('https://openapi.programming-hero.com/api/news/categories')
  const data = await res.json();
  return data.data;
}

export default async function Home() {
  const categories = await getCategories()
  return (
  <div className="container mx-auto grid grid-cols-12 gap-4 my-[60px]">

    <div className="col-span-3">
      <h2 className=" text-lg font-bold">All category</h2>

<ul className="flex flex-col gap-4 mt-4">

  { categories.news_category.map((category)=>{
    return <li key={category.category_id} className="bg-slate-100 p-2 rounded-md font-bold text-center text-md">{category.category_name}</li>
  })
}

</ul>

    </div>

    <div className="bg-purple-200 col-span-6">
      all News
    </div>

    <div className="bg-blue-200 col-span-3">
      Social Icons
    </div>

  </div>
  
  );
}
