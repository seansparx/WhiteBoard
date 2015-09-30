--
-- Database: `whiteboard`
--
CREATE DATABASE IF NOT EXISTS `whiteboard` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `whiteboard`;

-- --------------------------------------------------------

--
-- Table structure for table `canvas`
--

CREATE TABLE IF NOT EXISTS `canvas` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `image` longtext NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `ut` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
