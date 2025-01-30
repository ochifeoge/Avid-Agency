const videos = [
  { src: "./assets/showcaseVideos/If your ideal client.... main.mp4" },
  { src: "./assets/showcaseVideos/VID-20241225-WA0007.mp4" },
  { src: "./assets/showcaseVideos/CONTENT 2.mp4" },
  { src: "./assets/showcaseVideos/CONTENT 3 adj..mp4" },
  { src: "./assets/showcaseVideos/VID-20241225-WA0012.mp4" },
  { src: "./assets/showcaseVideos/Video 5.mp4" },
];

let htmlVideoContent = "";
videos.forEach((video) => {
  htmlVideoContent += `<div class="col-11 showcase-video mb-3 col-lg-4">
            <video 
            loading="lazy"
              class="img-fluid rounded-2"
              src="${video.src}"
              controls></video>
          </div>
          
          `;
});

const videoContainer = document.getElementById("js-videos");
if (videoContainer) {
  videoContainer.innerHTML = htmlVideoContent;
} else {
  console.error("Element with id js-videos not found.");
}

const logos = [
  {
    src: "./assets/logo/AUGUST LOGO.png",
  },
  {
    src: "./assets/logo/AYA OLA LOGO.png",
  },
  {
    src: "./assets/logo/INFLUENCER HQ LOGO.png",
  },
  {
    src: "./assets/logo/SLIMLYFE LOGO.png",
  },
];
let htmlLogoContent = "";
logos.forEach((logo) => {
  htmlLogoContent += `<div class="col-5 col-lg-4 col-xl-3 d-flex align-items-center">
<img loading="lazy" src="${logo.src}" class="img-fluid rounded-2" alt="" />
</div>
 `;
});
document.querySelector("#js-logos").innerHTML = htmlLogoContent;

const ads = [
  {
    src: "./assets/result4.jpg",
  },
  {
    src: "./assets/result2.jpg",
  },
  {
    src: "./assets/result3.jpg",
  },
];
let htmlAdsContent = "";
ads.forEach((ad) => {
  htmlAdsContent += `
  
      <div class="col-5 col-lg-4 col-xl-3 d-flex align-items-center position-relative ads">
           
              <img
                src="${ad.src}"
                class="img-fluid rounded-4"
                alt="" loading="lazy" />
           
             <a
              href="${ad.src}"
              target="_blank"
              rel="noopener noreferrer">
            <div class="mg-glass"><i class="fa-solid fa-magnifying-glass-plus"></i>   </div> </a>
          </div>
 `;
});
document.querySelector("#js-ads").innerHTML = htmlAdsContent;
