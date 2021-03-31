import { DynamicComponent } from '@components/core'
import SbEditable from 'storyblok-react'

const Page = ({ content, tag_list }) => {
  return (
    content.content ?
      <SbEditable content={content}>
        {content.content.map((blok) => (
          <DynamicComponent blok={blok} tag_list={tag_list} key={blok._uid} />
        ))}
      </SbEditable>
    : null
  )
}

export default Page