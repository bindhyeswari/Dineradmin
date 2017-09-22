import request from 'superagent';

export function getUsers() {
    return new Promise((resolve, reject) => {
        request
            .get('/users')
            .end((err, res) => {
                if (err) reject(err);
                else resolve(res.body);
            });
    });
}