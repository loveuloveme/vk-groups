import { Group, User } from './types';

export const users: User[] = [
    {
        first_name: 'Владислав',
        last_name: 'Юрченко'
    },
    {
        first_name: 'Сергей',
        last_name: 'Папикян'
    },
    {
        first_name: 'Иван',
        last_name: 'Рожновский'
    }
];

export const groups: Group[] = [
    {
        id: 0,
        name: 'Quokka',
        closed: true,
        avatar_color: '#323232',
        members_count: 100,
        friends: [...users.slice(0, 3)]
    },
    {
        id: 1,
        name: 'Пикабу',
        closed: false,
        avatar_color: '#e67e22',
        members_count: 100_000_000,
        friends: [...users.slice(1, 1)]
    },
    {
        id: 2,
        name: 'Кот Тихон',
        closed: true,
        members_count: 100,
        friends: [...users.slice(0, 3)]
    },
];