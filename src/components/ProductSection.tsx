
export default function ProductSection() {
    return (
        <div className="grid grid-cols-4 gap-2 md:grid-cols-2 sm:grid-cols-1">
            <ProductCard
                name="Finger-jointed glued wood"
                img_src="/img/00.jpg"
                content={
                    <div>
                        <div>
                            We produce 7,000m3 finger jointed and glued components per year. The dimensions and quality class of the material is produced according to the customer's needs.
                        </div>

                        <div className="mt-3">
                            Use of finger-jointed glued wood in
                        </div>
                        <ul>
                            <li>Window and door components</li>
                            <li>Structural design materials</li>
                            <li>Slats & Tiles</li>
                        </ul>
                    </div>
                } />
            <ProductCard
                name="Pellets"
                img_src="/img/01.jpg"
                content={
                    <div>
                        <div>
                            Premium quality wood pellets as an environmentally friendly biofuel,
                            which has a significantly cheaper price in comparison
                            to other types of heating.
                        </div>
                        <div className="mt-2">
                            We offer 6 and 8mm diameter pellets either by
                            15kg bags or big bag packing, which we
                            produce from clean sawdust with the
                            lowest ash content possible (out of our own raw materials).
                        </div>
                    </div>
                } />

            <ProductCard
                name="Pallet wood cut to lengths"
                img_src="/img/03.jpg"
                content={
                    <div className="flex flex-col gap-2">
                        Made out of first grade softwood boards.
                        We offer a variety of sizes and dimensions for
                        pallet industry planed 4 sides ( cut to lengths of
                        EUR pallet sizes and many others )

                        <div>
                            Our main size are within a range of
                            <ul>
                                {[
                                    "22x98x800/1000/1200",
                                    "22x145x800/1200",
                                    "16x100x800/1000/1200",
                                    "16x75x800/1000/1200/1300",
                                ].map((x, i) => (
                                    <li key={i} className="mb-1.5">{x}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                } />
            <ProductCard
                name="Finger jointed knotfree pine and spruce boards"
                img_src="/img/02.jpg"
                content={
                    <div className="flex flex-col gap-2">
                        <ul>
                            {[
                                "32x75/100/125/150/200mm",
                                "25x75/100/125/150mm",
                                "19x75/100/125/150mm",
                                "16x75/100/125mm",
                                "22x100",
                            ].map((x, i) => (
                                <li key={i} className="mb-1.5">{x}</li>
                            ))}
                        </ul>
                    </div>
                } />
        </div>
    )
}

interface ProductProps {
    name: string
    img_src: string
    content: JSX.Element
}

function ProductCard({ name, img_src, content }: ProductProps) {
    return (
        <div className="border-1-3 border-rad-3">
            <div>
                <img src={img_src} alt="product image" srcSet="" className="object-cover h-[200px] w-full"
                    loading="lazy"
                    height={200}
                    style={{
                        borderRadius: "4px 4px 0px 0px"
                    }} />
            </div>
            <div className="p-4">
                <div className="min-h-[50px]"
                ><h6 className="fw-600 leading-none mb-2">{name}</h6></div>
                <div className="opacity-70 fs-9">{content}</div>
            </div>
        </div>
    )
}

// const product_dims: string[] = [
//     "32x75/100/125/150/200mm",
//     "25x75/100/125/150mm",
//     "19x75/100/125/150mm",
//     "16x75/100/125mm",
//     "22x100",
// ]