/**
 * Smooth scrolling utility for anchor links with sticky header offset
 */

export const smoothScrollTo = (targetId: string, offset = 80) => {
  const cleanId = targetId.startsWith('#') ? targetId.slice(1) : targetId;
  const element = document.getElementById(cleanId);

  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
};

export const setupAnchorSmoothScroll = () => {
  const handleAnchorClick = (e: MouseEvent) => {
    const target = (e.target as HTMLElement).closest('a');
    if (!target) return;

    const href = target.getAttribute('href');
    if (href && href.startsWith('#') && href.length > 1) {
      const element = document.querySelector(href);
      if (element) {
        e.preventDefault();
        smoothScrollTo(href);
        // update url without instant scroll jump
        window.history.pushState(null, '', href);
      }
    }
  };

  document.addEventListener('click', handleAnchorClick);
  return () => document.removeEventListener('click', handleAnchorClick);
};
