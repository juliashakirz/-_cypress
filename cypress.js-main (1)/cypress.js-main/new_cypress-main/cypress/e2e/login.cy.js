describe('Автотесты на авторизацию', function () {
    
    it('Правильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/'); // посетить сайт

        cy.get('#mail').type('german@dolnikov.ru'); // найти инпут логин и написать в него верный логин
        cy.get('#pass').type('iLoveqastudio1'); // найти инпут пароль и написать в него верный пароль

        cy.get('#loginButton').click(); // найти кнопку войти и нажать на нее

        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // найти и проверить текст

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
         })
     

     it('Забыл пароль', function () {
        cy.visit('https://login.qa.studio/'); // посетить сайт
        
        cy.get('#forgotEmailButton').click(); // нажать забыл пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввести почту
        cy.get('#restoreEmailButton').click(); // клик кнопка
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // найти и проверить текст
        cy.get('#exitMessageButton > .exitIcon')
         })
       
    
    
    it('Правильный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // посетить сайт

        cy.get('#mail').type('german@dolnikov.ru'); // найти инпут логин и написать в него верный логин
        cy.get('#pass').type('iLoveqastudio'); // найти инпут пароль и написать в него неверный пароль
        
        cy.get('#loginButton').click(); // найти кнопку войти и нажать на нее

        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // найти и проверил текст

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
         })



    it('Не правильный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // посетить сайт

        cy.get('#mail').type('german@rolnikov.ru'); // найти инпут логин и написать в него неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // найти инпут пароль и написать в него верный пароль
        
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // найти и проверить текст

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
         })


     it('Проверка валидации', function () {
        cy.visit('https://login.qa.studio/'); // посетить сайт

        cy.get('#mail').type('germandolnikov.ru'); // найти инпут логин и написать в него не валидный логин
        cy.get('#pass').type('iLoveqastudio1'); // найти инпут пароль и написать в него  пароль
        
        cy.get('#loginButton').click(); // найти кнопку войти и нажать на нее

        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // найти и проверить текст

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
         })


     it('Проверка строчных букв', function () {
        cy.visit('https://login.qa.studio/'); // посетить сайт

        cy.get('#mail').type('GerMan@Dolnikov.ru'); // найти инпут логин и написать в него логин с большими буквами
        cy.get('#pass').type('iLoveqastudio1'); // найти инпут пароль и написать в него  пароль
        
        cy.get('#loginButton').click(); // найти кнопку войти и нажать на нее

        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // найти и проверить текст

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
         })
})
