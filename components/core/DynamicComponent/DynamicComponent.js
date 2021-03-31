import { 
  ArticleHeader,
  ArticleList,
  Breadcrumb, 
  Calculator, 
  Clients, 
  Hero, 
  ImageTextColumn, 
  IntegrateHero, 
  ListApps, 
  Migrate, 
  Newsletter, 
  PageHero, 
  Platform, 
  ProjectHeader, 
  ProjectList,
  RichText, 
  ServiceHeader, 
  ServiceList, 
  SplitSection 
} from "@components/ui"
import { Placeholder } from '@components/core'

const Components = {
  'article_header': ArticleHeader,
  'article_list': ArticleList,
  'breadcrumb': Breadcrumb,
  'calculator': Calculator,
  'clients': Clients,
  'hero': Hero,
  'image_text_column': ImageTextColumn,
  'integrate_hero': IntegrateHero,
  'list_apps': ListApps,
  'migrate': Migrate,
  'newsletter': Newsletter,
  'page_hero': PageHero,
  'platform': Platform,
  'project_header': ProjectHeader,
  'project_list': ProjectList,
  'rich_text': RichText,
  'service_header': ServiceHeader,
  'service_list': ServiceList,
  'split_video_section': SplitSection,  
}

const DynamicComponent = ({blok, tag_list}) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component]
    return <Component blok={blok} tag_list={tag_list} />
  }
  if (blok.component === 'global_reference') {
    return null
  }
  return <Placeholder componentName={blok.component}/>
}

export default DynamicComponent