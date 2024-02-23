create DATABASE if not EXISTS userlogin;

use userlogin

create table if not exists users(
    id int AUTO_INCREMENT PRIMARY key,
    nameuser varchar(255)    NOT NULL,
    password VARCHAR(255) NOT NULL
);

insert into users (nameuser, password) values('sara','1234')