# Réseau Social

## Authors
![Authors](https://contrib.rocks/image?repo=cybe-m1/anthony_quere_rsx)

## Project specs
Allservices commicates with WebClient and all interractions are in the commons library tat is shre withthe projects. 
That allows us to develop APIs and the functions that will use it at the same time and give clean methods to other 
services that needs to consme that API. 

### User Management
- create user
- update profile
- get profile

### Assets management
- images stores in buckets with signed links to access it

### Posts
- create post
- list posts

### Friends
- create friend request
- accept friend request
- decline friend request
- real time messaging (Firebase push notifications)

## Architecture
![Architecture](docs/assets/arch.png)

The API is available at `api.talky.jho.ovh`. As it is deployed in my own server, if you encounter any unavailability 
issue with it, do not hésitate to contact me.  

## Setup
### Dev environment
In a dev environment, each service must be created with the profile `dev` and each service with a database must be 
created with a `postgres` profile.

In addition to that some environment variables are needed to run severall services (with intellij, you can add an 
environment file on the run configuration) :
#### asset-service
```
GCPSTORAGE_BUCKETNAME=xxx
SPRING_CLOUD_GCP_CREDENTIALS_ENCODEDKEY=xxx
```

#### social-service
```
FIREBASESERVICEACCOUNT=xxx
```

### Tests with postman
To test with postman, you need to use an oauth2 authentication for each requests that needs one. For that you need to 
add the variables AUTH0_CLIENTID, AUTH0_CLIENT_SECRET, EDN_PASSWORD and EDN_USER to your environment. To make things 
easier, 5 users exists within the auth0 tenant with email+password authentication : 
- edn1@jho.ovh  
- edn2@jho.ovh  
- edn3@jho.ovh  
- edn4@jho.ovh  
- edn5@jho.ovh

The three first users have an account register at the creation of the user database. The other ones needs to be created. 
To register a user you need to make a post request to `/users/api/v1/users` (follow the swagger documentation for more 
details).

If you need more accounts, please contact me at *quereantho@gmail.com*. 


### Imagge management
Images or stored i a GCP bucketAll accesses to it are made by using signed links. To upload a new asset, you need to 
get a link with the corresponding endpoint (in the user service or the post service) and upload your asset as a 
application/octet-stream ith a "PUT" method. The ID is located in the returned link. 

### Documentation
A swagger-ui is available for all endpoints exposed by the api. You can access all of them at 
`https://api.talky.jho.ovh/swagger-ui.html` .

### Setup using docker
A docker compose file is available in the configuration, you only need to provide environment variables by adding a 
`.env` in the root directory like this.

```
USERS_POSTGRES_USERNAME=user-service
USERS_POSTGRES_PASSWORD=xxx
POSTS_POSTGRES_USERNAME=posts-service
POSTS_POSTGRES_PASSWORD=xxx
SOCIAL_POSTGRES_USERNAME=social-service
SOCIAL_POSTGRES_PASSWORD=xxx
GCPSTORAGE_BUCKETNAME=xxx
SPRING_CLOUD_GCP_CREDENTIALS_ENCODEDKEY=xxx
FIREBASESERVICEACCOUNT=xxx
```


## Backend structure
```
.
└── back
      ├── admin-server    # Spring boot admin
      ├── asset-service   # Asset manager
      ├── commons         # Shared lib between services
      ├── config-server   # Service to manage the configuration
      ├── gateway         # Entrypoint of the API
      ├── parents         # Parents pom files with all dependencies
      ├── post-service    # Service to create and list posts
      ├── social-service  # Service for friends requests, friends and messaging
      └── user-service    # Service for users and link to Auth0
```

## Notes
As this API is also used in the project [Anthony-Jhoiro/talky-android](https://github.com/Anthony-Jhoiro/talky-android),
some behavior needed to stay the same after the end of the project that's why dates do not contain the timezone in the 
API responses and some endpoints had to be re-written in v2.    
