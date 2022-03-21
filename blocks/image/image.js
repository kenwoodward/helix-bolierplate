/**
 * loads and decorates the image and caption
 * @param {Element} block The image block element
 */
export default function decorate(block) {
  // turn links into buttons
  block.querySelectorAll(':scope > div > div:nth-child(2)').forEach((div) => {
    div.classList.add('caption');
  });
}
