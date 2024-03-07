import { Group, Header, FormItem, FormLayoutGroup, Select, Button, Div } from '@vkontakte/vkui';
import { useEffect, useState } from 'react';
import { useGroupList } from '../GroupList/GroupListContext';
import { GroupFilter } from '@/types';
import useMockFetch from '@/hooks/useMockFetch';
import { getColors } from '@/mock';
import { IGroupFiltersProps } from './types';

import './index.css';

export const GroupFilters = (props: IGroupFiltersProps) => {
    const { onChange } = props;

    const [isPrivate, setPrivate] = useState<string>('');
    const [color, setColor] = useState<string>('');
    const [isFriends, setFriends] = useState<string>('');

    const { groups, isLoading } = useGroupList();

    const colors = useMockFetch(() => getColors());

    useEffect(() => {
        const filters: GroupFilter[] = [];

        if (isPrivate) {
            filters.push({
                key: 'closed',
                value: isPrivate === 'private' ? true : false
            });
        }

        if (color) {
            filters.push({
                key: 'avatar_color',
                value: color === 'without' ? undefined : color
            });
        }

        if (isFriends) {
            filters.push({
                key: 'friends',
                value: isFriends === 'with' ? true : false
            });
        }

        onChange(filters);
    }, [isPrivate, color, isFriends]);

    const resetFilter = () => {
        setPrivate('');
        setColor('');
        setFriends('');
    };

    const isDisabled = groups === null || isLoading;

    return (
        <Group header={<Header mode="secondary">Фильтры</Header>}>
            <FormLayoutGroup mode="horizontal">
                <FormItem
                    top="Тип приватности"
                >
                    <Select
                        disabled={isDisabled}
                        options={[
                            { label: 'Все', value: '' },
                            { label: 'Закрытая', value: 'private' },
                            { label: 'Открытая', value: 'public' },
                        ]}

                        value={isPrivate}
                        onChange={(e) => setPrivate(e.target.value)}
                    />
                </FormItem>
                <FormItem
                    top="Цвет"
                >
                    <Select
                        disabled={isDisabled || colors.isLoading}
                        options={[
                            { label: colors.isLoading ? 'Загрузка' : 'Все', value: '' },
                            { label: 'Нет', value: 'without' },
                            ...(!colors.isLoading ? colors.data!.map(color => ({ label: color, value: color })) : [])
                        ]}

                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                    />
                </FormItem>
                <FormItem
                    top="Наличие друзей"
                >
                    <Select
                        disabled={isDisabled}

                        options={[
                            { label: 'Все', value: '' },
                            { label: 'Да', value: 'with' },
                            { label: 'Нет', value: 'without' },
                        ]}

                        value={isFriends}
                        onChange={(e) => setFriends(e.target.value)}
                    />
                </FormItem>
            </FormLayoutGroup>
            <Div>
                <Button
                    stretched={true}
                    disabled={isDisabled}
                    mode='tertiary'
                    onClick={() => resetFilter()}
                >
                    Сбросить
                </Button>
            </Div>
        </Group>
    );
};
