-- Active: 1674140464867@@35.226.146.116@3306@jbl-4416399-leonardo-souza
 CREATE TABLE IF NOT EXISTS labook_users(
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         password VARCHAR(255) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS labook_posts(
         id VARCHAR(255) PRIMARY KEY,
         photo VARCHAR(255) NOT NULL,
         description VARCHAR(255) NOT NULL,
         type ENUM("normal","event") DEFAULT "normal",
         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
         author_id VARCHAR(255),
         FOREIGN KEY (author_id) REFERENCES labook_users (id)
      );

      CREATE TABLE IF NOT EXISTS friendship(
         id VARCHAR(255) PRIMARY KEY,
         FK_user1 VARCHAR(255),
         FK_user2 varchar(255),
         FOREIGN KEY (FK_user1) REFERENCES labook_users (id),
         FOREIGN KEY (FK_user2) REFERENCES labook_users (id)
      );