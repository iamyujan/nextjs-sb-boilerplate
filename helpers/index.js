export const getSbLoader = ({
  src,
  width,
  height = '',
  quality
}) => {
  return `//img2.storyblok.com/${width}x${height}/smart/filters:quality(${quality || 75})${src}`
}

export const getSbFilename = ({
  filename,
}) => {
  if (typeof filename !== undefined) {
    return filename.replace(/https:\/\/a.storyblok.com/, ``)
  }
  return null
}

export const getSbImageWidth = ({
  filename,
}) => {
  if (typeof filename !== undefined) {
    return filename.replace(/^https:\/\/a.storyblok.com\/f\/[a-zA-Z0-9]{6,}\//, '').replace(/x.*/, '')
  }
  return null
}

export const getSbImageHeight = ({
  filename,
}) => {
  if (typeof filename !== undefined) {
    return filename.replace(/^https:\/\/a.storyblok.com\/f\/[a-zA-Z0-9]{6,}\//, '').replace(/[0-9]*x/, '').replace(/\/.*/, '')
  }
  return null
}

export const getSbResizedImage = ({
  filename,
  width = '',
  height = '',
  format,
  quality = 75,
}) => {
  if (typeof filename !== undefined) {
    return filename.replace('//a.storyblok.com', `//img2.storyblok.com/${width}x${height}/smart/filters:${quality ? `quality(${quality})`:''}${format ? `:format(${format})` : ''}`)
  }
  return null
}

export const getCloudinaryFilename = ({
  filename,
}) => {
  if (typeof filename !== undefined) {
    return filename.replace(/https:\/\/res.cloudinary.com\/.*\/image\/upload/, ``)
  }
  return null
}