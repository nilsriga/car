import { builder, BuilderComponent } from '@builder.io/react'
import { graphql } from 'gatsby'
import '@builder.io/widgets';

builder.init('746be61c2558434bb2a8fa489a36b0b1')

const MyComponent = (props) => {
  const content = props.data?.allBuilderModels.onePage?.content;

  return <BuilderComponent
    content={content}
    model="page" />
}

export default MyComponent;      

export const query = graphql`
  query($path: String!) {
    allBuilderModels {
      onePage(
        target: { urlPath: $path }
        options: { cachebust: true }
      ) { content }
    }
  }
`