import React from 'react'

export default function GallerySection() {
    return (
        <div className='grid grid-cols-3 gap-2 md:grid-cols-2'>
            {[
                "/gallery/001.jpg",
                "/gallery/002.jpg",
                "/gallery/003.jpg",
                "/gallery/005.jpg",
                "/gallery/006.jpg",
                "/gallery/007.jpg",
                "/gallery/008.jpg",
                "/gallery/009.jpg",
                "/gallery/010.jpg",
            ].map((x, i) => (
                <img key={i}
                    src={x}
                    alt="gallery image"
                    className=' w-full h-[320px] object-cover border-rad-4 md:h-[170px]'
                    loading='lazy' />
            ))}
        </div>
    )
}
