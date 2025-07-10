describe('Testes API auth', () => {

    it('Deve autenticar com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/auth',
            body: {
                username: 'admin',
                password: 'password123'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('token');
        });
    });

    it('Criar uma reserva', () => {
        cy.request({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/booking',
            body: {
                "firstname": "João",
                "lastname": "Silva",
                "totalprice": 150,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2024-12-01",
                    "checkout": "2024-12-05"
                },
                "additionalneeds": "Breakfast"
            }
        }).then((response) => {
            const bookingid = response.body.bookingid;
            expect(bookingid).to.exist;

            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('bookingid');
        });
    });

});