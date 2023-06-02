const noiseSelectEL = document.querySelector('#noise-type');
const noiseVariantEl = document.querySelector('#index');
const noiseSubmitEl = document.querySelector('#noise-submit');
const noiseImgEl = document.querySelector('#noise-img');
const overlayEl = document.querySelector('#overlay');
const colorPickerEl = document.querySelector('#colorpicker');
const blendSelectEl = document.querySelector('#blendmode');

noiseSelectEL.addEventListener('input', () => {
  noiseSelectEL.value === 'Perlin'
    ? noiseVariantEl.setAttribute('max', '24')
    : noiseVariantEl.setAttribute('max', '14');
});

noiseSubmitEl.addEventListener('click', (e) => {
  e.preventDefault();
  updateNoise();
  updateOverlay();
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
