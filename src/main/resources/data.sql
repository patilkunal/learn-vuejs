insert into allroles(id, rolename) values(1, 'ROLE_USER');
insert into allroles(id, rolename) values(2, 'ROLE_ADMIN');
insert into allroles(id, rolename) values(3, 'ROLE_MANAGER');


insert into users(id, username, email) values(1, 'kunalpatil', 'kunal@nowhere.com');
insert into users(id, username, email) values(2, 'johnsmith', 'john@nowhere.com');

insert into userroles(id, username, rolename) values(1, 'kunalpatil', 'ROLE_USER');
insert into userroles(id, username, rolename) values(2, 'kunalpatil', 'ROLE_ADMIN');
insert into userroles(id, username, rolename) values(3, 'johnsmith', 'ROLE_USER');
