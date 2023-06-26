import faker from '@faker-js/faker';
import httpStatus from 'http-status';
import * as jwt from 'jsonwebtoken';
import supertest from 'supertest';
import { cleanDb, generateValidToken } from '../helpers';
import app, { init } from '../../src/app';
import { createMonster, createUser } from '../factories';

beforeAll(async () => {
    await init();
});

beforeEach(async () => {
    await cleanDb();
});

const server = supertest(app);

describe('GET /monsters', () => {
    it('should respond with status 401 if no token is given', async () => {
        const response = await server.get('/monsters');

        expect(response.status).toBe(httpStatus.UNAUTHORIZED);
    });

    it('should respond with status 401 if given token is not valid', async () => {
        const token = faker.lorem.word();

        const response = await server.get('/monsters').set('Authorization', `Bearer ${token}`);

        expect(response.status).toBe(httpStatus.UNAUTHORIZED);
    });

    it('should respond with status 401 if there is no session for given token', async () => {
        const userWithoutSession = await createUser();
        const token = jwt.sign({ userId: userWithoutSession.id }, process.env.JWT_SECRET);

        const response = await server.get('/monsters').set('Authorization', `Bearer ${token}`);

        expect(response.status).toBe(httpStatus.UNAUTHORIZED);
    });

    describe('when token is valid', () => {
        it('should respond with status 200 and with monsters data', async () => {
            const user = await createUser();
            const token = await generateValidToken(user);
            const monster = await createMonster(user.id);

            const response = await server.get('/monsters').set('Authorization', `Bearer ${token}`);

            expect(response.status).toEqual(httpStatus.OK);
            expect(response.body).toEqual([
                {
                    id: monster.id,
                    userId: monster.userId,
                    monster: monster.monster,
                    createdAt: monster.createdAt.toISOString(),
                    updatedAt: monster.updatedAt.toISOString(),
                },
            ]);
        });
    });
});

describe('GET /monsters/:id', () => {
    it('should respond with status 401 if no token is given', async () => {
        const response = await server.get('/monsters/1');

        expect(response.status).toBe(httpStatus.UNAUTHORIZED);
    });

    it('should respond with status 401 if given token is not valid', async () => {
        const token = faker.lorem.word();

        const response = await server.get('/monsters/1').set('Authorization', `Bearer ${token}`);

        expect(response.status).toBe(httpStatus.UNAUTHORIZED);
    });

    it('should respond with status 401 if there is no session for given token', async () => {
        const userWithoutSession = await createUser();
        const token = jwt.sign({ userId: userWithoutSession.id }, process.env.JWT_SECRET);

        const response = await server.get('/monsters/1').set('Authorization', `Bearer ${token}`);

        expect(response.status).toBe(httpStatus.UNAUTHORIZED);
    });

    describe('when token is valid', () => {
        it('should respond with status 404 when monster id not exist or not found', async () => {
            const user = await createUser();
            const token = await generateValidToken(user);

            const response = await server.get("/monsters/1").set('Authorization', `Bearer ${token}`);

            expect(response.status).toEqual(httpStatus.NOT_FOUND);
        });

        it('should respond with status 200 and with monster data', async () => {
            const user = await createUser();
            const token = await generateValidToken(user);
            const monster = await createMonster(user.id);

            const response = await server.get(`/monsters/${monster.id}`).set('Authorization', `Bearer ${token}`);

            expect(response.status).toEqual(httpStatus.OK);
            expect(response.body).toEqual(
                {
                    id: monster.id,
                    userId: monster.userId,
                    monster: monster.monster,
                    createdAt: monster.createdAt.toISOString(),
                    updatedAt: monster.updatedAt.toISOString(),
                },
            );
        });
    });
});

describe('POST /monsters', () => {
    it('should respond with status 401 if no token is given', async () => {
        const response = await server.post('/monsters');

        expect(response.status).toBe(httpStatus.UNAUTHORIZED);
    });

    it('should respond with status 401 if given token is not valid', async () => {
        const token = faker.lorem.word();

        const response = await server.post('/monsters').set('Authorization', `Bearer ${token}`);

        expect(response.status).toBe(httpStatus.UNAUTHORIZED);
    });

    it('should respond with status 401 if there is no session for given token', async () => {
        const userWithoutSession = await createUser();
        const token = jwt.sign({ userId: userWithoutSession.id }, process.env.JWT_SECRET);

        const response = await server.post('/monsters').set('Authorization', `Bearer ${token}`);

        expect(response.status).toBe(httpStatus.UNAUTHORIZED);
    });

    describe('when token is valid', () => {
        it('should respond with status 400 when is body invalid', async () => {
            const user = await createUser();
            const token = await generateValidToken(user);

            const response = await server.post('/monsters').set('Authorization', `Bearer ${token}`).send({});

            expect(response.status).toEqual(httpStatus.BAD_REQUEST);
        });

        it('should respond with status 201', async () => {
            const user = await createUser();
            const token = await generateValidToken(user);

            const monsterBody = {
                index: faker.name.firstName(),
                name: faker.name.firstName(),
                alignment: "Neutral",
                challenge_rating: 0,
                strength: 10,
                dexterity: 10,
                constitution: 10,
                intelligence: 10,
                wisdom: 10,
                charisma: 10,
                hit_dice: "2d12",
                hit_points: 28,
                hit_points_roll: "2d12+4",
                type: "Humanoid",
                size: "Medium",
                xp: 120,
                armor_class: "natural armor",
                actions: "optional",
                legendary_actions: "optional",
                damage_vulnerabilities: "optional",
                proficiencies: "optional",
                damage_resistances: "optional",
                damage_immunities: "optional",
                condition_immunities: "optional",
                special_abilities: "optional",
                languages: "optional",
                senses: "optional",
                speed: "optional",
            };

            const response = await server.post('/monsters').set('Authorization', `Bearer ${token}`).send(monsterBody);

            expect(response.status).toEqual(httpStatus.CREATED);
            expect(response.body).toEqual({
                id: expect.any(Number),
                userId: expect.any(Number),
                monster: monsterBody,
                createdAt: expect.any(String),
                updatedAt: expect.any(String)
              });
        });
    });
});

