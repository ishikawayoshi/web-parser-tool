create database if not exist web_parser;
use web_parser;


CREATE USER 'wp_user'@'localhost' IDENTIFIED BY 'wp_user';
GRANT ALL PRIVILEGES ON web_parser.* To 'wp_user'@'localhost' IDENTIFIED BY 'wp_user';