// let slide = new Siema({
//   selector: ".slider",
//   duration: 200,
//   easing: "ease-out",
//   perPage: 1,
//   startIndex: 0,
//   draggable: true,
//   multipleDrag: true,
//   threshold: 20,
//   loop: true,
//   onInit: () => {},
//   onChange: () => {},
// });

// function AutoPlay(time = 2000) {
//   setInterval(function () {
//     slide.next();
//   }, time);
// }

// document.getElementById("next").addEventListener("click", () => slide.next());
// document.getElementById("prev").addEventListener("click", () => slide.prev());

// let DOTS = document.getElementById("navigation_dots");
// function slideDot() {
//   const count = slide.innerElements.length;
//   DOTS.innerHTML = "";

//   const updateDots = (index) => {
//     document.querySelectorAll(".dot").forEach((dot, i) =>
//       dot.classList.toggle("active", i === index)
//     );
//   };

//   // Create dots
//   for (let i = 0; i < count; i++) {
//     const dot = document.createElement("div");
//     dot.className = "dot";
//     dot.dataset.index = i;
//     dot.onclick = () => slide.goTo(i);
//     DOTS.appendChild(dot);
//   }

//   // Patch slide methods to auto-update dots
//   ["next", "prev", "goTo"].forEach((method) => {
//     const original = slide[method].bind(slide);
//     slide[method] = (...args) => {
//       original(...args);
//       setTimeout(() => updateDots(slide.currentSlide), 0);
//     };
//   });

//   updateDots(slide.currentSlide);
// }

// slideDot()
