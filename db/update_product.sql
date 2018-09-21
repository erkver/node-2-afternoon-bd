update products 
set description = $2
where product_id = $1;


select * from products
order by product_id asc;