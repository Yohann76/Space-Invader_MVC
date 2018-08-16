-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  jeu. 16 août 2018 à 02:24
-- Version du serveur :  5.7.19
-- Version de PHP :  5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `membre`
--

-- --------------------------------------------------------

--
-- Structure de la table `membres`
--

DROP TABLE IF EXISTS `membres`;
CREATE TABLE IF NOT EXISTS `membres` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `nom_utilisateur` varchar(32) NOT NULL,
  `mot_de_passe` char(40) NOT NULL,
  `adresse_email` varchar(128) NOT NULL,
  `hash_validation` varchar(100) DEFAULT NULL,
  `date_inscription` date NOT NULL,
  `score` int(11) DEFAULT NULL,
  `avatar` varchar(128) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `nom_utilisateur` (`nom_utilisateur`),
  UNIQUE KEY `adresse_email` (`adresse_email`),
  KEY `mot_de_passe` (`mot_de_passe`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `membres`
--

INSERT INTO `membres` (`id`, `nom_utilisateur`, `mot_de_passe`, `adresse_email`, `hash_validation`, `date_inscription`, `score`, `avatar`) VALUES
(14, 'yohannn', 'durand', 'yohann@gmail.com', '$2y$10$wURW0i9HtZ.CEDGxr2zcAu9RjIrTlellKHHpwIgzjJt3G/TgmQOgi', '2018-06-15', NULL, ''),
(15, 'yohan', 'durand', 'yohanndurand76@gmail.com', '$2y$10$j.RfNulNHdiCU0mfaUj52eYn0F.ZwD5Hgqwci46IDKnuboEiiJQuK', '2018-07-30', NULL, ''),
(16, 'yohann', 'durand', 'yohann766@gmail.com', '$2y$10$e/Nvfh3AQKjrvrq25U5Y1eLAUuerD3Phzvazkn5PF2OKUJLS8MJsm', '2018-08-13', NULL, ''),
(17, 'Jean', 'durand', 'Jean76@gmail.com', '$2y$10$XC2ocvzklhLPudkUpNgwDu6dziIjRE/m4w5.YaGZq7/df45Y2pH/G', '2018-08-13', NULL, ''),
(18, 'antoine', 'durand', 'antoine@gmail.com', '$2y$10$hoVHzJGm9MHRJ3obzhejP.Qq.lnwcQ6CXD.eFi5FpmmHcB/5YPEUq', '2018-08-16', NULL, ''),
(19, 'George', 'durand', 'george78@gmail.com', '$2y$10$RvgEKpg.k03CJFcZphShS.5bReY.6sPBk4p7eS7nQWd5TKU326W4S', '2018-08-16', NULL, ''),
(20, 'Michel', 'durand', 'michel@gmail.com', '$2y$10$tsmo2VS7nRvH3hiB39GZjed8rK0qnSkTTeX5hYAQhewfWnv4qgpJ2', '2018-08-16', NULL, ''),
(21, 'Sophie', 'durand', 'sophie45@gmail.com', '$2y$10$pOROLxoCXw//uI8uBVK1zu/1o/sBMDBOCOki9lo9/WhFvvpzDKKYe', '2018-08-16', NULL, ''),
(22, 'Marj', 'durand', 'Marj@gmail.com', '$2y$10$cBbEd3p11JADn97VL5yQpezlEzRUx3W7a9RjxhMgLdt7Dfbfj0nGu', '2018-08-16', NULL, '');

-- --------------------------------------------------------

--
-- Structure de la table `scoremembre`
--

DROP TABLE IF EXISTS `scoremembre`;
CREATE TABLE IF NOT EXISTS `scoremembre` (
  `id` int(11) DEFAULT NULL,
  `scoremembres` int(11) DEFAULT NULL,
  `pseudo` varchar(30) NOT NULL,
  `date_score` datetime DEFAULT NULL,
  KEY `contrainteid` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `scoremembre`
--

INSERT INTO `scoremembre` (`id`, `scoremembres`, `pseudo`, `date_score`) VALUES
(16, 150, 'antoine', '2018-08-16 01:22:32'),
(21, 135, 'Sophie', '2018-08-16 02:02:31'),
(21, 360, 'Sophie', '2018-08-16 02:04:25'),
(22, 1010, 'Marj', '2018-08-16 02:23:35');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
