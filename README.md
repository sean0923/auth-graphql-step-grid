# auth-graphql-starter
Starter project from a GraphQL course on Udemy.com - Section 3!

Udemy course taught by Stephen Grider.


### refetchQueries

Add lines below to refetch after mutation is invoked

mutation({
  refetchQueries: [{ query: query_current_user }],
});