-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Sep 19, 2017 at 06:32 AM
-- Server version: 10.1.16-MariaDB
-- PHP Version: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `ecommerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `categoryid` int(11) NOT NULL,
  `categoryname` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`categoryid`, `categoryname`) VALUES
(1, 'Mobile'),
(2, 'Laptop'),
(3, 'Camera');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `productid` int(11) NOT NULL,
  `productname` varchar(50) NOT NULL,
  `categoryid` int(11) NOT NULL,
  `companyname` varchar(50) NOT NULL,
  `price` float NOT NULL,
  `discount` int(11) NOT NULL,
  `special` int(11) NOT NULL,
  `productdetails` varchar(500) NOT NULL,
  `stock` int(11) NOT NULL,
  `source` varchar(200) NOT NULL,
  `unitsold` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productid`, `productname`, `categoryid`, `companyname`, `price`, `discount`, `special`, `productdetails`, `stock`, `source`, `unitsold`) VALUES
(1, 'samsung galaxy n2', 1, 'samsung', 24000, 0, 0, 'joss', 2, '1.png', 1),
(2, 'Samsung Galaxy S8', 1, 'Samsung', 58800, 0, 1, 'Weight: 155g | Dimensions: 148.9 x 68.1 x 8mm | OS: Android 7 | Screen size: 5.8-inch | Resolution: 1440 x 2960 | CPU: Exynos 8895 | RAM: 4GB | Storage: 64GB | Battery: 3000mAh | Rear camera: 12MP | Front camera: 8MP', 3, '2.jpg', 0),
(3, 'OnePlus 5', 1, 'OnePlus', 42400, 0, 0, 'Weight: 153g | Dimensions: 154.2 x 74.1 x 7.3 mm | OS: Android 7.1 Nougat | Screen size: 5.5-inch | Resolution: 1080 x 1920 | CPU: Snapdragon 835 | RAM: 6GB/8GB | Storage: 64GB/128GB | Battery: 3300mAh | Rear camera: 20MP + 16MP | Front camera: 16MP', 2, '3.jpg', 1),
(4, 'Samsung Galaxy S8 Plus', 1, 'Samsung', 60800, 10, 1, 'Weight: 173g | Dimensions: 159.5 x 73.4 x 8.1mm | OS: Android 7 | Screen size: 6.2-inch | Resolution: 1440 x 2960 | CPU: Exynos 8895 | RAM: 4GB | Storage: 64GB | Battery: 3,500mAh | Rear camera: 12MP | Front camera: 8MP', 2, '4.jpg', 1),
(5, 'Dell XPS 13', 2, 'Dell', 100800, 10, 0, 'CPU: Intel Core i3 – i7 | Graphics: Intel HD Graphics 620 – Iris Plus Graphics 640 | RAM: 4GB – 16GB | Screen: 13.3-inch FHD (1,920 x 1,080) – QHD+ (3,200 x 1,800) | Storage: 128GB – 1TB SSD', 0, '5.jpg', 2),
(6, 'Asus Zenbook UX310UA', 2, 'Asus', 109999, 0, 1, 'CPU: Intel Core i3 – i5 | Graphics: Intel HD Graphics 620 | RAM: 8GB | Screen: 13.3-inch up to QHD+ (3,200 x 1,800) | Storage: 256GB SSD', 2, '6.jpg', 1),
(7, 'Fujifilm X-T2', 3, 'Fujifilm', 84800, 0, 1, 'Type: Mirrorless | Sensor size: APS-C CMOS | Resolution: 24.3MP | Lens: Fujifilm X mount | Viewfinder: EVF | Screen type: 3.0-inch tilting screen, 1,040,000 dots | Maximum continuous shooting speed: 8fps | Movies: 4K | User level: Intermediate/expert', 3, '7.jpg', 0),
(8, 'Canon EOS 5D Mark IV', 3, 'Canon', 264000, 10, 0, 'Type: DSLR | Sensor size: Full-frame CMOS | Resolution: 30.4MP | Lens: Canon EF mount | Viewfinder: Optical | Screen type: 3.2-inch touchscreen, 1,620,000 dots | Maximum continuous shooting speed: 7fps | Movies: 4K | User level: Expert', 1, '8.jpg', 2);

-- --------------------------------------------------------

--
-- Table structure for table `records`
--

CREATE TABLE `records` (
  `recordid` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `productid` int(11) NOT NULL,
  `sellingprice` float NOT NULL,
  `status` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `records`
--

INSERT INTO `records` (`recordid`, `userid`, `productid`, `sellingprice`, `status`) VALUES
(1, 1, 5, 90720, 'purchased'),
(2, 1, 5, 90720, 'purchased'),
(3, 1, 5, 90720, 'purchased'),
(4, 1, 8, 237600, 'purchased');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userid` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `usertype` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `name` varchar(50) NOT NULL,
  `contact` varchar(15) NOT NULL,
  `email` varchar(20) NOT NULL,
  `address` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userid`, `username`, `usertype`, `password`, `name`, `contact`, `email`, `address`) VALUES
(1, 'aziz', 'customer', '123', 'ishmam', '345756', 'dfyhjf', 'cgmjgm'),
(2, 'ishmam', 'customer', '456', 'aziz', '0167827345', 'dgtyhj', 'dertyj'),
(3, 'admin', 'admin', 'admin', 'ashiq', '34567', 'drfthurt', 'drthfdtyh');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`categoryid`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productid`),
  ADD KEY `categoryid` (`categoryid`);

--
-- Indexes for table `records`
--
ALTER TABLE `records`
  ADD PRIMARY KEY (`recordid`),
  ADD KEY `customerid` (`userid`),
  ADD KEY `productid` (`productid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `categoryid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `productid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `records`
--
ALTER TABLE `records`
  MODIFY `recordid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;