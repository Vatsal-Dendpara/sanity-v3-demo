import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import createSchema from 'part:@sanity/base/schema-creator'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([post, author, category, blockContent]),
})
