const {
    gsap: { set, timeline } } =
  window;
  
  const shared = {
    duration: 0.075 };
  
  
  
  
  const CLICK_RATE = 0.65;

  
  
  set('#original-code-block', { x: 25, y: 15, scale: 0 });
  const CODEPEN = document.querySelector('.codepen');
  const TL = timeline({
    yoyo: true,
    repeat: -1,
    onStart: () => {
      // We want to fire a code block here!
      const block = document.querySelector('#original-code-block').cloneNode(true);
      block.removeAttribute('id');
      CODEPEN.appendChild(block);
      set(block, {
        transformOrigin: '50% 50%',
        scale: 0,
        x: 30,
        '--hue': 'random(0, 360)',
        y: 'random(15, 30)',
        display: 'block' });
  
      timeline({
        onComplete: () => block.remove(),
         }).
  
      to(block, {
        x: 'random(-35, -5)',
        y: 'random(-30, 30)',
        scale: 'random(0.75, 1.5)',
        rotate: 'random(-15, 15)',
        duration: 'random(0.25, 1.25)' }).
  
      to(
      block,
      {
        opacity: 0 },
  
      '-=0.1');
  
    } }).
  
    
    
  to('.bear__head', {
    yPercent: 3,
    ...shared }).
  
  to(
  '.bear__bandana-tie',
  {
    transformOrigin: '0 0',
    rotate: -30,
    ...shared },
  
  0).
  
  to(
  '.bear__keyboard-arm',
  {
    transformOrigin: '85% 20%',
    rotate: 4,
    ...shared },
  
  0).
  
  to(
  '.ground',
  {
    '--alpha': 0.25,
    ...shared },
  
  0).
  
  to(
  '.bear__tank',
  {
    transformOrigin: '50% 100%',
    scaleY: 0.99,
    ...shared },
  
  0);
