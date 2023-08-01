import * as React from 'react';
import { graphql } from 'gatsby';
import { builder, BuilderComponent } from '@builder.io/gatsby';

// Initialize the Builder SDK with your organization's API Key
// Find the API Key on: https://builder.io/account/settings
builder.init('746be61c2558434bb2a8fa489a36b0b1')

// Your template populates your Gatsby pages with your Builder page content.
function PageTemplate({ data }) {
  const models = data?.allBuilderModels;
  const page = models.page?.content;
  if (!Builder.isEditing && !Builder.isPreviewing && !props.builderContent) {
    return <Your404Page />
 }
  return <BuilderComponent name="page" model="page" content={props.builderContent} />;
}

// pageQuery is a GraphQL query that 
// fetches each page's content from Builder. 
// Your content is rendered within the 
// PageTemplate using BuilderComponent, provided by Builder's SDK.
export const pageQuery = graphql`
  query ($path: String) {
    allBuilderModels {
      page(target: { urlPath: $path }, limit: 1, options: { cachebust: true }) {
        content
      }
    }
  }
`;
export default PageTemplate;
