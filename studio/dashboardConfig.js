export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f35606552239d00cf3c9f51',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-sodiqf9n',
                  apiId: '8d60d371-b71a-4d69-9f85-9419b10c2024'
                },
                {
                  buildHookId: '5f3560668b100200b4842408',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-qi8s9eyu',
                  apiId: 'bae06917-5151-498a-a6c9-e45e6c240ce9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/huuugh18/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-qi8s9eyu.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
