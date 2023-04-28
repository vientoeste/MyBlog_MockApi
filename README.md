# API mocking server
- By using prism, you can test api endpoints.
- By using swagger-ui-express you can read API docs
- swagger.yaml must be equivalent to MyBlog repository's swagger.yaml

# How to Use
## prism
- Run `npm install` and `npm run prism`, then prism server(mock API server) will start
- You can test by make http request to http://0.0.0.0:3001

## swagger-ui
- Run `npm install`(can be skipped if you already executed for prism) and `npm run docs`, then swagger-ui server will start
- You can access http://0.0.0:3001 to read the document