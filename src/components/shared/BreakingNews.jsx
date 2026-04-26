import React from 'react'
import Marquee from 'react-fast-marquee'

const News = [
  { 
    id: 1, 
    title: "Next.js 15 Announces Stable Release with Enhanced Turbopack Support" 
  },

  { 
    id: 2, 
    title: "Tailwind CSS v4: The Future of Utility-First Styling is Here" 
  },

  { 
    id: 3, 
    title: "Global Tech Summit 2026: Focus Shifting Toward Sustainable AI" 
  },

  { 
    id: 4, 
    title: "New Study Shows Remote Work Increases Developer Productivity by 20%" 
  },

  { 
    id: 5, 
    title: "The Rise of Bento Grids: Why Minimalist UI is Taking Over the Web" 
  },

  { 
    id: 6, 
    title: "Understanding Server Actions: A Guide to Secure Data Handling" 
  }
];

const BreakingNews = () => {
  return (
    <div className=' flex justify-between items-center bg-gray-200 gap-4 py-4 px-2 container mx-auto'>
        <button className='btn bg-red-500 text-white'>Latest News</button>
        
        {/* react marquee fns */}
        <Marquee pauseOnHover={true} speed={50}>
            {News.map((n) =>{ 
                return <span key={n.id}>{n.title}</span>
            })}
        </Marquee>

    </div>
  )
}

export default BreakingNews