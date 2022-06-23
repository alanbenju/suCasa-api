# suCasa API

Backend with nodeJs + express with MongoDB
- Create presentations
- Create attendees
- Add attendee to presentation

This backend was developed in a short amount of time, in consecuence it's incomplete and not production ready.

## TODOs
- Unit testing
    - Controllers
    - Services
    - Models
    - Mock db or create testing db
- e2e testing
- Schema validations
- Body/params validations
- No border cases were considered
- Error handling
- Use Typescript for a more object oriented development and static typing
- Environment variables
- Use logging lib
- Authorization and Authentication
- Add response interface to retrieve on every request: Example: {success, msg, err, result}
- Running tests and eslint before pushing to repository
- Add endpoint documentations like Swagger
- Add user+password to the database (shh)
- CORS for sucasa domain

## Test environment
Deployed to AWS ec2 instance, running with nginx as reverse proxy

Backend is not secure so when the site is opened for the first time you will get: `ERR_CERT_AUTHORITY_INVALID`. 

To solve the error, open the backend url (or ip) in a new tab and proceed as unsafe

## Routes
GET /: Health check: OK 200

GET /presentations: Retrieve all presentations with it's attendees

GET /attendees: Retrieve all attendees (users)

POST /presentations: Create presentation 

```
{
    presentation: String,
    details: String,
    room: Number,
    speaker: {
        name: String,
        company: String,
        email: String,
        bio: String
    },
}

If the speaker email doesn't exist, the user will be created 
```

POST /attendees: Create attendee (User)

```
 {
    name: String,
    company: String,
    email: String,
}

email is unique
```

POST /:presentationId/attendees: Add attendee to presentation

```
{
    email: String
}
```


## Database tradeoff

Why use a SQL or NoSQL database in this case:

### SQL
Tables:
- Users
- Presentation (speaker is fk to user id)
- Attendees: Table for many to many relation, both user and presentation id + extra data like registered date

Pros
- Standarized schemas
- "Easy" to get the users that won't attend a specific presentation (mentioning this because it will be a nosql con)

Cons
- Avoiding duplication and using the attendees table may cause big joins if this scales to get presentations + attendees 

### NoSQL (used)
Collections:
- Users
- Presentations

Pros:
- Speed: Users will exist in Users collection and be duplicated in presentation as attendees: making really fast the query to obtain a presentation with it's attendees
- Horizontal scaling
- There are no complex queries in the product

Cons:
- Not joining tables, if we wanted to get the users that won't attend a presentation we need to look for the attendees and then get all of the users that are not included in that list

In this case with a really small product with almost no funtionalities so both are possible uses, no pro or con is enough to decide for one or another, I gave more importance to the Nosql pros and lack of cons

## Available Scripts

In the project directory, you can run:

### `npm run start` or `docker-compose up`

Runs the app in port defined in .env or 3001
MongoDB url also defined in .env

If app is run with docker compose, mongodb will be running in port 27017

### `npm run dev` to run app with nodemon (make changes and auto reload)

### `npm run test` for running tests

