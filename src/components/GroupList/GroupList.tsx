import { Panel, PanelHeader, Group, Header, Pagination } from '@vkontakte/vkui';
import { groups } from '../../mock';
import GroupFilters from '../GroupFilters/';
import GroupItem  from '../GroupItem/';

const GroupList = () => {
    return (
        <Panel id="groups">
            <PanelHeader
            >
                Список сообществ
            </PanelHeader>
            <GroupFilters />
            <Group
                header={
                    <Header mode="secondary">
                        Сообщества
                    </Header>
                }
            >
                {groups.map(group => <GroupItem {...group} key={`group-${group.id}`} />)}
            </Group>
            <Pagination
                currentPage={1}
                siblingCount={2}
                boundaryCount={1}
                totalPages={10}
                disabled={false}
            //onChange={handleChange}
            />
        </Panel>
    );
};

export default GroupList;