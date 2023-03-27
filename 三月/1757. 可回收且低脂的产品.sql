-- 1757. 可回收且低脂的产品
-- SQL
SELECT P.product_id FROM Products AS p WHERE p.low_fats = "Y" AND p.recyclable = "Y"