import { GetGroupsResponse, Group, GroupFilter, User } from './types';
import { fakerRU as faker } from '@faker-js/faker';

faker.seed(2024);

export const users: User[] = [
    ...[...new Array(100).keys()].map(generateUser)
];

export const groups: Group[] = [
    ...[...new Array(100).keys()].map(generateGroup)
];

function generateUser(): User {
    return {
        last_name: faker.name.lastName(),
        first_name: faker.name.firstName()
    };
}

function generateGroup(): Group {
    return {
        id: faker.number.int(),
        name: faker.company.name(),
        closed: faker.datatype.boolean(),
        avatar_color: faker.color.rgb(),
        members_count: faker.number.int({ min: 10, max: 10_000_000 }),
        friends: Math.random() > 0.5 ? faker.helpers.arrayElements(users, { min: 0, max: 20 }) : undefined
    };
}

export function getColors(): Promise<string[]> {
    return new Promise((res) => {
        const _colors = new Set<string>();

        groups.forEach(group => {
            if (group.avatar_color) {
                _colors.add(group.avatar_color);
            }
        });

        setTimeout(() => res([..._colors]), 1_000);
    });
}

export function getGroups(filters: GroupFilter[], limit: number, skip: number): Promise<GetGroupsResponse> {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (faker.datatype.boolean({ probability: 0 })) {
                res({
                    result: 0
                });

                return;
            }

            if (faker.datatype.boolean({ probability: 0 })) {
                res({
                    result: 1
                });
                return;
            }

            if (faker.datatype.boolean({ probability: 0 })) {
                rej(new Error('Network Error'));
                return;
            }

            let _groups = groups;

            filters.forEach(filter => {
                let skipDefault = false;

                if (filter.key === 'friends') {
                    _groups = _groups.filter(group => filter.value ? group.friends && group.friends.length > 0 : !group.friends || group.friends.length === 0);
                    skipDefault = true;
                }

                if (!skipDefault) {
                    _groups = _groups.filter(group => group[filter.key] === filter.value);
                }
            });

            res({
                result: 1,
                data: _groups.slice(skip, skip + limit + 1),
                total: _groups.length
            });
        }, 1_000);
    });
}