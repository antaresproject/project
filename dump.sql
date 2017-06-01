-- MySQL dump 10.14  Distrib 5.5.54-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: localhost
-- ------------------------------------------------------
-- Server version	5.5.54-MariaDB-1ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `foo`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `foo` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `foo`;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `failed_jobs` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `connection` text COLLATE utf8_unicode_ci NOT NULL,
  `queue` text COLLATE utf8_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `queue` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8_unicode_ci NOT NULL,
  `attempts` tinyint(3) unsigned NOT NULL,
  `reserved` tinyint(3) unsigned NOT NULL,
  `reserved_at` int(10) unsigned DEFAULT NULL,
  `available_at` int(10) unsigned NOT NULL,
  `created_at` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_reserved_reserved_at_index` (`queue`,`reserved`,`reserved_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobs`
--

LOCK TABLES `jobs` WRITE;
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  KEY `password_resets_email_index` (`email`),
  KEY `password_resets_token_index` (`token`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary table structure for view `permissions`
--

DROP TABLE IF EXISTS `permissions`;
/*!50001 DROP VIEW IF EXISTS `permissions`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `permissions` (
  `id` tinyint NOT NULL,
  `brand_id` tinyint NOT NULL,
  `vendor` tinyint NOT NULL,
  `name` tinyint NOT NULL,
  `status` tinyint NOT NULL,
  `options` tinyint NOT NULL,
  `actions` tinyint NOT NULL,
  `permissions` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `tbl_action_categories`
--

DROP TABLE IF EXISTS `tbl_action_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_action_categories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(1000) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_action_categories`
--

LOCK TABLES `tbl_action_categories` WRITE;
/*!40000 ALTER TABLE `tbl_action_categories` DISABLE KEYS */;
INSERT INTO `tbl_action_categories` VALUES (1,'Users',NULL),(2,'Modules and components',NULL),(3,'Branding',NULL),(4,'Sample crud',NULL),(5,'Items',NULL);
/*!40000 ALTER TABLE `tbl_action_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_actions`
--

DROP TABLE IF EXISTS `tbl_actions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_actions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `component_id` int(10) unsigned NOT NULL,
  `category_id` int(10) unsigned DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `tbl_actions_component_id_foreign` (`component_id`),
  KEY `tbl_actions_category_id_foreign` (`category_id`),
  CONSTRAINT `tbl_actions_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `tbl_action_categories` (`id`) ON DELETE CASCADE,
  CONSTRAINT `tbl_actions_component_id_foreign` FOREIGN KEY (`component_id`) REFERENCES `tbl_components` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=112 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_actions`
--

