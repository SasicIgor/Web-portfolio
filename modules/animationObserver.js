export const animationObserver = (selector, animationClass, threshold = 0.5) => {
  const sectionElements = document.querySelectorAll(selector);
  const observer = new IntersectionObserver(
    (sections) => {
      sections.forEach((section) => {
        if (section.isIntersecting) {
          section.target.classList.add(animationClass);
          observer.unobserve(section.target);
        }
      });
    },
    { threshold: threshold }
  );
  sectionElements.forEach((item) => observer.observe(item));
};
