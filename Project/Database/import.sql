DROP DATABASE IF EXISTS `gymtracker`;
CREATE DATABASE `gymtracker`;

USE `gymtracker`;

CREATE TABLE `users` (
  PRIMARY KEY (`id`),
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `profile_picture` varchar(255) DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `gender` enum('male','female') DEFAULT NULL
);

CREATE TABLE `Statistics` (
  PRIMARY KEY (`id`),
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `weight` float NOT NULL,
  `height` float NOT NULL,
  `body_fat_percentage` float DEFAULT NULL,
  `muscle_mass_percentage` float DEFAULT NULL,
  `date` datetime NOT NULL,
  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)
);

CREATE TABLE `custom_workouts` (
  PRIMARY KEY (`id`),
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text,
  `date` datetime NOT NULL,
  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)
);

CREATE TABLE `exercises` (
  PRIMARY KEY (`id`),
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text,
  `video_url` varchar(255) DEFAULT NULL,
  `date` datetime NOT NULL
);

CREATE TABLE `custom_exercises` (
  PRIMARY KEY (`id`),
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text,
  `date` datetime NOT NULL,
  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)
);

CREATE TABLE `food` (
  PRIMARY KEY (`id`),
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `calories` int(11) NOT NULL,
  `date` datetime NOT NULL
);

CREATE TABLE `custom_food` (
  PRIMARY KEY (`id`),
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `calories` int(11) NOT NULL,
  `date` datetime NOT NULL,
  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)
);

