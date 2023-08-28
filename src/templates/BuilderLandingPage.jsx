import { builder, BuilderComponent } from '@builder.io/react'
import { graphql } from 'gatsby'
import '@builder.io/widgets';

builder.init('746be61c2558434bb2a8fa489a36b0b1')

const BuilderLandingPageComponent = (props) => {
    const content = props.data?.allBuilderModels.onePage?.content;
    const serverData = useServerData();
  
    return <BuilderComponent
      content={serverData.page}
      model="page"
      prerender={true}
      static={true} />
  }
  
  export async function getServerData() {
      try {
          const page =
              (await builder
                  .get('page', {
                      userAttributes: {
                          urlPath: '/',
                      },
                  })
                  .toPromise()) || null
  
          return {
              props: {
                  page,
              },
          }
      } catch (error) {
          console.error("Error fetching data:", error);
          return {
              props: {
                  // Provide an empty object or handle the error as needed
                  page: {}
              },
          }
      }
  }
  

export default BuilderLandingPageComponent;      

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