describe('PUT /monsters/:id', () => {
    it('should respond with status 401 if no token is given', async () => {
        const response = await server.put('/monsters/1');

        expect(response.status).toBe(httpStatus.UNAUTHORIZED);
    });

    it('should respond with status 401 if given token is not valid', async () => {
        const token = faker.lorem.word();

        const response = await server.put('/monsters/1').set('Authorization', `Bearer ${token}`);

        expect(response.status).toBe(httpStatus.UNAUTHORIZED);
    });

    it('should respond with status 401 if there is no session for given token', async () => {
        const userWithoutSession = await createUser();
        const token = jwt.sign({ userId: userWithoutSession.id }, process.env.JWT_SECRET);

        const response = await server.put('/monsters/1').set('Authorization', `Bearer ${token}`);

        expect(response.status).toBe(httpStatus.UNAUTHORIZED);
    });

    describe('when token is valid', () => {
        it('should respond with status 404 when monster id not exist or not found', async () => {
            const user = await createUser();
            const token = await generateValidToken(user);

            const monsterBody = {
                index: faker.name.firstName(),
                name: faker.name.firstName(),
                alignment: "Neutral",
                challenge_rating: 0,
                strength: 10,
                dexterity: 10,
                constitution: 10,
                intelligence: 10,
                wisdom: 10,
                charisma: 10,
                hit_dice: "2d12",
                hit_points: 28,
                hit_points_roll: "2d12+4",
                type: "Humanoid",
                size: "Medium",
                xp: 120,
                armor_class: "natural armor",
                actions: "optional",
                legendary_actions: "optional",
                damage_vulnerabilities: "optional",
                proficiencies: "optional",
                damage_resistances: "optional",
                damage_immunities: "optional",
                condition_immunities: "optional",
                special_abilities: "optional",
                languages: "optional",
                senses: "optional",
                speed: "optional",
            };

            const response = await server.put("/monsters/1").set('Authorization', `Bearer ${token}`).send(monsterBody);

            expect(response.status).toEqual(httpStatus.NOT_FOUND);
        });

        it('should respond with status 200', async () => {
            const user = await createUser();
            const token = await generateValidToken(user);
            const monster = await createMonster(user.id);

            const monsterBody = {
                index: faker.name.firstName(),
                name: faker.name.firstName(),
                alignment: "Neutral",
                challenge_rating: 0,
                strength: 10,
                dexterity: 10,
                constitution: 10,
                intelligence: 10,
                wisdom: 10,
                charisma: 10,
                hit_dice: "2d12",
                hit_points: 28,
                hit_points_roll: "2d12+4",
                type: "Humanoid",
                size: "Medium",
                xp: 120,
                armor_class: "natural armor",
                actions: "optional",
                legendary_actions: "optional",
                damage_vulnerabilities: "optional",
                proficiencies: "optional",
                damage_resistances: "optional",
                damage_immunities: "optional",
                condition_immunities: "optional",
                special_abilities: "optional",
                languages: "optional",
                senses: "optional",
                speed: "optional",
            };

            const response = await server.put(`/monsters/${monster.id}`).set('Authorization', `Bearer ${token}`).send(monsterBody);

            expect(response.status).toEqual(httpStatus.OK);
        });
    });
});

describe('DELETE /monsters/:id', () => {
    it('should respond with status 401 if no token is given', async () => {
        const response = await server.delete('/monsters/1');

        expect(response.status).toBe(httpStatus.UNAUTHORIZED);
    });

    it('should respond with status 401 if given token is not valid', async () => {
        const token = faker.lorem.word();

        const response = await server.delete('/monsters/1').set('Authorization', `Bearer ${token}`);

        expect(response.status).toBe(httpStatus.UNAUTHORIZED);
    });

    it('should respond with status 401 if there is no session for given token', async () => {
        const userWithoutSession = await createUser();
        const token = jwt.sign({ userId: userWithoutSession.id }, process.env.JWT_SECRET);

        const response = await server.delete('/monsters/1').set('Authorization', `Bearer ${token}`);

        expect(response.status).toBe(httpStatus.UNAUTHORIZED);
    });

    describe('when token is valid', () => {
        it('should respond with status 404 when monster id not exist or not found', async () => {
            const user = await createUser();
            const token = await generateValidToken(user);

            const response = await server.delete("/monsters/1").set('Authorization', `Bearer ${token}`);

            expect(response.status).toEqual(httpStatus.NOT_FOUND);
        });

        it('should respond with status 200', async () => {
            const user = await createUser();
            const token = await generateValidToken(user);
            const monster = await createMonster(user.id);

            const response = await server.delete(`/monsters/${monster.id}`).set('Authorization', `Bearer ${token}`);

            expect(response.status).toEqual(httpStatus.OK);
        });
    });
});