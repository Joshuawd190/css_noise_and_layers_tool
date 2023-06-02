const noiseSelectEL = document.querySelector('#noise-type');
const noiseVariantEl = document.querySelector('#index');
const noiseSubmitEl = document.querySelector('#noise-submit');
const noiseImgEl = document.querySelector('#noise-img');

noiseSelectEL.addEventListener('input', () => {
  noiseSelectEL.value === 'Perlin'
    ? noiseVariantEl.setAttribute('max', '24')
    : noiseVariantEl.setAttribute('max', '14');
});

noiseSubmitEl.addEventListener('click', (e) => {
  e.preventDefault;
  updateNoise();
});

// const noiseDataObj = {
//   default: 14,
//   Perlin: 24,
// };

// `${noiseType} ${index} - 512x512.png`
function updateNoise() {
  noiseImgEl.setAttribute(
    'src',
    `./assets/NoiseTextures512x512/${noiseSelectEL.value}/${noiseSelectEL.value} ${noiseVariantEl.value} - 512x512.png`
  );
}
