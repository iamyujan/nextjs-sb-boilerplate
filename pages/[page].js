import React from 'react'
import StoryblokService from '@utils/storyblok-service'

import { Layout, Page } from "@components/core"

export default class extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      story: props.res.data.story
    }
  }

  static async getInitialProps({ asPath, query }) {
    StoryblokService.setQuery(query)
    let res = await StoryblokService.get(`cdn/stories/${asPath}`, {
      'resolve_relations': `project_list.projects`
    })

    return {
      res
    }
  }

  componentDidMount() {
    StoryblokService.initEditor(this)
  }

  render() {
    const contentOfStory = this.state.story.content

    return <Layout metadata={contentOfStory.metadata}>
      <Page content={contentOfStory} />
    </Layout>
  }
}