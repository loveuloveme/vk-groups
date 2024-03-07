import { User } from '@/types';
import { Accordion } from '@vkontakte/vkui';
import { ComponentProps } from 'react';

export interface IFriendListProps extends ComponentProps<typeof Accordion> {
    friends: User[]
}