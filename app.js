const revealTargets = document.querySelectorAll(
  ".hero, .score-strip, .content-grid, .football-showcase, .social-pulse, .document-hub"
);

revealTargets.forEach((element) => {
  element.classList.add("reveal");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

revealTargets.forEach((element) => {
  observer.observe(element);
});

const twitterScript = document.createElement("script");
twitterScript.async = true;
twitterScript.src = "https://platform.twitter.com/widgets.js";
twitterScript.charset = "utf-8";
document.body.appendChild(twitterScript);
