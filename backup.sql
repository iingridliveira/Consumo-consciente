-- MySQL dump 10.13  Distrib 8.0.42, for Linux (x86_64)
--
-- Host: interchange.proxy.rlwy.net    Database: railway
-- ------------------------------------------------------
-- Server version	9.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tb_consumptions`
--

DROP TABLE IF EXISTS `tb_consumptions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_consumptions` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `Measurement` varchar(255) NOT NULL,
  `power` decimal(10,0) NOT NULL,
  `duration` decimal(10,0) NOT NULL,
  `days` decimal(10,0) NOT NULL,
  `resultConsumption` decimal(10,0) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `id_Product` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_Product` (`id_Product`),
  CONSTRAINT `tb_consumptions_ibfk_1` FOREIGN KEY (`id_Product`) REFERENCES `tb_products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_consumptions`
--

LOCK TABLES `tb_consumptions` WRITE;
/*!40000 ALTER TABLE `tb_consumptions` DISABLE KEYS */;
INSERT INTO `tb_consumptions` VALUES ('74c07fda-64c2-11f0-bd5b-a2aa0612ccd6','kWh',15,8,30,3600,'2025-07-19 17:04:39','2025-07-19 17:04:39','73ae79ab-f999-45f3-a2fc-439676977f5d'),('74c083a4-64c2-11f0-bd5b-a2aa0612ccd6','kWh',30,8,30,7200,'2025-07-19 17:04:39','2025-07-19 17:04:39','2e5a7a26-ac8d-499c-896a-c9713fbf8ea3'),('74c08452-64c2-11f0-bd5b-a2aa0612ccd6','kWh',45,8,30,10800,'2025-07-19 17:04:39','2025-07-19 17:04:39','99187f45-403f-4b86-9e39-265f0fbd50ed'),('74c084b6-64c2-11f0-bd5b-a2aa0612ccd6','kWh',28,8,30,6720,'2025-07-19 17:04:39','2025-07-19 17:04:39','7f9b69a7-354b-4f97-8d7e-659c05f84c93'),('74c08511-64c2-11f0-bd5b-a2aa0612ccd6','kWh',2,18,30,1080,'2025-07-19 17:04:39','2025-07-19 17:04:39','f7f54312-0050-4124-9523-b6d3bec68586'),('74c0856c-64c2-11f0-bd5b-a2aa0612ccd6','kWh',12,10,30,3600,'2025-07-19 17:04:39','2025-07-19 17:04:39','2f9fe331-95aa-4063-a045-5e58888f1d91'),('74c085c9-64c2-11f0-bd5b-a2aa0612ccd6','kWh',10,10,30,3000,'2025-07-19 17:04:39','2025-07-19 17:04:39','1fb2e964-ad96-4e10-bcd2-38ed2b4836e4'),('74c0861f-64c2-11f0-bd5b-a2aa0612ccd6','kWh',20,4,30,2400,'2025-07-19 17:04:39','2025-07-19 17:04:39','adac7f0b-1041-4ea3-8ae0-2fd4079a9426'),('74c08681-64c2-11f0-bd5b-a2aa0612ccd6','kWh',5,6,30,900,'2025-07-19 17:04:39','2025-07-19 17:04:39','0a3f1bc7-949d-4621-bc07-7b6d1b834745'),('74c086ce-64c2-11f0-bd5b-a2aa0612ccd6','kWh',3,8,30,720,'2025-07-19 17:04:39','2025-07-19 17:04:39','d2cc59ca-5282-438e-ab9a-bbe44528e10a'),('74c0871e-64c2-11f0-bd5b-a2aa0612ccd6','kWh',8,6,30,1440,'2025-07-19 17:04:39','2025-07-19 17:04:39','b439685e-f0c9-414a-961f-4c7b1e0a0429'),('74c08775-64c2-11f0-bd5b-a2aa0612ccd6','kWh',9,12,30,3240,'2025-07-19 17:04:39','2025-07-19 17:04:39','df713fe2-3c6f-4e51-8466-64a13b1dff2c'),('74c087ca-64c2-11f0-bd5b-a2aa0612ccd6','kWh',25,4,30,3000,'2025-07-19 17:04:39','2025-07-19 17:04:39','f51ee33c-fea6-4e0d-a280-77d1ed2bce71'),('74c08822-64c2-11f0-bd5b-a2aa0612ccd6','kWh',0,24,30,0,'2025-07-19 17:04:39','2025-07-19 17:04:39','aca9d359-c899-4913-bdc3-54f1c7054820'),('74c0887a-64c2-11f0-bd5b-a2aa0612ccd6','kWh',18,2,30,1080,'2025-07-19 17:04:39','2025-07-19 17:04:39','3d587572-a9a9-4b84-a39a-1d56e3dc1646'),('74c088e1-64c2-11f0-bd5b-a2aa0612ccd6','kWh',0,0,0,0,'2025-07-19 17:04:39','2025-07-19 17:04:39','adc40d53-eb5e-4f90-a5d5-7c95c601a350'),('74c0893a-64c2-11f0-bd5b-a2aa0612ccd6','kWh',500,2,30,30000,'2025-07-19 17:04:39','2025-07-19 17:04:39','2e69c847-8d0b-4b30-86b6-4d6c8bc91fa5'),('74c08990-64c2-11f0-bd5b-a2aa0612ccd6','kWh',40,6,30,7200,'2025-07-19 17:04:39','2025-07-19 17:04:39','dbd42d03-58ef-444f-a8e9-21b4436aa741'),('74c089e7-64c2-11f0-bd5b-a2aa0612ccd6','kWh',4,8,30,960,'2025-07-19 17:04:39','2025-07-19 17:04:39','afeac559-9f60-4e19-acb1-912c830a48d4'),('74c08a43-64c2-11f0-bd5b-a2aa0612ccd6','kWh',35,8,30,8400,'2025-07-19 17:04:39','2025-07-19 17:04:39','93e50810-8a6b-4867-91e6-0efbc9c4416d');
/*!40000 ALTER TABLE `tb_consumptions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_histories`
--

DROP TABLE IF EXISTS `tb_histories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_histories` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `origin` varchar(255) NOT NULL,
  `Image` varchar(255) NOT NULL,
  `Lifetime` varchar(255) NOT NULL,
  `Production_process` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `id_Product` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_Product` (`id_Product`),
  CONSTRAINT `tb_histories_ibfk_1` FOREIGN KEY (`id_Product`) REFERENCES `tb_products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_histories`
--

LOCK TABLES `tb_histories` WRITE;
/*!40000 ALTER TABLE `tb_histories` DISABLE KEYS */;
INSERT INTO `tb_histories` VALUES ('74bf49e3-64c2-11f0-bd5b-a2aa0612ccd6','Holanda','https://upload.wikimedia.org/wikipedia/commons/1/1d/Fairphone_5.png','7-10 anos','Produção ética com materiais reciclados e minerais de fontes responsáveis. Montagem modular para facilitar reparos e atualizações.','2025-07-19 17:04:39','2025-07-19 17:04:39','73ae79ab-f999-45f3-a2fc-439676977f5d'),('74bf4e23-64c2-11f0-bd5b-a2aa0612ccd6','China','https://i0.wp.com/sixcolors.com/wp-content/uploads/2022/06/m2air-hero-6c.png?ssl=1','8-12 anos','Fabricação com 100% de alumínio reciclado no gabinete. Processo de produção com energia renovável e embalagem livre de plástico.','2025-07-19 17:04:39','2025-07-19 17:04:39','2e5a7a26-ac8d-499c-896a-c9713fbf8ea3'),('74bf4e9c-64c2-11f0-bd5b-a2aa0612ccd6','China','https://media.goodereader.com/blog/uploads/images/2021/01/02063944/Dell_Latitude_7320_Detachable.png.webp','5-8 anos','Construído com 25% de plástico reciclado e embalagem 100% reciclável. Certificação EPEAT Gold para sustentabilidade.','2025-07-19 17:04:39','2025-07-19 17:04:39','99187f45-403f-4b86-9e39-265f0fbd50ed'),('74bf4eef-64c2-11f0-bd5b-a2aa0612ccd6','China','https://globaldesignnews.com/wp-content/uploads/2022/07/HP-Elite-Dragonfly-G3-by-HP-Design_5-1160x871.png','6-9 anos','Fabricado com plástico oceânico reciclado e alumínio CNC reciclado. Embalagem sustentável e processo de produção carbono neutro.','2025-07-19 17:04:39','2025-07-19 17:04:39','7f9b69a7-354b-4f97-8d7e-659c05f84c93'),('74bf4f31-64c2-11f0-bd5b-a2aa0612ccd6','China','https://www.citypng.com/public/uploads/preview/apple-watch-series-9-midnight-hd-transparent-png-116949941870prkq6f9wl.png','5-7 anos','Caixa de alumínio 100% reciclado. Produção com energia renovável e embalagem livre de plástico. Programa de trade-in ativo.','2025-07-19 17:04:39','2025-07-19 17:04:39','f7f54312-0050-4124-9523-b6d3bec68586'),('74bf4f7a-64c2-11f0-bd5b-a2aa0612ccd6','Coreia do Sul','https://static.vecteezy.com/system/resources/previews/046/591/922/non_2x/hq-transparent-mockup-of-samsung-galaxy-s24-ultra-free-png.png','4-6 anos','Incorpora materiais reciclados incluindo plástico oceânico. Embalagem eco-friendly e programa de reciclagem Galaxy Upcycling.','2025-07-19 17:04:39','2025-07-19 17:04:39','2f9fe331-95aa-4063-a045-5e58888f1d91'),('74bf4fb8-64c2-11f0-bd5b-a2aa0612ccd6','China','https://stratanetworks.com/wp-content/uploads/2023/12/Google-8-Hazel.png','5-7 anos','Fabricado com alumínio 100% reciclado e plástico reciclado. Embalagem livre de plástico e programa de trade-in sustentável.','2025-07-19 17:04:39','2025-07-19 17:04:39','1fb2e964-ad96-4e10-bcd2-38ed2b4836e4'),('74bf4ff9-64c2-11f0-bd5b-a2aa0612ccd6','China','https://kh.jbl.com/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwe1d73c95/1_JBL_FLIP6_HERO_PINK_29399_x1.png','8-10 anos','Construído com materiais reciclados e embalagem sustentável. Processo de fabricação com redução de 90% nas emissões de CO2.','2025-07-19 17:04:39','2025-07-19 17:04:39','adac7f0b-1041-4ea3-8ae0-2fd4079a9426'),('74bf5042-64c2-11f0-bd5b-a2aa0612ccd6','Jamaica','https://m.media-amazon.com/images/S/aplus-media/vc/48ca6617-a00a-4e9a-8021-08b69d1eeb7b.__CR0,0,970,600_PT0_SX970_V1___.jpg','10-15 anos','Fabricado com bambu sustentável, alumínio reciclado e tecido REWIND. Embalagem 100% reciclável e processo de produção eco-friendly.','2025-07-19 17:04:39','2025-07-19 17:04:39','0a3f1bc7-949d-4621-bc07-7b6d1b834745'),('74bf507e-64c2-11f0-bd5b-a2aa0612ccd6','China','https://logitech.com/mx-master/images/3s.jpg','5-8 anos','Construído com 70% de plástico reciclado pós-consumo. Embalagem de papel certificado FSC e programa de reciclagem de produtos.','2025-07-19 17:04:39','2025-07-19 17:04:39','d2cc59ca-5282-438e-ab9a-bbe44528e10a'),('74bf50b7-64c2-11f0-bd5b-a2aa0612ccd6','Japão','https://www.kabum.com.br/conteudo/descricao/93434/img/Imagem-2.jpg','8-12 anos','Fabricação com materiais de baixo impacto ambiental. Embalagem minimalista e processo de produção com energia renovável.','2025-07-19 17:04:39','2025-07-19 17:04:39','b439685e-f0c9-414a-961f-4c7b1e0a0429'),('74bf50f8-64c2-11f0-bd5b-a2aa0612ccd6','China','https://st.depositphotos.com/37365840/56750/i/600/depositphotos_567507630-stock-photo-philips-hue-light-bulbs-bridge.jpg','15-25 anos','LED de alta eficiência energética com vida útil estendida. Embalagem reciclável e programa de reciclagem de lâmpadas.','2025-07-19 17:04:39','2025-07-19 17:04:39','df713fe2-3c6f-4e51-8466-64a13b1dff2c'),('74bf5168-64c2-11f0-bd5b-a2aa0612ccd6','Filipinas','https://mediaserver.goepson.com/ImConvServlet/imconv/c7cc0f58388e8dc43eeacf0ea83a6bda08e82ba0/1200Wx1200H?use=banner&hybrisId=B2C&assetDescr=ET-4850_white_headon-output-ink-set-PC-EditorsChoice_690x460','5-8 anos','Sistema de tanque de tinta que reduz resíduos de cartuchos. Fabricação com materiais reciclados e embalagem sustentável.','2025-07-19 17:04:39','2025-07-19 17:04:39','f51ee33c-fea6-4e0d-a280-77d1ed2bce71'),('74bf51a7-64c2-11f0-bd5b-a2aa0612ccd6','China','https://pisces.bbystatic.com/image2/BestBuy_US/images/products/1722/1722039_sd.jpg;maxHeight=256;maxWidth=250?format=webp','10-15 anos','Alimentado por energia solar com painel fotovoltaico integrado. Construído com materiais reciclados e embalagem eco-friendly.','2025-07-19 17:04:39','2025-07-19 17:04:39','aca9d359-c899-4913-bdc3-54f1c7054820'),('74bf51e7-64c2-11f0-bd5b-a2aa0612ccd6','EUA','https://www.gonimble.com/cdn/shop/files/2025-Batteries_Category-Banner-Desktop_R1.jpg?v=1739814500','5-7 anos','Fabricado com 72.5% de materiais reciclados incluindo plástico oceânico. Embalagem livre de plástico e programa de reciclagem.','2025-07-19 17:04:39','2025-07-19 17:04:39','3d587572-a9a9-4b84-a39a-1d56e3dc1646'),('74bf5229-64c2-11f0-bd5b-a2aa0612ccd6','EUA','https://terracycle.com/zerowaste/images/service.jpg','Serviço contínuo','Plataforma de reciclagem de resíduos eletrônicos difíceis de reciclar. Processo de coleta e reciclagem com impacto ambiental positivo.','2025-07-19 17:04:39','2025-07-19 17:04:39','adc40d53-eb5e-4f90-a5d5-7c95c601a350'),('74bf5273-64c2-11f0-bd5b-a2aa0612ccd6','China','https://ecoflow.com/river2pro/images/station.jpg','10-15 anos','Bateria LiFePO4 de longa duração com materiais sustentáveis. Embalagem reciclável e processo de fabricação com energia limpa.','2025-07-19 17:04:39','2025-07-19 17:04:39','2e69c847-8d0b-4b30-86b6-4d6c8bc91fa5'),('74bf52b4-64c2-11f0-bd5b-a2aa0612ccd6','China','https://sonos.com/era100/images/speaker.jpg','10-15 anos','Fabricado com materiais reciclados incluindo plástico pós-consumo. Embalagem sustentável e programa de trade-in.','2025-07-19 17:04:39','2025-07-19 17:04:39','dbd42d03-58ef-444f-a8e9-21b4436aa741'),('74bf52f0-64c2-11f0-bd5b-a2aa0612ccd6','China','https://razer.com/viper/images/mini-se.jpg','3-5 anos','Construído com materiais reciclados e embalagem livre de plástico. Programa de reciclagem Razer Go Green.','2025-07-19 17:04:39','2025-07-19 17:04:39','afeac559-9f60-4e19-acb1-912c830a48d4'),('74bf5335-64c2-11f0-bd5b-a2aa0612ccd6','Taiwan','https://frame.work/laptop/images/13.jpg','10+ anos','Design modular para máxima reparabilidade e atualizações. Fabricação com materiais sustentáveis e embalagem 100% reciclável.','2025-07-19 17:04:39','2025-07-19 17:04:39','93e50810-8a6b-4867-91e6-0efbc9c4416d');
/*!40000 ALTER TABLE `tb_histories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_products`
--

DROP TABLE IF EXISTS `tb_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_products` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(30) NOT NULL,
  `category` varchar(30) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_products`
--

LOCK TABLES `tb_products` WRITE;
/*!40000 ALTER TABLE `tb_products` DISABLE KEYS */;
INSERT INTO `tb_products` VALUES ('0a3f1bc7-949d-4621-bc07-7b6d1b834745','House of Marley PV2','Fone de Ouvido','2025-07-19 17:04:39','2025-07-19 17:04:39'),('1fb2e964-ad96-4e10-bcd2-38ed2b4836e4','Google Pixel 8','Smartphone','2025-07-19 17:04:39','2025-07-19 17:04:39'),('2e5a7a26-ac8d-499c-896a-c9713fbf8ea3','MacBook Air M2','Notebook','2025-07-19 17:04:39','2025-07-19 17:04:39'),('2e69c847-8d0b-4b30-86b6-4d6c8bc91fa5','Ecoflow River 2 Pro','Estação de Energia','2025-07-19 17:04:39','2025-07-19 17:04:39'),('2f9fe331-95aa-4063-a045-5e58888f1d91','Samsung Galaxy S24','Smartphone','2025-07-19 17:04:39','2025-07-19 17:04:39'),('3d587572-a9a9-4b84-a39a-1d56e3dc1646','Nimble Portable Charger','Carregador','2025-07-19 17:04:39','2025-07-19 17:04:39'),('73ae79ab-f999-45f3-a2fc-439676977f5d','Fairphone 5','Smartphone','2025-07-19 17:04:39','2025-07-19 17:04:39'),('7f9b69a7-354b-4f97-8d7e-659c05f84c93','HP Elite Dragonfly G3','Notebook','2025-07-19 17:04:39','2025-07-19 17:04:39'),('93e50810-8a6b-4867-91e6-0efbc9c4416d','Framework Laptop 13','Notebook','2025-07-19 17:04:39','2025-07-19 17:04:39'),('99187f45-403f-4b86-9e39-265f0fbd50ed','Dell Latitude 7320','Notebook','2025-07-19 17:04:39','2025-07-19 17:04:39'),('aca9d359-c899-4913-bdc3-54f1c7054820','Logitech K750 Solar','Teclado','2025-07-19 17:04:39','2025-07-19 17:04:39'),('adac7f0b-1041-4ea3-8ae0-2fd4079a9426','JBL Flip 6 Eco','Caixa de Som','2025-07-19 17:04:39','2025-07-19 17:04:39'),('adc40d53-eb5e-4f90-a5d5-7c95c601a350','Terracycle Zero Waste','Serviço','2025-07-19 17:04:39','2025-07-19 17:04:39'),('afeac559-9f60-4e19-acb1-912c830a48d4','Razer Viper Mini SE','Mouse Gamer','2025-07-19 17:04:39','2025-07-19 17:04:39'),('b439685e-f0c9-414a-961f-4c7b1e0a0429','Wacom One by Wacom','Mesa Digitalizadora','2025-07-19 17:04:39','2025-07-19 17:04:39'),('d2cc59ca-5282-438e-ab9a-bbe44528e10a','Logitech MX Master 3S','Mouse','2025-07-19 17:04:39','2025-07-19 17:04:39'),('dbd42d03-58ef-444f-a8e9-21b4436aa741','Sonos Era 100','Caixa de Som','2025-07-19 17:04:39','2025-07-19 17:04:39'),('df713fe2-3c6f-4e51-8466-64a13b1dff2c','Philips Hue White','Lâmpada Inteligente','2025-07-19 17:04:39','2025-07-19 17:04:39'),('f51ee33c-fea6-4e0d-a280-77d1ed2bce71','Epson EcoTank ET-4850','Impressora','2025-07-19 17:04:39','2025-07-19 17:04:39'),('f7f54312-0050-4124-9523-b6d3bec68586','Apple Watch Series 9','Smartwatch','2025-07-19 17:04:39','2025-07-19 17:04:39');
/*!40000 ALTER TABLE `tb_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_spendings`
--

DROP TABLE IF EXISTS `tb_spendings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_spendings` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `currency` varchar(255) NOT NULL,
  `rate` decimal(10,0) NOT NULL,
  `resultSpeding` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `id_Consumption` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_Consumption` (`id_Consumption`),
  CONSTRAINT `tb_spendings_ibfk_1` FOREIGN KEY (`id_Consumption`) REFERENCES `tb_consumptions` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_spendings`
--

LOCK TABLES `tb_spendings` WRITE;
/*!40000 ALTER TABLE `tb_spendings` DISABLE KEYS */;
INSERT INTO `tb_spendings` VALUES ('74c1df78-64c2-11f0-bd5b-a2aa0612ccd6','BRL',1,22,'2025-07-19 17:04:39','2025-07-19 17:04:39','74c07fda-64c2-11f0-bd5b-a2aa0612ccd6'),('74c1e91f-64c2-11f0-bd5b-a2aa0612ccd6','BRL',1,43,'2025-07-19 17:04:39','2025-07-19 17:04:39','74c083a4-64c2-11f0-bd5b-a2aa0612ccd6'),('74c1eb17-64c2-11f0-bd5b-a2aa0612ccd6','BRL',1,65,'2025-07-19 17:04:39','2025-07-19 17:04:39','74c08452-64c2-11f0-bd5b-a2aa0612ccd6'),('74c1ec3d-64c2-11f0-bd5b-a2aa0612ccd6','BRL',1,40,'2025-07-19 17:04:39','2025-07-19 17:04:39','74c084b6-64c2-11f0-bd5b-a2aa0612ccd6'),('74c1ed2f-64c2-11f0-bd5b-a2aa0612ccd6','BRL',1,6,'2025-07-19 17:04:39','2025-07-19 17:04:39','74c08511-64c2-11f0-bd5b-a2aa0612ccd6'),('74c1ee0d-64c2-11f0-bd5b-a2aa0612ccd6','BRL',1,22,'2025-07-19 17:04:39','2025-07-19 17:04:39','74c0856c-64c2-11f0-bd5b-a2aa0612ccd6'),('74c1eedd-64c2-11f0-bd5b-a2aa0612ccd6','BRL',1,18,'2025-07-19 17:04:39','2025-07-19 17:04:39','74c085c9-64c2-11f0-bd5b-a2aa0612ccd6'),('74c1efb1-64c2-11f0-bd5b-a2aa0612ccd6','BRL',1,14,'2025-07-19 17:04:39','2025-07-19 17:04:39','74c0861f-64c2-11f0-bd5b-a2aa0612ccd6'),('74c1f08c-64c2-11f0-bd5b-a2aa0612ccd6','BRL',1,5,'2025-07-19 17:04:39','2025-07-19 17:04:39','74c08681-64c2-11f0-bd5b-a2aa0612ccd6'),('74c1f165-64c2-11f0-bd5b-a2aa0612ccd6','BRL',1,4,'2025-07-19 17:04:39','2025-07-19 17:04:39','74c086ce-64c2-11f0-bd5b-a2aa0612ccd6'),('74c1f254-64c2-11f0-bd5b-a2aa0612ccd6','BRL',1,9,'2025-07-19 17:04:39','2025-07-19 17:04:39','74c0871e-64c2-11f0-bd5b-a2aa0612ccd6'),('74c1f320-64c2-11f0-bd5b-a2aa0612ccd6','BRL',1,19,'2025-07-19 17:04:39','2025-07-19 17:04:39','74c08775-64c2-11f0-bd5b-a2aa0612ccd6'),('74c1f3ec-64c2-11f0-bd5b-a2aa0612ccd6','BRL',1,18,'2025-07-19 17:04:39','2025-07-19 17:04:39','74c087ca-64c2-11f0-bd5b-a2aa0612ccd6'),('74c1f4dc-64c2-11f0-bd5b-a2aa0612ccd6','BRL',1,0,'2025-07-19 17:04:39','2025-07-19 17:04:39','74c08822-64c2-11f0-bd5b-a2aa0612ccd6'),('74c1f5be-64c2-11f0-bd5b-a2aa0612ccd6','BRL',1,6,'2025-07-19 17:04:39','2025-07-19 17:04:39','74c0887a-64c2-11f0-bd5b-a2aa0612ccd6'),('74c1f6ae-64c2-11f0-bd5b-a2aa0612ccd6','BRL',1,0,'2025-07-19 17:04:39','2025-07-19 17:04:39','74c088e1-64c2-11f0-bd5b-a2aa0612ccd6'),('74c1f7c8-64c2-11f0-bd5b-a2aa0612ccd6','BRL',1,180,'2025-07-19 17:04:39','2025-07-19 17:04:39','74c0893a-64c2-11f0-bd5b-a2aa0612ccd6'),('74c1f87e-64c2-11f0-bd5b-a2aa0612ccd6','BRL',1,43,'2025-07-19 17:04:39','2025-07-19 17:04:39','74c08990-64c2-11f0-bd5b-a2aa0612ccd6'),('74c1f91e-64c2-11f0-bd5b-a2aa0612ccd6','BRL',1,6,'2025-07-19 17:04:39','2025-07-19 17:04:39','74c089e7-64c2-11f0-bd5b-a2aa0612ccd6'),('74c1f9cf-64c2-11f0-bd5b-a2aa0612ccd6','BRL',1,50,'2025-07-19 17:04:39','2025-07-19 17:04:39','74c08a43-64c2-11f0-bd5b-a2aa0612ccd6');
/*!40000 ALTER TABLE `tb_spendings` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-07-22 15:05:06
