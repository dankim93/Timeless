# Timeless

[Timeless] [timeless] is a single-page web application inspired by Flickr built using Ruby on Rails on the backend, PostgreSQL database, and React/Redux on the frontend.

Timeless is a personal project by Dong Kim.

![] [home]

[timeless]: http://www.timeless-project.us/#/
[home]: ./docs/images/home2.png

## Features
- User accounts creation with secure authentication with guest login
- Photo Streaming
- photo uploading with management
- Album creation for users
- Profile page for each users with photos, photo stream, and albums view.
- Comments availability on each Photo with management for each user.

![] [signin]

![] [profile]
[signin]: ./docs/images/signin.png
[profile]: ./docs/images/profile2.png

## Project Design

Timeless was designed and built in two weeks.

  - Started with [proposal] [proposal] to plan out and make the skeleton of this project.
  - [Database schema] [schema] and [sample state] [sample] was prepared with the proposal.

[proposal]: ./docs/README.md
[schema]: ./docs/schema.md
[sample]: ./docs/sample-state.md
## Technology

- ###### backend technology
  + Rails
    - Keeps password safe

      ```ruby
        def password=(password)
          @password = password
          self.password_digest = BCrypt::Password.create(password)
        end

        def is_password?(password)
          BCrypt::Password.new(self.password_digest).is_password?(password)
        end
      ```
    - Filters data through given parameters and send back to frontend

      ```Ruby
      def index
        if (params[:data])
          photos = Photo.where(user_id: params[:data][:id])
          @photos = photos.includes(:user)
        else
          @photos = Photo.all.includes(:user)
        end
        render :index
      end
      ```
  + Database
    - PostgreSQL
  + jBuilder
    - To manipulate hash structures in JSON format

- ###### Frontend technology
  + React & Redux
    - Uses the components to keep renders organized and reusable. Action, API util, reducers, and store.
  + jQuery
    - To make AJAX request to the Rails server.
  + SCSS
    - Used to style.
  + Others
    - ReactDOM, React Router, React History, Link, Babel for transpiling JSX into javascript.


- ###### File storage (Cloudinary)
  + Used Cloudinary for image uploading, storing, manipulation, and for fast CDN.
