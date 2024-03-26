export const initIntersectionObserver = (time, selector) => {
  const items = document.querySelectorAll('[data-item]');
  console.log(items);
  const options = {
    threshold: time
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(selector);
      }
    });
  }, options);

  items.forEach((item) => {
    observer.observe(item);
  });
};
