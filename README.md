# JG Web Stuff

## TODO

- [x] - Navbar
  - [x] - add color to links
- [x] - handle meta tags for page: [w3schools](https://www.w3schools.com/tags/tag_meta.asp)
- [x] - get very basic markdown post layout working
- [x] - markdown styles in `PostLayout` (or maybe `PostComponent`)
  - will add as I go
- [ ] - Get twitter and open graph tags working for BlogLayout/BlogPostLayout (title/image)
  - we are already using an `imageUrl` from but we might want to pass an `imageSrc`. Suggested width by FB is 1200.
  - nailing down this image source will also be useful if we want to display a Post Image in a post list (below)
- [ ] - Create a PostList component which can accept `tags` for creating the list
  - [ ] - create pagination sections (group by tags)
  - [ ] - PostCard components - rendered by PostList
- [x] - create ImageVariants component (become Lazy Image)
- [x] - create ImageSlider component
- [ ] - Create info/warning type box components like in Vuepress
- [ ] - import `/notes` articles into MDX
- [ ] - import `/professional`

## Nice to Have

- [ ] - get active route highlighted with underline
- [ ] - blog can have a footer
- [ ] - page transitions (see SWUP)
- [ ] - PWA Assets / Icons [pwa-asset-generator](https://www.npmjs.com/package/pwa-asset-generator)
