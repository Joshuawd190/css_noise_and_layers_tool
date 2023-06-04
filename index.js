const noiseSelectEL = document.querySelector('#noise-type');
const noiseVariantEl = document.querySelector('#index');
const noiseImgEl = document.querySelector('#noise-img');
const overlayEl = document.querySelector('#overlay');
const colorPickerEl = document.querySelector('#colorpicker');
const blendSelectEl = document.querySelector('#blendmode');

document.querySelector('#noise-group').addEventListener('input', updateNoise);
document
  .querySelector('#overlay-group')
  .addEventListener('input', updateOverlay);

noiseSelectEL.addEventListener('input', () => {
  noiseSelectEL.value === 'Perlin'
    ? noiseVariantEl.setAttribute('max', '24')
    : noiseVariantEl.setAttribute('max', '14');
  noiseVariantEl.value = 1;
});

function updateNoise() {
  noiseImgEl.setAttribute(
    'src',
    `./assets/NoiseTextures512x512/${noiseSelectEL.value}/${noiseSelectEL.value} ${noiseVariantEl.value} - 512x512.png`
  );
}

function updateOverlay() {
  blendSelectEl.value === 'none'
    ? (overlayEl.style.display = 'none')
    : overlayEl.setAttribute('style', `mix-blend-mode: ${blendSelectEl.value}`);
  overlayEl.style.background = colorPickerEl.value;
}

/*QOL & todo
Consolidate and divide form handling
Gradient functionality
Animation handling
Preview images for Noise and color
Tidy up layout and appearance
*/
