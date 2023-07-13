use bdcopa;

create table selecoes(
    id int not null primary key auto_increment,
    selecao varchar(25) not null,
    grupo char(1) not null
);

insert into selecoes(selecao, grupo) values('Brasil', 'A');
insert into selecoes(selecao, grupo) values('Croacia', 'A');
insert into selecoes(selecao, grupo) values('Mexico', 'A');
insert into selecoes(selecao, grupo) values('Camaroes', 'A');
insert into selecoes(selecao, grupo) values('Espanha', 'B');
insert into selecoes(selecao, grupo) values('Holanda', 'B');
insert into selecoes(selecao, grupo) values('Chile', 'B');
insert into selecoes(selecao, grupo) values('Australia', 'B');
insert into selecoes(selecao, grupo) values('Colombia', 'C');
insert into selecoes(selecao, grupo) values('Grecia', 'C');
insert into selecoes(selecao, grupo) values('Costa do Marfim', 'C');
insert into selecoes(selecao, grupo) values('Japao', 'C');
insert into selecoes(selecao, grupo) values('Uruguai', 'D');
insert into selecoes(selecao, grupo) values('Costa Rica', 'D');
insert into selecoes(selecao, grupo) values('Inglaterra', 'D');
insert into selecoes(selecao, grupo) values('Italia', 'D');
insert into selecoes(selecao, grupo) values('Suica', 'E');
insert into selecoes(selecao, grupo) values('Equador', 'E');

select * from selecoes;