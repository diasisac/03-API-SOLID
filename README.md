# App

Gym pass style app.

## (RFs) Requisitos funcionais

- [ ] Deve ser possível se cadastrar;
- [ ] Deve ser possível se autenticar;
- [ ] Deve ser possível obter um perfil de usuário logado;
- [ ] Deve ser possível obter um número de check-ins realizados pelo usuário logado;
- [ ] Deve ser possível o usuário obter o histórico de check-ins;
- [ ] Deve ser possível o usuário buscar academias próximas;
- [ ] Deve ser possível o usuário buscar academias pelo nome;
- [ ] Deve ser possível o usuário realizar check-in em uma academia;
- [ ] Deve ser possível validar o check-in de um usuário;
- [ ] Deve ser possível cadastrar uma academia; 

## (RNs) Regras de negócio

- [ ] O usuário não deve poder se cadastrar com e-mail duplicado;
- [ ] O usuário não pode fazer 2 check-ins no mesmo dia;
- [ ] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [ ] O check-in só pode ser validado até 20 minutos após criado;
- [ ] O check-in só pode ser validado por administradores

## (RNFs) Requisitos não-funcionais

- [ ] A senha do usuário deve estar criptografada;
- [ ] Os dados da aplicação deve estar persistidos em um banco de dados PostgresSQL;
- [ ] Todas listas de dados precisam estar páginadas com 20 itens por páginas;
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);