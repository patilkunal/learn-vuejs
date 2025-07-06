create table users(
    id int IDENTITY PRIMARY KEY,
    username varchar(255),
    email varchar(255)
);

create table userroles(
    id int IDENTITY PRIMARY KEY,
    username varchar(255),
    rolename varchar(255)
);

create table allroles(
    id int IDENTITY PRIMARY KEY,
    rolename varchar(255)
);