LOCK TABLES `tbl_actions` WRITE;
/*!40000 ALTER TABLE `tbl_actions` DISABLE KEYS */;
INSERT INTO `tbl_actions` VALUES (1,1,NULL,'manage-antares','Allows to manage antares global configuration'),(2,1,NULL,'manage-users','Manage administrative users'),(3,1,NULL,'manage-roles','Manage roles assigned to users'),(4,1,NULL,'manage-acl','Allows to change rules assgined to role'),(5,1,NULL,'change-app-settings','Change application settings - general configuration section'),(6,1,NULL,'show-dashboard','Allows user to view dashboard page after login'),(7,1,1,'users-list','View list of users'),(8,1,1,'user-create','Add new user'),(9,1,1,'user-update','Update user'),(10,1,1,'user-delete','Delete user'),(11,1,2,'component-install','Install module or component'),(12,1,2,'component-uninstall','Uninstall module or component'),(13,1,2,'component-activate','Activate (typically run up acl migration) module or component'),(14,1,2,'component-deactivate','Deactivate (typically run down acl migration) module or component'),(15,1,2,'component-configure','Configure module or component'),(16,1,3,'brand-update','Update branding details'),(17,1,3,'brand-email','Udate email branding'),(18,2,NULL,'notifications-list',NULL),(19,2,NULL,'notifications-details',NULL),(20,2,NULL,'notifications-preview',NULL),(21,2,NULL,'notifications-edit',NULL),(22,2,NULL,'notifications-duplicate',NULL),(23,2,NULL,'notifications-test',NULL),(24,2,NULL,'notifications-change-status',NULL),(25,2,NULL,'notifications-create',NULL),(26,2,NULL,'widget-send-notification',NULL),(27,2,NULL,'notifications-delete',NULL),(28,3,NULL,'activity-dashboard',NULL),(29,3,NULL,'activity-delete-log',NULL),(30,3,NULL,'activity-show-details',NULL),(31,3,NULL,'report-generate',NULL),(32,3,NULL,'report-view',NULL),(33,3,NULL,'report-delete',NULL),(34,3,NULL,'report-html',NULL),(35,3,NULL,'report-download',NULL),(36,3,NULL,'analyzer-dashboard',NULL),(37,3,NULL,'analyzer-run',NULL),(38,3,NULL,'analyzer-server',NULL),(39,3,NULL,'analyzer-system',NULL),(40,3,NULL,'analyzer-modules',NULL),(41,3,NULL,'analyzer-version',NULL),(42,3,NULL,'analyzer-database',NULL),(43,3,NULL,'analyzer-logs',NULL),(44,3,NULL,'analyzer-components',NULL),(45,3,NULL,'analyzer-checksum',NULL),(46,3,NULL,'report-send',NULL),(47,3,NULL,'report-generate-standalone',NULL),(48,3,NULL,'view-logs',NULL),(49,3,NULL,'request-list',NULL),(50,3,NULL,'request-clear',NULL),(51,3,NULL,'request-show',NULL),(52,3,NULL,'error-list',NULL),(53,3,NULL,'error-details',NULL),(54,3,NULL,'error-delete',NULL),(55,3,NULL,'error-download',NULL),(56,3,NULL,'history-list',NULL),(57,3,NULL,'history-show',NULL),(58,3,NULL,'history-delete',NULL),(59,4,NULL,'translations-list',NULL),(60,4,NULL,'change-language',NULL),(61,4,NULL,'add-language',NULL),(62,4,NULL,'edit-translation',NULL),(63,4,NULL,'publish-translations',NULL),(64,4,NULL,'export-translations',NULL),(65,4,NULL,'import-translations',NULL),(66,5,NULL,'admin-list',NULL),(67,5,NULL,'roles-list',NULL),(68,5,NULL,'user-create',NULL),(69,5,NULL,'user-update',NULL),(70,5,NULL,'user-delete',NULL),(71,5,NULL,'create-role',NULL),(72,5,NULL,'edit-role',NULL),(73,5,NULL,'delete-role',NULL),(74,5,NULL,'properties',NULL),(75,5,NULL,'properties-update',NULL),(76,5,NULL,'manage-roles',NULL),(77,5,NULL,'manage-acl',NULL),(78,5,NULL,'manage-settings',NULL),(79,5,NULL,'login-as-user',NULL),(80,5,NULL,'manage-levels',NULL),(81,6,NULL,'automation-list',NULL),(82,6,NULL,'automation-details',NULL),(83,6,NULL,'automation-edit',NULL),(84,6,NULL,'automation-run',NULL),(85,7,NULL,'list-customfields',NULL),(86,7,NULL,'add-customfield',NULL),(87,7,NULL,'update-customfield',NULL),(88,7,NULL,'delete-customfield',NULL),(89,8,NULL,'tools-tester',NULL),(90,12,NULL,'configuration',NULL),(91,12,NULL,'can-use-api',NULL),(92,13,NULL,'list-rules',NULL),(93,13,NULL,'add-rule',NULL),(94,13,NULL,'update-rule',NULL),(95,13,NULL,'delete-rule',NULL),(96,13,NULL,'list-banned-emails',NULL),(97,13,NULL,'add-banned-email',NULL),(98,13,NULL,'update-banned-email',NULL),(99,13,NULL,'delete-banned-email',NULL),(100,13,NULL,'configuration',NULL),(101,14,NULL,'index-action','Default index preview action. Very first page from main menu.'),(102,14,4,'add-action','Allows user to add action.'),(103,14,4,'update-action','Allows user to update action.'),(104,14,4,'delete-action','Allows user to delete action.'),(105,14,5,'items-list','Allows user to preview items list.'),(106,14,5,'item-add','Allows user to add item.'),(107,14,5,'item-update','Allows user to update item.'),(108,14,5,'item-delete','Allows user to delete item.'),(109,15,NULL,'search',NULL),(110,16,NULL,'configuration',NULL),(111,16,NULL,'reset-user-settings',NULL);
/*!40000 ALTER TABLE `tbl_actions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_antares_options`
--

DROP TABLE IF EXISTS `tbl_antares_options`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_antares_options` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `value` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_antares_options`
--

LOCK TABLES `tbl_antares_options` WRITE;
/*!40000 ALTER TABLE `tbl_antares_options` DISABLE KEYS */;
INSERT INTO `tbl_antares_options` VALUES (1,'site.name',''),(2,'email.driver','smtp'),(3,'email.host','ssl://smtp.gmail.com'),(4,'email.port','465'),(5,'email.from.name','Antares'),(6,'email.from.address','lukasz.cirut@gmail.com'),(7,'email.encryption',''),(8,'email.username',''),(9,'email.password',''),(10,'email.sendmail','/usr/sbin/sendmail -bs'),(11,'app.installed','1'),(12,'brand.configuration.id','1'),(13,'brand.configuration.name','Antares'),(14,'brand.configuration.status','1'),(15,'brand.configuration.default','1'),(16,'brand.configuration.created_at','2017-06-01 08:29:37'),(17,'brand.configuration.updated_at',NULL),(18,'brand.configuration.deleted_at',NULL),(19,'brand.configuration.options.id','1'),(20,'brand.configuration.options.brand_id','1'),(21,'brand.configuration.options.country_id','169'),(22,'brand.configuration.options.language_id','1'),(23,'brand.configuration.options.date_format_id','1'),(24,'brand.configuration.options.maintenance','0'),(25,'brand.configuration.options.url','http://192.168.20.3'),(26,'brand.configuration.options.header','<!doctype html>\n<html>\n    <head>\n        <meta name=\"viewport\" content=\"width=device-width\">\n        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n        <title>Really Simple HTML Email Template</title>\n    </head>\n    <body bgcolor=\"#f6f6f6\">\n        <!-- body -->\n        <table class=\"body-wrap\" bgcolor=\"#f6f6f6\">\n            <tr>\n                <td></td>\n                <td class=\"container\" bgcolor=\"#FFFFFF\">\n                    <!-- content -->\n                    <div class=\"content\">\n                        <table>\n                            <tr>\n                                <td>\n                                    <p>Hi there,</p>\n                                    <p>Sometimes all you want is to send a simple HTML email with a basic design.</p>\n                                    <h1>Really simple HTML email template</h1>\n                                    <p>This is a really simple email template. Its sole purpose is to get you to click the button below.</p>\n                                    <h2>How do I use it?</h2>\n                                    <p>All the information you need is on GitHub.</p>\n                                    <div style=\"font-size: 12px;margin: 24px 0;\">\n                                        Can you make it pop try a more powerful colour I got your invoice...it seems really high, why did you charge so much, and I know somebody who can do this for a reasonable cost. You might wanna give it another shot. Make it sexy we don\'t need a contract, do we nor just do what you think. I trust you, but remember, everything is the same or better or im not sure, try something else can you pimp this powerpoint, need more geometry patterns but we are a startup. I was wondering if my cat could be placed over the logo in the flyer it\'s great, can you add a beard though . This looks perfect. Just Photoshop out the dog, add a baby, and make the curtains blue this looks perfect. Just Photoshop out the dog, add a baby, and make the curtains blue, so something summery; colourful, but concept is bang on, but can we look at a better execution. I know somebody who can do this for a reasonable cost can you turn it around in photoshop so we can see more of the front remember, everything is the same or better, yet make it sexy. Something summery; colourful can you pimp this powerpoint, need more geometry patterns I have printed it out, but the animated gif is not moving. Can you make it stand out more? this looks perfect. Just Photoshop out the dog, add a baby, and make the curtains blue we are a startup you might wanna give it another shot jazz it up a little, so can you make it stand out more?. Can you make the logo bigger yes bigger bigger still the logo is too big i was wondering if my cat could be placed over the logo in the flyer. Make it pop we don\'t need a contract, do we for I need a website. How much will it cost make it pop, that sandwich needs to be more playful, nor can you put \"find us on facebook\" by the facebook logo? nor anyway, you are the designer, you know what to do. We need more images of groups of people having non-specific types of fun just do what you think. I trust you make it look like Apple, so can you put \"find us on facebook\" by the facebook logo?\n                                    </div>\n                                    <!-- button -->\n                                    <table class=\"btn-primary\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n                                        <tr>\n                                            <td>\n                                                <a href=\"https://github.com/leemunroe/html-email-template\">View the source and instructions on GitHub</a>\n                                            </td>\n                                        </tr>\n                                    </table>\n                                    <!-- /button -->\n                                    <p>Feel free to use, copy, modify this email template as you wish.</p>\n                                    <p>Thanks, have a lovely day.</p>\n                                    <p><a href=\"http://twitter.com/leemunroe\">Follow @leemunroe on Twitter</a></p>\n                                </td>\n                            </tr>\n                        </table>\n                    </div>\n                    <!-- /content -->\n                </td>\n                <td></td>\n            </tr>\n        </table>\n        <!-- /body -->'),(27,'brand.configuration.options.styles','* { font-family: \"Helvetica Neue\", \"Helvetica\", Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; margin: 0; padding: 0; } img { max-width: 600px; width: auto; } body { -webkit-font-smoothing: antialiased; height: 100%; -webkit-text-size-adjust: none; width: 100% !important; } /* ------------------------------------- ELEMENTS ------------------------------------- */ a { color: #348eda; } .btn-primary { Margin-bottom: 10px; width: auto !important; } .btn-primary td { background-color: #348eda; border-radius: 25px; font-family: \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif; font-size: 14px; text-align: center; vertical-align: top; } .btn-primary td a { background-color: #348eda; border: solid 1px #348eda; border-radius: 25px; border-width: 10px 20px; display: inline-block; color: #ffffff; cursor: pointer; font-weight: bold; line-height: 2; text-decoration: none; } .last { margin-bottom: 0; } .first { margin-top: 0; } .padding { padding: 10px 0; } /* ------------------------------------- BODY ------------------------------------- */ table.body-wrap { padding: 20px; width: 100%; } table.body-wrap .container { border: 1px solid #f0f0f0; } /* ------------------------------------- FOOTER ------------------------------------- */ table.footer-wrap { clear: both !important; width: 100%; } .footer-wrap .container p { color: #666666; font-size: 12px; } table.footer-wrap a { color: #999999; } /* ------------------------------------- TYPOGRAPHY ------------------------------------- */ h1, h2, h3 { color: #111111; font-family: \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif; font-weight: 200; line-height: 1.2em; margin: 40px 0 10px; } h1 { font-size: 36px; } h2 { font-size: 28px; } h3 { font-size: 22px; } p, ul, ol { font-size: 14px; font-weight: normal; margin-bottom: 10px; } ul li, ol li { margin-left: 5px; list-style-position: inside; } /* --------------------------------------------------- RESPONSIVENESS ------------------------------------------------------ */ /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */ .container { clear: both !important; display: block !important; Margin: 0 auto !important; max-width: 600px !important; } /* Set the padding on the td rather than the div for Outlook compatibility */ .body-wrap .container { padding: 20px; } /* This should also be a block element, so that it will fill 100% of the .container */ .content { display: block; margin: 0 auto; max-width: 600px; } /* Let\'s make sure tables in the content area are 100% wide */ .content table { width: 100%; }'),(28,'brand.configuration.options.footer','<!-- footer -->\n<table class=\"footer-wrap\">\n    <tr>\n        <td></td>\n        <td class=\"container\">\n            <!-- content -->\n            <div class=\"content\">\n                <table>\n                    <tr>\n                        <td align=\"center\">\n                            <p>Don\'t like these annoying emails?\n                                <a href=\"#\">\n                                    <unsubscribe>Unsubscribe</unsubscribe>\n                                </a>.\n                            </p>\n                        </td>\n                    </tr>\n                </table>\n            </div>\n            <!-- /content -->\n        </td>\n        <td></td>\n    </tr>\n</table>\n<!-- /footer -->\n</body>\n</html>'),(29,'brand.configuration.template.id','1'),(30,'brand.configuration.template.brand_id','1'),(31,'brand.configuration.template.area','admin'),(32,'brand.configuration.template.logo','logo_default_full.png'),(33,'brand.configuration.template.favicon','logo_default_tear.png'),(34,'brand.configuration.template.composition','small_sidemenu'),(35,'brand.configuration.template.styleset','material'),(36,'brand.configuration.template.colors',NULL),(37,'.Brands form','.Brands form'),(38,'.General configuration','.General configuration'),(39,'site.mode','production'),(40,'brand.default','1'),(41,'.Report form','.Report form');
/*!40000 ALTER TABLE `tbl_antares_options` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_api_public_private_hashes`
--

DROP TABLE IF EXISTS `tbl_api_public_private_hashes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_api_public_private_hashes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `public_key` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `tbl_api_pp_hashes_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `tbl_users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_api_public_private_hashes`
--

LOCK TABLES `tbl_api_public_private_hashes` WRITE;
/*!40000 ALTER TABLE `tbl_api_public_private_hashes` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_api_public_private_hashes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_api_roles`
--

DROP TABLE IF EXISTS `tbl_api_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_api_roles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `role_id` int(10) unsigned NOT NULL,
  `enabled` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `role_id` (`role_id`),
  CONSTRAINT `tbl_api_roles_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `tbl_roles` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_api_roles`
--

LOCK TABLES `tbl_api_roles` WRITE;
/*!40000 ALTER TABLE `tbl_api_roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_api_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_api_users`
--

DROP TABLE IF EXISTS `tbl_api_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_api_users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `whitelist` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `enabled` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `tbl_api_users_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `tbl_users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_api_users`
--

LOCK TABLES `tbl_api_users` WRITE;
/*!40000 ALTER TABLE `tbl_api_users` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_api_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_ban_management_banned_emails`
--

DROP TABLE IF EXISTS `tbl_ban_management_banned_emails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_ban_management_banned_emails` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `internal_reason` text COLLATE utf8_unicode_ci,
  `reason` text COLLATE utf8_unicode_ci,
  `expired_at` date DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `tbl_ban_management_banned_emails_fk1` FOREIGN KEY (`user_id`) REFERENCES `tbl_users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_ban_management_banned_emails`
--

LOCK TABLES `tbl_ban_management_banned_emails` WRITE;
/*!40000 ALTER TABLE `tbl_ban_management_banned_emails` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_ban_management_banned_emails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_ban_management_rules`
--

DROP TABLE IF EXISTS `tbl_ban_management_rules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_ban_management_rules` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned DEFAULT NULL,
  `value` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `enabled` tinyint(1) NOT NULL DEFAULT '1',
  `trusted` tinyint(1) NOT NULL DEFAULT '0',
  `internal_reason` text COLLATE utf8_unicode_ci,
  `reason` text COLLATE utf8_unicode_ci,
  `expired_at` datetime DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `tbl_ban_management_rules_enabled_index` (`enabled`),
  CONSTRAINT `tbl_ban_management_rules_fk1` FOREIGN KEY (`user_id`) REFERENCES `tbl_users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_ban_management_rules`
--

LOCK TABLES `tbl_ban_management_rules` WRITE;
/*!40000 ALTER TABLE `tbl_ban_management_rules` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_ban_management_rules` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_brand_options`
--

DROP TABLE IF EXISTS `tbl_brand_options`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_brand_options` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `brand_id` int(10) unsigned NOT NULL,
  `country_id` int(10) unsigned NOT NULL,
  `language_id` int(10) unsigned NOT NULL,
  `date_format_id` int(10) unsigned NOT NULL,
  `maintenance` tinyint(1) NOT NULL,
  `url` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `header` longtext COLLATE utf8_unicode_ci,
  `styles` longtext COLLATE utf8_unicode_ci,
  `footer` longtext COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`),
  KEY `brand_id` (`brand_id`),
  KEY `country_id` (`country_id`),
  KEY `language_id` (`language_id`),
  KEY `date_format_id` (`date_format_id`),
  CONSTRAINT `tbl_brand_options_ibfk_3` FOREIGN KEY (`language_id`) REFERENCES `tbl_languages` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `tbl_brand_options_ibfk_1` FOREIGN KEY (`brand_id`) REFERENCES `tbl_brands` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `tbl_brand_options_ibfk_2` FOREIGN KEY (`country_id`) REFERENCES `tbl_country` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_brand_options`
--

LOCK TABLES `tbl_brand_options` WRITE;
/*!40000 ALTER TABLE `tbl_brand_options` DISABLE KEYS */;
INSERT INTO `tbl_brand_options` VALUES (1,1,169,1,1,0,'http://192.168.20.3','<!doctype html>\n<html>\n    <head>\n        <meta name=\"viewport\" content=\"width=device-width\">\n        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n        <title>Really Simple HTML Email Template</title>\n    </head>\n    <body bgcolor=\"#f6f6f6\">\n        <!-- body -->\n        <table class=\"body-wrap\" bgcolor=\"#f6f6f6\">\n            <tr>\n                <td></td>\n                <td class=\"container\" bgcolor=\"#FFFFFF\">\n                    <!-- content -->\n                    <div class=\"content\">\n                        <table>\n                            <tr>\n                                <td>\n                                    <p>Hi there,</p>\n                                    <p>Sometimes all you want is to send a simple HTML email with a basic design.</p>\n                                    <h1>Really simple HTML email template</h1>\n                                    <p>This is a really simple email template. Its sole purpose is to get you to click the button below.</p>\n                                    <h2>How do I use it?</h2>\n                                    <p>All the information you need is on GitHub.</p>\n                                    <div style=\"font-size: 12px;margin: 24px 0;\">\n                                        Can you make it pop try a more powerful colour I got your invoice...it seems really high, why did you charge so much, and I know somebody who can do this for a reasonable cost. You might wanna give it another shot. Make it sexy we don\'t need a contract, do we nor just do what you think. I trust you, but remember, everything is the same or better or im not sure, try something else can you pimp this powerpoint, need more geometry patterns but we are a startup. I was wondering if my cat could be placed over the logo in the flyer it\'s great, can you add a beard though . This looks perfect. Just Photoshop out the dog, add a baby, and make the curtains blue this looks perfect. Just Photoshop out the dog, add a baby, and make the curtains blue, so something summery; colourful, but concept is bang on, but can we look at a better execution. I know somebody who can do this for a reasonable cost can you turn it around in photoshop so we can see more of the front remember, everything is the same or better, yet make it sexy. Something summery; colourful can you pimp this powerpoint, need more geometry patterns I have printed it out, but the animated gif is not moving. Can you make it stand out more? this looks perfect. Just Photoshop out the dog, add a baby, and make the curtains blue we are a startup you might wanna give it another shot jazz it up a little, so can you make it stand out more?. Can you make the logo bigger yes bigger bigger still the logo is too big i was wondering if my cat could be placed over the logo in the flyer. Make it pop we don\'t need a contract, do we for I need a website. How much will it cost make it pop, that sandwich needs to be more playful, nor can you put \"find us on facebook\" by the facebook logo? nor anyway, you are the designer, you know what to do. We need more images of groups of people having non-specific types of fun just do what you think. I trust you make it look like Apple, so can you put \"find us on facebook\" by the facebook logo?\n                                    </div>\n                                    <!-- button -->\n                                    <table class=\"btn-primary\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n                                        <tr>\n                                            <td>\n                                                <a href=\"https://github.com/leemunroe/html-email-template\">View the source and instructions on GitHub</a>\n                                            </td>\n                                        </tr>\n                                    </table>\n                                    <!-- /button -->\n                                    <p>Feel free to use, copy, modify this email template as you wish.</p>\n                                    <p>Thanks, have a lovely day.</p>\n                                    <p><a href=\"http://twitter.com/leemunroe\">Follow @leemunroe on Twitter</a></p>\n                                </td>\n                            </tr>\n                        </table>\n                    </div>\n                    <!-- /content -->\n                </td>\n                <td></td>\n            </tr>\n        </table>\n        <!-- /body -->','* { font-family: \"Helvetica Neue\", \"Helvetica\", Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; margin: 0; padding: 0; } img { max-width: 600px; width: auto; } body { -webkit-font-smoothing: antialiased; height: 100%; -webkit-text-size-adjust: none; width: 100% !important; } /* ------------------------------------- ELEMENTS ------------------------------------- */ a { color: #348eda; } .btn-primary { Margin-bottom: 10px; width: auto !important; } .btn-primary td { background-color: #348eda; border-radius: 25px; font-family: \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif; font-size: 14px; text-align: center; vertical-align: top; } .btn-primary td a { background-color: #348eda; border: solid 1px #348eda; border-radius: 25px; border-width: 10px 20px; display: inline-block; color: #ffffff; cursor: pointer; font-weight: bold; line-height: 2; text-decoration: none; } .last { margin-bottom: 0; } .first { margin-top: 0; } .padding { padding: 10px 0; } /* ------------------------------------- BODY ------------------------------------- */ table.body-wrap { padding: 20px; width: 100%; } table.body-wrap .container { border: 1px solid #f0f0f0; } /* ------------------------------------- FOOTER ------------------------------------- */ table.footer-wrap { clear: both !important; width: 100%; } .footer-wrap .container p { color: #666666; font-size: 12px; } table.footer-wrap a { color: #999999; } /* ------------------------------------- TYPOGRAPHY ------------------------------------- */ h1, h2, h3 { color: #111111; font-family: \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif; font-weight: 200; line-height: 1.2em; margin: 40px 0 10px; } h1 { font-size: 36px; } h2 { font-size: 28px; } h3 { font-size: 22px; } p, ul, ol { font-size: 14px; font-weight: normal; margin-bottom: 10px; } ul li, ol li { margin-left: 5px; list-style-position: inside; } /* --------------------------------------------------- RESPONSIVENESS ------------------------------------------------------ */ /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */ .container { clear: both !important; display: block !important; Margin: 0 auto !important; max-width: 600px !important; } /* Set the padding on the td rather than the div for Outlook compatibility */ .body-wrap .container { padding: 20px; } /* This should also be a block element, so that it will fill 100% of the .container */ .content { display: block; margin: 0 auto; max-width: 600px; } /* Let\'s make sure tables in the content area are 100% wide */ .content table { width: 100%; }','<!-- footer -->\n<table class=\"footer-wrap\">\n    <tr>\n        <td></td>\n        <td class=\"container\">\n            <!-- content -->\n            <div class=\"content\">\n                <table>\n                    <tr>\n                        <td align=\"center\">\n                            <p>Don\'t like these annoying emails?\n                                <a href=\"#\">\n                                    <unsubscribe>Unsubscribe</unsubscribe>\n                                </a>.\n                            </p>\n                        </td>\n                    </tr>\n                </table>\n            </div>\n            <!-- /content -->\n        </td>\n        <td></td>\n    </tr>\n</table>\n<!-- /footer -->\n</body>\n</html>');
/*!40000 ALTER TABLE `tbl_brand_options` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_brand_templates`
--

DROP TABLE IF EXISTS `tbl_brand_templates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_brand_templates` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `brand_id` int(10) unsigned NOT NULL,
  `area` text COLLATE utf8_unicode_ci,
  `logo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `favicon` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `composition` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `styleset` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `colors` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`),
  KEY `templates_brand_id` (`brand_id`),
  CONSTRAINT `tbl_brand_templates_fk_1` FOREIGN KEY (`brand_id`) REFERENCES `tbl_brands` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_brand_templates`
--

LOCK TABLES `tbl_brand_templates` WRITE;
/*!40000 ALTER TABLE `tbl_brand_templates` DISABLE KEYS */;
INSERT INTO `tbl_brand_templates` VALUES (1,1,'admin','logo_default_full.png','logo_default_tear.png','small_sidemenu','material','a:4:{s:4:\"main\";a:4:{s:5:\"value\";s:7:\"#02a8f3\";s:4:\"mod1\";s:7:\"#029de4\";s:4:\"mod2\";s:7:\"#0fb5ff\";s:4:\"mod3\";s:7:\"#1bc1ff\";}s:9:\"secondary\";a:4:{s:5:\"value\";s:7:\"#30343d\";s:4:\"mod1\";s:7:\"#292d34\";s:4:\"mod2\";s:7:\"#434853\";s:4:\"mod3\";s:7:\"#8c9099\";}s:10:\"background\";a:4:{s:5:\"value\";s:7:\"#70c24a\";s:4:\"mod1\";s:7:\"#4d8035\";s:4:\"mod2\";s:7:\"#69ae4a\";s:4:\"mod3\";s:7:\"#7cbe5d\";}s:4:\"text\";a:3:{s:4:\"main\";a:2:{s:5:\"first\";s:7:\"#ffffff\";s:6:\"second\";s:7:\"#ffffff\";}s:9:\"secondary\";a:2:{s:5:\"first\";s:7:\"#8a9099\";s:6:\"second\";s:7:\"#ffffff\";}s:10:\"background\";a:2:{s:5:\"first\";s:7:\"#8a9099\";s:6:\"second\";s:7:\"#000000\";}}}'),(2,1,'user','users_logo_default_full.png','users_logo_default_tear.png','big_sidemenu','material','a:4:{s:4:\"main\";a:4:{s:5:\"value\";s:7:\"#fa6464\";s:4:\"mod1\";s:7:\"#fa5555\";s:4:\"mod2\";s:7:\"#ff7171\";s:4:\"mod3\";s:7:\"#ff7d7d\";}s:9:\"secondary\";a:4:{s:5:\"value\";s:7:\"#963c3c\";s:4:\"mod1\";s:7:\"#8b3838\";s:4:\"mod2\";s:7:\"#ac4e4e\";s:4:\"mod3\";s:7:\"#f29898\";}s:10:\"background\";a:4:{s:5:\"value\";s:7:\"#fa6464\";s:4:\"mod1\";s:7:\"#ed1a1a\";s:4:\"mod2\";s:7:\"#f15858\";s:4:\"mod3\";s:7:\"#f57878\";}s:4:\"text\";a:3:{s:4:\"main\";a:2:{s:5:\"first\";s:7:\"#ffffff\";s:6:\"second\";s:7:\"#fa6464\";}s:9:\"secondary\";a:2:{s:5:\"first\";s:7:\"#ffffff\";s:6:\"second\";s:7:\"#fa6464\";}s:10:\"background\";a:2:{s:5:\"first\";s:7:\"#fa6464\";s:6:\"second\";s:7:\"#fa6464\";}}}');
/*!40000 ALTER TABLE `tbl_brand_templates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_brands`
--

DROP TABLE IF EXISTS `tbl_brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_brands` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` text COLLATE utf8_unicode_ci NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `default` tinyint(4) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_brands`
--

LOCK TABLES `tbl_brands` WRITE;
/*!40000 ALTER TABLE `tbl_brands` DISABLE KEYS */;
INSERT INTO `tbl_brands` VALUES (1,'Antares',1,1,'2017-06-01 08:29:37',NULL,NULL);
/*!40000 ALTER TABLE `tbl_brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_checksum`
--

DROP TABLE IF EXISTS `tbl_checksum`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_checksum` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `value` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`),
  KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_checksum`
--

LOCK TABLES `tbl_checksum` WRITE;
/*!40000 ALTER TABLE `tbl_checksum` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_checksum` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_components`
--

DROP TABLE IF EXISTS `tbl_components`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_components` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `vendor` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `required` tinyint(1) NOT NULL DEFAULT '0',
  `options` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tbl_components_vendor_name_unique` (`vendor`,`name`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_components`
--

LOCK TABLES `tbl_components` WRITE;
/*!40000 ALTER TABLE `tbl_components` DISABLE KEYS */;
INSERT INTO `tbl_components` VALUES (1,'antaresproject','core',2,1,NULL),(2,'antaresproject','component-notifications',2,1,'[]'),(3,'antaresproject','component-logger',2,1,'[]'),(4,'antaresproject','component-translations',2,1,'[]'),(5,'antaresproject','component-acl',2,1,'[]'),(6,'antaresproject','component-automation',2,1,'[]'),(7,'antaresproject','component-customfields',2,1,'[]'),(8,'antaresproject','component-tester',2,1,'[]'),(9,'antaresproject','component-installer',2,1,'[]'),(10,'antaresproject','component-brands',2,1,'[]'),(11,'antaresproject','component-users',2,1,'[]'),(12,'antaresproject','module-api',2,0,'{\"auth_drivers\":[]}'),(13,'antaresproject','module-ban_management',2,0,'{\"cookie_tracking\":true,\"max_failed_attempts\":5,\"attempts_decay_minutes\":14440}'),(14,'antaresproject','module-sample_module',2,0,'[]'),(15,'antaresproject','module-search',2,0,'[]'),(16,'antaresproject','module-two_factor_auth',2,0,'[]');
/*!40000 ALTER TABLE `tbl_components` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_country`
--

DROP TABLE IF EXISTS `tbl_country`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_country` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `code` char(2) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tbl_country_code_unique` (`code`),
  UNIQUE KEY `tbl_country_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=235 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_country`
--

LOCK TABLES `tbl_country` WRITE;
/*!40000 ALTER TABLE `tbl_country` DISABLE KEYS */;
INSERT INTO `tbl_country` VALUES (1,'AD','Andorra'),(2,'AE','United Arab Emirates'),(3,'AF','Afghanistan'),(4,'AG','Antigua And Barbuda'),(5,'AI','Anguilla'),(6,'AL','Albania'),(7,'AM','Armenia'),(9,'AO','Angola'),(10,'AR','Argentina'),(11,'AT','Austria'),(12,'AU','Australia'),(13,'AW','Aruba'),(14,'AZ','Azerbaijan'),(15,'BA','Bosnia And Herzegovina'),(16,'BB','Barbados'),(17,'BD','Bangladesh'),(18,'BE','Belgium'),(19,'BF','Burkina Faso'),(20,'BG','Bulgaria'),(21,'BH','Bahrain'),(22,'BI','Burundi'),(23,'BJ','Benin'),(24,'BM','Bermuda'),(25,'BN','Brunei Darussalam'),(26,'BO','Bolivia'),(27,'BR','Brazil'),(28,'BS','Bahamas'),(29,'BT','Bhutan'),(30,'BW','Botswana'),(31,'BY','Belarus'),(32,'BZ','Belize'),(33,'CA','Canada'),(34,'CC','Cocos (Keeling) Islands'),(35,'CD','Congo, The Democratic Republic Of The'),(36,'CF','Central African Republic'),(37,'CG','Congo'),(38,'CH','Switzerland'),(39,'CI','Cote D\'ivoire'),(40,'CK','Cook Islands'),(41,'CL','Chile'),(42,'CM','Cameroon'),(43,'CN','China'),(44,'CO','Colombia'),(45,'CR','Costa Rica'),(46,'CU','Cuba'),(47,'CV','Cape Verde'),(48,'CX','Christmas Island'),(49,'CY','Cyprus'),(50,'CZ','Czech Republic'),(51,'DE','Germany'),(52,'DJ','Djibouti'),(53,'DK','Denmark'),(54,'DM','Dominica'),(55,'DO','Dominican Republic'),(56,'DZ','Algeria'),(57,'EC','Ecuador'),(58,'EE','Estonia'),(59,'EG','Egypt'),(60,'EH','Western Sahara'),(61,'ER','Eritrea'),(62,'ES','Spain'),(63,'ET','Ethiopia'),(64,'FI','Finland'),(65,'FJ','Fiji'),(66,'FK','Falkland Islands (Malvinas)'),(67,'FM','Micronesia, Federated States Of'),(68,'FO','Faroe Islands'),(69,'FR','France'),(70,'GA','Gabon'),(71,'GB','United Kingdom'),(72,'GD','Grenada'),(73,'GE','Georgia'),(74,'GF','French Guiana'),(75,'GG','Guernsey'),(76,'GH','Ghana'),(77,'GI','Gibraltar'),(78,'GL','Greenland'),(79,'GM','Gambia'),(80,'GN','Guinea'),(81,'GP','Guadeloupe'),(82,'GQ','Equatorial Guinea'),(83,'GR','Greece'),(84,'GS','South Georgia And The South Sandwich Islands'),(85,'GT','Guatemala'),(86,'GW','Guinea-Bissau'),(87,'GY','Guyana'),(88,'HK','Hong Kong'),(89,'HN','Honduras'),(90,'HR','Croatia'),(91,'HT','Haiti'),(92,'HU','Hungary'),(93,'ID','Indonesia'),(94,'IE','Ireland'),(95,'IL','Israel'),(96,'IM','Isle Of Man'),(97,'IN','India'),(98,'IQ','Iraq'),(99,'IR','Iran, Islamic Republic Of'),(100,'IS','Iceland'),(101,'IT','Italy'),(102,'JE','Jersey'),(103,'JM','Jamaica'),(104,'JO','Jordan'),(105,'JP','Japan'),(106,'KE','Kenya'),(107,'KG','Kyrgyzstan'),(108,'KH','Cambodia'),(109,'KI','Kiribati'),(110,'KM','Comoros'),(111,'KN','Saint Kitts And Nevis'),(112,'KP','Korea, Democratic People\'s Republic Of'),(113,'KR','Korea, Republic Of'),(114,'KW','Kuwait'),(115,'KY','Cayman Islands'),(116,'KZ','Kazakhstan'),(117,'LA','Lao People\'s Democratic Republic'),(118,'LB','Lebanon'),(119,'LC','Saint Lucia'),(120,'LI','Liechtenstein'),(121,'LK','Sri Lanka'),(122,'LR','Liberia'),(123,'LS','Lesotho'),(124,'LT','Lithuania'),(125,'LU','Luxembourg'),(126,'LV','Latvia'),(127,'LY','Libyan Arab Jamahiriya'),(128,'MA','Morocco'),(129,'MC','Monaco'),(130,'MD','Moldova, Republic Of'),(131,'ME','Montenegro'),(132,'MG','Madagascar'),(133,'MH','Marshall Islands'),(134,'MK','Macedonia'),(135,'ML','Mali'),(136,'MM','Myanmar'),(137,'MN','Mongolia'),(138,'MO','Macao'),(139,'MP','Northern Mariana Islands'),(140,'MQ','Martinique'),(141,'MR','Mauritania'),(142,'MS','Montserrat'),(143,'MT','Malta'),(144,'MU','Mauritius'),(145,'MV','Maldives'),(146,'MW','Malawi'),(147,'MX','Mexico'),(148,'MY','Malaysia'),(149,'MZ','Mozambique'),(150,'NA','Namibia'),(151,'NC','New Caledonia'),(152,'NE','Niger'),(153,'NF','Norfolk Island'),(154,'NG','Nigeria'),(155,'NI','Nicaragua'),(156,'NL','Netherlands'),(157,'NO','Norway'),(158,'NP','Nepal'),(159,'NR','Nauru'),(160,'NU','Niue'),(161,'NZ','New Zealand'),(162,'OM','Oman'),(163,'PA','Panama'),(164,'PE','Peru'),(165,'PF','French Polynesia'),(166,'PG','Papua New Guinea'),(167,'PH','Philippines'),(168,'PK','Pakistan'),(169,'PL','Poland'),(170,'PM','Saint Pierre And Miquelon'),(171,'PN','Pitcairn'),(172,'PS','Palestinian Territory'),(173,'PT','Portugal'),(174,'PW','Palau'),(175,'PY','Paraguay'),(176,'QA','Qatar'),(177,'RE','Reunion'),(178,'RO','Romania'),(179,'RS','Serbia'),(180,'RU','Russian Federation'),(181,'RW','Rwanda'),(182,'SA','Saudi Arabia'),(183,'SB','Solomon Islands'),(184,'SC','Seychelles'),(185,'SD','Sudan'),(186,'SE','Sweden'),(187,'SG','Singapore'),(188,'SH','Saint Helena'),(189,'SI','Slovenia'),(190,'SJ','Svalbard And Jan Mayen'),(191,'SK','Slovakia'),(192,'SL','Sierra Leone'),(193,'SM','San Marino'),(194,'SN','Senegal'),(195,'SO','Somalia'),(196,'SR','Suriname'),(197,'ST','Sao Tome And Principe'),(198,'SV','El Salvador'),(199,'SY','Syrian Arab Republic'),(200,'SZ','Swaziland'),(201,'TC','Turks And Caicos Islands'),(202,'TD','Chad'),(203,'TF','French Southern Territories'),(204,'TG','Togo'),(205,'TH','Thailand'),(206,'TJ','Tajikistan'),(207,'TK','Tokelau'),(208,'TM','Turkmenistan'),(209,'TN','Tunisia'),(210,'TO','Tonga'),(211,'TR','Turkey'),(212,'TT','Trinidad And Tobago'),(213,'TV','Tuvalu'),(214,'TW','Taiwan'),(215,'TZ','Tanzania, United Republic Of'),(216,'UA','Ukraine'),(217,'UG','Uganda'),(218,'US','United States'),(219,'UY','Uruguay'),(220,'UZ','Uzbekistan'),(221,'VC','Saint Vincent And The Grenadines'),(222,'VE','Venezuela'),(223,'VG','Virgin Islands, British'),(224,'VI','Virgin Islands, U.S.'),(225,'VN','Vietnam'),(226,'VU','Vanuatu'),(227,'WF','Wallis And Futuna'),(228,'WS','Samoa'),(229,'YE','Yemen'),(230,'YT','Mayotte'),(231,'ZA','South Africa'),(232,'ZM','Zambia'),(234,'ZW','Zimbabwe');
/*!40000 ALTER TABLE `tbl_country` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_custom_module`
--

DROP TABLE IF EXISTS `tbl_custom_module`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_custom_module` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `value` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `tbl_custom_module_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `tbl_users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_custom_module`
--

LOCK TABLES `tbl_custom_module` WRITE;
/*!40000 ALTER TABLE `tbl_custom_module` DISABLE KEYS */;
INSERT INTO `tbl_custom_module` VALUES (1,2,'Laboriosam qui et.','{\"field_1\":\"2\",\"field_2\":\"0\"}'),(2,2,'Ab omnis explicabo.','{\"field_1\":\"1\",\"field_2\":\"0\"}'),(3,3,'Voluptas deleniti.','{\"field_1\":\"1\",\"field_2\":\"1\"}'),(4,3,'Ea quis velit.','{\"field_1\":\"1\",\"field_2\":\"1\"}'),(5,4,'Voluptate sit omnis.','{\"field_1\":\"1\",\"field_2\":\"0\"}'),(6,4,'Perspiciatis aut.','{\"field_1\":\"1\",\"field_2\":\"1\"}'),(7,5,'Voluptas facere et.','{\"field_1\":\"2\",\"field_2\":\"0\"}'),(8,5,'Enim voluptatem hic.','{\"field_1\":\"1\",\"field_2\":\"0\"}'),(9,6,'Voluptatum eveniet.','{\"field_1\":\"2\",\"field_2\":\"0\"}'),(10,6,'Maxime quaerat.','{\"field_1\":\"1\",\"field_2\":\"0\"}'),(11,7,'Quibusdam eos dicta.','{\"field_1\":\"1\",\"field_2\":\"0\"}'),(12,7,'Qui inventore neque.','{\"field_1\":\"2\",\"field_2\":\"0\"}'),(13,8,'Aut in expedita.','{\"field_1\":\"1\",\"field_2\":\"0\"}'),(14,8,'Esse rem quas ut.','{\"field_1\":\"2\",\"field_2\":\"0\"}'),(15,9,'Repellat sed.','{\"field_1\":\"1\",\"field_2\":\"0\"}'),(16,9,'Ducimus repudiandae.','{\"field_1\":\"2\",\"field_2\":\"1\"}'),(17,10,'Ullam et ipsum modi.','{\"field_1\":\"2\",\"field_2\":\"0\"}'),(18,10,'Error nihil ea et.','{\"field_1\":\"2\",\"field_2\":\"1\"}'),(19,11,'Reiciendis dolorum.','{\"field_1\":\"2\",\"field_2\":\"0\"}'),(20,11,'Non hic qui.','{\"field_1\":\"2\",\"field_2\":\"0\"}'),(21,12,'Molestiae nemo.','{\"field_1\":\"2\",\"field_2\":\"0\"}'),(22,12,'Id repellat rerum.','{\"field_1\":\"2\",\"field_2\":\"0\"}'),(23,13,'Ratione in vel quae.','{\"field_1\":\"2\",\"field_2\":\"1\"}'),(24,13,'Est et officia.','{\"field_1\":\"2\",\"field_2\":\"1\"}'),(25,14,'Eaque rerum soluta.','{\"field_1\":\"1\",\"field_2\":\"0\"}'),(26,14,'Et molestiae.','{\"field_1\":\"1\",\"field_2\":\"1\"}'),(27,15,'Similique quia et.','{\"field_1\":\"2\",\"field_2\":\"0\"}'),(28,15,'Adipisci architecto.','{\"field_1\":\"2\",\"field_2\":\"1\"}'),(29,16,'Nostrum dolor.','{\"field_1\":\"2\",\"field_2\":\"1\"}'),(30,16,'Vitae deleniti.','{\"field_1\":\"1\",\"field_2\":\"1\"}'),(31,17,'Et eos dolorum.','{\"field_1\":\"2\",\"field_2\":\"1\"}'),(32,17,'Eveniet aut officia.','{\"field_1\":\"2\",\"field_2\":\"0\"}'),(33,18,'Est sunt voluptas.','{\"field_1\":\"2\",\"field_2\":\"0\"}'),(34,18,'Enim quis eum.','{\"field_1\":\"1\",\"field_2\":\"0\"}'),(35,19,'Dolores eius natus.','{\"field_1\":\"2\",\"field_2\":\"1\"}'),(36,19,'Molestiae et.','{\"field_1\":\"2\",\"field_2\":\"0\"}'),(37,20,'Minima culpa.','{\"field_1\":\"2\",\"field_2\":\"0\"}'),(38,20,'Totam ducimus.','{\"field_1\":\"1\",\"field_2\":\"0\"}'),(39,21,'Pariatur est et eos.','{\"field_1\":\"2\",\"field_2\":\"0\"}'),(40,21,'Sit aliquam omnis.','{\"field_1\":\"2\",\"field_2\":\"1\"}'),(41,8,'Dolores sapiente.','{\"field_1\":\"2\",\"field_2\":\"0\"}'),(42,12,'Eligendi quos hic.','{\"field_1\":\"1\",\"field_2\":\"1\"}'),(43,9,'Veritatis ea.','{\"field_1\":\"2\",\"field_2\":\"1\"}'),(44,14,'Vel laudantium.','{\"field_1\":\"1\",\"field_2\":\"1\"}'),(45,14,'Non autem alias.','{\"field_1\":\"1\",\"field_2\":\"0\"}'),(46,9,'Dolor sed rerum.','{\"field_1\":\"1\",\"field_2\":\"0\"}'),(47,20,'Quis qui error.','{\"field_1\":\"2\",\"field_2\":\"1\"}'),(48,7,'Nulla enim.','{\"field_1\":\"1\",\"field_2\":\"1\"}'),(49,4,'Ab maiores qui.','{\"field_1\":\"2\",\"field_2\":\"0\"}'),(50,9,'Et animi placeat.','{\"field_1\":\"1\",\"field_2\":\"0\"}');
/*!40000 ALTER TABLE `tbl_custom_module` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_date_formats`
--

DROP TABLE IF EXISTS `tbl_date_formats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_date_formats` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `format` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_date_formats`
--

LOCK TABLES `tbl_date_formats` WRITE;
/*!40000 ALTER TABLE `tbl_date_formats` DISABLE KEYS */;
INSERT INTO `tbl_date_formats` VALUES (1,'yyyy-mm-dd'),(2,'dd-mm-yyyy');
/*!40000 ALTER TABLE `tbl_date_formats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_defered_events`
--

DROP TABLE IF EXISTS `tbl_defered_events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_defered_events` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `value` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_defered_events`
--

LOCK TABLES `tbl_defered_events` WRITE;
/*!40000 ALTER TABLE `tbl_defered_events` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_defered_events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_field_fieldsets`
--

DROP TABLE IF EXISTS `tbl_field_fieldsets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_field_fieldsets` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `field_id` int(10) unsigned NOT NULL,
  `fieldset_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `tbl_field_fieldsets_ibfk_1` (`field_id`),
  KEY `tbl_field_fieldsets_ibfk_2` (`fieldset_id`),
  CONSTRAINT `tbl_field_fieldsets_ibfk_2` FOREIGN KEY (`fieldset_id`) REFERENCES `tbl_fieldsets` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `tbl_field_fieldsets_ibfk_1` FOREIGN KEY (`field_id`) REFERENCES `tbl_fields` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_field_fieldsets`
--

LOCK TABLES `tbl_field_fieldsets` WRITE;
/*!40000 ALTER TABLE `tbl_field_fieldsets` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_field_fieldsets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_fields`
--

DROP TABLE IF EXISTS `tbl_fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_fields` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `brand_id` int(10) unsigned NOT NULL,
  `group_id` int(10) unsigned NOT NULL,
  `type_id` int(10) unsigned NOT NULL,
  `imported` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `label` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `placeholder` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `value` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `force_display` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `additional_attributes` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `brand_id` (`brand_id`),
  KEY `group_id` (`group_id`),
  KEY `type_id` (`type_id`),
  CONSTRAINT `tbl_fields_ibfk_3` FOREIGN KEY (`brand_id`) REFERENCES `tbl_brands` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  CONSTRAINT `tbl_fields_ibfk_1` FOREIGN KEY (`group_id`) REFERENCES `tbl_fields_groups` (`id`),
  CONSTRAINT `tbl_fields_ibfk_2` FOREIGN KEY (`type_id`) REFERENCES `tbl_fields_types` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_fields`
--

LOCK TABLES `tbl_fields` WRITE;
/*!40000 ALTER TABLE `tbl_fields` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_fields` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_fields_categories`
--

DROP TABLE IF EXISTS `tbl_fields_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_fields_categories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tbl_custom_fields_categories_name_unique` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_fields_categories`
--

LOCK TABLES `tbl_fields_categories` WRITE;
/*!40000 ALTER TABLE `tbl_fields_categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_fields_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_fields_data`
--

DROP TABLE IF EXISTS `tbl_fields_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_fields_data` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `namespace` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `field_class` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `foreign_id` int(11) DEFAULT NULL,
  `field_id` int(10) unsigned NOT NULL,
  `option_id` int(10) unsigned DEFAULT NULL,
  `data` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `field_id` (`field_id`),
  KEY `option_id` (`option_id`),
  CONSTRAINT `tbl_fields_data_ibfk_2` FOREIGN KEY (`field_id`) REFERENCES `tbl_fields` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `tbl_fields_data_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `tbl_users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `tbl_fields_data_ibfk_3` FOREIGN KEY (`option_id`) REFERENCES `tbl_fields_types_options` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_fields_data`
--

LOCK TABLES `tbl_fields_data` WRITE;
/*!40000 ALTER TABLE `tbl_fields_data` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_fields_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_fields_groups`
--

DROP TABLE IF EXISTS `tbl_fields_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_fields_groups` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `category_id` int(10) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `tbl_custom_fields_groups_category_id_foreign` (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_fields_groups`
--

LOCK TABLES `tbl_fields_groups` WRITE;
/*!40000 ALTER TABLE `tbl_fields_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_fields_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_fields_types`
--

DROP TABLE IF EXISTS `tbl_fields_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_fields_types` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `multi` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `tbl_custom_fields_types_name_unique` (`type`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_fields_types`
--

LOCK TABLES `tbl_fields_types` WRITE;
/*!40000 ALTER TABLE `tbl_fields_types` DISABLE KEYS */;
INSERT INTO `tbl_fields_types` VALUES (1,'input','text',0),(2,'textarea',NULL,0),(3,'input','file',0),(4,'select',NULL,1),(5,'input','radio',1),(6,'input','checkbox',1);
/*!40000 ALTER TABLE `tbl_fields_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_fields_types_options`
--

DROP TABLE IF EXISTS `tbl_fields_types_options`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_fields_types_options` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `field_id` int(10) unsigned NOT NULL,
  `label` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `value` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `field_id` (`field_id`),
  CONSTRAINT `tbl_fields_types_options_ibfk_1` FOREIGN KEY (`field_id`) REFERENCES `tbl_fields` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_fields_types_options`
--

LOCK TABLES `tbl_fields_types_options` WRITE;
/*!40000 ALTER TABLE `tbl_fields_types_options` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_fields_types_options` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_fields_types_validators`
--

DROP TABLE IF EXISTS `tbl_fields_types_validators`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_fields_types_validators` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `type_id` int(10) unsigned NOT NULL,
  `validator_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `type_id` (`type_id`,`validator_id`),
  KEY `validator_id` (`validator_id`),
  CONSTRAINT `tbl_fields_types_validators_ibfk_1` FOREIGN KEY (`type_id`) REFERENCES `tbl_fields_types` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `tbl_fields_types_validators_ibfk_2` FOREIGN KEY (`validator_id`) REFERENCES `tbl_fields_validators` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_fields_types_validators`
--

LOCK TABLES `tbl_fields_types_validators` WRITE;
/*!40000 ALTER TABLE `tbl_fields_types_validators` DISABLE KEYS */;
INSERT INTO `tbl_fields_types_validators` VALUES (1,1,1),(2,1,2),(3,1,3),(4,1,4),(5,1,5),(6,1,6),(7,1,7),(10,1,9),(8,1,10),(9,1,11),(20,1,14),(11,2,1),(12,2,2),(13,2,3),(21,2,14),(14,3,1),(22,3,14),(15,4,1),(23,4,14),(16,5,1),(24,5,14),(17,6,1),(18,6,12),(19,6,13),(25,6,14);
/*!40000 ALTER TABLE `tbl_fields_types_validators` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_fields_validators`
--

DROP TABLE IF EXISTS `tbl_fields_validators`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_fields_validators` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `customizable` tinyint(1) NOT NULL DEFAULT '0',
  `default` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_fields_validators`
--

LOCK TABLES `tbl_fields_validators` WRITE;
/*!40000 ALTER TABLE `tbl_fields_validators` DISABLE KEYS */;
INSERT INTO `tbl_fields_validators` VALUES (1,'required','The field under validation must be present in the input data.',0,NULL),(2,'min','The field under validation must have a minimum value. Strings, numerics, and files are evaluated in the same fashion as the size rule.',1,'3'),(3,'max','The field under validation must have a maximum value. Strings, numerics, and files are evaluated in the same fashion as the size rule.',1,'255'),(4,'email','The field under validation must be formatted as an e-mail address.',0,NULL),(5,'url','The field under validation must be formatted as an URL.',0,NULL),(6,'numeric','The field under validation must be formatted as an IP address.',0,NULL),(7,'string','The field under validation must be a string type.',0,NULL),(9,'ip','The field under validation must be formatted as an IP address.',0,NULL),(10,'date','The field under validation must be a valid date according to the strtotime PHP function.',0,NULL),(11,'regex','The field under validation must match the given regular expression.',1,NULL),(12,'min_checked','Minmum number of checkboxes to select',1,'1'),(13,'max_checked','Maximum number of checkboxes to select',1,'1'),(14,'custom','Custom field',0,NULL);
/*!40000 ALTER TABLE `tbl_fields_validators` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_fields_validators_config`
--

DROP TABLE IF EXISTS `tbl_fields_validators_config`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_fields_validators_config` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `field_id` int(10) unsigned NOT NULL,
  `validator_id` int(10) unsigned NOT NULL,
  `value` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `field_id` (`field_id`,`validator_id`),
  KEY `validator_id` (`validator_id`),
  CONSTRAINT `tbl_fields_validators_config_ibfk_1` FOREIGN KEY (`field_id`) REFERENCES `tbl_fields` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `tbl_fields_validators_config_ibfk_2` FOREIGN KEY (`validator_id`) REFERENCES `tbl_fields_validators` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_fields_validators_config`
--

LOCK TABLES `tbl_fields_validators_config` WRITE;
/*!40000 ALTER TABLE `tbl_fields_validators_config` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_fields_validators_config` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_fieldsets`
--

DROP TABLE IF EXISTS `tbl_fieldsets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_fieldsets` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_fieldsets`
--

LOCK TABLES `tbl_fieldsets` WRITE;
/*!40000 ALTER TABLE `tbl_fieldsets` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_fieldsets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_forms`
--

DROP TABLE IF EXISTS `tbl_forms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_forms` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `component_id` int(10) unsigned NOT NULL,
  `action_id` int(10) unsigned NOT NULL,
  `value` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`),
  KEY `component_id` (`component_id`),
  KEY `action_id` (`action_id`),
  CONSTRAINT `tbl_forms_ibfk_2` FOREIGN KEY (`action_id`) REFERENCES `tbl_actions` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `tbl_forms_ibfk_1` FOREIGN KEY (`component_id`) REFERENCES `tbl_components` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_forms`
--

LOCK TABLES `tbl_forms` WRITE;
/*!40000 ALTER TABLE `tbl_forms` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_forms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_forms_config`
--

DROP TABLE IF EXISTS `tbl_forms_config`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_forms_config` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `form_id` int(10) unsigned NOT NULL,
  `brand_id` int(10) unsigned NOT NULL,
  `role_id` int(10) unsigned NOT NULL,
  `value` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`),
  KEY `form_id` (`form_id`),
  KEY `brand_id` (`brand_id`),
  KEY `role_id` (`role_id`),
  CONSTRAINT `tbl_forms_config_ibfk_4` FOREIGN KEY (`form_id`) REFERENCES `tbl_forms` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `tbl_forms_config_ibfk_2` FOREIGN KEY (`brand_id`) REFERENCES `tbl_brands` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `tbl_forms_config_ibfk_3` FOREIGN KEY (`role_id`) REFERENCES `tbl_roles` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_forms_config`
--

LOCK TABLES `tbl_forms_config` WRITE;
/*!40000 ALTER TABLE `tbl_forms_config` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_forms_config` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_job_errors`
--

DROP TABLE IF EXISTS `tbl_job_errors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_job_errors` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `result_job_id` int(10) unsigned DEFAULT NULL,
  `code` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `return` text COLLATE utf8_unicode_ci,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `result_job_id` (`result_job_id`),
  KEY `result_job_id_id_1` (`result_job_id`),
  CONSTRAINT `fk_jobs_result_job_id` FOREIGN KEY (`result_job_id`) REFERENCES `tbl_job_results` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_job_errors`
--

LOCK TABLES `tbl_job_errors` WRITE;
/*!40000 ALTER TABLE `tbl_job_errors` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_job_errors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_job_results`
--

DROP TABLE IF EXISTS `tbl_job_results`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_job_results` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `job_id` int(10) unsigned DEFAULT NULL,
  `has_error` tinyint(1) NOT NULL DEFAULT '0',
  `runtime` double(8,2) NOT NULL,
  `return` text COLLATE utf8_unicode_ci,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `job_id` (`job_id`),
  KEY `job_id_1` (`job_id`),
  CONSTRAINT `fk_jobs_job_id` FOREIGN KEY (`job_id`) REFERENCES `tbl_jobs` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_job_results`
--

LOCK TABLES `tbl_job_results` WRITE;
/*!40000 ALTER TABLE `tbl_job_results` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_job_results` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_jobs`
--

DROP TABLE IF EXISTS `tbl_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_jobs` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `component_id` int(10) unsigned DEFAULT NULL,
  `category_id` int(10) unsigned DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `value` text COLLATE utf8_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `component_id` (`component_id`),
  KEY `component_id_1` (`component_id`),
  KEY `catregory_id_1` (`category_id`),
  CONSTRAINT `fk_jobs_category_id` FOREIGN KEY (`category_id`) REFERENCES `tbl_jobs_category` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `fk_jobs_component_id` FOREIGN KEY (`component_id`) REFERENCES `tbl_components` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_jobs`
--

LOCK TABLES `tbl_jobs` WRITE;
/*!40000 ALTER TABLE `tbl_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_jobs_category`
--

DROP TABLE IF EXISTS `tbl_jobs_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_jobs_category` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_jobs_category`
--

LOCK TABLES `tbl_jobs_category` WRITE;
/*!40000 ALTER TABLE `tbl_jobs_category` DISABLE KEYS */;
INSERT INTO `tbl_jobs_category` VALUES (1,'system','System'),(2,'custom','Custom');
/*!40000 ALTER TABLE `tbl_jobs_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_languages`
--

DROP TABLE IF EXISTS `tbl_languages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_languages` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `code` varchar(2) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `is_default` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_languages`
--

LOCK TABLES `tbl_languages` WRITE;
/*!40000 ALTER TABLE `tbl_languages` DISABLE KEYS */;
INSERT INTO `tbl_languages` VALUES (1,'en','English',1);
/*!40000 ALTER TABLE `tbl_languages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_log_priorities`
--

DROP TABLE IF EXISTS `tbl_log_priorities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_log_priorities` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `num` smallint(5) unsigned NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `num` (`num`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_log_priorities`
--

LOCK TABLES `tbl_log_priorities` WRITE;
/*!40000 ALTER TABLE `tbl_log_priorities` DISABLE KEYS */;
INSERT INTO `tbl_log_priorities` VALUES (1,1,'highest'),(2,2,'high'),(3,3,'medium'),(4,4,'low'),(5,5,'lowest');
/*!40000 ALTER TABLE `tbl_log_priorities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_log_types`
--

DROP TABLE IF EXISTS `tbl_log_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_log_types` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_log_types`
--

LOCK TABLES `tbl_log_types` WRITE;
/*!40000 ALTER TABLE `tbl_log_types` DISABLE KEYS */;
INSERT INTO `tbl_log_types` VALUES (2,'customfields',1,'2017-06-01 08:31:30'),(3,'core',1,'2017-06-01 08:31:37');
/*!40000 ALTER TABLE `tbl_log_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_logs`
--

DROP TABLE IF EXISTS `tbl_logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_logs` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `type_id` int(10) unsigned DEFAULT NULL,
  `brand_id` int(10) unsigned DEFAULT NULL,
  `user_id` int(10) unsigned DEFAULT NULL,
  `client_id` int(10) unsigned DEFAULT NULL,
  `author_id` int(10) unsigned DEFAULT NULL,
  `priority_id` int(10) unsigned DEFAULT NULL,
  `owner_type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `owner_id` int(11) NOT NULL,
  `old_value` text COLLATE utf8_unicode_ci,
  `new_value` text COLLATE utf8_unicode_ci,
  `related_data` text COLLATE utf8_unicode_ci,
  `additional_params` text COLLATE utf8_unicode_ci,
  `type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `route` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `ip_address` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `user_agent` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `is_api_request` tinyint(4) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `type_id` (`type_id`,`brand_id`,`user_id`,`client_id`,`priority_id`),
  KEY `brand_id` (`brand_id`),
  KEY `user_id` (`user_id`),
  KEY `client_id` (`client_id`),
  KEY `author_id` (`author_id`),
  KEY `priority_id` (`priority_id`),
  CONSTRAINT `tbl_logs_author_id_fk` FOREIGN KEY (`author_id`) REFERENCES `tbl_users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `tbl_logs_ibfk_1` FOREIGN KEY (`type_id`) REFERENCES `tbl_log_types` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION,
  CONSTRAINT `tbl_logs_ibfk_2` FOREIGN KEY (`brand_id`) REFERENCES `tbl_brands` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION,
  CONSTRAINT `tbl_logs_ibfk_3` FOREIGN KEY (`user_id`) REFERENCES `tbl_users` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION,
  CONSTRAINT `tbl_logs_ibfk_4` FOREIGN KEY (`priority_id`) REFERENCES `tbl_log_priorities` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_logs`
--

LOCK TABLES `tbl_logs` WRITE;
/*!40000 ALTER TABLE `tbl_logs` DISABLE KEYS */;
INSERT INTO `tbl_logs` VALUES (22,3,1,1,NULL,NULL,4,'Antares\\Logger\\Listeners\\UserAuthListener',0,'[]',NULL,'[]','[]','dispatched','USERAUTHLISTENER_ONUSERLOGIN','/antares/login','192.168.20.2','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',0,'2017-06-01 08:31:37','2017-06-01 08:31:37'),(23,3,1,1,NULL,1,4,'Antares\\Logger\\Model\\LogsLoginDevices',1,NULL,'{\"ip_address\":\"192.168.20.2\",\"user_id\":1,\"log_id\":22,\"location\":\"{\\\"ip\\\":\\\"192.168.20.2\\\",\\\"country_code\\\":\\\"\\\",\\\"country_name\\\":\\\"\\\",\\\"region_code\\\":\\\"\\\",\\\"region_name\\\":\\\"\\\",\\\"city\\\":\\\"\\\",\\\"zip_code\\\":\\\"\\\",\\\"time_zone\\\":\\\"\\\",\\\"latitude\\\":0,\\\"longitude\\\":0,\\\"metro_code\\\":0}\",\"browser\":\"Google Chrome\",\"system\":\"Windows\",\"machine\":\"ubuntu\",\"updated_at\":\"2017-06-01 08:31:37\",\"created_at\":\"2017-06-01 08:31:37\",\"id\":1}','{\"log\":{\"Antares\\\\Logger\\\\Model\\\\Logs\":{\"id\":22,\"type_id\":3,\"brand_id\":1,\"user_id\":1,\"client_id\":null,\"author_id\":null,\"priority_id\":4,\"owner_type\":\"Antares\\\\Logger\\\\Listeners\\\\UserAuthListener\",\"owner_id\":0,\"old_value\":\"[]\",\"new_value\":null,\"related_data\":\"[]\",\"additional_params\":\"[]\",\"type\":\"dispatched\",\"name\":\"USERAUTHLISTENER_ONUSERLOGIN\",\"route\":\"\\/antares\\/login\",\"ip_address\":\"192.168.20.2\",\"user_agent\":\"Mozilla\\/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit\\/537.36 (KHTML, like Gecko) Chrome\\/58.0.3029.110 Safari\\/537.36\",\"is_api_request\":0,\"created_at\":\"2017-06-01 08:31:37\",\"updated_at\":\"2017-06-01 08:31:37\"}},\"user\":{\"Antares\\\\Model\\\\User\":{\"id\":1,\"email\":\"lukasz.cirut@gmail.com\",\"password\":\"$2y$10$HanP0Cpy2rA3kMHizITepuGzPFVkPEJuJO0Du6qBMoR3Cr8cxlTUq\",\"firstname\":\"John\",\"lastname\":\"Doe\",\"status\":1,\"remember_token\":null,\"created_at\":\"2017-06-01 08:29:43\",\"updated_at\":\"2017-06-01 08:29:43\",\"deleted_at\":null}}}',NULL,'created','LOGSLOGINDEVICES_CREATED','/antares/login','192.168.20.2','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',0,'2017-06-01 08:31:37','2017-06-01 08:31:37'),(24,3,1,1,NULL,NULL,3,'App\\User',1,'{\"id\":1,\"email\":\"lukasz.cirut@gmail.com\",\"password\":\"$2y$10$HanP0Cpy2rA3kMHizITepuGzPFVkPEJuJO0Du6qBMoR3Cr8cxlTUq\",\"firstname\":\"John\",\"lastname\":\"Doe\",\"status\":1,\"remember_token\":null,\"deleted_at\":null}','{\"id\":1,\"email\":\"lukasz.cirut@gmail.com\",\"password\":\"$2y$10$HanP0Cpy2rA3kMHizITepuGzPFVkPEJuJO0Du6qBMoR3Cr8cxlTUq\",\"firstname\":\"John\",\"lastname\":\"Doe\",\"status\":1,\"remember_token\":\"dCwM3JCrvXsqzBtfl4P1KzcnXoa4E1qgXlJks0gS4EbRFvGvnEu7km0spkMv\",\"deleted_at\":null}','{\"activity\":{\"Antares\\\\Model\\\\UserActivity\":[]}}',NULL,'updated','USER_UPDATED','/admin/logout','192.168.20.2','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',0,'2017-06-01 08:31:45','2017-06-01 08:31:45'),(25,3,1,1,NULL,NULL,4,'Antares\\Logger\\Listeners\\UserAuthListener',0,'[]',NULL,'[]','[]','dispatched','USERAUTHLISTENER_ONUSERLOGOUT','/admin/logout','192.168.20.2','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',0,'2017-06-01 08:31:45','2017-06-01 08:31:45'),(26,3,1,1,NULL,NULL,4,'Antares\\Logger\\Listeners\\UserAuthListener',0,'[]',NULL,'[]','[]','dispatched','USERAUTHLISTENER_ONUSERLOGIN','/admin/login','192.168.20.2','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',0,'2017-06-01 09:21:37','2017-06-01 09:21:37'),(27,3,1,1,NULL,1,4,'Antares\\Logger\\Model\\LogsLoginDevices',1,'{\"id\":1,\"user_id\":1,\"log_id\":22,\"name\":\"\",\"ip_address\":\"192.168.20.2\",\"browser\":\"Google Chrome\",\"system\":\"Windows\",\"machine\":\"ubuntu\",\"location\":\"{\\\"ip\\\":\\\"192.168.20.2\\\",\\\"country_code\\\":\\\"\\\",\\\"country_name\\\":\\\"\\\",\\\"region_code\\\":\\\"\\\",\\\"region_name\\\":\\\"\\\",\\\"city\\\":\\\"\\\",\\\"zip_code\\\":\\\"\\\",\\\"time_zone\\\":\\\"\\\",\\\"latitude\\\":0,\\\"longitude\\\":0,\\\"metro_code\\\":0}\",\"created_at\":\"2017-06-01 08:31:37\",\"updated_at\":\"2017-06-01 08:31:37\"}','{\"id\":1,\"user_id\":1,\"log_id\":22,\"name\":\"\",\"ip_address\":\"192.168.20.2\",\"browser\":\"Google Chrome\",\"system\":\"Windows\",\"machine\":\"ubuntu\",\"location\":\"{\\\"ip\\\":\\\"192.168.20.2\\\",\\\"country_code\\\":\\\"\\\",\\\"country_name\\\":\\\"\\\",\\\"region_code\\\":\\\"\\\",\\\"region_name\\\":\\\"\\\",\\\"city\\\":\\\"\\\",\\\"zip_code\\\":\\\"\\\",\\\"time_zone\\\":\\\"\\\",\\\"latitude\\\":0,\\\"longitude\\\":0,\\\"metro_code\\\":0}\",\"created_at\":\"2017-06-01 08:31:37\",\"updated_at\":\"2017-06-01 09:21:37\"}','{\"log\":{\"Antares\\\\Logger\\\\Model\\\\Logs\":{\"id\":22,\"type_id\":3,\"brand_id\":1,\"user_id\":1,\"client_id\":null,\"author_id\":null,\"priority_id\":4,\"owner_type\":\"Antares\\\\Logger\\\\Listeners\\\\UserAuthListener\",\"owner_id\":0,\"old_value\":\"[]\",\"new_value\":null,\"related_data\":\"[]\",\"additional_params\":\"[]\",\"type\":\"dispatched\",\"name\":\"USERAUTHLISTENER_ONUSERLOGIN\",\"route\":\"\\/antares\\/login\",\"ip_address\":\"192.168.20.2\",\"user_agent\":\"Mozilla\\/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit\\/537.36 (KHTML, like Gecko) Chrome\\/58.0.3029.110 Safari\\/537.36\",\"is_api_request\":0,\"created_at\":\"2017-06-01 08:31:37\",\"updated_at\":\"2017-06-01 08:31:37\"}},\"user\":{\"Antares\\\\Model\\\\User\":{\"id\":1,\"email\":\"lukasz.cirut@gmail.com\",\"password\":\"$2y$10$HanP0Cpy2rA3kMHizITepuGzPFVkPEJuJO0Du6qBMoR3Cr8cxlTUq\",\"firstname\":\"John\",\"lastname\":\"Doe\",\"status\":1,\"remember_token\":\"dCwM3JCrvXsqzBtfl4P1KzcnXoa4E1qgXlJks0gS4EbRFvGvnEu7km0spkMv\",\"created_at\":\"2017-06-01 08:29:43\",\"updated_at\":\"2017-06-01 08:29:43\",\"deleted_at\":null}}}',NULL,'updated','LOGSLOGINDEVICES_UPDATED','/admin/login','192.168.20.2','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',0,'2017-06-01 09:21:37','2017-06-01 09:21:37');
/*!40000 ALTER TABLE `tbl_logs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_logs_login_devices`
--

DROP TABLE IF EXISTS `tbl_logs_login_devices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_logs_login_devices` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned DEFAULT NULL,
  `log_id` int(10) unsigned DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `ip_address` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `browser` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `system` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `machine` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `location` text COLLATE utf8_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `log_id` (`log_id`),
  CONSTRAINT `tbl_logs_login_devices_fk2` FOREIGN KEY (`log_id`) REFERENCES `tbl_logs` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION,
  CONSTRAINT `tbl_logs_login_devices_fk1` FOREIGN KEY (`user_id`) REFERENCES `tbl_users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_logs_login_devices`
--

LOCK TABLES `tbl_logs_login_devices` WRITE;
/*!40000 ALTER TABLE `tbl_logs_login_devices` DISABLE KEYS */;
INSERT INTO `tbl_logs_login_devices` VALUES (1,1,22,'','192.168.20.2','Google Chrome','Windows','ubuntu','{\"ip\":\"192.168.20.2\",\"country_code\":\"\",\"country_name\":\"\",\"region_code\":\"\",\"region_name\":\"\",\"city\":\"\",\"zip_code\":\"\",\"time_zone\":\"\",\"latitude\":0,\"longitude\":0,\"metro_code\":0}','2017-06-01 08:31:37','2017-06-01 09:21:37');
/*!40000 ALTER TABLE `tbl_logs_login_devices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_logs_translations`
--

DROP TABLE IF EXISTS `tbl_logs_translations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_logs_translations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `lang_id` int(10) unsigned DEFAULT NULL,
  `log_id` int(10) unsigned DEFAULT NULL,
  `raw` text COLLATE utf8_unicode_ci,
  `text` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`),
  KEY `lang_id_idx` (`lang_id`),
  KEY `log_id_idx` (`log_id`),
  CONSTRAINT `fk_tlt_log_id` FOREIGN KEY (`log_id`) REFERENCES `tbl_logs` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `fk_tlt_lang_id` FOREIGN KEY (`lang_id`) REFERENCES `tbl_languages` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_logs_translations`
--

LOCK TABLES `tbl_logs_translations` WRITE;
/*!40000 ALTER TABLE `tbl_logs_translations` DISABLE KEYS */;
INSERT INTO `tbl_logs_translations` VALUES (1,1,22,'User #1 John Doe has been logged in','User <a href=\"http://192.168.20.3/admin/users/1\">#1 John Doe</a> has been logged in'),(2,1,23,'Device details 192.168.20.2 has been updated by #1 John Doe with log USERAUTHLISTENER_ONUSERLOGIN','Device details <a href=\"http://192.168.20.3/admin/logger/devices/1/edit\">192.168.20.2</a> has been updated by <a href=\"http://192.168.20.3/admin/users/1\">#1 John Doe</a> with log USERAUTHLISTENER_ONUSERLOGIN'),(3,1,24,'User activity #1 John Doe has been updated','User activity <a href=\"http://192.168.20.3/admin/users/1/edit\">#1 John Doe</a> has been updated'),(4,1,25,'User #1 John Doe has been logged out','User <a href=\"http://192.168.20.3/admin/users/1\">#1 John Doe</a> has been logged out'),(5,1,26,'User #1 John Doe has been logged in','User <a href=\"http://192.168.20.3/admin/users/1\">#1 John Doe</a> has been logged in'),(6,1,27,'Device configuration  has been updated by #1 John Doe','Device configuration <a href=\"http://192.168.20.3/admin/logger/devices/1/edit\"></a> has been updated by <a href=\"http://192.168.20.3/admin/users/1\">#1 John Doe</a>');
/*!40000 ALTER TABLE `tbl_logs_translations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_memory_tests`
--

DROP TABLE IF EXISTS `tbl_memory_tests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_memory_tests` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `component_id` int(10) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `value` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`),
  KEY `component_id` (`component_id`),
  CONSTRAINT `tbl_memory_tests_ibfk_1` FOREIGN KEY (`component_id`) REFERENCES `tbl_components` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_memory_tests`
--

LOCK TABLES `tbl_memory_tests` WRITE;
/*!40000 ALTER TABLE `tbl_memory_tests` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_memory_tests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_migrations`
--

DROP TABLE IF EXISTS `tbl_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_migrations`
--

LOCK TABLES `tbl_migrations` WRITE;
/*!40000 ALTER TABLE `tbl_migrations` DISABLE KEYS */;
INSERT INTO `tbl_migrations` VALUES (1,'2013_04_11_233631_antares_memory_create_schemas_table',1),(2,'2015_08_14_152342_create_tbl_languages_table',1),(3,'2015_08_15_152342_create_tbl_country_table',1),(4,'2015_08_16_152342_create_tbl_date_formats_table',1),(5,'2016_03_02_165338_create_failed_jobs_table',1),(6,'2016_03_03_105255_create_queue_jobs_table',1),(7,'2016_05_03_105255_create_defered_events_table',1),(8,'2016_11_16_152342_create_tbl_brand_options_table',1),(9,'2013_04_12_000836_antares_auth_create_users_table',2),(10,'2013_04_12_012833_antares_auth_create_user_meta_table',2),(11,'2013_04_12_013201_antares_auth_create_user_role_table',2),(12,'2013_04_23_132623_antares_auth_basic_roles',2),(13,'2013_05_27_062915_antares_auth_create_password_reminders_table',2),(14,'2014_04_16_043555_antares_auth_add_remember_token_to_users_table',2),(15,'2015_12_02_2_create_tbl_logs_table',2),(16,'2015_12_02_3_create_ tbl_logs_login_devices_table',2),(17,'2015_12_10_091059_create_tbl_logs_translations',2),(18,'2016_04_21_094028_resource_map',2),(19,'2016_10_12_000836_antares_auth_create_users_activity_table',2),(20,'2017_07_24_082030_create_notifications_table',2),(21,'2015_10_23_115748_create_components',3),(22,'2015_12_10_091059_create_tbl_reports_table',4),(23,'2015_12_21_135215_create_tbl_translations_table',5),(24,'2015_10_23_115748_create_forms',6),(25,'2015_07_24_082030_create_jobs_table',7),(26,'2015_07_24_082030_create_customfields',8),(27,'2015_08_28_092726_create_tbl_memory_tests_table',9),(28,'2015_10_23_115748_create_api_roles',10),(29,'2016_04_27_2_create_ban_rules_tables',11),(30,'2016_05_31_1_create_ban_emails_tables',11),(31,'2015_07_24_082030_custom_module_table',12),(32,'2016_04_04_1_create_two_factor_auth_tables',13);
/*!40000 ALTER TABLE `tbl_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_notification_categories`
--

DROP TABLE IF EXISTS `tbl_notification_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_notification_categories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_notification_categories`
--

LOCK TABLES `tbl_notification_categories` WRITE;
/*!40000 ALTER TABLE `tbl_notification_categories` DISABLE KEYS */;
INSERT INTO `tbl_notification_categories` VALUES (1,'default','System'),(2,'users','Users');
/*!40000 ALTER TABLE `tbl_notification_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_notification_contents`
--

DROP TABLE IF EXISTS `tbl_notification_contents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_notification_contents` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `notification_id` int(10) unsigned DEFAULT NULL,
  `lang_id` int(10) unsigned NOT NULL,
  `title` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `content` text COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `notification_id_1` (`notification_id`),
  KEY `notification_contents_lang_id` (`lang_id`),
  CONSTRAINT `fk_notification_contents_lang` FOREIGN KEY (`lang_id`) REFERENCES `tbl_languages` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `fk_notification_id` FOREIGN KEY (`notification_id`) REFERENCES `tbl_notifications` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_notification_contents`
--

LOCK TABLES `tbl_notification_contents` WRITE;
/*!40000 ALTER TABLE `tbl_notification_contents` DISABLE KEYS */;
INSERT INTO `tbl_notification_contents` VALUES (1,1,1,'Sms notification send failed','Sms notification [[ title ]] has not been sent.'),(2,2,1,'Sms notification send success','Sms notification [[ title ]] has been sent.'),(3,3,1,'Email notification send failed','Email notification [[ title ]] has not been sent.'),(4,4,1,'Email notification send success','Email notification [[ title ]] has been sent.'),(5,5,1,'User has been created','User [[ user.firstname ]] [[ user.lastname ]] has been created.'),(6,6,1,'User has been created','User [[ user.firstname ]] [[ user.lastname ]] has been created.'),(7,7,1,'User has been created','User [[ user.firstname ]] [[ user.lastname ]] has been created.'),(8,8,1,'User has not been created','User [[ user.firstname ]] [[ user.lastname ]] has not been created.'),(9,9,1,'User has not been created','User [[ user.firstname ]] [[ user.lastname ]] has not been created.'),(10,10,1,'User has not been created','User [[ user.firstname ]] [[ user.lastname ]] has not been created.'),(11,11,1,'User has been deleted','User [[ user.firstname ]] [[ user.lastname ]] has been deleted.'),(12,12,1,'User has been deleted','User [[ user.firstname ]] [[ user.lastname ]] has been deleted.'),(13,13,1,'User has been deleted','User [[ user.firstname ]] [[ user.lastname ]] has been deleted.'),(14,14,1,'User has not been deleted','User [[ user.firstname ]] [[ user.lastname ]] has not been deleted.'),(15,15,1,'User has not been deleted','User [[ user.firstname ]] [[ user.lastname ]] has not been deleted.'),(16,16,1,'User has not been deleted','User [[ user.firstname ]] [[ user.lastname ]] has not been deleted.'),(17,17,1,'User has been updated','User [[ user.firstname ]] [[ user.lastname ]] has been updated.'),(18,18,1,'User has been updated','User [[ user.firstname ]] [[ user.lastname ]] has been updated.'),(19,19,1,'User has been updated','User [[ user.firstname ]] [[ user.lastname ]] has been updated.'),(20,20,1,'User has not been updated','User [[ user.firstname ]] [[ user.lastname ]] has not been updated.'),(21,21,1,'User has not been updated','User [[ user.firstname ]] [[ user.lastname ]] has not been updated.'),(22,22,1,'User has not been updated','User [[ user.firstname ]] [[ user.lastname ]] has not been updated.'),(23,23,1,'Login to Antares from new device detected','<h2> Login to [[ foundation::site.name ]] with new device detected</h2>\n<table style=\"width:100%\" cellspacing=\"0\" cellpadding=\"0\">\n    <tbody>\n        <tr>                    \n            <td style=\"text-align:center;padding-left:4px\">\n                <table style=\"width:100%\">\n                    <tbody>\n                        <tr>\n                            <td style=\"font-size:12px;font-family:Arial;font-style:normal;font-variant:normal;padding:8px;text-align:left\">\n\n                                <p>Welcome, [[ user.fullname ]]!</p>\n\n                                <p>\n                                    Apparently to log in to your account [[ site.name ]] [[ date ]] about [[ time ]] has been used a new device:\n                                </p>\n\n                                <ul>\n                                    <li>Localization: [[ params.location.city ]], [[ params.location.country ]]</li>\n                                    <li>IP Address: [[ params.ip_address ]]</li>\n                                </ul>\n\n                                <p>This device has been added to your list of known devices, which you can view here:</p>\n                                <a href=\"{{ url_external(\'antares::logger/devices/index\') }}\" target=\"_blank\" >{{ url_external(\'antares::logger/devices/index\') }}</a>\n                                <p>\n                                    If it was someone else, we recommend removal of the device, change the password to your account and notify the administrator. Your account can access an unauthorized person.<br/>\n                                </p>\n                                <img style=\"padding:8px 0 8px 0\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL4AAAApCAYAAACLF5NmAAAZc0lEQVR42u1dB3hUVdrOTBpIl0UULAhrQRT4F13Lj23FtfxrL7iKyloQxF0L6mPZFXbBruuv8IuAYIEU0ugJvQghdAVCIDSB0JvA3Hvnzq3/+517zuRmMpUku7JOnuc8CTP3nvp+/fsOKbZtp8RqFppu2Wnuz1YdMS9+d4M24K7v/FkXTJfXNs2XjqROlIy0iZKN31ZmnnT8vKly5c3z/ZPfXBt4deEB4/KAWf2+gf7Qryee8ZMt2eq7xXzAtGyvzQF6JGA1GV6pPX7NHGVu5kRJSpngs1Oy0HIk2+MAPti8aPR5ShYanvPmSnqXGcqKwesCg7b5rLYuAkhNHkREhuMhhqMnmcS/FvgClKppe96v0Pq1myRvTfnWATsBOyNPMtPzGJc3icun1gS/hc8tfG/iOYM+S8lGw/tN8qTDf1kdGHJQtZqJcazkYSTbzwH4BldtSg8Zl3UrUb5LGe9w9sx8yUh3gBwK9JiNiAAqkA7ub1N/Z0+WK3N36rdx7uZNcrVqTk9S9phmNf5oozbg7fLAi7sVq5XruyR46xv4bn1++Gbt0fQcqDTg8AC8zjm7XddGkoD6Y6oQ1KDnwf1NDn4zebDB/X/lh8DglHEn7JSvfPY9i/3jkqphAwJfbPpf1wVeJ7UkzVFpjPoAfAQJYNA4MJK/1izbk+T81WfwxHL167Qsn54G++jqOcpil82VBG99Al9s+Jsc9KSWpJ2ESpNgsxrlSxqNd8d3/gmaGdT5Pb904PdboY5hDgTYRtfOVeYngd8AwBci9DOoN4mCHpybnq/VICnstDgJgIH/G5/99Er1QzuM+7Q+9GZao/CSuBs+91oNPE4ixCzW/vQK9UsB/J5zlQUnC3yLvxdu7TrNy6pfJmPxffg5My+3yzKl7LB5qTfb589w/PExQc+Ance9NWT8hjZydeY6RBAPATTKA/jx3qht+v31pc9ibZ44+/HUZTwrzvfpGTMG0OoT+HxOnjjn5a3DPjPCMkP2IFqf4mzCMCHPyRCbEYa4I/XHDowm5zfs1M7F8gra5Fg6PYGduLw4lM4zFPuxZao9bINmj9yi259Uavag7wP2TfP9dvMCThQ5DqHEMHpN6LMmgmGHt0tWW2bs1uEw3EDc67daFlXpt76xNvA6dOfPn1yujuu/Uv3on5u0fksPGV0xTpAAzAQ5oHuOMvZx9j7jyg/hjYHL9p0BK9V339mgvTC5Sr/pEHffRiNqOigE+jIJQE+tUMe6gL+QPtNNOz0eAjO5veQKOHb5dJP2JObz4ZMr1HHYg5Gv/RB4M2+nfvsexTr9ZOMqNE7oGQFwKSc0q5FihJfa9HyscRKRkPEyHHd/QbfluxVaf6biwNsSS60RgSl4Guz5+w0bennEnx2SZSPCa585SWaEEgv8pGIRofReqo6pC9cX720+YbZ/ern68emF0h4GIiLCCbwJyZQtWXDZln65TX/IcgEwznHYc3TIb2/Qnus0VS5nki50HPxuWyTvIkLYKVu/imdtePZzAfzr5ilzToYQv9qu39tjprLIkwMnwvjw82pZIO0HIxi+4bjZgb+fmug4yw+bXRChfw2R+ikXzZDXnj1F/rF9kbR1xGbtEfda3Wuukq3WU3YbN8F7+PTHm7Q/j96q9Vly0PgN4kbeeCSGe65EbGBg3cegDzhmXqQ2aov26KIDRg83AQrwsz8Oq1bT1kXyntRcFnQyo6k2KdnsAO2iKiMIbiymFvhDP9urWHbvUpVtdgzws6CXJ1vSVx4xOycCwlDQf1qp9WmWJx2kMSngdlq+FKCgG6lfRLw0XmMQeiNyrXJ1reccZUalz2ofz7hinPXHzE7di5VSFtzLcfpME5HrHCeKTWOwaDbGaFMo7czbpd/i7kMc8PQ9xg23zPdPvHG+v6A9wEMxD2qtiqRD9Nl1c5RJONTXdCu8Di3m/KNkndFrvr+IEzaLv2BeGgsk5jqN9oL2RMyr8UTpKAD4lACUFQfoSTLDI/cNxtAd9dbpW6jAbSbJVQByqjs2tO6Y2fGhUv+oZvk4mywXIXIiv2CavA4B0wEArDfaOYi9y9+l//7SGXIZMbAaffH+zp8qbxhaHvgLaTUC/KyD/63UnuAGrRGV0wP0nabJ9mafg2gCNjYg+IOUBnsrvgMl27rrc9VFABCvMTm/4Pp9ytSR7g2LE/Ts2dfXBd6kNRFoTiuQVAbC8cw96z9nqrzt4mJlY6sieb9IqcD6rMYFUoD+PrNI+nHNT+ZF0TiO+Px7PNeGS5MmYhz83aJQOtS5WFnZpURZdsYkeTc74GzXXCb4LNgyD3JulSqkxlmT5W0CrAQgsSeeXG5LUfvaZ+ftMm4N5aBiThtPmB3OmSxvYmAG2BmxT3BA2apQPnDhDGXjedPkbdhnRYxF82JEgT3rt1J9J1pEXYwDCdGxPUXzHWZm0lhi/awh/nDlHGUO+qHUi3QeG3osM1f6ie+5QyA5UnC96Mdi/8Y8upcoi8uPm+eHA7/490ebgF2+hnRhb2Zx+1J8RnsHx8mVs5XZUDebkwpIi0i5fLay2JMlWZF0+3T6jcm0LpRscMMaYCbODhXBvnGen6ibGbJNoddfNF22n1ul2hXHnQeJEAQxYGOjcn4yrAmwzQvlw/uhm8cbsRQgeB/6NW0cjGVdEFHHafIP0LufKj9mdpB0O4MO44DfagF9/Oo+S9XPIO38tFGNCZgACFSz7Ttkq004O8Piei02sek5U+SNtMkM0DhMcJfyMVCZEGltTXtrOTlOTSfv1ntdPVuZRXMhDxb2FFLNpyF5r4eYO4CfCqKsZJIju1oqBbk0O0wfO0RI3F41JAbZJpjrPqzp3ClyRXBOlEeVI+l/LFW/mLnP6En7CTvBg7HSK0+Y536+WevbBQTKz8MQ3rW/rQ+8HE4d494ar0+3Mi+cLq+hNQeJGWOC2Fc/tFT98rW1gaFD1gVehUQ4U+zfkPLA8yI2xKSsQ5jHgb8lvRb4Sy6YIa8XxN2E7+cZRVIVJEQnN8Fx0HuWHDK6YUwnJYaYRK4U6DnXP/vxZeqoPsvUMVfNUeaJc21RJMlEiLA//8RUHVIncAhM3EXl9phE7i69Bug3gwhwmLbI36HD8bq5kyM+bUiUoIQgQoHxZmOzbQ+nyAhqlUFjfvOjfm887k2xGeSZIkCRZ4qBHn3AH/7ecc1Kj/b+dweN7kw/F+DH3G9e6C+0wnB9AYZnVqrv09oF6G+Yp0whYnB7itweFSIEGP1D6FkcfICJ9enKGslg3ge2vrn7jd/ev9g/9g+L/F8ju3WLUHWgiu7/A4J8ty3wjwdhD7RCmIGY012L/d/S3Nmc0H/7yfJm6jPa2kmleGGNM68MwSyyfNYCZNSGgl+cw3ucudA4dI5nTZK3TIIBr5nhxyDVjuZFfRPRg4DN51YFhpENJp6hnDAwoquIM3OC8hOuzp8mrwfzOI3Owe2lw37ksDlPlHTYcPsEE3E32B6dfztLmU9zxTz9eOYKOpOUoeXa83zBRkS9HoPfuMDPwEugtbjRilwbmx9i0GcvGvPt53NuhUHfrtCC79PPtD0G6zcS8GmDPFAHHi5TR8Wj7pjcF3/dfGUGzYmpLdjol74PDBYg5O42r/AxcxekV4jhKsVqizVt9uZA7cl33p+82/hdiC7u4Tp0W8zRh0M06Plf43CQW5NJ3+Hw03n/QZ82qTNYOlvDg6Xq6CCnxN6M267fF464n11VbdxeH8W4FXMr2Wtczc9Dg4S22hRJOyFxz+Z9pwvPhmimo4LQmIywB68PDOJcOEBSr8dsZRHeIWnidXF8Al9Kt5nKEgDJpPUj6fDo6qNmR/G9wV2JGvdAkQ155mR5B80Je6bhPQ1rvjukz+AYRDz3gvjdezRwtaN+QVqxPSKvUdvJchUYLdPr36vQnmXvWnYGd2MGXatEUFk/6nch76x7UMe/fZG/gBaZHg346BjWdw29/nq4KrnYjhncEsSz8KDTh8776DpTCeph4dIZ6LtLSpTVhhUUsVE9K2WHjcvIwCHPlAfjXTFbmUuHxAEfVVWiQ6Lfs/cbV2KuTOSjD+uG+cp0rkqkusFJRiDnrMwuyNmp/4+7n0jzpEMGgbWEYXeIqTtQMSHmp4gx6BkcVCM6OLc787/hzjQcMGUYtX3l7N84y4kC+MSxp+xxiDYQZU5CTRLEf9MC/1Q6K96HLaSF2x0I7tus9ST5QCo3iuEeHc7HyQgXj4Cb+7mgZMTzg5F0J553A96VJ0Z74LmkWFnhzWYquA611bfNZ54lnoWkOCuDGA/Dp0TzvIb2AQZspuny3ddSU4VXB2KkgvSzcAEr4ZkAtdonMCOL6+hTiVtPYGIrrqisAP518/xB4qGft9YHbC7+wur5KY6ef2S/Gl3PFxv8KiV1ERjzGRit4r3GNZzTpyYSMe21kJiBjwwvEwCQdkhmW8HtxTMPLPV/QxKJ1BDsz07ovBnxRCuF5Hqg1OFopBqS8UuZmO4c/HgDWIKg4TVr2bRAPsr2DXPvOU8pScQxIIANrtgNHJl5gDzYywGr1A/E3oixALp2AJyUSYYoniFXuHtv3NFbnLXn4mJ5NewMiyRjh2nKRsWw0ilWIThzSEtVeRwDWsHvmPTOdwKbfy/XXnC5Qn/VpEA+RuslJvcQbBgzzJpE1FwEs4J+fBzsMa7fW5G4/S0LawL2waWq7UkA+G5C2nSi2sVTss9RdzIiAJ8sfgDL/P4n48Jobi3BjaEOlJD0IhujwzR5E/mDo0mKcMCn52FX3OMiILuwynE96g442BzgrVggDDFIhWJu9HrjHQOBs/6c6E2sVcW+nOuOgMYLfEHUM/ca1zKDloNk5Fa9j5uIEog+p8ATtVp4WmB4LrJC1BGoT+1wRkHgD92gPROqqoln4UzoiDPUIIVNehb2yTOJuKZhLK9iBjokI/Z5ppBw5Jy4pFheA4lgZtKaMdces5SF5AZFsO4S4QqNFJlP8Ubx2xOwabL9VwaCHhxSUSCCIqooUbk+Gcg79SDw4Q6zYxjVFo2z+FBtI8vNWbju54FXoFx4P5DwlptoACzoojxqXoB+SN1hQZ9/Vmr9hX4pOPpvZinLhOvugVK1IN6xBDgQWHpYuAEBfB3A73SSwGfPjtyi9eGqJ4tJLD1kdks0BiKkA3ll2LjYSxjY2/w8ACT62hgC/GFhgC/2Akbt7Uz94nUY8LTMgQE+4c7F/qy78TtSu8v5fjxiGdspvkR7TX/DI5cu9gDexAfJA5XuxGO0YOoMgnXku79/iX8sYjmPw/64yG1PMOCnRY+iso5eWuMAnzQdUJINlxtTgdISAL7oa/S2auDD1cU+904Mn8sj9Hy4ra6JAnwP163TOk2HDzzXASMikV8kzPG4KN8tW+3gkpXT+MHCV/xyKPB71AR+YaLAH7tdfyQE+B3rAvxPNzsShBErDh5cr1OiwBd9Pb8m8CEDkAP8KgC/UaLAd62zr/DmBKvwRMnqhChNfO/49in4Z55eJB9G1d7p7r2GQf4SjGYlWCiVxySAKXBAn0MD0BC9XgyDurcAf1wcf8Cqao5PrfNJcHzR15iTA37Pk+D4ExPl+Fa1vtyuWQMDf1w9A78+OH4DAf+JGsDPrY5ox92ynRSZxvmyKoBv8bgFDyJeiGKmoajpXg3poAbTMnJYvMCgqDXrA9LhkTJ1OKlzcen48BbUcEXetyRxHb+hgF+fOv4pCnyh4/cM0fEfTVTi1TPw2bwm7NDv4o4QFmQ6e6q8EQxqJdqqeBtyf1YgY2DVNXOVaaTquCW9O6+IAE3pI1CBej+1XP2si2MfmMJdz5jCt44xTl6dDdyrY0by6rSbItuyXp2eUFClR/TG/DuALzYc0cK36uLVORWBL0o1KSLbrECmK16EV2dmonUN9Ql8MU8KkMKjYwp7iVIMKKFMdQqOIjZ6hq6j0VzPWTFSosOsh2rGL32sTP0Me+jUisNZAjxvJd9vXjQ/fjp3RQJETMcnHzylHsCrEQxe/buBLw5k+RHz0hTHyhd+/Hnx+vFPVeCH+PFz3X78Sch8jMeP3xDAFwXzZBifC+nrzXUcFXAKlPI5p7si2+Gae53e0Ci4O71Z5BS5Cm5SuaEefB5p2J8Kzu+huWDSf44ZuSWXZoi6Q25JJGcFwZ8eo9ikIYEfI3I7JELk9pQDPg/Ze+ON3CK3atcPPzlu0tDIbUMD3/1vpGkMdgf7RvPkPPLXh0S4nSAfH6f0oNGVskzjydUKV6ttOWNkUFBx/A79bmFrME2GXD1wB6kxc3XAQREJrJGrs/aYaV9WzHN1sh3dOvQ9YQA3NPBFrs4K+HC9Ob4Az9XReK7OB8jVyYiW080O4OcH/LGufPx5Lu7uMUMKK1y5Ol+7c3WQ5LUVUc2rolWeCWKqb+DzYhjPLtk6o0m+dJTSG0SKw5JD5n+5/OvB4JV49+Gl6gjqG7UCe3CmXdzzFL+XoQbgjgX+bNSIv+reX3ejFAaeIDdI7Ddw5We6E+VkxJOdScUkKKKoAX5UHNkIxthXzFJsgMVJUMutmUb7rwB+SHZm/zDZmWuRndkPaa4dQQSZpwLHR8rCSIoOk/3Vpkje58pSDJt2QF4O6PrNO8CH7c7OTHGyM0dDIlyL7M1WATO8p6e+ge/ek4+RFUleFZoTIrh2U4AfRSqP+fSaahjS2tvdh6tUqN+mNH/KFF2nveLun3F37EH3mcpS+p7OGglvQyU9vEqHdfeE9Nsn8qqQZ1TKvvgMTv648vGxmV2KZXsXB38gpPgE/m973U+m/QNvlJuD6wZZFiYCDHXx4/dMFFh/XR94I0I+vnoWCjwQhKu4rETZcMkMpQIFMqNBDI0EJwkD/EGhwL98llImgP9gHQNYOBCtMgzwGQGLpLEclqp7/NISpQxuuyV3LvJnI2x/hlt1ceXjn8tSk3kKdHU+PjhooXQQ8Y5NiM7S+su7zZCXo5Cjl1A9OPA/iAV87KNPAB+VZ/2iGdJiX6Bnf0JAbSQKdTAneN8qsH/jkO/zye8X+ieTZBCZmTCK7fRcybfqKCtIcnN81t+duLeVxm9WiJTjLMbcKhC/GfFOhfYSLk0Y+OL3gX8gx2kW9s5K5YU31DeCarcx3YlSPpH2WkUGSHqsCiwMcB68PEgfDQLYnWsf+kMEwP2pDHiUu0/eIXp8WwMA3/3cF1u1h1vkSwd4EIO5+mjxHpcvmf2Nwo7PUaYm3kcNansUkkhk8Hsn+AwA/9VQ4INrrCZOTffe3L1YnZoo8Edt1R/3jvdZpPfSviOK/WsBXm6Ie0i/PQ3XLaY4jCOQzos0WMXUVycoj+b9MBFTBg4qb0QZYEHECqwc/nsCA/dm3Un3FRz/I6yb9smE9NgF4Dd2942Uhfb4zg9C1PCcNaRcGxgN+DwTlO0N+duF+sY8Pbm1C0fSuXaA6rkDRbudugO3bWPymgBIr5YITC0QOf7BvkIqsEQRFT33Bu5urVFzS0Ua8dTcZrgqZh4tU23kO9vRfuagJjfFxfFHbNGq63EhIdJcrtP6Ar772S0Qnai5/RApurtr1dyKBi5UsEu/VbyLApXWJBnYRqJ4AZmYwYMV/d6zBOV2X/kYAImzxOs6FO9jX65ithHGRiXYPgRmWoTj3siKvbF5nrSPPeuumf2KcmQCz0fQrYMg+Qbpv1BD51MxSq2aWwIJiJ5yXCj3RePZlVjPMPqc9h4VYXtV7hWyuM4O6dgYLsHNQs2Yutu4Idb5WHZ1ejNSvW+8fKYyD2C0gvPJqq4DphLIR5aqw1Hpd3YkT5bYJyRPZtA9rK0KsEfudbkIAOpNACWlJUh6u170J1xAqaT3dSWdKSv2LQvCg0OdkjjCxpGOZUO82LCe7Wzk42ShocyMuAkNzAiGfkO1YOoQqNXuu1yNmKRWV+CHPg9gNUehxM1vwRCiwmq6aYDSfvuWqWNHbNEfc3Em5h2iUHirPGkPKnpmUSagO4+duDF06RYvrA4MRobpK5JuZSZyj4x4jjwNz5Sp78NI62rbNfPeQ+taP0ZyF+b+D8zr739bFxiKSqJ+AaeW1WPFd8tC5xGVWt+Bq9R3sf4xtH78HvssbpoABz/HlYTnoSq1riXK0tPzpSqc4Z9CKr1Yn3CKXDBgufruWF5LcDI3IlDxD/LoB8L58AmlmADAw1As3ptSju04iv7d9wHR3aLZO/Q7cIvGm0/Q+eIWCUiXYf+He6LWHDUvDHX91thgWM8Xp+X4ZFJ3KCU3nsQzJjqzJLsWNxHcNaf62vA0nqtB77UolNl7sa4YrAvwE7xXp1ZDAcVpDXipkSdc6kW0mwzqcNtEwvfUUPAHKnDjhlh7PHMy47h/KJH7jHiBTGrEm9Q+36o/VNeb1DJ4y8yrnc+TznV6UiNi5frUB/DjvEktNQrgwnLy+ri7Xswnjis0POHmbdmJX/gUrkXK8Y9VbB9p7+pyAVS8wcZw3F+PcL7h1hDp7syXhZenvm5IDk2FSIvzUtn6Av7JEssv9d5+6z/8SvJotyUPIvCnNuBtyT934CfbL/R+fNxs1Rt3oBwP3o+fV//cPwn8ZPtZ/o8oSPzqfMVMZa4r0d/IyIvvUtkk8JPtlPw/sHTXvYSI7vbF7VwbxS3IHv5/YGVE/j+wksBPtv+M//WQ7o0ZtVX74/VzlWJEFI8HAwU5tRPUksBPtlMa+C69vwboUOnS8RMUFTywxD+OrqBrWSjvA1iV1Hr0AiWBn2wN1f4fUQQQStXxluMAAAAASUVORK5CYII=\" class=\"CToWUd\">\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n'),(24,24,1,'Item has been created','Item with name <strong>[[ item.name ]]</strong> has been created by [[ user.firstname ]] [[ user.lastname ]] in application [[ foundation::site.name ]]'),(25,25,1,'Item has been created','Item with name <strong>[[ item.name ]]</strong> has been created by [[ user.firstname ]] [[ user.lastname ]] in application [[ foundation::site.name ]]'),(26,26,1,'Item has been created','Item with name <strong>[[ item.name ]]</strong> has been created by [[ user.firstname ]] [[ user.lastname ]] in application [[ foundation::site.name ]]'),(27,27,1,'Item has not been created','Error appears while adding item with name <strong>[[ item.name ]]</strong> by [[ user.firstname ]] [[ user.lastname ]] in application [[ foundation::site.name ]]'),(28,28,1,'Item has not been created','Error appears while adding item with name <strong>[[ item.name ]]</strong> by [[ user.firstname ]] [[ user.lastname ]] in application [[ foundation::site.name ]]'),(29,29,1,'Item has not been created','Error appears while adding item with name <strong>[[ item.name ]]</strong> by [[ user.firstname ]] [[ user.lastname ]] in application [[ foundation::site.name ]]'),(30,30,1,'Item has been updated','Item with name <strong>[[ item.name ]]</strong> has been updated by [[ user.firstname ]] [[ user.lastname ]] in application [[ foundation::site.name ]]'),(31,31,1,'Item has been updated','Item with name <strong>[[ item.name ]]</strong> has been updated by [[ user.firstname ]] [[ user.lastname ]] in application [[ foundation::site.name ]]'),(32,32,1,'Item has been updated','Item with name <strong>[[ item.name ]]</strong> has been updated by [[ user.firstname ]] [[ user.lastname ]] in application [[ foundation::site.name ]]'),(33,33,1,'Item has not been updated','Error appears while updating item <strong>[[ item.name ]]</strong> by [[ user.firstname ]] [[ user.lastname ]] in application [[ foundation::site.name ]]'),(34,34,1,'Item has not been updated','Error appears while updating item <strong>[[ item.name ]]</strong> by [[ user.firstname ]] [[ user.lastname ]] in application [[ foundation::site.name ]]'),(35,35,1,'Item has not been updated','Error appears while updating item <strong>[[ item.name ]]</strong> by [[ user.firstname ]] [[ user.lastname ]] in application [[ foundation::site.name ]]'),(36,36,1,'Item has been deleted','Item with name <strong>[[ item.name ]]</strong> has been deleted by [[ user.firstname ]] [[ user.lastname ]] in application [[ foundation::site.name ]]'),(37,37,1,'Item has been deleted','Item with name <strong>[[ item.name ]]</strong> has been deleted by [[ user.firstname ]] [[ user.lastname ]] in application [[ foundation::site.name ]]'),(38,38,1,'Item has been deleted','Item with name <strong>[[ item.name ]]</strong> has been deleted by [[ user.firstname ]] [[ user.lastname ]] in application [[ foundation::site.name ]]'),(39,39,1,'Item has not been deleted','Error appears while deleting item <strong>[[ item.name ]]</strong> by [[ user.firstname ]] [[ user.lastname ]] in application [[ foundation::site.name ]]'),(40,40,1,'Item has not been deleted','Error appears while deleting item <strong>[[ item.name ]]</strong> by [[ user.firstname ]] [[ user.lastname ]] in application [[ foundation::site.name ]]'),(41,41,1,'Item has not been deleted','Error appears while deleting item <strong>[[ item.name ]]</strong> by [[ user.firstname ]] [[ user.lastname ]] in application [[ foundation::site.name ]]'),(42,42,1,'Sample Email Template','<h1>Sample Email Template</h1>\n\n<p>[[foreach]]</p>\n\n<p>{% for element in [[ module-sample_module::items ]] %}</p>\n\n<p>{{ element.name }}</p>\n\n<p>{% endfor %}</p>\n\n<p>[[/foreach]]</p>\n\n<p>&nbsp;</p>\n');
/*!40000 ALTER TABLE `tbl_notification_contents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_notification_severity`
--

DROP TABLE IF EXISTS `tbl_notification_severity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_notification_severity` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_notification_severity`
--

LOCK TABLES `tbl_notification_severity` WRITE;
/*!40000 ALTER TABLE `tbl_notification_severity` DISABLE KEYS */;
INSERT INTO `tbl_notification_severity` VALUES (4,'high'),(5,'highest'),(2,'low'),(1,'lowest'),(3,'medium');
/*!40000 ALTER TABLE `tbl_notification_severity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_notification_types`
--

DROP TABLE IF EXISTS `tbl_notification_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_notification_types` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_notification_types`
--

LOCK TABLES `tbl_notification_types` WRITE;
/*!40000 ALTER TABLE `tbl_notification_types` DISABLE KEYS */;
INSERT INTO `tbl_notification_types` VALUES (1,'email','Email'),(2,'sms','Sms'),(3,'admin','Admin'),(4,'user','User'),(5,'antares','Antares');
/*!40000 ALTER TABLE `tbl_notification_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_notifications`
--

DROP TABLE IF EXISTS `tbl_notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_notifications` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `severity_id` int(10) unsigned DEFAULT NULL,
  `category_id` int(10) unsigned DEFAULT NULL,
  `type_id` int(10) unsigned DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '0',
  `event` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `severity_id_idx` (`severity_id`),
  KEY `category_id_id_1` (`category_id`),
  KEY `type_id_1` (`type_id`),
  CONSTRAINT `fk_not_type_id` FOREIGN KEY (`type_id`) REFERENCES `tbl_notification_types` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `fk_not_category_id` FOREIGN KEY (`category_id`) REFERENCES `tbl_notification_categories` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `fk_severity_id` FOREIGN KEY (`severity_id`) REFERENCES `tbl_notification_severity` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_notifications`
--

LOCK TABLES `tbl_notifications` WRITE;
/*!40000 ALTER TABLE `tbl_notifications` DISABLE KEYS */;
INSERT INTO `tbl_notifications` VALUES (1,4,1,3,1,'sms.notification_not_sent'),(2,3,1,3,1,'sms.notification_sent'),(3,4,1,3,1,'email.notification_not_sent'),(4,3,1,3,1,'email.notification_sent'),(5,3,1,3,1,'notification.user_has_been_created'),(6,3,1,4,1,'notification.user_has_been_created'),(7,3,1,5,1,'notification.user_has_been_created'),(8,4,1,3,1,'notification.user_has_not_been_created'),(9,4,1,4,1,'notification.user_has_not_been_created'),(10,4,1,5,1,'notification.user_has_not_been_created'),(11,3,1,3,1,'notification.user_has_been_deleted'),(12,3,1,4,1,'notification.user_has_been_deleted'),(13,3,1,5,1,'notification.user_has_been_deleted'),(14,4,1,3,1,'notification.user_has_not_been_deleted'),(15,4,1,4,1,'notification.user_has_not_been_deleted'),(16,4,1,5,1,'notification.user_has_not_been_deleted'),(17,3,1,3,1,'notification.user_has_been_updated'),(18,3,1,4,1,'notification.user_has_been_updated'),(19,3,1,5,1,'notification.user_has_been_updated'),(20,4,1,3,1,'notification.user_has_not_been_updated'),(21,4,1,4,1,'notification.user_has_not_been_updated'),(22,4,1,5,1,'notification.user_has_not_been_updated'),(23,4,1,1,1,'email.device-detect-notification'),(24,3,1,3,1,'notifications.item_has_been_created'),(25,3,1,4,1,'notifications.item_has_been_created'),(26,3,1,5,1,'notifications.item_has_been_created'),(27,4,1,3,1,'notifications.item_has_not_been_created'),(28,4,1,4,1,'notifications.item_has_not_been_created'),(29,4,1,5,1,'notifications.item_has_not_been_created'),(30,3,1,3,1,'notifications.item_has_been_updated'),(31,3,1,4,1,'notifications.item_has_been_updated'),(32,3,1,5,1,'notifications.item_has_been_updated'),(33,4,1,3,1,'notifications.item_has_not_been_updated'),(34,4,1,4,1,'notifications.item_has_not_been_updated'),(35,4,1,5,1,'notifications.item_has_not_been_updated'),(36,3,1,3,1,'notifications.item_has_been_deleted'),(37,3,1,4,1,'notifications.item_has_been_deleted'),(38,3,1,5,1,'notifications.item_has_been_deleted'),(39,4,1,3,1,'notifications.item_has_not_been_deleted'),(40,4,1,4,1,'notifications.item_has_not_been_deleted'),(41,4,1,5,1,'notifications.item_has_not_been_deleted'),(42,4,1,1,1,'email.sample-module-notification');
/*!40000 ALTER TABLE `tbl_notifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_notifications_stack`
--

DROP TABLE IF EXISTS `tbl_notifications_stack`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_notifications_stack` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `notification_id` int(10) unsigned DEFAULT NULL,
  `author_id` int(10) unsigned DEFAULT NULL,
  `variables` text COLLATE utf8_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `notification_stack_idx` (`notification_id`),
  KEY `notification_stack_author_idx` (`author_id`),
  CONSTRAINT `fk_notification_stack_author_id` FOREIGN KEY (`author_id`) REFERENCES `tbl_users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `fk_notification_stack` FOREIGN KEY (`notification_id`) REFERENCES `tbl_notifications` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_notifications_stack`
--

LOCK TABLES `tbl_notifications_stack` WRITE;
/*!40000 ALTER TABLE `tbl_notifications_stack` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_notifications_stack` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_notifications_stack_params`
--

DROP TABLE IF EXISTS `tbl_notifications_stack_params`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_notifications_stack_params` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `stack_id` int(10) unsigned DEFAULT NULL,
  `model_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `stack_params_stack_id_idx` (`stack_id`),
  KEY `stack_params_model_id_idx` (`model_id`),
  CONSTRAINT `fk_notifications_stack_read_stack_id` FOREIGN KEY (`stack_id`) REFERENCES `tbl_notifications_stack` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_notifications_stack_params`
--

LOCK TABLES `tbl_notifications_stack_params` WRITE;
/*!40000 ALTER TABLE `tbl_notifications_stack_params` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_notifications_stack_params` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_notifications_stack_read`
--

DROP TABLE IF EXISTS `tbl_notifications_stack_read`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_notifications_stack_read` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `stack_id` int(10) unsigned DEFAULT NULL,
  `user_id` int(10) unsigned DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `stack_id_idx` (`stack_id`),
  KEY `user_id_idx` (`user_id`),
  CONSTRAINT `fk_notification_stack_read_user_id` FOREIGN KEY (`user_id`) REFERENCES `tbl_users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_notifications_stack_read`
--

LOCK TABLES `tbl_notifications_stack_read` WRITE;
/*!40000 ALTER TABLE `tbl_notifications_stack_read` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_notifications_stack_read` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_page_closure`
--

DROP TABLE IF EXISTS `tbl_page_closure`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_page_closure` (
  `closure_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `ancestor` int(10) unsigned NOT NULL,
  `descendant` int(10) unsigned NOT NULL,
  `depth` int(10) unsigned NOT NULL,
  PRIMARY KEY (`closure_id`),
  KEY `page_closure_ancestor_foreign` (`ancestor`),
  KEY `page_closure_descendant_foreign` (`descendant`),
  CONSTRAINT `page_closure_descendant_foreign` FOREIGN KEY (`descendant`) REFERENCES `tbl_widgets_params` (`id`) ON DELETE CASCADE,
  CONSTRAINT `page_closure_ancestor_foreign` FOREIGN KEY (`ancestor`) REFERENCES `tbl_widgets_params` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_page_closure`
--

LOCK TABLES `tbl_page_closure` WRITE;
/*!40000 ALTER TABLE `tbl_page_closure` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_page_closure` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_permissions`
--

DROP TABLE IF EXISTS `tbl_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_permissions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `brand_id` int(10) unsigned NOT NULL,
  `component_id` int(10) unsigned NOT NULL,
  `role_id` int(10) unsigned NOT NULL,
  `action_id` int(10) unsigned NOT NULL,
  `allowed` tinyint(4) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `tbl_permissions_brand_id_foreign` (`brand_id`),
  KEY `tbl_permissions_component_id_foreign` (`component_id`),
  KEY `tbl_permissions_role_id_foreign` (`role_id`),
  KEY `tbl_permissions_action_id_foreign` (`action_id`),
  CONSTRAINT `tbl_permissions_action_id_foreign` FOREIGN KEY (`action_id`) REFERENCES `tbl_actions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `tbl_permissions_brand_id_foreign` FOREIGN KEY (`brand_id`) REFERENCES `tbl_brands` (`id`) ON DELETE CASCADE,
  CONSTRAINT `tbl_permissions_component_id_foreign` FOREIGN KEY (`component_id`) REFERENCES `tbl_components` (`id`) ON DELETE CASCADE,
  CONSTRAINT `tbl_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `tbl_roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=122 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_permissions`
--

LOCK TABLES `tbl_permissions` WRITE;
/*!40000 ALTER TABLE `tbl_permissions` DISABLE KEYS */;
INSERT INTO `tbl_permissions` VALUES (1,1,1,1,1,1),(2,1,1,1,2,1),(3,1,1,1,3,1),(4,1,1,1,4,1),(5,1,1,1,5,1),(6,1,1,1,6,1),(7,1,1,1,7,1),(8,1,1,1,8,1),(9,1,1,1,9,1),(10,1,1,1,10,1),(11,1,1,1,11,1),(12,1,1,1,12,1),(13,1,1,1,13,1),(14,1,1,1,14,1),(15,1,1,1,15,1),(16,1,1,1,16,1),(17,1,1,1,17,1),(18,1,1,3,6,1),(19,1,1,3,9,1),(20,1,2,1,18,1),(21,1,2,1,19,1),(22,1,2,1,20,1),(23,1,2,1,21,1),(24,1,2,1,22,1),(25,1,2,1,23,1),(26,1,2,1,24,1),(27,1,2,1,25,1),(28,1,2,1,26,1),(29,1,2,1,27,1),(30,1,3,1,28,1),(31,1,3,1,29,1),(32,1,3,1,30,1),(33,1,3,1,31,1),(34,1,3,1,32,1),(35,1,3,1,33,1),(36,1,3,1,34,1),(37,1,3,1,35,1),(38,1,3,1,36,1),(39,1,3,1,37,1),(40,1,3,1,38,1),(41,1,3,1,39,1),(42,1,3,1,40,1),(43,1,3,1,41,1),(44,1,3,1,42,1),(45,1,3,1,43,1),(46,1,3,1,44,1),(47,1,3,1,45,1),(48,1,3,1,46,1),(49,1,3,1,47,1),(50,1,3,1,48,1),(51,1,3,1,49,1),(52,1,3,1,50,1),(53,1,3,1,51,1),(54,1,3,1,52,1),(55,1,3,1,53,1),(56,1,3,1,54,1),(57,1,3,1,55,1),(58,1,3,1,56,1),(59,1,3,1,57,1),(60,1,3,1,58,1),(61,1,4,1,59,1),(62,1,4,1,60,1),(63,1,4,1,61,1),(64,1,4,1,62,1),(65,1,4,1,63,1),(66,1,4,1,64,1),(67,1,4,1,65,1),(68,1,5,1,66,1),(69,1,5,1,67,1),(70,1,5,1,68,1),(71,1,5,1,69,1),(72,1,5,1,70,1),(73,1,5,1,71,1),(74,1,5,1,72,1),(75,1,5,1,73,1),(76,1,5,1,74,1),(77,1,5,1,75,1),(78,1,5,1,76,1),(79,1,5,1,77,1),(80,1,5,1,78,1),(81,1,5,1,79,1),(82,1,5,1,80,1),(83,1,6,1,81,1),(84,1,6,1,82,1),(85,1,6,1,83,1),(86,1,6,1,84,1),(87,1,7,1,85,1),(88,1,7,1,86,1),(89,1,7,1,87,1),(90,1,7,1,88,1),(91,1,8,1,89,1),(92,1,12,1,90,1),(93,1,12,1,91,1),(94,1,13,1,92,1),(95,1,13,1,93,1),(96,1,13,1,94,1),(97,1,13,1,95,1),(98,1,13,1,96,1),(99,1,13,1,97,1),(100,1,13,1,98,1),(101,1,13,1,99,1),(102,1,13,1,100,1),(103,1,13,2,92,1),(104,1,13,2,93,1),(105,1,13,2,94,1),(106,1,13,2,95,1),(107,1,13,2,96,1),(108,1,13,2,97,1),(109,1,13,2,98,1),(110,1,13,2,99,1),(111,1,14,1,101,1),(112,1,14,1,102,1),(113,1,14,1,103,1),(114,1,14,1,104,1),(115,1,14,1,105,1),(116,1,14,1,106,1),(117,1,14,1,107,1),(118,1,14,1,108,1),(119,1,15,1,109,1),(120,1,16,1,110,1),(121,1,16,1,111,1);
/*!40000 ALTER TABLE `tbl_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_regions`
--

DROP TABLE IF EXISTS `tbl_regions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_regions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `country_id` int(10) unsigned DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `tbl_regions_country_id_index` (`country_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4055 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_regions`
--

LOCK TABLES `tbl_regions` WRITE;
/*!40000 ALTER TABLE `tbl_regions` DISABLE KEYS */;
INSERT INTO `tbl_regions` VALUES (1,1,'Canillo'),(2,1,'Encamp'),(3,1,'La Massana'),(4,1,'Ordino'),(5,1,'Sant Julia De Loria'),(6,1,'Andorra La Vella'),(7,1,'Escaldes-Engordany'),(8,2,'Abu Dhabi'),(9,2,'Ajman'),(10,2,'Dubai'),(11,2,'Fujairah'),(12,2,'Ras Al Khaimah'),(13,2,'Sharjah'),(14,2,'Umm Al Quwain'),(15,3,'Badakhshan'),(16,3,'Badghis'),(17,3,'Baghlan'),(18,3,'Bamian'),(19,3,'Farah'),(20,3,'Faryab'),(21,3,'Ghazni'),(22,3,'Ghowr'),(23,3,'Helmand'),(24,3,'Herat'),(25,3,'Kabol'),(26,3,'Kapisa'),(27,3,'Lowgar'),(28,3,'Nangarhar'),(29,3,'Nimruz'),(30,3,'Kandahar'),(31,3,'Kondoz'),(32,3,'Takhar'),(33,3,'Vardak'),(34,3,'Zabol'),(35,3,'Paktika'),(36,3,'Balkh'),(37,3,'Jowzjan'),(38,3,'Samangan'),(39,3,'Sar-E Pol'),(40,3,'Konar'),(41,3,'Laghman'),(42,3,'Paktia'),(43,3,'Khowst'),(44,3,'Nurestan'),(45,3,'Oruzgan'),(46,3,'Parvan'),(47,3,'Daykondi'),(48,3,'Panjshir'),(49,4,'Barbuda'),(50,4,'Saint George'),(51,4,'Saint John'),(52,4,'Saint Mary'),(53,4,'Saint Paul'),(54,4,'Saint Peter'),(55,4,'Saint Philip'),(56,4,'Redonda'),(57,6,'Berat'),(58,6,'Diber'),(59,6,'Durres'),(60,6,'Elbasan'),(61,6,'Fier'),(62,6,'Gjirokaster'),(63,6,'Korce'),(64,6,'Kukes'),(65,6,'Lezhe'),(66,6,'Shkoder'),(67,6,'Tirane'),(68,6,'Vlore'),(69,7,'Aragatsotn'),(70,7,'Ararat'),(71,7,'Armavir'),(72,7,'Geghark\'unik\''),(73,7,'Kotayk\''),(74,7,'Lorri'),(75,7,'Shirak'),(76,7,'Syunik\''),(77,7,'Tavush'),(78,7,'Vayots\' Dzor'),(79,7,'Yerevan'),(80,9,'Benguela'),(81,9,'Bie'),(82,9,'Cabinda'),(83,9,'Cuando Cubango'),(84,9,'Cuanza Norte'),(85,9,'Cuanza Sul'),(86,9,'Cunene'),(87,9,'Huambo'),(88,9,'Huila'),(89,9,'Malanje'),(90,9,'Namibe'),(91,9,'Moxico'),(92,9,'Uige'),(93,9,'Zaire'),(94,9,'Lunda Norte'),(95,9,'Lunda Sul'),(96,9,'Bengo'),(97,9,'Luanda'),(98,10,'Buenos Aires'),(99,10,'Catamarca'),(100,10,'Chaco'),(101,10,'Chubut'),(102,10,'Cordoba'),(103,10,'Corrientes'),(104,10,'Distrito Federal'),(105,10,'Entre Rios'),(106,10,'Formosa'),(107,10,'Jujuy'),(108,10,'La Pampa'),(109,10,'La Rioja'),(110,10,'Mendoza'),(111,10,'Misiones'),(112,10,'Neuquen'),(113,10,'Rio Negro'),(114,10,'Salta'),(115,10,'San Juan'),(116,10,'San Luis'),(117,10,'Santa Cruz'),(118,10,'Santa Fe'),(119,10,'Santiago Del Estero'),(120,10,'Tierra Del Fuego'),(121,10,'Tucuman'),(122,11,'Burgenland'),(123,11,'Karnten'),(124,11,'Niederosterreich'),(125,11,'Oberosterreich'),(126,11,'Salzburg'),(127,11,'Steiermark'),(128,11,'Tirol'),(129,11,'Vorarlberg'),(130,11,'Wien'),(131,12,'Australian Capital Territory'),(132,12,'New South Wales'),(133,12,'Northern Territory'),(134,12,'Queensland'),(135,12,'South Australia'),(136,12,'Tasmania'),(137,12,'Victoria'),(138,12,'Western Australia'),(139,14,'Abseron'),(140,14,'Agcabadi'),(141,14,'Agdam'),(142,14,'Agdas'),(143,14,'Agstafa'),(144,14,'Agsu'),(145,14,'Ali Bayramli'),(146,14,'Astara'),(147,14,'Baki'),(148,14,'Balakan'),(149,14,'Barda'),(150,14,'Beylaqan'),(151,14,'Bilasuvar'),(152,14,'Cabrayil'),(153,14,'Calilabad'),(154,14,'Daskasan'),(155,14,'Davaci'),(156,14,'Fuzuli'),(157,14,'Gadabay'),(158,14,'Ganca'),(159,14,'Goranboy'),(160,14,'Goycay'),(161,14,'Haciqabul'),(162,14,'Imisli'),(163,14,'Ismayilli'),(164,14,'Kalbacar'),(165,14,'Kurdamir'),(166,14,'Lacin'),(167,14,'Lankaran'),(168,14,'Lankaran'),(169,14,'Lerik'),(170,14,'Masalli'),(171,14,'Mingacevir'),(172,14,'Naftalan'),(173,14,'Naxcivan'),(174,14,'Neftcala'),(175,14,'Oguz'),(176,14,'Qabala'),(177,14,'Qax'),(178,14,'Qazax'),(179,14,'Qobustan'),(180,14,'Quba'),(181,14,'Qubadli'),(182,14,'Qusar'),(183,14,'Saatli'),(184,14,'Sabirabad'),(185,14,'Saki'),(186,14,'Saki'),(187,14,'Salyan'),(188,14,'Samaxi'),(189,14,'Samkir'),(190,14,'Samux'),(191,14,'Siyazan'),(192,14,'Sumqayit'),(193,14,'Susa'),(194,14,'Susa'),(195,14,'Tartar'),(196,14,'Tovuz'),(197,14,'Ucar'),(198,14,'Xacmaz'),(199,14,'Xankandi'),(200,14,'Xanlar'),(201,14,'Xizi'),(202,14,'Xocali'),(203,14,'Xocavand'),(204,14,'Yardimli'),(205,14,'Yevlax'),(206,14,'Yevlax'),(207,14,'Zangilan'),(208,14,'Zaqatala'),(209,14,'Zardab'),(210,15,'Federation Of Bosnia And Herzegovina'),(211,15,'Republika Srpska'),(212,16,'Christ Church'),(213,16,'Saint Andrew'),(214,16,'Saint George'),(215,16,'Saint James'),(216,16,'Saint John'),(217,16,'Saint Joseph'),(218,16,'Saint Lucy'),(219,16,'Saint Michael'),(220,16,'Saint Peter'),(221,16,'Saint Philip'),(222,16,'Saint Thomas'),(223,17,'Dhaka'),(224,17,'Khulna'),(225,17,'Rajshahi'),(226,17,'Chittagong'),(227,17,'Barisal'),(228,17,'Sylhet'),(229,18,'Antwerpen'),(230,18,'Hainaut'),(231,18,'Liege'),(232,18,'Limburg'),(233,18,'Luxembourg'),(234,18,'Namur'),(235,18,'Oost-Vlaanderen'),(236,18,'West-Vlaanderen'),(237,18,'Brabant Wallon'),(238,18,'Brussels Hoofdstedelijk Gewest'),(239,18,'Vlaams-Brabant'),(240,18,'Flanders'),(241,18,'Wallonia'),(242,19,'Bam'),(243,19,'Boulkiemde'),(244,19,'Ganzourgou'),(245,19,'Gnagna'),(246,19,'Kouritenga'),(247,19,'Oudalan'),(248,19,'Passore'),(249,19,'Sanguie'),(250,19,'Soum'),(251,19,'Tapoa'),(252,19,'Zoundweogo'),(253,19,'Bale'),(254,19,'Banwa'),(255,19,'Bazega'),(256,19,'Bougouriba'),(257,19,'Boulgou'),(258,19,'Gourma'),(259,19,'Houet'),(260,19,'Ioba'),(261,19,'Kadiogo'),(262,19,'Kenedougou'),(263,19,'Komoe'),(264,19,'Komondjari'),(265,19,'Kompienga'),(266,19,'Kossi'),(267,19,'Koulpelogo'),(268,19,'Kourweogo'),(269,19,'Leraba'),(270,19,'Loroum'),(271,19,'Mouhoun'),(272,19,'Namentenga'),(273,19,'Naouri'),(274,19,'Nayala'),(275,19,'Noumbiel'),(276,19,'Oubritenga'),(277,19,'Poni'),(278,19,'Sanmatenga'),(279,19,'Seno'),(280,19,'Sissili'),(281,19,'Sourou'),(282,19,'Tuy'),(283,19,'Yagha'),(284,19,'Yatenga'),(285,19,'Ziro'),(286,19,'Zondoma'),(287,20,'Mikhaylovgrad'),(288,20,'Blagoevgrad'),(289,20,'Burgas'),(290,20,'Dobrich'),(291,20,'Gabrovo'),(292,20,'Grad Sofiya'),(293,20,'Khaskovo'),(294,20,'Kurdzhali'),(295,20,'Kyustendil'),(296,20,'Lovech'),(297,20,'Montana'),(298,20,'Pazardzhik'),(299,20,'Pernik'),(300,20,'Pleven'),(301,20,'Plovdiv'),(302,20,'Razgrad'),(303,20,'Ruse'),(304,20,'Shumen'),(305,20,'Silistra'),(306,20,'Sliven'),(307,20,'Smolyan'),(308,20,'Sofiya'),(309,20,'Stara Zagora'),(310,20,'Turgovishte'),(311,20,'Varna'),(312,20,'Veliko Turnovo'),(313,20,'Vidin'),(314,20,'Vratsa'),(315,20,'Yambol'),(316,21,'Al Hadd'),(317,21,'Al Manamah'),(318,21,'Jidd Hafs'),(319,21,'Sitrah'),(320,21,'Al Mintaqah Al Gharbiyah'),(321,21,'Mintaqat Juzur Hawar'),(322,21,'Al Mintaqah Ash Shamaliyah'),(323,21,'Al Mintaqah Al Wusta'),(324,21,'Madinat'),(325,21,'Ar Rifa'),(326,21,'Madinat Hamad'),(327,21,'Al Muharraq'),(328,21,'Al Asimah'),(329,21,'Al Janubiyah'),(330,21,'Ash Shamaliyah'),(331,21,'Al Wusta'),(332,22,'Bujumbura'),(333,22,'Bubanza'),(334,22,'Bururi'),(335,22,'Cankuzo'),(336,22,'Cibitoke'),(337,22,'Gitega'),(338,22,'Karuzi'),(339,22,'Kayanza'),(340,22,'Kirundo'),(341,22,'Makamba'),(342,22,'Muyinga'),(343,22,'Ngozi'),(344,22,'Rutana'),(345,22,'Ruyigi'),(346,22,'Muramvya'),(347,22,'Mwaro'),(348,23,'Alibori'),(349,23,'Atakora'),(350,23,'Atlanyique'),(351,23,'Borgou'),(352,23,'Collines'),(353,23,'Kouffo'),(354,23,'Donga'),(355,23,'Littoral'),(356,23,'Mono'),(357,23,'Oueme'),(358,23,'Plateau'),(359,23,'Zou'),(360,24,'Devonshire'),(361,24,'Hamilton'),(362,24,'Hamilton'),(363,24,'Paget'),(364,24,'Pembroke'),(365,24,'Saint George'),(366,24,'Saint George\'s'),(367,24,'Sandys'),(368,24,'Smiths'),(369,24,'Southampton'),(370,24,'Warwick'),(371,25,'Alibori'),(372,25,'Belait'),(373,25,'Brunei And Muara'),(374,25,'Temburong'),(375,25,'Collines'),(376,25,'Kouffo'),(377,25,'Donga'),(378,25,'Littoral'),(379,25,'Tutong'),(380,25,'Oueme'),(381,25,'Plateau'),(382,25,'Zou'),(383,26,'Chuquisaca'),(384,26,'Cochabamba'),(385,26,'El Beni'),(386,26,'La Paz'),(387,26,'Oruro'),(388,26,'Pando'),(389,26,'Potosi'),(390,26,'Santa Cruz'),(391,26,'Tarija'),(392,27,'Acre'),(393,27,'Alagoas'),(394,27,'Amapa'),(395,27,'Amazonas'),(396,27,'Bahia'),(397,27,'Ceara'),(398,27,'Distrito Federal'),(399,27,'Espirito Santo'),(400,27,'Mato Grosso Do Sul'),(401,27,'Maranhao'),(402,27,'Mato Grosso'),(403,27,'Minas Gerais'),(404,27,'Para'),(405,27,'Paraiba'),(406,27,'Parana'),(407,27,'Piaui'),(408,27,'Rio De Janeiro'),(409,27,'Rio Grande Do Norte'),(410,27,'Rio Grande Do Sul'),(411,27,'Rondonia'),(412,27,'Roraima'),(413,27,'Santa Catarina'),(414,27,'Sao Paulo'),(415,27,'Sergipe'),(416,27,'Goias'),(417,27,'Pernambuco'),(418,27,'Tocantins'),(419,28,'Bimini'),(420,28,'Cat Island'),(421,28,'Exuma'),(422,28,'Inagua'),(423,28,'Long Island'),(424,28,'Mayaguana'),(425,28,'Ragged Island'),(426,28,'Harbour Island'),(427,28,'New Providence'),(428,28,'Acklins And Crooked Islands'),(429,28,'Freeport'),(430,28,'Fresh Creek'),(431,28,'Governor\'s Harbour'),(432,28,'Green Turtle Cay'),(433,28,'High Rock'),(434,28,'Kemps Bay'),(435,28,'Marsh Harbour'),(436,28,'Nichollstown And Berry Islands'),(437,28,'Rock Sound'),(438,28,'Sandy Point'),(439,28,'San Salvador And Rum Cay'),(440,29,'Bumthang'),(441,29,'Chhukha'),(442,29,'Chirang'),(443,29,'Daga'),(444,29,'Geylegphug'),(445,29,'Ha'),(446,29,'Lhuntshi'),(447,29,'Mongar'),(448,29,'Paro'),(449,29,'Pemagatsel'),(450,29,'Punakha'),(451,29,'Samchi'),(452,29,'Samdrup'),(453,29,'Shemgang'),(454,29,'Tashigang'),(455,29,'Thimphu'),(456,29,'Tongsa'),(457,29,'Wangdi Phodrang'),(458,30,'Central'),(459,30,'Ghanzi'),(460,30,'Kgalagadi'),(461,30,'Kgatleng'),(462,30,'Kweneng'),(463,30,'North-East'),(464,30,'South-East'),(465,30,'Southern'),(466,30,'North-West'),(467,31,'Brestskaya Voblasts\''),(468,31,'Homyel\'skaya Voblasts\''),(469,31,'Hrodzyenskaya Voblasts\''),(470,31,'Minsk'),(471,31,'Minskaya Voblasts\''),(472,31,'Mahilyowskaya Voblasts\''),(473,31,'Vitsyebskaya Voblasts\''),(474,32,'Belize'),(475,32,'Cayo'),(476,32,'Corozal'),(477,32,'Orange Walk'),(478,32,'Stann Creek'),(479,32,'Toledo'),(480,33,'Alberta'),(481,33,'British Columbia'),(482,33,'Manitoba'),(483,33,'New Brunswick'),(484,33,'Newfoundland'),(485,33,'Nova Scotia'),(486,33,'Northwest Territories'),(487,33,'Nunavut'),(488,33,'Ontario'),(489,33,'Prince Edward Island'),(490,33,'Quebec'),(491,33,'Saskatchewan'),(492,33,'Yukon Territory'),(493,35,'Bandundu'),(494,35,'Equateur'),(495,35,'Kasai-Oriental'),(496,35,'Katanga'),(497,35,'Kinshasa'),(498,35,'Bas-Congo'),(499,35,'Orientale'),(500,35,'Maniema'),(501,35,'Nord-Kivu'),(502,35,'Sud-Kivu'),(503,36,'Bamingui-Bangoran'),(504,36,'Basse-Kotto'),(505,36,'Haute-Kotto'),(506,36,'Mambere-Kadei'),(507,36,'Haut-Mbomou'),(508,36,'Kemo'),(509,36,'Lobaye'),(510,36,'Mbomou'),(511,36,'Nana-Mambere'),(512,36,'Ouaka'),(513,36,'Ouham'),(514,36,'Ouham-Pende'),(515,36,'Cuvette-Ouest'),(516,36,'Nana-Grebizi'),(517,36,'Sangha-Mbaere'),(518,36,'Ombella-Mpoko'),(519,36,'Bangui'),(520,37,'Bouenza'),(521,37,'Kouilou'),(522,37,'Lekoumou'),(523,37,'Likouala'),(524,37,'Niari'),(525,37,'Plateaux'),(526,37,'Sangha'),(527,37,'Pool'),(528,37,'Brazzaville'),(529,37,'Cuvette'),(530,37,'Cuvette-Ouest'),(531,38,'Aargau'),(532,38,'Ausser-Rhoden'),(533,38,'Basel-Landschaft'),(534,38,'Basel-Stadt'),(535,38,'Bern'),(536,38,'Fribourg'),(537,38,'Geneve'),(538,38,'Glarus'),(539,38,'Graubunden'),(540,38,'Inner-Rhoden'),(541,38,'Luzern'),(542,38,'Neuchatel'),(543,38,'Nidwalden'),(544,38,'Obwalden'),(545,38,'Sankt Gallen'),(546,38,'Schaffhausen'),(547,38,'Schwyz'),(548,38,'Solothurn'),(549,38,'Thurgau'),(550,38,'Ticino'),(551,38,'Uri'),(552,38,'Valais'),(553,38,'Vaud'),(554,38,'Zug'),(555,38,'Zurich'),(556,38,'Jura'),(557,39,'Agneby'),(558,39,'Bafing'),(559,39,'Bas-Sassandra'),(560,39,'Denguele'),(561,39,'Dix-Huit Montagnes'),(562,39,'Fromager'),(563,39,'Haut-Sassandra'),(564,39,'Lacs'),(565,39,'Lagunes'),(566,39,'Marahoue'),(567,39,'Moyen-Cavally'),(568,39,'Moyen-Comoe'),(569,39,'N\'zi-Comoe'),(570,39,'Savanes'),(571,39,'Sud-Bandama'),(572,39,'Sud-Comoe'),(573,39,'Vallee Du Bandama'),(574,39,'Worodougou'),(575,39,'Zanzan'),(576,41,'Valparaiso'),(577,41,'Aisen Del General Carlos Ibanez Del Campo'),(578,41,'Antofagasta'),(579,41,'Araucania'),(580,41,'Atacama'),(581,41,'Bio-Bio'),(582,41,'Coquimbo'),(583,41,'Libertador General Bernardo O\'higgins'),(584,41,'Los Lagos'),(585,41,'Magallanes Y De La Antartica Chilena'),(586,41,'Maule'),(587,41,'Region Metropolitana'),(588,41,'Tarapaca'),(589,41,'Los Lagos'),(590,41,'Tarapaca'),(591,41,'Arica Y Parinacota'),(592,41,'Los Rios'),(593,42,'Est'),(594,42,'Littoral'),(595,42,'Nord-Ouest'),(596,42,'Ouest'),(597,42,'Sud-Ouest'),(598,42,'Adamaoua'),(599,42,'Centre'),(600,42,'Extreme-Nord'),(601,42,'Nord'),(602,42,'Sud'),(603,43,'Anhui'),(604,43,'Zhejiang'),(605,43,'Jiangxi'),(606,43,'Jiangsu'),(607,43,'Jilin'),(608,43,'Qinghai'),(609,43,'Fujian'),(610,43,'Heilongjiang'),(611,43,'Henan'),(612,43,'Hebei'),(613,43,'Hunan'),(614,43,'Hubei'),(615,43,'Xinjiang'),(616,43,'Xizang'),(617,43,'Gansu'),(618,43,'Guangxi'),(619,43,'Guizhou'),(620,43,'Liaoning'),(621,43,'Nei Mongol'),(622,43,'Ningxia'),(623,43,'Beijing'),(624,43,'Shanghai'),(625,43,'Shanxi'),(626,43,'Shandong'),(627,43,'Shaanxi'),(628,43,'Tianjin'),(629,43,'Yunnan'),(630,43,'Guangdong'),(631,43,'Hainan'),(632,43,'Sichuan'),(633,43,'Chongqing'),(634,44,'Amazonas'),(635,44,'Antioquia'),(636,44,'Arauca'),(637,44,'Atlantico'),(638,44,'Caqueta'),(639,44,'Cauca'),(640,44,'Cesar'),(641,44,'Choco'),(642,44,'Cordoba'),(643,44,'Guaviare'),(644,44,'Guainia'),(645,44,'Huila'),(646,44,'La Guajira'),(647,44,'Meta'),(648,44,'Narino'),(649,44,'Norte De Santander'),(650,44,'Putumayo'),(651,44,'Quindio'),(652,44,'Risaralda'),(653,44,'San Andres Y Providencia'),(654,44,'Santander'),(655,44,'Sucre'),(656,44,'Tolima'),(657,44,'Valle Del Cauca'),(658,44,'Vaupes'),(659,44,'Vichada'),(660,44,'Casanare'),(661,44,'Cundinamarca'),(662,44,'Distrito Especial'),(663,44,'Bolivar'),(664,44,'Boyaca'),(665,44,'Caldas'),(666,44,'Magdalena'),(667,45,'Alajuela'),(668,45,'Cartago'),(669,45,'Guanacaste'),(670,45,'Heredia'),(671,45,'Limon'),(672,45,'Puntarenas'),(673,45,'San Jose'),(674,46,'Pinar Del Rio'),(675,46,'Ciudad De La Habana'),(676,46,'Matanzas'),(677,46,'Isla De La Juventud'),(678,46,'Camaguey'),(679,46,'Ciego De Avila'),(680,46,'Cienfuegos'),(681,46,'Granma'),(682,46,'Guantanamo'),(683,46,'La Habana'),(684,46,'Holguin'),(685,46,'Las Tunas'),(686,46,'Sancti Spiritus'),(687,46,'Santiago De Cuba'),(688,46,'Villa Clara'),(689,47,'Boa Vista'),(690,47,'Brava'),(691,47,'Maio'),(692,47,'Paul'),(693,47,'Ribeira Grande'),(694,47,'Sal'),(695,47,'Sao Nicolau'),(696,47,'Sao Vicente'),(697,47,'Mosteiros'),(698,47,'Praia'),(699,47,'Santa Catarina'),(700,47,'Santa Cruz'),(701,47,'Sao Domingos'),(702,47,'Sao Filipe'),(703,47,'Sao Miguel'),(704,47,'Tarrafal'),(705,49,'Famagusta'),(706,49,'Kyrenia'),(707,49,'Larnaca'),(708,49,'Nicosia'),(709,49,'Limassol'),(710,49,'Paphos'),(711,50,'Hlavni Mesto Praha'),(712,50,'Jihomoravsky Kraj'),(713,50,'Jihocesky Kraj'),(714,50,'Vysocina'),(715,50,'Karlovarsky Kraj'),(716,50,'Kralovehradecky Kraj'),(717,50,'Liberecky Kraj'),(718,50,'Olomoucky Kraj'),(719,50,'Moravskoslezsky Kraj'),(720,50,'Pardubicky Kraj'),(721,50,'Plzensky Kraj'),(722,50,'Stredocesky Kraj'),(723,50,'Ustecky Kraj'),(724,50,'Zlinsky Kraj'),(725,51,'Baden-Wurttemberg'),(726,51,'Bayern'),(727,51,'Bremen'),(728,51,'Hamburg'),(729,51,'Hessen'),(730,51,'Niedersachsen'),(731,51,'Nordrhein-Westfalen'),(732,51,'Rheinland-Pfalz'),(733,51,'Saarland'),(734,51,'Schleswig-Holstein'),(735,51,'Brandenburg'),(736,51,'Mecklenburg-Vorpommern'),(737,51,'Sachsen'),(738,51,'Sachsen-Anhalt'),(739,51,'Thuringen'),(740,51,'Berlin'),(741,52,'Ali Sabieh'),(742,52,'Obock'),(743,52,'Tadjoura'),(744,52,'Dikhil'),(745,52,'Djibouti'),(746,52,'Arta'),(747,53,'Hovedstaden'),(748,53,'Midtjylland'),(749,53,'Nordjylland'),(750,53,'Sjelland'),(751,53,'Syddanmark'),(752,54,'Saint Andrew'),(753,54,'Saint David'),(754,54,'Saint George'),(755,54,'Saint John'),(756,54,'Saint Joseph'),(757,54,'Saint Luke'),(758,54,'Saint Mark'),(759,54,'Saint Patrick'),(760,54,'Saint Paul'),(761,54,'Saint Peter'),(762,55,'Azua'),(763,55,'Baoruco'),(764,55,'Barahona'),(765,55,'Dajabon'),(766,55,'Distrito Nacional'),(767,55,'Duarte'),(768,55,'Espaillat'),(769,55,'Independencia'),(770,55,'La Altagracia'),(771,55,'Elias Pina'),(772,55,'La Romana'),(773,55,'Maria Trinidad Sanchez'),(774,55,'Monte Cristi'),(775,55,'Pedernales'),(776,55,'Peravia'),(777,55,'Puerto Plata'),(778,55,'Salcedo'),(779,55,'Samana'),(780,55,'Sanchez Ramirez'),(781,55,'San Juan'),(782,55,'San Pedro De Macoris'),(783,55,'Santiago'),(784,55,'Santiago Rodriguez'),(785,55,'Valverde'),(786,55,'El Seibo'),(787,55,'Hato Mayor'),(788,55,'La Vega'),(789,55,'Monsenor Nouel'),(790,55,'Monte Plata'),(791,55,'San Cristobal'),(792,55,'Distrito Nacional'),(793,55,'Peravia'),(794,55,'San Jose De Ocoa'),(795,55,'Santo Domingo'),(796,56,'Alger'),(797,56,'Batna'),(798,56,'Constantine'),(799,56,'Medea'),(800,56,'Mostaganem'),(801,56,'Oran'),(802,56,'Saida'),(803,56,'Setif'),(804,56,'Tiaret'),(805,56,'Tizi Ouzou'),(806,56,'Tlemcen'),(807,56,'Bejaia'),(808,56,'Biskra'),(809,56,'Blida'),(810,56,'Bouira'),(811,56,'Djelfa'),(812,56,'Guelma'),(813,56,'Jijel'),(814,56,'Laghouat'),(815,56,'Mascara'),(816,56,'M\'sila'),(817,56,'Oum El Bouaghi'),(818,56,'Sidi Bel Abbes'),(819,56,'Skikda'),(820,56,'Tebessa'),(821,56,'Adrar'),(822,56,'Ain Defla'),(823,56,'Ain Temouchent'),(824,56,'Annaba'),(825,56,'Bechar'),(826,56,'Bordj Bou Arreridj'),(827,56,'Boumerdes'),(828,56,'Chlef'),(829,56,'El Bayadh'),(830,56,'El Oued'),(831,56,'El Tarf'),(832,56,'Ghardaia'),(833,56,'Illizi'),(834,56,'Khenchela'),(835,56,'Mila'),(836,56,'Naama'),(837,56,'Ouargla'),(838,56,'Relizane'),(839,56,'Souk Ahras'),(840,56,'Tamanghasset'),(841,56,'Tindouf'),(842,56,'Tipaza'),(843,56,'Tissemsilt'),(844,57,'Galapagos'),(845,57,'Azuay'),(846,57,'Bolivar'),(847,57,'Canar'),(848,57,'Carchi'),(849,57,'Chimborazo'),(850,57,'Cotopaxi'),(851,57,'El Oro'),(852,57,'Esmeraldas'),(853,57,'Guayas'),(854,57,'Imbabura'),(855,57,'Loja'),(856,57,'Los Rios'),(857,57,'Manabi'),(858,57,'Morona-Santiago'),(859,57,'Pastaza'),(860,57,'Pichincha'),(861,57,'Tungurahua'),(862,57,'Zamora-Chinchipe'),(863,57,'Sucumbios'),(864,57,'Napo'),(865,57,'Orellana'),(866,58,'Harjumaa'),(867,58,'Hiiumaa'),(868,58,'Ida-Virumaa'),(869,58,'Jarvamaa'),(870,58,'Jogevamaa'),(871,58,'Kohtla-Jarve'),(872,58,'Laanemaa'),(873,58,'Laane-Virumaa'),(874,58,'Narva'),(875,58,'Parnu'),(876,58,'Parnumaa'),(877,58,'Polvamaa'),(878,58,'Raplamaa'),(879,58,'Saaremaa'),(880,58,'Sillamae'),(881,58,'Tallinn'),(882,58,'Tartu'),(883,58,'Tartumaa'),(884,58,'Valgamaa'),(885,58,'Viljandimaa'),(886,58,'Vorumaa'),(887,59,'Ad Daqahliyah'),(888,59,'Al Bahr Al Ahmar'),(889,59,'Al Buhayrah'),(890,59,'Al Fayyum'),(891,59,'Al Gharbiyah'),(892,59,'Al Iskandariyah'),(893,59,'Al Isma\'iliyah'),(894,59,'Al Jizah'),(895,59,'Al Minufiyah'),(896,59,'Al Minya'),(897,59,'Al Qahirah'),(898,59,'Al Qalyubiyah'),(899,59,'Al Wadi Al Jadid'),(900,59,'Ash Sharqiyah'),(901,59,'As Suways'),(902,59,'Aswan'),(903,59,'Asyut'),(904,59,'Bani Suwayf'),(905,59,'Bur Sa\'id'),(906,59,'Dumyat'),(907,59,'Kafr Ash Shaykh'),(908,59,'Matruh'),(909,59,'Qina'),(910,59,'Suhaj'),(911,59,'Janub Sina\''),(912,59,'Shamal Sina\''),(913,61,'Anseba'),(914,61,'Debub'),(915,61,'Debubawi K\'eyih Bahri'),(916,61,'Gash Barka'),(917,61,'Ma\'akel'),(918,61,'Semenawi K\'eyih Bahri'),(919,62,'Islas Baleares'),(920,62,'La Rioja'),(921,62,'Madrid'),(922,62,'Murcia'),(923,62,'Navarra'),(924,62,'Asturias'),(925,62,'Cantabria'),(926,62,'Andalucia'),(927,62,'Aragon'),(928,62,'Canarias'),(929,62,'Castilla-La Mancha'),(930,62,'Castilla Y Leon'),(931,62,'Catalonia'),(932,62,'Extremadura'),(933,62,'Galicia'),(934,62,'Pais Vasco'),(935,62,'Comunidad Valenciana'),(936,63,'Adis Abeba'),(937,63,'Afar'),(938,63,'Amara'),(939,63,'Binshangul Gumuz'),(940,63,'Dire Dawa'),(941,63,'Gambela Hizboch'),(942,63,'Hareri Hizb'),(943,63,'Oromiya'),(944,63,'Sumale'),(945,63,'Tigray'),(946,63,'Yedebub Biheroch Bihereseboch Na Hizboch'),(947,64,'Aland'),(948,64,'Lapland'),(949,64,'Oulu'),(950,64,'Southern Finland'),(951,64,'Eastern Finland'),(952,64,'Western Finland'),(953,65,'Central'),(954,65,'Eastern'),(955,65,'Northern'),(956,65,'Rotuma'),(957,65,'Western'),(958,67,'Kosrae'),(959,67,'Pohnpei'),(960,67,'Chuuk'),(961,67,'Yap'),(962,69,'Aquitaine'),(963,69,'Auvergne'),(964,69,'Basse-Normandie'),(965,69,'Bourgogne'),(966,69,'Bretagne'),(967,69,'Centre'),(968,69,'Champagne-Ardenne'),(969,69,'Corse'),(970,69,'Franche-Comte'),(971,69,'Haute-Normandie'),(972,69,'Ile-De-France'),(973,69,'Languedoc-Roussillon'),(974,69,'Limousin'),(975,69,'Lorraine'),(976,69,'Midi-Pyrenees'),(977,69,'Nord-Pas-De-Calais'),(978,69,'Pays De La Loire'),(979,69,'Picardie'),(980,69,'Poitou-Charentes'),(981,69,'Provence-Alpes-Cote D\'azur'),(982,69,'Rhone-Alpes'),(983,69,'Alsace'),(984,70,'Estuaire'),(985,70,'Haut-Ogooue'),(986,70,'Moyen-Ogooue'),(987,70,'Ngounie'),(988,70,'Nyanga'),(989,70,'Ogooue-Ivindo'),(990,70,'Ogooue-Lolo'),(991,70,'Ogooue-Maritime'),(992,70,'Woleu-Ntem'),(993,71,'Barking And Dagenham'),(994,71,'Barnet'),(995,71,'Barnsley'),(996,71,'Bath And North East Somerset'),(997,71,'Bedfordshire'),(998,71,'Bexley'),(999,71,'Birmingham'),(1000,71,'Blackburn With Darwen'),(1001,71,'Blackpool'),(1002,71,'Bolton'),(1003,71,'Bournemouth'),(1004,71,'Bracknell Forest'),(1005,71,'Bradford'),(1006,71,'Brent'),(1007,71,'Brighton And Hove'),(1008,71,'Bristol, City Of'),(1009,71,'Bromley'),(1010,71,'Buckinghamshire'),(1011,71,'Bury'),(1012,71,'Calderdale'),(1013,71,'Cambridgeshire'),(1014,71,'Camden'),(1015,71,'Cheshire'),(1016,71,'Cornwall'),(1017,71,'Coventry'),(1018,71,'Croydon'),(1019,71,'Cumbria'),(1020,71,'Darlington'),(1021,71,'Derby'),(1022,71,'Derbyshire'),(1023,71,'Devon'),(1024,71,'Doncaster'),(1025,71,'Dorset'),(1026,71,'Dudley'),(1027,71,'Durham'),(1028,71,'Ealing'),(1029,71,'East Riding Of Yorkshire'),(1030,71,'East Sussex'),(1031,71,'Enfield'),(1032,71,'Essex'),(1033,71,'Gateshead'),(1034,71,'Gloucestershire'),(1035,71,'Greenwich'),(1036,71,'Hackney'),(1037,71,'Halton'),(1038,71,'Hammersmith And Fulham'),(1039,71,'Hampshire'),(1040,71,'Haringey'),(1041,71,'Harrow'),(1042,71,'Hartlepool'),(1043,71,'Havering'),(1044,71,'Herefordshire'),(1045,71,'Hertford'),(1046,71,'Hillingdon'),(1047,71,'Hounslow'),(1048,71,'Isle Of Wight'),(1049,71,'Islington'),(1050,71,'Kensington And Chelsea'),(1051,71,'Kent'),(1052,71,'Kingston Upon Hull, City Of'),(1053,71,'Kingston Upon Thames'),(1054,71,'Kirklees'),(1055,71,'Knowsley'),(1056,71,'Lambeth'),(1057,71,'Lancashire'),(1058,71,'Leeds'),(1059,71,'Leicester'),(1060,71,'Leicestershire'),(1061,71,'Lewisham'),(1062,71,'Lincolnshire'),(1063,71,'Liverpool'),(1064,71,'London, City Of'),(1065,71,'Luton'),(1066,71,'Manchester'),(1067,71,'Medway'),(1068,71,'Merton'),(1069,71,'Middlesbrough'),(1070,71,'Milton Keynes'),(1071,71,'Newcastle Upon Tyne'),(1072,71,'Newham'),(1073,71,'Norfolk'),(1074,71,'Northamptonshire'),(1075,71,'North East Lincolnshire'),(1076,71,'North Lincolnshire'),(1077,71,'North Somerset'),(1078,71,'North Tyneside'),(1079,71,'Northumberland'),(1080,71,'North Yorkshire'),(1081,71,'Nottingham'),(1082,71,'Nottinghamshire'),(1083,71,'Oldham'),(1084,71,'Oxfordshire'),(1085,71,'Peterborough'),(1086,71,'Plymouth'),(1087,71,'Poole'),(1088,71,'Portsmouth'),(1089,71,'Reading'),(1090,71,'Redbridge'),(1091,71,'Redcar And Cleveland'),(1092,71,'Richmond Upon Thames'),(1093,71,'Rochdale'),(1094,71,'Rotherham'),(1095,71,'Rutland'),(1096,71,'Salford'),(1097,71,'Shropshire'),(1098,71,'Sandwell'),(1099,71,'Sefton'),(1100,71,'Sheffield'),(1101,71,'Slough'),(1102,71,'Solihull'),(1103,71,'Somerset'),(1104,71,'Southampton'),(1105,71,'Southend-On-Sea'),(1106,71,'South Gloucestershire'),(1107,71,'South Tyneside'),(1108,71,'Southwark'),(1109,71,'Staffordshire'),(1110,71,'St. Helens'),(1111,71,'Stockport'),(1112,71,'Stockton-On-Tees'),(1113,71,'Stoke-On-Trent'),(1114,71,'Suffolk'),(1115,71,'Sunderland'),(1116,71,'Surrey'),(1117,71,'Sutton'),(1118,71,'Swindon'),(1119,71,'Tameside'),(1120,71,'Telford And Wrekin'),(1121,71,'Thurrock'),(1122,71,'Torbay'),(1123,71,'Tower Hamlets'),(1124,71,'Trafford'),(1125,71,'Wakefield'),(1126,71,'Walsall'),(1127,71,'Waltham Forest'),(1128,71,'Wandsworth'),(1129,71,'Warrington'),(1130,71,'Warwickshire'),(1131,71,'West Berkshire'),(1132,71,'Westminster'),(1133,71,'West Sussex'),(1134,71,'Wigan'),(1135,71,'Wiltshire'),(1136,71,'Windsor And Maidenhead'),(1137,71,'Wirral'),(1138,71,'Wokingham'),(1139,71,'Wolverhampton'),(1140,71,'Worcestershire'),(1141,71,'York'),(1142,71,'Antrim'),(1143,71,'Ards'),(1144,71,'Armagh'),(1145,71,'Ballymena'),(1146,71,'Ballymoney'),(1147,71,'Banbridge'),(1148,71,'Belfast'),(1149,71,'Carrickfergus'),(1150,71,'Castlereagh'),(1151,71,'Coleraine'),(1152,71,'Cookstown'),(1153,71,'Craigavon'),(1154,71,'Down'),(1155,71,'Dungannon'),(1156,71,'Fermanagh'),(1157,71,'Larne'),(1158,71,'Limavady'),(1159,71,'Lisburn'),(1160,71,'Derry'),(1161,71,'Magherafelt'),(1162,71,'Moyle'),(1163,71,'Newry And Mourne'),(1164,71,'Newtownabbey'),(1165,71,'North Down'),(1166,71,'Omagh'),(1167,71,'Strabane'),(1168,71,'Aberdeen City'),(1169,71,'Aberdeenshire'),(1170,71,'Angus'),(1171,71,'Argyll And Bute'),(1172,71,'Scottish Borders, The'),(1173,71,'Clackmannanshire'),(1174,71,'Dumfries And Galloway'),(1175,71,'Dundee City'),(1176,71,'East Ayrshire'),(1177,71,'East Dunbartonshire'),(1178,71,'East Lothian'),(1179,71,'East Renfrewshire'),(1180,71,'Edinburgh, City Of'),(1181,71,'Falkirk'),(1182,71,'Fife'),(1183,71,'Glasgow City'),(1184,71,'Highland'),(1185,71,'Inverclyde'),(1186,71,'Midlothian'),(1187,71,'Moray'),(1188,71,'North Ayrshire'),(1189,71,'North Lanarkshire'),(1190,71,'Orkney'),(1191,71,'Perth And Kinross'),(1192,71,'Renfrewshire'),(1193,71,'Shetland Islands'),(1194,71,'South Ayrshire'),(1195,71,'South Lanarkshire'),(1196,71,'Stirling'),(1197,71,'West Dunbartonshire'),(1198,71,'Eilean Siar'),(1199,71,'West Lothian'),(1200,71,'Isle Of Anglesey'),(1201,71,'Blaenau Gwent'),(1202,71,'Bridgend'),(1203,71,'Caerphilly'),(1204,71,'Cardiff'),(1205,71,'Ceredigion'),(1206,71,'Carmarthenshire'),(1207,71,'Conwy'),(1208,71,'Denbighshire'),(1209,71,'Flintshire'),(1210,71,'Gwynedd'),(1211,71,'Merthyr Tydfil'),(1212,71,'Monmouthshire'),(1213,71,'Neath Port Talbot'),(1214,71,'Newport'),(1215,71,'Pembrokeshire'),(1216,71,'Powys'),(1217,71,'Rhondda Cynon Taff'),(1218,71,'Swansea'),(1219,71,'Torfaen'),(1220,71,'Vale Of Glamorgan, The'),(1221,71,'Wrexham'),(1222,71,'Bedfordshire'),(1223,71,'Central Bedfordshire'),(1224,71,'Cheshire East'),(1225,71,'Cheshire West And Chester'),(1226,71,'Isles Of Scilly'),(1227,72,'Saint Andrew'),(1228,72,'Saint David'),(1229,72,'Saint George'),(1230,72,'Saint John'),(1231,72,'Saint Mark'),(1232,72,'Saint Patrick'),(1233,73,'Abashis Raioni'),(1234,73,'Abkhazia'),(1235,73,'Adigenis Raioni'),(1236,73,'Ajaria'),(1237,73,'Akhalgoris Raioni'),(1238,73,'Akhalk\'alak\'is Raioni'),(1239,73,'Akhalts\'ikhis Raioni'),(1240,73,'Akhmetis Raioni'),(1241,73,'Ambrolauris Raioni'),(1242,73,'Aspindzis Raioni'),(1243,73,'Baghdat\'is Raioni'),(1244,73,'Bolnisis Raioni'),(1245,73,'Borjomis Raioni'),(1246,73,'Chiat\'ura'),(1247,73,'Ch\'khorotsqus Raioni'),(1248,73,'Ch\'okhatauris Raioni'),(1249,73,'Dedop\'listsqaros Raioni'),(1250,73,'Dmanisis Raioni'),(1251,73,'Dushet\'is Raioni'),(1252,73,'Gardabanis Raioni'),(1253,73,'Gori'),(1254,73,'Goris Raioni'),(1255,73,'Gurjaanis Raioni'),(1256,73,'Javis Raioni'),(1257,73,'K\'arelis Raioni'),(1258,73,'Kaspis Raioni'),(1259,73,'Kharagaulis Raioni'),(1260,73,'Khashuris Raioni'),(1261,73,'Khobis Raioni'),(1262,73,'Khonis Raioni'),(1263,73,'K\'ut\'aisi'),(1264,73,'Lagodekhis Raioni'),(1265,73,'Lanch\'khut\'is Raioni'),(1266,73,'Lentekhis Raioni'),(1267,73,'Marneulis Raioni'),(1268,73,'Martvilis Raioni'),(1269,73,'Mestiis Raioni'),(1270,73,'Mts\'khet\'is Raioni'),(1271,73,'Ninotsmindis Raioni'),(1272,73,'Onis Raioni'),(1273,73,'Ozurget\'is Raioni'),(1274,73,'P\'ot\'i'),(1275,73,'Qazbegis Raioni'),(1276,73,'Qvarlis Raioni'),(1277,73,'Rust\'avi'),(1278,73,'Sach\'kheris Raioni'),(1279,73,'Sagarejos Raioni'),(1280,73,'Samtrediis Raioni'),(1281,73,'Senakis Raioni'),(1282,73,'Sighnaghis Raioni'),(1283,73,'T\'bilisi'),(1284,73,'T\'elavis Raioni'),(1285,73,'T\'erjolis Raioni'),(1286,73,'T\'et\'ritsqaros Raioni'),(1287,73,'T\'ianet\'is Raioni'),(1288,73,'Tqibuli'),(1289,73,'Ts\'ageris Raioni'),(1290,73,'Tsalenjikhis Raioni'),(1291,73,'Tsalkis Raioni'),(1292,73,'Tsqaltubo'),(1293,73,'Vanis Raioni'),(1294,73,'Zestap\'onis Raioni'),(1295,73,'Zugdidi'),(1296,73,'Zugdidis Raioni'),(1297,76,'Greater Accra'),(1298,76,'Ashanti'),(1299,76,'Brong-Ahafo'),(1300,76,'Central'),(1301,76,'Eastern'),(1302,76,'Northern'),(1303,76,'Volta'),(1304,76,'Western'),(1305,76,'Upper East'),(1306,76,'Upper West'),(1307,78,'Nordgronland'),(1308,78,'Ostgronland'),(1309,78,'Vestgronland'),(1310,79,'Banjul'),(1311,79,'Lower River'),(1312,79,'Central River'),(1313,79,'Upper River'),(1314,79,'Western'),(1315,79,'North Bank'),(1316,80,'Beyla'),(1317,80,'Boffa'),(1318,80,'Boke'),(1319,80,'Conakry'),(1320,80,'Dabola'),(1321,80,'Dalaba'),(1322,80,'Dinguiraye'),(1323,80,'Faranah'),(1324,80,'Forecariah'),(1325,80,'Fria'),(1326,80,'Gaoual'),(1327,80,'Gueckedou'),(1328,80,'Kerouane'),(1329,80,'Kindia'),(1330,80,'Kissidougou'),(1331,80,'Koundara'),(1332,80,'Kouroussa'),(1333,80,'Macenta'),(1334,80,'Mali'),(1335,80,'Mamou'),(1336,80,'Pita'),(1337,80,'Telimele'),(1338,80,'Tougue'),(1339,80,'Yomou'),(1340,80,'Coyah'),(1341,80,'Dubreka'),(1342,80,'Kankan'),(1343,80,'Koubia'),(1344,80,'Labe'),(1345,80,'Lelouma'),(1346,80,'Lola'),(1347,80,'Mandiana'),(1348,80,'Nzerekore'),(1349,80,'Siguiri'),(1350,82,'Annobon'),(1351,82,'Bioko Norte'),(1352,82,'Bioko Sur'),(1353,82,'Centro Sur'),(1354,82,'Kie-Ntem'),(1355,82,'Litoral'),(1356,82,'Wele-Nzas'),(1357,83,'Evros'),(1358,83,'Rodhopi'),(1359,83,'Xanthi'),(1360,83,'Drama'),(1361,83,'Serrai'),(1362,83,'Kilkis'),(1363,83,'Pella'),(1364,83,'Florina'),(1365,83,'Kastoria'),(1366,83,'Grevena'),(1367,83,'Kozani'),(1368,83,'Imathia'),(1369,83,'Thessaloniki'),(1370,83,'Kavala'),(1371,83,'Khalkidhiki'),(1372,83,'Pieria'),(1373,83,'Ioannina'),(1374,83,'Thesprotia'),(1375,83,'Preveza'),(1376,83,'Arta'),(1377,83,'Larisa'),(1378,83,'Trikala'),(1379,83,'Kardhitsa'),(1380,83,'Magnisia'),(1381,83,'Kerkira'),(1382,83,'Levkas'),(1383,83,'Kefallinia'),(1384,83,'Zakinthos'),(1385,83,'Fthiotis'),(1386,83,'Evritania'),(1387,83,'Aitolia Kai Akarnania'),(1388,83,'Fokis'),(1389,83,'Voiotia'),(1390,83,'Evvoia'),(1391,83,'Attiki'),(1392,83,'Argolis'),(1393,83,'Korinthia'),(1394,83,'Akhaia'),(1395,83,'Ilia'),(1396,83,'Messinia'),(1397,83,'Arkadhia'),(1398,83,'Lakonia'),(1399,83,'Khania'),(1400,83,'Rethimni'),(1401,83,'Iraklion'),(1402,83,'Lasithi'),(1403,83,'Dhodhekanisos'),(1404,83,'Samos'),(1405,83,'Kikladhes'),(1406,83,'Khios'),(1407,83,'Lesvos'),(1408,85,'Alta Verapaz'),(1409,85,'Baja Verapaz'),(1410,85,'Chimaltenango'),(1411,85,'Chiquimula'),(1412,85,'El Progreso'),(1413,85,'Escuintla'),(1414,85,'Guatemala'),(1415,85,'Huehuetenango'),(1416,85,'Izabal'),(1417,85,'Jalapa'),(1418,85,'Jutiapa'),(1419,85,'Peten'),(1420,85,'Quetzaltenango'),(1421,85,'Quiche'),(1422,85,'Retalhuleu'),(1423,85,'Sacatepequez'),(1424,85,'San Marcos'),(1425,85,'Santa Rosa'),(1426,85,'Solola'),(1427,85,'Suchitepequez'),(1428,85,'Totonicapan'),(1429,85,'Zacapa'),(1430,86,'Bafata'),(1431,86,'Quinara'),(1432,86,'Oio'),(1433,86,'Bolama'),(1434,86,'Cacheu'),(1435,86,'Tombali'),(1436,86,'Gabu'),(1437,86,'Bissau'),(1438,86,'Biombo'),(1439,87,'Barima-Waini'),(1440,87,'Cuyuni-Mazaruni'),(1441,87,'Demerara-Mahaica'),(1442,87,'East Berbice-Corentyne'),(1443,87,'Essequibo Islands-West Demerara'),(1444,87,'Mahaica-Berbice'),(1445,87,'Pomeroon-Supenaam'),(1446,87,'Potaro-Siparuni'),(1447,87,'Upper Demerara-Berbice'),(1448,87,'Upper Takutu-Upper Essequibo'),(1449,89,'Atlantida'),(1450,89,'Choluteca'),(1451,89,'Colon'),(1452,89,'Comayagua'),(1453,89,'Copan'),(1454,89,'Cortes'),(1455,89,'El Paraiso'),(1456,89,'Francisco Morazan'),(1457,89,'Gracias A Dios'),(1458,89,'Intibuca'),(1459,89,'Islas De La Bahia'),(1460,89,'La Paz'),(1461,89,'Lempira'),(1462,89,'Ocotepeque'),(1463,89,'Olancho'),(1464,89,'Santa Barbara'),(1465,89,'Valle'),(1466,89,'Yoro'),(1467,90,'Bjelovarsko-Bilogorska'),(1468,90,'Brodsko-Posavska'),(1469,90,'Dubrovacko-Neretvanska'),(1470,90,'Istarska'),(1471,90,'Karlovacka'),(1472,90,'Koprivnicko-Krizevacka'),(1473,90,'Krapinsko-Zagorska'),(1474,90,'Licko-Senjska'),(1475,90,'Medimurska'),(1476,90,'Osjecko-Baranjska'),(1477,90,'Pozesko-Slavonska'),(1478,90,'Primorsko-Goranska'),(1479,90,'Sibensko-Kninska'),(1480,90,'Sisacko-Moslavacka'),(1481,90,'Splitsko-Dalmatinska'),(1482,90,'Varazdinska'),(1483,90,'Viroviticko-Podravska'),(1484,90,'Vukovarsko-Srijemska'),(1485,90,'Zadarska'),(1486,90,'Zagrebacka'),(1487,90,'Grad Zagreb'),(1488,91,'Nord-Ouest'),(1489,91,'Artibonite'),(1490,91,'Centre'),(1491,91,'Nord'),(1492,91,'Nord-Est'),(1493,91,'Ouest'),(1494,91,'Sud'),(1495,91,'Sud-Est'),(1496,91,'Grand\' Anse'),(1497,91,'Nippes'),(1498,92,'Bacs-Kiskun'),(1499,92,'Baranya'),(1500,92,'Bekes'),(1501,92,'Borsod-Abauj-Zemplen'),(1502,92,'Budapest'),(1503,92,'Csongrad'),(1504,92,'Debrecen'),(1505,92,'Fejer'),(1506,92,'Gyor-Moson-Sopron'),(1507,92,'Hajdu-Bihar'),(1508,92,'Heves'),(1509,92,'Komarom-Esztergom'),(1510,92,'Miskolc'),(1511,92,'Nograd'),(1512,92,'Pecs'),(1513,92,'Pest'),(1514,92,'Somogy'),(1515,92,'Szabolcs-Szatmar-Bereg'),(1516,92,'Szeged'),(1517,92,'Jasz-Nagykun-Szolnok'),(1518,92,'Tolna'),(1519,92,'Vas'),(1520,92,'Veszprem'),(1521,92,'Zala'),(1522,92,'Gyor'),(1523,92,'Bekescsaba'),(1524,92,'Dunaujvaros'),(1525,92,'Eger'),(1526,92,'Hodmezovasarhely'),(1527,92,'Kaposvar'),(1528,92,'Kecskemet'),(1529,92,'Nagykanizsa'),(1530,92,'Nyiregyhaza'),(1531,92,'Sopron'),(1532,92,'Szekesfehervar'),(1533,92,'Szolnok'),(1534,92,'Szombathely'),(1535,92,'Tatabanya'),(1536,92,'Veszprem'),(1537,92,'Zalaegerszeg'),(1538,92,'Salgotarjan'),(1539,92,'Szekszard'),(1540,92,'Erd'),(1541,93,'Aceh'),(1542,93,'Bali'),(1543,93,'Bengkulu'),(1544,93,'Jakarta Raya'),(1545,93,'Jambi'),(1546,93,'Jawa Tengah'),(1547,93,'Jawa Timur'),(1548,93,'Yogyakarta'),(1549,93,'Kalimantan Barat'),(1550,93,'Kalimantan Selatan'),(1551,93,'Kalimantan Tengah'),(1552,93,'Kalimantan Timur'),(1553,93,'Lampung'),(1554,93,'Nusa Tenggara Barat'),(1555,93,'Nusa Tenggara Timur'),(1556,93,'Sulawesi Tengah'),(1557,93,'Sulawesi Tenggara'),(1558,93,'Sumatera Barat'),(1559,93,'Sumatera Utara'),(1560,93,'Maluku'),(1561,93,'Maluku Utara'),(1562,93,'Jawa Barat'),(1563,93,'Sulawesi Utara'),(1564,93,'Sumatera Selatan'),(1565,93,'Banten'),(1566,93,'Gorontalo'),(1567,93,'Kepulauan Bangka Belitung'),(1568,93,'Papua'),(1569,93,'Riau'),(1570,93,'Sulawesi Selatan'),(1571,93,'Irian Jaya Barat'),(1572,93,'Kepulauan Riau'),(1573,93,'Sulawesi Barat'),(1574,94,'Carlow'),(1575,94,'Cavan'),(1576,94,'Clare'),(1577,94,'Cork'),(1578,94,'Donegal'),(1579,94,'Dublin'),(1580,94,'Galway'),(1581,94,'Kerry'),(1582,94,'Kildare'),(1583,94,'Kilkenny'),(1584,94,'Leitrim'),(1585,94,'Laois'),(1586,94,'Limerick'),(1587,94,'Longford'),(1588,94,'Louth'),(1589,94,'Mayo'),(1590,94,'Meath'),(1591,94,'Monaghan'),(1592,94,'Offaly'),(1593,94,'Roscommon'),(1594,94,'Sligo'),(1595,94,'Tipperary'),(1596,94,'Waterford'),(1597,94,'Westmeath'),(1598,94,'Wexford'),(1599,94,'Wicklow'),(1600,95,'Hadarom'),(1601,95,'Hamerkaz'),(1602,95,'Hazafon'),(1603,95,'Hefa'),(1604,95,'Tel Aviv'),(1605,95,'Yerushalayim'),(1606,97,'Andaman And Nicobar Islands'),(1607,97,'Andhra Pradesh'),(1608,97,'Assam'),(1609,97,'Chandigarh'),(1610,97,'Dadra And Nagar Haveli'),(1611,97,'Delhi'),(1612,97,'Gujarat'),(1613,97,'Haryana'),(1614,97,'Himachal Pradesh'),(1615,97,'Jammu And Kashmir'),(1616,97,'Kerala'),(1617,97,'Lakshadweep'),(1618,97,'Maharashtra'),(1619,97,'Manipur'),(1620,97,'Meghalaya'),(1621,97,'Karnataka'),(1622,97,'Nagaland'),(1623,97,'Orissa'),(1624,97,'Puducherry'),(1625,97,'Punjab'),(1626,97,'Rajasthan'),(1627,97,'Tamil Nadu'),(1628,97,'Tripura'),(1629,97,'West Bengal'),(1630,97,'Sikkim'),(1631,97,'Arunachal Pradesh'),(1632,97,'Mizoram'),(1633,97,'Daman And Diu'),(1634,97,'Goa'),(1635,97,'Bihar'),(1636,97,'Madhya Pradesh'),(1637,97,'Uttar Pradesh'),(1638,97,'Chhattisgarh'),(1639,97,'Jharkhand'),(1640,97,'Uttarakhand'),(1641,98,'Al Anbar'),(1642,98,'Al Basrah'),(1643,98,'Al Muthanna'),(1644,98,'Al Qadisiyah'),(1645,98,'As Sulaymaniyah'),(1646,98,'Babil'),(1647,98,'Baghdad'),(1648,98,'Dahuk'),(1649,98,'Dhi Qar'),(1650,98,'Diyala'),(1651,98,'Arbil'),(1652,98,'Karbala\''),(1653,98,'At Ta\'mim'),(1654,98,'Maysan'),(1655,98,'Ninawa'),(1656,98,'Wasit'),(1657,98,'An Najaf'),(1658,98,'Salah Ad Din'),(1659,99,'Azarbayjan-E Bakhtari'),(1660,99,'Chahar Mahall Va Bakhtiari'),(1661,99,'Sistan Va Baluchestan'),(1662,99,'Kohkiluyeh Va Buyer Ahmadi'),(1663,99,'Fars'),(1664,99,'Gilan'),(1665,99,'Hamadan'),(1666,99,'Ilam'),(1667,99,'Hormozgan'),(1668,99,'Kerman'),(1669,99,'Bakhtaran'),(1670,99,'Khuzestan'),(1671,99,'Kordestan'),(1672,99,'Mazandaran'),(1673,99,'Semnan Province'),(1674,99,'Markazi'),(1675,99,'Zanjan'),(1676,99,'Bushehr'),(1677,99,'Lorestan'),(1678,99,'Markazi'),(1679,99,'Semnan'),(1680,99,'Tehran'),(1681,99,'Zanjan'),(1682,99,'Esfahan'),(1683,99,'Kerman'),(1684,99,'Khorasan'),(1685,99,'Yazd'),(1686,99,'Ardabil'),(1687,99,'East Azarbaijan'),(1688,99,'Markazi'),(1689,99,'Mazandaran'),(1690,99,'Zanjan'),(1691,99,'Golestan'),(1692,99,'Qazvin'),(1693,99,'Qom'),(1694,99,'Yazd'),(1695,99,'Khorasan-E Janubi'),(1696,99,'Khorasan-E Razavi'),(1697,99,'Khorasan-E Shemali'),(1698,99,'Alborz'),(1699,100,'Arnessysla'),(1700,100,'Austur-Hunavatnssysla'),(1701,100,'Austur-Skaftafellssysla'),(1702,100,'Borgarfjardarsysla'),(1703,100,'Eyjafjardarsysla'),(1704,100,'Gullbringusysla'),(1705,100,'Kjosarsysla'),(1706,100,'Myrasysla'),(1707,100,'Nordur-Mulasysla'),(1708,100,'Nordur-Tingeyjarsysla'),(1709,100,'Rangarvallasysla'),(1710,100,'Skagafjardarsysla'),(1711,100,'Snafellsnes- Og Hnappadalssysla'),(1712,100,'Strandasysla'),(1713,100,'Sudur-Mulasysla'),(1714,100,'Sudur-Tingeyjarsysla'),(1715,100,'Vestur-Bardastrandarsysla'),(1716,100,'Vestur-Hunavatnssysla'),(1717,100,'Vestur-Isafjardarsysla'),(1718,100,'Vestur-Skaftafellssysla'),(1719,100,'Austurland'),(1720,100,'Hofuoborgarsvaoio'),(1721,100,'Norourland Eystra'),(1722,100,'Norourland Vestra'),(1723,100,'Suourland'),(1724,100,'Suournes'),(1725,100,'Vestfiroir'),(1726,100,'Vesturland'),(1727,101,'Abruzzi'),(1728,101,'Basilicata'),(1729,101,'Calabria'),(1730,101,'Campania'),(1731,101,'Emilia-Romagna'),(1732,101,'Friuli-Venezia Giulia'),(1733,101,'Lazio'),(1734,101,'Liguria'),(1735,101,'Lombardia'),(1736,101,'Marche'),(1737,101,'Molise'),(1738,101,'Piemonte'),(1739,101,'Puglia'),(1740,101,'Sardegna'),(1741,101,'Sicilia'),(1742,101,'Toscana'),(1743,101,'Trentino-Alto Adige'),(1744,101,'Umbria'),(1745,101,'Valle D\'aosta'),(1746,101,'Veneto'),(1747,103,'Clarendon'),(1748,103,'Hanover'),(1749,103,'Manchester'),(1750,103,'Portland'),(1751,103,'Saint Andrew'),(1752,103,'Saint Ann'),(1753,103,'Saint Catherine'),(1754,103,'Saint Elizabeth'),(1755,103,'Saint James'),(1756,103,'Saint Mary'),(1757,103,'Saint Thomas'),(1758,103,'Trelawny'),(1759,103,'Westmoreland'),(1760,103,'Kingston'),(1761,104,'Al Balqa\''),(1762,104,'Al Karak'),(1763,104,'At Tafilah'),(1764,104,'Al Mafraq'),(1765,104,'Amman'),(1766,104,'Az Zaraqa'),(1767,104,'Irbid'),(1768,104,'Ma\'an'),(1769,104,'Ajlun'),(1770,104,'Al Aqabah'),(1771,104,'Jarash'),(1772,104,'Madaba'),(1773,105,'Aichi'),(1774,105,'Akita'),(1775,105,'Aomori'),(1776,105,'Chiba'),(1777,105,'Ehime'),(1778,105,'Fukui'),(1779,105,'Fukuoka'),(1780,105,'Fukushima'),(1781,105,'Gifu'),(1782,105,'Gumma'),(1783,105,'Hiroshima'),(1784,105,'Hokkaido'),(1785,105,'Hyogo'),(1786,105,'Ibaraki'),(1787,105,'Ishikawa'),(1788,105,'Iwate'),(1789,105,'Kagawa'),(1790,105,'Kagoshima'),(1791,105,'Kanagawa'),(1792,105,'Kochi'),(1793,105,'Kumamoto'),(1794,105,'Kyoto'),(1795,105,'Mie'),(1796,105,'Miyagi'),(1797,105,'Miyazaki'),(1798,105,'Nagano'),(1799,105,'Nagasaki'),(1800,105,'Nara'),(1801,105,'Niigata'),(1802,105,'Oita'),(1803,105,'Okayama'),(1804,105,'Osaka'),(1805,105,'Saga'),(1806,105,'Saitama'),(1807,105,'Shiga'),(1808,105,'Shimane'),(1809,105,'Shizuoka'),(1810,105,'Tochigi'),(1811,105,'Tokushima'),(1812,105,'Tokyo'),(1813,105,'Tottori'),(1814,105,'Toyama'),(1815,105,'Wakayama'),(1816,105,'Yamagata'),(1817,105,'Yamaguchi'),(1818,105,'Yamanashi'),(1819,105,'Okinawa'),(1820,106,'Central'),(1821,106,'Coast'),(1822,106,'Eastern'),(1823,106,'Nairobi Area'),(1824,106,'North-Eastern'),(1825,106,'Nyanza'),(1826,106,'Rift Valley'),(1827,106,'Western'),(1828,107,'Bishkek'),(1829,107,'Chuy'),(1830,107,'Jalal-Abad'),(1831,107,'Naryn'),(1832,107,'Osh'),(1833,107,'Talas'),(1834,107,'Ysyk-Kol'),(1835,107,'Osh'),(1836,107,'Batken'),(1837,108,'Batdambang'),(1838,108,'Kampong Cham'),(1839,108,'Kampong Chhnang'),(1840,108,'Kampong Speu'),(1841,108,'Kampong Thum'),(1842,108,'Kampot'),(1843,108,'Kandal'),(1844,108,'Koh Kong'),(1845,108,'Kracheh'),(1846,108,'Mondulkiri'),(1847,108,'Phnum Penh'),(1848,108,'Pursat'),(1849,108,'Preah Vihear'),(1850,108,'Prey Veng'),(1851,108,'Ratanakiri Kiri'),(1852,108,'Siem Reap'),(1853,108,'Stung Treng'),(1854,108,'Svay Rieng'),(1855,108,'Takeo'),(1856,108,'Banteay Meanchey'),(1857,108,'Batdambang'),(1858,108,'Pailin'),(1859,109,'Gilbert Islands'),(1860,109,'Line Islands'),(1861,109,'Phoenix Islands'),(1862,110,'Anjouan'),(1863,110,'Grande Comore'),(1864,110,'Moheli'),(1865,111,'Christ Church Nichola Town'),(1866,111,'Saint Anne Sandy Point'),(1867,111,'Saint George Basseterre'),(1868,111,'Saint George Gingerland'),(1869,111,'Saint James Windward'),(1870,111,'Saint John Capisterre'),(1871,111,'Saint John Figtree'),(1872,111,'Saint Mary Cayon'),(1873,111,'Saint Paul Capisterre'),(1874,111,'Saint Paul Charlestown'),(1875,111,'Saint Peter Basseterre'),(1876,111,'Saint Thomas Lowland'),(1877,111,'Saint Thomas Middle Island'),(1878,111,'Trinity Palmetto Point'),(1879,112,'Chagang-Do'),(1880,112,'Hamgyong-Namdo'),(1881,112,'Hwanghae-Namdo'),(1882,112,'Hwanghae-Bukto'),(1883,112,'Kaesong-Si'),(1884,112,'Kangwon-Do'),(1885,112,'P\'yongan-Bukto'),(1886,112,'P\'yongyang-Si'),(1887,112,'Yanggang-Do'),(1888,112,'Namp\'o-Si'),(1889,112,'P\'yongan-Namdo'),(1890,112,'Hamgyong-Bukto'),(1891,112,'Najin Sonbong-Si'),(1892,113,'Cheju-Do'),(1893,113,'Cholla-Bukto'),(1894,113,'Ch\'ungch\'ong-Bukto'),(1895,113,'Kangwon-Do'),(1896,113,'Pusan-Jikhalsi'),(1897,113,'Seoul-T\'ukpyolsi'),(1898,113,'Inch\'on-Jikhalsi'),(1899,113,'Kyonggi-Do'),(1900,113,'Kyongsang-Bukto'),(1901,113,'Taegu-Jikhalsi'),(1902,113,'Cholla-Namdo'),(1903,113,'Ch\'ungch\'ong-Namdo'),(1904,113,'Kwangju-Jikhalsi'),(1905,113,'Taejon-Jikhalsi'),(1906,113,'Kyongsang-Namdo'),(1907,113,'Ulsan-Gwangyoksi'),(1908,114,'Al Ahmadi'),(1909,114,'Al Kuwayt'),(1910,114,'Al Jahra'),(1911,114,'Al Farwaniyah'),(1912,114,'Hawalli'),(1913,114,'Mubarak Al Kabir'),(1914,115,'Creek'),(1915,115,'Eastern'),(1916,115,'Midland'),(1917,115,'South Town'),(1918,115,'Spot Bay'),(1919,115,'Stake Bay'),(1920,115,'West End'),(1921,115,'Western'),(1922,116,'Almaty'),(1923,116,'Almaty City'),(1924,116,'Aqmola'),(1925,116,'Aqtobe'),(1926,116,'Astana'),(1927,116,'Atyrau'),(1928,116,'West Kazakhstan'),(1929,116,'Bayqonyr'),(1930,116,'Mangghystau'),(1931,116,'South Kazakhstan'),(1932,116,'Pavlodar'),(1933,116,'Qaraghandy'),(1934,116,'Qostanay'),(1935,116,'Qyzylorda'),(1936,116,'East Kazakhstan'),(1937,116,'North Kazakhstan'),(1938,116,'Zhambyl'),(1939,117,'Attapu'),(1940,117,'Champasak'),(1941,117,'Houaphan'),(1942,117,'Khammouan'),(1943,117,'Louang Namtha'),(1944,117,'Oudomxai'),(1945,117,'Phongsali'),(1946,117,'Saravan'),(1947,117,'Savannakhet'),(1948,117,'Vientiane'),(1949,117,'Xaignabouri'),(1950,117,'Xiangkhoang'),(1951,117,'Louangphrabang'),(1952,118,'Beqaa'),(1953,118,'Al Janub'),(1954,118,'Liban-Nord'),(1955,118,'Beyrouth'),(1956,118,'Mont-Liban'),(1957,118,'Liban-Sud'),(1958,118,'Nabatiye'),(1959,118,'Beqaa'),(1960,118,'Liban-Nord'),(1961,118,'Aakk,r'),(1962,118,'Baalbek-Hermel'),(1963,119,'Anse-La-Raye'),(1964,119,'Dauphin'),(1965,119,'Castries'),(1966,119,'Choiseul'),(1967,119,'Dennery'),(1968,119,'Gros-Islet'),(1969,119,'Laborie'),(1970,119,'Micoud'),(1971,119,'Soufriere'),(1972,119,'Vieux-Fort'),(1973,119,'Praslin'),(1974,120,'Balzers'),(1975,120,'Eschen'),(1976,120,'Gamprin'),(1977,120,'Mauren'),(1978,120,'Planken'),(1979,120,'Ruggell'),(1980,120,'Schaan'),(1981,120,'Schellenberg'),(1982,120,'Triesen'),(1983,120,'Triesenberg'),(1984,120,'Vaduz'),(1985,120,'Gbarpolu'),(1986,120,'River Gee'),(1987,121,'Central'),(1988,121,'North Central'),(1989,121,'North Western'),(1990,121,'Sabaragamuwa'),(1991,121,'Southern'),(1992,121,'Uva'),(1993,121,'Western'),(1994,121,'Eastern'),(1995,121,'Northern'),(1996,122,'Bong'),(1997,122,'Grand Cape Mount'),(1998,122,'Lofa'),(1999,122,'Maryland'),(2000,122,'Monrovia'),(2001,122,'Nimba'),(2002,122,'Sino'),(2003,122,'Grand Bassa'),(2004,122,'Grand Cape Mount'),(2005,122,'Maryland'),(2006,122,'Montserrado'),(2007,122,'Margibi'),(2008,122,'River Cess'),(2009,122,'Grand Gedeh'),(2010,122,'Lofa'),(2011,122,'Gbarpolu'),(2012,122,'River Gee'),(2013,123,'Berea'),(2014,123,'Butha-Buthe'),(2015,123,'Leribe'),(2016,123,'Mafeteng'),(2017,123,'Maseru'),(2018,123,'Mohales Hoek'),(2019,123,'Mokhotlong'),(2020,123,'Qachas Nek'),(2021,123,'Quthing'),(2022,123,'Thaba-Tseka'),(2023,124,'Alytaus Apskritis'),(2024,124,'Kauno Apskritis'),(2025,124,'Klaipedos Apskritis'),(2026,124,'Marijampoles Apskritis'),(2027,124,'Panevezio Apskritis'),(2028,124,'Siauliu Apskritis'),(2029,124,'Taurages Apskritis'),(2030,124,'Telsiu Apskritis'),(2031,124,'Utenos Apskritis'),(2032,124,'Vilniaus Apskritis'),(2033,125,'Diekirch'),(2034,125,'Grevenmacher'),(2035,125,'Luxembourg'),(2036,126,'Aizkraukles'),(2037,126,'Aluksnes'),(2038,126,'Balvu'),(2039,126,'Bauskas'),(2040,126,'Cesu'),(2041,126,'Daugavpils'),(2042,126,'Daugavpils'),(2043,126,'Dobeles'),(2044,126,'Gulbenes'),(2045,126,'Jekabpils'),(2046,126,'Jelgava'),(2047,126,'Jelgavas'),(2048,126,'Jurmala'),(2049,126,'Kraslavas'),(2050,126,'Kuldigas'),(2051,126,'Liepaja'),(2052,126,'Liepajas'),(2053,126,'Limbazu'),(2054,126,'Ludzas'),(2055,126,'Madonas'),(2056,126,'Ogres'),(2057,126,'Preilu'),(2058,126,'Rezekne'),(2059,126,'Rezeknes'),(2060,126,'Riga'),(2061,126,'Rigas'),(2062,126,'Saldus'),(2063,126,'Talsu'),(2064,126,'Tukuma'),(2065,126,'Valkas'),(2066,126,'Valmieras'),(2067,126,'Ventspils'),(2068,126,'Ventspils'),(2069,127,'Al Aziziyah'),(2070,127,'Al Jufrah'),(2071,127,'Al Kufrah'),(2072,127,'Ash Shati\''),(2073,127,'Murzuq'),(2074,127,'Sabha'),(2075,127,'Tarhunah'),(2076,127,'Tubruq'),(2077,127,'Zlitan'),(2078,127,'Ajdabiya'),(2079,127,'Al Fatih'),(2080,127,'Al Jabal Al Akhdar'),(2081,127,'Al Khums'),(2082,127,'An Nuqat Al Khams'),(2083,127,'Awbari'),(2084,127,'Az Zawiyah'),(2085,127,'Banghazi'),(2086,127,'Darnah'),(2087,127,'Ghadamis'),(2088,127,'Gharyan'),(2089,127,'Misratah'),(2090,127,'Sawfajjin'),(2091,127,'Surt'),(2092,127,'Tarabulus'),(2093,127,'Yafran'),(2094,128,'Grand Casablanca'),(2095,128,'Fes-Boulemane'),(2096,128,'Marrakech-Tensift-Al Haouz'),(2097,128,'Meknes-Tafilalet'),(2098,128,'Rabat-Sale-Zemmour-Zaer'),(2099,128,'Chaouia-Ouardigha'),(2100,128,'Doukkala-Abda'),(2101,128,'Gharb-Chrarda-Beni Hssen'),(2102,128,'Guelmim-Es Smara'),(2103,128,'Oriental'),(2104,128,'Souss-Massa-Dr,a'),(2105,128,'Tadla-Azilal'),(2106,128,'Tanger-Tetouan'),(2107,128,'Taza-Al Hoceima-Taounate'),(2108,128,'La,Youne-Boujdour-Sakia El Hamra'),(2109,129,'La Condamine'),(2110,129,'Monaco'),(2111,129,'Monte-Carlo'),(2112,130,'Gagauzia'),(2113,130,'Chisinau'),(2114,130,'Stinga Nistrului'),(2115,130,'Anenii Noi'),(2116,130,'Balti'),(2117,130,'Basarabeasca'),(2118,130,'Bender'),(2119,130,'Briceni'),(2120,130,'Cahul'),(2121,130,'Cantemir'),(2122,130,'Calarasi'),(2123,130,'Causeni'),(2124,130,'Cimislia'),(2125,130,'Criuleni'),(2126,130,'Donduseni'),(2127,130,'Drochia'),(2128,130,'Dubasari'),(2129,130,'Edinet'),(2130,130,'Falesti'),(2131,130,'Floresti'),(2132,130,'Glodeni'),(2133,130,'Hincesti'),(2134,130,'Ialoveni'),(2135,130,'Leova'),(2136,130,'Nisporeni'),(2137,130,'Ocnita'),(2138,130,'Orhei'),(2139,130,'Rezina'),(2140,130,'Riscani'),(2141,130,'Singerei'),(2142,130,'Soldanesti'),(2143,130,'Soroca'),(2144,130,'Stefan-Voda'),(2145,130,'Straseni'),(2146,130,'Taraclia'),(2147,130,'Telenesti'),(2148,130,'Ungheni'),(2149,132,'Antsiranana'),(2150,132,'Fianarantsoa'),(2151,132,'Mahajanga'),(2152,132,'Toamasina'),(2153,132,'Antananarivo'),(2154,132,'Toliara'),(2155,134,'Aracinovo'),(2156,134,'Bac'),(2157,134,'Belcista'),(2158,134,'Berovo'),(2159,134,'Bistrica'),(2160,134,'Bitola'),(2161,134,'Blatec'),(2162,134,'Bogdanci'),(2163,134,'Bogomila'),(2164,134,'Bogovinje'),(2165,134,'Bosilovo'),(2166,134,'Brvenica'),(2167,134,'Cair'),(2168,134,'Capari'),(2169,134,'Caska'),(2170,134,'Cegrane'),(2171,134,'Centar'),(2172,134,'Centar Zupa'),(2173,134,'Cesinovo'),(2174,134,'Cucer-Sandevo'),(2175,134,'Debar'),(2176,134,'Delcevo'),(2177,134,'Delogozdi'),(2178,134,'Demir Hisar'),(2179,134,'Demir Kapija'),(2180,134,'Dobrusevo'),(2181,134,'Dolna Banjica'),(2182,134,'Dolneni'),(2183,134,'Dorce Petrov'),(2184,134,'Drugovo'),(2185,134,'Dzepciste'),(2186,134,'Gazi Baba'),(2187,134,'Gevgelija'),(2188,134,'Gostivar'),(2189,134,'Gradsko'),(2190,134,'Ilinden'),(2191,134,'Izvor'),(2192,134,'Jegunovce'),(2193,134,'Kamenjane'),(2194,134,'Karbinci'),(2195,134,'Karpos'),(2196,134,'Kavadarci'),(2197,134,'Kicevo'),(2198,134,'Kisela Voda'),(2199,134,'Klecevce'),(2200,134,'Kocani'),(2201,134,'Konce'),(2202,134,'Kondovo'),(2203,134,'Konopiste'),(2204,134,'Kosel'),(2205,134,'Kratovo'),(2206,134,'Kriva Palanka'),(2207,134,'Krivogastani'),(2208,134,'Krusevo'),(2209,134,'Kuklis'),(2210,134,'Kukurecani'),(2211,134,'Kumanovo'),(2212,134,'Labunista'),(2213,134,'Lipkovo'),(2214,134,'Lozovo'),(2215,134,'Lukovo'),(2216,134,'Makedonska Kamenica'),(2217,134,'Makedonski Brod'),(2218,134,'Mavrovi Anovi'),(2219,134,'Meseista'),(2220,134,'Miravci'),(2221,134,'Mogila'),(2222,134,'Murtino'),(2223,134,'Negotino'),(2224,134,'Negotino-Polosko'),(2225,134,'Novaci'),(2226,134,'Novo Selo'),(2227,134,'Oblesevo'),(2228,134,'Ohrid'),(2229,134,'Orasac'),(2230,134,'Orizari'),(2231,134,'Oslomej'),(2232,134,'Pehcevo'),(2233,134,'Petrovec'),(2234,134,'Plasnica'),(2235,134,'Podares'),(2236,134,'Prilep'),(2237,134,'Probistip'),(2238,134,'Radovis'),(2239,134,'Rankovce'),(2240,134,'Resen'),(2241,134,'Rosoman'),(2242,134,'Rostusa'),(2243,134,'Samokov'),(2244,134,'Saraj'),(2245,134,'Sipkovica'),(2246,134,'Sopiste'),(2247,134,'Sopotnica'),(2248,134,'Srbinovo'),(2249,134,'Staravina'),(2250,134,'Star Dojran'),(2251,134,'Staro Nagoricane'),(2252,134,'Stip'),(2253,134,'Struga'),(2254,134,'Strumica'),(2255,134,'Studenicani'),(2256,134,'Suto Orizari'),(2257,134,'Sveti Nikole'),(2258,134,'Tearce'),(2259,134,'Tetovo'),(2260,134,'Topolcani'),(2261,134,'Valandovo'),(2262,134,'Vasilevo'),(2263,134,'Veles'),(2264,134,'Velesta'),(2265,134,'Vevcani'),(2266,134,'Vinica'),(2267,134,'Vitoliste'),(2268,134,'Vranestica'),(2269,134,'Vrapciste'),(2270,134,'Vratnica'),(2271,134,'Vrutok'),(2272,134,'Zajas'),(2273,134,'Zelenikovo'),(2274,134,'Zelino'),(2275,134,'Zitose'),(2276,134,'Zletovo'),(2277,134,'Zrnovci'),(2278,135,'Bamako'),(2279,135,'Kayes'),(2280,135,'Mopti'),(2281,135,'Segou'),(2282,135,'Sikasso'),(2283,135,'Koulikoro'),(2284,135,'Tombouctou'),(2285,135,'Gao'),(2286,135,'Kidal'),(2287,136,'Rakhine State'),(2288,136,'Chin State'),(2289,136,'Irrawaddy'),(2290,136,'Kachin State'),(2291,136,'Karan State'),(2292,136,'Kayah State'),(2293,136,'Magwe'),(2294,136,'Mandalay'),(2295,136,'Pegu'),(2296,136,'Sagaing'),(2297,136,'Shan State'),(2298,136,'Tenasserim'),(2299,136,'Mon State'),(2300,136,'Rangoon'),(2301,136,'Yangon'),(2302,137,'Arhangay'),(2303,137,'Bayanhongor'),(2304,137,'Bayan-Olgiy'),(2305,137,'Darhan'),(2306,137,'Dornod'),(2307,137,'Dornogovi'),(2308,137,'Dundgovi'),(2309,137,'Dzavhan'),(2310,137,'Govi-Altay'),(2311,137,'Hentiy'),(2312,137,'Hovd'),(2313,137,'Hovsgol'),(2314,137,'Omnogovi'),(2315,137,'Ovorhangay'),(2316,137,'Selenge'),(2317,137,'Suhbaatar'),(2318,137,'Tov'),(2319,137,'Uvs'),(2320,137,'Ulaanbaatar'),(2321,137,'Bulgan'),(2322,137,'Erdenet'),(2323,137,'Darhan-Uul'),(2324,137,'Govisumber'),(2325,137,'Orhon'),(2326,138,'Ilhas'),(2327,138,'Macau'),(2328,141,'Hodh Ech Chargui'),(2329,141,'Hodh El Gharbi'),(2330,141,'Assaba'),(2331,141,'Gorgol'),(2332,141,'Brakna'),(2333,141,'Trarza'),(2334,141,'Adrar'),(2335,141,'Dakhlet Nouadhibou'),(2336,141,'Tagant'),(2337,141,'Guidimaka'),(2338,141,'Tiris Zemmour'),(2339,141,'Inchiri'),(2340,142,'Saint Anthony'),(2341,142,'Saint Georges'),(2342,142,'Saint Peter'),(2343,144,'Black River'),(2344,144,'Flacq'),(2345,144,'Grand Port'),(2346,144,'Moka'),(2347,144,'Pamplemousses'),(2348,144,'Plaines Wilhems'),(2349,144,'Port Louis'),(2350,144,'Riviere Du Rempart'),(2351,144,'Savanne'),(2352,144,'Agalega Islands'),(2353,144,'Cargados Carajos'),(2354,144,'Rodrigues'),(2355,145,'Seenu'),(2356,145,'Laamu'),(2357,145,'Alifu'),(2358,145,'Baa'),(2359,145,'Dhaalu'),(2360,145,'Faafu '),(2361,145,'Gaafu Alifu'),(2362,145,'Gaafu Dhaalu'),(2363,145,'Haa Alifu'),(2364,145,'Haa Dhaalu'),(2365,145,'Kaafu'),(2366,145,'Lhaviyani'),(2367,145,'Maale'),(2368,145,'Meemu'),(2369,145,'Gnaviyani'),(2370,145,'Noonu'),(2371,145,'Raa'),(2372,145,'Shaviyani'),(2373,145,'Thaa'),(2374,145,'Vaavu'),(2375,146,'Chikwawa'),(2376,146,'Chiradzulu'),(2377,146,'Chitipa'),(2378,146,'Thyolo'),(2379,146,'Dedza'),(2380,146,'Dowa'),(2381,146,'Karonga'),(2382,146,'Kasungu'),(2383,146,'Lilongwe'),(2384,146,'Mangochi'),(2385,146,'Mchinji'),(2386,146,'Mzimba'),(2387,146,'Ntcheu'),(2388,146,'Nkhata Bay'),(2389,146,'Nkhotakota'),(2390,146,'Nsanje'),(2391,146,'Ntchisi'),(2392,146,'Rumphi'),(2393,146,'Salima'),(2394,146,'Zomba'),(2395,146,'Blantyre'),(2396,146,'Mwanza'),(2397,146,'Balaka'),(2398,146,'Likoma'),(2399,146,'Machinga'),(2400,146,'Mulanje'),(2401,146,'Phalombe'),(2402,147,'Aguascalientes'),(2403,147,'Baja California'),(2404,147,'Baja California Sur'),(2405,147,'Campeche'),(2406,147,'Chiapas'),(2407,147,'Chihuahua'),(2408,147,'Coahuila De Zaragoza'),(2409,147,'Colima'),(2410,147,'Distrito Federal'),(2411,147,'Durango'),(2412,147,'Guanajuato'),(2413,147,'Guerrero'),(2414,147,'Hidalgo'),(2415,147,'Jalisco'),(2416,147,'Mexico'),(2417,147,'Michoacan De Ocampo'),(2418,147,'Morelos'),(2419,147,'Nayarit'),(2420,147,'Nuevo Leon'),(2421,147,'Oaxaca'),(2422,147,'Puebla'),(2423,147,'Queretaro De Arteaga'),(2424,147,'Quintana Roo'),(2425,147,'San Luis Potosi'),(2426,147,'Sinaloa'),(2427,147,'Sonora'),(2428,147,'Tabasco'),(2429,147,'Tamaulipas'),(2430,147,'Tlaxcala'),(2431,147,'Veracruz-Llave'),(2432,147,'Yucatan'),(2433,147,'Zacatecas'),(2434,148,'Johor'),(2435,148,'Kedah'),(2436,148,'Kelantan'),(2437,148,'Melaka'),(2438,148,'Negeri Sembilan'),(2439,148,'Pahang'),(2440,148,'Perak'),(2441,148,'Perlis'),(2442,148,'Pulau Pinang'),(2443,148,'Sarawak'),(2444,148,'Selangor'),(2445,148,'Terengganu'),(2446,148,'Kuala Lumpur'),(2447,148,'Labuan'),(2448,148,'Sabah'),(2449,148,'Putrajaya'),(2450,149,'Cabo Delgado'),(2451,149,'Gaza'),(2452,149,'Inhambane'),(2453,149,'Maputo'),(2454,149,'Sofala'),(2455,149,'Nampula'),(2456,149,'Niassa'),(2457,149,'Tete'),(2458,149,'Zambezia'),(2459,149,'Manica'),(2460,149,'Maputo'),(2461,150,'Bethanien'),(2462,150,'Caprivi Oos'),(2463,150,'Boesmanland'),(2464,150,'Gobabis'),(2465,150,'Grootfontein'),(2466,150,'Kaokoland'),(2467,150,'Karibib'),(2468,150,'Keetmanshoop'),(2469,150,'Luderitz'),(2470,150,'Maltahohe'),(2471,150,'Okahandja'),(2472,150,'Omaruru'),(2473,150,'Otjiwarongo'),(2474,150,'Outjo'),(2475,150,'Owambo'),(2476,150,'Rehoboth'),(2477,150,'Swakopmund'),(2478,150,'Tsumeb'),(2479,150,'Karasburg'),(2480,150,'Windhoek'),(2481,150,'Damaraland'),(2482,150,'Hereroland Oos'),(2483,150,'Hereroland Wes'),(2484,150,'Kavango'),(2485,150,'Mariental'),(2486,150,'Namaland'),(2487,150,'Caprivi'),(2488,150,'Erongo'),(2489,150,'Hardap'),(2490,150,'Karas'),(2491,150,'Kunene'),(2492,150,'Ohangwena'),(2493,150,'Okavango'),(2494,150,'Omaheke'),(2495,150,'Omusati'),(2496,150,'Oshana'),(2497,150,'Oshikoto'),(2498,150,'Otjozondjupa'),(2499,152,'Agadez'),(2500,152,'Diffa'),(2501,152,'Dosso'),(2502,152,'Maradi'),(2503,152,'Niamey'),(2504,152,'Tahoua'),(2505,152,'Zinder'),(2506,152,'Niamey'),(2507,154,'Lagos'),(2508,154,'Federal Capital Territory'),(2509,154,'Ogun'),(2510,154,'Akwa Ibom'),(2511,154,'Cross River'),(2512,154,'Kaduna'),(2513,154,'Katsina'),(2514,154,'Anambra'),(2515,154,'Benue'),(2516,154,'Borno'),(2517,154,'Imo'),(2518,154,'Kano'),(2519,154,'Kwara'),(2520,154,'Niger'),(2521,154,'Oyo'),(2522,154,'Adamawa'),(2523,154,'Delta'),(2524,154,'Edo'),(2525,154,'Jigawa'),(2526,154,'Kebbi'),(2527,154,'Kogi'),(2528,154,'Osun'),(2529,154,'Taraba'),(2530,154,'Yobe'),(2531,154,'Abia'),(2532,154,'Bauchi'),(2533,154,'Enugu'),(2534,154,'Ondo'),(2535,154,'Plateau'),(2536,154,'Rivers'),(2537,154,'Sokoto'),(2538,154,'Bayelsa'),(2539,154,'Ebonyi'),(2540,154,'Ekiti'),(2541,154,'Gombe'),(2542,154,'Nassarawa'),(2543,154,'Zamfara'),(2544,155,'Boaco'),(2545,155,'Carazo'),(2546,155,'Chinandega'),(2547,155,'Chontales'),(2548,155,'Esteli'),(2549,155,'Granada'),(2550,155,'Jinotega'),(2551,155,'Leon'),(2552,155,'Madriz'),(2553,155,'Managua'),(2554,155,'Masaya'),(2555,155,'Matagalpa'),(2556,155,'Nueva Segovia'),(2557,155,'Rio San Juan'),(2558,155,'Rivas'),(2559,155,'Zelaya'),(2560,155,'Autonoma Atlantico Norte'),(2561,155,'Region Autonoma Atlantico Sur'),(2562,156,'Drenthe'),(2563,156,'Friesland'),(2564,156,'Gelderland'),(2565,156,'Groningen'),(2566,156,'Limburg'),(2567,156,'Noord-Brabant'),(2568,156,'Noord-Holland'),(2569,156,'Utrecht'),(2570,156,'Zeeland'),(2571,156,'Zuid-Holland'),(2572,156,'Overijssel'),(2573,156,'Flevoland'),(2574,157,'Akershus'),(2575,157,'Aust-Agder'),(2576,157,'Buskerud'),(2577,157,'Finnmark'),(2578,157,'Hedmark'),(2579,157,'Hordaland'),(2580,157,'More Og Romsdal'),(2581,157,'Nordland'),(2582,157,'Nord-Trondelag'),(2583,157,'Oppland'),(2584,157,'Oslo'),(2585,157,'Ostfold'),(2586,157,'Rogaland'),(2587,157,'Sogn Og Fjordane'),(2588,157,'Sor-Trondelag'),(2589,157,'Telemark'),(2590,157,'Troms'),(2591,157,'Vest-Agder'),(2592,157,'Vestfold'),(2593,158,'Bagmati'),(2594,158,'Bheri'),(2595,158,'Dhawalagiri'),(2596,158,'Gandaki'),(2597,158,'Janakpur'),(2598,158,'Karnali'),(2599,158,'Kosi'),(2600,158,'Lumbini'),(2601,158,'Mahakali'),(2602,158,'Mechi'),(2603,158,'Narayani'),(2604,158,'Rapti'),(2605,158,'Sagarmatha'),(2606,158,'Seti'),(2607,159,'Aiwo'),(2608,159,'Anabar'),(2609,159,'Anetan'),(2610,159,'Anibare'),(2611,159,'Baiti'),(2612,159,'Boe'),(2613,159,'Buada'),(2614,159,'Denigomodu'),(2615,159,'Ewa'),(2616,159,'Ijuw'),(2617,159,'Meneng'),(2618,159,'Nibok'),(2619,159,'Uaboe'),(2620,159,'Yaren'),(2621,161,'Chatham Islands'),(2622,161,'Auckland'),(2623,161,'Bay Of Plenty'),(2624,161,'Canterbury'),(2625,161,'Gisborne'),(2626,161,'Hawke\'s Bay'),(2627,161,'Manawatu-Wanganui'),(2628,161,'Marlborough'),(2629,161,'Nelson'),(2630,161,'Northland'),(2631,161,'Otago'),(2632,161,'Southland'),(2633,161,'Taranaki'),(2634,161,'Waikato'),(2635,161,'Wellington'),(2636,161,'West Coast'),(2637,162,'Ad Dakhiliyah'),(2638,162,'Al Batinah'),(2639,162,'Al Wusta'),(2640,162,'Ash Sharqiyah'),(2641,162,'Az Zahirah'),(2642,162,'Masqat'),(2643,162,'Musandam'),(2644,162,'Zufar'),(2645,163,'Bocas Del Toro'),(2646,163,'Chiriqui'),(2647,163,'Cocle'),(2648,163,'Colon'),(2649,163,'Darien'),(2650,163,'Herrera'),(2651,163,'Los Santos'),(2652,163,'Panama'),(2653,163,'San Blas'),(2654,163,'Veraguas'),(2655,164,'Amazonas'),(2656,164,'Ancash'),(2657,164,'Apurimac'),(2658,164,'Arequipa'),(2659,164,'Ayacucho'),(2660,164,'Cajamarca'),(2661,164,'Callao'),(2662,164,'Cusco'),(2663,164,'Huancavelica'),(2664,164,'Huanuco'),(2665,164,'Ica'),(2666,164,'Junin'),(2667,164,'La Libertad'),(2668,164,'Lambayeque'),(2669,164,'Lima'),(2670,164,'Loreto'),(2671,164,'Madre De Dios'),(2672,164,'Moquegua'),(2673,164,'Pasco'),(2674,164,'Piura'),(2675,164,'Puno'),(2676,164,'San Martin'),(2677,164,'Tacna'),(2678,164,'Tumbes'),(2679,164,'Ucayali'),(2680,166,'Central'),(2681,166,'Gulf'),(2682,166,'Milne Bay'),(2683,166,'Northern'),(2684,166,'Southern Highlands'),(2685,166,'Western'),(2686,166,'North Solomons'),(2687,166,'Chimbu'),(2688,166,'Eastern Highlands'),(2689,166,'East New Britain'),(2690,166,'East Sepik'),(2691,166,'Madang'),(2692,166,'Manus'),(2693,166,'Morobe'),(2694,166,'New Ireland'),(2695,166,'Western Highlands'),(2696,166,'West New Britain'),(2697,166,'Sandaun'),(2698,166,'Enga'),(2699,166,'National Capital'),(2700,167,'Abra'),(2701,167,'Agusan Del Norte'),(2702,167,'Agusan Del Sur'),(2703,167,'Aklan'),(2704,167,'Albay'),(2705,167,'Antique'),(2706,167,'Bataan'),(2707,167,'Batanes'),(2708,167,'Batangas'),(2709,167,'Benguet'),(2710,167,'Bohol'),(2711,167,'Bukidnon'),(2712,167,'Bulacan'),(2713,167,'Cagayan'),(2714,167,'Camarines Norte'),(2715,167,'Camarines Sur'),(2716,167,'Camiguin'),(2717,167,'Capiz'),(2718,167,'Catanduanes'),(2719,167,'Cavite'),(2720,167,'Cebu'),(2721,167,'Basilan'),(2722,167,'Eastern Samar'),(2723,167,'Davao'),(2724,167,'Davao Del Sur'),(2725,167,'Davao Oriental'),(2726,167,'Ifugao'),(2727,167,'Ilocos Norte'),(2728,167,'Ilocos Sur'),(2729,167,'Iloilo'),(2730,167,'Isabela'),(2731,167,'Kalinga-Apayao'),(2732,167,'Laguna'),(2733,167,'Lanao Del Norte'),(2734,167,'Lanao Del Sur'),(2735,167,'La Union'),(2736,167,'Leyte'),(2737,167,'Marinduque'),(2738,167,'Masbate'),(2739,167,'Mindoro Occidental'),(2740,167,'Mindoro Oriental'),(2741,167,'Misamis Occidental'),(2742,167,'Misamis Oriental'),(2743,167,'Mountain'),(2744,167,'Negros Occidental'),(2745,167,'Negros Oriental'),(2746,167,'Nueva Ecija'),(2747,167,'Nueva Vizcaya'),(2748,167,'Palawan'),(2749,167,'Pampanga'),(2750,167,'Pangasinan'),(2751,167,'Rizal'),(2752,167,'Romblon'),(2753,167,'Samar'),(2754,167,'Maguindanao'),(2755,167,'North Cotabato'),(2756,167,'Sorsogon'),(2757,167,'Southern Leyte'),(2758,167,'Sulu'),(2759,167,'Surigao Del Norte'),(2760,167,'Surigao Del Sur'),(2761,167,'Tarlac'),(2762,167,'Zambales'),(2763,167,'Zamboanga Del Norte'),(2764,167,'Zamboanga Del Sur'),(2765,167,'Northern Samar'),(2766,167,'Quirino'),(2767,167,'Siquijor'),(2768,167,'South Cotabato'),(2769,167,'Sultan Kudarat'),(2770,167,'Tawitawi'),(2771,167,'Angeles'),(2772,167,'Bacolod'),(2773,167,'Bago'),(2774,167,'Baguio'),(2775,167,'Bais'),(2776,167,'Basilan City'),(2777,167,'Batangas City'),(2778,167,'Butuan'),(2779,167,'Cabanatuan'),(2780,167,'Cadiz'),(2781,167,'Cagayan De Oro'),(2782,167,'Calbayog'),(2783,167,'Caloocan'),(2784,167,'Canlaon'),(2785,167,'Cavite City'),(2786,167,'Cebu City'),(2787,167,'Cotabato'),(2788,167,'Dagupan'),(2789,167,'Danao'),(2790,167,'Dapitan'),(2791,167,'Davao City'),(2792,167,'Dipolog'),(2793,167,'Dumaguete'),(2794,167,'General Santos'),(2795,167,'Gingoog'),(2796,167,'Iligan'),(2797,167,'Iloilo City'),(2798,167,'Iriga'),(2799,167,'La Carlota'),(2800,167,'Laoag'),(2801,167,'Lapu-Lapu'),(2802,167,'Legaspi'),(2803,167,'Lipa'),(2804,167,'Lucena'),(2805,167,'Mandaue'),(2806,167,'Manila'),(2807,167,'Marawi'),(2808,167,'Naga'),(2809,167,'Olongapo'),(2810,167,'Ormoc'),(2811,167,'Oroquieta'),(2812,167,'Ozamis'),(2813,167,'Pagadian'),(2814,167,'Palayan'),(2815,167,'Pasay'),(2816,167,'Puerto Princesa'),(2817,167,'Quezon City'),(2818,167,'Roxas'),(2819,167,'San Carlos'),(2820,167,'San Carlos'),(2821,167,'San Jose'),(2822,167,'San Pablo'),(2823,167,'Silay'),(2824,167,'Surigao'),(2825,167,'Tacloban'),(2826,167,'Tagaytay'),(2827,167,'Tagbilaran'),(2828,167,'Tangub'),(2829,167,'Toledo'),(2830,167,'Trece Martires'),(2831,167,'Zamboanga'),(2832,167,'Aurora'),(2833,167,'Quezon'),(2834,167,'Negros Occidental'),(2835,167,'Compostela Valley'),(2836,167,'Davao Del Norte'),(2837,167,'Kalinga'),(2838,167,'Malaybalay'),(2839,167,'Passi'),(2840,167,'Zambales'),(2841,167,'San Jose Del Monte'),(2842,167,'San Juan'),(2843,167,'Santiago'),(2844,167,'Sarangani'),(2845,167,'Sipalay'),(2846,167,'Surigao Del Norte'),(2847,167,'Zamboanga'),(2848,168,'Federally Administered Tribal Areas'),(2849,168,'Balochistan'),(2850,168,'North-West Frontier'),(2851,168,'Punjab'),(2852,168,'Sindh'),(2853,168,'Azad Kashmir'),(2854,168,'Northern Areas'),(2855,168,'Islamabad'),(2856,169,'Dolnoslaskie'),(2857,169,'Kujawsko-Pomorskie'),(2858,169,'Lodzkie'),(2859,169,'Lubelskie'),(2860,169,'Lubuskie'),(2861,169,'Malopolskie'),(2862,169,'Mazowieckie'),(2863,169,'Opolskie'),(2864,169,'Podkarpackie'),(2865,169,'Podlaskie'),(2866,169,'Pomorskie'),(2867,169,'Slaskie'),(2868,169,'Swietokrzyskie'),(2869,169,'Warminsko-Mazurskie'),(2870,169,'Wielkopolskie'),(2871,169,'Zachodniopomorskie'),(2872,172,'Gaza'),(2873,172,'West Bank'),(2874,173,'Aveiro'),(2875,173,'Beja'),(2876,173,'Braga'),(2877,173,'Braganca'),(2878,173,'Castelo Branco'),(2879,173,'Coimbra'),(2880,173,'Evora'),(2881,173,'Faro'),(2882,173,'Madeira'),(2883,173,'Guarda'),(2884,173,'Leiria'),(2885,173,'Lisboa'),(2886,173,'Portalegre'),(2887,173,'Porto'),(2888,173,'Santarem'),(2889,173,'Setubal'),(2890,173,'Viana Do Castelo'),(2891,173,'Vila Real'),(2892,173,'Viseu'),(2893,173,'Azores'),(2894,175,'Alto Parana'),(2895,175,'Amambay'),(2896,175,'Boqueron'),(2897,175,'Caaguazu'),(2898,175,'Caazapa'),(2899,175,'Central'),(2900,175,'Concepcion'),(2901,175,'Cordillera'),(2902,175,'Guaira'),(2903,175,'Itapua'),(2904,175,'Misiones'),(2905,175,'Neembucu'),(2906,175,'Paraguari'),(2907,175,'Presidente Hayes'),(2908,175,'San Pedro'),(2909,175,'Canindeyu'),(2910,175,'Chaco'),(2911,175,'Nueva Asuncion'),(2912,175,'Alto Paraguay'),(2913,176,'Ad Dawhah'),(2914,176,'Al Ghuwariyah'),(2915,176,'Al Jumaliyah'),(2916,176,'Al Khawr'),(2917,176,'Al Wakrah Municipality'),(2918,176,'Ar Rayyan'),(2919,176,'Madinat Ach Shamal'),(2920,176,'Umm Salal'),(2921,176,'Al Wakrah'),(2922,176,'Jariyan Al Batnah'),(2923,176,'Umm Sa\'id'),(2924,178,'Alba'),(2925,178,'Arad'),(2926,178,'Arges'),(2927,178,'Bacau'),(2928,178,'Bihor'),(2929,178,'Bistrita-Nasaud'),(2930,178,'Botosani'),(2931,178,'Braila'),(2932,178,'Brasov'),(2933,178,'Bucuresti'),(2934,178,'Buzau'),(2935,178,'Caras-Severin'),(2936,178,'Cluj'),(2937,178,'Constanta'),(2938,178,'Covasna'),(2939,178,'Dambovita'),(2940,178,'Dolj'),(2941,178,'Galati'),(2942,178,'Gorj'),(2943,178,'Harghita'),(2944,178,'Hunedoara'),(2945,178,'Ialomita'),(2946,178,'Iasi'),(2947,178,'Maramures'),(2948,178,'Mehedinti'),(2949,178,'Mures'),(2950,178,'Neamt'),(2951,178,'Olt'),(2952,178,'Prahova'),(2953,178,'Salaj'),(2954,178,'Satu Mare'),(2955,178,'Sibiu'),(2956,178,'Suceava'),(2957,178,'Teleorman'),(2958,178,'Timis'),(2959,178,'Tulcea'),(2960,178,'Vaslui'),(2961,178,'Valcea'),(2962,178,'Vrancea'),(2963,178,'Calarasi'),(2964,178,'Giurgiu'),(2965,178,'Ilfov'),(2966,179,'Kosovo'),(2967,179,'Vojvodina'),(2968,180,'Adygeya, Republic Of'),(2969,180,'Aginsky Buryatsky Ao'),(2970,180,'Gorno-Altay'),(2971,180,'Altaisky Krai'),(2972,180,'Amur'),(2973,180,'Arkhangel\'sk'),(2974,180,'Astrakhan\''),(2975,180,'Bashkortostan'),(2976,180,'Belgorod'),(2977,180,'Bryansk'),(2978,180,'Buryat'),(2979,180,'Chechnya'),(2980,180,'Chelyabinsk'),(2981,180,'Chita'),(2982,180,'Chukot'),(2983,180,'Chuvashia'),(2984,180,'Dagestan'),(2985,180,'Evenk'),(2986,180,'Ingush'),(2987,180,'Irkutsk'),(2988,180,'Ivanovo'),(2989,180,'Kabardin-Balkar'),(2990,180,'Kaliningrad'),(2991,180,'Kalmyk'),(2992,180,'Kaluga'),(2993,180,'Kamchatka'),(2994,180,'Karachay-Cherkess'),(2995,180,'Karelia'),(2996,180,'Kemerovo'),(2997,180,'Khabarovsk'),(2998,180,'Khakass'),(2999,180,'Khanty-Mansiy'),(3000,180,'Kirov'),(3001,180,'Komi'),(3002,180,'Koryak'),(3003,180,'Kostroma'),(3004,180,'Krasnodar'),(3005,180,'Krasnoyarsk'),(3006,180,'Kurgan'),(3007,180,'Kursk'),(3008,180,'Leningrad'),(3009,180,'Lipetsk'),(3010,180,'Magadan'),(3011,180,'Mariy-El'),(3012,180,'Mordovia'),(3013,180,'Moskva'),(3014,180,'Moscow City'),(3015,180,'Murmansk'),(3016,180,'Nenets'),(3017,180,'Nizhegorod'),(3018,180,'Novgorod'),(3019,180,'Novosibirsk'),(3020,180,'Omsk'),(3021,180,'Orenburg'),(3022,180,'Orel'),(3023,180,'Penza'),(3024,180,'Perm\''),(3025,180,'Primor\'ye'),(3026,180,'Pskov'),(3027,180,'Rostov'),(3028,180,'Ryazan\''),(3029,180,'Sakha'),(3030,180,'Sakhalin'),(3031,180,'Samara'),(3032,180,'Saint Petersburg City'),(3033,180,'Saratov'),(3034,180,'North Ossetia'),(3035,180,'Smolensk'),(3036,180,'Stavropol\''),(3037,180,'Sverdlovsk'),(3038,180,'Tambovskaya Oblast'),(3039,180,'Tatarstan'),(3040,180,'Taymyr'),(3041,180,'Tomsk'),(3042,180,'Tula'),(3043,180,'Tver\''),(3044,180,'Tyumen\''),(3045,180,'Tuva'),(3046,180,'Udmurt'),(3047,180,'Ul\'yanovsk'),(3048,180,'Vladimir'),(3049,180,'Volgograd'),(3050,180,'Vologda'),(3051,180,'Voronezh'),(3052,180,'Yamal-Nenets'),(3053,180,'Yaroslavl\''),(3054,180,'Yevrey'),(3055,180,'Permskiy Kray'),(3056,180,'Krasnoyarskiy Kray'),(3057,180,'Kamchatskiy Kray'),(3058,180,'Zabaykal\'skiy Kray'),(3059,181,'Butare'),(3060,181,'Gitarama'),(3061,181,'Kibungo'),(3062,181,'Kigali'),(3063,181,'Est'),(3064,181,'Kigali'),(3065,181,'Nord'),(3066,181,'Ouest'),(3067,181,'Sud'),(3068,182,'Al Bahah'),(3069,182,'Al Madinah'),(3070,182,'Ash Sharqiyah'),(3071,182,'Al Qasim'),(3072,182,'Ar Riyad'),(3073,182,'Asir Province'),(3074,182,'Ha\'il'),(3075,182,'Makkah'),(3076,182,'Al Hudud Ash Shamaliyah'),(3077,182,'Najran'),(3078,182,'Jizan'),(3079,182,'Tabuk'),(3080,182,'Al Jawf'),(3081,183,'Malaita'),(3082,183,'Guadalcanal'),(3083,183,'Isabel'),(3084,183,'Makira'),(3085,183,'Temotu'),(3086,183,'Central'),(3087,183,'Western'),(3088,183,'Choiseul'),(3089,183,'Rennell And Bellona'),(3090,184,'Anse Aux Pins'),(3091,184,'Anse Boileau'),(3092,184,'Anse Etoile'),(3093,184,'Anse Louis'),(3094,184,'Anse Royale'),(3095,184,'Baie Lazare'),(3096,184,'Baie Sainte Anne'),(3097,184,'Beau Vallon'),(3098,184,'Bel Air'),(3099,184,'Bel Ombre'),(3100,184,'Cascade'),(3101,184,'Glacis'),(3102,184,'Grand\' Anse'),(3103,184,'Grand\' Anse'),(3104,184,'La Digue'),(3105,184,'La Riviere Anglaise'),(3106,184,'Mont Buxton'),(3107,184,'Mont Fleuri'),(3108,184,'Plaisance'),(3109,184,'Pointe La Rue'),(3110,184,'Port Glaud'),(3111,184,'Saint Louis'),(3112,184,'Takamaka'),(3113,185,'Al Wusta'),(3114,185,'Al Istiwa\'iyah'),(3115,185,'Al Khartum'),(3116,185,'Ash Shamaliyah'),(3117,185,'Ash Sharqiyah'),(3118,185,'Bahr Al Ghazal'),(3119,185,'Darfur'),(3120,185,'Kurdufan'),(3121,185,'Upper Nile'),(3122,185,'Al Wahadah State'),(3123,185,'Central Equatoria State'),(3124,186,'Blekinge Lan'),(3125,186,'Gavleborgs Lan'),(3126,186,'Gotlands Lan'),(3127,186,'Hallands Lan'),(3128,186,'Jamtlands Lan'),(3129,186,'Jonkopings Lan'),(3130,186,'Kalmar Lan'),(3131,186,'Dalarnas Lan'),(3132,186,'Kronobergs Lan'),(3133,186,'Norrbottens Lan'),(3134,186,'Orebro Lan'),(3135,186,'Ostergotlands Lan'),(3136,186,'Sodermanlands Lan'),(3137,186,'Uppsala Lan'),(3138,186,'Varmlands Lan'),(3139,186,'Vasterbottens Lan'),(3140,186,'Vasternorrlands Lan'),(3141,186,'Vastmanlands Lan'),(3142,186,'Stockholms Lan'),(3143,186,'Skane Lan'),(3144,186,'Vastra Gotaland'),(3145,188,'Ascension'),(3146,188,'Saint Helena'),(3147,188,'Tristan Da Cunha'),(3148,189,'Ajdovscina Commune'),(3149,189,'Beltinci Commune'),(3150,189,'Bled Commune'),(3151,189,'Bohinj Commune'),(3152,189,'Borovnica Commune'),(3153,189,'Bovec Commune'),(3154,189,'Brda Commune'),(3155,189,'Brezice Commune'),(3156,189,'Brezovica Commune'),(3157,189,'Celje Commune'),(3158,189,'Cerklje Na Gorenjskem Commune'),(3159,189,'Cerknica Commune'),(3160,189,'Cerkno Commune'),(3161,189,'Crensovci Commune'),(3162,189,'Crna Na Koroskem Commune'),(3163,189,'Crnomelj Commune'),(3164,189,'Divaca Commune'),(3165,189,'Dobrepolje Commune'),(3166,189,'Dol Pri Ljubljani Commune'),(3167,189,'Dornava Commune'),(3168,189,'Dravograd Commune'),(3169,189,'Duplek Commune'),(3170,189,'Gorenja Vas-Poljane Commune'),(3171,189,'Gorisnica Commune'),(3172,189,'Gornja Radgona Commune'),(3173,189,'Gornji Grad Commune'),(3174,189,'Gornji Petrovci Commune'),(3175,189,'Grosuplje Commune'),(3176,189,'Hrastnik Commune'),(3177,189,'Hrpelje-Kozina Commune'),(3178,189,'Idrija Commune'),(3179,189,'Ig Commune'),(3180,189,'Ilirska Bistrica Commune'),(3181,189,'Ivancna Gorica Commune'),(3182,189,'Izola-Isola Commune'),(3183,189,'Jursinci Commune'),(3184,189,'Kanal Commune'),(3185,189,'Kidricevo Commune'),(3186,189,'Kobarid Commune'),(3187,189,'Kobilje Commune'),(3188,189,'Komen Commune'),(3189,189,'Koper-Capodistria Urban Commune'),(3190,189,'Kozje Commune'),(3191,189,'Kranj Commune'),(3192,189,'Kranjska Gora Commune'),(3193,189,'Krsko Commune'),(3194,189,'Kungota Commune'),(3195,189,'Lasko Commune'),(3196,189,'Ljubljana Urban Commune'),(3197,189,'Ljubno Commune'),(3198,189,'Logatec Commune'),(3199,189,'Loski Potok Commune'),(3200,189,'Lukovica Commune'),(3201,189,'Medvode Commune'),(3202,189,'Menges Commune'),(3203,189,'Metlika Commune'),(3204,189,'Mezica Commune'),(3205,189,'Mislinja Commune'),(3206,189,'Moravce Commune'),(3207,189,'Moravske Toplice Commune'),(3208,189,'Mozirje Commune'),(3209,189,'Murska Sobota Urban Commune'),(3210,189,'Muta Commune'),(3211,189,'Naklo Commune'),(3212,189,'Nazarje Commune'),(3213,189,'Nova Gorica Urban Commune'),(3214,189,'Odranci Commune'),(3215,189,'Ormoz Commune'),(3216,189,'Osilnica Commune'),(3217,189,'Pesnica Commune'),(3218,189,'Pivka Commune'),(3219,189,'Podcetrtek Commune'),(3220,189,'Postojna Commune'),(3221,189,'Puconci Commune'),(3222,189,'Race-Fram Commune'),(3223,189,'Radece Commune'),(3224,189,'Radenci Commune'),(3225,189,'Radlje Ob Dravi Commune'),(3226,189,'Radovljica Commune'),(3227,189,'Rogasovci Commune'),(3228,189,'Rogaska Slatina Commune'),(3229,189,'Rogatec Commune'),(3230,189,'Semic Commune'),(3231,189,'Sencur Commune'),(3232,189,'Sentilj Commune'),(3233,189,'Sentjernej Commune'),(3234,189,'Sevnica Commune'),(3235,189,'Sezana Commune'),(3236,189,'Skocjan Commune'),(3237,189,'Skofja Loka Commune'),(3238,189,'Skofljica Commune'),(3239,189,'Slovenj Gradec Urban Commune'),(3240,189,'Slovenske Konjice Commune'),(3241,189,'Smarje Pri Jelsah Commune'),(3242,189,'Smartno Ob Paki Commune'),(3243,189,'Sostanj Commune'),(3244,189,'Starse Commune'),(3245,189,'Store Commune'),(3246,189,'Sveti Jurij Commune'),(3247,189,'Tolmin Commune'),(3248,189,'Trbovlje Commune'),(3249,189,'Trebnje Commune'),(3250,189,'Trzic Commune'),(3251,189,'Turnisce Commune'),(3252,189,'Velenje Urban Commune'),(3253,189,'Velike Lasce Commune'),(3254,189,'Vipava Commune'),(3255,189,'Vitanje Commune'),(3256,189,'Vodice Commune'),(3257,189,'Vrhnika Commune'),(3258,189,'Vuzenica Commune'),(3259,189,'Zagorje Ob Savi Commune'),(3260,189,'Zavrc Commune'),(3261,189,'Zelezniki Commune'),(3262,189,'Ziri Commune'),(3263,189,'Zrece Commune'),(3264,189,'Benedikt Commune'),(3265,189,'Bistrica Ob Sotli Commune'),(3266,189,'Bloke Commune'),(3267,189,'Braslovce Commune'),(3268,189,'Cankova Commune'),(3269,189,'Cerkvenjak Commune'),(3270,189,'Destrnik Commune'),(3271,189,'Dobje Commune'),(3272,189,'Dobrna Commune'),(3273,189,'Dobrova-Horjul-Polhov Gradec Commune'),(3274,189,'Dobrovnik-Dobronak Commune'),(3275,189,'Dolenjske Toplice Commune'),(3276,189,'Domzale Commune'),(3277,189,'Grad Commune'),(3278,189,'Hajdina Commune'),(3279,189,'Hoce-Slivnica Commune'),(3280,189,'Hodos-Hodos Commune'),(3281,189,'Horjul Commune'),(3282,189,'Jesenice Commune'),(3283,189,'Jezersko Commune'),(3284,189,'Kamnik Commune'),(3285,189,'Kocevje Commune'),(3286,189,'Komenda Commune'),(3287,189,'Kostel Commune'),(3288,189,'Krizevci Commune'),(3289,189,'Kuzma Commune'),(3290,189,'Lenart Commune'),(3291,189,'Lendava-Lendva Commune'),(3292,189,'Litija Commune'),(3293,189,'Ljutomer Commune'),(3294,189,'Loska Dolina Commune'),(3295,189,'Lovrenc Na Pohorju Commune'),(3296,189,'Luce Commune'),(3297,189,'Majsperk Commune'),(3298,189,'Maribor Commune'),(3299,189,'Markovci Commune'),(3300,189,'Miklavz Na Dravskem Polju Commune'),(3301,189,'Miren-Kostanjevica Commune'),(3302,189,'Mirna Pec Commune'),(3303,189,'Novo Mesto Urban Commune'),(3304,189,'Oplotnica Commune'),(3305,189,'Piran-Pirano Commune'),(3306,189,'Podlehnik Commune'),(3307,189,'Podvelka Commune'),(3308,189,'Polzela Commune'),(3309,189,'Prebold Commune'),(3310,189,'Preddvor Commune'),(3311,189,'Prevalje Commune'),(3312,189,'Ptuj Urban Commune'),(3313,189,'Ravne Na Koroskem Commune'),(3314,189,'Razkrizje Commune'),(3315,189,'Ribnica Commune'),(3316,189,'Ribnica Na Pohorju Commune'),(3317,189,'Ruse Commune'),(3318,189,'Salovci Commune'),(3319,189,'Selnica Ob Dravi Commune'),(3320,189,'Sempeter-Vrtojba Commune'),(3321,189,'Sentjur Pri Celju Commune'),(3322,189,'Slovenska Bistrica Commune'),(3323,189,'Smartno Pri Litiji Commune'),(3324,189,'Sodrazica Commune'),(3325,189,'Solcava Commune'),(3326,189,'Sveta Ana Commune'),(3327,189,'Sveti Andraz V Slovenskih Goricah Commune'),(3328,189,'Tabor Commune'),(3329,189,'Tisina Commune'),(3330,189,'Trnovska Vas Commune'),(3331,189,'Trzin Commune'),(3332,189,'Velika Polana Commune'),(3333,189,'Verzej Commune'),(3334,189,'Videm Commune'),(3335,189,'Vojnik Commune'),(3336,189,'Vransko Commune'),(3337,189,'Zalec Commune'),(3338,189,'Zetale Commune'),(3339,189,'Zirovnica Commune'),(3340,189,'Zuzemberk Commune'),(3341,189,'Apace Commune'),(3342,189,'Cirkulane Commune'),(3343,191,'Banska Bystrica'),(3344,191,'Bratislava'),(3345,191,'Kosice'),(3346,191,'Nitra'),(3347,191,'Presov'),(3348,191,'Trencin'),(3349,191,'Trnava'),(3350,191,'Zilina'),(3351,192,'Eastern'),(3352,192,'Northern'),(3353,192,'Southern'),(3354,192,'Western Area'),(3355,193,'Acquaviva'),(3356,193,'Chiesanuova'),(3357,193,'Domagnano'),(3358,193,'Faetano'),(3359,193,'Fiorentino'),(3360,193,'Borgo Maggiore'),(3361,193,'San Marino'),(3362,193,'Monte Giardino'),(3363,193,'Serravalle'),(3364,194,'Dakar'),(3365,194,'Diourbel'),(3366,194,'Tambacounda'),(3367,194,'Thies'),(3368,194,'Fatick'),(3369,194,'Kaolack'),(3370,194,'Kolda'),(3371,194,'Ziguinchor'),(3372,194,'Louga'),(3373,194,'Saint-Louis'),(3374,194,'Matam'),(3375,195,'Bakool'),(3376,195,'Banaadir'),(3377,195,'Bari'),(3378,195,'Bay'),(3379,195,'Galguduud'),(3380,195,'Gedo'),(3381,195,'Hiiraan'),(3382,195,'Jubbada Dhexe'),(3383,195,'Jubbada Hoose'),(3384,195,'Mudug'),(3385,195,'Nugaal'),(3386,195,'Sanaag'),(3387,195,'Shabeellaha Dhexe'),(3388,195,'Shabeellaha Hoose'),(3389,195,'Woqooyi Galbeed'),(3390,195,'Nugaal'),(3391,195,'Togdheer'),(3392,195,'Woqooyi Galbeed'),(3393,195,'Awdal'),(3394,195,'Sool'),(3395,196,'Brokopondo'),(3396,196,'Commewijne'),(3397,196,'Coronie'),(3398,196,'Marowijne'),(3399,196,'Nickerie'),(3400,196,'Para'),(3401,196,'Paramaribo'),(3402,196,'Saramacca'),(3403,196,'Sipaliwini'),(3404,196,'Wanica'),(3405,NULL,'Central Equatoria'),(3406,NULL,'Eastern Equatoria'),(3407,NULL,'Jonglei'),(3408,NULL,'Lakes'),(3409,NULL,'Northern Bahr El Ghazal'),(3410,NULL,'Unity'),(3411,NULL,'Upper Nile'),(3412,NULL,'Warrap'),(3413,NULL,'Western Bahr El Ghazal'),(3414,NULL,'Western Equatoria'),(3415,197,'Principe'),(3416,197,'Sao Tome'),(3417,198,'Ahuachapan'),(3418,198,'Cabanas'),(3419,198,'Chalatenango'),(3420,198,'Cuscatlan'),(3421,198,'La Libertad'),(3422,198,'La Paz'),(3423,198,'La Union'),(3424,198,'Morazan'),(3425,198,'San Miguel'),(3426,198,'San Salvador'),(3427,198,'Santa Ana'),(3428,198,'San Vicente'),(3429,198,'Sonsonate'),(3430,198,'Usulutan'),(3431,199,'Al Hasakah'),(3432,199,'Al Ladhiqiyah'),(3433,199,'Al Qunaytirah'),(3434,199,'Ar Raqqah'),(3435,199,'As Suwayda\''),(3436,199,'Dar'),(3437,199,'Dayr Az Zawr'),(3438,199,'Rif Dimashq'),(3439,199,'Halab'),(3440,199,'Hamah'),(3441,199,'Hims'),(3442,199,'Idlib'),(3443,199,'Dimashq'),(3444,199,'Tartus'),(3445,200,'Hhohho'),(3446,200,'Lubombo'),(3447,200,'Manzini'),(3448,200,'Shiselweni'),(3449,200,'Praslin'),(3450,202,'Batha'),(3451,202,'Biltine'),(3452,202,'Borkou-Ennedi-Tibesti'),(3453,202,'Chari-Baguirmi'),(3454,202,'Guera'),(3455,202,'Kanem'),(3456,202,'Lac'),(3457,202,'Logone Occidental'),(3458,202,'Logone Oriental'),(3459,202,'Mayo-Kebbi'),(3460,202,'Moyen-Chari'),(3461,202,'Ouaddai'),(3462,202,'Salamat'),(3463,202,'Tandjile'),(3464,204,'Centrale'),(3465,204,'Kara'),(3466,204,'Maritime'),(3467,204,'Plateaux'),(3468,204,'Savanes'),(3469,205,'Mae Hong Son'),(3470,205,'Chiang Mai'),(3471,205,'Chiang Rai'),(3472,205,'Nan'),(3473,205,'Lamphun'),(3474,205,'Lampang'),(3475,205,'Phrae'),(3476,205,'Tak'),(3477,205,'Sukhothai'),(3478,205,'Uttaradit'),(3479,205,'Kamphaeng Phet'),(3480,205,'Phitsanulok'),(3481,205,'Phichit'),(3482,205,'Phetchabun'),(3483,205,'Uthai Thani'),(3484,205,'Nakhon Sawan'),(3485,205,'Nong Khai'),(3486,205,'Loei'),(3487,205,'Sakon Nakhon'),(3488,205,'Nakhon Phanom'),(3489,205,'Khon Kaen'),(3490,205,'Kalasin'),(3491,205,'Maha Sarakham'),(3492,205,'Roi Et'),(3493,205,'Chaiyaphum'),(3494,205,'Nakhon Ratchasima'),(3495,205,'Buriram'),(3496,205,'Surin'),(3497,205,'Sisaket'),(3498,205,'Narathiwat'),(3499,205,'Chai Nat'),(3500,205,'Sing Buri'),(3501,205,'Lop Buri'),(3502,205,'Ang Thong'),(3503,205,'Phra Nakhon Si Ayutthaya'),(3504,205,'Saraburi'),(3505,205,'Nonthaburi'),(3506,205,'Pathum Thani'),(3507,205,'Krung Thep'),(3508,205,'Phayao'),(3509,205,'Samut Prakan'),(3510,205,'Nakhon Nayok'),(3511,205,'Chachoengsao'),(3512,205,'Prachin Buri'),(3513,205,'Chon Buri'),(3514,205,'Rayong'),(3515,205,'Chanthaburi'),(3516,205,'Trat'),(3517,205,'Kanchanaburi'),(3518,205,'Suphan Buri'),(3519,205,'Ratchaburi'),(3520,205,'Nakhon Pathom'),(3521,205,'Samut Songkhram'),(3522,205,'Samut Sakhon'),(3523,205,'Phetchaburi'),(3524,205,'Prachuap Khiri Khan'),(3525,205,'Chumphon'),(3526,205,'Ranong'),(3527,205,'Surat Thani'),(3528,205,'Phangnga'),(3529,205,'Phuket'),(3530,205,'Krabi'),(3531,205,'Nakhon Si Thammarat'),(3532,205,'Trang'),(3533,205,'Phatthalung'),(3534,205,'Satun'),(3535,205,'Songkhla'),(3536,205,'Pattani'),(3537,205,'Yala'),(3538,205,'Ubon Ratchathani'),(3539,205,'Yasothon'),(3540,205,'Nakhon Phanom'),(3541,205,'Prachin Buri'),(3542,205,'Ubon Ratchathani'),(3543,205,'Udon Thani'),(3544,205,'Amnat Charoen'),(3545,205,'Mukdahan'),(3546,205,'Nong Bua Lamphu'),(3547,205,'Sa Kaeo'),(3548,205,'Bueng Kan'),(3549,206,'Kuhistoni Badakhshon'),(3550,206,'Khatlon'),(3551,206,'Sughd'),(3552,208,'Ahal'),(3553,208,'Balkan'),(3554,208,'Dashoguz'),(3555,208,'Lebap'),(3556,208,'Mary'),(3557,209,'Kasserine'),(3558,209,'Kairouan'),(3559,209,'Jendouba'),(3560,209,'Qafsah'),(3561,209,'El Kef'),(3562,209,'Al Mahdia'),(3563,209,'Al Munastir'),(3564,209,'Bajah'),(3565,209,'Bizerte'),(3566,209,'Nabeul'),(3567,209,'Siliana'),(3568,209,'Sousse'),(3569,209,'Ben Arous'),(3570,209,'Madanin'),(3571,209,'Gabes'),(3572,209,'Kebili'),(3573,209,'Sfax'),(3574,209,'Sidi Bou Zid'),(3575,209,'Tataouine'),(3576,209,'Tozeur'),(3577,209,'Tunis'),(3578,209,'Zaghouan'),(3579,209,'Aiana'),(3580,209,'Manouba'),(3581,210,'Ha'),(3582,210,'Tongatapu'),(3583,210,'Vava'),(3584,211,'Adiyaman'),(3585,211,'Afyonkarahisar'),(3586,211,'Agri'),(3587,211,'Amasya'),(3588,211,'Antalya'),(3589,211,'Artvin'),(3590,211,'Aydin'),(3591,211,'Balikesir'),(3592,211,'Bilecik'),(3593,211,'Bingol'),(3594,211,'Bitlis'),(3595,211,'Bolu'),(3596,211,'Burdur'),(3597,211,'Bursa'),(3598,211,'Canakkale'),(3599,211,'Corum'),(3600,211,'Denizli'),(3601,211,'Diyarbakir'),(3602,211,'Edirne'),(3603,211,'Elazig'),(3604,211,'Erzincan'),(3605,211,'Erzurum'),(3606,211,'Eskisehir'),(3607,211,'Giresun'),(3608,211,'Hatay'),(3609,211,'Mersin'),(3610,211,'Isparta'),(3611,211,'Istanbul'),(3612,211,'Izmir'),(3613,211,'Kastamonu'),(3614,211,'Kayseri'),(3615,211,'Kirklareli'),(3616,211,'Kirsehir'),(3617,211,'Kocaeli'),(3618,211,'Kutahya'),(3619,211,'Malatya'),(3620,211,'Manisa'),(3621,211,'Kahramanmaras'),(3622,211,'Mugla'),(3623,211,'Mus'),(3624,211,'Nevsehir'),(3625,211,'Ordu'),(3626,211,'Rize'),(3627,211,'Sakarya'),(3628,211,'Samsun'),(3629,211,'Sinop'),(3630,211,'Sivas'),(3631,211,'Tekirdag'),(3632,211,'Tokat'),(3633,211,'Trabzon'),(3634,211,'Tunceli'),(3635,211,'Sanliurfa'),(3636,211,'Usak'),(3637,211,'Van'),(3638,211,'Yozgat'),(3639,211,'Ankara'),(3640,211,'Gumushane'),(3641,211,'Hakkari'),(3642,211,'Konya'),(3643,211,'Mardin'),(3644,211,'Nigde'),(3645,211,'Siirt'),(3646,211,'Aksaray'),(3647,211,'Batman'),(3648,211,'Bayburt'),(3649,211,'Karaman'),(3650,211,'Kirikkale'),(3651,211,'Sirnak'),(3652,211,'Adana'),(3653,211,'Cankiri'),(3654,211,'Gaziantep'),(3655,211,'Kars'),(3656,211,'Zonguldak'),(3657,211,'Ardahan'),(3658,211,'Bartin'),(3659,211,'Igdir'),(3660,211,'Karabuk'),(3661,211,'Kilis'),(3662,211,'Osmaniye'),(3663,211,'Yalova'),(3664,211,'Duzce'),(3665,212,'Arima'),(3666,212,'Caroni'),(3667,212,'Mayaro'),(3668,212,'Nariva'),(3669,212,'Port-Of-Spain'),(3670,212,'Saint Andrew'),(3671,212,'Saint David'),(3672,212,'Saint George'),(3673,212,'Saint Patrick'),(3674,212,'San Fernando'),(3675,212,'Tobago'),(3676,212,'Victoria'),(3677,214,'Fu-Chien'),(3678,214,'Kao-Hsiung'),(3679,214,'T\'ai-Pei'),(3680,214,'T\'ai-Wan'),(3681,215,'Pwani'),(3682,215,'Dodoma'),(3683,215,'Iringa'),(3684,215,'Kigoma'),(3685,215,'Kilimanjaro'),(3686,215,'Lindi'),(3687,215,'Mara'),(3688,215,'Mbeya'),(3689,215,'Morogoro'),(3690,215,'Mtwara'),(3691,215,'Mwanza'),(3692,215,'Pemba North'),(3693,215,'Ruvuma'),(3694,215,'Shinyanga'),(3695,215,'Singida'),(3696,215,'Tabora'),(3697,215,'Tanga'),(3698,215,'Kagera'),(3699,215,'Pemba South'),(3700,215,'Zanzibar Central'),(3701,215,'Zanzibar North'),(3702,215,'Dar Es Salaam'),(3703,215,'Rukwa'),(3704,215,'Zanzibar Urban'),(3705,215,'Arusha'),(3706,215,'Manyara'),(3707,216,'Cherkas\'ka Oblast\''),(3708,216,'Chernihivs\'ka Oblast\''),(3709,216,'Chernivets\'ka Oblast\''),(3710,216,'Dnipropetrovs\'ka Oblast\''),(3711,216,'Donets\'ka Oblast\''),(3712,216,'Ivano-Frankivs\'ka Oblast\''),(3713,216,'Kharkivs\'ka Oblast\''),(3714,216,'Khersons\'ka Oblast\''),(3715,216,'Khmel\'nyts\'ka Oblast\''),(3716,216,'Kirovohrads\'ka Oblast\''),(3717,216,'Krym'),(3718,216,'Kyyiv'),(3719,216,'Kyyivs\'ka Oblast\''),(3720,216,'Luhans\'ka Oblast\''),(3721,216,'L\'vivs\'ka Oblast\''),(3722,216,'Mykolayivs\'ka Oblast\''),(3723,216,'Odes\'ka Oblast\''),(3724,216,'Poltavs\'ka Oblast\''),(3725,216,'Rivnens\'ka Oblast\''),(3726,216,'Sevastopol\''),(3727,216,'Sums\'ka Oblast\''),(3728,216,'Ternopil\'s\'ka Oblast\''),(3729,216,'Vinnyts\'ka Oblast\''),(3730,216,'Volyns\'ka Oblast\''),(3731,216,'Zakarpats\'ka Oblast\''),(3732,216,'Zaporiz\'ka Oblast\''),(3733,216,'Zhytomyrs\'ka Oblast\''),(3734,217,'Apac'),(3735,217,'Bundibugyo'),(3736,217,'Bushenyi'),(3737,217,'Gulu'),(3738,217,'Hoima'),(3739,217,'Jinja'),(3740,217,'Kalangala'),(3741,217,'Kampala'),(3742,217,'Kamuli'),(3743,217,'Kapchorwa'),(3744,217,'Kasese'),(3745,217,'Kibale'),(3746,217,'Kiboga'),(3747,217,'Kisoro'),(3748,217,'Kotido'),(3749,217,'Kumi'),(3750,217,'Lira'),(3751,217,'Masindi'),(3752,217,'Mbarara'),(3753,217,'Mubende'),(3754,217,'Nebbi'),(3755,217,'Ntungamo'),(3756,217,'Pallisa'),(3757,217,'Rakai'),(3758,217,'Adjumani'),(3759,217,'Bugiri'),(3760,217,'Busia'),(3761,217,'Katakwi'),(3762,217,'Luwero'),(3763,217,'Masaka'),(3764,217,'Moyo'),(3765,217,'Nakasongola'),(3766,217,'Sembabule'),(3767,217,'Tororo'),(3768,217,'Arua'),(3769,217,'Iganga'),(3770,217,'Kabarole'),(3771,217,'Kaberamaido'),(3772,217,'Kamwenge'),(3773,217,'Kanungu'),(3774,217,'Kayunga'),(3775,217,'Kitgum'),(3776,217,'Kyenjojo'),(3777,217,'Mayuge'),(3778,217,'Mbale'),(3779,217,'Moroto'),(3780,217,'Mpigi'),(3781,217,'Mukono'),(3782,217,'Nakapiripirit'),(3783,217,'Pader'),(3784,217,'Rukungiri'),(3785,217,'Sironko'),(3786,217,'Soroti'),(3787,217,'Wakiso'),(3788,217,'Yumbe'),(3789,218,'Armed Forces Americas'),(3790,218,'Armed Forces Europe, Middle East, & Canada'),(3791,218,'Alaska'),(3792,218,'Alabama'),(3793,218,'Armed Forces Pacific'),(3794,218,'Arkansas'),(3795,218,'American Samoa'),(3796,218,'Arizona'),(3797,218,'California'),(3798,218,'Colorado'),(3799,218,'Connecticut'),(3800,218,'District Of Columbia'),(3801,218,'Delaware'),(3802,218,'Florida'),(3803,218,'Federated States Of Micronesia'),(3804,218,'Georgia'),(3805,218,'Guam'),(3806,218,'Hawaii'),(3807,218,'Iowa'),(3808,218,'Idaho'),(3809,218,'Illinois'),(3810,218,'Indiana'),(3811,218,'Kansas'),(3812,218,'Kentucky'),(3813,218,'Louisiana'),(3814,218,'Massachusetts'),(3815,218,'Maryland'),(3816,218,'Maine'),(3817,218,'Marshall Islands'),(3818,218,'Michigan'),(3819,218,'Minnesota'),(3820,218,'Missouri'),(3821,218,'Northern Mariana Islands'),(3822,218,'Mississippi'),(3823,218,'Montana'),(3824,218,'North Carolina'),(3825,218,'North Dakota'),(3826,218,'Nebraska'),(3827,218,'New Hampshire'),(3828,218,'New Jersey'),(3829,218,'New Mexico'),(3830,218,'Nevada'),(3831,218,'New York'),(3832,218,'Ohio'),(3833,218,'Oklahoma'),(3834,218,'Oregon'),(3835,218,'Pennsylvania'),(3836,218,'Palau'),(3837,218,'Rhode Island'),(3838,218,'South Carolina'),(3839,218,'South Dakota'),(3840,218,'Tennessee'),(3841,218,'Texas'),(3842,218,'Utah'),(3843,218,'Virginia'),(3844,218,'Virgin Islands'),(3845,218,'Vermont'),(3846,218,'Washington'),(3847,218,'Wisconsin'),(3848,218,'West Virginia'),(3849,218,'Wyoming'),(3850,219,'Artigas'),(3851,219,'Canelones'),(3852,219,'Cerro Largo'),(3853,219,'Colonia'),(3854,219,'Durazno'),(3855,219,'Flores'),(3856,219,'Florida'),(3857,219,'Lavalleja'),(3858,219,'Maldonado'),(3859,219,'Montevideo'),(3860,219,'Paysandu'),(3861,219,'Rio Negro'),(3862,219,'Rivera'),(3863,219,'Rocha'),(3864,219,'Salto'),(3865,219,'San Jose'),(3866,219,'Soriano'),(3867,219,'Tacuarembo'),(3868,219,'Treinta Y Tres'),(3869,220,'Andijon'),(3870,220,'Bukhoro'),(3871,220,'Farghona'),(3872,220,'Jizzakh'),(3873,220,'Khorazm'),(3874,220,'Namangan'),(3875,220,'Nawoiy'),(3876,220,'Qashqadaryo'),(3877,220,'Qoraqalpoghiston'),(3878,220,'Samarqand'),(3879,220,'Sirdaryo'),(3880,220,'Surkhondaryo'),(3881,220,'Toshkent'),(3882,220,'Toshkent'),(3883,221,'Charlotte'),(3884,221,'Saint Andrew'),(3885,221,'Saint David'),(3886,221,'Saint George'),(3887,221,'Saint Patrick'),(3888,221,'Grenadines'),(3889,222,'Amazonas'),(3890,222,'Anzoategui'),(3891,222,'Apure'),(3892,222,'Aragua'),(3893,222,'Barinas'),(3894,222,'Bolivar'),(3895,222,'Carabobo'),(3896,222,'Cojedes'),(3897,222,'Delta Amacuro'),(3898,222,'Falcon'),(3899,222,'Guarico'),(3900,222,'Lara'),(3901,222,'Merida'),(3902,222,'Miranda'),(3903,222,'Monagas'),(3904,222,'Nueva Esparta'),(3905,222,'Portuguesa'),(3906,222,'Sucre'),(3907,222,'Tachira'),(3908,222,'Trujillo'),(3909,222,'Yaracuy'),(3910,222,'Zulia'),(3911,222,'Dependencias Federales'),(3912,222,'Distrito Federal'),(3913,222,'Vargas'),(3914,225,'An Giang'),(3915,225,'Ben Tre'),(3916,225,'Cao Bang'),(3917,225,'Dong Thap'),(3918,225,'Hai Phong'),(3919,225,'Ho Chi Minh'),(3920,225,'Kien Giang'),(3921,225,'Lam Dong'),(3922,225,'Long An'),(3923,225,'Quang Ninh'),(3924,225,'Son La'),(3925,225,'Tay Ninh'),(3926,225,'Thanh Hoa'),(3927,225,'Thai Binh'),(3928,225,'Tien Giang'),(3929,225,'Lang Son'),(3930,225,'Dong Nai'),(3931,225,'Ha Noi'),(3932,225,'Ba Ria-Vung Tau'),(3933,225,'Binh Dinh'),(3934,225,'Binh Thuan'),(3935,225,'Gia Lai'),(3936,225,'Ha Giang'),(3937,225,'Ha Tinh'),(3938,225,'Hoa Binh'),(3939,225,'Khanh Hoa'),(3940,225,'Kon Tum'),(3941,225,'Nghe An'),(3942,225,'Ninh Binh'),(3943,225,'Ninh Thuan'),(3944,225,'Phu Yen'),(3945,225,'Quang Binh'),(3946,225,'Quang Ngai'),(3947,225,'Quang Tri'),(3948,225,'Soc Trang'),(3949,225,'Thua Thien-Hue'),(3950,225,'Tra Vinh'),(3951,225,'Tuyen Quang'),(3952,225,'Vinh Long'),(3953,225,'Yen Bai'),(3954,225,'Bac Giang'),(3955,225,'Bac Kan'),(3956,225,'Bac Lieu'),(3957,225,'Bac Ninh'),(3958,225,'Binh Duong'),(3959,225,'Binh Phuoc'),(3960,225,'Ca Mau'),(3961,225,'Da Nang'),(3962,225,'Hai Duong'),(3963,225,'Ha Nam'),(3964,225,'Hung Yen'),(3965,225,'Nam Dinh'),(3966,225,'Phu Tho'),(3967,225,'Quang Nam'),(3968,225,'Thai Nguyen'),(3969,225,'Vinh Phuc'),(3970,225,'Can Tho'),(3971,225,'Dac Lak'),(3972,225,'Lai Chau'),(3973,225,'Lao Cai'),(3974,225,'Dak Nong'),(3975,225,'Dien Bien'),(3976,225,'Hau Giang'),(3977,226,'Ambrym'),(3978,226,'Aoba'),(3979,226,'Torba'),(3980,226,'Efate'),(3981,226,'Epi'),(3982,226,'Malakula'),(3983,226,'Paama'),(3984,226,'Pentecote'),(3985,226,'Sanma'),(3986,226,'Shepherd'),(3987,226,'Tafea'),(3988,226,'Malampa'),(3989,226,'Penama'),(3990,226,'Shefa'),(3991,228,'Aiga-I-Le-Tai'),(3992,228,'Atua'),(3993,228,'Fa'),(3994,228,'Gaga'),(3995,228,'Va'),(3996,228,'Gagaifomauga'),(3997,228,'Palauli'),(3998,228,'Satupa'),(3999,228,'Tuamasaga'),(4000,228,'Vaisigano'),(4001,229,'Abyan'),(4002,229,'Adan'),(4003,229,'Al Mahrah'),(4004,229,'Hadramawt'),(4005,229,'Shabwah'),(4006,229,'Lahij'),(4007,229,'Al Bayda\''),(4008,229,'Al Hudaydah'),(4009,229,'Al Jawf'),(4010,229,'Al Mahwit'),(4011,229,'Dhamar'),(4012,229,'Hajjah'),(4013,229,'Ibb'),(4014,229,'Ma\'rib'),(4015,229,'Sa\'dah'),(4016,229,'San\'a\''),(4017,229,'Taizz'),(4018,229,'Ad Dali'),(4019,229,'Amran'),(4020,229,'Al Bayda\''),(4021,229,'Al Jawf'),(4022,229,'Hajjah'),(4023,229,'Ibb'),(4024,229,'Lahij'),(4025,229,'Taizz'),(4026,231,'North-Western Province'),(4027,231,'Kwazulu-Natal'),(4028,231,'Free State'),(4029,231,'Eastern Cape'),(4030,231,'Gauteng'),(4031,231,'Mpumalanga'),(4032,231,'Northern Cape'),(4033,231,'Limpopo'),(4034,231,'North-West'),(4035,231,'Western Cape'),(4036,232,'Western'),(4037,232,'Central'),(4038,232,'Eastern'),(4039,232,'Luapula'),(4040,232,'Northern'),(4041,232,'North-Western'),(4042,232,'Southern'),(4043,232,'Copperbelt'),(4044,232,'Lusaka'),(4045,234,'Manicaland'),(4046,234,'Midlands'),(4047,234,'Mashonaland Central'),(4048,234,'Mashonaland East'),(4049,234,'Mashonaland West'),(4050,234,'Matabeleland North'),(4051,234,'Matabeleland South'),(4052,234,'Masvingo'),(4053,234,'Bulawayo'),(4054,234,'Harare');
/*!40000 ALTER TABLE `tbl_regions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_report_types`
--

DROP TABLE IF EXISTS `tbl_report_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_report_types` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_report_types`
--

LOCK TABLES `tbl_report_types` WRITE;
/*!40000 ALTER TABLE `tbl_report_types` DISABLE KEYS */;
INSERT INTO `tbl_report_types` VALUES (1,'analyzer',1,'2017-06-01 08:31:30'),(2,'tester',1,'2017-06-01 08:31:30');
/*!40000 ALTER TABLE `tbl_report_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_reports`
--

DROP TABLE IF EXISTS `tbl_reports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_reports` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `brand_id` int(10) unsigned DEFAULT NULL,
  `user_id` int(10) unsigned DEFAULT NULL,
  `type_id` int(10) unsigned DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `html` blob NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `type_id` (`type_id`,`brand_id`,`user_id`),
  KEY `brand_id_2` (`brand_id`),
  KEY `user_id_2` (`user_id`),
  KEY `type_id_2` (`type_id`),
  CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `tbl_users` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION,
  CONSTRAINT `fk_brand_id` FOREIGN KEY (`brand_id`) REFERENCES `tbl_brands` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION,
  CONSTRAINT `fk_type_id` FOREIGN KEY (`type_id`) REFERENCES `tbl_report_types` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_reports`
--

LOCK TABLES `tbl_reports` WRITE;
/*!40000 ALTER TABLE `tbl_reports` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_reports` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_resource_map`
--

DROP TABLE IF EXISTS `tbl_resource_map`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_resource_map` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `component` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `resource` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `action` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_resource_map`
--

LOCK TABLES `tbl_resource_map` WRITE;
/*!40000 ALTER TABLE `tbl_resource_map` DISABLE KEYS */;
INSERT INTO `tbl_resource_map` VALUES (1,'antares::foundation','show-dashboard','show'),(2,'antares::foundation',':change-app-settings','edit'),(3,'antares::foundation',':change-app-settings','update'),(4,'antares::logger','report-send','send');
/*!40000 ALTER TABLE `tbl_resource_map` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_roles`
--

DROP TABLE IF EXISTS `tbl_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_roles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `parent_id` int(10) unsigned DEFAULT NULL,
  `area` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `full_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `parent_id_idx` (`parent_id`),
  CONSTRAINT `tbl_roles_parent_id_foreign` FOREIGN KEY (`parent_id`) REFERENCES `tbl_roles` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_roles`
--

LOCK TABLES `tbl_roles` WRITE;
/*!40000 ALTER TABLE `tbl_roles` DISABLE KEYS */;
INSERT INTO `tbl_roles` VALUES (1,NULL,'admin','super-administrator','Super Administrator','','2017-06-01 08:29:38','2017-06-01 08:29:38',NULL),(2,1,'admin','administrator','Administrator','','2017-06-01 08:29:38','2017-06-01 08:29:38',NULL),(3,2,'users','member','Member','','2017-06-01 08:29:38','2017-06-01 08:29:38',NULL),(4,3,NULL,'guest','Guest','','2017-06-01 08:29:38','2017-06-01 08:29:38',NULL);
/*!40000 ALTER TABLE `tbl_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_translations`
--

DROP TABLE IF EXISTS `tbl_translations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_translations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `locale` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `area` text COLLATE utf8_unicode_ci,
  `lang_id` int(10) unsigned NOT NULL,
  `group` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `key` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `value` text COLLATE utf8_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `lang_id_2` (`lang_id`),
  CONSTRAINT `tbl_translations_ibfk_1` FOREIGN KEY (`lang_id`) REFERENCES `tbl_languages` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_translations`
--

LOCK TABLES `tbl_translations` WRITE;
/*!40000 ALTER TABLE `tbl_translations` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_translations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_two_factor_auth_providers`
--

DROP TABLE IF EXISTS `tbl_two_factor_auth_providers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_two_factor_auth_providers` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `area` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `enabled` tinyint(1) NOT NULL DEFAULT '0',
  `forced` tinyint(1) NOT NULL DEFAULT '0',
  `settings` text COLLATE utf8_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tbl_two_factor_auth_providers_name_area_unique` (`name`,`area`),
  KEY `tbl_two_factor_auth_providers_enabled_index` (`enabled`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_two_factor_auth_providers`
--

LOCK TABLES `tbl_two_factor_auth_providers` WRITE;
/*!40000 ALTER TABLE `tbl_two_factor_auth_providers` DISABLE KEYS */;
INSERT INTO `tbl_two_factor_auth_providers` VALUES (1,'google2fa','admin',0,0,NULL,'2017-06-01 08:31:32','2017-06-01 08:31:32'),(2,'yubikey','admin',0,0,NULL,'2017-06-01 08:31:32','2017-06-01 08:31:32'),(3,'google2fa','user',0,0,NULL,'2017-06-01 08:31:32','2017-06-01 08:31:32'),(4,'yubikey','user',0,0,NULL,'2017-06-01 08:31:32','2017-06-01 08:31:32');
/*!40000 ALTER TABLE `tbl_two_factor_auth_providers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_two_factor_auth_users`
--

DROP TABLE IF EXISTS `tbl_two_factor_auth_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_two_factor_auth_users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `provider_id` int(10) unsigned NOT NULL,
  `user_id` int(10) unsigned NOT NULL,
  `settings` text COLLATE utf8_unicode_ci,
  `enabled` tinyint(1) NOT NULL DEFAULT '0',
  `configured` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `tbl_two_factor_auth_users_provider_id_index` (`provider_id`),
  KEY `tbl_two_factor_auth_users_user_id_index` (`user_id`),
  CONSTRAINT `tbl_two_factor_auth_users_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `tbl_users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `tbl_two_factor_auth_users_provider_id_foreign` FOREIGN KEY (`provider_id`) REFERENCES `tbl_two_factor_auth_providers` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_two_factor_auth_users`
--

LOCK TABLES `tbl_two_factor_auth_users` WRITE;
/*!40000 ALTER TABLE `tbl_two_factor_auth_users` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_two_factor_auth_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_user_meta`
--

DROP TABLE IF EXISTS `tbl_user_meta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_user_meta` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `value` longtext COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tbl_user_meta_user_id_name_unique` (`user_id`,`name`),
  KEY `tbl_user_meta_user_id_index` (`user_id`),
  CONSTRAINT `tbl_user_meta_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `tbl_users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_user_meta`
--

LOCK TABLES `tbl_user_meta` WRITE;
/*!40000 ALTER TABLE `tbl_user_meta` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_user_meta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_user_role`
--

DROP TABLE IF EXISTS `tbl_user_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_user_role` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `role_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `tbl_user_role_user_id_role_id_index` (`user_id`,`role_id`),
  KEY `tbl_user_role_role_id_foreign` (`role_id`),
  CONSTRAINT `tbl_user_role_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `tbl_roles` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `tbl_user_role_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `tbl_users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_user_role`
--

LOCK TABLES `tbl_user_role` WRITE;
/*!40000 ALTER TABLE `tbl_user_role` DISABLE KEYS */;
INSERT INTO `tbl_user_role` VALUES (1,1,1,'2017-06-01 08:29:43','2017-06-01 08:29:43'),(2,2,3,'2017-06-01 08:29:43','2017-06-01 08:29:43'),(3,3,3,'2017-06-01 08:29:43','2017-06-01 08:29:43'),(4,4,3,'2017-06-01 08:29:43','2017-06-01 08:29:43'),(5,5,3,'2017-06-01 08:29:43','2017-06-01 08:29:43'),(6,6,3,'2017-06-01 08:29:43','2017-06-01 08:29:43'),(7,7,3,'2017-06-01 08:29:43','2017-06-01 08:29:43'),(8,8,3,'2017-06-01 08:29:43','2017-06-01 08:29:43'),(9,9,3,'2017-06-01 08:29:43','2017-06-01 08:29:43'),(10,10,3,'2017-06-01 08:29:43','2017-06-01 08:29:43'),(11,11,3,'2017-06-01 08:29:43','2017-06-01 08:29:43'),(12,12,3,'2017-06-01 08:29:43','2017-06-01 08:29:43'),(13,13,3,'2017-06-01 08:29:43','2017-06-01 08:29:43'),(14,14,3,'2017-06-01 08:29:44','2017-06-01 08:29:44'),(15,15,3,'2017-06-01 08:29:44','2017-06-01 08:29:44'),(16,16,3,'2017-06-01 08:29:44','2017-06-01 08:29:44'),(17,17,3,'2017-06-01 08:29:44','2017-06-01 08:29:44'),(18,18,3,'2017-06-01 08:29:44','2017-06-01 08:29:44'),(19,19,3,'2017-06-01 08:29:44','2017-06-01 08:29:44'),(20,20,3,'2017-06-01 08:29:44','2017-06-01 08:29:44'),(21,21,3,'2017-06-01 08:29:44','2017-06-01 08:29:44');
/*!40000 ALTER TABLE `tbl_user_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_users`
--

DROP TABLE IF EXISTS `tbl_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `firstname` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `lastname` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `status` int(11) DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tbl_users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_users`
--

LOCK TABLES `tbl_users` WRITE;
/*!40000 ALTER TABLE `tbl_users` DISABLE KEYS */;
INSERT INTO `tbl_users` VALUES (1,'lukasz.cirut@gmail.com','$2y$10$HanP0Cpy2rA3kMHizITepuGzPFVkPEJuJO0Du6qBMoR3Cr8cxlTUq','John','Doe',1,'dCwM3JCrvXsqzBtfl4P1KzcnXoa4E1qgXlJks0gS4EbRFvGvnEu7km0spkMv','2017-06-01 08:29:43','2017-06-01 08:29:43',NULL),(2,'0rashad74@schmidt.com','$2y$10$r6DCP19A3RMLUwKC7ZGMyewiTLYH7TVTqylg58sHH2MA8ZsbVC2zq','Mohamed','Schamberger',1,NULL,'2017-06-01 08:29:43','2017-06-01 08:29:43',NULL),(3,'1becker.virgil@reinger.com','$2y$10$BqWxzZIZJkvYsTV7xLDiCOhXRjMctxGeixBZNQJcapWQvPWb6cNjK','Jerald','Weimann',1,NULL,'2017-06-01 08:29:43','2017-06-01 08:29:43',NULL),(4,'2chad64@rempel.org','$2y$10$YOlCdw/ygQbVLbrez57gsuUMJJ/7xJ2MnBPXvQQpeRmKy03VudQ5G','Lilliana','Purdy',1,NULL,'2017-06-01 08:29:43','2017-06-01 08:29:43',NULL),(5,'3kelvin58@yahoo.com','$2y$10$H7i2sWQi047N4UCD4Wt89O9OwgdJEIJDnnWO0j3jpajIdIJyJkkMu','Albina','Ortiz',1,NULL,'2017-06-01 08:29:43','2017-06-01 08:29:43',NULL),(6,'4camren.quitzon@herman.info','$2y$10$scjU2AaVcRIubkKBFY2d0uYJn/7A7N9jtmllDyOeuUJZxF/7Wgmki','Jonathon','Kassulke',1,NULL,'2017-06-01 08:29:43','2017-06-01 08:29:43',NULL),(7,'5qdonnelly@bernier.biz','$2y$10$dsapaAx4IYCOEH9GSQ9yLuk1L6S0WJ9mIgabhNK0tpqLEOtX0tVwW','Crystel','Moen',1,NULL,'2017-06-01 08:29:43','2017-06-01 08:29:43',NULL),(8,'6mueller.frederick@greenholt.com','$2y$10$3XtaOrkmgg6M0otP5nZgmuaNA41BKDOEefcZpKGTT6Xl.ECwfyWT.','Llewellyn','Wintheiser',1,NULL,'2017-06-01 08:29:43','2017-06-01 08:29:43',NULL),(9,'7pierre.nader@dubuque.com','$2y$10$9zQqdT//yWdD0jsjW8lHqumO7vyZ6a6QGqL2NwOst2EQQJon.SrlK','Cordell','Jast',1,NULL,'2017-06-01 08:29:43','2017-06-01 08:29:43',NULL),(10,'8blittle@beahan.biz','$2y$10$k1FenzGG5zl3K0ZjWlijk.JYWyXk9LwKlWNr8rK/ytwGvuYQkRS.6','Melvin','Spencer',1,NULL,'2017-06-01 08:29:43','2017-06-01 08:29:43',NULL),(11,'9kshlerin.alena@hotmail.com','$2y$10$ZGllWVs9.NKRynTogazn/umR40924BsvNY3RwFnUNO9mqFINALu52','Vivienne','Jacobson',1,NULL,'2017-06-01 08:29:43','2017-06-01 08:29:43',NULL),(12,'10dubuque.frederic@maggio.biz','$2y$10$AaOFxSYQP5zRtcqFRtDA8u3Dfo909nVRQGyopQEQZOfD8PHter04K','Coralie','Roob',1,NULL,'2017-06-01 08:29:43','2017-06-01 08:29:43',NULL),(13,'11ibrekke@walsh.biz','$2y$10$amtH5V.IJfVyflkLxAad6uXRbuefJmjuUJ04p73LWxcap7RauVqSe','Kellen','Will',1,NULL,'2017-06-01 08:29:43','2017-06-01 08:29:43',NULL),(14,'12brekke.brycen@hotmail.com','$2y$10$s3vcqOW9HVyeO1nAMgFPm.CivepmKkYNWomZHR7mZ57Iz4OunrnGC','Bernard','Anderson',1,NULL,'2017-06-01 08:29:44','2017-06-01 08:29:44',NULL),(15,'13germaine69@hotmail.com','$2y$10$GHTtoEjVaDnDZ3xfp8x1Q.cf5bqZT5lsQIrCXtSTbXmebj6X7xKu2','Benjamin','Altenwerth',1,NULL,'2017-06-01 08:29:44','2017-06-01 08:29:44',NULL),(16,'14devan.raynor@yahoo.com','$2y$10$Cg1TwA2UHmPeYUMpG.I2bu6I2e/Zx4xHt/fCv7y./EyeelFXRu.E.','Heath','Dooley',1,NULL,'2017-06-01 08:29:44','2017-06-01 08:29:44',NULL),(17,'15xrempel@bins.info','$2y$10$Or01PcaXyntOwfS8p1JD2OUMniArQxMR2SPZCoD9W8/70JkSP25Ni','Darren','Hauck',1,NULL,'2017-06-01 08:29:44','2017-06-01 08:29:44',NULL),(18,'16kautzer.wiley@fadel.info','$2y$10$X58ivNNZrlID/XwxOL992.A9JkB5G.Qb6h9uf4NMqfCZvWnHhNaO6','Charity','Romaguera',1,NULL,'2017-06-01 08:29:44','2017-06-01 08:29:44',NULL),(19,'17cordelia57@gmail.com','$2y$10$QuPwBXBirbVAG4Wl/vtKd.lcTfTULC0oTEWb1YVueBTLP2U.LZDhW','Chase','Dickens',1,NULL,'2017-06-01 08:29:44','2017-06-01 08:29:44',NULL),(20,'18feest.leif@hotmail.com','$2y$10$doa4YtUQYVTzd0uCHIjVJ.ybuDCJBiSkeQjqXLgi2OY.O8lsOg9Ce','Jeffry','Boyle',1,NULL,'2017-06-01 08:29:44','2017-06-01 08:29:44',NULL),(21,'19hermiston.juliet@blick.com','$2y$10$r0J.8QMdiNWpkbOnMlYmYeiukfZDXk3R81CNDrKgo/3PjNwMLK3h6','Emmanuelle','Gusikowski',1,NULL,'2017-06-01 08:29:44','2017-06-01 08:29:44',NULL);
/*!40000 ALTER TABLE `tbl_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_users_activity`
--

DROP TABLE IF EXISTS `tbl_users_activity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_users_activity` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned DEFAULT NULL,
  `last_activity` datetime NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `tbl_users_activity_user_id` (`user_id`),
  CONSTRAINT `tbl_users_activity_user_id_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `tbl_users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_users_activity`
--

LOCK TABLES `tbl_users_activity` WRITE;
/*!40000 ALTER TABLE `tbl_users_activity` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_users_activity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_widget_types`
--

DROP TABLE IF EXISTS `tbl_widget_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_widget_types` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `slug` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `slug` (`slug`),
  KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_widget_types`
--

LOCK TABLES `tbl_widget_types` WRITE;
/*!40000 ALTER TABLE `tbl_widget_types` DISABLE KEYS */;
INSERT INTO `tbl_widget_types` VALUES (1,'default','Default Widget','Default widget type');
/*!40000 ALTER TABLE `tbl_widget_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_widgets`
--

DROP TABLE IF EXISTS `tbl_widgets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_widgets` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `type_id` int(10) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `type_id` (`type_id`),
  KEY `name` (`name`),
  CONSTRAINT `tbl_widgets_ibfk_1` FOREIGN KEY (`type_id`) REFERENCES `tbl_widget_types` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_widgets`
--

LOCK TABLES `tbl_widgets` WRITE;
/*!40000 ALTER TABLE `tbl_widgets` DISABLE KEYS */;
INSERT INTO `tbl_widgets` VALUES (1,1,'Content','2017-06-01 08:29:38',NULL,NULL),(2,1,'Content','2017-02-14 17:34:43',NULL,NULL),(3,1,'Activity Logs',NULL,NULL,NULL),(4,1,'Error Log Details Datatable Widget',NULL,NULL,NULL),(5,1,'Error Log Details Widget',NULL,NULL,NULL),(6,1,'User Details',NULL,NULL,NULL),(7,1,'Graph 4',NULL,NULL,NULL),(8,1,'Graph 1',NULL,NULL,NULL),(9,1,'Items Widget',NULL,NULL,NULL),(10,1,'Graph 2',NULL,NULL,NULL),(11,1,'Graph 3',NULL,NULL,NULL),(12,1,'Version Widget',NULL,NULL,NULL),(13,1,'User Tabs',NULL,NULL,NULL),(17,1,'Notifications Widget',NULL,NULL,NULL),(18,1,'Users Online',NULL,NULL,NULL),(19,1,'Sample UI Component',NULL,NULL,NULL),(20,1,'',NULL,NULL,NULL);
/*!40000 ALTER TABLE `tbl_widgets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_widgets_params`
--

DROP TABLE IF EXISTS `tbl_widgets_params`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_widgets_params` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `parent_id` int(10) unsigned DEFAULT NULL,
  `wid` int(10) unsigned NOT NULL,
  `uid` int(10) unsigned NOT NULL,
  `brand_id` int(10) unsigned NOT NULL,
  `resource` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `data` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`),
  KEY `parent_id` (`parent_id`),
  KEY `wid` (`wid`),
  KEY `uid` (`uid`),
  KEY `FK_tbl_widgets_params` (`brand_id`),
  KEY `tbl_widgets_custom_name_unique` (`name`),
  CONSTRAINT `tbl_widgets_params_ibfk_3` FOREIGN KEY (`uid`) REFERENCES `tbl_users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `tbl_widgets_params_ibfk_1` FOREIGN KEY (`parent_id`) REFERENCES `tbl_widgets_params` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION,
  CONSTRAINT `tbl_widgets_params_ibfk_2` FOREIGN KEY (`wid`) REFERENCES `tbl_widgets` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `tbl_widgets_params_ibfk_4` FOREIGN KEY (`brand_id`) REFERENCES `tbl_brands` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=272 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_widgets_params`
--

LOCK TABLES `tbl_widgets_params` WRITE;
/*!40000 ALTER TABLE `tbl_widgets_params` DISABLE KEYS */;
INSERT INTO `tbl_widgets_params` VALUES (202,NULL,3,1,1,'admin','activity_logs','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":7,\"height\":16,\"name\":\"Activity Logs\",\"classname\":\"Antares\\\\Logger\\\\Widgets\\\\ActivityLogsWidget\"}'),(206,NULL,10,1,1,'admin','graph2','{\"x\":\"6\",\"y\":\"0\",\"disabled\":false,\"width\":\"6\",\"height\":\"10\",\"name\":\"Graph 2\",\"classname\":\"Antares\\\\Modules\\\\SampleModule\\\\UiComponents\\\\GraphBarWidget\"}'),(208,NULL,8,1,1,'admin','graph1','{\"x\":\"0\",\"y\":\"0\",\"disabled\":false,\"width\":\"6\",\"height\":\"10\",\"name\":\"Graph 1\",\"classname\":\"Antares\\\\Modules\\\\SampleModule\\\\UiComponents\\\\OrdersWidget\"}'),(209,NULL,4,1,1,'admin','error_log_details_datatable_widget','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":3,\"height\":3,\"name\":\"Error Log Details Datatable Widget\",\"classname\":\"Antares\\\\Logger\\\\Widgets\\\\ErrorLogDetailsDatatableWidget\"}'),(210,NULL,5,1,1,'admin','error_log_details_widget','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":3,\"height\":3,\"name\":\"Error Log Details Widget\",\"classname\":\"Antares\\\\Logger\\\\Widgets\\\\ErrorLogDetailsWidget\"}'),(211,NULL,6,1,1,'admin','user_details','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":15,\"height\":2,\"name\":\"User Details\",\"classname\":\"Antares\\\\Logger\\\\Widgets\\\\UserDetailsWidget\"}'),(212,NULL,18,1,1,'admin','users_online','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":3,\"height\":11,\"name\":\"Users Online\",\"classname\":\"Antares\\\\Logger\\\\Widgets\\\\UsersOnline\"}'),(213,NULL,9,1,1,'admin','items_widget','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":10,\"height\":25,\"name\":\"Items Widget\",\"classname\":\"Antares\\\\Logger\\\\Widgets\\\\ItemsWidget\"}'),(214,NULL,19,1,1,'admin','sample_u_i_component','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":6,\"height\":10,\"name\":\"Sample UI Component\",\"classname\":\"Antares\\\\Modules\\\\SampleModule\\\\UiComponents\\\\SampleUIComponent\"}'),(215,NULL,17,1,1,'admin','notifications_widget','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":3,\"height\":9,\"name\":\"Notifications Widget\",\"classname\":\"Antares\\\\Notifications\\\\Widgets\\\\NotificationSender\\\\NotificationsWidget\"}'),(216,NULL,20,1,1,'admin','','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":6,\"height\":10,\"name\":\"\",\"classname\":\"Antares\\\\Modules\\\\SampleModule\\\\UiComponents\\\\Templates\\\\SampleUIComponentTemplate\"}'),(217,NULL,3,1,1,'admin/logout','activity_logs','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":7,\"height\":16,\"name\":\"Activity Logs\",\"classname\":\"Antares\\\\Logger\\\\Widgets\\\\ActivityLogsWidget\"}'),(218,NULL,4,1,1,'admin/logout','error_log_details_datatable_widget','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":3,\"height\":3,\"name\":\"Error Log Details Datatable Widget\",\"classname\":\"Antares\\\\Logger\\\\Widgets\\\\ErrorLogDetailsDatatableWidget\"}'),(219,NULL,5,1,1,'admin/logout','error_log_details_widget','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":3,\"height\":3,\"name\":\"Error Log Details Widget\",\"classname\":\"Antares\\\\Logger\\\\Widgets\\\\ErrorLogDetailsWidget\"}'),(220,NULL,6,1,1,'admin/logout','user_details','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":15,\"height\":2,\"name\":\"User Details\",\"classname\":\"Antares\\\\Logger\\\\Widgets\\\\UserDetailsWidget\"}'),(221,NULL,18,1,1,'admin/logout','users_online','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":3,\"height\":11,\"name\":\"Users Online\",\"classname\":\"Antares\\\\Logger\\\\Widgets\\\\UsersOnline\"}'),(222,NULL,10,1,1,'admin/logout','graph2','{\"x\":0,\"y\":0,\"disabled\":false,\"width\":6,\"height\":10,\"name\":\"Graph 2\",\"classname\":\"Antares\\\\Modules\\\\SampleModule\\\\UiComponents\\\\GraphBarWidget\"}'),(223,NULL,9,1,1,'admin/logout','items_widget','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":10,\"height\":25,\"name\":\"Items Widget\",\"classname\":\"Antares\\\\Logger\\\\Widgets\\\\ItemsWidget\"}'),(224,NULL,8,1,1,'admin/logout','graph1','{\"x\":0,\"y\":0,\"disabled\":false,\"width\":6,\"height\":10,\"name\":\"Graph 1\",\"classname\":\"Antares\\\\Modules\\\\SampleModule\\\\UiComponents\\\\OrdersWidget\"}'),(225,NULL,19,1,1,'admin/logout','sample_u_i_component','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":6,\"height\":10,\"name\":\"Sample UI Component\",\"classname\":\"Antares\\\\Modules\\\\SampleModule\\\\UiComponents\\\\SampleUIComponent\"}'),(226,NULL,17,1,1,'admin/logout','notifications_widget','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":3,\"height\":9,\"name\":\"Notifications Widget\",\"classname\":\"Antares\\\\Notifications\\\\Widgets\\\\NotificationSender\\\\NotificationsWidget\"}'),(227,NULL,20,1,1,'admin/logout','','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":6,\"height\":10,\"name\":\"\",\"classname\":\"Antares\\\\Modules\\\\SampleModule\\\\UiComponents\\\\Templates\\\\SampleUIComponentTemplate\"}'),(228,NULL,3,1,1,'admin/branding','activity_logs','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":7,\"height\":16,\"name\":\"Activity Logs\",\"classname\":\"Antares\\\\Logger\\\\Widgets\\\\ActivityLogsWidget\"}'),(229,NULL,4,1,1,'admin/branding','error_log_details_datatable_widget','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":3,\"height\":3,\"name\":\"Error Log Details Datatable Widget\",\"classname\":\"Antares\\\\Logger\\\\Widgets\\\\ErrorLogDetailsDatatableWidget\"}'),(230,NULL,5,1,1,'admin/branding','error_log_details_widget','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":3,\"height\":3,\"name\":\"Error Log Details Widget\",\"classname\":\"Antares\\\\Logger\\\\Widgets\\\\ErrorLogDetailsWidget\"}'),(231,NULL,6,1,1,'admin/branding','user_details','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":15,\"height\":2,\"name\":\"User Details\",\"classname\":\"Antares\\\\Logger\\\\Widgets\\\\UserDetailsWidget\"}'),(232,NULL,18,1,1,'admin/branding','users_online','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":3,\"height\":11,\"name\":\"Users Online\",\"classname\":\"Antares\\\\Logger\\\\Widgets\\\\UsersOnline\"}'),(233,NULL,10,1,1,'admin/branding','graph2','{\"x\":0,\"y\":0,\"disabled\":false,\"width\":6,\"height\":10,\"name\":\"Graph 2\",\"classname\":\"Antares\\\\Modules\\\\SampleModule\\\\UiComponents\\\\GraphBarWidget\"}'),(234,NULL,9,1,1,'admin/branding','items_widget','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":10,\"height\":25,\"name\":\"Items Widget\",\"classname\":\"Antares\\\\Logger\\\\Widgets\\\\ItemsWidget\"}'),(235,NULL,8,1,1,'admin/branding','graph1','{\"x\":0,\"y\":0,\"disabled\":false,\"width\":6,\"height\":10,\"name\":\"Graph 1\",\"classname\":\"Antares\\\\Modules\\\\SampleModule\\\\UiComponents\\\\OrdersWidget\"}'),(236,NULL,19,1,1,'admin/branding','sample_u_i_component','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":6,\"height\":10,\"name\":\"Sample UI Component\",\"classname\":\"Antares\\\\Modules\\\\SampleModule\\\\UiComponents\\\\SampleUIComponent\"}'),(237,NULL,17,1,1,'admin/branding','notifications_widget','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":3,\"height\":9,\"name\":\"Notifications Widget\",\"classname\":\"Antares\\\\Notifications\\\\Widgets\\\\NotificationSender\\\\NotificationsWidget\"}'),(238,NULL,20,1,1,'admin/branding','','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":6,\"height\":10,\"name\":\"\",\"classname\":\"Antares\\\\Modules\\\\SampleModule\\\\UiComponents\\\\Templates\\\\SampleUIComponentTemplate\"}'),(239,NULL,3,1,1,'admin/branding/area/{templateId}','activity_logs','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":7,\"height\":16,\"name\":\"Activity Logs\",\"classname\":\"Antares\\\\Logger\\\\Widgets\\\\ActivityLogsWidget\"}'),(240,NULL,4,1,1,'admin/branding/area/{templateId}','error_log_details_datatable_widget','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":3,\"height\":3,\"name\":\"Error Log Details Datatable Widget\",\"classname\":\"Antares\\\\Logger\\\\Widgets\\\\ErrorLogDetailsDatatableWidget\"}'),(241,NULL,5,1,1,'admin/branding/area/{templateId}','error_log_details_widget','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":3,\"height\":3,\"name\":\"Error Log Details Widget\",\"classname\":\"Antares\\\\Logger\\\\Widgets\\\\ErrorLogDetailsWidget\"}'),(242,NULL,6,1,1,'admin/branding/area/{templateId}','user_details','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":15,\"height\":2,\"name\":\"User Details\",\"classname\":\"Antares\\\\Logger\\\\Widgets\\\\UserDetailsWidget\"}'),(243,NULL,18,1,1,'admin/branding/area/{templateId}','users_online','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":3,\"height\":11,\"name\":\"Users Online\",\"classname\":\"Antares\\\\Logger\\\\Widgets\\\\UsersOnline\"}'),(244,NULL,10,1,1,'admin/branding/area/{templateId}','graph2','{\"x\":0,\"y\":0,\"disabled\":false,\"width\":6,\"height\":10,\"name\":\"Graph 2\",\"classname\":\"Antares\\\\Modules\\\\SampleModule\\\\UiComponents\\\\GraphBarWidget\"}'),(245,NULL,9,1,1,'admin/branding/area/{templateId}','items_widget','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":10,\"height\":25,\"name\":\"Items Widget\",\"classname\":\"Antares\\\\Logger\\\\Widgets\\\\ItemsWidget\"}'),(246,NULL,8,1,1,'admin/branding/area/{templateId}','graph1','{\"x\":0,\"y\":0,\"disabled\":false,\"width\":6,\"height\":10,\"name\":\"Graph 1\",\"classname\":\"Antares\\\\Modules\\\\SampleModule\\\\UiComponents\\\\OrdersWidget\"}'),(247,NULL,19,1,1,'admin/branding/area/{templateId}','sample_u_i_component','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":6,\"height\":10,\"name\":\"Sample UI Component\",\"classname\":\"Antares\\\\Modules\\\\SampleModule\\\\UiComponents\\\\SampleUIComponent\"}'),(248,NULL,17,1,1,'admin/branding/area/{templateId}','notifications_widget','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":3,\"height\":9,\"name\":\"Notifications Widget\",\"classname\":\"Antares\\\\Notifications\\\\Widgets\\\\NotificationSender\\\\NotificationsWidget\"}'),(249,NULL,20,1,1,'admin/branding/area/{templateId}','','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":6,\"height\":10,\"name\":\"\",\"classname\":\"Antares\\\\Modules\\\\SampleModule\\\\UiComponents\\\\Templates\\\\SampleUIComponentTemplate\"}'),(250,NULL,3,1,1,'/','activity_logs','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":7,\"height\":16,\"name\":\"Activity Logs\",\"classname\":\"Antares\\\\Logger\\\\Widgets\\\\ActivityLogsWidget\"}'),(251,NULL,4,1,1,'/','error_log_details_datatable_widget','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":3,\"height\":3,\"name\":\"Error Log Details Datatable Widget\",\"classname\":\"Antares\\\\Logger\\\\Widgets\\\\ErrorLogDetailsDatatableWidget\"}'),(252,NULL,5,1,1,'/','error_log_details_widget','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":3,\"height\":3,\"name\":\"Error Log Details Widget\",\"classname\":\"Antares\\\\Logger\\\\Widgets\\\\ErrorLogDetailsWidget\"}'),(253,NULL,6,1,1,'/','user_details','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":15,\"height\":2,\"name\":\"User Details\",\"classname\":\"Antares\\\\Logger\\\\Widgets\\\\UserDetailsWidget\"}'),(254,NULL,18,1,1,'/','users_online','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":3,\"height\":11,\"name\":\"Users Online\",\"classname\":\"Antares\\\\Logger\\\\Widgets\\\\UsersOnline\"}'),(255,NULL,10,1,1,'/','graph2','{\"x\":0,\"y\":0,\"disabled\":false,\"width\":6,\"height\":10,\"name\":\"Graph 2\",\"classname\":\"Antares\\\\Modules\\\\SampleModule\\\\UiComponents\\\\GraphBarWidget\"}'),(256,NULL,9,1,1,'/','items_widget','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":10,\"height\":25,\"name\":\"Items Widget\",\"classname\":\"Antares\\\\Logger\\\\Widgets\\\\ItemsWidget\"}'),(257,NULL,8,1,1,'/','graph1','{\"x\":0,\"y\":0,\"disabled\":false,\"width\":6,\"height\":10,\"name\":\"Graph 1\",\"classname\":\"Antares\\\\Modules\\\\SampleModule\\\\UiComponents\\\\OrdersWidget\"}'),(258,NULL,19,1,1,'/','sample_u_i_component','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":6,\"height\":10,\"name\":\"Sample UI Component\",\"classname\":\"Antares\\\\Modules\\\\SampleModule\\\\UiComponents\\\\SampleUIComponent\"}'),(259,NULL,17,1,1,'/','notifications_widget','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":3,\"height\":9,\"name\":\"Notifications Widget\",\"classname\":\"Antares\\\\Notifications\\\\Widgets\\\\NotificationSender\\\\NotificationsWidget\"}'),(260,NULL,20,1,1,'/','','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":6,\"height\":10,\"name\":\"\",\"classname\":\"Antares\\\\Modules\\\\SampleModule\\\\UiComponents\\\\Templates\\\\SampleUIComponentTemplate\"}'),(261,NULL,3,1,1,'admin/settings/index','activity_logs','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":7,\"height\":16,\"name\":\"Activity Logs\",\"classname\":\"Antares\\\\Logger\\\\Widgets\\\\ActivityLogsWidget\"}'),(262,NULL,4,1,1,'admin/settings/index','error_log_details_datatable_widget','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":3,\"height\":3,\"name\":\"Error Log Details Datatable Widget\",\"classname\":\"Antares\\\\Logger\\\\Widgets\\\\ErrorLogDetailsDatatableWidget\"}'),(263,NULL,5,1,1,'admin/settings/index','error_log_details_widget','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":3,\"height\":3,\"name\":\"Error Log Details Widget\",\"classname\":\"Antares\\\\Logger\\\\Widgets\\\\ErrorLogDetailsWidget\"}'),(264,NULL,6,1,1,'admin/settings/index','user_details','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":15,\"height\":2,\"name\":\"User Details\",\"classname\":\"Antares\\\\Logger\\\\Widgets\\\\UserDetailsWidget\"}'),(265,NULL,18,1,1,'admin/settings/index','users_online','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":3,\"height\":11,\"name\":\"Users Online\",\"classname\":\"Antares\\\\Logger\\\\Widgets\\\\UsersOnline\"}'),(266,NULL,10,1,1,'admin/settings/index','graph2','{\"x\":0,\"y\":0,\"disabled\":false,\"width\":6,\"height\":10,\"name\":\"Graph 2\",\"classname\":\"Antares\\\\Modules\\\\SampleModule\\\\UiComponents\\\\GraphBarWidget\"}'),(267,NULL,9,1,1,'admin/settings/index','items_widget','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":10,\"height\":25,\"name\":\"Items Widget\",\"classname\":\"Antares\\\\Logger\\\\Widgets\\\\ItemsWidget\"}'),(268,NULL,8,1,1,'admin/settings/index','graph1','{\"x\":0,\"y\":0,\"disabled\":false,\"width\":6,\"height\":10,\"name\":\"Graph 1\",\"classname\":\"Antares\\\\Modules\\\\SampleModule\\\\UiComponents\\\\OrdersWidget\"}'),(269,NULL,19,1,1,'admin/settings/index','sample_u_i_component','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":6,\"height\":10,\"name\":\"Sample UI Component\",\"classname\":\"Antares\\\\Modules\\\\SampleModule\\\\UiComponents\\\\SampleUIComponent\"}'),(270,NULL,17,1,1,'admin/settings/index','notifications_widget','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":3,\"height\":9,\"name\":\"Notifications Widget\",\"classname\":\"Antares\\\\Notifications\\\\Widgets\\\\NotificationSender\\\\NotificationsWidget\"}'),(271,NULL,20,1,1,'admin/settings/index','','{\"x\":0,\"y\":0,\"disabled\":true,\"width\":6,\"height\":10,\"name\":\"\",\"classname\":\"Antares\\\\Modules\\\\SampleModule\\\\UiComponents\\\\Templates\\\\SampleUIComponentTemplate\"}');
/*!40000 ALTER TABLE `tbl_widgets_params` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary table structure for view `view_fields`
--

DROP TABLE IF EXISTS `view_fields`;
/*!50001 DROP VIEW IF EXISTS `view_fields`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `view_fields` (
  `id` tinyint NOT NULL,
  `brand_id` tinyint NOT NULL,
  `group_id` tinyint NOT NULL,
  `type_id` tinyint NOT NULL,
  `name` tinyint NOT NULL,
  `label` tinyint NOT NULL,
  `description` tinyint NOT NULL,
  `placeholder` tinyint NOT NULL,
  `value` tinyint NOT NULL,
  `force_display` tinyint NOT NULL,
  `additional_attributes` tinyint NOT NULL,
  `imported` tinyint NOT NULL,
  `options` tinyint NOT NULL,
  `option_values` tinyint NOT NULL,
  `category_name` tinyint NOT NULL,
  `group_name` tinyint NOT NULL,
  `namespace` tinyint NOT NULL,
  `type_name` tinyint NOT NULL,
  `type` tinyint NOT NULL,
  `validators` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Current Database: `foo`
--

USE `foo`;

--
-- Final view structure for view `permissions`
--

/*!50001 DROP TABLE IF EXISTS `permissions`*/;
/*!50001 DROP VIEW IF EXISTS `permissions`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_unicode_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `permissions` AS select `tc`.`id` AS `id`,`tp`.`brand_id` AS `brand_id`,`tc`.`vendor` AS `vendor`,`tc`.`name` AS `name`,`tc`.`status` AS `status`,`tc`.`options` AS `options`,group_concat(distinct `ta`.`id` order by `ta`.`id` DESC separator ';') AS `actions`,group_concat(distinct concat(`tp`.`role_id`,':',`tp`.`action_id`,'=',`tp`.`allowed`) order by `tp`.`id` ASC separator ';') AS `permissions` from ((`tbl_components` `tc` left join `tbl_actions` `ta` on((`tc`.`id` = `ta`.`component_id`))) left join `tbl_permissions` `tp` on(((`tc`.`id` = `tp`.`component_id`) and (`ta`.`id` = `tp`.`action_id`)))) group by `tp`.`brand_id`,`tc`.`id` order by `tc`.`id` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_fields`
--

/*!50001 DROP TABLE IF EXISTS `view_fields`*/;
/*!50001 DROP VIEW IF EXISTS `view_fields`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_unicode_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_fields` AS select `tf`.`id` AS `id`,`tf`.`brand_id` AS `brand_id`,`tf`.`group_id` AS `group_id`,`tf`.`type_id` AS `type_id`,`tf`.`name` AS `name`,`tf`.`label` AS `label`,`tf`.`description` AS `description`,`tf`.`placeholder` AS `placeholder`,`tf`.`value` AS `value`,`tf`.`force_display` AS `force_display`,`tf`.`additional_attributes` AS `additional_attributes`,`tf`.`imported` AS `imported`,group_concat(distinct concat(`tfto`.`id`,':',`tfto`.`value`) order by `tfto`.`id` DESC separator ';') AS `options`,group_concat(distinct concat(`tfto`.`value`,':',`tfto`.`label`) order by `tfto`.`label` DESC separator ';') AS `option_values`,`tfc`.`name` AS `category_name`,`tfg`.`name` AS `group_name`,group_concat(distinct concat(`tfc`.`name`,'.',`tfg`.`name`) order by `tfv`.`id` DESC separator ';') AS `namespace`,`tft`.`name` AS `type_name`,`tft`.`type` AS `type`,group_concat(distinct concat(`tfv`.`id`,':',`tfv`.`name`) order by `tfv`.`id` DESC separator ';') AS `validators` from ((((((`tbl_fields` `tf` left join `tbl_fields_groups` `tfg` on((`tf`.`group_id` = `tfg`.`id`))) left join `tbl_fields_categories` `tfc` on((`tfg`.`category_id` = `tfc`.`id`))) left join `tbl_fields_types` `tft` on((`tf`.`type_id` = `tft`.`id`))) left join `tbl_fields_types_options` `tfto` on((`tf`.`id` = `tfto`.`field_id`))) left join `tbl_fields_validators_config` `tfvc` on((`tf`.`id` = `tfvc`.`field_id`))) left join `tbl_fields_validators` `tfv` on((`tfvc`.`validator_id` = `tfv`.`id`))) group by `tf`.`id` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-06-01 12:27:19
