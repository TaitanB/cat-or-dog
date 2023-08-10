export const handleScrollUp = () => {
  const target = document.getElementById('Up');
  if (target) {
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth',
    });
  }
};
