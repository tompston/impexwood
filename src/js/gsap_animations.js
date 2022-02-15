// gsap.registerPlugin(ScrollTrigger)

// // top animations
// gsap.from(".top_content", {
//   duration: 2,
//   opacity: 0,
//   y: 90,
//   ease: "power4.out",
//   delay: 0.3,
// })
// gsap.from(".section__2_img", {
//   duration: 2,
//   opacity: 0,
//   y: 70,
//   ease: "power4.out",
//   delay: 0.5,
// })

// // history_section
// gsap.from(".history_section", {
//   duration: 1.3,
//   opacity: 0,
//   y: 70,
//   delay: 0.4,
//   ease: "power4.out",
//   scrollTrigger: {
//     trigger: ".history_section",
//   },
// })

// const products_grids = [
//   // [trigger, text section class, image section class]
//   [".products__1", ".products__1_0", ".products__1_1"],
//   [".products__2", ".products__2_0", ".products__2_1"],
//   [".products__3", ".products__3_0", ".products__3_1"],
// ]

// for (let i = 0; i < products_grids.length; i++) {
//   let parent = products_grids[i][0]
//   let left = products_grids[i][1]
//   let right = products_grids[i][2]

//   gsap.from(left, {
//     duration: 1.3,
//     opacity: 0,
//     y: 70,
//     delay: 0.31,
//     ease: "power4.out",
//     scrollTrigger: {
//       trigger: parent,
//     },
//   })
//   gsap.from(right, {
//     duration: 1.6,
//     opacity: 0,
//     y: 70,
//     delay: 0.41,
//     ease: "power4.out",
//     scrollTrigger: {
//       trigger: parent,
//     },
//   })
// }

// // Loop over gallery images based on the  index and add custom
// // gsap animations to each class
// let numberOfImgInGallery = 10

// for (let i = 0; i < numberOfImgInGallery + 1; i++) {
//   let img_class = `.gallery_img_${i}`

//   gsap.from(img_class, {
//     duration: 1.3,
//     opacity: 0,
//     y: 70,
//     delay: i / 6.5,
//     ease: "power4.out",
//     scrollTrigger: {
//       trigger: ".gallery_grid",
//     },
//   })
// }
