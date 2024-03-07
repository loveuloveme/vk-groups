import { Panel, PanelHeader, Group, Header, Pagination, PanelSpinner, Button, Placeholder, Div } from '@vkontakte/vkui';
import GroupFilters from '../GroupFilters/';
import GroupItem from '../GroupItem/';
import GroupListContext from './GroupListContext';
import { useEffect, useState } from 'react';
import useFetchGroups from '@/hooks/useFetchGroups';
import { Icon56UsersOutline } from '@vkontakte/icons';
import { GroupFilter } from '@/types';

const GroupList = (props: { id: string }) => {
    const { id } = props;

    const [page, setPage] = useState(0);
    const [limit] = useState(5);

    const [filters, setFilters] = useState<GroupFilter[]>([]);
    const { fetch: fetchGroups, data, groups, isLoading, error } = useFetchGroups(filters, limit, page * limit);

    useEffect(() => {
        setPage(0);
    }, [filters]);

    const handleRetry = () => {
        fetchGroups();
    };
    const content = (() => {
        if (isLoading) return (<PanelSpinner>Загрузка...</PanelSpinner>);

        if (error) return (
            <Placeholder
                icon={<Icon56UsersOutline />}
                header="Ошибка загрузки сообществ"
                action={
                    <Button
                        size="m"
                        onClick={handleRetry}
                    >
                        Попробовать ещё раз
                    </Button>
                }
            >
                Произошла ошибка при загрузке
            </Placeholder>
        );

        if (groups === null) return null;

        if (groups.length === 0) return (
            <Placeholder
                icon={<Icon56UsersOutline />}
                header="Ничего не найдено"
            >
                Не найдено ни одной группы с такими пареметрами
            </Placeholder>
        );

        return groups.map(group => <GroupItem {...group} key={`group-${group.id}`} />);
    })();

    return (
        <GroupListContext.Provider
            value={{ groups, isError: !!error, isLoading }}
        >
            <Panel id={id}>
                <PanelHeader
                >
                    Список сообществ
                </PanelHeader>
                <GroupFilters
                    onChange={_filters => setFilters(_filters)}
                />
                <Group
                    header={
                        <Header mode="secondary">
                            Сообщества
                        </Header>
                    }
                >
                    {content}
                </Group>

                {data?.total ?
                    <Div>
                        <Pagination
                            currentPage={page + 1}
                            siblingCount={2}
                            boundaryCount={1}
                            totalPages={Math.ceil(data.total / limit)}
                            disabled={isLoading}
                            onChange={page => setPage(page - 1)}
                        />
                    </Div>
                    : null
                }

            </Panel>
        </GroupListContext.Provider>
    );
};

export default GroupList;