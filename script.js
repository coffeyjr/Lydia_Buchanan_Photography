// For this tutorial on YT:
// https://youtu.be/V-CBdlfCPic

const primaryHeader = document.querySelector(".primary--nav");
const scrollWatcher = document.createElement("div");

scrollWatcher.setAttribute("data-scroll-watcher", "");
primaryHeader.before(scrollWatcher);

const navObserver = new IntersectionObserver(
  (entries) => {
    primaryHeader.classList.toggle("sticking", !entries[0].isIntersecting);
  },
  { rootMargin: "20px 0px 0px 0px" }
);

navObserver.observe(scrollWatcher);