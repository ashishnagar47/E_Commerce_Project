# E-Commerce Project

## Database Setup

```shell
$mysql -u root
```

```mysql
create database eCommerceSite;

create  user eCommerceProjectUser identified with mysql_native_password by 'eCommerceProjectPass';

grant all privileges on eCommerceSite.* to eCommerceProjectUser;

flush privileges;
```