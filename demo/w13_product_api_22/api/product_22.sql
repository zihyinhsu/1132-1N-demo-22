CREATE TABLE product_22(
    id INT NOT NULL PRIMARY KEY,
    name VARCHAR(255),
    price REAL,
    category VARCHAR(255),
    img TEXT,
    remote_img TEXT
);

INSERT INTO product_22(id, name, price, category, img, remote_img) VALUES
(1, 'Product 1', 10.99, 'Category 1', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'),
(2, 'Product 2', 20.99, 'Category 2', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'),
(3, 'Product 3', 30.99, 'Category 3', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'),
(4, 'Product 4', 40.99, 'Category 4', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'),
(5, 'Product 5', 50.99, 'Category 5', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150');