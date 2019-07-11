export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d27ae731d9ca5ee7d3325f7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-pur9u7t8',
                  apiId: 'f7a00902-9046-47d9-8d48-692180381d70'
                },
                {
                  buildHookId: '5d27ae73ec69fd0b16c0bdb9',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-dtyvifh5',
                  apiId: 'c0294bf6-cef9-401e-a56d-77d5754bbc98'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cusfrank/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-dtyvifh5.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
