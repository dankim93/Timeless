# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
image_url   | string    | not null
title       | string    | not null
description | string    | not null
user_id     | integer   | not null, foreign key (references users), indexed
album_id    | integer   | foreign key (references notebooks), indexed

## albums
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | string    | not null

## Comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
photo_id    | integer   | not null, foreign key (references users), indexed
user_id     | integer   | not null, foreign key (references users), indexed

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
photo_id    | integer   | not null, foreign key (references notes), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed
