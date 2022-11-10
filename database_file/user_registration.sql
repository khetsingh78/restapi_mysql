-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 10, 2022 at 04:04 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rest_api_mysql`
--

-- --------------------------------------------------------

--
-- Table structure for table `user_registration`
--

CREATE TABLE `user_registration` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `password` varchar(100) NOT NULL,
  `date_time` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_registration`
--

INSERT INTO `user_registration` (`id`, `name`, `email`, `gender`, `password`, `date_time`) VALUES
(8, 'kalu yogi', 'kalukumar@gmail.com', 'male', '$2a$10$6fWtysTcJwkI9GVj/erNMOz.rW//l2APUPJLJKabX49pWb9R0ajUi', '2022-09-29 14:41:50'),
(9, 'rohit yogi', 'khetisngh@gmail.com', 'male', '$2a$10$tnP5BojxYrjwbfHI5R3dlOh0.8C77ISWtzttyecqY4hDo8wOR3iYK', '2022-09-29 14:42:04'),
(10, 'rohit yogi', 'khetisngh@gmail.com', 'male', '$2a$10$lTATnAVrddj8WxWjbJQM.ut23LD0EWJNV8iMl0M6b7R9e7yxDjiZW', '2022-09-29 15:51:43'),
(11, 'chandra prakash yogi', 'chandraprakash@gmail.com', 'male', '$2a$10$SMeo.EsJ9w92oC.t9va3/e0ixOyzCSIsXaEyY2aJR4xVYkk8TU10O', '2022-10-02 21:57:37'),
(12, 'brijmohan yogi', 'brijmohan@gmail.com', 'male', '$2a$10$UTvqQ8zQu/Zi06VctnVmuu0A57vJ74QwTdkTPzF7XdC9YI1t9WRM.', '2022-10-02 21:59:09'),
(13, 'ratan kumar yogi', 'rajatkumar@gmail.com', 'male', '$2a$10$/lVR4c.Os2XMbx7QFqfjNuX2N6XQ.f6XMNOY5TAy6l0WmpaNPpm/W', '2022-11-09 15:42:20'),
(14, 'usha sharma', 'ushasharma@gmail.com', 'female', '$2a$10$YHmTqqu02xwhwjurHgUxTOYohb9jJ7W.Fpq9rpBrt3bZcBVpXYbcS', '2022-11-10 14:18:51');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user_registration`
--
ALTER TABLE `user_registration`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user_registration`
--
ALTER TABLE `user_registration`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
