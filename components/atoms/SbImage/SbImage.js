import 'lazysizes'
import 'lazysizes/plugins/attrchange/ls.attrchange'

import { css } from 'styled-components'
import { getResizedImage, getImageWidth, getImageHeight } from "helpers"

const deviceSizes = [
  `5000w`,
  `4500w`,
  `4000w`,
  `3500w`,
  `3000w`,
  `2500w`,
  `2000w`,
  `1800w`,
  `1600w`,
  `1400w`,
  `1200w`,
  `1000w`,
  `800w`,
  `600w`,
  `400w`,
  `200w`,
]
const imageSizes = [
  5000,
  4500,
  4000,
  3500,
  3000,
  2500,
  2000,
  1800,
  1600,
  1400,
  1200,
  1000,
  800,
  600,
  400,
  200,
]
const SbImage = ({
  image,
  progressive = true,
  stretchWidth = false,
  additionalClasses = false,
  inlineStyle = false,
  imageCrop = false,
  maxHeight = false,
  calculateAspectRatio = true,
  quality = 75,
  layout = 'responsive',
  objectFit = 'cover',
  objectPosition = 'center',
}) => {
  const {
    filename,
    alt,
  } = image

  const width = getImageWidth({
    filename: filename
  })

  const height = getImageHeight({
    filename: filename
  })

  const srcset = progressive ?
    `${imageSizes.map((imageSize, index) =>      
      `${getResizedImage({
        filename: filename,
        width: imageSize,
        format: 'webp',
        quality: quality,
      })} ${deviceSizes[index]}`
    )}`
  :
    `${imageSizes.map((imageSize, index) =>      
      `${getResizedImage({
        filename: filename,
        width: imageSize,
        quality: quality,
      })} ${deviceSizes[index]}`
    )}`

  const heightStyle = imageCrop ?
    `max-height: ${maxHeight}px;`
  : objectFit === 'contain' && maxHeight ? `
    max-height: ${maxHeight}px;
    width: calc(${width} / ${height } * ${maxHeight}px);`
  : ''

  // Low quality image loads first
  const lowQualityImage = getResizedImage({
    filename: filename,
    width: 50,
    quality: quality,
    format: progressive ? 'webp' : false
  })

  return <div
    className="imageElement"
    data-calculate-aspect-ratio={calculateAspectRatio}
    css={css`
      ${layout === 'fill' ? `
        display: block;
        overflow: hidden;
        position: absolute;
        inset: 0px;
        box-sizing: border-box;
        margin: 0px;
      `
      : `
        width: 100%;
        height: 100%;
        overflow: hidden;
      `}
      ${stretchWidth === false ? `
        max-width: ${width}px;
      ` :''}
      ${inlineStyle ? inlineStyle :''}
      ${heightStyle ? heightStyle :''}
      img {
        ${layout === 'fill' ? `
          visibility: inherit;
          position: absolute;
          inset: 0px;
          box-sizing: border-box;
          padding: 0px;
          border: none;
          margin: auto;
          display: block;
          width: 100%;
          height: 100%;
          object-fit: ${objectFit};
          object-position: ${objectPosition};
        ` : `
          width: 100%;
          height: auto;
        `}
    
      }
      .transition--blurUp {
        filter: blur(5px);
        transition: filter 3000ms 500ms;
        &.lazyloaded {
          filter: blur(0);
        }
      }
    `}
  >              
    <img  alt={alt}
          className={`lazyload blur-up transition--blurUp ${additionalClasses}`}
          src={lowQualityImage}
          data-src={getResizedImage({
            filename: filename,
            width: 1600,
            format: 'webp'
          })}
          data-sizes="auto"
          data-srcset={srcset}
          data-aspectratio={`${width}/${height}`}
          height={height}
          width={width}
          srcSet={`data:image/svg+xml;utf8,<svg%20xmlns='http://www.w3.org/2000/svg'%20width='${width}'%20height='${height}'></svg>`}
    />
  </div>
}

export default SbImage