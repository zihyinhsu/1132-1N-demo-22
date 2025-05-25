CREATE TABLE product_22(
    id INT NOT NULL PRIMARY KEY,
    name VARCHAR(255),
    price REAL,
    category VARCHAR(255),
    img TEXT,
    remote_img TEXT
);

INSERT INTO product_22(id, name, price, category, img, remote_img) VALUES
(1, 'Emperor Bed', 21.99, 'Liddy', './images/product-1.jpg', 'https://gstzidlhkhikvmsxsfxk.supabase.co/storage/v1/object/public/zihyin-1n-22/product_22/product-1.jpg'),
(2, 'Accent Chair', 25.99, 'Caressa', './images/product-2.jpg', 'https://gstzidlhkhikvmsxsfxk.supabase.co/storage/v1/object/public/zihyin-1n-22/product_22/product-2.jpg'),
(3, 'High-Back Bench', 9.99, 'Ikea', './images/product-3.jpg', 'https://gstzidlhkhikvmsxsfxk.supabase.co/storage/v1/object/public/zihyin-1n-22/product_22/product-3.jpg'),
(4, 'Wooden Table', 19.99, 'Ikea', './images/product-4.jpg', 'https://gstzidlhkhikvmsxsfxk.supabase.co/storage/v1/object/public/zihyin-1n-22/product_22/product-4.jpg'),
(5, 'Dining Table', 6.99, 'Caressa', './images/product-5.jpg', 'https://gstzidlhkhikvmsxsfxk.supabase.co/storage/v1/object/public/zihyin-1n-22/product_22/product-5.jpg'),
(6, 'Entertainmint Center', 69.99, 'Liddy', './images/product-6.jpg', 'https://gstzidlhkhikvmsxsfxk.supabase.co/storage/v1/object/public/zihyin-1n-22/product_22/product-6.jpg'),
(7, 'Albany Sectional', 10.99, 'Ikea', './images/product-7.jpg', 'https://gstzidlhkhikvmsxsfxk.supabase.co/storage/v1/object/public/zihyin-1n-22/product_22/product-7.jpg'),
(8, 'Sofa Set', 69.99, 'Liddy', './images/product-8.jpg', 'https://gstzidlhkhikvmsxsfxk.supabase.co/storage/v1/object/public/zihyin-1n-22/product_22/product-8.jpg'),
(9, 'Utopia Sofa', 69.99, 'Liddy', './images/product-9.jpg', 'https://gstzidlhkhikvmsxsfxk.supabase.co/storage/v1/object/public/zihyin-1n-22/product_22/product-9.jpg'),
(10, 'Modern Bookshelf', 8.99, 'Marcos', './images/product-10.jpg', 'https://gstzidlhkhikvmsxsfxk.supabase.co/storage/v1/object/public/zihyin-1n-22/product_22/product-10.jpg'),
(11, 'Albany Table', 79.99, 'Marcos', './images/product-11.jpg', 'https://gstzidlhkhikvmsxsfxk.supabase.co/storage/v1/object/public/zihyin-1n-22/product_22/product-11.jpg'),
(12, 'Leather Sofa', 39.95, 'Liddy', './images/product-12.jpg', 'https://gstzidlhkhikvmsxsfxk.supabase.co/storage/v1/object/public/zihyin-1n-22/product_22/product-12.jpg');

-- UPDATE product_22
-- SET remote_img = CASE id
--   WHEN 1 THEN 'https://gstzidlhkhikvmsxsfxk.supabase.co/storage/v1/object/public/zihyin-1n-22/product_22/product-1.jpg'
--   WHEN 2 THEN 'https://gstzidlhkhikvmsxsfxk.supabase.co/storage/v1/object/public/zihyin-1n-22/product_22/product-2.jpg'
--   WHEN 3 THEN 'https://gstzidlhkhikvmsxsfxk.supabase.co/storage/v1/object/public/zihyin-1n-22/product_22/product-3.jpg'
--   WHEN 4 THEN 'https://gstzidlhkhikvmsxsfxk.supabase.co/storage/v1/object/public/zihyin-1n-22/product_22/product-4.jpg'
--   WHEN 5 THEN 'https://gstzidlhkhikvmsxsfxk.supabase.co/storage/v1/object/public/zihyin-1n-22/product_22/product-5.jpg'
--   WHEN 6 THEN 'https://gstzidlhkhikvmsxsfxk.supabase.co/storage/v1/object/public/zihyin-1n-22/product_22/product-6.jpg'
--   WHEN 7 THEN 'https://gstzidlhkhikvmsxsfxk.supabase.co/storage/v1/object/public/zihyin-1n-22/product_22/product-7.jpg'
--   WHEN 8 THEN 'https://gstzidlhkhikvmsxsfxk.supabase.co/storage/v1/object/public/zihyin-1n-22/product_22/product-8.jpg'
--   WHEN 9 THEN 'https://gstzidlhkhikvmsxsfxk.supabase.co/storage/v1/object/public/zihyin-1n-22/product_22/product-9.jpg'
--   WHEN 10 THEN 'https://gstzidlhkhikvmsxsfxk.supabase.co/storage/v1/object/public/zihyin-1n-22/product_22/product-10.jpg'
--   WHEN 11 THEN 'https://gstzidlhkhikvmsxsfxk.supabase.co/storage/v1/object/public/zihyin-1n-22/product_22/product-11.jpg'
--   WHEN 12 THEN 'https://gstzidlhkhikvmsxsfxk.supabase.co/storage/v1/object/public/zihyin-1n-22/product_22/product-12.jpg'
-- END
-- WHERE id IN (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);