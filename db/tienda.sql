-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-10-2025 a las 20:08:39
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tienda`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id_product` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `stock` int(11) DEFAULT 0,
  `category` varchar(50) DEFAULT 'general',
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id_product`, `name`, `description`, `price`, `stock`, `category`, `image`) VALUES
(1, 'XD', 'Balón oficial del torneo', 18999.99, 25, 'deportes', 'pelota_adidas.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `ID_User` int(5) NOT NULL,
  `Name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Email` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Image` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Pass` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `type-user` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`ID_User`, `Name`, `Email`, `Image`, `Pass`, `type-user`) VALUES
(1, 'Dylandedoenelculo', 'ElBarcaEsUnEquipoChico@gmail.c', 'Dylan.jpg', 'Conchilan', 0),
(6, 'Dylandedoenelculo', 'ElBarcaEsUnEquipoChico@gmail.c', 'Dylan.jpg', 'Conchilan', 0),
(8, 'Luis Miguel', 'XD@gmail.com', 'Luis.jpg', 'Luis', 0),
(9, 'Luis Miguel', 'XD@gmail.com', 'Luis.jpg', 'Luis', 0),
(10, 'Luis Miguel', 'XD@gmail.com', 'Luis.jpg', 'Luis', 0),
(11, 'Luis Miguel', 'XD@gmail.com', 'Luis.jpg', 'Luis', NULL),
(12, 'Luis Miguel', 'XD@gmail.com', 'Luis.jpg', 'Luis', NULL),
(13, 'Luis Miguel', 'XD@gmail.com', 'Luis.jpg', 'Luis', NULL),
(14, 'Luis Miguel', 'XD@gmail.com', 'Luis.jpg', 'Luis', NULL),
(15, 'Luis Miguel', 'XD@gmail.com', 'Luis.jpg', 'Luis', NULL),
(16, 'Luis Miguel', 'XD@gmail.com', 'Luis.jpg', 'Luis', NULL),
(17, 'Luis Miguel', 'XD@gmail.com', 'Luis.jpg', 'Luis', NULL),
(18, 'Luis Miguel', 'XD@gmail.com', 'Luis.jpg', 'Luis', NULL),
(19, 'Luis Miguel', 'XD@gmail.com', 'Luis.jpg', 'Luis', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id_product`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID_User`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id_product` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `ID_User` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
